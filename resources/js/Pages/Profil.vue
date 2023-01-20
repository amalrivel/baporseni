<template>
  <Head title="Profile" />
  <HomeLayout>
    <div class="tw-container tw-mx-auto">
      <v-breadcrumbs :items="items">
        <template v-slot:prepend>
          <v-icon size="small" icon="mdi-vuetify"></v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <div
      class="tw-container tw-mx-auto -tw-mt-8 tw-flex tw-flex-col tw-gap-4 tw-p-4">
      <h2>Logo Kami</h2>
      <div class="tw-flex tw-flex-wrap tw-gap-4 sm:tw-flex-nowrap">
        <h2>IMG</h2>
        <div class="flex">
          <h3>Makna Logo, Arti Warna Logo, dan Bentuk Huruf (Typeface) Logo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            semper justo arcu, nec laoreet ex tincidunt scelerisque. Nunc tempus
            volutpat sapien, eget porta arcu tincidunt vel. Sed vel interdum
            magna, non elementum nibh. In gravida nisi tellus, vel auctor mauris
            lobortis at. Proin condimentum metus ac tellus tempor, vel tempor
            purus maximus. Proin condimentum, lorem tempus feugiat finibus, mi
            purus tristique quam, sit amet posuere arcu est et neque. Fusce et
            malesuada lectus. Maecenas at ex ut urna eleifend iaculis eu eget
            velit. Aliquam nec enim congue, fermentum mauris sit amet, auctor
            felis. Praesent nec viverra orci, sit amet facilisis velit. Aliquam
            metus arcu, commodo eget purus et, lacinia pharetra elit. Vestibulum
            diam metus, porta et scelerisque eu, pretium ac diam. Nulla sed
            vulputate ante.
          </p>
        </div>
      </div>
    </div>
    <div class="tw-container tw-mx-auto tw-px-4">
      <h2>Perjalanan Kami</h2>
      <v-timeline align="start">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :dot-color="year.color"
          size="small">
          <template v-slot:opposite>
            <div
              :class="`pt-1 headline font-weight-bold text-${year.color}`"
              v-text="year.year"></div>
          </template>
          <div>
            <h2
              :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
              Lorem ipsum
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div
      class="tw-container tw-mx-auto tw-mt-4 tw-flex tw-flex-col tw-gap-4 tw-p-4">
      <h2>Bagan Struktur Organisasi</h2>
      <img src="https://picsum.photos/1600" alt="https://picsum.photos/200" />
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
  data: () => ({
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
    years: [
      {
        color: "cyan",
        year: "1960",
      },
      {
        color: "green",
        year: "1970",
      },
      {
        color: "pink",
        year: "1980",
      },
      {
        color: "amber",
        year: "1990",
      },
      {
        color: "orange",
        year: "2000",
      },
    ],
  }),
};
</script>
