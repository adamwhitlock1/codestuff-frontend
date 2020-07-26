<template>
  <Layout class="flex w-full text-center">
    <h2 class="mb-0 text-5xl italic pt-12">
      design:
    </h2>
    <p class="mt-0 mb-8">
      advertising, print layout, web design, and general pixel pushing
    </p>
    <div class="flex justify-center">
      <a
        class="relative z-40 flex items-center mt-2 -mb-4 text-white shadow-lg btn-default bg-magenta-500 hover:bg-yellow-500 hover:text-black"
        href="https://dribbble.com/codestuff2"
        target="_blank"
      >
        <font-awesome :icon="['fab', 'dribbble']" class="pr-2 text-2xl fa-xl" />
        more work available at Dribbble
      </a>
    </div>

    <div class="flex flex-wrap justify-center mb-16 -mt-3 gallery">
      <a
        href="/images/wits-beaux-ads.jpg"
        data-caption="Wits &amp; Beaux Digital Advertisements"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="~/assets/images/wits-beaux-ads.jpg"
        />
      </a>

      <a
        href="/images/fresh-press.jpg"
        data-caption="Fresh Press CD Single Sleeve"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/fresh-press.jpg"
        />
      </a>

      <a
        href="/images/ninjas.jpg"
        data-caption="Design Ninjas Logo"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image class="w-full img-gallery" src="@/assets/images/ninjas.jpg" />
      </a>

      <a
        href="/images/jazz.jpg"
        data-caption="Greeley Jazz Festival Print Layouts"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image class="w-full img-gallery" src="@/assets/images/jazz.jpg" />
      </a>

      <a
        href="/images/logos.jpg"
        data-caption="Logo Concepts"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image class="w-full img-gallery" src="@/assets/images/logos.jpg" />
      </a>

      <a
        href="/images/once-ads.jpg"
        data-caption="Once Upond a Child Print Ads"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/once-ads.jpg"
        />
      </a>

      <a
        href="/images/yunique-logos.jpg"
        data-caption="Yunique Logos"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/yunique-logos.jpg"
        />
      </a>

      <a
        href="/images/pursuit-ads.jpg"
        data-caption="Pursuit Fitness Digital Ads"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/pursuit-ads.jpg"
        />
      </a>

      <a
        href="/images/hoppy-exp.jpg"
        data-caption="Hoppy Accident Beer Logo"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/hoppy-exp.jpg"
        />
      </a>

      <a
        href="/images/smash-test.jpg"
        data-caption="Smash Test Dummy Logo"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/smash-test.jpg"
        />
      </a>

      <a
        href="/images/protest-porter.jpg"
        data-caption="Protest Porter Logo"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/protest-porter.jpg"
        />
      </a>

      <a
        href="/images/world-beverage.jpg"
        data-caption="World Beverage Website Mockup"
        class="w-5/6 m-1 shadow-lg lg:w-1/4 md:w-1/3 md:p-0"
      >
        <g-image
          class="w-full img-gallery"
          src="@/assets/images/world-beverage.jpg"
        />
      </a>
    </div>
  </Layout>
</template>

<script>
import baguetteBox from 'baguettebox.js'
export default {
  metaInfo: {
    title: 'Design Work'
  },
  data() {
    return {
      index: null
    }
  },
  mounted() {
    baguetteBox.run('.gallery')
  }
}
</script>

<style></style>
