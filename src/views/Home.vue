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
      <img src="/assets/images/yagihip.gif" alt="profile" />
    </div>
    <div class="mainContainer">
      <!-- <new-entry @add-entry="addEntry"> </new-entry> -->
      <blog-entry
        class="blog"
        v-for="entry in entries"
        :key="entry.id"
        :id="entry.id"
        :title="entry.title"
        :date="entry.date"
        :description="entry.description"
      />
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
  max-width: 630px;
  height: auto;
  position: fixed;
  z-index: -1;
}

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

  .profile img {
    width: 100%;
    position: fixed;
    z-index: -1;
    bottom: 5%;
  }
}
</style>
