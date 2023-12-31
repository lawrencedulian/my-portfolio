<script>
export default {
    name: "scrollToTopButton",
    data() {
        return {
            showScroll: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollY = window.scrollY;
            const screenHeight = window.innerHeight;
            if (scrollY > screenHeight / 2) {
                console.log('Showing scroll button');
                this.showScroll = true;
            } else {
                console.log('Hiding scroll button');
                this.showScroll = false;
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>

<template>
    <transition name="fade">
        <div class="scroll-to-top" v-show="showScroll" @click="scrollToTop">
            <i class="fa-solid fa-arrow-up text-white"></i>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>