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
  mounted() {
    const url = new URL(window.location.href);
    url.searchParams.entries().forEach(e => {
      if (e[0] === 'tab') {
        const url = `/${e[1].replace('_', '/')}`;
        this.$router.push(url);
      }
    });
  }
};
