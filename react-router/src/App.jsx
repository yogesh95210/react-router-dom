import { Navigate, RouterProvider ,createBrowserRouter} from 'react-router-dom';
import './App.css';
import DashBoardLayOut from './Layout/DashBoardLayOut';
import Profile from './components/Profile';
import Setting from './components/Setting';
function App() {
   
  const router = createBrowserRouter([
{
  path : "/dashboard",
  element: <DashBoardLayOut />,
  children: [
    {index: true, element: <Navigate to="profile" />},
    {path: "profile", element: <Profile />},
    {path: "setting", element: <Setting />},
  ]
}
  ])
  return (
    <RouterProvider router={router} />
    )
}

export default App
