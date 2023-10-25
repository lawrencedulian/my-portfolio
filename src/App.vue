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
        }
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
        <div class="overlay-content">
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }" class="nav-link">HOME</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'work' }" class="nav-link">WORK</router-link>

                </li>
                <li>
                    <router-link :to="{ name: 'about' }" class="nav-link">ABOUT</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'contact' }" class="nav-link">CONTACT</router-link>
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 20px;
        border-radius: 8px;

        .nav-link {
            display: block;
            font-size: 1.2rem;
            font-weight: bold;
            color: white;
            text-decoration: none;
            transition: font-size 0.2s;
        }

        .nav-link:hover {
            font-size: 1.5rem;
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
