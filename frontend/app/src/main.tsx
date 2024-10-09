import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import News from './pages/News.tsx'
import Politics from './pages/Politics.tsx'
import Sports from './pages/Sports.tsx'
import Culture from './pages/Culture.tsx'
import Health from './pages/Health.tsx'
import MainLayout from "./layouts/MainLayout.tsx"
import Economy from './pages/Economy.tsx'
import Fashion from './pages/Fashion.tsx'
import Technology from './pages/Technology.tsx'
import Tourism from './pages/Tourism.tsx'
import Religion from './pages/Religion.tsx'
import People from './pages/People.tsx'
import Environment from './pages/Environment.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"news",
        element:<News/>
      },
      {
        path:"politics",
        element:<Politics/>
      },
      {
        path:"sports",
        element:<Sports/>
      },
      {
        path:"economy",
        element:<Economy/>
      },
      {
        path:"culture",
        element:<Culture/>
      },
      {
        path:"health",
        element:<Health/>
      },
      {
        path:"fashion",
        element:<Fashion/>
      },
      {
        path:"technology",
        element:<Technology/>
      },
      {
        path:"tourism",
        element:<Tourism/>
      },
      {
        path:"religion",
        element:<Religion/>
      },
      {
        path:"people",
        element:<People/>
      },
      {
        path:"environment",
        element:<Environment/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
      <RouterProvider router={router}/>
)
