<script>
import scrollToTopButton from '../components/scrollToTopButton.vue';
import { store } from '../store';

export default {
    name: "AboutPage",
    components: {
        scrollToTopButton
    },
    data() {
        return {
            store,
            // FRONTEND
            frontend: [
                "HTML5",
                "CSS3/Sass",
                "Javascript ES6",
                "Bootstrap",
                "Quasar",
                "Vue",
            ],

            // BACKEND
            backend: [
                "Php",
                "Laravel 9",
                "MySQL",
                "RxDB",
            ],

            learning: [
                "React.js",
                "Tailwindcss", 
                "Typescript",
                "Gsap",
            ],

            // TOOLS
            tools: [
                "VS Code",
                "Bash",
                "Npm",
                "Git & Github",
                "Chrome DevTools",
                "Postman",
            ]
        }
    },
}
</script>

<template>
    <!-- CONTAINER -->
    <div class="container">
        <!-- ABOUT ME SECTION -->
        <section class="about-me row">
            <div class="col-5 col-lg-6 d-flex align-items-center justify-content-end">
                <div class="bar">
                    <div class="progress"></div>
                </div>
            </div>
            <div class="col-7 col-lg-6">
                <h2 class="title">about me</h2>
            </div>

            <div class="col-lg-6 d-flex justify-content-end">
                <!-- <img class="profile m-0" src="../assets/img/profile.jpeg" alt=""> -->
            </div>
            <div class="text col-lg-6 col-md-12 d-flex flex-column justify-content-end">
                <p class="description text-justify font-weight-100">
                    <!-- Hello, I'm Lawrence, a junior full-stack web developer based in sunny Messina, Sicily, where it
                    feels
                    like summer all year round. I'm deeply passionate about technology and have a relentless drive to
                    enhance my skills and embrace new technologies.

                    In addition to my web development background, I'm currently exploring the exciting world of UX/UI
                    design. I'm captivated by the art of creating user-friendly
                    and visually appealing interfaces that enhance the digital experience.

                    While I'm in a phase of exploration, I'm also actively seeking opportunities to apply my skills and
                    knowledge. Whether it's collaborating on projects, or finding internships, I'm open to
                    exciting opportunities in the tech and design space.

                    When I'm not immersed in code and design, you'll find me hitting the streets on my bicycle, enjoying
                    the
                    beautiful strait of Messina, or on the hunt for the next netflix series to binge.

                    I'm excited about the journey ahead, eager to learn, and ready to contribute to the tech and design
                    communities. Let's connect and explore the possibilities together!" -->
                    Hi! I'm Lawrence, a frontend developer with a solid foundation in HTML, CSS, JavaScript and Vue. I
                    have experience in industrial projects where I collaborated with development teams to enhance the
                    usability and functionality of websites. Expanding my skill set with React to diversify my frontend
                    expertise. I am seeking an opportunity in an innovative environment that values UX/UI design. In my
                    free time, I love exploring nature andgoing on long bike rides to unwind. Feel free to connect
                    with me on LinkedIn. I’d love to connect and exchange ideas!
                </p>
            </div>
        </section>
        <!-- /ABOUT ME SECTION -->

        <!-- SKILLS SECTION -->
        <section class="skills row mt-5">
            <div class="col-12 col-lg-6 col-sm-12">
                <p>SKILLS</p>
            </div>
            <div class="col">
                <p>FRONTEND</p>
                <ul>
                    <li class="font-weight-100" v-for="fe in frontend" :key="fe"> {{ fe }}</li>
                </ul>
            </div>
            <div class="col">
                <p>BACKEND</p>
                <ul>
                    <li class="font-weight-100" v-for="be in backend" :key="be"> {{ be }}</li>
                </ul>
            </div>
            <div class="col">
                <p>TOOLS</p>
                <ul>
                    <li class="font-weight-100" v-for="tool in tools" :key="tool"> {{ tool }}</li>
                </ul>
            </div>
            <div class="col">
                <p>LEARNING</p>
                <ul>
                    <li class="font-weight-100" v-for="wip in learning" :key="wip"> {{ wip }}</li>
                </ul>
            </div>
        </section>
        <!-- /SKILLS SECTION-->

        <!-- WORK EXPERIENCE SECTION -->
        <section class="work-experience row mt-5">
            <div class="col-12 col-lg-6 col-sm-12">
                <p>WORK EXPERIENCE</p>
            </div>
            <div class="col col-lg-6 mb-5">
                <ul>
                    <li class="list" v-for="(exp, index) in this.store.experience" :key="index">
                        <span>{{ exp.title }}</span>
                        <h4>{{ exp.company }}</h4>
                        <p>{{ exp.period }}</p>
                        <p class="font-weight-100">{{ exp.description }}</p>
                        <ul v-if="exp.work" class="font-weight-100">
                            <li class="" v-for="(item, i) in exp.work" :key="i">
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
        <!-- /WORK EXPERIENCE SECTION -->

        <!-- EDUCATION SECTION -->
        <section class="education row mt-5">
            <div class="col-12 col-lg-6 col-sm-12">
                <p>EDUCATION</p>
            </div>
            <div class="col col-lg-6 mb-5">
                <ul>
                    <li class="list" v-for="(edu, index) in this.store.education" :key="index">
                        <span>{{ edu.qualification }}</span>
                        <h4>{{ edu.school }}</h4>
                        <p>{{ edu.period }}</p>
                        <p class="font-weight-100">{{ edu.description }}</p>
                    </li>
                </ul>
            </div>
        </section>
        <!-- EDUCATION SECTION -->

        <!-- CV SECTION -->
        <section class="cv row mt-5 mb-5">
            <div class="col-12 col-lg-6 col-sm-12">
                <p>CV</p>
            </div>
            <div class="col">
                <a class="btn btn-lg btn-blue rounded-pill"
                    onclick="window.open('/lawrence-edulian-cv-ita.pdf', '_blank'); return false">ITALIAN</a>
            </div>

            <div class="col">
                <a class="btn btn-lg btn-blue rounded-pill"
                    onclick="window.open('/lawrence-edulian-cv-eng.pdf', '_blank'); return false">ENGLISH</a>
            </div>
        </section>
        <!-- /CV SECTION -->

        <scrollToTopButton></scrollToTopButton>
    </div>
    <!-- /CONTAINER -->
</template>

<style lang="scss" scoped>
p {
    text-align: justify;
}

.font-weight-100 {
    font-weight: 100;
}

li {
    font-size: 1rem;
}

.work-experience {
    li {
        list-style-type: disc;
    }

    .list:first-child {
        list-style-type: none;
    }
}

.work-experience,
.skills {
    border-top: 1px solid var(--text-color);
    padding-top: 3rem;
}

.work-experience,
.education {
    border-bottom: 1px solid var(--text-color);
}

.about-me {
    .profile {
        width: 100%;
        max-width: 400px;
        height: auto;
        object-fit: cover;
    }

    .title {
        font-size: 5rem;
    }

    .description {
        margin-bottom: 0;
    }
}

.cv {

    .btn {
        font-size: .8rem;
    }

    .btn-blue {
        background-color: var(--text-color);
        color: white;
    }

    .btn-blue:hover {
        background-color: white;
        color: var(--text-color);
        outline: auto;
    }
}

.list:not(:first-child) {
    margin-top: 2.5rem;
}

@media screen and (max-width: 991px) {
    .about-me {
        .title {
            font-size: 4rem;
        }

        .description {
            margin-top: 1rem;
        }
    }

    .work-experience,
    .skills {
        border-top: none
    }

    .work-experience,
    .skills,
    .education {
        border-bottom: none;

        .col.col-lg-6.mb-5 {
            margin-top: 1.2rem;
        }
    }

    .skills {
        .col {
            margin-top: 1.2rem;
        }
    }

    .col-12 {
        border-bottom: 1px solid var(--text-color);
    }

    .cv {
        .col {
            margin-top: 1rem;
        }
    }
}


@media screen and (max-width: 768px) {
    p {
        font-size: .8rem;
    }

    li {
        font-size: .8rem;
    }

    .about-me {
        .title {
            font-size: 3rem;
        }

        .text {
            padding-top: 5rem;
        }
    }
}
</style>