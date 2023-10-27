<template>
  <q-card style="background-color: rgba(100, 200, 100, 0.2)">
    <q-img src="https://picsum.photos/300/200">
      <div dense class="absolute-bottom-left">{{ count }}</div>
    </q-img>
    <q-card-section>
      <q-btn>Collect</q-btn>
      <q-btn>Sell</q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "PotionCard2",
  data() {
    return {
      count: 0,
    };
  },
};
</script>
