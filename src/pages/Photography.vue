<template>
  <Layout class="w-full text-center">
    <h2 class="text-5xl italic mb-0">
      photography:
    </h2>
    <p class="mt-0 mb-8">
      nature, wildlife, macro, and other intriguing topics
    </p>
    <a
      class="btn-default bg-magenta hover:bg-yellow hover:text-black text-white z-50 -mb-8 mt-2 relative shadow-lg"
      href="https://unsplash.com/@adam_whitlock"
      target="_blank"
    >
      view more of our photography on Unsplash
    </a>
    <div class="gallery -mt-4 mb-16">
      <a
        href="/images/Firebird.jpg"
        data-caption="Firebird"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="~/assets/images/Firebird.jpg"
        />
      </a>

      <a
        href="/images/adam-whitlock-2.jpg"
        data-caption="4th of July"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/adam-whitlock-2.jpg"
        />
      </a>

      <a
        href="/images/pinstripe.jpg"
        data-caption="Pinstripe"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/pinstripe.jpg"
        />
      </a>

      <a
        href="/images/FlyOnPurpleFlower.jpg"
        data-caption="Momentary Pause"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/FlyOnPurpleFlower.jpg"
        />
      </a>

      <a
        href="/images/adam-whitlock-5.jpg"
        data-caption="Frontrange Rainbow"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/adam-whitlock-5.jpg"
        />
      </a>

      <a
        href="/images/Frog1.jpg"
        data-caption="Emerald Buoyancy"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/Frog1.jpg"
        />
      </a>

      <a
        href="/images/Drop.jpg"
        data-caption="Hesitant Drop"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/Drop.jpg"
        />
      </a>

      <a
        href="/images/ram.jpg"
        data-caption="What are you lookin at?"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/ram.jpg"
        />
      </a>

      <a
        href="/images/hopper1.jpg"
        data-caption="Backyard Hopper"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/hopper1.jpg"
        />
      </a>

      <a
        href="/images/post-paradise-1.jpg"
        data-caption="Post Paradise 1"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/post-paradise-1.jpg"
        />
      </a>

      <a
        href="/images/post-paradise-2.jpg"
        data-caption="Post Paradise 2"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/post-paradise-2.jpg"
        />
      </a>

      <a
        href="/images/ladybug1.jpg"
        data-caption="Lady on the Leaf"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow img-gallery"
          src="@/assets/images/ladybug1.jpg"
        />
      </a>
    </div>
  </Layout>
</template>

<script>

import baguetteBox from 'baguettebox.js'

  export default {
      metaInfo: {
    title: 'Photography'
  },
    components: {

    },
    data(){
      return {
      }
    },
    mounted(){
      baguetteBox.run('.gallery')
    }
  }
</script>

<style scoped>

</style>