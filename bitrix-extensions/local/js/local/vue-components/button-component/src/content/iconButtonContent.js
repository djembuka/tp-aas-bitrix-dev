import { DeleteIcon } from '../icons/delete.js';
import { EditIcon } from '../icons/edit.js';

export const iconButtonContent = {
    props: ['props'],
    components: {
        DeleteIcon,
        EditIcon
    },
    template: `
        <DeleteIcon v-if="isDelete" />
        <EditIcon v-else-if="isEdit" />
    `,
    computed: {
        isDelete() {
            return this.props.find(e => e === 'delete');
        },
        isEdit() {
            return this.props.find(e => e === 'edit');
        },
    },
};