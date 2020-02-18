<template>
  <div class="win">
    <div>
      <h2>Congratulations!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Winning"
};
</script>

<style lang="scss">
/* if you win */
.win {
  text-align: center;
  padding: auto;
  margin: auto;
}
.win h1 {
  font-weight: bold;
}
.win .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
}

.win .stars li {
  list-style: none;
  display: inline-block;
}
.win p {
  padding: 3em;
}
</style>
