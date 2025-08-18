import Styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <fotter className={Styles.fotter}>
        <p className={Styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </fotter>
    </div>
  );
}

export default Sidebar;
