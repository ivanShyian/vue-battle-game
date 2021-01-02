function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            gameStatus: null,
        }
    },
    watch: {
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0) {
                this.gameStatus = 'draw';
            } else if (value <=0) {
                this.gameStatus = 'lost'
            }
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <= 0) {
                this.gameStatus = 'draw';
            } else if (value <=0) {
                this.gameStatus = 'won'                
            }
        },
    },
    computed: {
        calcMonsterHealth() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },
        calcPlayerHealth() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },
        showSpecialAttack() {
            // if number not deviding by 3 - true (:disable="true")
            // if number devidibg by 3 - false (:disable="false")
            return this.currentRound % 3 !== 0;
        },
    },
    methods: {
        startGame() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.currentRound = 0,
            this.gameStatus = null
        },
        specialAttack() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 24);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackMonter() {
            // Math.random() * (max-min) + min;
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(9, 19);
            this.playerHealth -= attackValue;
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(12, 22);
            console.log(this.playerHealth + healValue)
            if (this.playerHealth + healValue >= 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
        surrender() {
            this.gameStatus = 'lost';
        }
    }
});
app.mount('#game');