<script>
import { store } from '../store';

export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    },
    computed: {
        routeBgColor() {
            const currentRoute = this.$route;
            return currentRoute.meta.bgColor || '#fffeee'; // Colore di default se non specificato
        }
    }
}
</script>

<template>
    <footer :style="{ backgroundColor: routeBgColor }">
        <section class="container socials rounded">
            <div class="row">
                <div class="socials-icon col-4 col-xl-4 col-lg-5 col-md-7 d-flex justify-content-between">
                    <a :href="social.link" v-for="(social, index) in store.social" :key="index">
                        <i :class="social.icon"></i>
                    </a>
                    <span class="text-white pe-none d-none d-md-block">lawrenceedulian@gmail.com</span>
                </div>
            </div>
        </section>

        <section class="container copyright p-0 d-flex align-items-center">
            <p class="mb-0 ps-2 pe-none">COPYRIGHT 2023</p>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: var(--footer-height);
}

.socials {
    height: var(--socials-height);
    background-color: var(--text-color);

    .socials-icon {
        margin-left: 1rem;
        line-height: var(--socials-height);
    }

    a {
        color: white;
        font-size: 1.8rem;
    }
}

.copyright {
    height: var(--copyright-height);

    p {
        font-size: .8rem;
    }
}

@media screen and (max-width: 768px) {
    .socials {
        width: 90%;
        height: var(--socials-height-mobile);

        .row {
            justify-content: center;
        }

        .socials-icon {
            line-height: var(--socials-height-mobile);
            margin: 0;
            padding: 0;
        }
    }

    .copyright {
        justify-content: center;
    }
}
</style>