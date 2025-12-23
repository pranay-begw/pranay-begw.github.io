export const experiences = [
    {
        logo: '/amazon.png',
        role: 'Software Engineer',
        company: 'Amazon',
        location: 'Bellevue, WA',
        date: 'Present',
        details: [
            'Working in AGI Infra to support AGI Content Registry for compliant model development'
        ]
    },
    {
        logo: '/amazon.png',
        role: 'Software Engineering Intern',
        company: 'Amazon',
        location: 'Bellevue, WA',
        date: 'Summer 2024',
        details: [
            'Working in Responsible AI to develop a REST API leveraging AWS services to reduce manual resource screening',
            'Supporting Alexa\'s Voice Deletion Promise, saving 200+ business hours per year on ticketing and triaging',
            'Designed, implemented, tested, and deployed a compliance list scan for efficient policy evaluation of critical findings'
        ]
    },
    {
        logo: '/messagegears.jpeg',
        role: 'Software Engineering Intern',
        company: 'MessageGears LLC',
        location: 'Atlanta, GA',
        date: 'Summer 2023',
        details: [
            'Migrated the core product to a React and TailwindCSS stack from Angular JS using the agile methodology',
            'Implemented 10+ components, including a new navbar, a modal, and a wrapper to process API responses',
            'Created 50+ automated tests using React Testing Library and Cypress to ensure robustness of the new navbar',
            'Identified and resolved 20+ bugs in JSP and Angular resulting in fulfilled client requests and better user experience'
        ]
    },
    {
        logo: '/gtf.jpeg',
        role: 'Quantitative Investments Analyst Intern',
        company: 'Georgia Tech Foundation Inc.',
        location: 'Atlanta, GA',
        date: 'Summer 2022',
        details: [
            'Automated processes for portfolio data analysis using time series analysis, adding 35+ benchmark return based metrics',
            'Refactored, documented, and modularized existing code for improved readability and flow, resulting in a 30% code reduction and 50% faster run times',
            'Conducted hedge fund and public equities due diligence to help diversify the endowment\'s $2.5Bn portfolio'
        ]
    }
];

export const leadership = [
    {
        logo: '/dsgt.png',
        role: 'Director of Finance',
        company: 'Data Science @ Georgia Tech',
        location: 'Atlanta, GA',
        details: 'Actively manage $50000+ for club operations and spearheaded fundraising of $35000+ for a 500+ participant hackathon'
    },
    {
        logo: '/gtsf.png',
        role: 'Senior Analyst',
        company: 'Georgia Tech Student Foundation Investments Committee',
        location: 'Atlanta, GA',
        details: 'Oversaw analyst research for Consumer Discretionary stocks, macro & industry trends, and ensured accurate valuation models such as DCF and SOTP, leading to 4 successful pitches in a 200+ member committee, returning 51+% to date'
    }
];

export const projects = [
    {
        title: 'Styles.Compare',
        image: '',
        techStack: ['OpenAI API', 'Pinecone', 'MongoDB', 'Firebase', 'React', 'Web-Scraping'],
        description: 'Website to find clothing which matches existing clothing styles using similarities in vector embeddings of style descriptions.',
        features: [
            'Vector similarity search for clothing style matching',
            'Integration with OpenAI embeddings for semantic understanding',
            'Real-time web scraping for up-to-date inventory'
        ],
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: 'Movie Success Predictor',
        image: '',
        techStack: ['Python', 'Pandas', 'Numpy', 'Scikit-Learn', 'Matplotlib', 'Keras', 'Tensorflow', 'BeautifulSoup', 'NLTK'],
        description: 'ML model to predict success of a movie based on factors like its script, budget, star cast, and production team.',
        features: [
            'Predictive modeling using historical movie data',
            'Sentiment analysis on movie scripts',
            'Comprehensive data visualization with Matplotlib'
        ],
        liveUrl: null,
        githubUrl: null,
    },
    {
        title: 'School Lab Manager',
        image: '',
        techStack: ['Python', 'SQLite3', 'Django', 'HTML', 'CSS'],
        description: 'Web app to book equipment based on lab experiments and have the option to book labs. The goal is minimize lost equipment and double booking of rooms.',
        features: [
            'Equipment inventory tracking and management',
            'automated conflict resolution for scheduling',
            'User authentication and role-based access control'
        ],
        liveUrl: null,
        githubUrl: null,
    }
];
