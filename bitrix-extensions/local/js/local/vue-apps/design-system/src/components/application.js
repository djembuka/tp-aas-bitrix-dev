import './application.css';
import { TheMenu } from './the-menu';

export const Application = {
  components: {
    TheMenu,
  },
  template: `
    <TheMenu />
    <router-view />
	`,
};
