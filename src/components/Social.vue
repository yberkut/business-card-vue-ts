<template>
  <div :class="styled.social">
    <v-btn v-for="btn in social" :key="btn.name" :fab="styled.breakpoint.smAndDown" flat icon color="white">
      <v-icon>{{btn.icon}}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
  import { Component, Vue }            from 'vue-property-decorator';
  import { Getter, State }             from 'vuex-class';
  import { Breakpoint, getBreakpoint } from '../shared/UI/Breakpoint';
  import { Styled }                    from '../shared/UI/Styled';
  import { ProfileState }              from '../store/profile/types';

  const namespace: string = 'profile';

  @Component
  export default class QrCode extends Vue implements Styled {
    @State('profile')
    private profile: ProfileState;

    @Getter('social', { namespace })
    private social: string;

    get styled() {
      const breakpoint = getBreakpoint(this);
      return { ...classes(breakpoint), breakpoint };
    }
  }

  const classes = (bp: Breakpoint) => ({
    social: {
      'social': true,
      'social-mobile': bp.smAndDown
    }
  });
</script>

<style lang="stylus" scoped>
  .social
    background-color #39484f
    &-mobile
      display flex
      justify-content space-evenly
</style>
