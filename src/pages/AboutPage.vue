<style lang="sass">
.my-custom-div
  background: #e5d0cc
  border-radius: 50%
  width: 200px
  max-height: 200px
  overflow-y: hidden
</style>

<template>
  <q-page padding class="bg-primary column flex flex-center text-accent">
    <!-- content -->
    <div class="column q-gutter-y-lg items-center text-center q-mt-lg">
      <span class="text-h5 text-uppercase">a little bit about me</span>
      <div class="my-custom-div">
        <q-img fit="fill" src="../assets/my-picture.png" height="255px" />
      </div>
      <div class="text-subtitle1">
        I am currently in my fourth year at
        <span class="text-secondary text-weight-bold"
          >Cordova Public College</span
        >, pursuing a
        <span class="text-secondary text-weight-bold"
          >Bachelor of Science in Information Technology</span
        >. My educational journey has been a thrilling adventure, providing me
        with a strong foundation in IT, computer science, and the skills
        necessary to thrive in the digital age. As I approach the culmination of
        my academic path, I'm excited to leverage my knowledge and passion for
        technology to make a meaningful impact in the world. Through my studies
        and real-world experience, I have honed my problem-solving abilities and
        cultivated a deep appreciation for innovation. I am eager to embark on a
        promising career in IT and contribute to the ever-evolving landscape of
        technology.
      </div>
      <div class="column q-gutter-y-md q-pt-xl q-px-md">
        <span class="text-h6"
          >When i'm not the computer i love to play guitar, exercise, read books
          and inventing useless stuffs</span
        >
        <div
          :class="
            Platform.is.mobile
              ? 'col column q-gutter-y-md content-center bg-accent text-dark q-py-md'
              : 'col row q-gutter-x-lg items-center q-pa-md bg-accent text-dark'
          "
        >
          <div
            :class="
              Platform.is.mobile
                ? 'col row q-gutter-x-md items-center'
                : 'col column q-gutter-y-sm items-center'
            "
          >
            <img src="../assets/computer-science.png" style="width: 50px" />
            <span>Web Developer</span>
          </div>
          <div
            :class="
              Platform.is.mobile
                ? 'col row q-gutter-x-md items-center'
                : 'col column q-gutter-y-sm items-center'
            "
          >
            <img src="../assets/guitar.png" style="width: 50px" />
            <span>Guitar</span>
          </div>
          <div
            :class="
              Platform.is.mobile
                ? 'col row q-gutter-x-md items-center'
                : 'col column q-gutter-y-sm items-center'
            "
          >
            <img src="../assets/martial-arts.png" style="width: 50px" />
            <span>Exercise</span>
          </div>
          <div
            :class="
              Platform.is.mobile
                ? 'col row q-gutter-x-md items-center'
                : 'col column q-gutter-y-sm items-center'
            "
          >
            <img src="../assets/open-book.png" style="width: 50px" />
            <span>Reading Books</span>
          </div>
          <div
            :class="
              Platform.is.mobile
                ? 'col row q-gutter-x-md items-center'
                : 'col column q-gutter-y-sm items-center'
            "
          >
            <img src="../assets/inventor.png" style="width: 50px" />
            <span>Inventor</span>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { Platform } from 'quasar';

defineComponent({
  name: 'AboutPage',
});
</script>
