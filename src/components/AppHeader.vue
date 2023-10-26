<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            isCursorHovered: false,
        }
    },
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
        <div class="container d-flex justify-content-end d-md-none">
            <div class="hamburger d-flex flex-column justify-content-between" @click="toggleMenu">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>

        <div class="container d-flex menu d-md-block d-none">
            <div class="row">
                <div class="col-4">
                    <ul class="d-flex justify-content-between align-items-center">
                        <li>
                            <router-link :to="'/'" class="nav-link">HOME</router-link>
                        </li>
                        <li>
                            <router-link :to="'/work'" class="nav-link">WORK</router-link>
                        </li>
                        <li>
                            <router-link :to="'/about'" class="nav-link">ABOUT</router-link>
                        </li>
                        <li>
                            <router-link :to="'/contact'" class="nav-link">CONTACT</router-link>
                        </li>
                    </ul>
                </div>
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

    .menu {
        .nav-link {
            padding: .2rem .5rem .2rem .5rem;
            cursor: none;
        }

        .nav-link.router-link-active {
            border: 1px solid var(--text-color);
            border-radius: 20px;
        }

        font-weight: 500;
    }
}
</style>
    