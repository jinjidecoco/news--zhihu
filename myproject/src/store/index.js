import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import newLists from './modules/newLists';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
    	newLists
    },
    getters
});