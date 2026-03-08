import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

export default function Achievement() {
  if (!achievementSection.display) return null;

  return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="achievements">
          <div className="achievement-main-div">
            {/* Header */}
            <div className="achievement-header">
              <h1 className="Title">{achievementSection.title}</h1>
              <p className="subTitle">{achievementSection.subtitle}</p>
            </div>

            {/* Cards */}
            <div className="achievement-cards-div">
              {achievementSection.achievementsCards.map((card, i) => (
                  <AchievementCard
                      key={i}
                      cardInfo={{
                        title: card.title,
                        subtitle: card.subtitle,
                        image: card.image,       // local image
                        imageAlt: card.imageAlt, // local image alt text
                        footer: card.footer, // could be link or local image
                      }}
                  />
              ))}
            </div>
          </div>
        </div>
      </Fade>
  );
}
