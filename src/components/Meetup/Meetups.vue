<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12 sm10 md8 offset-sm1>
        <v-card class="info">
          <v-container>
            <v-layout row>

              <v-flex xs5 sm4 md3>
                <v-card-media
                src="http://pic1.win4000.com/wallpaper/b/589d620792a84.jpg"
                height="125px"
              ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="headline white--text mb-0">My Meetup</h5>
                    <div>17th July 2017</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat to="/meetups/1">
                    <v-icon left light>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>

            </v-layout>

          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
