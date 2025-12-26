import { DeleteWhiteIcon } from '../icons/delete-white.js';
import { ContentWhiteIcon } from '../icons/content-white.js';
import { LinkIcon } from '../icons/link.js';

export const textButtonContent = {
    props: ['text', 'props'],
    components: {
        DeleteWhiteIcon,
        ContentWhiteIcon,
        LinkIcon
    },
    template: `
        <DeleteWhiteIcon v-if="isIconDelete" />
        <ContentWhiteIcon v-if="isIconContent" />
        <LinkIcon v-if="isIconLink" />
        {{ text }}
    `,
    computed: {
        isIconDelete() {
            return this.props.find(e => e === 'icon-delete');
        },
        isIconContent() {
            return this.props.find(e => e === 'icon-content');
        },
        isIconLink() {
            return this.props.find(e => e === 'icon-link');
        }
    },
};