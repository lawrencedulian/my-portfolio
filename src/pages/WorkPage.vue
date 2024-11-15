<script>
import scrollToTopButton from '../components/scrollToTopButton.vue';
export default {
    name: "WorkPage",
    components: {
        scrollToTopButton
    },
    data() {
        return {
            // WORKS
            works: [
                {
                    //REACT APPLE LANDING PAGE
                    title: "Apple Landing Page",
                    cover: "apple-landing-page.png",
                    description: "Apple landing page responsive built with react, learning gsap animation",
                    programmingLanguage: [
                        "html",
                        "css",
                        "javascript",
                        "tailwind",
                        "react",
                        "gsap"
                    ],
                    github: "https://github.com/lawrencedulian/react-apple-landing-page",
                    netlify: "https://react-gsap-landing-page.netlify.app/",
                },
                {
                    //REACT NASA-API
                    title: "Swole Fit",
                    cover: "react-swole-fit.png",
                    description: "The ultimate gym app built with react and tailwind css",
                    programmingLanguage: [
                        "html",
                        "css",
                        "javascript",
                        "tailwind",
                        "react"
                    ],
                    github: "https://github.com/lawrencedulian/react-swoley-fit",
                    netlify: "https://react-swoley-fit.netlify.app/",
                },
                {
                    //REACT NASA-API
                    title: "NASA API",
                    // cover: ["react-nasa-1.png", "react-nasa-2.png"],
                    cover: "react-nasa-1.png",
                    description: "Build a React.JS App with Nasa API",
                    programmingLanguage: [
                        "html",
                        "css",
                        "javascript",
                        "react"
                    ],
                    github: "https://github.com/lawrencedulian/nasa-react-app",
                    netlify: "https://react-apii-nasa.netlify.app/",
                },
                {
                    //REACT TODO-LIST
                    title: "Todo-List",
                    cover: "react-todolist.png",
                    description: "Simple to-do list created to learn the fundamentals of React, focusing on props, state, and component structure.",
                    programmingLanguage: [
                        "html",
                        "css",
                        "javascript",
                        "react"
                    ],
                    github: "https://github.com/lawrencedulian/react-todolist",
                    netlify: "https://reactjs-todo-listt.netlify.app/"
                },
                {
                    //BOOLBNB
                    title: "Boolbnb",
                    cover: "boolbnb.png",
                    description: "Is a web app that allows you to find and manage apartment rentals.",
                    programmingLanguage: [
                        "html",
                        "css",
                        "javascript",
                        "vue",
                        "laravel",
                        "api",
                        "mysql"
                    ],
                    github: "https://github.com/sder12/vue-boolbnb",
                },
                {
                    //BOOLFLIX
                    title: "Boolflix",
                    cover: "boolflix.png",
                    description: "Replica ui of Netflix, using the movie databse (TMDB) to search film and series",
                    programmingLanguage: [
                        "html",
                        "css",
                        "api",
                        "javascript",
                        "vue"
                    ]
                },
                {
                    //BOOLZAPP
                    title: "Boolzapp",
                    cover: "boolzapp.png",
                    description: "Replica old ui of Whatsapp, added send message function",
                    programmingLanguage: [
                        "html",
                        "css",
                        "javascript",
                        "vue"
                    ]
                },
                {
                    //DROPBOX
                    title: "Dropbox",
                    cover: "dropbox.png",
                    description: "Landing page",
                    programmingLanguage: [
                        "html",
                        "css",
                    ]
                },
                {
                    //SPOTIFY
                    title: "Spotify",
                    cover: "spotify.png",
                    description: "Landing page",
                    programmingLanguage: [
                        "html",
                        "css",
                    ]
                },
                {
                    //DISCORD
                    title: "Discord",
                    cover: "discord.png",
                    description: "Landing page",
                    programmingLanguage: [
                        "html",
                        "css",
                    ]
                },
                {
                    //PLAYSTATION
                    title: "Playstation",
                    cover: "playstation.png",
                    description: "Landing page",
                    programmingLanguage: [
                        "html",
                        "css",
                    ]
                },
                {
                    //PORTFOLIO
                    title: "Portfolio",
                    cover: "portfolio.png",
                    description: "Landing page",
                    programmingLanguage: [
                        "html",
                        "css",
                    ]
                },
            ],
        }
    },
    methods: {
        getImage(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    }
}
</script>

<template>
    <!-- CONTAINER -->
    <div class="container">
        <!-- WORK HEADING -->
        <section class="work row">
            <div class="col-6 d-flex align-items-center justify-content-end">
                <div class="bar">
                    <div class="progress"></div>
                </div>
            </div>
            <div class="col-6">
                <h2 class="title">works</h2>
            </div>
        </section>
        <!-- /WORK HEADING -->

        <!-- WORK PROJECTS -->
        <section class="work-projects row row-cols-md-2 mt-5">
            <div class="col-12" v-for="(work, index) in works" :key="index">
                <div class="text mb-2">
                    <div class="box d-flex justify-content-between align-items-center">
                        <h4 class="mb-0">{{ work.title }}</h4>
                        <div class="row justify-content-center">
                            <div class="col-1">
                                <a :href="work.github" :class="work.github ? '' : 'd-none'" target="_blank">
                                    <i class="fa-brands fa-lg fa-github"></i>
                                </a>
                            </div>
                            <div class="col-1" :class="work.netlify ? 'ms-3' : ''">
                                <a :href="work.netlify" :class="work.netlify ? '' : 'd-none'" target="_blank">
                                    <i class="fa-solid fa-lg fa-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <p class="work-desc mt-1 mb-1">{{ work.description }}</p>
                    <ul class="d-flex flex-nowrap align-items-center">
                        <li v-for="pl in work.programmingLanguage" :key="pl" class="pl">{{ pl }}</li>
                    </ul>
                </div>

                <div v-if="Array.isArray(work.cover) && work.cover.length > 1">

                    <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-slide active" v-for="(img, index) in work.cover" :key="index">
                                    <img class="cover mb-5" :src="getImage(`/img/projects/${img}`)" alt="" />
                                </div>

                            </div>
                        </div> -->
                    <div class="carousel-slide" v-for="(img, index) in work.cover" :key="index">
                        <img class="cover mb-5" :src="getImage(`/img/projects/${img}`)" alt="" />
                    </div>
                </div>

                <img v-else class="cover mb-5" :src="getImage(`/img/projects/${work.cover}`)" alt="" />
            </div>
        </section>
        <!-- /WORK PROJECTS -->

        <scrollToTopButton></scrollToTopButton>
    </div>
    <!-- /CONTAINER -->
</template>

<style lang="scss" scoped>
.title {
    font-size: 5rem;
}

.box {
    border-bottom: 1px solid var(--text-color);
}

.cover {
    width: 100%;
    height: 340px;
    object-fit: cover;
    object-position: top;
    box-shadow: 3px 3px 1px #ccc;
}

.text {
    .pl:first-child {
        margin-left: 0;
    }

    .pl {
        margin: .3rem;
    }
}

.pl {
    border: 1px solid var(--text-color);
    border-radius: 20px;
    font-size: .8rem;
    padding: .2rem .5rem .2rem .5rem;
}

.work-projects {
    ul {
        max-width: 100%;
        overflow-x: auto;
    }
}

@media screen and (max-width: 991px) {
    .title {
        font-size: 3rem;
    }
}

@keyframes appear {
    from {
        opacity: 0;
        scale: 0.5;
    }

    to {
        opacity: 1;
        scale: 1;
    }
}

.col-12 {
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
}
</style>