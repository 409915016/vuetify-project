<template>
  <v-container row wrap>
    <v-flex xs-12>
      <v-card>
        <v-card-title>
          <h6 class="primary--text">{{ meetup.title }}</h6>
        </v-card-title>
        <v-card-media
          :src="meetup.imageUrl"
          height="400px"
        ></v-card-media>
        <v-card-text>
          <div class="info--text">
            {{ meetup.date }}
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="primary">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }

    }
  }
</script>
