import dncLogo from "../../assets/logo-dnc.png";
import "./index.scss";

const Header = () => {
  return <div className="header">
    <img src={dncLogo} alt="Logo Dnc" />
  </div>
};

export default Header;