export const experiences = [
    {
        logo: '/amazon.png',
        role: 'Software Engineer',
        company: 'Amazon',
        location: 'Bellevue, WA',
        date: 'Present',
        details: [
            'Working in AGI Infra to support AGI Content Registry for compliant and responsible model training'
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
        title: 'Buzz Cut - AI Video Editor',
        image: '',
        techStack: ['Python', 'NextJS', 'OpenAI API', 'Gemini', 'Flask', 'OpenCV'],
        description: 'AI video editor that allows users to edit videos using natural language prompts, leveraging a low-latency Planner-Executor system for real-time, and in-browser video editing capabilities.',
        features: [
            'Prompt driven AI video editor',
            'Low-latency Planner-Executor system for real-time, and in-browser video editing capabilities',
        ],
        liveUrl: "https://devpost.com/software/smartframe",
        githubUrl: "https://github.com/yatharth-b/buzzcut",
    },
    {                                                                                                                                                     
        title: 'Agentic Hedge Fund',                                                                                                                      
        image: '',                                                                                               
        techStack: ['Python', 'LangGraph', 'LLM', 'Alpaca', 'Streamlit', 'PostgreSQL', 'Pydantic'],
        description: 'Autonomous multi-agent trading system that analyzes stocks via specialized LLM-powered agents and executes trades through Alpaca\'s paper trading API using a "Core vs. Satellite" portfolio strategy.',
        features: [                                                                                                                                       
            'Orchestrated a multi-agent LangGraph pipeline with parallel LLM analysts (Valuation, Sentiment, Risk) and a weighted Portfolio Manager that aggregates signals into trade decisions',                                                                                                             
            'Implemented a RiskGuardian veto mechanism that overrides any BUY signal based on volatility, beta, and drawdown thresholds to enforce downside protection',
            'Integrated yfinance for real-time fundamentals, price history, and news ingestion, and Alpaca paper trading API for order execution',
            'Built an interactive Streamlit dashboard for live analysis, signal visualization, and dry-run/live trading mode toggling',
        ],                                                                                                                                                
        liveUrl: null,                                                                                                                
        githubUrl: 'https://github.com/pranay-begw/agentic-idg',                                                                                                            
    },
    {
        title: 'GT Course Catalog - Buzz AI',
        image: '',
        techStack: ['Python', 'RAG', 'FAISS', 'VectorDB'],
        description: 'AI-powered course recommendation system for Georgia Tech students, leveraging a RAG pipeline with transformer embeddings and FAISS for semantic course matching at scale.',
        features: [
            'Built a RAG pipeline with transformer embeddings and FAISS for semantic course matching at scale',
            'Engineered ingestion and preprocessing (parsing, scraping, embedding generation) for vector retrieval',
        ],
        liveUrl: 'https://drive.google.com/file/d/1dp1OHGm8R3ncWx_oXMnCXzRavXOp8c1e/view?usp=sharing',
        githubUrl: 'https://github.com/Mehul20/Buzz-AI',
    },
    {
        title: 'Songs2Sheets',
        image: '',
        techStack: ['Python', 'Transformers', 'Pytorch', 'Scikit-learn'],
        description: 'Deep learning system that converts raw piano audio into MIDI and sheet music using CQT spectrograms, BiLSTM, and transformer architectures.',
        features: [
            'Audio-to-MIDI transcription from raw WAV files',
            'CQT spectrogram preprocessing for pitch and timing extraction',
            'CNN + Bi-directional LSTM architecture for sequence modeling',
            'Transformer-based dual encoder with multi-head attention',
            'Handles overlapping notes and variable timing in complex compositions'
        ],
        liveUrl: 'https://drive.google.com/file/d/15FgGlfbnQkeNpdkANl7azukX7MSZr-5N/view?usp=sharing',
        githubUrl: null,
    },
    {
        title: 'pranaybegwani.com',
        image: '',
        techStack: ['Python', 'SQLite3', 'Django', 'HTML', 'CSS'],
        description: 'Personal website to showcase projects and skills.',
        features: [
            'Responsive design for all devices',
            'Interactive elements and smooth animations',
            'Clean and modern UI/UX design'
        ],
        liveUrl: 'https://pranaybegwani.com',
        githubUrl: null,
    },
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
        liveUrl: "https://devpost.com/software/spotter-kint96",
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
        liveUrl: "https://yatharth-b.github.io/CS4641Team80/",
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
        githubUrl: "https://github.com/pranay-begw/Pates_Lab_Manager/blob/main/Pranay%20Begwani%20Lab%20Manager%20Document.pdf",
    }
];
