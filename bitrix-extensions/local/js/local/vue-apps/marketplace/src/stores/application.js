import { defineStore } from 'ui.vue3.pinia';

export const applicationStore = defineStore('application', {
    state: () => ({
        applicationControls: [],
        applicationGroups: []
    }),
    actions: {
        setStepActive({ step, active }) {
            step.active = active;
        },
        changeApplicationControls(controls) {
            this.applicationControls = controls.map(c => {
                if (c.required) {
                    c.label = `${c.label} *`;
                }
                return c;
            });
        },
        changeApplicationGroups(groups) {
            this.applicationGroups = groups;
        },
    }
});