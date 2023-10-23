<template>
  <div class="content">
    <FlowerCard
      name="Friedensblume"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_flower_02.jpg"
    />
    <FlowerCard
      name="Silberblatt"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_10.jpg"
    />
    <FlowerCard
      name="Erdwurzel"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_07.jpg"
    />
    <FlowerCard
      name="Marguskönigskraut"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_talisman_03.jpg"
    />
    <FlowerCard
      name="Wilddornrose"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_root_01.jpg"
    />
    <FlowerCard
      name="Würgetang"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_11.jpg"
    />
    <FlowerCard
      name="Beulengras"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_01.jpg"
    />
    <FlowerCard
      name="Wildstahlblume"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_flower_01.jpg"
    />
    <FlowerCard
      name="Grabmoos"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_dust_02.jpg"
    />
    <FlowerCard
      name="Königsblut"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_03.jpg"
    />
    <FlowerCard
      name="Lebenswurz"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_root_02.jpg"
    />
    <FlowerCard
      name="Blass Blatt"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_12.jpg"
    />
    <FlowerCard
      name="Golddorn"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_15.jpg"
    />
    <FlowerCard
      name="Khadgars Schnurrbart"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_08.jpg"
    />
    <FlowerCard
      name="Winterbiss"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_flower_03.jpg"
    />
    <FlowerCard
      name="Feuerblüte"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_19.jpg"
    />
    <FlowerCard
      name="Lila Lotus"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_17.jpg"
    />
    <FlowerCard
      name="Arthas Tränen"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_13.jpg"
    />
    <FlowerCard
      name="Sonnengras"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_18.jpg"
    />
    <FlowerCard
      name="Blindkraut"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_14.jpg"
    />
    <FlowerCard
      name="Geisterpilz"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_mushroom_08.jpg"
    />
    <FlowerCard
      name="Gromsblut"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_16.jpg"
    />
    <FlowerCard
      name="Goldener Sansam"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_sansamroot.jpg"
    />
    <FlowerCard
      name="Traumblatt"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_dreamfoil.jpg"
    />
    <FlowerCard
      name="Bergsilbersalbei	"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_mountainsilversage.jpg"
    />
    <FlowerCard
      name="Pestblüte"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_plaguebloom.jpg"
    />
    <FlowerCard
      name="Eiskappe"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_icecap.jpg"
    />
    <FlowerCard
      name="Schwarzer Lotus"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_blacklotus.jpg"
    />
  </div>
</template>

<script>
import FlowerCard from "./FlowerCard.vue";
export default {
  name: "LeftSide",
  components: { FlowerCard },
};
</script>

<style scoped>
.content {
  background-color: rgb(193, 193, 193);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  border-right: 10px solid black;
  overflow-y: scroll;
}
</style>
