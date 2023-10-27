<template>
  <div class="potion-card-content">
    <div class="potion-card-img">
      <img :src="imgLink" alt="" />
    </div>
    <div class="name">
      <p>{{ name }}</p>
    </div>
    <div class="ingredients">
      <div class="ingredient1">
        <p class="ingredient-name">
          {{ ingredient1.name }}
        </p>
        <p class="ingredient-count">
          {{ ingredient1.count }}
        </p>
      </div>
      <div class="ingredient2">
        <p v-if="ingredient2 !== undefined" class="ingredient-name">
          {{ ingredient2.name }}
        </p>
        <p v-if="ingredient2 !== undefined" class="ingredient-count">
          {{ ingredient2.count }}
        </p>
      </div>
    </div>
    <button class="btn">Herstellen</button>
  </div>
</template>

<script>
export default {
  name: "PotionCard",
  props: {
    imgLink: {
      type: String,
      required: true,
    },
    value: Number,
    name: String,
    ingredient1: {
      type: Object,
      name: String,
      count: Number,
    },
    ingredient2: {
      required: false,
      type: Object,
      name: String,
      count: Number,
    },
  },
};
</script>

<style scoped>
.potion-card-content {
  background-color: rgba(150, 150, 150, 0.2);
  position: relative;
  margin: 20px;
  width: 200px;
  height: 260px;
  color: #fff;
  border-radius: 16px;
  box-shadow: 0px 0px 20px 1px black;
}
.name {
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
}
.potion-card-img {
  width: 100%;
  height: 50%;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.potion-card-img > img {
  width: 90%;
  height: 90%;
  border-radius: 16px 16px 0 0;
  object-fit: contain;
}

.btn {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0px;
  border: none;
  background-color: black;
  color: aliceblue;
  font-size: 1.6rem;
  border-radius: 0 0 16px 16px;
}
.potion-card-content:hover {
  animation-name: scaling;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.ingredients {
  font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
}
.ingredient1 {
  display: flex;
  width: 100%;
  margin-top: 8px;
  position: relative;
}
.ingredient2 {
  display: flex;
  width: 100%;
  margin-top: 8px;
  position: relative;
}
.ingredient-name {
  margin-left: 10px;
}
.ingredient-count {
  position: absolute;
  right: 15px;
}

.potion-card-content:not(:hover) {
  animation: unhoverEffect 0.5s forwards;
}

@keyframes unhoverEffect {
  0% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes scaling {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.05);
  }
}
</style>
