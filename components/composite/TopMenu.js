import { Bars3Icon } from '@heroicons/react/24/outline'

export default function TopMenu({ className }) {
  return (
    <div className="flex flex-col justify-end rtl:overflow-visible  group">
      <table class="table-fixe rtl-fix">
        <thead>
          <tr>
            <th><Bars3Icon className={className} /></th>
          </tr>
        </thead>
        <tbody className="hidden group-hover:flex group-hover:flex-col group-hover:whitespace-nowrap group-hover:justify-end group-hover:mx-4 bg-white absolute">
          <tr >Item 1</tr>
          <tr >Item 2</tr>
          <tr >Item 3</tr>
        </tbody>
      </table>
      {/* <div>
        <Bars3Icon className={className}></Bars3Icon>
        <ul className="hidden group-hover:block bg-white absolute">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div> */}
    </div>
  )
}