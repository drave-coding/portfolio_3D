import {python,java,meta, shopify, prispy, gyani, visual, ai, memobar, native,  } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
import { memo } from "react";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Basic Coding",
        company_name: "Python",
        icon: python,
        iconBg: "#F0F0F0",
        date: "July 2020 - April 2021",
        points: [
            "Started it as a part of my schooling syllabus that introduced me to coding.",
            "Then getting the knack of solving the problems triggered something in me to continue with it.",
            "Solved Various problems with it and managed to make some automated projects with it.",
            "Completed the Board with a 99 in the Study of Computer Science that made it a part of my life.",
        ],
    },
    {
        title: "Data Structures and Algorithms",
        company_name: "Java",
        icon: java,
        iconBg: "#F0F0F0",
        date: "Dec 2021 - Sep 2022",
        points: [
            "Mastered basic data structures in Python, then transitioned to Java for in-depth DSA understanding before college.",
            "Achieved intermediate DSA proficiency in Java, building on Python foundation, preparing for advanced college coursework.",
            "Seamless transition from Python data structures, mastering Java DSA skills, enhancing readiness for college-level challenges.",
            "Pre-college DSA journey: Python basics ➔ Advanced Java DSA ➔ College-ready proficiency ➔ Continuous learning foundation established.",
        ],
    },
    {
        title: "Basic Web Development",
        company_name: "Html, Css and Javascript",
        icon: html,
        iconBg: "#F0F0F0",
        date: "Dec 2022 - April 2023",
        points: [
            "Post-DSA, delved into web development—HTML, CSS, JavaScript—venturing into hands-on projects, laying a strong foundation.",
            "Explored foundational tools like Bootstrap, shaping practical skills, building diverse projects, honing web development proficiency.",
            "After mastering DSA, embraced web development, creating numerous small projects, integrating HTML, CSS, JavaScript, and Bootstrap.",
            "Transitioned from DSA to hands-on development, applying HTML, CSS, JavaScript, and Bootstrap, crafting practical web projects.",
        ],
    },
    {
        title: "Mern Stack Development",
        company_name: "React Js",
        icon: react,
        iconBg: "#F0F0F0",
        date: "May 2023 - Oct 2023",
        points: [
            "Progressed beyond basics to MERN stack, mastering frontend, backend, and state management with Redux.",
            "Dived into MERN stack, skillfully combining React, Node.js, MongoDB, and leveraging Redux for state.",
            "Seamless transition: Basic web skills ➔ MERN stack mastery, including Redux for state management.",
            "Extended skills to MERN stack, incorporated Material-UI, crafted dynamic full-stack applications with enhanced UI.",
        ],
    },
    {
        title: "Advanced Frontend",
        company_name: "Next Js",
        icon: nextjs,
        iconBg: "#F0F0F0",
        date: "Nov 2023 - Present",
        points: [
            "Acquired expertise in Sass, refining styles, then delved into advanced frontend with Next.js.",
            "Embraced Tailwind for efficient styling, later mastering TypeScript for robust type-checking.",
            "Elevated frontend with Sass elegance, harnessed Tailwind for utility, embraced TypeScript’s type safety.",
            "Skillful in Sass for expressive styling, Tailwind for utility, TypeScript for type integrity—Next.js mastery ensued.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/drave-coding',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhishek-das-work2003/',
    }
];

export const projects = [
    {
        iconUrl: prispy,
        theme: 'btn-back-red',
        name: 'Web Scraper App',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/drave-coding/Prispy',
    },
    {
        iconUrl: gyani,
        theme: 'btn-back-green',
        name: 'Google Clone',
        description: 'A very simple clone of Google Search that uses a cheeky method to even function like normal browsers. It is made of basic web dev tools like html, css and javascript',
        link: 'https://github.com/drave-coding/gyani',
    },
    {
        iconUrl: memobar,

        theme: 'btn-back-blue',
        name: 'Mern Stack Project',
        description: 'This is a MERN project where we can make any post with a suitable sign up with even Google Oauth 2.0 used. This is a practice project hence there is still room for improvement',
        link: 'https://github.com/drave-coding/Memobar_project',
    },
    {
        iconUrl: native,
        theme: 'btn-back-pink',
        name: 'Job Finding Mobile App',
        description: 'Built this app as my first project in mobile development using react-native and expo. It uses Api calls to search for jobs nearby and display it.',
        link: 'https://github.com/drave-coding/jobify',
    },
    {
        iconUrl: ai,
        theme: 'btn-back-black',
        name: 'Google Lens Clone',
        description: 'This project introduces an innovative AI-driven landmark recognition tool that empowers users to unlock the stories behind the landmarks that dot the Asian continent.',
        link: 'https://github.com/drave-coding/alpha-lens',
    },
    {
        iconUrl: visual,
        theme: 'btn-back-yellow',
        name: 'Visual Projects',
        description: 'These projects stand at a visual illustrator perspective and is made from simple html, css and js.',
        link: 'https://github.com/drave-coding/visual_projects',
    }
];