<template>
  <v-layout id="social-layout" wrap>
    <v-flex xs9 sm12 class="social">
      <Social />
    </v-flex>
    <v-flex xs3 v-if="styled.breakpoint.xsOnly">
      <QrCode />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { getBreakpoint }  from '../shared/UI/Breakpoint';
  import { Styled }         from '../shared/UI/Styled';
  import QrCode             from './QrCode.vue';
  import Social             from './Social.vue';

  @Component({
    components: {
      Social,
      QrCode
    }
  })
  export default class SocialLayout extends Vue implements Styled {
    get styled() {
      return { breakpoint: getBreakpoint(this) };
    }
  }
</script>

<style scoped>
  .social {
    align-self: flex-end;
  }
</style>
