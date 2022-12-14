// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4E2A84, #722F37, #B6ACD1, #401F68, #E4E0EE",
  firstName: "Kay",
  middleName: "",
  lastName: "Cui",
  message: " Music Technology, DJ, blah blah blah add slogan here ",
  icons: [
    {
      image: "fab fa-instagram",
      url: "https://www.instagram.com/kcui29/",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/kay-cui/",
    },
    {
      image: "fab icon-vitamink",
      url: "https://www.instagram.com/vitamink.mp3/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/kay.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kay.jpeg"),
  imageSize: 375,
  message: "Hi! My name is Kay and I am a Junior at Northwestern University majoring in Communication Studies. I am also pursuing minors in Music Technology, Business Institutions, and an Integrated Marketing Communications (IMC) Certificate.",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "WillCui-", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/kay.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/kay.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

const projects = {
  show: true,
  heading: "Projects",
  projects: [

  ]
}

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Microsoft Suite", value: 90 },
    { name: "Google Suite", value: 90 },
    { name: "Logic Pro", value: 75 },
    { name: "Photography", value: 65 },
    { name: "Graphic Design", value: 55 },
    { name: "Fan Engagement", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Multitasking", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "",
  email: "kaycui@u.northwestern.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Marketing Chair and Sound Engineer',
      companylogo: require('../assets/img/s4r.jpg'),
      date: 'Feb 2021 - Present'
    },
    {
      role: 'Marketing and Media, Street Team',
      companylogo: require('../assets/img/ano.jpg'),
      date: 'Oct 2020 ??? Present',
    },
    {
      role: 'President',
      companylogo: require('../assets/img/niteskool.jpg'),
      date: 'Sep 2020 ??? Present',
    },
    {
      role: 'Administrative Aide',
      companylogo: require('../assets/img/nwm.png'),
      date: 'Dec 2020 - Jun 2022'
    },
    {
      role: 'Xfinity On Campus Brand Ambassador',
      companylogo: require('../assets/img/rnb.jpeg'),
      date: 'Sep 2021 - Nov 2021',
    },
    {
      role: 'Marketing Intern',
      companylogo: require('../assets/img/lnc.png'),
      date: 'Jun 2021 - Aug 2021',
    },
    {
      role: 'Research Assistant',
      companylogo: require('../assets/img/nw.png'),
      date: 'Oct 2020 - Jun 2021',
    },
    {
      role: 'Co-Founder',
      companylogo: require('../assets/img/be.png'),
      date: 'Sep 2016- Dec 2020',
    },
    {
      role: 'Social Media Intern',
      companylogo: require('../assets/img/patch.png'),
      date: 'Jun 2020 - Sep 2020',
    },
  ]
}

const vitamink = {
  show: true,
  heading: "Vitamin K",
}

const contact = {
  show: true,
  heading: "Contact Me",
  message: "I'm currently looking Summer 2023 internship opportunities! If you know of any positions available, or if you have any questions, please feel free to email me at",
  email: "kaycui@u.northwestern.edu",
}

export { navBar, mainBody, about, projects, repos, skills, leadership, getInTouch, experiences, vitamink, contact };
