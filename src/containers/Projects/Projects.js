import Section from "../../components/Section/Section.js";
import {releasesSection, currentProjectsSection} from "../../portfolio";

export default function Projects() {
  return (
    <>
      <Section sectionData={releasesSection} id="releases" />
      <Section sectionData={currentProjectsSection} id="projects" />
    </>
  );
}
