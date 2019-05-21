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

<style>
#baguetteBox-overlay{display:none;opacity:0;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:1000000;background-color:#222;background-color:rgba(0,0,0,.8);-webkit-transition:opacity .5s ease;transition:opacity .5s ease}#baguetteBox-overlay.visible{opacity:1}#baguetteBox-overlay .full-image{display:inline-block;position:relative;width:100%;height:100%;text-align:center}#baguetteBox-overlay .full-image figure{display:inline;margin:0;height:100%}#baguetteBox-overlay .full-image img{display:inline-block;width:auto;height:auto;max-height:100%;max-width:100%;vertical-align:middle;-webkit-box-shadow:0 0 8px rgba(0,0,0,.6);-moz-box-shadow:0 0 8px rgba(0,0,0,.6);box-shadow:0 0 8px rgba(0,0,0,.6)}#baguetteBox-overlay .full-image figcaption{display:block;position:absolute;bottom:0;width:100%;text-align:center;line-height:1.8;white-space:normal;color:#ccc;background-color:#000;background-color:rgba(0,0,0,.6);font-family:sans-serif}#baguetteBox-overlay .full-image:before{content:"";display:inline-block;height:50%;width:1px;margin-right:-1px}#baguetteBox-slider{position:absolute;left:0;top:0;height:100%;width:100%;white-space:nowrap;-webkit-transition:left .4s ease,-webkit-transform .4s ease;transition:left .4s ease,-webkit-transform .4s ease;transition:left .4s ease,transform .4s ease;transition:left .4s ease,transform .4s ease,-webkit-transform .4s ease,-moz-transform .4s ease}#baguetteBox-slider.bounce-from-right{-webkit-animation:bounceFromRight .4s ease-out;animation:bounceFromRight .4s ease-out}#baguetteBox-slider.bounce-from-left{-webkit-animation:bounceFromLeft .4s ease-out;animation:bounceFromLeft .4s ease-out}@-webkit-keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}@keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}@-webkit-keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}@keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}.baguetteBox-button#next-button,.baguetteBox-button#previous-button{top:50%;top:calc(50% - 30px);width:44px;height:60px}.baguetteBox-button{position:absolute;cursor:pointer;outline:0;padding:0;margin:0;border:0;-moz-border-radius:15%;border-radius:15%;background-color:#323232;background-color:rgba(50,50,50,.5);color:#ddd;font:1.6em sans-serif;-webkit-transition:background-color .4s ease;transition:background-color .4s ease}.baguetteBox-button:focus,.baguetteBox-button:hover{background-color:rgba(50,50,50,.9)}.baguetteBox-button#next-button{right:2%}.baguetteBox-button#previous-button{left:2%}.baguetteBox-button#close-button{top:20px;right:2%;right:calc(2% + 6px);width:30px;height:30px}.baguetteBox-button svg{position:absolute;left:0;top:0}.baguetteBox-spinner{width:40px;height:40px;display:inline-block;position:absolute;top:50%;left:50%;margin-top:-20px;margin-left:-20px}.baguetteBox-double-bounce1,.baguetteBox-double-bounce2{width:100%;height:100%;-moz-border-radius:50%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}.baguetteBox-double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce{0%,100%{-webkit-transform:scale(0);-moz-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}
</style>