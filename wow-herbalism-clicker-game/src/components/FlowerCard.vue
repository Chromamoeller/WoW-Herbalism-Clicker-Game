<template>
  <div v-if="level <= player.level" class="card-content">
    <div class="card-img">
      <img :src="imgLink" alt="" />
    </div>
    <p>{{ name }}</p>
    <button class="btn" @click="makeMeWhite">Sammeln</button>
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
    player: {
      type: Object,
    },
  },
  methods: {
    makeMeWhite() {
      this.isWhite = true;
      console.log("Yeha");
      setTimeout(() => {
        this.isWhite = false;
      }, 2000);
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
  font-size: 1.6rem;
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
  background-color: black;
  color: aliceblue;
  font-size: 1.6rem;
  border-radius: 0 0 16px 16px;
}
.overlay {
  position: absolute;
  top: 0;
  width: 200px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  animation-name: lower;
  animation-duration: 2s;
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
    height: 0%;
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
