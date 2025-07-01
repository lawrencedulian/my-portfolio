<script>
export default {
  name: "Homepage",
  data() {
    return {
      currentImageUrl: "/img/homepage/1.png",
      totalImg: 13,
    };
  },
  mounted() {
    this.startImageChangeInterval();
  },
  methods: {
    changeImage() {
      this.currentImageUrl = `/img/homepage/${
        (this.currentIndex % this.totalImg) + 1
      }.png`;
      this.currentIndex++;
    },
    startImageChangeInterval() {
      this.currentIndex = 1;
      setInterval(this.changeImage, 150);
    },
  },
};
</script>

<template>
  <!-- CONTAINER -->
  <div class="container">
    <!-- HOME -->
    <div class="home p-4">
      <img class="title ps-3 pe-3" :src="currentImageUrl" alt="Name" />
    </div>
    <!-- /HOME -->
  </div>
  <!-- /CONTAINER -->
</template>

<style lang="scss" scoped>
.container {
  height: calc(100vh - var(--header-height) - var(--footer-height));
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    width: 100%;
  }

  .subtitle {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .container {
    .subtitle {
      font-size: 1rem;
    }
  }
}
</style>
