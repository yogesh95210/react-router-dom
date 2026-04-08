import { Link, Outlet } from "react-router-dom";
import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
//import About from "./components/About";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/home",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);
  return (
    <>
      <h1>React Router</h1>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/about">About</Link>  
      </nav>
      <Outlet />
    </>
  );
}

export default App;
