<template>
  <div class="font-sans">
    <Header />
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
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
  transform: translateY(0px);

}

.fade-enter {
  opacity: 0;
  transform: translateY(30px);
}

</style>
