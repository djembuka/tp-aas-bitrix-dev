import { DeleteIcon } from '../icons/delete.js';
import { DeleteWhiteIcon } from '../icons/delete-white.js';
import { EditIcon } from '../icons/edit.js';

export const iconButtonContent = {
    props: ['props'],
    components: {
        DeleteIcon,
        DeleteWhiteIcon,
        EditIcon
    },
    template: `
        <DeleteIcon v-if="isDelete" />
        <DeleteWhiteIcon v-if="isDeleteWhite" />
        <EditIcon v-else-if="isEdit" />
    `,
    computed: {
        isDelete() {
            return this.props.find(e => e === 'delete');
        },
        isDeleteWhite() {
            return this.props.find(e => e === 'delete-white');
        },
        isEdit() {
            return this.props.find(e => e === 'edit');
        },
    },
};