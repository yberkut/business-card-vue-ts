import { ActionTree }         from 'vuex';
import { getUser }            from '../../api/usersRegistry';
import { RootState }          from '../types';
import { ProfileState, User } from './types';

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    getUser((user: User) => {
      commit('profileLoaded', user);
    });
  }
};
