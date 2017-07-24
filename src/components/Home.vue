<template>
  <v-container>
    <v-layout row wrap >
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id">
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm12 class="text-xs-center ">
        <p>Join our awesome meetups!</p>

      </v-flex>

    </v-layout>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          {
            imageUrl: 'http://att.bbs.duowan.com/forum/201608/26/043824v0tax8xt8tqhv7bl.jpg',
            id: '1',
            title: 'Meetup in New York'
          },
          {
            imageUrl: 'http://pic1.win4000.com/wallpaper/b/589d620792a84.jpg',
            id: '2',
            title: 'Meetup in 2'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, .5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
