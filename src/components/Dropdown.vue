<template>
  <on-click-outside :do="handleClickOutside">
    <div class="relative mx-auto">
      <a
        type="button"
        class="block w-full py-2 text-white bg-transparent rounded cursor-pointer focus:outline-0"
        @click="open = !open"
      >
        {{ dropdownText }}&nbsp;
        <font-awesome
          :icon="['fas', 'chevron-down']"
          :class="dropdownStatus"
          class="dropdown-chevron"
        />
      </a>
      <transition name="dropdownFade">
        <div
          v-show="open"
          class="absolute z-50 w-40 px-4 py-2 bg-white border rounded shadow-lg"
        >
          <div v-for="(link, index) in links" :key="index" class="mx-2 my-3">
            <g-link
              class="leading-normal no-underline text-cyan-700 hover:text-magenta-500 dropdown-link"
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
import OnClickOutside from "./OnClickOutside.vue";

export default {
  name: "Dropdown",
  components: {
    OnClickOutside,
  },
  props: {
    links: {
      type: Array,
      default() {
        return [{ text: "no text set", to: "/" }];
      },
    },
    dropdownText: {
      type: String,
      default: "No dropdown text",
    },
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    dropdownStatus() {
      if (this.open == false) {
        return "closed";
      } else {
        return "open";
      }
    },
  },
  methods: {
    handleClickOutside() {
      if (this.open) {
        this.open = false;
      }
    },
  },
};
</script>

<style>
.open {
  transform: scaleY(-1);
}

.dropdown-chevron {
  width: 16px !important;
}

.fa-chevron-down {
  margin-bottom: -2px;
  transition: 0.3s;
}
.dropdownFade-enter-active,
.dropdownFade-leave-active {
  transition: 0.35s;
}
.dropdownFade-enter, .dropdownFade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-5px);
}

.dropdown-link {
  position: relative;
}

.dropdown-link::before,
.dropdown-link::after {
  content: "";
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
