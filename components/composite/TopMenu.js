import { Bars3Icon } from '@heroicons/react/24/outline'

export default function TopMenu({ className }) {
  return (
    <div className="flex flex-col justify-end rtl:overflow-visible  group">
      <table className="table-fixed rtl-fix">
        <thead>
          <tr>
            <th><Bars3Icon className={className} /></th>
          </tr>
        </thead>
        <tbody className="hidden border border-purple-300 group-hover:flex group-hover:flex-col group-hover:whitespace-nowrap group-hover:justify-end group-hover:px-4 bg-white absolute">
          <tr ><td>Item 1</td></tr>
          <tr ><td>Item 2</td></tr>
          <tr ><td>Item 3</td></tr>
        </tbody>
      </table>
    </div>
  )
}