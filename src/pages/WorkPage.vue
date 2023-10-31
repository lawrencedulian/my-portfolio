<script>
export default {
    name: "WorkPage",
    data() {
        return {
            works: [
                {
                    //BOOLBNB
                    title: "Boolbnb",
                    cover: "boolbnb.png",
                    description: "Landing page"
                },
                {
                    //DROPBOX
                    title: "Dropbox",
                    cover: "dropbox.png",
                    description: "Landing page"
                },
                {
                    //SPOTIFY
                    title: "Spotify",
                    cover: "spotify.png",
                    description: "Landing page"

                },
                {
                    //BOOLFLIX
                    title: "Boolflix",
                    cover: "boolflix.png",
                    description: "Replica ui of Netflix, added filter function"
                },
                {
                    //BOOLZAPP
                    title: "Boolzapp",
                    cover: "boolzapp.png",
                    description: "Replica ui of Whatsapp, added send message function"
                },
                {
                    //DISCORD
                    title: "Discord",
                    cover: "discord.png",
                    description: "Landing page"
                },
                {
                    //PLAYSTATION
                    title: "Playstation",
                    cover: "playstation.png",
                    description: "Landing page"
                },
                {
                    //PORTFOLIO
                    title: "Portfolio",
                    cover: "portfolio.png",
                    description: "Landing page"
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
            <h2 class="title">work</h2>
        </section>


        <section class="work-projects row mt-5">
            <div class="col mb-5">
                <ul>
                    <li class="d-flex justify-content-between mb-5" v-for="(work, index) in works" :key="index">
                        <!-- Se l'indice è pari, metti l'immagine prima di h4 -->
                        <template v-if="index % 2 === 0">
                            <img class="mb-5" :src="getImage(`/img/projects/${work.cover}`)" alt="">
                            <h4>{{ work.title }}</h4>
                            <p>{{ work.description }}</p>
                        </template>
                        <!-- Se l'indice è dispari, metti h4 prima dell'immagine -->
                        <template v-else>
                            <h4>{{ work.title }}</h4>
                            <p>{{ work.description }}</p>
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

@media screen and (max-width: 991px) {
    .title {
        font-size: 3rem;
    }
}
</style>