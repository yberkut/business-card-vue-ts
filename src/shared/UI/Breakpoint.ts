import { Vue } from 'vue/types/vue';

export interface Breakpoint {
  height: number;
  lg: boolean;
  lgAndDown: boolean;
  lgAndUp: boolean;
  lgOnly: boolean;
  md: boolean;
  mdAndDown: boolean;
  mdAndUp: boolean;
  mdOnly: boolean;
  name: string;
  sm: boolean;
  smAndDown: boolean;
  smAndUp: boolean;
  smOnly: boolean;
  width: number;
  xl: boolean;
  xlOnly: boolean;
  xs: boolean;
  xsOnly: boolean;
}

export function getBreakpoint(context: Vue): Breakpoint {
  if (!context.$vuetify || !context.$vuetify.breakpoint || !(context.$vuetify.breakpoint as Breakpoint)) {
    throw new Error('"Vuetify" library should be attached to context!');
  }
  return context.$vuetify.breakpoint;
}
