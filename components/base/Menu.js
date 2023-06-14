/*

For this demo, we're going to hard-code the links that will be in the menu.

I've been debating whether to hard code these in my own projects or if I should
store them in a document type in Sanity.  I think the long-term solution is to have
them in Sanity so that we don't have to do a pull request to update a menu!  We can
change the data in Sanity and then the site (and menus) will rebuild using the
same triggers/webhooks as other content.

*/

import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline'

export default function Menu() {
  return (
    <div className="flex flex-col items-center group bg-zinc-50 dark:bg-black ">
      <ul className="rtl-fix">
        <li><Bars3Icon className="inline h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 " /></li>
        <div className="hidden group-hover:flex group-hover:flex-col group-hover:whitespace-nowrap group-hover:justify-end group-hover:px-4 group-hover:bg-zinc-50 group-hover:dark:bg-black absolute ">
          <li><Link href="/articles">Articles</Link></li>
          <li><Link href="/keywords">Keywords</Link></li>
          <li><Link href="/settings">Site Settings</Link></li>
          <li><Link href="/globals">Global Content</Link></li>
        </div>
      </ul>
    </div>
  )
}