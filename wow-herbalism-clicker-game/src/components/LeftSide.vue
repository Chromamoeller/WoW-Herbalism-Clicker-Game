<template>
  <div class="content">
    <FlowerCard
      name="Friedensblume"
      :isVisible="true"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_flower_02.jpg"
    />
    <FlowerCard
      name="Silberblatt"
      :isVisible="true"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_10.jpg"
    />
    <FlowerCard
      name="Erdwurzel"
      :isVisible="true"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_07.jpg"
    />
    <FlowerCard
      name="Marguskönigskraut"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_talisman_03.jpg"
    />
    <FlowerCard
      name="Wilddornrose"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_root_01.jpg"
    />
    <FlowerCard
      name="Würgetang"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_11.jpg"
    />
    <FlowerCard
      name="Beulengras"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_01.jpg"
    />
    <FlowerCard
      name="Wildstahlblume"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_flower_01.jpg"
    />
    <FlowerCard
      name="Grabmoos"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_dust_02.jpg"
    />
    <FlowerCard
      name="Königsblut"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_03.jpg"
    />
    <FlowerCard
      name="Lebenswurz"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_root_02.jpg"
    />
    <FlowerCard
      name="Blass Blatt"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_12.jpg"
    />
    <FlowerCard
      name="Golddorn"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_15.jpg"
    />
    <FlowerCard
      name="Khadgars Schnurrbart"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_08.jpg"
    />
    <FlowerCard
      name="Winterbiss"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_flower_03.jpg"
    />
    <FlowerCard
      name="Feuerblüte"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_19.jpg"
    />
    <FlowerCard
      name="Lila Lotus"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_17.jpg"
    />
    <FlowerCard
      name="Arthas Tränen"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_13.jpg"
    />
    <FlowerCard
      name="Sonnengras"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_18.jpg"
    />
    <FlowerCard
      name="Blindkraut"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_14.jpg"
    />
    <FlowerCard
      name="Geisterpilz"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_mushroom_08.jpg"
    />
    <FlowerCard
      name="Gromsblut"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_16.jpg"
    />
    <FlowerCard
      name="Goldener Sansam"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_sansamroot.jpg"
    />
    <FlowerCard
      name="Traumblatt"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_dreamfoil.jpg"
    />
    <FlowerCard
      name="Bergsilbersalbei"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_mountainsilversage.jpg"
    />
    <FlowerCard
      name="Pestblüte"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_plaguebloom.jpg"
    />
    <FlowerCard
      name="Eiskappe"
      :isVisible="false"
      imgLink="https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_icecap.jpg"
    />
    <FlowerCard
      name="Schwarzer Lotus"
      :isVisible="false"
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
  background-image: url(../assets/Durotar.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  border-right: 1px solid black;
  overflow-y: scroll;
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
