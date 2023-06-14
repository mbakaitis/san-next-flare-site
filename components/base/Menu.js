import { Bars3Icon } from '@heroicons/react/24/outline'

export default function Menu() {
  return (
    <div className="flex flex-col items-center group bg-zinc-50 dark:bg-black ">
      <ul className="rtl-fix">
        <li><Bars3Icon className="inline h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 " /></li>
        <div className="hidden group-hover:flex group-hover:flex-col group-hover:whitespace-nowrap group-hover:justify-end group-hover:px-4 group-hover:bg-zinc-50 group-hover:dark:bg-black absolute ">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </div>
      </ul>
    </div>
  )
}