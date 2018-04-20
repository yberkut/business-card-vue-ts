import { GetterTree }                             from 'vuex';
import { RootState }                              from '../types';
import { InfoRecord, ProfileState, SocialRecord } from './types';

export const getters: GetterTree<ProfileState, RootState> = {
  fullName(state): string {
    const { user } = state;
    const firstName = (user && user.firstName) || '';
    const lastName = (user && user.lastName) || '';
    return `${firstName} ${lastName}`;
  },
  fullInfo(state): InfoRecord[] {
    return state.user && state.user.info || [];
  },
  shortInfo(state): InfoRecord[] {
    const info = state.user && state.user.info || [];
    return info.filter(record => record.title.toLowerCase() !== 'age');
  },
  qrCode(state): string {
    return state.user && state.user.qrCode || '';
  },
  social(state): SocialRecord[] {
    return state.user && state.user.social || [];
  }
};
