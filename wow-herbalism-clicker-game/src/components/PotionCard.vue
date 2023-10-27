<template>
  <q-card
    class="q-pa-md text-white text-uppercase"
    style="
      width: 100%;
      max-width: 250px;
      border-radius: 25px;
      background-color: rgba(73, 0, 156, 0.445);
    "
  >
    <q-card-section>
      <q-img round src="https://picsum.photos/600/600">
        <q-card class="absolute-bottom-right" round>
          {{ $store.state.potions.smallHealPotion.count }}
        </q-card>
      </q-img>
    </q-card-section>
    <q-card-section class="text-center text-h6"
      >{{ $store.state.potions.smallHealPotion.name }}
    </q-card-section>
    <q-card-section class="flex row q-pa-xs text-subtitle2">
      <q-card
        flat
        class="col text-center text-subtitle2"
        style="background-color: transparent"
      >
        {{ $store.state.potions.smallHealPotion.ingredient1.name }}
      </q-card>
      <q-card
        flat
        class="col text-center text-subtitle2"
        style="background-color: transparent"
      >
        {{ $store.state.potions.smallHealPotion.ingredient1.count }}
      </q-card>
    </q-card-section>
    <q-card-section class="flex row q-pa-xs text-subtitle2">
      <q-card
        flat
        class="col text-center text-subtitle2"
        style="background-color: transparent"
      >
        {{ $store.state.potions.smallHealPotion.ingredient2.name }}
      </q-card>
      <q-card
        flat
        class="col text-center text-subtitle2"
        style="background-color: transparent"
      >
        {{ $store.state.potions.smallHealPotion.ingredient2.count }}
      </q-card>
    </q-card-section>
    <q-card-section class="flex row q-pa-xs"></q-card-section>

    <q-card-section style="display: flex; justify-content: space-evenly">
      <q-btn
        @click="collectHerb()"
        :disabled="cooldown"
        style="margin: 2px"
        glossy
        color="purple-10"
        label="Sammeln"
      ></q-btn>
      <q-btn
        style="margin: 2px"
        glossy
        color="purple-10"
        label="Verkaufen"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  setup() {
    return {};
  },
  data() {
    return {
      cooldown: false,
    };
  },
  props: {},
  methods: {
    collectHerb() {
      if (!this.cooldown) {
        this.cooldown = true;
      }
      setTimeout(() => {
        this.cooldown = false;
      }, 1000);
    },
  },
};
</script>

<style scoped></style>
