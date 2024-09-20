import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='m-0 p-0 w-full'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainLayout