<template>
  <div class="container">
    <div class="icon">
      <button @click="isActive = !isActive">
        <img src="/assets/images/icon.jpg" alt="profile" />
      </button>
    </div>
    <div class="profile">
      <img src="/assets/images/yagihip.gif" alt="profile" />
    </div>
    <popup v-if="isActive" />
    
    <big-popup />
  </div>
</template>

<script>
import BigPopup from '../components/UI/BigPopup.vue';
export default {
  components: { BigPopup },
  data() {
    return {
      isActive: true,  
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-bottom: 75px;
  /* width:100%;
    min-height: 600px; */
  position: relative;
}
.container .profile .mainContainer {
  align-items: center;
  width: 100%;
}
.profile {
}
.profile img {
  flex: 1;
  bottom: 8px;
  left: 10px;
  max-width: 630px;
  height: auto;
  position: fixed;
  z-index: -1;
}


.icon button {
  border: none;
  background: none;
}
.icon button img:hover {
  max-width: 110px;
}

.mainContainer {
  flex: 2;
  padding: 15px;
}
@media only screen and (max-width: 500px) {
  .mainContainer {
    width: 100%;
    /* border-top:solid; */
    border-left: none;
  }

  .profile img {
    width: 100%;
    position: fixed;
    z-index: -1;
    bottom: 1%;
  }
}

.icon {
  position: absolute;
  top: 100px;
  right: 10px;
  margin: 10px;
}
.icon img {
  border-radius: 250px;
  max-width: 100px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
