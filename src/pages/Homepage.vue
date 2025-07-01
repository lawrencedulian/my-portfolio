<script>
export default {
  name: "Homepage",
  data() {
    return {
      currentImageUrl: "/img/homepage/1.png",
      totalImg: 13,
      isLoading: true,
      loadedImages: 0,
      images: [],
    };
  },
  mounted() {
    this.preloadImages();
  },
  methods: {
    preloadImages() {
      // Crea array di promesse per il precaricamento di tutte le immagini
      const imagePromises = [];

      for (let i = 1; i <= this.totalImg; i++) {
        const img = new Image();
        const promise = new Promise((resolve, reject) => {
          img.onload = () => {
            this.loadedImages++;
            resolve(img);
          };
          img.onerror = reject;
        });

        img.src = `/img/homepage/${i}.png`;
        this.images.push(img);
        imagePromises.push(promise);
      }

      // Quando tutte le immagini sono caricate, nascondi il loading dopo almeno 2 secondi
      Promise.all(imagePromises)
        .then(() => {
          setTimeout(() => {
            this.isLoading = false;
            this.startImageChangeInterval();
          }, 2000);
        })
        .catch((error) => {
          console.error("Errore nel caricamento delle immagini:", error);
          setTimeout(() => {
            this.isLoading = false;
            this.startImageChangeInterval();
          }, 2000);
        });
    },
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
  <!-- LOADING SCREEN -->
  <transition name="fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading</p>
      </div>
    </div>
  </transition>

  <!-- CONTAINER -->
  <transition name="fade">
    <div v-if="!isLoading" class="container">
      <!-- HOME -->
      <div class="home p-4">
        <img class="title ps-3 pe-3" :src="currentImageUrl" alt="Name" />
      </div>
      <!-- /HOME -->
    </div>
  </transition>
  <!-- /CONTAINER -->
</template>

<style lang="scss" scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .loading-content {
    text-align: center;
    color: white;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }

  .loading-text {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    opacity: 0.9;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// Transizioni
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
  .loading-screen {
    .loading-content {
      .loading-spinner {
        width: 35px;
        height: 35px;
      }

      .loading-text {
        font-size: 0.9rem;
      }
    }
  }

  .container {
    .subtitle {
      font-size: 1rem;
    }
  }
}
</style>
