<template>
  <div class="container">
    <div class="headerbar">
      <div class="htitle"><h3>ScotchTapeOfficial</h3></div>
      <!-- <div @click="isActive = !isActive" class="xbutton"><h1>X</h1></div> -->
    </div>
    <div class="navbar">
      <p>You Are Here!</p>
    </div>
    <div class="minibox">
      <img src="/assets/images/scotch.jpg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.container {
    position:relative;
    z-index: 5;
    
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
  position: relative;
  text-align: center;
}
.htitle {
  display: inline-block;
  line-height: 0;
}
.navbar {
  background: black;
  width: 100%;
  position: absolute;
  display: block;
  line-height: 0.1;
  color: white;
  border-bottom: ridge 8px;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
}

.minibox {
  background: black;
  width: 100px;
  height: 130px;
  border-bottom: ridge 8px;
  border-right: ridge 8px;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
}

.minibox img {
  width: 100%;
  height: 100%;
}
</style>
