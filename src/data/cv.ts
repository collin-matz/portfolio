// data file CV information. used to populate both the site and a generated CV PDF

export const personal = {
    firstname: 'Collin',
    lastname: 'Matz',
    middlename: 'A.',
    personal_email: 'collin.matz.a@gmail.com',
    academic_email: 'cam22838@eid.utexas.edu',
    github: 'github.com/collin-matz',
    description: 'Graduate student at the University of Texas and Software Engineer at Lockheed Martin with 3+ years of experience.',
    research_interests: 'Application of data science and autonomy to mathematically modeled systems with interests in machine learning, computational science, optimization, and robotics.'
};

export const education = [
    {
        university: "University of Texas",
        location: "Austin, TX",
        dates: '2024 - Present',
        degree: 'M.S. Computer Science',
        gpa: '3.48',
        courses:  [
            'Deep Learning',
            'Natural Language Processing',
            'Numerical Analysis',
            'Reinforcement Learning',
            'Machine Learning',
            'Quantum Information Science',
            'Optimization',
            'Android Programming'
        ]
    },
    {
        university: "University of Texas at Dallas",
        location: "Dallas, TX",
        dates: '2021 - 2023',
        degree: 'B.S. Computer Science',
        gpa: '3.64',
        courses:  [
            'Artificial Intelligence',
            'Probability and Statistics',
            'Data Structures and Algorithms I, II',
            'Database Systems',
            'Software Engineering'
        ]
    }
];

export const research = [
    {
        title: 'Applying Question Part-of-Speech Tag Extraction to Generate Adversarial Training Examples for Reading Comprehension Tasks',
        link: 'https://github.com/collin-matz/StructAdv/blob/main/StructAdvReport.pdf',
        link_title: 'Report Link',
        description: 'Developed StructAdv, a modification of the AddAny algorithm for generating adversarial examples with high n-gram overlap for NLP question-answering models, yielding a small performance improvement for ELECTRA-small models trained on adversarial SQuAD data.',
        bullets: []
    }
];

export const projects = [
    {
        title: 'Arm v1',
        description: 'A simple robotic arm built using 3D printed links, MG90S servos, and an ESP-32 micro-controller programmed in Arduino script.',
        link_title: '',
        demo_link: '',
        tags: ['Robotics', 'Electrical Engineering']
    },
    {
        title: 'OneTeam',
        description: 'A time management and notification app designed to help employees and leaders track work hours. Built using Firebase, Firestore, and Android.',
        demo_link: 'https://www.youtube.com/watch?v=pgR6Ag_C350',
        link_title: 'Demo Link',
        tags: ['Android', 'Kotlin', 'Firebase', 'Firestore']
    },
    {
        title: 'Project Overwatch: Application of AI to Enhance F-35 Combat Identification',
        description: 'Integrated AI model into the F-35 sensor fusion system that enhanced the accuracy of combat identification.',
        demo_link: 'https://www.f35.com/f35/news-and-features/Lockheed_Martin_Applying_AI_to_Enhance_F35_Combat_Identification_System.html',
        link_title: 'Press Release',
        tags: ['Sensor Fusion', 'AI/ML']
    },
    {
        title: 'Miniverse',
        description: 'A small astrophysics simulator built in Rust.',
        demo_link: 'https://github.com/collin-matz/miniverse',
        link_title: 'Source Code',
        tags: ['Rust']
    },
    {
        title: 'Battleship in the Terminal',
        description: 'A terminal based Battleship game built in Rust.',
        demo_link: 'https://github.com/collin-matz/battleship-terminal',
        link_title: 'Source Code',
        tags: ['Rust']
    },
];

// experience should be ordered in reverse chronological order (they will be rendered in the order they exist here)
export const experience = [
    {
        role: 'Engineering LDP',
        company: 'Lockheed Martin',
        location: "Fort Worth, TX",
        dates: '2026 - Present',
        description: 'Participant in the Engineering Leadership Development Program, a three year rotational program designed to expose participants to a breadth of engineering disciplines across the corporation.',
        bullet_summary: 'Rotations',
        bullets: ["R1: Researching Bayesian equivalent to the Breush-Pagan test of heteroskedasticity in linear models. Drafting paper for journal submission and developing an accompanying Python package."],
        tags: ["Leadership", "AI/ML", "Statistics"]
    },
    {
        role: 'Software Engineer',
        company: 'Lockheed Martin',
        location: "Fort Worth, TX",
        dates: '2023 - 2026',
        description: '',
        bullet_summary: 'Responsibilities',
        bullets: [
            'Delivered a classification algorithm into the F-35 production codebase that improved performance of combat identification and reduced overall mission-to-mission model update time',
            'Developed path prediction algorithm for autonomous agents that fused kinematic state tracking and LSTM model predictions',
            'Developed data analysis tools in Python and C# for big data management',
            'Lead daily standup, retrospective, and demos as Scrum Master'
        ],
        tags: ["Agile", "Leadership", "Python", "C++", "AI/ML", "Statistics"]
    },
    {
        role: 'Machine Learning Intern',
        company: 'Encapture',
        location: "Dallas, TX",
        dates: '2022',
        description: '',
        bullet_summary: 'Responsibilities',
        bullets: [
            'Developed Python testing harness for benchmarking proprietary NLP algorithms against state-of-the-art models from Amazon and Google',
            'Translated C# model code into Python and integrated AWS Comprehend for rapid prototyping of models in a cloud environment',
            'Developed UML diagrams for existing codebases'
        ],
        tags: ["Agile", "Leadership", "Python", "C++", "AI/ML", "Statistics"]
    },
];

export const skills = [
    {
        title: "Programming Languages",
        tags: ["Python", "Rust", "C++", "C", "JSX"]
    },
    {
        title: "Machine Learning & Data Science",
        tags: ["Scikit-Learn", "PyTorch", "Pandas", "NumPy", "Seaborn"]
    },
    {
        title: "DevOps & Tools",
        tags: ["Agile", "Git", "Jenkins CI/CD", "Docker"]
    },
    {
        title: "Web & App Development",
        tags: ["React.js", "Angular.js", "Astro.js", "Android", "Firebase", "Firestore"]
    },
    {
        title: "Robotics",
        tags: ["ROS2"]
    }
]