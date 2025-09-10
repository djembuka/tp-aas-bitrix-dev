import './comment.css';
import { ButtonComponent } from 'local.vue-components.button-component';

export const CommentItem = {
    components: {
        ButtonComponent
    },
    props: ['comment'],
    emits: ['clickEdit', 'clickDelete'],
    template: `
        <div class="twpx-comment">
            <div class="twpx-comment-wrapper">
                <div class="twpx-comment__text" v-if="comment.text">
                    {{ comment.text }}
                </div>
                <div class="twpx-comment__data">
                    <div class="twpx-comment__user-img" v-if="comment.user.img">
                        <a :href="comment.user.href">
                            <img :src="comment.user.img" alt />
                        </a>
                    </div>
                    <div class="twpx-comment__info">
                        <div class="twpx-comment__user-name" v-if="comment.user.name">
                            <a :href="comment.user.href">{{ comment.user.name }}</a>
                        </div>
                        <div class="twpx-comment__time" v-if="comment.create">{{ formatDate(comment.create) }}</div>
                    </div>
                </div>
            </div>
            <div class="twpx-comment__buttons" v-if="comment.editButton">
                <ButtonComponent :text="Edit" :props="['icon', 'edit', 'medium']" @clickButton="$emit('clickEdit', comment.id)" />
                <ButtonComponent :text="Delete" :props="['icon', 'delete', 'medium']" @clickButton="$emit('clickDelete', comment.id)" />
            </div>
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
        },
    }
}