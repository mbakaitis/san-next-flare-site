import Link from 'next/link';

export default async function ArticlePage(){
  return(
    <div>
      Here are the published articles in our system:
      <ul className="list-disc list-inside">
        <li><Link href="/articles/article-one">Article one link</Link></li>
        <li><Link href="/articles/article-two">Articel two link</Link></li>
      </ul>
    </div>
  )
}