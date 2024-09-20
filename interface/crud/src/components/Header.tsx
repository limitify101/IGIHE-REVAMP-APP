import img from '../assets/Igihe-Logo.png';
import {Search,EllipsisVertical} from 'lucide-react'
import { Input } from './ui/input';
import Avatar from './Avatar';
function Header() {
  return (
    <div className="fixed top-0 h-14 border flex justify-between items-center px-1 lg:justify-around lg:px-0 mx-auto w-full z-50 bg-slate-50">
      <div className='flex justify-between h-12 w-screen items-center '>
        <div>
          <img src={img} alt="Logo" className='object-contain h-10 flex-1 mx-2'/>
        </div>
        <div className='flex items-center mx-2 space-x-2'>
            <div>
                <Input type='text' placeholder='Search' size={27} icon={<Search size={20} strokeWidth={1}/>}/>
            </div>
            <div className='cursor-pointer lg:hidden'>
                <EllipsisVertical size={24} color='#0876BB' />
            </div>
            <div className='hidden lg:flex items-center space-x-1'>
                <Avatar name='Kalisa Aldrick'/>
                <p>K.Aldrick</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header