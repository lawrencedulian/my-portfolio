<script>
export default {
    name: 'AppHeader',
    props: {
        isMenuOpen: Boolean, // Pass isMenuOpen as a prop from the parent component
    },
    methods: {
        toggleMenu() {
            this.$emit('toggleMenu') // Emit the event to toggle the menu
        },
    },
    computed: {
        routeBgColor() {
            const currentRoute = this.$route;
            return currentRoute.meta.bgColor || '#fffeee';
        }
    },
};
</script>

<template>
    <header class="d-flex align-items-center" :style="{ backgroundColor: routeBgColor }">
        <div class="position-relative d-md-none">
            <div class="menu-wrapper position-absolute top-50 end-0 translate-middle-y" @click="toggleMenu">
                <div class="menu-bar one"></div>
                <div class="menu-bar two"></div>
            </div>
        </div>

        <div class="container d-flex menu d-md-block d-none">
            <div class="row">
                <div class="col col-md-6 col-lg-4 col-xl-3">
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
                        <!-- <li>
                            <router-link :to="'/contact'" class="nav-link">CONTACT</router-link>
                        </li> -->
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
    z-index: 10;

    .hamburger {
        height: 20px;
        cursor: pointer;

        .bar {
            width: 35px;
            height: 2px;
            background-color: var(--text-color);
        }
    }

    .menu {
        .nav-link {
            padding: .2rem .5rem .2rem .5rem;
        }

        .nav-link.router-link-active {
            border: 1px solid var(--text-color);
            border-radius: 20px;
        }

        font-weight: 500;
    }

    .position-relative {
        width: 100%;
    }

    .menu-wrapper {
        margin-right: 1.5rem;
    }
}
</style>