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
        <img src="~assets/html-5.png" alt="html-5" title="html-5"/>
        <img src="~assets/css-3.png" alt="css-3" title="css-3"/>
        <img src="~assets/bootstrap.png" alt="bootstrap" title="bootstrap"/>
        <img src="~assets/js.png" alt="javascript" title="javascript"/>
        <img src="~assets/mongodb.png" alt="mongoose" title="mongoose"/>
        <img src="~assets/java.png" alt="java" title="java"/>
        <img src="~assets/mysql.png" alt="mysql" title="mysql"/>
        <img src="~assets/postgresql.png" alt="postgresql" title="postgresql"/>
        <img src="~assets/nodejs.png" alt="nodejs" title="nodejs"/>
        <img src="~assets/sass.png" alt="sass" title="sass"/>
        <img src="~assets/python.png" alt="python" title="python"/>
        <img src="~assets/typescript.png" alt="typescript" title="typescript"/>
        <img src="~assets/vuejs.png" alt="vuejs" title="vuejs"/>
        <img src="~assets/jquery.gif" alt="jquery" title="jquery"/>
        <img src="~assets/quasar.png" alt="quasar" title="quasar"/>
        <img src="~assets/laravel.svg" alt="laravel" title="laravel"/>
        <img src="~assets/firebase.png" alt="firebase" title="firebase" />
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
