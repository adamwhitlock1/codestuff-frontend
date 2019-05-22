<template>
  <div>
    <ClientOnly>
    <PushRotate
      right
      class="md:hidden"
    >
      <g-link
        class="text-base my-0 py-0 text-white no-underline"
        to="/"
      >
        home
      </g-link>

      <g-link
        class="text-base my-0 py-0 text-white no-underline"
        to="/about"
      >
        about
      </g-link>

      <g-link
        class="text-white no-underline my-0 py-0 text-base"
        to="/cliplo"
      >
        software
      </g-link>

      <g-link
        class="text-white no-underline my-0 py-0 text-sm ml-6"
        to="/cliplo"
      >
        cliplo
      </g-link>

      <g-link
        class="text-white no-underline my-0 py-0 text-sm ml-6"
        to="/designer-panel"
      >
        designer panel
      </g-link>

      <g-link
        class="text-white no-underline my-0 py-0 text-sm ml-6"
        to="/betapic"
      >
        betapic
      </g-link>

      <g-link
        class="text-white no-underline my-0 py-0 text-base"
        to="/design"
      >
        design
      </g-link>

      <g-link
        class="text-white no-underline my-0 py-0 text-base"
        to="/photography"
      >
        photography
      </g-link>

      <g-link
        class="text-white no-underline my-0 py-0 text-base"
        to="/contact"
      >
        hire me
      </g-link>
    </PushRotate>
    </ClientOnly>
    <nav class="flex items-center justify-between flex-wrap bg-cyan w-screen z-50 pin-t shadow-lg">
      <div class="flex items-center flex-no-shrink text-white lg:ml-4">
        <g-link
          class="text-white no-underline hover:text-white hover:no-underline"
          to="/"
        >
          <img
            src="@/assets/images/codestuff-logo-1.svg"
            alt=""
            class="ml-4 h-16 mt-4 lg:mt-3 mb-2 px-2"
          >
        </g-link>
      </div>






      <div
        id="nav-content"
        :class="{'h-px opacity-0': isMobileNavHidden}"
        class="w-full flex-grow pt-4 lg:flex lg:items-center lg:w-auto lg:block lg:pt-1 lg:pb-2 h-auto lg:opacity-100 -mt-4 -mb-5"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center px-10">
          <li class="p-2 mx-3 nav-link">
            <g-link
              class="text-white no-underline"
              to="/about"
            >
              about
            </g-link>
          </li>
          <li class="p-2 mx-3 nav-link">
            <dropdown
              dropdown-text="software"
              :links="[
                {
                  text: 'cliplo',
                  to: '/cliplo'
                },
                {
                  text: 'designer panel',
                  to: '/designer-panel'
                },
                {
                  text: 'betapic',
                  to: '/betapic'
                },
              ]"
            />
          </li>
          <li class="p-2 mx-3 nav-link">
            <g-link
              class="text-white no-underline"
              to="/design"
            >
              design
            </g-link>
          </li>
          <li class="p-2 mx-3 nav-link">
            <g-link
              class="text-white no-underline"
              to="/photography"
            >
              photography
            </g-link>
          </li>
          <li class="p-2 mx-3 lg:pb-2 md:pb-12 sm:pb-12 nav-link">
            <g-link
              class="text-white no-underline"
              to="/contact"
            >
              hire me
            </g-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

import Dropdown from "./Dropdown"
export default {
  name: "Header",
  components: {
    Dropdown,
    PushRotate: () =>
import ('vue-burger-menu')
        .then(m => m.PushRotate)
        .catch()
  },
  mounted(){

  },
  data(){
    return {
      isMobileNavHidden: true,
    }
  },
  methods: {
    showMobileNav(danStatus) {
      this.isMobileNavHidden = !this.isMobileNavHidden
    }
  }
}
</script>

<style>
#nav-content {
  transition: 1s;
}

.bm-burger-bars {
  background-color: #fff !important;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0) !important;
}

.bm-menu {
background-color: #00afec !important;
}

</style>