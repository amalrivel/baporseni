<template>
  <Head title="Cabang Kegiatan" />
  <HomeLayout>
    <div class="tw-container tw-mx-auto">
      <v-breadcrumbs :items="items">
        <template v-slot:prepend>
          <v-icon size="small" icon="mdi-vuetify"></v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <div
      class="tw-container tw-mx-auto -tw-mt-8 tw-flex tw-flex-wrap tw-justify-evenly tw-gap-4 tw-p-4">
      <v-card v-for="n in 10" :key="n" width="300">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          class="align-end"
          :gradient="`to left bottom, rgba(${Math.floor(
            Math.random() * 256
          )},${Math.floor(Math.random() * 256)},${Math.floor(
            Math.random() * 256
          )},.1), rgba(${Math.floor(Math.random() * 256)},${Math.floor(
            Math.random() * 256
          )},${Math.floor(Math.random() * 256)},.5)`"
          height="200px"
          cover>
          <v-card-actions>
            <v-card-title class="text-white">Pre-fab homes</v-card-title>

            <v-spacer></v-spacer>

            <v-btn
              :icon="
                show
                  ? 'mdi-chevron-up text-white'
                  : 'mdi-chevron-down text-white'
              "
              @click="show = !show"></v-btn>
          </v-card-actions>
        </v-img>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </HomeLayout>
</template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import HomeLayout from "@/Layouts/HomeLayout.vue";

export default {
  components: {
    Head,
    HomeLayout,
  },
  data() {
    return {
      items: [
        {
          title: "Dashboard",
        },
        {
          title: "Link 1",
        },
        {
          title: "Link 2",
        },
      ],
      show: false,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
