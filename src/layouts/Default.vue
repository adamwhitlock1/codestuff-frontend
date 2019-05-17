<template>
  <div class="font-sans">
    <Header class="z-50" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import '~/assets/css/main.css'
import Header from '../components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style>

img {
  max-width: 100%;
}

.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}

.fade-enter-active {
  transition: all 1.1s;
}

.fade-enter {
  opacity: 0;
}

</style>
