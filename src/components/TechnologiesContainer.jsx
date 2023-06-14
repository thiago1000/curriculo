import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiSass,
  DiIllustrator,
  DiPhotoshop
} from "react-icons/di";

import { IoLogoVue } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

import { 
  SiTailwindcss, 
  SiWordpress, 
  SiPhp,
  SiBootstrap,
  SiTypescript,
  SiNextdotjs
} from "react-icons/si";

import "../styles/components/technologiescontainer.scss";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "next", name: "Next js", icon: <SiNextdotjs /> },
  { id: "typescript", name: "Typescript", icon: <SiTypescript /> },
  { id: "vue", name: "Vue", icon: <IoLogoVue /> },
  { id: "tailwind", name: "Tailwind", icon: <SiTailwindcss /> },
  { id: "bootstrap", name: "Bootstrap", icon: <SiBootstrap /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "wordpress", name: "Wordpress", icon: <SiWordpress /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "php", name: "PHP", icon: <SiPhp /> },
  { id: "git", name: "Git", icon: <FaGitAlt /> },
  { id: "photoshop", name: "Photoshop", icon: <DiPhotoshop /> },
  { id: "illustrator", name: "Illustrator", icon: <DiIllustrator /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Conhecimentos</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;