/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// ── Splash Screen ────────────────────────────────────────────────────────────

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// ── Summary And Greeting ─────────────────────────────────────────────────────

const illustration = {
  animated: true
};

const greeting = {
  username: "Sabrina Cooke",
  title: "Kia Ora, I'm Sabrina",
  subTitle:
      "A Game Programmer from Aotearoa New Zealand building unique and immersive experiences currently working at University of Canterbury as a Senior Tutor in game development.",
  resume: {
    content: {
      type: "iframe",
      src: require("./assets/Documents/resume_sabrinacooke.pdf"),
      title: "Sabrina Cooke Resume"
    }
  },
  displayGreeting: true
};

// ── Social Media Links ───────────────────────────────────────────────────────

const socialMediaLinks = {
  github: "https://github.com/SabrinaTheCookie",
  linkedin: "https://www.linkedin.com/in/bree-cooke/",
  itch: "https://sabrinathecookie.itch.io/",
  gmail: "SabrinaLCooke@gmail.com",
  display: true
};

// ── Releases Section ─────────────────────────────────────────────────────────
// Shipped, public-facing products.

const releasesSection = {
  title: "Releases",
  subtitle: "Experiences that have made it into the world.",
  cards: [
    {
      frame: {
        src: "https://www.youtube.com/embed/r7UUMSHweUI?mute=1&autoplay=1",
        title: "Skyline Virtual Luge Trailer",
        aspectRatio: "56.25%"  // 16:9 — omit to use default
      },
      title: "Skyline Virtual Luge",
      subtitle:
          "Based on the real luge experience in Queenstown New Zealand, this arcade experience features a custom motion platform, photorealistic 3D environments built in the Unreal Engine, and competitive multiplayer racing.\n\nIn this small team, my role was working within various systems to build additional features, though primarily programming in C++. As a generalist I also worked on implementing animations, physical destruction, recovery systems, UI, and more.\n\nThis project is live and playable on-site in Queenstown, New Zealand.",
      footer:
        [
          {name: "Skyline Queenstown", url: "https://queenstown.skyline.co.nz/", button:true},
          {name: "CerebralFix", url: "https://cerebralfix.com/our-work/skyline-luge-racing-simulators/", button:true},
          {name: "Otago Daily Times", url: "https://www.odt.co.nz/regions/queenstown/virtual-luge-racing-gondola-terminal", button:true},
          ]
    },
    {
      frame: {
        src: "",
        title: "Game Jam Supercut",
        aspectRatio: "56.25%"  // 16:9 — omit to use default
      },
      title: "Game Jams",
      subtitle: "Find plenty more of my game jams and smaller projects on my itch.io. Theres weird games, silly games, chaotic games and more. I always strive to compete in game jams as I find they're a great way to reinforce your confidence in that you can finish projects, and after a short weekend you come away with an awesome product, or at least some lessons for next time.",
      footer:
          [
            {name: "Setting the Stage", url: "https://baconeta.itch.io/setting-the-stage", button:true},
            {name: "Styx and Stones", url: "https://baconeta.itch.io/styx-and-stones", button:true},
            {name: "Downsizing", url: "https://sabrinathecookie.itch.io/downsizing", button:true},
            {name: "More Games", url: "https://sabrinathecookie.itch.io/", button:true},
          ]
    }
    // Add more released projects here
  ],
  display: true
};

// ── Current Projects Section ─────────────────────────────────────────────────
// Work-in-progress or personal projects.

const currentProjectsSection = {
  title: "Current Projects",
  subtitle: "Things I'm actively working on.",
  cards: [
    {
      image: require("./assets/images/CaravaneersPrototype.png"),
      imageAlt: "Art from the original Caravaneers game jam.",
      featureSize: true,
      title: "Caravaneers",
      subtitle: "Lead a caravan of ordinary folk charting a path across a weird, wonderful, and dangerous world where Lord of the Rings fantasy meets The Oregon Trail. Using a variety of roleplaying options, deck-building, and worker placement, you face unpredictable encounters and manage your people’s wellbeing and dwindling supplies.\n\nCaravaneers is a narratively driven roguelike deck-builder with tabletop worker placement that creates a unique management experience which aims to be consistently challenging, surprising, and rewarding.\n\nWe're currently underway in expanding the game jam prototype into a full-length experience, re-built from the ground up. \n\n You can play the game jam version below, although it has a significantly smaller scope.",
      footer: [
        { name: "Game Jam Demo", url: "https://weebled-wobbler.itch.io/caravaneers", button: true },
        { name: "Tech Art Test", 
          content: {
            type: "image",
            src: require("./assets/images/CaravaneersArtTest.png"),
            title: "Technical art test of caravaneers"
            },
          button: true },
      ]
    }
  ],
  display: true 
};

// ── Achievements Section ─────────────────────────────────────────────────────

const achievementSection = {
  title: emoji("Achievements"),
  subtitle: "Some cool stuff that I have done.",
  cards: [
    {
      title: "Game Developers Society Founder\n2021-2024",
      subtitle:
          "Founded in 2021, I helped build Game Developers Society (GDS) into a community hub for over 100 game developers on campus. Throughout the years, we drew sponsorships from organizations such as Dinosaur Polo Club and RedBull, and were awarded Best Arts Event Programme in 2024 at the annual student awards.",
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
          button: true }
      ]
    },
    {
      title: "Best Design Process Award\n2023",
      subtitle:
          "My team won 'Best Design Process' for our capstone project, Tangled Visions in collaboration with Runaway Play Games, given by University of Canterbury's School of Product Design.\n\nTangled Visions was a casual jigsaw game, but instead of moving pieces, you moved the images on the pieces.",
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
          button: true },
        {name: "Play now", url: "https://sabrinathecookie.itch.io/tangled-visions", button: true}
      ]
    }
  ],
  display: true
};

// ── Talks Section ────────────────────────────────────────────────────────────

const talkSection = {
  title: "Talks",
  subtitle: emoji(
      "I love to take any opportunity to share my knowledge with the world."
  ),
  cards: [
    {
      title: "Game Developers Society\n2025\n\nTopic: Industry Pathways",
      subtitle:
          "I was invited back to be a speaker at their annual industry night to reflect on my pathway and things I'm proud of and what I wish I did differently.",
      footer: [
        {
          name: "View Slides",
          button: true, // renders as a wider pill button rather than a tag
          content: {
            type: "iframe",
            src: "https://docs.google.com/presentation/d/e/2PACX-1vQ_s3NEXobdnEPXe2QxytKTuj9B46ENtFLwZtJv88hMWdrZTamDkEbTd7TlGes5wtqgFV9mTMFHm2-Q/pubembed?start=true&loop=true&delayms=10000&rm=minimal",
            title: "GDS Industry Night 2025"
          }
        }
      ]
    },
    {
      title: "404 Talk Not Found",
      subtitle: "This will come soon I promise!\nGot an opportunity? Lets talk!"
      // No footer — card renders without any action buttons
    }
  ],
  display: true
};

// ── Contact ──────────────────────────────────────────────────────────────────

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
      "Want to discuss a project, share an opportunity, or just want to say hi? My Inbox is open.",
  email_address: "sabrinaLcooke@gmail.com"
};

// ── Misc ─────────────────────────────────────────────────────────────────────

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  releasesSection,
  currentProjectsSection,
  achievementSection,
  talkSection,
  contactInfo,
  isHireable
};