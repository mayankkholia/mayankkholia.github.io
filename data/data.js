/*!
 * Guim González - Portfolio v1.0.0 (https://guimgonzalez.me)
 * Copyright 2019 Guim González
 * Licensed under MIT (https://github.com/GuimG/dev-portfolio/master/LICENSE)
 */

// Change your profile data here
let profile = {
  picture: "",
  name: "Mayank Kholia",
  description: "Master Yoda",
  bio:
    "InProgress",
  email: "mayankkholia@outlook.com",
  location: "Pune,India",
  birth: "1996-08-08", // YYYY-MM-DD format
  skills: [
    "Python",
    "Java",
    "C/C++",
    "HTML",
    "Javascript",   
    "SQL",
    "Docker",
    "Perfmance Testing",
    "Load Testing"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/mayankkholia/",
    // twitter: "https://twitter.com/mayankkholia",
    github: "https://github.com/mayankkholia/"
  },
  experience: [
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant",
      url: "https://www.cognizant.com/",
      location: "Pune, India",
      description:
        "Doing Performance Testing and Load Testing for various Clients",
      from: "July 2019",
      to: "Now"
    },
    {
      title: "Intern",
      company: "Cognizant",
      url: "https://www.cognizant.com/",
      location: "Pune, India",
      description:
        "Developed a Python Light-Weight Database Management/Admin Tool for InfluxDB ",
      from: "Jan 2019",
      to: "May 2019"
    }
  ],
  education: [
    {
      school: "DIT University",
      degree: "B.Tech",
      fieldOfStudy: "Computer Science",
      location: "Dehradun, India",
      from: "Aug 2015",
      to: "May 2019"
    }
  ],
  certificates: [
    {
      title: "Docker for the Absolute Beginner - Hands On - DevOps",
      provider: "Udemy",
      from: "Dec 2019",
      url: "http://ude.my/UC-FKL8RTFI/",
      id: "UC-FKL8RTFI"
    },
    {
      title: "Kubernetes for the Absolute Beginners - Hands-on",
      provider: "Udemy",
      from: "Feb 2020",
      url: "http://ude.my/UC-d336471c-84e2-4266-bc41-34348437c6cf",
      id: "UC-d336471c-84e2-4266-bc41-34348437c6cf"
    }
  ],
  quote: "Do; or do not; there is no try."
};

let page = {
  language: "english",
  // ^ languages suported:
  //  - english (default)
  theme: "nightsky"
  // ^ themes suported:
  //  - nightsky (default)
  //  - sunset
  //  - purpledream
  //  - cutekitty
};
