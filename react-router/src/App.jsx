import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
function App() {
    const router = createBrowserRouter([
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ])
  return (
    <>
    <h1>React Router</h1>
    <RouterProvider router={router} />
    </>
  )
}

export default App
