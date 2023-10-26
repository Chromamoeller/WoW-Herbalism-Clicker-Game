<template>
  <div class="content">
    <PotionCard2 />
    <PotionCard2 />
    <PotionCard2 />
    <PotionCard2 />
    <PotionCard2 />
    <PotionCard2 />
  </div>
</template>

<script>
import PotionCard2 from "./PotionCard2.vue";

export default {
  name: "RightSide",
  components: { PotionCard2 },
};
</script>

<style scoped>
.content {
  background-image: url("../assets/WaldVonElwynn.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;

  overflow-y: scroll;
  background-color: rgb(193, 193, 193);
  width: 40%;
  height: 100%;
  border-left: 1px solid black;
}
::-webkit-scrollbar {
  width: 6px;
  background-color: rgb(255, 255, 255);
}

::-webkit-scrollbar-thumb {
  background-color: #969696;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #474747;
}
</style>
