<template>
  <div :class="styled.titleContainer">
    <h1 :class="styled.titleText">
      I'm <span class="ib-title-bold">{{fullName}}</span>
    </h1>
    <span :class="styled.subtitle">
      {{description}}
    </span>
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
  export default class Title extends Vue implements Styled {
    @State('profile')
    private profile: ProfileState;

    @Getter('fullName', { namespace })
    private fullName: string;

    get description() {
      return this.profile.user && this.profile.user.description;
    }

    get styled() {
      return classes(getBreakpoint(this));
    }
  }

  const classes = (bp: Breakpoint) => ({
    titleContainer: {
      'ib-title': true,
      'ib-title-mobile-port': bp.xsOnly
    },
    titleText: {
      'display-1': bp.smAndDown,
      'display-3': bp.mdAndUp
    },
    subtitle: {
      'caption': bp.smAndDown,
      'subheading': bp.mdAndUp
    }
  });
</script>

<style lang="stylus" scoped>
  .ib-title
    color rgba(0, 0, 0, 0.7)

    &-mobile-port
      text-align center

    &-bold
      font-weight 500
</style>
