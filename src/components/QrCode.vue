<template>
  <BaseImage :src="qrCode" alt="qr-code" adjust-size align="right" />
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Getter, State }  from 'vuex-class';
  import { ProfileState }   from '../store/profile/types';
  import BaseImage          from './BaseImage.vue';

  const namespace: string = 'profile';

  @Component({
    components: {
      BaseImage
    }
  })
  export default class QrCode extends Vue {
    @State('profile')
    private profile: ProfileState;

    @Getter('qrCode', { namespace })
    private qrCode: string;
  }
</script>
