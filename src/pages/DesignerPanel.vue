<template>
  <Layout>
    <div
      class="relative z-40 flex-row items-center -mb-8 md:flex md:py-12 md:mt-10 md:px-10 md:mb-0"
    >
      <div
        class="p-4 text-center text-white bg-yellow-500 rounded shadow-md md:p-10 md:pr-16 md:w-1/3 md:ml-4"
      >
        <h4 class="m-0 mb-3 text-4xl text-black">
          The Designer Panel:
        </h4>
        <p
          class="px-10 py-4 my-2 font-extrabold text-yellow-800 bg-yellow-200 rounded shadow md:mx-12 md:my-0"
        >
          tech:<br />
          html, css, javascript, node, jquery, velocity.js, adobe scripting
          libraries.
        </p>
        <div class="block p-1 rounded shadow-lg md:hidden bg-adobe">
          <g-image src="@/assets/images/designer_panel.jpg" alt="" />
        </div>
        <p
          class="px-6 mt-6 mb-8 text-sm text-black md:text-base md:mt-4 md:mb-4 md:px-0"
        >
          A concept that was developed while working as a graphic designer. This
          Photoshop extension includes over 100 tools and workflow accelerators
          for photographers and graphic designers. The Designer Panel has a three tab structure for organization which
          includes Utilities, Templates, and Edits.
        </p>
        <div class="hidden my-8 md:block">
          <button
            v-scrolly="{ id: '#utils' }"
            class="px-6 py-3 font-sans text-lg text-yellow-800 no-underline bg-white border-0 rounded-full shadow"
          >
            explore the utilities
          </button>
        </div>
      </div>
      <div class="hidden w-2/3 p-4 -ml-6 rounded shadow-lg md:block bg-adobe ">
        <g-image
          class="w-full"
          src="@/assets/images/designer_panel.jpg"
          alt=""
        />
      </div>
    </div>

    <!-- START UTILS ROW -->
    <div
      id="utils"
      class="flex-row items-center block py-6 -mt-6 md:flex md:px-12 md:mt-10"
    >
      <div
        class="z-40 hidden p-4 text-center text-white rounded shadow-lg md:block bg-adobe md:w-1/6 "
      >
        <g-image src="@/assets/images/designer_panel_1_utils.jpg" alt="" />
      </div>

      <div
        class="py-1 text-white rounded shadow-md bg-magenta-500 md:w-5/6 md:pl-12 md:pr-6 md:-ml-6"
      >
        <h4 class="mt-12 mb-3 text-4xl text-center h4">
          The utilities tab.
        </h4>
        <p
          class="px-10 py-4 mx-4 my-0 font-extrabold text-center rounded shadow md:mx-10 text-magenta-700 bg-magenta-200"
        >
          This tab of the panel consists of common menu items, quick shortcuts,
          and image optimization/conversion tools. Minimize menu hunting by
          using these utilities.
        </p>
        <div class="inline-block mt-4 mb-12 md:flex md:mb-2 md:ml-8">
          <div
            class="inline-block w-1/2 text-xs align-text-top md:text-sm md:px-8 md:w-1/3"
          >
            <ul class="mr-1 list-disc">
              <li>Quick Drop Shadows</li>
              <li>Clear Layer Syle</li>
              <li>Smart Filter Reset</li>
              <li>Rasterize Layer</li>
              <li>
                Image Trace
                <span class="text-xs leading-none">
                  <br />Similar to Illustrator's image trace, this tool creates
                  a "quick and dirty" vector outline of the selected raster
                  layer.
                </span>
              </li>
            </ul>
          </div>
          <div
            class="inline-block w-1/2 text-sm align-text-top md:px-8 md:w-1/3"
          >
            <ul class="mr-4 -ml-1 list-disc">
              <li>Flip and center align layers</li>
              <li>Delete empty layers</li>
              <li>Convert to background layer</li>
              <li>Show/hide all layers</li>
              <li>
                Hex color sniffer
                <span class="text-xs leading-none">
                  <br />Copy the current foreground color to the clipboard
                  quickly for use in CSS styles
                </span>
              </li>
            </ul>
          </div>

          <div class="px-12 md:text-sm md:px-8 md:w-1/3">
            <ul class="list-disc">
              <li>Convert to smart object</li>
              <li>PNG Optimiazation</li>
              <li>Various image export shortcuts</li>
              <li>Trim transparent pixels</li>
              <li>Task/Pomodoro timer</li>
              <li>
                Expand smart object
                <span class="text-xs leading-none">
                  <br />Move all layers in a smart object into current document
                  as grouped layers
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-row hidden text-center md:flex">
          <div class="w-full pb-12">
            <button
              v-scrolly="{ id: '#templates' }"
              class="px-6 py-3 mt-4 font-sans text-lg no-underline bg-white border-0 rounded-full shadow btn-default text-magenta-500"
            >
              all about the templates tab
            </button>
          </div>
        </div>
      </div>
      <div
        class="relative z-40 block p-4 mx-10 -my-6 text-center text-white rounded shadow-lg md:hidden bg-adobe"
      >
        <g-image src="@/assets/images/designer_panel_1_utils.jpg" alt="" />
      </div>
    </div>

    <!-- START TEMPLATES ROW -->
    <div
      id="templates"
      class="relative z-30 flex-row items-center block -my-6 md:pl-12 md:flex md:py-6 md:px-6"
    >
      <!-- START 5/6 COLUMN -->
      <div
        class="py-1 text-white shadow-md bg-cyan-500 md:w-5/6 md:pr-12 md:pl-6 md:rounded"
      >
        <h4 class="mt-12 mb-0 mb-3 text-4xl text-center h4">
          Templates
        </h4>
        <p
          class="px-10 py-4 mx-10 my-0 font-extrabold text-center rounded shadow text-cyan-700 bg-cyan-100"
        >
          Easily load common templates including assets like buttons, social
          media layouts, and website grids.
        </p>
        <div class="flex-row block mt-4 md:flex">
          <div class="px-2 md:pl-12 md:px-8 md:w-1/3">
            <ul class="ml-4 text-sm list-disc">
              <li>Social media cover & profile</li>
              <li>Quick links to useful sites</li>
              <li>
                Retargeting banner ads
                <span class="text-xs leading-none">
                  <br />All the popular ad sizes for running campaigns on
                  google, facebook, and instagram. Easily open the facebook text
                  tool to analyze the text to image ratio for determining if an
                  ad will be accepted for a campaign.
                </span>
              </li>
            </ul>
          </div>
          <div class="px-2 md:px-8 md:w-1/3">
            <ul class="text-sm list-disc">
              <li>9 unique ecom starting points</li>
              <li>Basic site grid</li>
              <li>Auto dealership template</li>
              <li>
                Network drive based templates
                <span class="text-xs leading-none">
                  <br />Company wide templates stored in a single location; all
                  designers instantly have access to the most recent templates.
                </span>
              </li>
            </ul>
          </div>

          <div class="px-2 md:px-8 md:w-1/3">
            <ul class="text-sm list-disc">
              <li>Font awesome icons</li>
              <li>Icomoon icons</li>
              <li>3 button sets</li>
              <li>Trust badge assets</li>
              <li>
                A template preview window
                <span class="text-xs leading-none">
                  <br />Open a seperate window to preview the templates before
                  opening them.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-row justify-center text-center">
          <div class="flex justify-center w-full pb-12 mt-6">
            <button
              v-scrolly="{ id: '#edits' }"
              class="hidden px-6 py-3 font-sans text-lg no-underline bg-white rounded-full shadow md:block text-cyan-500"
            >
              last but not least, the edits tab
            </button>
          </div>
        </div>
      </div>

      <!-- START 1/6 COLUMN -->
      <div
        class="z-40 p-4 mx-10 -mt-6 text-center text-white rounded shadow-lg bg-adobe md:w-1/6 md:-ml-6 md:m-3"
      >
        <g-image src="@/assets/images/designer_panel_2.jpg" alt="" />
      </div>
    </div>

    <!-- START EDITS ROW -->
    <div
      id="edits"
      class="flex-row items-center block md:flex md:py-6 md:px-12"
    >
      <!-- START 1/6 COLUMN -->
      <div
        class="relative z-40 hidden p-2 -mb-6 text-center text-white rounded shadow-lg md:block bg-adobe md:w-2/3 md:-mr-6 md:p-4 md:m-3"
      >
        <g-image src="@/assets/images/designer_panel_3_edits_all.jpg" alt="" />
      </div>
      <!-- START 5/6 COLUMN -->
      <div
        class="py-1 pb-16 -mb-8 text-black bg-yellow-500 rounded shadow-md md:bg-black md:text-white md:w-1/3 md:pb-4 md:pl-12 md:pr-6"
      >
        <h4 class="mt-12 mb-3 text-4xl text-center h4">
          Image Edits
        </h4>
        <p
          class="px-10 py-4 mx-10 my-0 font-extrabold text-center text-gray-700 bg-gray-100 rounded shadow"
        >
          The edits section is the largest tab, because it includes nested
          accordions with tools for background removal, camera raw effects,
          layer effects, and photo retouching.
        </p>

        <div class="items-center w-full text-center">
          <button
            v-scrolly="{ id: '#contact' }"
            class="self-center hidden px-6 py-3 mt-6 font-sans text-lg text-black no-underline bg-white rounded-full shadow md:inline-block"
          >
            need an extension like this?
          </button>
        </div>

        <div
          class="items-center justify-center p-2 mt-6 text-center align-middle md:bg-transparent bg-adobe"
        >
          <g-image
            src="@/assets/images/designer_panel_3_edits_all.jpg"
            alt=""
            class="block md:hidden"
          />
        </div>
      </div>
    </div>

    <!-- START CONTACT ROW -->
    <div
      id="contact"
      class="flex flex-row items-center justify-center px-2 py-6 pb-32 mb-32 md:px-12"
    >
      <!-- START FULL COLUMN -->
      <div
        class="justify-center w-full py-1 -mt-2 text-white rounded shadow-lg bg-cyan-500 md:pl-12 md:pr-6"
      >
        <h4 class="mt-12 mb-0 mb-3 text-4xl text-center h4">
          Contact Me
        </h4>

        <p
          class="justify-center px-10 py-4 mx-4 mx-auto my-0 text-sm font-extrabold text-center rounded shadow md:mx-24 text-cyan-700 bg-cyan-100"
        >
          I am currently looking for opportunities involving Vue.js, Node, Vuex,
          GraphQL, and various other modern technology stacks. <br />Go ahead
          and send me a message, and if you would like to review my resume, it
          can be provided upon request. <br />Have a great day!
        </p>

        <contact-form class="mx-4 mt-8" />
      </div>
    </div>
  </Layout>
</template>

<script>
import ContactForm from '../components/ContactForm'
export default {
  metaInfo: {
    title: 'Designer Panel'
  },
  components: {
    ContactForm
  }
}
</script>

<style></style>
