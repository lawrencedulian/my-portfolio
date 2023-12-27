<script>
export default {
    name: "WorkPage",
    data() {
        return {
            // WORKS
            works: [
                {
                    //BOOLBNB
                    title: "Boolbnb",
                    cover: "boolbnb.png",
                    description: "is a web app that allows you to find and manage apartment rentals.",
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
                    description: "replica ui of Netflix, using the movie databse (TMDB) to search film and series",
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
                    description: "replica old ui of Whatsapp, added send message function",
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
                <div class="container">
                    <div class="text">
                        <h4>{{ work.title }}</h4>
                        <p>{{ work.description }}</p>
                        <ul class="d-flex flex-wrap align-items-center">
                            <li v-for="pl in work.programmingLanguage" :key="pl" class="pl">{{ pl }}</li>
                        </ul>
                    </div>

                    <img class="mb-5 cover" :src="getImage(`/img/projects/${work.cover}`)" alt="">
                </div>
            </div>
        </section>
        <!-- /WORK PROJECTS -->
    </div>
    <!-- /CONTAINER -->
</template>

<style lang="scss" scoped>
.title {
    font-size: 5rem;
}

h4 {
    border-bottom: 1px solid var(--text-color);
}


.cover {
    width: 100%;
    max-width: 600px;
    height: 350px;
    object-fit: cover;
    object-position: top;
    box-shadow: 3px 3px 1px #ccc;
}

.text {
    height: 170px;

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
    padding: .2rem .5rem .2rem .5rem;
}

@media screen and (max-width: 991px) {
    .title {
        font-size: 3rem;
    }
}
</style>