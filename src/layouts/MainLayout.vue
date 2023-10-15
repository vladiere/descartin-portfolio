<style lang="sass">


.span-hover div a:hover
  background-color: #e5d0cc
  color: #2e2d4d

div a.router-link-exact-active
  background-color: #e5d0cc
  color: #2e2d4d

div a
  color: #e5d0cc
  text-decoration: none
  padding: 0 1rem

  &:first-of-type
    border: 0
</style>

<template>
  <q-layout view="lHh LpR lFf">
    <q-header v-if="Platform.is.mobile" class="bg-primary">
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
    </q-header>
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :width="Platform.is.mobile ? 300 : 680"
      class="bg-primary"
    >
      <!-- drawer content -->
      <div
        class="column flex flex-center q-pa-lg full-height text-accent q-gutter-y-xl"
      >
        <div
          :class="
            Platform.is.mobile
              ? 'column q-gutter-y-sm q-pa-sm'
              : 'column q-gutter-y-md q-pa-xl'
          "
        >
          <span
            :class="
              Platform.is.mobile
                ? 'text-h4 text-secondary'
                : 'text-h2 text-secondary'
            "
            >Lance Phillip Descartin</span
          >
          <span
            :class="
              Platform.is.mobile
                ? 'text-subtitle1 text-weight-bold'
                : 'text-h6 text-weight-bold'
            "
            >Full stack developer</span
          >
        </div>
        <span :class="Platform.is.mobile ? 'col text-subtitle1' : 'col text-h6'"
          >" Innovative Web Solutions, One Line of Code After Another. Code
          Architect Transforming Ideas into Digital Realities and Bringing
          Imagination to Life through Code "</span
        >
        <div class="column full-width">
          <div
            :class="
              Platform.is.mobile
                ? 'col column content-center text-center text-uppercase span-hover'
                : 'col row justify-center text-uppercase span-hover'
            "
          >
            <div
              :class="
                Platform.is.mobile
                  ? 'col cursor-pointer'
                  : 'col-2 row justify-center cursor-pointer'
              "
            >
              <RouterLink to="/">home</RouterLink>
            </div>
            <q-separator vertical dark />
            <div
              :class="
                Platform.is.mobile
                  ? 'col cursor-pointer'
                  : 'col-2 row justify-center cursor-pointer'
              "
            >
              <RouterLink to="/about">about</RouterLink>
            </div>
            <q-separator vertical dark />
            <div
              :class="
                Platform.is.mobile
                  ? 'col cursor-pointer'
                  : 'col-2 row justify-center cursor-pointer'
              "
            >
              <RouterLink to="/project">project</RouterLink>
            </div>
            <q-separator vertical dark />
            <div
              :class="
                Platform.is.mobile
                  ? 'col cursor-pointer'
                  : 'col-2 row justify-center cursor-pointer'
              "
            >
              <RouterLink to="/experience">experience</RouterLink>
            </div>
            <q-separator vertical dark />
            <div
              :class="
                Platform.is.mobile
                  ? 'col cursor-pointer'
                  : 'col-2 row justify-center cursor-pointer'
              "
            >
              <RouterLink to="/contact">contact</RouterLink>
            </div>
          </div>
        </div>
        <div class="row justify-center">
          <q-btn
            icon="mdi-linkedin"
            flat
            href="https://www.linkedin.com/in/lance-phillip-descartin-531077241/"
            target="_blank"
          >
            <q-tooltip
              class="bg-accent text-secondary"
              :delay="300"
              transition-show="fadein"
              transition-hide="fadeout"
              >Linkedin</q-tooltip
            >
          </q-btn>
          <q-btn
            icon="mdi-facebook"
            flat
            href="https://web.facebook.com/zsrtzich"
            target="_blank"
          >
            <q-tooltip
              class="bg-accent text-secondary"
              :delay="300"
              transition-show="fadein"
              transition-hide="fadeout"
              >Facebook</q-tooltip
            >
          </q-btn>
          <q-btn
            icon="mdi-github"
            flat
            href="https://github.com/vladiere"
            target="_blank"
          >
            <q-tooltip
              class="bg-accent text-secondary"
              :delay="300"
              transition-show="fadein"
              transition-hide="fadeout"
              >GitHub</q-tooltip
            >
          </q-btn>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { Platform } from 'quasar';

const router = useRouter();

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
watchEffect(() => {
  console.log(router.currentRoute.value.name);
});
</script>
