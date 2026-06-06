const header = {
  homepage: 'https://github.com/MihirVargante',
  title: 'MV.',
}

const about = {
  name: 'Mihir Vargante',
  role: 'Full Stack Developer',
  openToWork: true,
  description:
    'Full Stack Developer who enjoys turning complex problems into clean, scalable solutions. I care deeply about performance, user experience, and writing code that lasts.From building intuitive interfaces to architecting reliable back-end systems that deliver real business impact.',
  resume: 'https://drive.google.com/file/d/14M9D5dHX2OUkk-fhCIcHmU8F9j6tvEtx/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/mihir-vargante/',
    github: 'https://github.com/MihirVargante',
    twitter: 'https://x.com/Mihir_Vargante',
    instagram: 'https://www.instagram.com/mahi_vargante_115/',
  },
  avatar: 'avatar.jpg',
}

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Factech: Facility + Technology Solutions',
    duration: 'Jan 2024 – Present',
    description: [
      'Developed a Lease Management service automating renewals and reporting, boosting revenue by ₹50K per client monthly.',
      'Redesigned the main dashboard using D3.js, increasing user engagement by 30% and user satisfaction by 25%.',
      'Built and optimized back-end APIs with Spring Boot and PHP, improving system performance by 20%.',
      'Directed 3 interns to a 100% task completion rate, enhancing team productivity and collaboration.',
      'Spearheaded feature deployments on AWS using CI/CD pipelines, ensuring seamless delivery.',
    ],
  },
  {
    role: 'Internship Trainee',
    company: 'LTIMindtree',
    duration: 'Feb 2023 – May 2023',
    description: [
      'Achieved 84% grade with hands-on experience in Advanced Java, DBMS, and Web Development.',
      'Developed practical skills in coding, data management, and responsive web application design.',
    ],
  },
]

const projects = [
  {
    name: 'Online Gaming & Subscription Store',
    description:
      'Scalable e-commerce platform handling 5,000+ active users and 10,000+ monthly transactions. Integrated third-party APIs (SmileOne, MooGold) for automated product sync and order fulfillment. Redis caching reduced response times by 40% and database load by 50%.',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Java'],
    image: `${process.env.PUBLIC_URL}/mycredworld.png`,
    sourceCode: '',
    livePreview: 'https://www.mycredworld.com/',
  },
  {
    name: 'Factech Vendor Management',
    description:
      'Vendor onboarding and management system supporting 10,000+ vendors with PO and invoice management. Built with role-based access and optimized for responsiveness and scalability across all devices.',
    stack: ['React', 'PHP', 'Laravel', 'Lumen', 'MySQL'],
    sourceCode: '', // private / internal project
    livePreview: '',
  },
  {
    name: 'Real-Time Task Manager',
    description:
      'Collaborative task management app with live updates via Socket.io using the MERN stack. Implements CRUD operations and role-based access control — admins manage all tasks, users see only their own.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    sourceCode: 'https://github.com/MihirVargante/Task-Manager',
    livePreview: '',
  },
  {
    name: 'Anime-Info',
    description:
      'Responsive anime discovery website with user-friendly design and smooth navigation. Features JWT and OTP authentication for enhanced security and account privacy.',
    stack: ['React', 'Tailwind CSS', 'JWT', 'Node.js'],
    image: `${process.env.PUBLIC_URL}/anime-info.png`,
    sourceCode: 'https://github.com/MihirVargante/AnimeInfo',
    livePreview: 'https://anime-info-sage.vercel.app/',
  },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Redux',
  'HTML',
  'CSS / SASS',
  'Tailwind CSS',
  'Bootstrap',
  'D3.js',
  'Java',
  'Spring Boot',
  'Node.js',
  'Express',
  'PHP',
  'Laravel',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Neo4j',
  'Socket.io',
  'Redis',
  'Docker',
  'AWS',
  'REST APIs',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  email: 'mihirvargante11@gmail.com',
}

export { header, about, experience, projects, skills, contact }
