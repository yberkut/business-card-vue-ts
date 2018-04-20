import { Module }       from 'vuex';
import { RootState }    from '../types';
import { actions }      from './actions';
import { getters }      from './getters';
import { mutations }    from './mutations';
import { ProfileState } from './types';

export const state: ProfileState = {
  user: undefined,
  error: false
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
