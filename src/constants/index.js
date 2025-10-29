export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const studyExperiences = [
  { 
    id: 1,
    icon: '/assets/school-logo2.png',
    institution: 'Humboldt Universität zu Berlin',
    degree: 'M.Sc. in Information Systems',
    duration: '2023 - Present',
    details: 'Specializing in ML, Software Development and Analytics',
  },
  {
    id:2,
    icon: '/assets/school-logo1.png',
    institution: 'Technical University of Berlin',
    degree: 'B.Sc. in Computational Engineering Science',
    duration: 'Oct 2019 - Aug 2023',
    details: 'Focused on Mechatronic and Machine Learning Development',
  },
  {
    id:3,
    icon: '/assets/school-logo1.png',
    institution: 'Technical University of Berlin',
    degree: 'Studienkolleg T-Kurz',
    duration: 'Feb 2019 - Aug 2019',
    details: 'Vergleichschule in Deutschland',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'MURMEL - Robot Orientation Detection - ',
    desc: 'It\'s like the disney cartoon wall-E, but made into real-life! The MURMEL Project is an autonomous waste collection robot developed at TU Berlin. Using machine learning, computer vision and ROS, it efficiently detects, aligns, and empties urban litter bins, reducing CO₂ emissions and enhancing sustainability.',
    subdesc:
      'I contributed to MURMEL by implementing ML models, computer vision techniques, and refining sensor fusion to improve object detection, orientation accuracy and overall system efficiency in dynamic urban environments.',
    href: 'https://www.tu.berlin/en/mpm/research/projects/murmel',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/mpm.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'TF',
        path: 'assets/tf.png',
      },
      {
        id: 3,
        name: 'C++',
        path: '/assets/c++.png',
      },
      {
        id: 4,
        name: 'ROS',
        path: '/assets/ros.png',
      },
    ],
  },
  {
    title: 'Stock Forecast and Sentiment Dashboard',
    desc: 'The Stock Forecast and Sentiment Dashboard provides comprehensive insights into the stock market using advanced predictive analytics, sentiment analysis and real-time market trends. By leveraging machine learning models and natural language processing (NLP) techniques, it empowers users to make informed investment decisions with actionable insights.',
    subdesc:
      'Key features include stock prediction models like Linear Regression, XGBoost, ARIMA and LSTM for accurate forecasts, and sentiment analysis through VADER Lexicon, Twitter RoBERTa, and BART Large MNLI. Designed for individuals with prior stock market knowledge, this dashboard bridges data science and finance for smarter investing.',
    href: 'https://github.com/3L1NK/Stock_Forecast_and_Sentiment_Dashboard',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/money.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Docker',
        path: 'assets/docker.png',
      },
      {
        id: 3,
        name: 'Google Cloud',
        path: '/assets/gcp.png',
      },
      {
        id: 4,
        name: 'Hugging Face',
        path: '/assets/huggingface.png',
      },
    ],
  },
  {
    title: 'Blockchain for Networked Automation',
    desc: 'The Blockchain for Networked Automation Project investigates the application of blockchain technology to enhance communication and data transfer within industrial automation systems. By leveraging blockchain’s decentralized and cryptographic properties, the project aims to implement secure and efficient communication protocols for networked environments.',
    subdesc:
      'This project explores the integration of blockchain into automation technology, focusing on designing communication protocols, implementing smart contracts for secure data flow, and evaluating performance in simulated environments. It aims to address the challenges of secure, scalable, and efficient communication in networked systems, providing a foundation for future advancements in blockchain-enabled automation.',
    href: 'https://github.com/3L1NK/Blockchain_for_network_automation',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/bitcoin.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Java Script',
        path: '/assets/js.png',
      },
      {
        id: 2,
        name: 'Solana',
        path: 'assets/solana.png',
      },
      {
        id: 3,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 4,
        name: 'Node Js',
        path: '/assets/nodejs.png',
      },
    ],
  },
  {
    title: 'IBM Data Science Certificate',
    desc: 'The IBM Data Science Professional Certificate on Coursera provides hands-on experience with data science tools, methodologies, and programming languages like Python, SQL, and machine learning through real-world projects.',
    subdesc:
      'This program honed my skills in data analysis, database management, and machine learning. Projects included analyzing datasets, building visualizations, and deploying predictive models, showcasing my ability to derive insights and solve complex problems.',
    href: 'https://www.coursera.org/account/accomplishments/specialization/KBINKE63XRYL',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/ibm.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'TF',
        path: 'assets/tf.png',
      },
      {
        id: 3,
        name: 'SQL',
        path: '/assets/sql.png',
      },
      {
        id: 4,
        name: 'Docker',
        path: '/assets/docker.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Lanch GmbH',
    pos: 'Software Engineer Internship',
    duration: 'March 2025 - August 2025',
    title: [
      'Built and maintained containerized data pipelines (Docker, Airflow, dbt) on GCP, integrating multiple data sources',
      'Developed automated deployment workflows for ETL jobs using CI/CD',
      'Automated billing and invoicing across HubSpot, BigQuery and payment APIs',
      'Implemented monitoring and alerting for live data syncs across 550+ stores to ensure consistent performance and uptime',
      'Collaborated with other department teams to design scalable system architectures for real time analytics',
      'Created an SQL Copilot (Python + RAG) serving 1000+ internal analytics queries',
      'Built and maintained Metabase dashboards and BI pipelines for performance monitoring and partner KPIs'
    ],
    icon: '/assets/opel.png',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Carl Zeiss Medical Technology',
    pos: 'Data & Process Engineer Working Student',
    duration: 'Feb 2022 - Feb 2024',
    title: [
      'Automated quality measurement and data acquisition in medical device manufacturing, increasing traceability',
      'Developed Python-based workflows for device qualification, integrated into MES systems',
      'Delivered cross-departmental dashboards and reports enhancing data-driven process control'
    ],
    icon: '/assets/zeiss.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Opel GmbH',
    pos: 'Pre-Internship',
    duration: 'March 2020 - May 2022',
    title: [
      'I acquired basic skills in metalworking processes and techniques',
      'Gained essential knowledge in mechanical engineering principles'
    ],
    icon: '/assets/opel.png',
    animation: 'clapping',
  },
  
];
