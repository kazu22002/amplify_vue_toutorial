import Vue from 'vue'
import App from './App.vue'
import router from './router';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';

Vue.config.productionTip = false
Vue.use(AmplifyPlugin, AmplifyModules);
Amplify.configure(aws_exports);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



