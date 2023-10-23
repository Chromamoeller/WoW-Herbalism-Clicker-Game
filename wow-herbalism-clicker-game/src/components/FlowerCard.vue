<template>
    <div class="card-content">
        <div class="card-img">
            <img :src="imgLink" alt="">
        </div>
        <p>{{ name }}</p>
        <button class="btn">Sammeln</button>

    </div>
</template>

<script>
export default {
    name: "FlowerCard",
    props: {
        imgLink: {
            type: String,
            required: true
        },
        value: Number,
        name: String
    }
}
</script>


<style scoped>
.card-content {
    background-color: aliceblue;
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

.card-img>img {
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

.card-content:hover {
    animation-name: scaling;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

.card-content:not(:hover) {
    animation: unhoverEffect 0.5s forwards;
    /* Starte die Ausblendanimation beim Verlassen des Hovers */
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