import { getSlugs, getDynamicRouteDocument } from '@/lib/sanityClient';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';

export const runtime = 'edge';

export async function generateStaticParams() {

  const slugList = await getSlugs("article");
  return slugList.map((aSlug) => {
    return { slug: aSlug.slug }
  }
  );

}

export default async function articletPage({ params }) {
  const fetchArticle = await getDynamicRouteDocument("article", params.slug)
  if (!fetchArticle || fetchArticle === null) { notFound(); }

  // if we have lists in our portable text, we pass this into the PortableText so that we can specify how to render.
  const myComponents = {
    list: {
      bullet: ({ children }) => <ul className="list-disc">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal">{children}</ol>,
    },
  }

  return (
    <div>
      <div key={fetchArticle._id}>
        <h1 className="text-orange-600 text-center">{fetchArticle.title}</h1>
        {
          fetchArticle.description && fetchArticle.description !== null && fetchArticle.description !== undefined && <div className="m-auto prose dark:prose-invert pt-4">{fetchArticle.description}</div>
        }
        {fetchArticle.sections.map((section => (
          <div className="py-6 flex flex-col" key={section._key}>
            {
              section.title && <div className="m-auto"><h2 className="text-3xl text-gray-700 dark:text-gray-300 ">{section.title}</h2></div>
            }
            {
              section.content && <div className="prose dark:prose-invert m-auto w-2/3"><PortableText value={section.content} components={myComponents} /></div>
            }
          </div>
        )))
        }
      </div>
    </div>
  )
}