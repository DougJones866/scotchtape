<template>
    <div class="container">
      <!-- <h3>Work In Progress</h3> -->
      <!-- <img src="../assets/images/eat.gif" alt="Van Eat"/> -->
      <!-- <div class="goat">
        <div v-if="noGoat">
          <the-button  class="goatbtn" @click="noGoat = !noGoat" :btn-text="text" />
        </div>
        <div v-else>
          <div>
            <the-button class="goatbtn" @click="noGoat = !noGoat" :btn-text="text2" />
          </div>
          <img src="../assets/images/goatdance.gif" />
        </div>
      </div> -->
      <div class="profile">
        <img src="/assets/images/scotch.jpg" alt="profile" />
      </div>
      <div class="mainContainer">
        <!-- <new-entry @add-entry="addEntry"> </new-entry> -->
        <blog-entry class="blog"
          v-for="entry in entries"
          :key="entry.id"
          :id="entry.id"
          :title="entry.title"
          :date="entry.date"
          :description="entry.description"
        />
      </div>
      <div class="profile2">
        <img src="/assets/images/scotch.jpg" alt="profile" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        entries: [
          {
            id: "1",
            title: "Work in Progress",
            date: "Aug 4th 2022",
            description:
              "One day there will be many things on this webpage. Just waiting till my creator wakes up and actually start to do some work",
          },
        ],
        text: "Goat?",
        text2: "No Goat!",
        noGoat: true,
      };
    },
    methods: {
      addEntry(title, date, description) {
        const newBlogEntry = {
          id: new Date().toISOString(),
          title: title,
          date: date,
          description: description,
        };
        this.entry.push(newBlogEntry);
      },
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
  }
  .container .profile .mainContainer {
    align-items: center;
    width: 100%;
    
  }
  .profile {
    
    }
  .profile img {
    flex: 1;
    border-bottom: solid;
    border-right: solid;
    border-top: solid;
    max-width: 630px;
    height: auto;
    
    /* padding: 10px; */
    /* margin: 10px; */
  }
  .profile2 img {
    flex: 1;
      border-bottom: solid;
    border-left: solid;
    border-top: solid;
    max-width: 630px;
    height: auto;
    /* padding: 10px; */
    /* margin: 10px; */
  }
  .goatbtn {
    margin-top: 25px;
  }
  /* img {
    height: 300px;
    width: auto;
    padding: 10px;
    margin: 10px;
  } */
  .mainContainer {
    flex: 2;
    padding: 15px;
    /* width:1900px; */
    /* max-width: 697px; */
    /* height: auto; */
  }
  @media only screen and (max-width: 500px) {
    .mainContainer {
      width: 100%;
      /* border-top:solid; */
      border-left: none;
    }
    .goat {
      border-right: none;
      border-bottom: solid;
    }
    .profile img {
      width: 100%;
      border-style: none;
      border-bottom: solid;
    }
    .profile2 img {
      border-style: none;
      border-top:solid;
      border-bottom: solid;
      width: 100%;
    }
  }
  </style>