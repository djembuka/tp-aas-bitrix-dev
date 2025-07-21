export default {
    props: {
        rect: {
            type: String,
            default: '#4F74D1'
        },
        stroke: {
            type: String,
            default: '#F2F7FF'
        }
    },
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="8" :fill="rect"/>
            <path d="M6 12L11.6 16L18 8" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}