<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            name: 'lawrence',
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
        <div class=" overlay-content position-absolute top-50 start-0 translate-middle-y">
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
                <li>
                    <router-link :to="'/contact'" class="nav-link">CONTACT</router-link>
                </li>
            </ul>
        </div>
    </div>

    <AppHeader :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />

    <main :style="{ backgroundColor: routeBgColor }">
        <router-view v-slot="{ Component }">
            <transition name="page-slide" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>

    <AppFooter />
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;

.v-enter-active,
.v-leave-active {
    transition: opacity 5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.page-opacity-enter-active,
.page-opacity-leave-active {
    transition: 5s ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
    opacity: 0;
}

.page-slide-enter-active {
    transition: 1500ms ease all;
}

.page-slide-leave-active {
    transition: 500ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
    opacity: 0;
    transform: translateY(60px);
}

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
        padding: 30px;
        border-radius: 8px;

        .nav-link {
            display: block;
            font-size: 1.8rem;
            font-weight: bold;
            color: white;
            text-decoration: none;
            transition: font-size 0.2s;
            padding: .5rem;
        }

        .nav-link.router-link-active {
            border: 1px solid white;
            border-radius: 20px;
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
</style>
