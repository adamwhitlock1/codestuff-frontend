<template>
  <Layout>

    <div class="flex items-center flex-row py-6 px-12">
        <div class="text-white shadow-md text-center p-10 pr-16 bg-yellow rounded w-1/3">
        <h4 class="text-4xl text-black m-0 mb-3">The Designer Panel:</h4>
        <p class="font-extrabold mx-12 my-0 text-yellow-darkest rounded px-10 py-4 bg-yellow-lightest shadow">html, css, javascript, nodejs, adobe scripting libraries.</p>
        <p class="text-black mb-4">A concept that was developed while working as a graphic designer. This Photoshop extension includes over 100 tools and workflow accelerators for the daily designer. The Designer Panel has a three tab structure including Utilities, Templates, and Edits.</p>
        <div class="my-8">
        <a href="#utils" v-smooth-scroll class="rounded-full text-cyan no-underline bg-white shadow px-6 py-3">explore the utilities</a>
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
      <a href="#templates"  v-smooth-scroll class="rounded-full text-magenta no-underline bg-white shadow px-6 py-3">all about templates</a>
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
      <a href="#edits"  v-smooth-scroll class="rounded-full text-cyan no-underline bg-white shadow px-6 py-3">last but not least, the edits tab</a>
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
      <a href="#contact"  v-smooth-scroll class="rounded-full text-cyan no-underline bg-white shadow px-6 py-3">Want an extension like this? Hire me</a>
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
      <a href="#edits"  v-smooth-scroll class="rounded-full text-cyan no-underline bg-white shadow px-6 py-3">Want an extension like this? Hire me</a>
        </div>
      </div>
      </div>
    </div>



  </Layout>
</template>

<script>
import Vue from "vue"
import vueSmoothScroll from "vue2-smooth-scroll"
Vue.use(vueSmoothScroll)
  export default {

  }
</script>

<style>
.shadow-deep {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.bg-adobe { background-color: #323232 }


.bg-cyan-lightest { background-color: #85deff }
.bg-cyan-lighter { background-color: #2CC7FF }
.bg-cyan-light { background-color: #00BBFF }
.bg-cyan { background-color: #00afec }
.bg-cyan-dark { background-color: #0098D1 }
.bg-cyan-darker { background-color: #0076A3 }
.bg-cyan-darkest { background-color: #004D6D }

.text-cyan-lightest { color: #85deff }
.text-cyan-lighter { color: #2CC7FF }
.text-cyan-light { color: #00BBFF }
.text-cyan { color: #00afec }
.text-cyan-dark { color: #0098D1 }
.text-cyan-darker { color: #0076A3 }
.text-cyan-darkest { color: #004D6D }

.bg-magenta-lightest { background-color: #ff85cd }
.bg-magenta-lighter { background-color: #ff46b4 }
.bg-magenta-light { background-color: #ff0097 }
.bg-magenta { background-color: #ea148c }
.bg-magenta-dark { background-color: #c40075 }
.bg-magenta-darker { background-color: #0076A3 }
.bg-magenta-darkest { background-color: #004D6D }

.text-magenta-lightest { color: #ff85cd }
.text-magenta-lighter { color: #ff46b4 }
.text-magenta-light { color: #ff0097 }
.text-magenta { color: #ea148c }
.text-magenta-dark { color: #c40075 }
.text-magenta-darker { color: #950058 }
.text-magenta-darkest { color: #600032 }

.bg-yellow-lightest { background-color: #fffbaa }
.bg-yellow-lighter { background-color: #fff767 }
.bg-yellow-light { background-color: #fff541 }
.bg-yellow { background-color: #fff02a }
.bg-yellow-dark { background-color: #e3d200 }
.bg-yellow-darker { background-color: #b6aa00 }
.bg-yellow-darkest { background-color: #645e00 }

.text-yellow-lightest { color: #fffbaa }
.text-yellow-lighter { color: #fff767 }
.text-yellow-light { color: #fff541 }
.text-yellow { color: #fff02a }
.text-yellow-dark { color: #e3d200 }
.text-yellow-darker { color: #b6aa00 }
.text-yellow-darkest { color: #645e00 }


.ml-6-neg { margin-left: -1.5rem; }
.ml-8-neg { margin-left: -2rem; }
.ml-10-neg { margin-left: -2.5rem; }
.ml-12-neg { margin-left: -3rem; }
.ml-16-neg { margin-left: -4rem; }
.ml-20-neg { margin-left: -5rem; }
.ml-24-neg { margin-left: -6rem; }
.ml-32-neg { margin-left: -8rem; }

.mr-6-neg { margin-right: -1.5rem; }
.mr-8-neg { margin-right: -2rem; }
.mr-10-neg { margin-right: -2.5rem; }
.mr-12-neg { margin-right: -3rem; }
.mr-16-neg { margin-right: -4rem; }
.mr-20-neg { margin-right: -5rem; }
.mr-24-neg { margin-right: -6rem; }
.mr-32-neg { margin-right: -8rem; }


</style>