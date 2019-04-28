<template>
  <Layout>
<ClientOnly>
    <div class="flex items-center flex-row py-6 px-12">
        <div class="text-white shadow-md text-center p-10 pr-16 bg-yellow rounded w-1/3">
        <h4 class="text-4xl text-black m-0 mb-3">The Designer Panel:</h4>
        <p class="font-extrabold mx-12 my-0 text-yellow-darkest rounded px-10 py-4 bg-yellow-lightest shadow">html, css, javascript, nodejs, adobe scripting libraries.</p>
        <p class="text-black mb-4">A concept that was developed while working as a graphic designer. This Photoshop extension includes over 100 tools and workflow accelerators for the daily designer. The Designer Panel has a three tab structure including Utilities, Templates, and Edits.</p>
        <div class="my-8">
        <button v-scrolly='{id: "#utils"}' class="rounded-full font-sans border-0 text-yellow-darkest text-lg no-underline bg-white shadow px-6 py-3">explore the utilities</button>
        </div>

      </div>
      <div class="text-white text-center bg-adobe p-4 rounded shadow-deep ml-6-neg w-2/3 ">
        <img class="w-full" src="@/assets/images/designer_panel.jpg" alt="">
      </div>

    </div>

    <!-- START UTILS ROW -->
    <div class="flex flex-row items-center py-6 px-12" id="utils">
      <div class="text-white text-center bg-adobe w-1/6 mr-6-neg rounded shadow-deep p-10 m-3 z-50"><img src="@/assets/images/designer_panel_1_utils.jpg" alt=""></div>

      <div class="text-white bg-magenta w-5/6 py-1 pl-12 pr-6 rounded">
        <h4 class="text-4xl text-center mt-12 mb-0 mb-3 h4">The utilities tab.</h4>
        <p class="font-extrabold mx-10 my-0 text-magenta-darker text-center rounded px-10 py-4 bg-magenta-lightest shadow">This tab consist of common menu hunted items, quick shortcuts, and image optimization tools.</p>
      <div class="flex-row flex">
        <div class="px-8 w-1/3">
          <ul>
            <li>Quick Drop Shadows</li>
            <li>Clear Layer Syle</li>
            <li>Smart Filter Reset</li>
            <li>Rasterize Layer</li>
            <li>Image Trace
              <span class="text-xs leading-none"><br>Similar to Illustrator's image trace, this tool creates a "quick and dirty" vector outline of the selected raster layer.</span>
            </li>
          </ul>
        </div>
        <div class="px-8 w-1/3">
          <ul>
            <li>Flip and center align layers</li>
            <li>Delete empty layers</li>
            <li>Convert to background layer</li>
            <li>Show/hide all layers</li>
            <li>Hex color sniffer
              <span class="text-xs leading-none"><br>Copy the current foreground color to the clipboard quickly for use in CSS styles</span>
            </li>
          </ul>
        </div>

        <div class="px-8 w-1/3">
          <ul>
            <li>Convert to smart object</li>
            <li>PNG Optimiazation</li>
            <li>Various image export shortcuts</li>
            <li>Trim transparent pixels</li>
            <li>Task/Pomodoro timer</li>
            <li>Expand smart object
              <span class="text-xs leading-none"><br>Move all layers in a smart object into current document as grouped layers</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-row text-center">
        <div class="w-full pb-12">
      <button v-scrolly='{id: "#templates"}' class="rounded-full font-sans border-0 text-magenta text-lg no-underline bg-white shadow px-6 py-3">all about templates</button>
        </div>
      </div>
      </div>
    </div>

    <!-- START TEMPLATES ROW -->
    <div class="flex flex-row items-center py-6 px-12" id="templates">

      <!-- START 5/6 COLUMN -->
      <div class="text-white bg-cyan w-5/6 py-1 pr-12 pl-6 rounded">
        <h4 class="text-4xl text-center mt-12 mb-0 mb-3 h4">Templates</h4>
        <p class="font-extrabold mx-10 my-0 text-cyan-darker text-center rounded px-10 py-4 bg-cyan-lightest shadow">Easily load common templates including assets like buttons, social media layouts, and website grids.</p>
      <div class="flex-row flex">
        <div class="px-8 w-1/3">
          <ul>
            <li>Social media cover & profile</li>
            <li>Quick links to useful sites</li>
            <li>Retargeting banner ads
              <span class="text-xs leading-none"><br>All the popular ad sizes for running campaigns on google, facebook, and instagram.</span>
            </li>
          </ul>
        </div>
        <div class="px-8 w-1/3">
          <ul>
            <li>9 unique ecom starting points</li>
            <li>Basic site grid</li>
            <li>Auto dealership template</li>
            <li>Network drive based templates
              <span class="text-xs leading-none"><br>Company wide templates stored in a single location; all designers instantly have access to the most recent templates.</span>
            </li>
          </ul>
        </div>

        <div class="px-8 w-1/3">
          <ul>
            <li>Font awesome icons</li>
            <li>Icomoon icons</li>
            <li>3 button sets</li>
            <li>Trust badge assets</li>
            <li>A template preview windwo
              <span class="text-xs leading-none"><br>Open a seperate window to preview the templates before opening them.</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-row text-center">
        <div class="w-full pb-12 mt-6">
      <button v-scrolly='{id: "#edits"}' class="rounded-full text-cyan font-sans no-underline text-lg bg-white shadow px-6 py-3">last but not least, the edits tab</button>
        </div>
      </div>
      </div>

      <!-- START 1/6 COLUMN -->
      <div class="text-white text-center bg-adobe w-1/6 ml-6-neg rounded shadow-deep p-10 m-3 z-50"><img src="@/assets/images/designer_panel_2.jpg" alt=""></div>
    </div>


    <!-- START EDITS ROW -->
    <div class="flex flex-row items-center py-6 px-12" id="edits">

      <!-- START 1/6 COLUMN -->
      <div class="text-white text-center bg-adobe w-2/3 mr-6-neg rounded shadow-deep p-10 m-3 z-50"><img src="@/assets/images/designer_panel_3_edits_all.jpg" alt=""></div>
      <!-- START 5/6 COLUMN -->
      <div class="text-white bg-black w-1/3 py-1 pl-12 pr-6 rounded">
        <h4 class="text-4xl text-center mt-12 mb-0 mb-3 h4">Image Edits</h4>
        <p class="font-extrabold mx-10 my-0 text-grey-darker text-center rounded px-10 py-4 bg-grey-lightest shadow">The edits section is the largest tab, because it includes nested accordions with tools for background removal, camera raw effects, layer effects, and photo retouching.</p>
      <div class="flex-row flex">
        <div class="px-8 w-1/3">

        </div>

      </div>
      <div class="flex flex-row text-center">
        <div class="w-full pb-12 mt-6">
      <button v-scrolly='{id: "#contact"}' class="rounded-full font-sans text-black text-lg no-underline bg-white shadow px-6 py-3">Want an extension like this? Hire me</button>
        </div>
      </div>
      </div>
    </div>

    <!-- START CONTACT ROW -->
    <div class="flex flex-row items-center py-6 px-12 mb-32 pb-32" id="contact">

      <!-- START 1/6 COLUMN -->
      <div class="text-white text-center bg-adobe w-1/2 mr-6-neg rounded shadow-deep p-10 m-3 z-50"><img src="@/assets/images/designer_panel_3_edits_all.jpg" alt=""></div>
      <!-- START 5/6 COLUMN -->
      <div class="text-white bg-black w-1/2 py-1 pl-12 pr-6 rounded">
        <h4 class="text-4xl text-center mt-12 mb-0 mb-3 h4">Image Edits</h4>
        <p class="font-extrabold mx-10 my-0 text-grey-darker text-center rounded px-10 py-4 bg-grey-lightest shadow">The edits section is the largest tab, because it includes nested accordions with tools for background removal, camera raw effects, layer effects, and photo retouching.</p>
      <div class="flex-row flex">
        <div class="px-8 w-1/3">

        </div>

      </div>
      <div class="flex flex-row text-center">
        <div class="w-full pb-12 mt-6">

        </div>
      </div>
      </div>
    </div>

</ClientOnly>

  </Layout>
</template>

<script>
import Vue from 'vue'
Vue.directive('scrolly', {
  bind(el, binding, vnode){
    console.log("directive worked");

    const onclick = event => {
      event.stopPropagation()
      console.log(binding.value.id);
      document.querySelector(binding.value.id).scrollIntoView({
        behavior: 'smooth'
      })
    }

    el.addEventListener('click', onclick)
  }
})

export default {

}
</script>

<style>



</style>