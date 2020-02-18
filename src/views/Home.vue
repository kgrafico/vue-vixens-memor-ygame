<template>
  <div class="home">
    <main class="container">
      <section>
        <button class="restart buttonGray">
          <i class="fa fa-repeat"></i>
          <span class="reset">Reset</span>
        </button>
        <div>
          <ul class="stars">
            <li v-for="(star, index) in stars" :key="index" class="star">
              <i :class="`${index} fa fa-star`"></i>
            </li>
          </ul>
          <p class="moves">Moves: {{numMoves}}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState(["stars", "numMoves", "types"])
  }
};
</script>

<style lang="scss">
.gameController .stars {
  padding: 0px;
  display: inline-block;
  margin: 2em auto 0;
}

.star {
  list-style: none;
  display: inline-block;
  margin: 0 0.2em;
  font-size: 1.5em;
}
.moves {
  font-weight: bold;
}

.gameController .restart {
  float: right;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1em;
}
</style>

