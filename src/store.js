import { reactive } from "vue";

export const store = reactive({

    // EDUCATION
    education: [
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
            period: 'JANUARY 2024 - PRESENT',
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