import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { Iframe } from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'

import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '~/lib/sanity.api'
import { documentTypesForWorkFlow, schemaTypes } from '~/schemas'
import { structureResolver } from '~/schemas/desk'
import { presentationTool } from 'sanity/presentation'
import { locate } from '~/lib/presentation/locate'
import { workflow } from 'sanity-plugin-workflow'
import BrandLogo from './src/components/logo-cms'
import { getClient } from './src/lib/sanity.client'
import { groq } from 'next-sanity'
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['navigation'])

const requiresSlug = ['page']

async function getPreviewUrl(doc) {
  const {
    slug: { current = '' } = {},
    _id: docId,
    _type: docType,
  } = (await doc) || {}
  if (docId?.startsWith('drafts') && !current) {
    return `${window.location.origin}/api/draft?type=page&slug=/&secret=${process.env.SANITY_API_EDITOR_TOKEN}&draft=true`
  } else if (current) {
    return `${window.location.origin}/api/draft?type=${docType}&slug=${current}&secret=${process.env.SANITY_API_EDITOR_TOKEN}`
  } else {
    const query = groq`*[_type == "page" && references(*[_type == '${docType}' && _id == '${docId}']._id)][0] {
    _id,
    "slug": slug.current,
    _type
  }`
    const client = getClient()
    const childDoc = await client.fetch(query)
    if (childDoc) {
      const { _type: childDocType, slug: childDocSlug } = childDoc
      const url = `${window.location.origin}/api/draft?type=${childDocType}&slug=${childDocSlug}&secret=${process.env.SANITY_API_EDITOR_TOKEN}&sectionId=${docId}`
      return url
    } else {
      const url = `${window.location.origin}/api/draft?type=page&mode=draft&slug=/&secret=${process.env.SANITY_API_EDITOR_TOKEN}&reference=not`
      return url
    }
  }
}

export const defaultDocumentNode = (S, { schemaType }) => {
  if (!singletonTypes.has(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc) => getPreviewUrl(doc),
        })
        .title('Preview'),
    ])
  } else {
    // Only show preview pane on `movie` schema type documents
    return S.document().views([S.view.form()])
  }
}

export default defineConfig({
  basePath: '/studio',
  name: 'demo',
  title: 'Netacea',
  projectId,
  dataset,
  icon: BrandLogo,
  //edit schemas in './src/schemas'
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  plugins: [
    deskTool({
      structure: structureResolver,
      defaultDocumentNode,
    }),
    // Add the "Open preview" action
    previewUrl({
      base: '/api/draft',
      requiresSlug,
      urlSecretId: previewSecretId,
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: '/api/presentation-draft',
        },
      },
    }),
    workflow({
      schemaTypes: documentTypesForWorkFlow,
    }),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
