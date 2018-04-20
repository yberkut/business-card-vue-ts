<template>
  <div class="image" :style="styled.image" :alt="alt"></div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Styled }               from '../shared/UI/Styled';

  @Component
  export default class BaseImage extends Vue implements Styled {
    @Prop()
    private src: string;

    @Prop({ default: 'Image' })
    private alt?: string;

    @Prop({ default: false })
    private adjustSize?: boolean;

    @Prop({ default: 'center' })
    private align?: string;

    get styled() {
      return {
        image: {
          'background-image': `url('${this.src}')`,
          'background-size': `${this.adjustSize ? 'contain' : 'cover'}`,
          'background-position-x': `${this.align}`
        }
      };
    }
  }
</script>

<style scoped>
  .image {
    width: 100%;
    height: 100%;
    background-position-x: center;
    background-repeat: no-repeat;
  }
</style>
