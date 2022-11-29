import "../styles/components/maincontent.scss";

import AboutContainer from "./AboutContainer";
import FormationContainer from "./FormationContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechnologiesContainer from "./TechnologiesContainer";
import ExperienceContainer from "./ExperienceContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <FormationContainer />
      <ExperienceContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent;