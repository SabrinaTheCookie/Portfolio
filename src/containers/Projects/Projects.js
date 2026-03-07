import "./Projects.scss";
import {projectsSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";


export default function Projects() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  
  if (!projectsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="Title">{projectsSection.title}</h1>
          <p
            className={"subTitle"
            }
          >
            {projectsSection.subtitle}
          </p>

          <div className="projects-container">
            {projectsSection.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={"project-card"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={"card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={"card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={"project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
