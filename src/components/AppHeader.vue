<script>
export default {
    name: 'AppHeader',
    props: {
        isMenuOpen: Boolean, // Pass isMenuOpen as a prop from the parent component
    },
    methods: {
        toggleMenu() {
            this.$emit('toggleMenu'); // Emit the event to toggle the menu
        },
    },
    computed: {
        routeBgColor() {
            const currentRoute = this.$route;
            return currentRoute.meta.bgColor || '#fffeee'; // Colore di default se non specificato
        }
    },
};
</script>

<template>
    <header class="d-flex align-items-center" :style="{ backgroundColor: routeBgColor }">
        <div class="container d-flex justify-content-end">
            <div class="hamburger d-flex flex-column justify-content-between" @click="toggleMenu">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </header>
</template>
  

<style lang="scss">
header {
    height: var(--header-height);
    font-size: var(--font-size-header);

    .hamburger {
        height: 15px;
        cursor: pointer;

        .bar {
            width: 23px;
            height: 2px;
            background-color: var(--button-color);
        }
    }
}
</style>
    