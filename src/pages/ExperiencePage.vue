<style lang="sass">
.image-collect img
  width: 12%
  margin: 15px
  filter: grayscale(100%)
  transition: 0.3s ease-in-out
  &:hover
    filter: none
</style>

<template>
  <q-page
    padding
    class="bg-primary column flex flex-center text-accent text-center"
  >
    <div class="column q-gutter-y-lg">
      <span class="text-h4 text-weight-bold">Experience</span>
      <span class="text-subtitle1"
        >I've been doing web development for 4 years now, and during this time,
        I've had the opportunity to work on a wide range of projects, from
        creating responsive and user-friendly websites to developing complex web
        applications that solve real-world problems.</span
      >
      <span class="self-start text-h6"
        >Some technologies I've worked with:</span
      >
      <div class="row q-gutter-x-md justify-center image-collect">
        <img src="../assets/html-5.png" alt="" />
        <img src="../assets/css-3.png" alt="" />
        <img src="../assets/bootstrap.svg" alt="" />
        <img src="../assets/js.png" alt="" />
        <img src="../assets/mongodb.png" alt="" />
        <img src="../assets/java.png" alt="" />
        <img src="../assets/mysql.png" alt="" />
        <img src="../assets/postgresql.svg" alt="" />
        <img src="../assets/nodejs.png" alt="" />
        <img src="../assets/sass.png" alt="" />
        <img src="../assets/python.png" alt="" />
        <img src="../assets/typescript.png" alt="" />
        <img src="../assets/vuejs.png" alt="" />
        <img src="../assets/jquery.gif" alt="" />
        <img src="../assets/quasar.png" alt="" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'ExperiencePage',
});
</script>
