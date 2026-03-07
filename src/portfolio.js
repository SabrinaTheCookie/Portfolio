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
  title: "Projects",
  subtitle: "Experiences that have made it into the world.",
  projects: [
    {
      image: require("./assets/images/skyline-enterprises.png"),
      projectName: "Skyline Virtual Luge",
      projectDesc:
        "Based on the real luge experience in Queenstown New Zealand, this arcade experience features a custom motion platform, photorealistic 3D environments built in the unreal enginer, and competitive multiplayer racing.",
      footerLink: [
        {
          name: "View Trailer",
          url: "https://www.youtube.com/watch?v=r7UUMSHweUI&ab_channel=CerebralFix"
        },
        {
          name: "Visit Website",
          url: "https://queenstown.skyline.co.nz/things-to-do/other-activities/skyline-luge-racing/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
        "I was one of the founding members of Game Developers Society, that during my time grew to 140 members, drew sponsorship from Dinosaur Poloclub and Redbull, and won an award for Best Arts Event Programme.",
      image: require("./assets/images/gdsLogo.png"),
      imageAlt: "Game Developers Society Logo",
      footerLink: [
        {
           name: "Award Night Photo",
           url: "https://drive.google.com/file/d/1nty9yjki8Cejfdtxm0r73hw3IjQfdx0P/view?usp=sharing"
        }
      ]
    },
    {
      title: "Best Design Process Award",
      subtitle:
        "Won 'Best Design Process' for my capstone project, Tangled Visions, given by University of Canterbury's School of Product Design'.",
      image: require("./assets/images/productDesignLogo.png"),
      imageAlt: "University of Canterbury School of Product Design Logo",
      footerLink: [
        {
          name: "Tangled Visions Poster",
          url: "https://drive.google.com/file/d/14K0QGRQ_NB5dGjdqLrOowpYaa2KvfIln/view?usp=sharing"
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
      title: "404 Talk Not Found",
      subtitle: "This will come soon I promise!\nGot an opportunity? Lets talk!",
    }
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
