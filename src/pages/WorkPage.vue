<script>
export default {
    name: "WorkPage",
    data() {
        return {
            works: [
                {
                    //BOOLBNB
                    title: "Boolbnb",
                    cover: "boolbnb.png"
                },
                {
                    //DROPBOX
                    title: "Dropbox",
                    cover: "dropbox.png",
                },
                {
                    //SPOTIFY
                    title: "Spotify",
                    cover: "spotify.png",
                },
                {
                    //BOOLZAPP
                    title: "Boolzapp",
                    cover: "boolzapp.png",
                },
                {
                    //DISCORD
                    title: "Discord",
                    cover: "discord.png",
                },
                {
                    //PLAYSTATION
                    title: "Playstation",
                    cover: "playstation.png",
                },
                {
                    //PORTFOLIO
                    title: "Portfolio",
                    cover: "portfolio.png",
                },
            ]
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
    <div class="container">
        <section class="work row">
            <div class="col-6"></div>
            <div class="col-6">
                <h2 class="title">work</h2>
            </div>
        </section>

        <section class="work-projects row mt-5">
            <div class="col mb-5">
                <ul>
                    <li class="d-flex justify-content-between mb-5" v-for="(work, index) in works" :key="index">
                        <!-- Se l'indice è pari, metti l'immagine prima di h4 -->
                        <template v-if="index % 2 === 0">
                            <img class="mb-5" :src="getImage(`/img/projects/${work.cover}`)" alt="">
                            <h4>{{ work.title }}</h4>
                        </template>
                        <!-- Se l'indice è dispari, metti h4 prima dell'immagine -->
                        <template v-else>
                            <h4>{{ work.title }}</h4>
                            <img :src="getImage(`/img/projects/${work.cover}`)" alt="">
                        </template>
                    </li>
                </ul>

            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.title {
    font-size: 5rem;
}

img {
    width: 100%;
    max-width: 600px;
    height: 400px;
    object-fit: cover;
    object-position: top;
}
</style>