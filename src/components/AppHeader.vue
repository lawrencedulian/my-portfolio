<script>
export default {
  name: "AppHeader",
  props: {
    isMenuOpen: Boolean, // Pass isMenuOpen as a prop from the parent component
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu"); // Emit the event to toggle the menu
    },
  },
  computed: {
    routeBgColor() {
      const currentRoute = this.$route;
      const baseColor = currentRoute.meta.bgColor || "#fffeee";
      // Convert hex to rgba for transparency
      if (baseColor.startsWith("#")) {
        const r = parseInt(baseColor.slice(1, 3), 16);
        const g = parseInt(baseColor.slice(3, 5), 16);
        const b = parseInt(baseColor.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, 0.8)`;
      }
      return baseColor;
    },
  },
};
</script>

<template>
  <header
    class="d-flex align-items-center position-fixed"
    :style="{ backgroundColor: routeBgColor }"
  >
    <div class="position-relative d-md-none">
      <div
        class="menu-wrapper position-absolute top-50 end-0 translate-middle-y"
        @click="toggleMenu"
      >
        <div class="menu-bar one"></div>
        <div class="menu-bar two"></div>
      </div>
    </div>

    <div class="container-fluid d-flex menu d-md-block d-none">
      <div class="row">
        <div class="col col-md-6 col-lg-4 col-xl-3">
          <ul class="d-flex align-items-center">
            <li>
              <router-link
                :to="'/'"
                class="nav-link d-flex align-items-center"
                style="border: none"
              >
                <img
                  src="/src/assets/img/my-notion-face-transparent.png"
                  alt="logo"
                  class="logo"
                />
                <span class="logo-text">Edulian</span>
              </router-link>
            </li>
            <li>
              <router-link :to="'/work'" class="nav-link ms-5"
                >Work</router-link
              >
            </li>
            <li>
              <router-link :to="'/about'" class="nav-link ms-4"
                >About</router-link
              >
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
  width: 100%;
  height: var(--header-height);
  font-size: var(--font-size-header);
  z-index: 10;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

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
    .nav-link:hover {
      color: rgb(100, 100, 100);
    }

    font-weight: 500;
  }

  .position-relative {
    width: 100%;
  }

  .menu-wrapper {
    margin-right: 1.5rem;
  }

  .logo {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  .logo-text {
    margin-left: 8px;
    font-weight: 600;
  }
}
</style>
