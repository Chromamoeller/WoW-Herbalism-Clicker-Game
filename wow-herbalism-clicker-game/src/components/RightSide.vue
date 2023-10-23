<template>
  <div class="content">
    <PotionCard
      name="Geringer Heiltrank"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_potion_50.jpg"
      :ingredient1="{ name: 'Friedensblume:', count: 3 }"
    />
    <PotionCard
      name="Heiltrank"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_potion_51.jpg"
      :ingredient1="{ name: 'Friedensblume', count: 1 }"
      :ingredient2="{ name: 'Geringer Heiltrank', count: 1 }"
    />
  </div>
</template>

<script>
import PotionCard from "./PotionCard.vue";

export default {
  name: "RightSide",
  components: { PotionCard },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  background-color: rgb(193, 193, 193);
  width: 40%;
  height: 100%;
  border-left: 10px solid black;
}
</style>
