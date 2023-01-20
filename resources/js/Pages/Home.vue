<template>
  <Head title="Baporseni" />
  <HomeLayout>
    <v-carousel
      cycle
      height=""
      hide-delimiters
      show-arrows="hover"
      class="tw-mx-auto 2xl:tw-container sm:tw-h-96 tw-h-56">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="-tw-mt-8 tw-bg-slate-100">
      <div
        class="tw-container tw-relative tw-z-40 tw-mx-auto sm:tw-mt-8 tw-flex tw-flex-col tw-bg-white tw-p-4 sm:tw-rounded-lg">
        <h2>Berita Terbaru</h2>
        <div class="tw-mt-4 tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-4">
          <div class="tw-rounded tw-col-span-2">
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
                maximus rutrum orci id, posuere tristique enim. Etiam dapibus,
                dui in convallis semper, erat purus dignissim ex, id laoreet
                justo nisi vitae turpis. Nam laoreet eros est, venenatis
                tincidunt purus ornare hendrerit. Nullam venenatis dui urna,
                placerat congue risus eleifend a. Vestibulum pulvinar mi et
                dignissim accumsan. Nam volutpat libero et purus tincidunt
                interdum. Etiam aliquet augue vel tellus laoreet, et viverra
                massa semper. Donec interdum et neque nec varius. Phasellus
                volutpat semper maximus. Aliquam sit amet nisl lacinia, commodo
                elit ultricies, pretium mi. Sed congue leo nibh, a tempus mi
                blandit sit amet. Nunc nisi nibh, pretium ac eros eu, finibus
                commodo urna. Vivamus accumsan viverra imperdiet.
              </p>
            </v-img>
          </div>

          <v-img
            v-for="n in 10"
            :key="n"
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
      </div>
      <v-parallax

        src="https://picsum.photos/1009"
        height="500"
        class="tw-z-0 -tw-mt-16">
        <div
          class="d-flex flex-column fill-height justify-center align-center text-white">
          <h1 class="text-h4 font-weight-thin mb-4">Vuetify</h1>
          <h4 class="subheading">Build your application today!</h4>
        </div>
      </v-parallax>
    </div>

    <div class="tw-container tw-mx-auto -tw-mt-8 tw-p-4">
      <div class="tw-flex tw-flex-col">
        <h2>Cabang Olahraga Seni</h2>
        <div class="tw-mt-4 tw-flex tw-flex-wrap tw-justify-evenly tw-gap-4">
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
              <v-card-title class="text-white">Pre-fab homes</v-card-title>
            </v-img>
          </v-card>
        </div>
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
  data() {
    return {
      aspectRatio: 16 / 9,
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
