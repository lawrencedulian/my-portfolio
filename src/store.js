import { reactive } from "vue";

export const store = reactive({

    // EDUCATION
    education: [
        {
            school: 'Boolean Careers',
            qualification: 'Master Full Stack Web Developer',
            period: 'SEPTEMBER 2022 - FEBRUARY 2023',
            description: 'Intensive course of 700 theoretical and practical hours during which I had the opportunity to study and master the main back-end and front-end technologies sush as: html, css, bootstrap, laravel, mysql.'   
        },
        {
            school: 'IIS Verona Trento',
            qualification: 'Diploma in Computer Science',
            period: 'SEPTEMBER 2013 - JULY 2019',
            description: 'I have learned specific skills in IT systems, information processing, web applications, and technologies, as well as networks and communication equipment. Additionally, I have gained a foundation in C, C++, and Java programming languages.'
        }
    ],

    // EXPERIENCE
    experience: [
        {
            title: 'Full Stack Web Developer',
            company: 'Cleverativity',
            period: 'JANUARY 2024',
            description: 'Tailored industrial websites focused specifically for heat exchangers and constant real-time support.'
        },
        {
            title: 'Junior Full Stack Web Developer Trainee',
            company: 'Boolean',
            period: 'SEPTEMBER 2022 - FEBRUARY 2023',
            description: 'Intensive six months course, I learned the basics of programming for web development from scratch. Thanks to the theoretical lessons and practical exercises, I managed to carry out various projects and replicate web applications known both on the FrontEnd and BackEnd side. At the end of the course, together with my team we created a final project using frameworks, specifically Vue on the front-end side and Laravel on the back-end side for the creation of a BnB site. We have implemented several features, such as an advanced search system to find accommodation based on specific criteria.'
        },
        {
            title: 'Wine Manager',
            company: 'Cantine Madaudo S.r.l.',
            period: 'APRIL 2020 - AUGUST 2022',
            description: 'Wine production and bottling manager. Management of the main activities of the company.'
        }
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
            name: 'instagram',
            link: 'https://www.instagram.com/lawrenceedulian/',
            icon: 'fa-brands fa-instagram'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/lawrenceedulian/',
            icon: 'fa-brands fa-linkedin-in'
        },
    ]
})