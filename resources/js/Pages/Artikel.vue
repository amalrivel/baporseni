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
        <div class="tw-col-span-2 tw-rounded">
          <v-img
            src="https://picsum.photos/3000"
            alt=""
            :aspect-ratio="aspectRatio"
            :gradient="`to left bottom, rgba(${Math.floor(
              Math.random() * 256
            )},${Math.floor(Math.random() * 256)},${Math.floor(
              Math.random() * 256
            )},.1), rgba(${Math.floor(Math.random() * 256)},${Math.floor(
              Math.random() * 256
            )},${Math.floor(Math.random() * 256)},.5)`"
            class="tw-flex tw-items-end tw-rounded-lg tw-p-4"
            cover>
            <h2 class="tw-text-justify tw-text-white">Jdullll</h2>
            <p class="tw-truncate tw-text-justify tw-text-white">
              Nunc sodales massa vel auctor accumsan. Quisque felis mauris,
              maximus rutrum orci id, posuere tristique enim. Etiam dapibus, dui
              in convallis semper, erat purus dignissim ex, id laoreet justo
              nisi vitae turpis. Nam laoreet eros est, venenatis tincidunt purus
              ornare hendrerit. Nullam venenatis dui urna, placerat congue risus
              eleifend a. Vestibulum pulvinar mi et dignissim accumsan. Nam
              volutpat libero et purus tincidunt interdum. Etiam aliquet augue
              vel tellus laoreet, et viverra massa semper. Donec interdum et
              neque nec varius. Phasellus volutpat semper maximus. Aliquam sit
              amet nisl lacinia, commodo elit ultricies, pretium mi. Sed congue
              leo nibh, a tempus mi blandit sit amet. Nunc nisi nibh, pretium ac
              eros eu, finibus commodo urna. Vivamus accumsan viverra imperdiet.
            </p>
          </v-img>
        </div>
        <v-img
          v-for="repetion in repetions"
          :key="repetion"
          :src="`https://picsum.photos/300${repetion}`"
          alt=""
          :aspect-ratio="aspectRatio"
          :gradient="`to left bottom, rgba(${Math.floor(
            Math.random() * 256
          )},${Math.floor(Math.random() * 256)},${Math.floor(
            Math.random() * 256
          )},.1), rgba(${Math.floor(Math.random() * 256)},${Math.floor(
            Math.random() * 256
          )},${Math.floor(Math.random() * 256)},.5)`"
          class="tw-flex tw-items-end tw-rounded-lg tw-p-4"
          cover>
          <h2 class="tw-text-justify tw-text-white">Jdullll</h2>
          <p class="tw-truncate tw-text-justify tw-text-white">
            Nunc sodales massa vel auctor accumsan. Quisque felis mauris,
            maximus rutrum orci id, posuere tristique enim. Etiam dapibus, dui
            in convallis semper, erat purus dignissim ex, id laoreet justo nisi
            vitae turpis. Nam laoreet eros est, venenatis tincidunt purus ornare
            hendrerit. Nullam venenatis dui urna, placerat congue risus eleifend
            a. Vestibulum pulvinar mi et dignissim accumsan. Nam volutpat libero
            et purus tincidunt interdum. Etiam aliquet augue vel tellus laoreet,
            et viverra massa semper. Donec interdum et neque nec varius.
            Phasellus volutpat semper maximus. Aliquam sit amet nisl lacinia,
            commodo elit ultricies, pretium mi. Sed congue leo nibh, a tempus mi
            blandit sit amet. Nunc nisi nibh, pretium ac eros eu, finibus
            commodo urna. Vivamus accumsan viverra imperdiet.
          </p>
        </v-img>
        <Link :href="route('artikel')" class="tw-col-span-2 sm:tw-col-span-3">
          <v-btn variant="outlined" class="tw-w-full"> Selengkapnya </v-btn>
        </Link>
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
};
</script>
