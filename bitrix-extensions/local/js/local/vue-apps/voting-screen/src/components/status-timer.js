import '../css/status-timer.css'

export const StatusTimer = {
    template: `
        <div style="display: grid; gap: 16px; justify-items: flex-end;">
            <div class="twpx-voting-screen__state-0">Подготовка</div>
            
            <div class="twpx-voting-screen__state-1">
                <div class="twpx-voting-screen__status">Голосование идет</div>
                <div class="twpx-voting-screen__timer">01:54</div>
            </div>
            
            <div class="twpx-voting-screen__state-2">
                <div class="twpx-voting-screen__status">Закончено</div>
                <div class="twpx-voting-screen__timer">00:00</div>
            </div>
            
            <div class="twpx-voting-screen__state-3">Голосование в архиве</div>
        </div>
    `
};