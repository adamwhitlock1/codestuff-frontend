<template>
  <Layout class="w-full text-center">
    <h2 class="text-5xl italic mb-0">
      design:
    </h2>
    <p class="mt-0 mb-8">
      advertising, print layout, web design, and general pixel pushing
    </p>
    <a
      class="btn-default bg-magenta hover:bg-yellow hover:text-black text-white z-50 -mb-8 mt-2 relative shadow-lg"
      href="https://dribbble.com/codestuff2"
      target="_blank"
    >
      <font-awesome
        :icon="['fab', 'dribbble']"
        class="text-xl pr-2"
      />
      more work available at Dribbble
    </a>

    <div class="gallery -mt-4 mb-16">
      <a
        href="/images/wits-beaux-ads.jpg"
        data-caption="Wits &amp; Beaux Digital Advertisements"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="~/assets/images/wits-beaux-ads.jpg"
        />
      </a>

      <a
        href="/images/fresh-press.jpg"
        data-caption="Fresh Press CD Single Sleeve"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/fresh-press.jpg"
        />
      </a>

      <a
        href="/images/ninjas.jpg"
        data-caption="Design Ninjas Logo"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/ninjas.jpg"
        />
      </a>

      <a
        href="/images/jazz.jpg"
        data-caption="Greeley Jazz Festival Print Layouts"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/jazz.jpg"
        />
      </a>

      <a
        href="/images/logos.jpg"
        data-caption="Logo Concepts"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/logos.jpg"
        />
      </a>

      <a
        href="/images/once-ads.jpg"
        data-caption="Once Upond a Child Print Ads"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/once-ads.jpg"
        />
      </a>


      <a
        href="/images/yunique-logos.jpg"
        data-caption="Yunique Logos"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/yunique-logos.jpg"
        />
      </a>

      <a
        href="/images/pursuit-ads.jpg"
        data-caption="Pursuit Fitness Digital Ads"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/pursuit-ads.jpg"
        />
      </a>

      <a
        href="/images/hoppy-exp.jpg"
        data-caption="Hoppy Accident Beer Logo"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/hoppy-exp.jpg"
        />
      </a>

      <a
        href="/images/smash-test.jpg"
        data-caption="Smash Test Dummy Logo"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/smash-test.jpg"
        />
      </a>

      <a
        href="/images/protest-porter.jpg"
        data-caption="Protest Porter Logo"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/protest-porter.jpg"
        />
      </a>

      <a
        href="/images/world-beverage.jpg"
        data-caption="World Beverage Website Mockup"
      >
        <g-image
          class="w-5/6 lg:w-1/5 md:w-1/3 m-1 p-2 md:p-0 shadow-lg img-gallery"
          src="@/assets/images/world-beverage.jpg"
        />
      </a>
    </div>
  </Layout>
</template>

<script>
  import baguetteBox from 'baguettebox.js'
  import 'baguettebox.js/dist/baguetteBox.min.css'
  export default {
    metaInfo: {
      title: 'Design Work'
    },
    data(){
      return {
        index: null
      }
    },
    mounted(){
      baguetteBox.run('.gallery')
    }
  }
</script>

<style scoped>

</style>