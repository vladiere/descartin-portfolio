<style lang="sass">
.my-card
  filter: grayscale(100%)
  transition: 0.5 ease-in-out

.my-card:hover
  filter: none
</style>

<template>
  <q-page padding class="bg-primary column items-center text-accent">
    <span class="text-h5 text-weight-bold">What I've Done</span>
    <span class="text-subtitle1 text-weight-thin">(more to come)</span>
    <div
      :class="
        Platform.is.mobile
          ? 'col full-width column q-px-md'
          : 'row q-pa md q-pt-lg justify-center'
      "
    >
      <q-card
        :class="Platform.is.mobile ? 'my-card' : 'my-card q-ma-md'"
        :style="cardStyle"
      >
        <q-img
          src="https://media.istockphoto.com/id/1170650529/pl/zdj%C4%99cie/uko%C5%84czone-zadania-s%C4%85-zaznaczone-na-li%C5%9Bcie-zada%C5%84-do-wykonania.webp?b=1&s=612x612&w=0&k=20&c=wmW3bjrlSW2_q7-9bsY0BaeAdBFAKT1vBu8B-BgUYVE="
          height="100%"
        >
          <div class="absolute-bottom">
            <div class="text-h6">Todo List App</div>
            <div class="text-caption">Finish</div>
          </div>
        </q-img>
        <q-btn
          flat
          icon="mdi-web"
          href="https://todo-app-2lae.onrender.com/"
          target="_blank"
        />
        <q-btn
          flat
          icon="mdi-github"
          href="https://github.com/vladiere/todo-app/tree/main"
          target="_blank"
        />
      </q-card>

      <q-card
        :class="Platform.is.mobile ? 'my-card' : 'my-card q-ma-md'"
        :style="cardStyle"
      >
        <q-img
          src="https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&w=400="
          height="100%"
        >
          <div class="absolute-bottom">
            <div class="text-h6">Batman Gallery with Firebase</div>
            <div class="text-caption">On Progress</div>
          </div>
        </q-img>
        <q-btn flat icon="mdi-web" target="_blank" href="https://batman-gallery.netlify.app/" />
        <q-btn
          flat
          icon="mdi-github"
          href="https://github.com/vladiere/gallery-app"
          target="_blank"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { Platform } from 'quasar';

defineComponent({
  name: 'ProjectPage',
});

const cardStyle = ref({
  width: Platform.is.mobile ? '100%' : '100%',
  height: '30vh',
  marginBottom: '40px',
});
</script>
