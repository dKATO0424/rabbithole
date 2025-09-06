import { Link } from "react-router-dom";
import "./components.scss"

export default function Menu() {
  return (
    <nav className="menu">
      <div className="title">Menu</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li> | </li>
        <li><Link to="/history">History</Link></li>
      </ul>
    </nav>
  );
}