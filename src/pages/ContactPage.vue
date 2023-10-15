<template>
  <q-page padding class="bg-primary flex flex-center text-accent">
    <!-- content -->
    <span class="text-h3">Contact Me:</span>
    <q-form class="colum full-width q-pa-lg q-gutter-y-md">
      <span>Email Address</span>
      <q-input
        standout="bg-accent text-secondary"
        label-color="secondary"
        label="Email Address"
      />
      <span>Fullname</span>
      <q-input
        standout="bg-accent text-secondary"
        label-color="secondary"
        label="Fullname"
      />
      <span>Address</span>
      <q-input
        standout="bg-accent text-secondary"
        label-color="secondary"
        label="Address"
      />
      <span>Message</span>
      <q-input
        type="textarea"
        standout="bg-accent text-secondary"
        label-color="secondary"
        label="Message"
      />
      <q-btn
        type="submit"
        color="secondary"
        text-color="accent"
        label="Submit"
      />
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'ContactPage',
});
</script>
