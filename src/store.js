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
            description: 'Intensive 700-hour theoretical and practical course during which I had the opportunity to study and master the main backend and frontend technologies.'   
        },
        {
            school: 'IIS Verona Trento',
            qualification: 'Diploma in Computer Science',
            period: 'SEPTEMBER 2013 - JULY 2019',
            description: 'Skills in information systems, information processing, web applications and technologies, as well as networks and communication devices.'
        }
    ],

    // EXPERIENCE
    experience: [
        {
            title: 'Frontend Developer',
            company: 'Cleverativity',
            period: 'JANUARY 2024 - PRESENT',
            description: 'Development of websites for the industrial sector with real-time support. Optimization of user experience through the implementation of responsive and functional interfaces.'
        },
        {
            title: 'Junior Full Stack Web Developer Trainee',
            company: 'Boolean',
            period: 'SEPTEMBER 2022 - FEBRUARY 2023',
            description: 'Intensive six-month course where I learned the fundamentals of web development from scratch. At the end of the course, I developed a web application using Vue and Laravel, putting the acquired skills into practice.'
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