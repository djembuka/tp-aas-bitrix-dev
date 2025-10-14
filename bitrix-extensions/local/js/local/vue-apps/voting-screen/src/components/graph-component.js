import '../css/graph-component.css'

export const GraphComponent = {
    props: ['votedNum', 'votedPercentage', 'notVotedNum', 'notVotedPercentage'],
    template: `
        <div class="twpx-voting-screen-block twpx-voting-screen-graph">
            <div class="twpx-voting-screen-graph-item twpx-voting-screen-graph-item--voted">
                <div class="twpx-voting-screen-graph-item__rect" :style="'height: '+votedPercentage+'%;'">
                    <div class="twpx-voting-screen-graph-item__num">{{ votedNum }}</div>
                    <div class="twpx-voting-screen-graph-item__proc">{{ votedPercentage }}%</div>
                </div>
                <div class="twpx-voting-screen-graph-item__text">Проголосовали</div>
            </div>
            <div class="twpx-voting-screen-graph-item twpx-voting-screen-graph-item--not"
                :class="{'twpx-voting-screen-graph-item--zero': Number(notVotedNum)===0}"
            >
                <div class="twpx-voting-screen-graph-item__rect" :style="'height: '+notVotedPercentage+'%;'">
                    <div class="twpx-voting-screen-graph-item__num">{{ notVotedNum }}</div>
                    <div class="twpx-voting-screen-graph-item__proc">{{ notVotedPercentage }}%</div>
                </div>
                <div class="twpx-voting-screen-graph-item__text">Не голосовали</div>
            </div>
        </div>
    `
};