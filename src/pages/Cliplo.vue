<template>
  <Layout>
    <div class="flex items-center flex-row py-6 mt-6 px-12">
      <div class="bg-transparent p-1 -mr-10 w-1/2 z-50">
        <img
          class="w-full"
          src="@/assets/images/cliplo-main-history-trans.png"
          alt=""
        >
      </div>
      <div class="text-white shadow-md text-center p-10 pl-16 bg-white rounded w-1/2">
        <h4 class="text-4xl text-black m-0 mb-3">
          Cliplo:
        </h4>
        <p class="font-extrabold mx-12 my-0 text-cyan-darkest rounded px-10 py-4 bg-cyan-lightestest shadow">
          tech used:<br>
          vue, nuxt, express, lodash, axios, vuex, electron, nedb, carbon cli, tailwind.
        </p>
        <p class="text-cyan mb-4">
          A modern clipboard manager that is built for developer productivity. Access your clipboard history even after your computer restarts. Share code snippets instantly on carbon.now.sh, and archive your snippets for long term usage. Stay on task and remember to take breaks throughout the day with a built in pomodoro timer.
        </p>
        <div class="my-8">
          <button
            v-scrolly="{id: '#howitworks'}"
            class="rounded-full font-sans border-0 text-white text-lg no-underline bg-cyan shadow px-6 py-3"
          >
            how it works
          </button>
        </div>
      </div>
    </div>

    <!-- START UTILS ROW -->
    <div
      id="howitworks"
      class="flex flex-row items-center py-6 px-12 mt-10"
    >
      <div class="text-white bg-magenta w-2/5 py-1 pr-12 pl-6 -mr-10 rounded shadow-md">
        <h4 class="text-4xl text-center mt-12 mb-0 mb-3 h4">
          How it works.
        </h4>
        <p class="font-extrabold mx-10 my-0 text-magenta-darker text-center rounded px-10 py-4 bg-magenta-lightest shadow">
          Cliplo watches your clipboard and saves entries as they are copied throughout the day.
        </p>
        <div class="flex-row flex">
          <div class="px-8 w-full">
            <ul>
              <li>A persistent local database keeps your clipboard history so that you can revisit it even after you have restarted your computer.</li>
              <li class="mt-2">
                Save any past clipboard entry to be archived for future use, and edit entries to add or remove content as needed.
              </li>
              <li class="mt-2">
                Clear you clipboard history when you want to tidy things up, and cut out some clutter.
              </li>
              <li class="mt-2">
                Cliplo also keeps track of what application you copy items from, what the original tab/document name was, and it will also analyze clipboard content to tag your clipboard entries automatically.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-row text-center">
          <div class="w-full pb-12">
            <button
              v-scrolly="{id: '#otherFeatures'}"
              class="rounded-full font-sans border-0 text-magenta text-lg no-underline bg-white shadow px-6 py-3"
            >
              other features
            </button>
          </div>
        </div>
      </div>

      <div class="text-white text-center bg-transparent w-3/5 z-50">
        <img
          src="@/assets/images/how-it-works-trans.png"
          alt=""
        >
      </div>
    </div>

    <!-- START TEMPLATES ROW -->
    <div
      id="otherFeatures"
      class="flex flex-row items-center py-6 mt-12 px-12 mb-12"
    >
      <div class="text-white text-center bg-transparent w-2/3 -mr-10 pt-12 m-3">
        <img
          src="@/assets/images/carbon-cliplo.jpg"
          alt=""
        >
      </div>
      <!-- START 5/6 COLUMN -->
      <div class="text-white bg-yellow w-1/3 py-1 pr-10 pl-10 rounded shadow-md">
        <h4 class="text-4xl text-black text-center mt-12 mb-0 mb-3 h4">
          Carbon at the click of a button.
        </h4>
        <p class="font-extrabold mx-10 my-0 text-black text-center rounded px-10 py-4 bg-yellow-lightest shadow">
          Take any clipboard entry and export it out into a Carbon image.
        </p>
        <div class="flex-row flex">
          <div class="px-8 w-full text-center text-black">
            <p>Use Carbon to share your code snippets on twitter, medium, and other social media outlets.</p>
          </div>
        </div>
        <div class="flex flex-row text-center">
          <div class="w-full pb-12 mt-6">
            <button
              v-scrolly="{id: '#pomodoro'}"
              class="rounded-full text-black font-sans no-underline text-lg bg-white shadow px-6 py-3"
            >
              explore the pomodoro timer
            </button>
          </div>
        </div>
      </div>
    </div>


    <!-- START EDITS ROW -->
    <div
      id="pomodoro"
      class="flex flex-row items-center py-6 mt-12 px-12"
    >
      <div class="text-white bg-black w-1/3 py-1 pl-10 pr-10 -mr-10 mt-12 rounded shadow-md">
        <h4 class="text-4xl text-center mt-12 mb-0 mb-3 h4">
          Pomodoro Timer
        </h4>
        <p class="font-extrabold mx-10 my-0 text-grey-darker text-center rounded px-10 py-4 bg-grey-lightest shadow">
          This is somewhat a personal feature, as I use a Pomodoro timer in my everyday workflow to help take consistent breaks and maintain focus.
        </p>

        <div class="flex flex-row text-center">
          <div class="w-full pb-12 mt-6">
            <button
              v-scrolly="{id: '#customize'}"
              class="rounded-full text-black font-sans no-underline text-lg bg-white shadow px-6 py-3"
            >
              customize cliplo
            </button>
          </div>
        </div>
      </div>
      <div class="text-white text-center w-2/3 z-50">
        <img
          src="@/assets/images/pomodoro-cliplo.png"
          alt=""
        >
      </div>
    </div>




    <!-- START CONTACT ROW -->
    <div
      id="customize"
      class="flex flex-row items-center py-6 px-12 mt-12 mb-32 pb-32"
    >
      <!-- START FULL COLUMN -->
      <div class="text-white bg-cyan w-full py-1 pl-12 pr-6 rounded shadow-deep">
        <h4 class="text-4xl text-center mt-12 mb-0 mb-3 h4">
          Customize Cliplo
        </h4>
        <p class="font-extrabold mx-10 my-0 text-cyan-darker text-center rounded px-10 py-4 bg-cyan-lightest shadow">
          Cliplo comes loaded with over 45 different themes for the clipboard snippet styling thanks to the CodeMirror library. You can also customize the color scheme of the user interface with any colors you would like!
        </p>
        <img
          src="@/assets/images/cliplo-themes.jpg"
          alt=""
          class="rounded mt-10 shadow-deep"
        >

        <h4 class="text-4xl text-center mt-12 mb-0 mb-3 h4">
          Interested in learning more?<br>
          Contact me to sign up for the beta testing program, <br>or to help contribute to this open source project.
        </h4>

        <contact-form />
      </div>
    </div>
  </Layout>
</template>

<script>
import ContactForm from "../components/ContactForm"
export default {
components: {
  ContactForm
}
}
</script>

<style>



</style>