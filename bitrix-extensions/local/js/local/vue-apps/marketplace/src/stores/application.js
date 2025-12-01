import { defineStore } from 'ui.vue3.pinia';

export const applicationStore = defineStore('application', {
    state: () => ({
        applicationControls: [],
        applicationGroups: []
    }),
    actions: {
        changeApplicationGroups(groups, resultApplicationGroupId) {
            if (groups && groups.filter) {
                this.applicationGroups = groups.filter(g => String(g.id) !== String(resultApplicationGroupId))
            }
        },
        changeApplicationControls(controls, resultApplicationGroupId) {
            if (controls && controls.filter) {
                this.applicationControls = 
                    controls
                        .filter(c => String(c.groupid) !== String(resultApplicationGroupId))
                        .map(c => {
                            if (c.required) {
                                c.label = `${c.label} *`;
                            }
                            return c;
                        });
            }
        },
    }
});