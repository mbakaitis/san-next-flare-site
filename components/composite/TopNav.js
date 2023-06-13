import Logo from '@/components/base/Logo';
import TopMenu from './TopMenu';

export default function TopNav() {
  return (
    <div className="border border-green-400 flex flex-row justify-between relative z-100">
      <Logo className="border border-purple-400" />
      <TopMenu className="inline h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 border border-red-500" />
    </div>
  )
}