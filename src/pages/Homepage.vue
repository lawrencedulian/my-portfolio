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
        <div class="home p-4">
            <h3 class="subtitle mb-2">Hello! I am,</h3>
            <img class="title ps-3 pe-3" :src="currentImageUrl" alt="Name" />
            <h3 class="subtitle mt-2 text-end">frontend developer</h3>
        </div>
        <!-- /HOME -->
    </div>
    <!-- /CONTAINER -->
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - var(--header-height) - var(--footer-height));
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
        width: 100%;
    }

    .subtitle {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 768px) {

    .container {
        .subtitle {
            font-size: 1rem;
        }
    }
}
</style>
