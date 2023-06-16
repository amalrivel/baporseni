<template>
  <Head title="Baporseni" />
  <HomeLayout>
    <div class="tw-mx-auto tw-h-full tw-w-full 2xl:tw-container">
      <v-img
        src="https://picsum.photos/1009"
        height="150"
        class="tw-z-0"
        gradient="to top,rgba(0,0,0,.5),rgba(225,225,225,.1)"
        cover>
        <div
          class="tw-container tw-mx-auto tw-flex tw-h-full tw-items-end tw-p-4">
          <h1 class="tw-text-white">Artikel</h1>
        </div>
      </v-img>
    </div>
    <div class="tw-container tw-mx-auto tw-flex tw-flex-col tw-gap-4 tw-p-4">
      <h1>Ada Apa di Baporseni Timah</h1>
      <p>
        Cerita kita, berita seru, dan kegiatan terbaru. Baca semua artikel soal
        Baporseni Timah di sini.
      </p>

      <v-text-field
        density="compact"
        variant="solo"
        label="Search Blog Post"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        clearable
        @click:append-inner="onClick"></v-text-field>

      <div class="tw-mt-4 tw-grid tw-grid-cols-2 tw-gap-4 sm:tw-grid-cols-3">
        <v-img
          v-for="(item, index) in posts.data"
          :key="index"
          :src="item.image"
          alt=""
          :aspect-ratio="aspectRatio"
          :gradient="`to left bottom,
        rgba(
            ${item.category.color1[0]},
            ${item.category.color1[1]},
            ${item.category.color1[2]},
            ${item.category.color1[3]}),
        rgba(
            ${item.category.color2[0]},
            ${item.category.color2[1]},
            ${item.category.color2[2]},
            ${item.category.color2[3]})`"
          class="tw-flex tw-items-end tw-rounded-lg tw-p-4"
          cover>
          <h2 class="tw-text-white">{{ item.title }}</h2>
          <p class="tw-truncate tw-text-justify tw-text-white">
            {{ item.excerpt }}
          </p>
        </v-img>
      </div>
      <div class="text-center tw-flex tw-justify-end">
        <v-pagination
          class="tw-w-full md:tw-w-[50vw]"
          v-model="page"
          :length="15"></v-pagination>
      </div>
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
  props: {
    posts: Object,
  },
  data: () => ({
    loaded: false,
    loading: false,
    page: 1,
    aspectRatio: 16 / 9,
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    repetions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  }),

  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 20000);
    },
  },
  mounted() {
    console.log(this.posts);
  },
};
</script>
