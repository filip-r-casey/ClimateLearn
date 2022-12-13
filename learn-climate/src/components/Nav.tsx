import { Navbar, Button } from "react-daisyui";

function Nav() {
  return (
    <Navbar className="sticky top-0">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">ClimateLearn</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Datasets</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}

export default Nav;
