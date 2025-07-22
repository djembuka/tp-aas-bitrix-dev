import './historyItem.css'

export default {
    data() {
        return {}
    },
    props: ['item'],
    template: `
        <div class="twpx-status-history-item">
            <div>
                <div>{{ formatDate(item.create) }} {{ item.state }}</div>
                <div v-if="item.comment" v-html="item.comment"></div>
            </div>
            <a :href="item.author.url" class="twpx-status-history-item__author"  v-if="item.author.name || item.author.img">
                <img :src="item.author.img" :alt="item.author.name" v-if="item.author.img" />
                <span v-if="item.author.name">{{ item.author.name }}</span>
            </a>
        </div>
    `,
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            const pad = (n) => n.toString().padStart(2, '0');
            return (
                pad(date.getDate()) +
                '.' +
                pad(date.getMonth() + 1) +
                '.' +
                date.getFullYear() +
                ' ' +
                pad(date.getHours()) +
                ':' +
                pad(date.getMinutes()) +
                ':' +
                pad(date.getSeconds())
            );
        }
    }
};