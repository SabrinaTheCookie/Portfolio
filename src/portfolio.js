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
  subTitle: emoji(
    "A Game Programmer from New Zealand 🎮 with experience building immersive experiences for PC, mobile, and web using Unreal, Unity, and other engines."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qTOt0GTjerJMFt8HkQEf2k5IM-3-Y0UF/view?usp=sharing", // Set to empty to hide the button
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

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CREATE UNIQUE SOLUTIONS FOR UNIQUE PROBLEMS",
  skills: [
    emoji(
      "⚡ Use the latest technologies to push the boundaries on what games can do"
    ),
    emoji("⚡ Rapid prototyping to test ideas fast"),
    emoji(
      "⚡ Integrate Multiplayer, Motion Capture, XR, or other frameworks into games"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "vr",
      fontAwesomeClassname: "fas fa-solid fa-vr-cardboard"
    },
    {
      skillName: "ar",
      fontAwesomeClassname: "fas fa-solid fa-mobile"
    },
    {
        skillName: "PC",
        fontAwesomeClassname: "fa fa-solid fa-desktop"
    },
    {
        skillName: "android",
        fontAwesomeClassname: "fab fa-brands fa-android"
    },
    {
        skillName: "multiplayer",
        fontAwesomeClassname: "fas fa-solid fa-people-arrows"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-brands fa-unity"
    },
    {
      skillName: "unreal",
      fontAwesomeClassname: "fa fa-solid fa-rocket"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-brands fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Canterbury",
      logo: require("./assets/images/canterburyLogo.png"),
      subHeader: "Bachelor's of Product Design: Applied Immersive Game Design",
      duration: "February 2021 - November 2023",
      desc: "Ranked top 10% in the program. Courses included pratical projects in Programming and Design.",
      descBullets: [
        "Worked with Runaway Play, a Dunedin-based studio to create Tangled Visions, an alternative take on jigsaw puzzles",
        "Created 10+ experiences across PC, Mobile, VR, AR, and physical media",
        "Deep dives into Unity, Unreal, and how game engines work",
        "Leading collaborative agile development with up to 8 people",
        "Diverse exploration of game culture, methodologies, and frameworks",
        "Immersed into co-curriculars that develop soft skills"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Programmer",
      company: "CerebralFix",
      companylogo: require("./assets/images/cerebralfixLogo.png"),
      date: "December 2023 – Present",
      desc: "Programmer working in various game engines in work-for-hire projects for clients such as Skyline Enterprises, BBC, Disney, Universal Studios, and Niantic.",
      descBullets: [
        "Shipped Skyline Luge Simulator, a multiplayer 6DOF experience that sees players race down virtual luge tracks. Built in Unreal Engine 5.",
        "Product exploration and prototyping for the Apple Vision Pro in Unity",
        "Augmented Reality short-form entertainment in Niantic Studio, a webXR platform",
        "Working on the ground for projects of mid-sized teams and solo development",
        "Fostering culture through social event organization and marginalized group advocation."
      ]
    },
    {
      role: "R&D Intern",
      company: "CerebralFix",
      companylogo: require("./assets/images/cerebralfixLogo.png"),
      date: "November 2022 – January 2023",
      desc: "Researching real-time motion capture using depth-cameras to create peripheral-free full-body gameplay, built in Unreal Engine 5.",
      descBullets: [
        "Created a short-form experience to prototype real-time full-body motion capture.",
        "Designed with accessibility in mind to ensure the experience was inclusive of all.",
        "Exposed to agile in a professional environment by participating in regular development rituals."
      ]
    },
    {
      role: "Peer Assisted Learning Leader",
      company: "University of Canterbury",
      companylogo: require("./assets/images/canterburyLogo.png"),
      date: "July 2023 – November 2023",
      desc: "Facilitating first-year student wellbeing and engagement through providing supplementary sessions to help students succeed.",
      descBullets: [
        "Selected via a non-application process by standing out as an exemplary student who has succeeded.",
        "Running additional support sessions in a group environment and one-on-one.",
        "Coordinating with university staff to ensure the student experience is streamlined and concerns brought to the appropriate parties."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Shipped Projects",
  subtitle: "SOME GAMES AND EXPERIENCES THAT HAVE MADE IT INTO THE WORLD",
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

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
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 🏅"
  ),

  talks: [
    {
      title: "404 Talk Not Found",
      subtitle: "This will come soon I promise!\nGot an opportunity? Lets talk!",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, share an opportunity, or just want to say hi? My Inbox is open for all.",
  number: "+64-211802667",
  email_address: "sabrinaLCooke@gmail.com"
};

//#region Unused
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};


// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

//#endregion

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
