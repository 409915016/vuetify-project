import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://att.bbs.duowan.com/forum/201608/26/043824v0tax8xt8tqhv7bl.jpg',
        id: '1',
        title: 'Meetup in New York',
        date: '2017-07-17',
        location: 'New York',
        description: 'New York, New York!'
      },
      {
        imageUrl: 'http://pic1.win4000.com/wallpaper/b/589d620792a84.jpg',
        id: '2',
        title: 'Meetup in 2',
        date: '2017-07-19',
        location: 'Paris',
        description: 'It\'s Paris'
      }
    ],
    user: {
      id: '21312',
      registeredMeetups: ['231231435432']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '46546546'
      }
      // Reach out firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featureMeetups (state, geeters) {
      return geeters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
