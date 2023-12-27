<script>
export default {
    name: 'pageSlideTransition'
}
</script>

<template>
    <transition name="page-slide" mode="out-in">
        <slot></slot>
    </transition>
</template>

<style lang="scss" scoped>
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
</style>