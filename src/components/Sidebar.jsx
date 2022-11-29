import SocialNetworks from "./SocialNetworks";

import Avatar from "../images/photo.png";

import "../styles/components/sidebar.scss";
import InformationContainer from "./InformationContainer";

import cv from "../pdf/curriculoThiagoViana.pdf"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Thiago Viana" />
      <h1 className="name">Thiago Viana</h1>
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={cv} className="btn">Download curriculo</a>
    </aside>
  )
}

export default Sidebar;