<template>
  <Layout class="w-full text-center">

    <div class="flex-row shadow-deep mx-12 pt-8 pb-10 align-center -mb-2 mt-12">
      <h2 class="text-5xl m-0 italic mb-4 p-0">
      design work:
      </h2>
      <div class="gallery">
    <a v-for="(image, index) in images" :href="image" data-caption="Image caption">
        <g-image class="w-1/5 px-2 self-center" :src="image" />
    </a>
</div>
    </div>
    <a
      class="btn-default bg-magenta text-white shadow-lg hover:bg-black"
      href="https://dribbble.com/codestuff2"
      target="_blank"
    >
    <font-awesome
                :icon="['fab', 'dribbble']"
                class="text-xl pr-2"
              />
      more work available at Dribbble
    </a>
  </Layout>
</template>

<script>
  import baguetteBox from 'baguettebox.js';
  export default {
    data(){
      return {
        images: [
          "/assets/img/adam-whitlock-1.jpg",
          "/assets/img/adam-whitlock-2.jpg",
          "/assets/img/adam-whitlock-3.jpg",
          "/assets/img/adam-whitlock-4.jpg",
          "/assets/img/adam-whitlock-5.jpg",
        ],
        index: null
      }
    },
    mounted(){
      baguetteBox.run('.gallery');
    }
  }
</script>

<style scoped>

</style>