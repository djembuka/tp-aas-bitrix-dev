import '../css/graph-component.css'

export const GraphComponent = {
    template: `
        <div class="twpx-voting-screen-block twpx-voting-screen-graph">
            <div class="twpx-voting-screen-graph-item twpx-voting-screen-graph-item--voted">
                <div class="twpx-voting-screen-graph-item__rect" style="height: 85%;">
                    <div class="twpx-voting-screen-graph-item__num">85</div>
                    <div class="twpx-voting-screen-graph-item__proc">85%</div>
                </div>
                <div class="twpx-voting-screen-graph-item__text">Проголосовали</div>
            </div>
            <div class="twpx-voting-screen-graph-item twpx-voting-screen-graph-item--not twpx-voting-screen-graph-item--zero">
                <div class="twpx-voting-screen-graph-item__rect" style="height: 0%;">
                    <div class="twpx-voting-screen-graph-item__num">0</div>
                    <div class="twpx-voting-screen-graph-item__proc">0%</div>
                </div>
                <div class="twpx-voting-screen-graph-item__text">Не голосовали</div>
            </div>
        </div>
    `
};