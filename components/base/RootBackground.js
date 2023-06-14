// RootBackground creates the 'shaded stripe' that sits below the content on all
// pages.  It's not required and can be removed, but adds a 'column' that helps
// guide the eye on wider viewport sizes.  In order to have things like pure-css
// menus work, this needs to be fixed and dropped down on the z-axis so that
// things like TailwindCSS group and group pseudoselectors can work.  I think.

export default function RootBackground() {
  return (
    <div className="fixed inset-0 flex justify-center sm:px-8 fixed -z-10">
      <div className="flex w-full max-w-7xl lg:px-8 ">
        <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900  dark:ring-zinc-300/20" />
      </div>
    </div>
  )
}