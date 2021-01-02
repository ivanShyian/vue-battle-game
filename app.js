function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    methods: {
        attackMonter () {
            // Math.random() * (max-min) + min;
            const attackValue = getRandomValue(6, 15);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 19);
            this.playerHealth -= attackValue;
        }
    }
});
app.mount('#game');