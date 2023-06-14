import { getArticleMostRecents } from "@/lib/sanityClient"
import Link from 'next/link';

export default async function ArticlePage(){

  const mostRecentArticles = await getArticleMostRecents();

  return(
    <div>
      Here are the published articles in our system:
      <ul className="list-disc list-inside">
        {mostRecentArticles.map( (article) => {
          return (
          <li key={article._id}><Link href={"/articles/" + article.slug}>{article.title} - {article.subtitle} - {article.slug}</Link></li>
          )
        })}
      </ul>
    </div>
  )
}