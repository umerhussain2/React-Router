import { Link } from "react-router-dom";
import "./css/Sidebar.css";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <Link to="https://reactrouter.com/en/main" target="_blank">
        react router official site
      </Link>

      <Link to="https://www.npmjs.com/package/react-router-dom" target="_blank">
        installation
      </Link>
    </aside>
  );
};

export default Sidebar;
