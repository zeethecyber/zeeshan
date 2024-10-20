// Handle text updates based on sections
export const SECTIONS = [
  {
    trigger: "#section-2",
    activeSection: "section-2",
    previousSection: "section-1",
  },
  {
    trigger: "#section-3",
    startText: {
      heading: "Experience",
      subheading: "My Work Experience",
      helperText:
        "Here are some of the projects I've worked on and the roles I've held.",
    },
    leaveBackText: {
      heading: "Zeeshan Asif",
      subheading: "Senior Software Engineer",
      helperText:
        "I build web applications using modern technologies and make my clients happy.",
    },
    activeSection: "section-3",
    previousSection: "section-2",
  },
  {
    trigger: "#section-4",
    startText: {
      heading: "Projects",
      subheading: "My Recent Projects",
      helperText: "Here are some of the projects I've worked on.",
    },
    leaveBackText: {
      heading: "Experience",
      subheading: "My Work Experience",
      helperText:
        "Here are some of the projects I've worked on and the roles I've held.",
    },
    activeSection: "section-4",
    previousSection: "section-3",
  },
  {
    trigger: "#section-5",
    startText: {
      heading: "Contact",
      subheading: "Get In Touch",
      helperText: "Write me an email if you have any questions.",
    },
    leaveBackText: {
      heading: "Projects",
      subheading: "My Recent Projects",
      helperText: "Here are some of the projects I've worked on.",
    },
    activeSection: "section-5",
    previousSection: "section-4",
  },
];
