<template>
  <div class="business-card elevation-2" :class="styled.businessCard">
    <v-container class="pa-0" fill-height>
      <v-layout wrap>
        <v-flex xs12 sm4 :class="styled.avatarContainer">
          <Avatar />
          <Greetings v-if="styled.breakpoint.xsOnly" right-side background-color="#249ee0" />
        </v-flex>
        <v-flex xs12 sm8>
          <InfoContainer />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue }            from 'vue-property-decorator';
  import { Action }                    from 'vuex-class';
  import { Breakpoint, getBreakpoint } from '../shared/UI/Breakpoint';
  import { Styled }                    from '../shared/UI/Styled';
  import Avatar                        from './Avatar.vue';
  import Greetings                     from './Greetings.vue';
  import InfoContainer                 from './InfoContainer.vue';

  const namespace: string = 'profile';

  @Component({
    components: {
      InfoContainer,
      Greetings,
      Avatar
    }
  })
  export default class BusinessCard extends Vue implements Styled {
    @Action('fetchData', { namespace })
    private fetchData: any;

    private mounted() {
      // fetching data as soon as the component's been mounted
      this.fetchData();
    }

    get styled() {
      const breakpoint = getBreakpoint(this);
      return { ...classes(breakpoint), breakpoint };
    }
  }

  const classes = (bp: Breakpoint) => ({
    businessCard: {
      'business-card-mobile-port': bp.xsOnly,
      'business-card-mobile-land': bp.smOnly,
      'business-card-desk': bp.mdAndUp
    },
    avatarContainer: {
      'avatar-container': true,
      'avatar-container-mobile-port': bp.xsOnly
    }
  });
</script>

<style lang="stylus" scoped>
  card-mobile-land-height = 320px

  .business-card
    background-color white

    &-mobile-port
      width 312px
      max-height 600px

    &-mobile-land
      width 600px
      height card-mobile-land-height

    &-desk
      width 800px
      height 400px

  .avatar-container
    position relative

    &-mobile-port
      height card-mobile-land-height

</style>
