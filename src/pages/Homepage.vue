<script>
export default {
    name: "Homepage",
    data() {
        return {
            currentImageUrl: "/img/homepage/1.png",
            totalImg: 13,
        };
    },
    mounted() {
        this.startImageChangeInterval();
    },
    methods: {
        changeImage() {
            this.currentImageUrl = `/img/homepage/${(this.currentIndex % this.totalImg) + 1}.png`;
            this.currentIndex++;
        },
        startImageChangeInterval() {
            this.currentIndex = 1;
            setInterval(this.changeImage, 250);
        },
    },
};
</script>

<template>
    <!-- CONTAINER -->
    <div class="container">
        <!-- HOME -->
        <div class="home">
            <h3 class="subtitle mb-2">Hello! 👋 I am,</h3>
            <img class="title ps-5 pe-5" :src="currentImageUrl" alt="Name" />
            <h3 class="subtitle mt-2 text-end">- front end web developer</h3>
        </div>
        <!-- /HOME -->
    </div>
    <!-- /CONTAINER -->
</template>

<style lang="scss" scoped>
// CONTAINER
.container {
    height: calc(100vh - var(--header-height) - var(--footer-height));
    display: flex;
    justify-content: center;
    align-items: center;

    // TITLE
    .title {
        width: 100%;
    }

    // SUBTITLE
    .subtitle {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 768px) {

    // CONTAINER
    .container {

        // SUBTITLE
        .subtitle {
            font-size: 1rem;
        }
    }
}
</style>
