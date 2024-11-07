// Handle text updates based on sections
export const SECTIONS = [
  {
    trigger: "#section-about",
    activeSection: "section-about",
    previousSection: "section-intro",
  },
  {
    trigger: "#section-experience",
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
        "I build web applications using modern technologies, and make my clients happy.",
    },
    activeSection: "section-experience",
    previousSection: "section-about",
  },
  {
    trigger: "#section-projects",
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
    activeSection: "section-projects",
    previousSection: "section-experience",
  },
  {
    trigger: "#section-reviews",
    startText: {
      heading: "Reviews",
      subheading: "What Clients Say",
      helperText: "Here are some testimonials from my clients.",
    },
    leaveBackText: {
      heading: "Projects",
      subheading: "My Recent Projects",
      helperText: "Here are some of the projects I've worked on.",
    },
    activeSection: "section-reviews",
    previousSection: "section-projects",
  },
  {
    trigger: "#section-contact",
    startText: {
      heading: "Contact",
      subheading: "Get In Touch",
      helperText: "Write me an email if you have any questions.",
    },
    leaveBackText: {
      heading: "Reviews",
      subheading: "What Clients Say",
      helperText: "Here are some testimonials from my clients.",
    },
    activeSection: "section-contact",
    previousSection: "section-reviews",
  },
  // {
  //   trigger: "#section-contact",
  //   startText: {
  //     heading: "Contact",
  //     subheading: "Get In Touch",
  //     helperText: "Write me an email if you have any questions.",
  //   },
  //   leaveBackText: {
  //     heading: "Projects",
  //     subheading: "My Recent Projects",
  //     helperText: "Here are some of the projects I've worked on.",
  //   },
  //   activeSection: "section-contact",
  //   previousSection: "section-projects",
  // },
];
