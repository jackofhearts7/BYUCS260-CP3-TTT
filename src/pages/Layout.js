import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
   <>


      <Outlet />
    </>
  )
};

export default Layout;

/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>*/