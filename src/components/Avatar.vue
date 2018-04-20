<template>
  <BaseImage :src="imageUrl" alt="avatar" />
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { State }          from 'vuex-class';
  import { getBreakpoint }  from '../shared/UI/Breakpoint';
  import { Styled }         from '../shared/UI/Styled';
  import { ProfileState }   from '../store/profile/types';
  import BaseImage          from './BaseImage.vue';

  @Component({
    components: {
      BaseImage
    }
  })
  export default class Avatar extends Vue implements Styled {
    @State('profile')
    private profile: ProfileState;

    get imageUrl() {
      if (!this.profile.user) {
        return '';
      }
      return this.styled.breakpoint.xsOnly
        ? this.profile.user.avatarSmall
        : this.profile.user.avatarBig;
    }

    get styled() {
      return { breakpoint: getBreakpoint(this) };
    }
  }
</script>
