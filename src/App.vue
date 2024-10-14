<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import pageSlideTransition from './components/pageSlideTransition.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
        pageSlideTransition
    },
    data() {
        return {
            isMenuOpen: false,
        };
    },
    computed: {
        routeBgColor() {
            const currentRoute = this.$route;
            return currentRoute.meta.bgColor || '#fffeee'; // Colore di default se non specificato
        },
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    }
};
</script>

<template>
    <div class="overlay d-md-none" :class="{ 'show': isMenuOpen }" v-if="isMenuOpen" @click="closeMenu">
        <div class="position-relative">
            <div class="menu-wrapper position-absolute top-50 end-0 translate-middle-y" @click="toggleMenu">
                <div class="menu-bar one"></div>
                <div class="menu-bar two"></div>
            </div>
        </div>
        
        <div class="overlay-content position-absolute top-50 start-0 translate-middle-y">
            <ul class="d-flex flex-column align-items-start">
                <li>
                    <router-link :to="'/'" class="nav-link">HOME</router-link>
                </li>
                <li>
                    <router-link :to="'/work'" class="nav-link">WORK</router-link>
                </li>
                <li>
                    <router-link :to="'/about'" class="nav-link">ABOUT</router-link>
                </li>
                <!-- <li>
                    <router-link :to="'/contact'" class="nav-link">CONTACT</router-link>
                </li> -->
            </ul>
        </div>
    </div>

    <AppHeader :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />

    <main :style="{ backgroundColor: routeBgColor }">
        <router-view v-slot="{ Component }">
            <pageSlideTransition>
                <component :is="Component" />
            </pageSlideTransition>
        </router-view>
    </main>

    <AppFooter />
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--text-color);
    display: none;
    z-index: 1;

    .overlay-content {
        padding: 20px;
        border-radius: 8px;

        .nav-link {
            display: block;
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            text-decoration: none;
            transition: font-size 0.2s;
            padding: .5rem;
        }

        .nav-link.router-link-active {
            border: 1px solid white;
            border-radius: 15px;
            padding: .5rem;
        }
    }

    .overlay-content a {
        display: block;
        margin: 10px 0;
        font-size: 18px;
        color: #333;
        text-decoration: none;
    }
}

.overlay.show {
    display: block;
}

.menu-bar {
    background: white;
}

.menu-wrapper {
    margin-right: 1.5rem;
    margin-top: 2rem;
}
</style>
