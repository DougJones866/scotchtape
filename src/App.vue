<template>
  <!-- <div class="routing" v-if="this.$route.path !== '/goats'"> -->
   <div class="routing">
     <!-- <the-header /> -->
     <main-border />
     <!-- <marquee /> -->
     <!-- <the-footer /> -->
   </div>
     <router-view />
 </template>
 
 <script>
 export default {
   
 };
 </script>
 
 <style>
 * {
   box-sizing: border-box;
   cursor: url(./assets/cursor.gif), auto;
 }
 html {
   font-family: "Courier New", Courier, monospace;
 }
 body {
   margin: 0;
   background-color: #f5f3f9;
 }
 #app {
   font-family: "Courier New", Courier, monospace;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   /* margin-top: 60px; */
 }
 
 </style>