import About from './pages/About';
import Test from './pages/Test';

export default {
  components: { About, Test },
  template: /*html*/ `<div>
        <nav>
            <ul>
                <li><router-link to="/">Test</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </nav>
        <main>
            <router-view />
        </main>
    </div>`,
};
