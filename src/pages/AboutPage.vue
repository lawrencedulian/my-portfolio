<script>
import { store } from '../store';

export default {
    name: "AboutPage",
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container">
        <section class="about-me row">
            <div class="col-lg-6 d-flex justify-content-end">
                <img class="profile m-0" src="../assets/img/profile.jpeg" alt="">
            </div>
            <div class="text col-lg-6 col-md-12 d-flex flex-column justify-content-between">
                <div class="title-container">
                    <h2 class="title">about me</h2>
                </div>
                <p class="description text-justify m-0">
                    Hello, I'm Lawrence, a junior full-stack web developer based in sunny Messina, Sicily, where it feels
                    like summer all year round. I'm deeply passionate about technology and have a relentless drive to
                    enhance my skills and embrace new technologies.

                    In addition to my web development background, I'm currently exploring the exciting world of UX/UI
                    design. I'm captivated by the art of creating user-friendly
                    and visually appealing interfaces that enhance the digital experience.

                    While I'm in a phase of exploration, I'm also actively seeking opportunities to apply my skills and
                    knowledge. Whether it's collaborating on projects, or finding internships, I'm open to
                    exciting opportunities in the tech and design space.

                    When I'm not immersed in code and design, you'll find me hitting the streets on my bicycle, enjoying the
                    beautiful strait of Messina, or on the hunt for the next netflix series to binge.

                    I'm excited about the journey ahead, eager to learn, and ready to contribute to the tech and design
                    communities. Let's connect and explore the possibilities together!"

                </p>
            </div>
        </section>

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
                        <p>{{ exp.description }}</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="education row mt-5">
            <div class="col-12 col-lg-6 col-sm-12">
                <p>EDUCATION</p>
            </div>
            <div class="col mb-5">
                <ul>
                    <li class="list" v-for="(edu, index) in this.store.education" :key="index">
                        <span>{{ edu.qualification }}</span>
                        <h4>{{ edu.school }}</h4>
                        <p>{{ edu.period }}</p>
                        <p>{{ edu.description }}</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="cv row mt-5">
            <div class="col">
                <span>CV</span>
            </div>
            <div class="col mb-5">
                <a class="btn btn-lg btn-blue rounded-pill"
                    onclick="window.open('/lawrence-edulian.pdf', '_blank'); return false">download</a>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
p {
    text-align: justify;
}

.work-experience {
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
}

.cv {
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
    }
}


@media screen and (max-width: 768px) {
    p {
        font-size: .8rem;
    }

    .about-me {
        .title {
            font-size: 3rem;
        }

        .profile {
            width: 100%;
            max-width: 800px;
            height: auto;
            object-fit: cover;
        }

        .text {
            padding-top: 5rem;
        }
    }
}
</style>