<template>
  <v-layout>
    <v-flex xs12 sm8>
      <Info />
    </v-flex>
    <v-flex v-if="styled.breakpoint.smAndUp" sm4>
      <QrCode />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { getBreakpoint }  from '../shared/UI/Breakpoint';
  import { Styled }         from '../shared/UI/Styled';
  import Info               from './Info.vue';
  import QrCode             from './QrCode.vue';

  @Component({
    components: {
      Info,
      QrCode
    }
  })
  export default class InfoLayout extends Vue implements Styled {
    get styled() {
      return { breakpoint: getBreakpoint(this) };
    }
  }
</script>
