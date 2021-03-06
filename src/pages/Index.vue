<template>
  <Layout>
    <div
      class="lg:container flex justify-center align-middle items-center mx-auto overflow-hidden"
    >
      <div
        class="flex-1 mt-0 lg:mt-12 border-none justify-center align-middle items-center object-center px-4 py-2 mx-6 lg:mx-32 bg-trans-gradient rounded-lg shadow border-white border-2 lg:pb-16 lg:pt-8"
      >
        <h2
          class="text-4xl font-light italic mb-0 pb-0 mt-0 md:mt-4 text-white text-center"
        >
          Unique software &amp; creative resources.
        </h2>
        <h3
          class="text-2xl tracking-wide text-white text-center mt-0 mb-2 md:mb-8"
        >
          Building applications for developers and designers.
        </h3>
        <p class="text-center text-white mt-0">
          some projects
        </p>
        <div class="block md:flex px-10">
          <g-link
            class="block btn-default text-magenta-500 hover:bg-magenta-500 hover:text-white border border-solid border-magenta-500 text-center no-underline bg-transparent md:w-1/3 my-4 mx-6"
            to="/cliplo"
          >
            cliplo
          </g-link>
          <g-link
            class="block btn-default border border-yellow-500 border-solid hover:bg-yellow-500 hover:text-black text-yellow-500 text-center no-underline bg-transparent my-4 md:w-1/3 mx-6"
            to="/designer-panel"
          >
            designer panel
          </g-link>
          <g-link
            class="block btn-default text-cyan-500 border border-solid  hover:bg-cyan-500 hover:text-white text-center no-underline border-cyan-500 bg-transparent my-4 md:w-1/3 mx-6"
            to="/betapic"
          >
            betapic
          </g-link>
        </div>
      </div>
    </div>

    <div id="three-container" />

    <div
      class="bottom-0 right-0 fixed mr-8 text-xs mb-10 text-white flex h-8 align-middle opacity-0"
      :class="{ 'opacity-100': showing_line_count }"
    >
      lines: {{ line_count }}
    </div>

    <div
      class="bottom-0 right-0 fixed m-4 text-white flex h-8 align-middle items-center"
      @mouseenter="showing_line_count = true"
      @mouseleave="showing_line_count = false"
    >
      <p class="hidden md:block text-xs mx-2 align-middle self-center">
        controls
      </p>
      <button
        class="btn-xs bg-transparent text-white border border-transparent hover:border-white mx-1 w-6 h-6 flex items-center justify-center"
        @click="addLine"
      >
        +
      </button>
      <button
        class="btn-xs bg-transparent text-white border border-transparent hover:border-white mx-1 w-6 h-6 flex items-center justify-center"
        @click="removeLine"
      >
        -
      </button>
    </div>
  </Layout>
</template>

<script>
import * as THREE from "three";

export default {
  metaInfo: {
    title: "Welcome to Codestuff",
  },
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      loader: null,
      lines: [],
      line_count: 20,
      mouseX: null,
      mouseY: null,
      showing_line_count: false,
      windowHalfX: null,
      windowHalfY: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.getWindowSizes();
      this.init();
      this.animate();
    }, 250);
  },
  methods: {
    init: function() {
      if (typeof window !== "undefined") {
        let container = document.getElementById("three-container");
        this.camera = new THREE.PerspectiveCamera(
          45,
          container.clientWidth / container.clientHeight,
          1,
          5000
        );
        this.camera.position.set(0, 0, 125);
        this.camera.lookAt(0, 0, 0);
        this.scene = new THREE.Scene();

        // renderer needs to use alpha so it can have transparent background
        this.renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });

        // make the renderer background transparent
        this.renderer.setClearColor(0x000000, 0);

        this.renderer.setSize(container.clientWidth, container.clientHeight);

        let line_mat = [];
        let line_geo = [];

        // loop to create each line and determine its color and vertices
        for (let i = 0; i < this.line_count; i++) {
          // get a random number between 0-2 to determine which color to use
          let color_index = Math.round(this.getRandomArbitrary(0, 2));
          let colors = ["#fff02a", "#00afec", "#ea148c"];

          // create line material and color it
          line_mat[i] = new THREE.LineBasicMaterial({
            color: colors[color_index],
          });
          line_geo[i] = new THREE.Geometry();

          // randomly generate number of vertices between 1 and 15
          let line_verts = Math.round(this.getRandomArbitrary(1, 8));

          for (let v = 0; v < line_verts; v++) {
            // randomly generate a vector x, y, and z coordinate between -100 - 100
            line_geo[i].vertices.push(
              new THREE.Vector3(
                this.getRandomArbitrary(-75, 50),
                this.getRandomArbitrary(-100, 100),
                this.getRandomArbitrary(-100, 100)
              )
            );
          }

          // create the actual line with geometry and material
          this.lines[i] = new THREE.Line(line_geo[i], line_mat[i]);

          this.lines[i].name = "line_" + i;

          // add line to scene
          this.scene.add(this.lines[i]);
        }

        var part_geometry = new THREE.BufferGeometry();
        var part_vertices = [];
        for (var i = 0; i < 15000; i++) {
          part_vertices.push(THREE.Math.randFloatSpread(2000)); // x
          part_vertices.push(THREE.Math.randFloatSpread(2000)); // y
          part_vertices.push(THREE.Math.randFloatSpread(2000)); // z
        }

        part_geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(part_vertices, 3)
        );
        var particles = new THREE.Points(
          part_geometry,
          new THREE.PointsMaterial({ color: 0x888888 })
        );
        this.scene.add(particles);

        document.addEventListener("mousemove", this.onDocumentMouseMove, false);
        window.addEventListener("resize", this.onWindowResize, false);
        container.appendChild(this.renderer.domElement);
      }
    },
    addLine() {
      this.line_count = this.line_count + 1;
      let color_index = Math.round(this.getRandomArbitrary(0, 2));
      console.log(this.line_count);
      let colors = ["#fff02a", "#00afec", "#ea148c"];
      let line_mat = new THREE.LineBasicMaterial({
        color: colors[color_index],
      });
      let line_geo = new THREE.Geometry();
      let line_verts = Math.round(this.getRandomArbitrary(2, 25));
      for (let v = 0; v < line_verts; v++) {
        // randomly generate a vector x, y, and z coordinate between -100 - 100
        line_geo.vertices.push(
          new THREE.Vector3(
            this.getRandomArbitrary(-100, 100),
            this.getRandomArbitrary(-100, 100),
            this.getRandomArbitrary(-100, 100)
          )
        );
      }
      let line = new THREE.Line(line_geo, line_mat);
      line.name = "line_" + (this.line_count - 1);
      this.lines.push(line);
      this.scene.add(line);
      this.renderer.render(this.scene, this.camera);
    },
    removeLine() {
      if (this.line_count > 0) {
        this.line_count = this.line_count - 1;
        var selectedObject = this.scene.getObjectByName(
          "line_" + this.line_count
        );
        this.lines.pop();
        console.log(this.line_count);
        this.scene.remove(selectedObject);
        this.renderer.render(this.scene, this.camera);
      }
    },
    getWindowSizes() {
      if (typeof window !== "undefined") {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
      }
    },
    onWindowResize() {
      if (typeof window !== "undefined") {
        this.getWindowSizes();
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    },
    onDocumentMouseMove(event) {
      if (typeof window !== "undefined") {
        this.mouseX = event.clientX - this.windowHalfX;
        this.mouseY = event.clientY - this.windowHalfY;
      }
    },
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
    animate: function() {
      if (typeof window !== "undefined") {
        requestAnimationFrame(this.animate);
        this.camera.position.x +=
          (this.mouseX / 2 - this.camera.position.x) * 0.05;
        this.camera.position.y +=
          (-(this.mouseY / 2) - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);
        for (let i = 0; i < this.lines.length; i++) {
          this.lines[i].rotation.x += 0.001;
          this.lines[i].rotation.y += 0.0005;
          this.lines[i].rotation.z += -0.001;
        }
        this.renderer.render(this.scene, this.camera);
      }
    },
  },
};
</script>

<style>
#three-container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(27, 3, 17, 1) 100%
  );
  overflow: hidden;
}

.bg-trans-gradient {
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.85) 10%,
    rgba(27, 3, 17, 0.15) 100%
  );
}
</style>
