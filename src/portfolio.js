/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sabrina Cooke",
  title: "Kia Ora, I'm Sabrina",
  subTitle: "A Game Programmer and Educator from Aotearoa New Zealand building unique and immersive experiences.",
  resumeLink: "https://drive.google.com/file/d/1qTOt0GTjerJMFt8HkQEf2k5IM-3-Y0UF/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SabrinaTheCookie",
  linkedin: "https://www.linkedin.com/in/bree-cooke/",
  itch: "https://sabrinathecookie.itch.io/",
  gmail: "SabrinaLCooke@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Some big projects you have worked on

const projectsSection = {
  title: "Releases",
  subtitle: "Experiences that have made it into the world.",
  projects: [
    {
      image: require("./assets/images/skyline-enterprises.png"),
      imageAlt: "Skyline Virtual Luge Logo",
      title: "Skyline Virtual Luge",
      subtitle:
          "Based on the real luge experience in Queenstown New Zealand, this arcade experience features a custom motion platform, photorealistic 3D environments built in the Unreal Engine, and competitive multiplayer racing.",
      links: [
        {
          name: "View Trailer",
          content: {
            type: "iframe",
            src: "https://www.youtube.com/embed/r7UUMSHweUI",
            title: "Skyline Virtual Luge Trailer"
          }
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements"),
  subtitle:
    "Some cool stuff that I have done.",

  achievementsCards: [
    {
      title: "Game Developers Society Founder",
      subtitle:
        "I was one of the founding committee members of Game Developers Society (GDS) through to 2024, that during my time grew to 140 members, drew sponsorship from Dinosaur Polo Club and RedBull, and won an award for Best Arts Event Programme.",
      image: require("./assets/images/gdsLogo.png"),
      imageAlt: "Game Developers Society Logo",
      footer: [
        {
           name: "Award Night Photo",
          content: {
            type: "image",
            src: require("./assets/images/gdsAward.jpg"),
            title: "Award Night Photo"
          },
        }
      ]
    },
    {
      title: "Best Design Process Award",
      subtitle:
        "Won 'Best Design Process' for my capstone project, Tangled Visions in collaboration with RunawayPlay, given by University of Canterbury's School of Product Design'.",
      image: require("./assets/images/productDesignLogo.png"),
      imageAlt: "University of Canterbury School of Product Design Logo",
      footer: [
        {
          name: "Project Poster",
          content: {
            type: "image",
            src: require("./assets/images/TangledVisionsPoster.png"),
            title: "Tangled Visions Poster"
          },
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I love to take any opportunity to share my knowledge with the world."
  ),

  talks: [
    {
      title: "Game Developers Society 2025",
      subtitle: "Topic: Industry Pathways\n\nI was invited back to be a speaker at their annual industry night to reflect on my pathway and things I'm proud of and what I wish I did differently.",
      content: {
        type: "iframe",
        src: "https://docs.google.com/presentation/d/e/2PACX-1vQ_s3NEXobdnEPXe2QxytKTuj9B46ENtFLwZtJv88hMWdrZTamDkEbTd7TlGes5wtqgFV9mTMFHm2-Q/pubembed?start=true&loop=true&delayms=10000",
        title: "GDS Industry Night 2025"
      },
    },
    {
      title: "404 Talk Not Found",
      subtitle: "This will come soon I promise!\nGot an opportunity? Lets talk!",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Want to discuss a project, share an opportunity, or just want to say hi? My Inbox is open.",
  email_address: "sabrinaLcooke@gmail.com"
};

//#region Unused


const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  projectsSection,
  achievementSection,
  talkSection,
  contactInfo,
  isHireable,
};
