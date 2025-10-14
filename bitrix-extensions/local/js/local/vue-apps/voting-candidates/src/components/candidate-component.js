import { DocComponent } from 'local.vue-components.doc-component';

export const CandidateComponent = {
    data() {
        return {
            print: false
        }
    },
    props: ['lang', 'groups', 'candidate'],
    emits: ['printGroup'],
    components: {
        DocComponent
    },
    template: `
        <h2 v-if="group && print">{{ group.title }}</h2>
        <div class="twpx-poll-candidates-item" v-if="candidate">
            <div class="twpx-poll-candidates-item__info">
                <span class="twpx-poll-candidates-item__img">
                    <img :src="candidate.img" :alt="candidate.name">
                </span>
                <div class="twpx-poll-candidates-item__text">
                    <h3 v-if="candidate.name">{{ candidate.name }}</a></h3>
                    <div class="twpx-poll-candidates-item__description" v-if="candidate.description" v-html="candidate.description"></div>
                </div>
            </div>
            <div class="twpx-poll-candidates-item__docs">
                <DocComponent v-for="doc in candidate.docs" :key="doc.id"  :doc="doc" />
            </div>
        </div>
    `,
    computed: {
        group() {
            return this.groups.find(g => String(g.id) === String(this.candidate.group));
        }
    },
    beforeMount() {
        if (this.group && !this.group.printed) {
            this.print = true;
            this.$emit('printGroup', this.group);
        }
        
    }
};