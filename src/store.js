import { reactive } from "vue";

export const store = reactive({

    // EDUCATION
    education: [
        {
            school: 'Three School - Opinno',
            qualification: 'AWS Solution Architect',
            period: 'JANUARY 2025',
            description: 'In-depth training on designing and deploying scalable, secure, and efficient cloud solutions on Amazon Web Services (AWS). Through a combination of lectures and hands-on labs, I gained expertise in architecting advanced AWS infrastructures, with a focus on resilience, performance, and cost optimization. I developed skills in designing and implementing cloud solutions that meet business requirements, and learned best practices for optimizing resources and minimizing costs.'
        },
        {
            school: 'Three School - Opinno',
            qualification: 'AWS Cloud Practitioner',
            period: 'NOVEMBER 2024',
            description: 'Introduction to the fundamental concepts of cloud computing and AWS services, with a focus on scalable architectures and best practices for optimizing resources. I have acquired the necessary skills to understand the basic principles of the cloud and support business decisions based on cloud solutions.'
        },
        {
            school: 'Nextar',
            qualification: 'Microsoft Sharepoint',
            period: 'SEPTEMBER 2023 - NOVEMBER 2023',
            description: '120-hour course focused on deepening knowledge of the Office 365 ecosystem. I acquired skills in SharePoint Online, Power Automate, Power Apps, and Power Platform.'
        },
        {
            school: 'Boolean Careers',
            qualification: 'Master Full Stack Web Developer',
            period: 'SEPTEMBER 2022 - FEBRUARY 2023',
            description: 'Intensive six-month course where I learned the fundamentals of webdevelopment programming from scratch. At the end of the course, Ideveloped a web application using Vue and Laravel, applying the skills Ihad acquired.'   
        },
        {
            school: 'IIS Verona Trento',
            qualification: 'Diploma in Computer Science',
            period: 'SEPTEMBER 2013 - JULY 2019',
            description: 'Skills  in  information  systems,  data  processing,  web  applications  andtechnologies, as well as in networks and communication devices.'
        }
    ],

    // EXPERIENCE
    experience: [
        {
            title: 'Frontend Developer',
            company: 'Cleverativity',
            period: 'JANUARY 2024 - DECEMBER 2024',
            description: 'Frontend developer in a company working on industrial/mechanical projects. My responsibilities include:',
            work: [
               "Developing responsive and intuitive user interfaces to enhance overall user experience.",
               "Creating and maintaining customizable websites for heat exchangers based on technical input from clients.",
               "Collaborating with the team to integrate feedback and optimize sitefunctionality, ensuring that client requirements are fully met.",
               "Utilizing a technology  stack (Vue, Quasar, TypeScript) to build reusable and maintainable components.",
               "Support: Managing entire projects and coordinating work  for colleagues by distributing tasks and providing support to meet deadlines.",
               "Communication and Problem-Solving: Actively participating in sprint meetings to update the team on tasks and challenges, and independently conducting client meetings to present progress and address technical questions.",
               "Independently completing most tasks while effectively  solving technical issues and meeting deadlines.",
               "English Proficiency: Fluent in English, enabling effective communication and collaboration with international colleagues."
            ]
            
        },
        // {
        //     title: 'Wine Manager',
        //     company: 'Cantine Madaudo S.r.l.',
        //     period: 'APRIL 2020 - AUGUST 2022',
        //     description: 'Wine production and bottling manager. Management of the main activities of the company.'
        // }
    ],

    // SKILLS
    skill: [
        {
            title: 'front-end',
            pl: ['html', 'css', 'bootstrap', 'javascript', 'vue']
        },
        {
            title: 'back-end',
            pl: ['php', 'laravel', 'mysql']
        }
    ],

    // SOCIALS
    social: [
        {
            name: 'github',
            link: 'https://github.com/lawrencedulian',
            icon: 'fa-brands fa-github'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/lawrenceedulian/',
            icon: 'fa-brands fa-linkedin-in'
        },
    ]
})