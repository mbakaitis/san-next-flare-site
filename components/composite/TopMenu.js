import { Bars3Icon } from '@heroicons/react/24/outline'

export default function TopMenu({ className }) {
  return (
    <div className="flex flex-col justify-end rtl:overflow-visible group">
      <ul className="rtl-fix absolute">
        <li><Bars3Icon className={className} /></li>
        <div className="hidden border ltr-fix border-purple-300 group-hover:flex group-hover:flex-col group-hover:whitespace-nowrap group-hover:justify-end group-hover:px-4 bg-white absolute">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </div>
      </ul>
    </div>
  )
}