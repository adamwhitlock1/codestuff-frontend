<template>
  <Layout class="w-full text-center">
    <h2 class="text-5xl">
      To view some of my photography:
    </h2>
    <a
      class="btn-default bg-cyan text-white"
      href="https://unsplash.com/@adam_whitlock"
      target="_blank"
    >
      View My Unsplash Profile
    </a>
  </Layout>
</template>

<script>

  export default {
    components: {

    },
    data(){
      return {
        imgsArr: [
          '../assets/images/photography/adam-whitlock-1.jpg',
          '../assets/images/photography/adam-whitlock-2.jpg',
          '../assets/images/photography/adam-whitlock-3.jpg',
          '../assets/images/photography/adam-whitlock-4.jpg',
          '../assets/images/photography/adam-whitlock-5.jpg',
        ]
      }
    }
  }
</script>

<style scoped>

</style>