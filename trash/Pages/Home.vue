<template>
  <Head title="Welcome" />
  <HomeLayout>
    <v-carousel cycle hide-delimiters show-arrows="hover">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="tw-bg-slate-100">
      <div
        class="tw-container tw-mx-auto tw-my-4 tw-flex tw-flex-col tw-bg-white tw-p-4 sm:tw-rounded-lg"
      >
        <h2>Berita Terkini</h2>

        <div class="tw-grid tw-grid-rows-3 tw-gap-4 sm:tw-grid-cols-3">
          <div class="tw-col-span-2 tw-row-span-full">
            <v-img src="https://picsum.photos/1200/900" cover></v-img>
            <h3>Judul</h3>
            <p class="tw-text-sm tw-text-slate-700">Waktu, hari tanggal</p>
            <p class="truncate">
              Mauris euismod eleifend dapibus. Sed ultricies orci non felis
              vulputate, non faucibus est sodales. Nam eget ultricies metus.
              Donec ut erat odio. Pellentesque tincidunt, dolor at faucibus
              laoreet, lorem ligula mollis nisl, ut iaculis leo sem sit amet
              risus. Proin tempor pretium dolor, quis elementum lectus bibendum
              ac. Aenean gravida in mauris quis tincidunt. Aliquam dapibus
              auctor ultrices. Proin et tellus purus.
            </p>
          </div>
          <div
            v-for="n in 4"
            :key="n"
            class="tw-flex tw-flex-col tw-justify-between"
          >
            <v-img src="https://picsum.photos/800/600" cover></v-img>
            <h3>Judul</h3>
            <p class="tw-text-sm tw-text-slate-700">Waktu, hari tanggal</p>
            <p class="tw-truncate">
              Nunc maximus, tellus facilisis fermentum aliquet, arcu odio
              posuere leo, ac consectetur nulla nisl sed neque. Sed augue leo,
              laoreet vel suscipit eu, scelerisque nec lectus. Aenean placerat
              ut neque quis accumsan. In hac habitasse platea dictumst.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce luctus ligula et dolor
              pharetra, vitae tempor erat eleifend. Ut rutrum porta tellus in
              dapibus. Aenean vel augue nulla. Vivamus elementum, sapien eu
              viverra pulvinar, neque nisi finibus mi, vitae lacinia leo justo
              condimentum nulla. Suspendisse ac elit non dolor dignissim egestas
              nec sit amet arcu.
            </p>
          </div>
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
      loading: false,
      selection: 1,
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
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
