<template>
  <div id="app" >
    <div :class="theme" >
      <div class="headerbar">
        <div class="htitle"><h3>Title Goes Here</h3></div>
        <!-- <h2>fdfdff</h2> -->
        <div @click="$emit('close')" class="xbutton"><h1>X</h1></div>
      </div>
      <div>
        <img class="van" :src="`./assets/images/${img}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    img: String,
    theme: String,
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods: {
    close() {
      this.$emit("close", (this.isActive = !this.isActive));
    },
  },
};
</script>

<style scoped>
button {
  padding: 25px 25px;
  border: none;
  background: #0faf87;
}
.headerbar {
  background-color: rgb(120, 68, 242);
  background-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
  border-bottom: ridge 12px;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
  height: 40px;
  position: relative;
  text-align: center;
}



.xbutton {
  display: inline-block;
  line-height: 0;
  background: orangered;
  right: 0;
  top: 0;
  width: 50px;
  border: ridge 10px;
  position: absolute;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
}
.xbutton:hover {
  border: pink ridge 12px;
}

.htitle {
  display: inline-block;
  line-height: 0;
}

#app {
  display: inline-block;
  position:relative;
}
.contentbox {
  /* position: relative; */
  z-index: 3;
  width: 500px;
  margin: 10px;
  border: ridge 8px;
  border-radius: 2%;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
  background-color: #101373; /* light blue background color */
  background-image: linear-gradient(#3137f5 0.1rem, transparent 0.1rem),
    linear-gradient(90deg, #3137f5 0.1rem, transparent 0.1rem);
  background-size: 3rem 3rem; /* size of the grid squares */
  animation: animateBackground 40s linear infinite;
}
@keyframes animateBackground {
  from {
    background-position: 0 0; /* start at top-left corner */
  }
  to {
    background-position: 100% 100%; /* end at bottom-right corner */
  }
}

.contentbox2 {
  position: relative;
  margin: 10px;
  z-index: 3;
  height: 450px;
  border: ridge 8px;
  border-radius: 2%;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );

  overflow: hidden;
}
.contentbox2 img {
  width: 600px;
  height: auto;
  
}
.contentbox3 {
  z-index: 3;
  
  width:500px;
  height:500px;
  margin: 10px;
  border: ridge 8px;
  border-radius: 2%;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
  overflow: hidden;
  
}
.contentbox3 img {
  width: 100%;
  height:auto;
}

.van {
  height: 240px;
}

@media only screen and (max-width: 500px) {
  .contentbox {
    width: 50vh;
    height: auto;
  }
}
</style>
