<script>
export default {
    name: "Homepage",
    data() {
        return {
            currentImageUrl: "/img/homepage/1.png",
            totalImg: 14,
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
            setInterval(this.changeImage, 200);
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="name-container">
            <img class="name" :src="currentImageUrl" alt="Name" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - var(--header-height) - var(--footer-height));
    display: flex;
    justify-content: center;
    align-items: center;
}

.name-container {
    max-width: 100%;
    height: auto;

    .name {
        width: 100%;
    }
}
</style>
