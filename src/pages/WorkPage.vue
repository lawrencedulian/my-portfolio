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
            <div class="col-6">
                <h2 class="title">work</h2>
            </div>
        </section>


        <section class="work-projects row row-cols-md-2 mt-5">
            <div class="col-12 mb-5" v-for="(work, index) in works" :key="index">
                <div class="container" style="max-height: 400px;">
                    <h4>{{ work.title }}</h4>
                    <p>{{ work.description }}</p>
                    <img class="mb-5" :src="getImage(`/img/projects/${work.cover}`)" alt="">
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.title {
    font-size: 5rem;
}

h4 {
    border-bottom: 1px solid var(--text-color);
}


img {
    width: 100%;
    max-width: 600px;
    height: 350px;
    object-fit: cover;
    object-position: top;
    box-shadow: 3px 3px 1px #ccc;
}

@media screen and (max-width: 991px) {
    .title {
        font-size: 3rem;
    }
}
</style>