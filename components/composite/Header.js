import Logo from '@/components/base/Logo';
import Menu from '../base/Menu';

export default function TopNav() {
  return (
    <div className="flex flex-row justify-between pt-6">
      <Logo className="font-bold text-2xl" />
      <Menu />
    </div>
  )
}