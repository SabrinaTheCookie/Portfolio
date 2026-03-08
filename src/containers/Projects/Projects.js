import "./Projects.scss";
import { projectsSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import Modal from "../../components/Modal/Modal"; // Import the reusable modal

export default function Projects() {
  const [modalContent, setModalContent] = useState(null);

  function openModal(content) {
    setModalContent(content);
  }

  function closeModal() {
    setModalContent(null);
  }

  if (!projectsSection.display) {
    return null;
  }

  return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="projects">
          <div>
            <h1 className="Title">{projectsSection.title}</h1>
            <p className="subTitle">{projectsSection.subtitle}</p>

            <div className="projects-container">
              {projectsSection.projects.map((project, i) => (
                  <div key={i} className="project-card">
                    {project.image && (
                        <div className="project-image">
                          <img
                              src={project.image}
                              alt={project.title}
                              className="card-image"
                          />
                        </div>
                    )}
                    <div className="project-detail">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-subtitle">{project.subtitle}</p>

                      {project.links && (
                          <div className="project-card-footer">
                            {project.links.map((link, idx) => (
                                <span
                                    key={idx}
                                    className="project-tag"
                                    onClick={() => openModal(link.content)}
                                >
                          {link.name}
                        </span>
                            ))}
                          </div>
                      )}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {modalContent && (
              <Modal show={true} onClose={closeModal}>
                <Modal.Content content={modalContent} />
              </Modal>
          )}
        </div>
      </Fade>
  );
}
