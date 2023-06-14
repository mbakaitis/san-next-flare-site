export const runtime = 'edge';

export async function generateStaticParams() {
  return [{ slug: 'article-one'}, {slug: 'article-two'}];
}

export default async function articlePage() {
   return (
    <div>
      <div>Hello</div>   
    </div>
  )
}