<template>
  <Layout class="w-full text-center">
    <h2 class="mb-0 pt-12 text-5xl italic">
      photography:
    </h2>
    <p class="mt-0 mb-8">
      nature, wildlife, macro, and other intriguing topics
    </p>
    <a
      class="relative z-40 mt-2 -mb-8 text-white shadow-lg btn-default bg-magenta-500 hover:bg-yellow-500 hover:text-black"
      href="https://unsplash.com/@adam_whitlock"
      target="_blank"
    >
      view more of our photography on Unsplash
    </a>
    <div class="flex flex-wrap justify-center mb-16 -mt-4 gallery">
      <a
        href="/images/Firebird.jpg"
        data-caption="Firebird"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="~/assets/images/Firebird.jpg"
        />
      </a>

      <a
        href="/images/adam-whitlock-2.jpg"
        data-caption="4th of July"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/adam-whitlock-2.jpg"
        />
      </a>

      <a
        href="/images/pinstripe.jpg"
        data-caption="Pinstripe"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/pinstripe.jpg"
        />
      </a>

      <a
        href="/images/FlyOnPurpleFlower.jpg"
        data-caption="Momentary Pause"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/FlyOnPurpleFlower.jpg"
        />
      </a>

      <a
        href="/images/adam-whitlock-5.jpg"
        data-caption="Frontrange Rainbow"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/adam-whitlock-5.jpg"
        />
      </a>

      <a
        href="/images/Frog1.jpg"
        data-caption="Emerald Buoyancy"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image class="w-full img-gallery" src="@/assets/images/Frog1.jpg" />
      </a>

      <a
        href="/images/Drop.jpg"
        data-caption="Hesitant Drop"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image class="w-full img-gallery" src="@/assets/images/Drop.jpg" />
      </a>

      <a
        href="/images/ram.jpg"
        data-caption="What are you lookin at?"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image class="w-full img-gallery" src="@/assets/images/ram.jpg" />
      </a>

      <a
        href="/images/hopper1.jpg"
        data-caption="Backyard Hopper"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image class="w-full img-gallery" src="@/assets/images/hopper1.jpg" />
      </a>

      <a
        href="/images/post-paradise-1.jpg"
        data-caption="Post Paradise 1"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/post-paradise-1.jpg"
        />
      </a>

      <a
        href="/images/post-paradise-2.jpg"
        data-caption="Post Paradise 2"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/post-paradise-2.jpg"
        />
      </a>

      <a
        href="/images/ladybug1.jpg"
        data-caption="Lady on the Leaf"
        class="w-5/6 p-2 m-1 shadow lg:w-1/5 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
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
  components: {},
  data() {
    return {}
  },
  mounted() {
    baguetteBox.run('.gallery')
  }
}
</script>

<style scoped></style>
