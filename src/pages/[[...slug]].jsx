import { groq } from "next-sanity";
import React from "react";

import { getClient } from "~/lib/sanity.client";

import { navFragment } from "../components/layout";
import ModuleRenderer, { MODULE_FRAGMENT } from "../components/module-renderer";
import { getStaticPathsForDocumentType } from "../lib/getStaticPathsForDocumentType";
import SEO from "../components/seo";

export const getPageQuery = (slug) => groq`
[
  *[_type == "page" && slug.current == '${slug}'][0] {
    _type,
    "title": title,
    "slug": slug.current,
    ...,
    ${MODULE_FRAGMENT}
  },
  ${navFragment}
]
`;

const index = ({ page, seo }) => {
  return (
    <>
      <SEO {...seo} />
      <ModuleRenderer modules={page?.modules} />
    </>
  );
};

export const getStaticPaths = () => getStaticPathsForDocumentType("page");

export const getStaticProps = async ({ draftMode = false, params }) => {
  let slug = "/";
  if (Object.keys(params || {}).length) {
    const { slug: currentSlug } = params || {};
    slug = currentSlug?.join("/");
  }

  const client = getClient(draftMode ? readToken : undefined);
  if (!slug) throw new Error("No slug provided");
  const pageQuery = getPageQuery(slug);

  const data = await client.fetch(pageQuery);
  if (data?.length === 0) {
    return {
      notFounnd: true,
      props: {},
    };
  }
  const { metaDescription = "", seoTitle = "" } = data[0] || {};

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : "",
      page: data[0],
      navigation: data[1],
      slug: data[0]?.slug,
      seo: {
        metaDescription,
        seoTitle,
      },
    },
  };
};

export default index;
