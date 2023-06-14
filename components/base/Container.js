export default function Container({ children, className }) {
  return (
    <div className="mb-10 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  )
}
