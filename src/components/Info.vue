<template>
  <v-layout wrap>
    <v-flex xs12 v-for="record in records" :key="record.title">
      <v-layout wrap :class="styled.infoRecord">
        <v-flex xs4 :class="styled.title">
          {{record.title}}
        </v-flex>
        <v-flex xs8 :class="styled.value">
          {{record.value}}
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue }            from 'vue-property-decorator';
  import { Getter, State }             from 'vuex-class';
  import { Breakpoint, getBreakpoint } from '../shared/UI/Breakpoint';
  import { Styled }                    from '../shared/UI/Styled';
  import { ProfileState }              from '../store/profile/types';

  const namespace: string = 'profile';

  @Component
  export default class Info extends Vue implements Styled {
    @State('profile')
    private profile: ProfileState;

    @Getter('fullInfo', { namespace })
    private fullInfo: string;

    @Getter('shortInfo', { namespace })
    private shortInfo: string;

    get records() {
      return this.styled.breakpoint.xs ? this.shortInfo : this.fullInfo;
    }

    get styled() {
      const breakpoint = getBreakpoint(this);
      return { ...classes(breakpoint), breakpoint };
    }
  }

  const classes = (bp: Breakpoint) => ({
    infoRecord: {
      'ml-1': true,
      'my-1': bp.mdAndUp
    },
    title: {
      'body-2': bp.smAndDown,
      'title': bp.mdAndUp
    },
    value: {
      'body-1': bp.smAndDown,
      'subheading': bp.mdAndUp
    }
  });
</script>
