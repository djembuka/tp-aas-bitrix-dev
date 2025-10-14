import '../css/status-timer.css'

export const StatusTimer = {
    props: ['command', 'params'],
    data() {
        return {
            currentTime: 0, // оставшееся время в секундах
            timerInterval: null,
            isTimerRunning: false,
            startTime: null, // момент начала отсчета
            totalDuration: 0 // общая продолжительность в секундах
        }
    },
    template: `
        <div style="display: grid; gap: 16px; justify-items: flex-end;">
            <div class="twpx-voting-screen__state-0" v-if="command==='voting_v2'">Подготовка</div>
            
            <div class="twpx-voting-screen__state-1" v-else-if="command==='voting_v3'">
                <div class="twpx-voting-screen__status">Голосование идет</div>
                <div class="twpx-voting-screen__timer">{{ formattedTime }}</div>
            </div>
            
            <div class="twpx-voting-screen__state-1" v-else-if="command==='voting_v4'">
                <div class="twpx-voting-screen__status">Голосование приостановлено</div>
                <div class="twpx-voting-screen__timer">{{ formattedTime }}</div>
            </div>
            
            <div class="twpx-voting-screen__state-2" v-else-if="command==='voting_v5'">
                <div class="twpx-voting-screen__status">Закончено</div>
                <div class="twpx-voting-screen__timer">00:00</div>
            </div>
            
            <div class="twpx-voting-screen__state-3" v-else-if="command==='voting_v6'">Голосование в архиве</div>
        </div>
    `,
    computed: {
        formattedTime() {
            const minutes = Math.floor(this.currentTime / 60);
            const seconds = this.currentTime % 60;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    },
    watch: {
        command: {
            handler(newCommand) {
                if (newCommand === 'voting_v3') {
                    this.initializeTimer();
                } else if (newCommand === 'voting_v4') {
                    this.initializeStaticTimer();
                } else {
                    this.stopTimer();
                }
            },
            immediate: true
        },
        params: {
            handler(newParams) {
                if ((this.command === 'voting_v3' || this.command === 'voting_v4') && newParams) {
                    if (this.command === 'voting_v3') {
                        this.initializeTimer();
                    } else if (this.command === 'voting_v4') {
                        this.initializeStaticTimer();
                    }
                }
            },
            deep: true
        }
    },
    methods: {
        initializeTimer() {
            if (!this.params || !this.params.stateDate || !this.params.timer) {
                return;
            }

            // Парсим дату начала
            this.startTime = new Date(this.params.stateDate);
            this.totalDuration = parseInt(this.params.timer, 10);
            
            this.calculateRemainingTime();
            this.startTimer();
        },

        calculateRemainingTime() {
            if (!this.startTime || !this.totalDuration) {
                return;
            }

            const now = new Date();
            const elapsedSeconds = Math.floor((now - this.startTime) / 1000);
            this.currentTime = Math.max(0, this.totalDuration - elapsedSeconds);
        },

        initializeStaticTimer() {
            if (!this.params || !this.params.stateDate || !this.params.timer) {
                return;
            }

            // Парсим дату начала
            this.startTime = new Date(this.params.stateDate);
            this.totalDuration = parseInt(this.params.timer, 10);
            
            // Рассчитываем оставшееся время один раз
            this.calculateRemainingTime();
            
            // Останавливаем любой активный таймер
            this.stopTimer();
        },

        startTimer() {
            if (this.isTimerRunning) return;
            
            this.isTimerRunning = true;
            
            this.timerInterval = setInterval(() => {
                this.currentTime--;
                
                // Останавливаем таймер когда достигли 0
                if (this.currentTime <= 0) {
                    this.stopTimer();
                    this.currentTime = 0; // устанавливаем точно 0
                }
            }, 1000);
        },
        
        stopTimer() {
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
            this.isTimerRunning = false;
        }
    },
    beforeUnmount() {
        this.stopTimer();
    },
};