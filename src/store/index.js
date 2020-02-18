import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stars: 3,
    numMoves: 0,
    types: ["car", "bug", "paw", "bomb", "gamepad", "diamond", "heart", "bell"]
  },
  mutations: {},
  actions: {}
});
