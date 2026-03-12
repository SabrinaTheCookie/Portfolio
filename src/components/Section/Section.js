import { Fade } from "react-awesome-reveal";
import Card from "../Card/Card";
import "./Section.scss";

/**
 * Generic Section component.
 * Renders a titled section containing a responsive grid of Card components.
 *
 * sectionData shape:
 * {
 *   title:   string
 *   subtitle: string  (optional)
 *   cards:   CardInfo[]  (see Card.js for CardInfo shape)
 *   display: boolean
 * }
 *
 * The optional `id` prop sets the anchor id on the section element,
 * e.g. id="releases" or id="achievements".
 */
export default function Section({ sectionData, id }) {
  if (!sectionData || !sectionData.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id={id}>
        <div>
          <h1 className="Title">{sectionData.title}</h1>
          {sectionData.subtitle && (
            <p className="subTitle">{sectionData.subtitle}</p>
          )}

          <div className="section-cards-div">
            {sectionData.cards.map((cardInfo, i) => (
              <Card key={i} cardInfo={cardInfo} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
