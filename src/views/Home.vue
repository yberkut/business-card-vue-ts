<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <BusinessCard />
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
  import BusinessCard       from '@/components/BusinessCard.vue';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      BusinessCard
    }
  })
  export default class Home extends Vue {
  }
</script>
