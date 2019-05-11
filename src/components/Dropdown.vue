<template>
  <on-click-outside :do="handleClickOutside">
    <div class="relative mx-auto">
      <a
        type="button"
        class="w-full block bg-transparent cursor-pointer text-white rounded py-2 focus:outline-0"
        @click="open = !open"
      >
        {{ dropdownText }}&nbsp; <font-awesome
          :icon="['fas', 'chevron-down']"
          :class="dropdownStatus"
        />
      </a>
      <transition name="dropdownFade">
        <div
          v-show="open"
          class="px-4 py-2 rounded bg-white border absolute z-50 w-32 shadow-lg"
        >
          <div
            v-for="(link, index) in links"
            :key="index"
            class="my-3 mx-2"
          >
            <g-link
              class="text-cyan-darker leading-normal no-underline hover:text-magenta dropdown-link"
              :to="link.to"
            >
              {{ link.text }}
            </g-link>
          </div>
        </div>
      </transition>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "./OnClickOutside.vue"

export default {
  name: "Dropdown",
  components: {
    OnClickOutside
  },
  props: {
    links: {
      type: Array,
      default: [{text: "no text set", to: "/"}]
    },
    dropdownText: {
      type: String,
      default: "No dropdown text"
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    dropdownStatus() {
      if (this.open == false){
        return "closed"
      } else {
        return "open"
      }
    }
  },
  methods: {
    handleClickOutside() {
      if (this.open) {
        this.open = false
      }
    }
  }
}
</script>

<style>
.open {
  transform: scaleY(-1);
}
.fa-chevron-down {
  margin-bottom: -2px;
  transition: .3s;
}
.dropdownFade-enter-active, .dropdownFade-leave-active {
  transition: .35s;
}
.dropdownFade-enter, .dropdownFade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-5px);
}

.dropdown-link {
  position: relative;
}

.dropdown-link::before, .dropdown-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #ea148c;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.dropdown-link::before {
  top: -2px;
  transform-origin: center right;
}

.dropdown-link:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}

.dropdown-link::after {
  bottom: -2px;
  transform-origin: center left;
}

.dropdown-link:hover::after {
  transform-origin: center right;
  transform: scaleX(1);
}

</style>
