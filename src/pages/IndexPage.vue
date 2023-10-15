<style lang="sass">
.my-custom-gif
  width: 50%
  -webkit-clip-path: polygon(39% 36%, 49% 19%, 76% 33%, 80% 68%, 100% 100%, 25% 100%, 1% 87%, 18% 69%, 0 63%, 2% 29%)
  clip-path: polygon(39% 36%, 49% 19%, 76% 33%, 80% 68%, 100% 100%, 25% 100%, 1% 87%, 18% 69%, 0 63%, 2% 29%)
</style>

<template>
  <q-page class="column bg-primary text-accent flex flex-center text-h5">
    <span>Hi! Hola! Kumosta!</span>
    <span class="text-h3">Welcome</span>
    <div class="column bg-white my-custom-gif content-center">
      <q-img src="../assets/dog-hi.gif" fit="contain" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IndexPage',
});
</script>
