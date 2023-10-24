<template>
  <div v-if="level <= $store.state.player.level" class="card-content">
    <div class="card-img">
      <img :src="imgLink" alt="" />
    </div>
    <div class="dataField">
      <p class="">{{ name }}</p>
      <p class="">
        {{ $store.state.player.herbs[name.replace(" ", "")] }}
      </p>
    </div>
    <button class="btn" @click="countUp">Sammeln</button>
    <div :class="{ overlay: isWhite }"></div>
  </div>
</template>

<script>
export default {
  name: "FlowerCard",
  data() {
    return {
      isWhite: false,
    };
  },
  props: {
    level: {
      value: Number,
    },
    isVisible: {
      type: Boolean,
    },
    imgLink: {
      type: String,
      required: true,
    },
    value: Number,
    name: String,
  },
  methods: {
    countUp() {
      this.isWhite = true;
      setTimeout(() => {
        this.isWhite = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.card-content {
  background-color: rgba(150, 150, 150, 0.2);
  position: relative;
  margin: 20px;
  width: 200px;
  height: 250px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px 1px black;
}

.card-img {
  width: 100%;
  height: 70%;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  text-align: center;
  font-size: 1.2rem;
}

.card-img > img {
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
  background: rgb(5, 226, 23);
  background: linear-gradient(
    322deg,
    rgba(5, 226, 23, 0.30575980392156865) 0%,
    rgba(255, 255, 255, 0.28895308123249297) 87%
  );
  color: black;
  font-size: 1.6rem;
  border-radius: 0 0 16px 16px;
}
.dataField {
  color: #ffffff;
  display: flex;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 200px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0 0 16px 16px;
  animation-name: lower;
  animation-duration: 1s;
  cursor: not-allowed;
}

.card-content:hover {
  animation-name: scaling;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.card-content:not(:hover) {
  animation: unhoverEffect 0.5s forwards;
  /* Starte die Ausblendanimation beim Verlassen des Hovers */
}

@keyframes lower {
  0% {
    height: 100%;
  }
  100% {
    height: 16%;
  }
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
