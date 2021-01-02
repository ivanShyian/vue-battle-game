function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        }
    },
    computed: {
        calcMonsterHealth() {
            return {width: this.monsterHealth + '%'}
        },
        calcPlayerHealth() {
            return {width: this.playerHealth + '%'}
        },
        showSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        specialAttack() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 24);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackMonter () {
            // Math.random() * (max-min) + min;
            this.currentRound++;
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