import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";

export default function Talks() {
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="Title">{talkSection.title}</h1>
          <p className="subTitle">{talkSection.subtitle}</p>
        </div>

        <div className="talk-cards-div">
          {talkSection.talks.map((talk, i) => {
            return (
              <TalkCard
                key={i}
                talkDetails={{
                  title: talk.title,
                  subtitle: talk.subtitle,
                  content: talk.content
                }}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
