<template>
  <div class="icons" v-for="icon in icons" :key="icon">
    <img :src="`./assets/icons/${icon.img}`" class="iconimg" />
  </div>
</template>

<script>
export default {
    data(){
        return {
            icons: [
                {
                  id: 1,  
                  img: "icon1.png"
                },
                {
                  id: 1,  
                  img: "icon1.png"
                },
                {
                  id: 1,  
                  img: "icon1.png"
                },
            ],
        }
    }
}
</script>

<style scoped>

.icons{
    
}

.iconimg:hover {
    width: 110%;
}

</style>