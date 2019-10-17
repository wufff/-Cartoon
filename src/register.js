import Vue from 'vue';
import { createAPI } from 'cube-ui';
import Detail  from './components/detail.vue'
createAPI(Vue,Detail);


// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.

