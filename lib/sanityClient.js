
// HEY YOU

// YES YOU

// These functions are build with a specific schema in mind.  The peer project
// with a Sanity studio setup and schema is at https://github.com/mbakaitis/san-next-flare-cms

// So for *this* project to work, you need to have that project working first.

// If you are already an expert at all this stuff?  Move along and build your own project?  :)

// but if you are just learning, this is here to provide examples on how to make GROQ calls
// and similar things.  It was build really fast, and needs to be optimized.  But it works for now.

import { createClient } from '@sanity/client';

export const client = await createClient({
  projectId: process.env.SANITY_STUDIO_EXAMPLE_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_EXAMPLE_DATASET,
  useCdn: false,
  apiVersion: '2023-06-13',
  token: process.env.SANITY_STUDIO_EXAMPLE_TOKEN
});

// siteSettings is a singleton document in Sanity.
// we only need to grab the one document and parse out it's fields for use
export async function getSiteSettings() {
  const documentType = "siteSettings";
  const query = `*[ _type == $documentType ][0]`;
  const params = { documentType };
  const siteSettings = await client.fetch(query, params);
  return siteSettings;
}

// globalContent is another singleton.  We could probably clean this and
// getSiteSettings up with some kind of better function or I dunno.  for now,
// this is working and it's fast and probable good to keep things like settings
// divided from content.
export async function getGlobalContent(){
  const documentType = "globalContent";
  const query = `*[ _type == $documentType ][0]`;
  const params = { documentType };
  const siteSettings = await client.fetch(query, params);
  return siteSettings;
}

// this humble little query grabs all the published slugs that get used by
// next, vercel, and cloudflare to build the static pages ASAP.  Note the part
// where we screen out the drafts, based on the _id.  We could render all the
// drafts accidentally without that little logic.  see Sanity docs for details.
export async function getSlugs(documentType) {
  if (typeof documentType !== "string") {
    throw new Error("getSlug error: cannot query sanity without a valid document type specified");
  }
  const query = `*[_type == $documentType && !( _id in path("drafts.**") ) ]{_id, "slug": slug.current}`;
  const params = { documentType };
  const slugList = await client.fetch(query, params);
  return slugList;
}

// example of how to grab the 5 most recent published articles
export async function getArticleMostRecents() {
  const documentType = "article";
  const query = `*[_type== $documentType && !(_id in path('drafts.**'))] { _id, title, subtitle, "slug": slug.current}| order(_updatedAt desc)[0..4] `;
  const params = { documentType };
  const oneDocument = await client.fetch(query, params);
  return oneDocument
}

// this one is used on dynamic routes to get the content for that slug.  So this is a two-part process:
// 1. Next's `generateStaticParams` uses `getSlugs` to build a list of all pages to create
// 2. Then, when the dynamic route is called or rendered, this function looks at the route, grabs the content, and builds the page
export async function getDynamicRouteDocument(documentType, slug) {
  if (typeof documentType !== "string" && typeof slug !== "string") {
    throw new Error("getSlug error: cannot query sanity without a valid document type specified");
  }
  const query = `*[_type== $documentType && slug.current == $slug]{_id, slug, title, description, sections}[0]`;
  const params = { documentType, slug };
  const oneDocument = await client.fetch(query, params);
  return oneDocument
}