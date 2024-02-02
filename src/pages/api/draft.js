import { resolveHref } from '~/lib/sanity.links'

const token = process.env.SANITY_API_READ_TOKEN
if (!token) {
  throw new Error(
    'A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup.',
  )
}

export default async function preview(req, res) {
  if (!token) {
    res.status(500).send('Misconfigured server')
    return
  }
  const { query } = req

  const secret = typeof query.secret === 'string' ? query.secret : undefined
  const slug = typeof query.slug === 'string' ? query.slug : undefined
  const type = typeof query.type === 'string' ? query.type : undefined
  const draft = query.draft ? query.draft : undefined
  const reference = query.reference ? query.reference : undefined
  const sectionId = query.sectionId ? query.sectionId : undefined
  const location = type ? resolveHref(type, slug, sectionId) : '/'

  if (!secret) {
    res.status(401)
    res.send('Invalid secret')
    return
  }
  if (draft) {
    res.status(200)
    res.send(
      'Draft mode documents that are not published do not have a preview available.',
    )
    return
  }
  if (reference) {
    res.status(200)
    res.send(
      'The section has been published but has not been referenced on any page.',
    )
    return
  }
  res.setDraftMode({ enable: true })
  res.writeHead(307, {
    Location: location,
  })
  res.end()
  return
}
