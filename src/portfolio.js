const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'MV.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mihir Vargante',
  role: 'Full Stack Developer',
  description:
      'I am a Full Stack Developer who enjoys building scalable products and intuitive user experiences. I like working close to real-world problems, understanding requirements deeply, and delivering solutions that create measurable impact.',
  resume: 'https://drive.google.com/file/d/14M9D5dHX2OUkk-fhCIcHmU8F9j6tvEtx/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/mihir-vargante/',
    github: 'https://github.com/MihirVargante',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
