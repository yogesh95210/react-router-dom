import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import NotFound from './components/NotFound.jsx'
import RedirectPage from './components/RedirectPage.jsx'

const router = createBrowserRouter([
   {
      path: "/",
      element: <App/>,
      errorElement: <NotFound />,
      children:[
        {path: "/", element: <Home />},
        {path: "/contact", element: <Contact />},
        {path: "/about", element: <About />},
        {path: "home", element: <RedirectPage />},
      ]
    },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
