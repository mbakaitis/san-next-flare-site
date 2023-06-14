import { getGlobalContent } from "@/lib/sanityClient"

export default async function HomePage(){
  const globalContent = await getGlobalContent();

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="lg:text-center">{globalContent.headline}</h1>
      <div className="lg:w-2/3 mb-14">{globalContent.intro}</div>
    </div>
  )
}