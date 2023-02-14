<template>
  <Head title="Baporseni" />
  <HomeLayout>
    <v-carousel
      cycle
      height=""
      hide-delimiters
      show-arrows="hover"
      class="tw-mx-auto tw-h-[400px] sm:tw-h-[600px] 2xl:tw-container">
      <v-carousel-item
        v-for="(item, index) in carousel"
        :key="index"
        :src="item.image"
        cover
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
            ${item.category.color2[3]})`">
        <!-- <div class="d-flex fill-height justify-center align-center"> -->
        <div
          class="tw-flex tw-h-full tw-flex-col tw-items-start tw-justify-end tw-p-4 sm:tw-p-16">
          <h1 class="tw-text-white">{{ index + 1 }}. {{ item.title }}</h1>
        </div>
      </v-carousel-item>
    </v-carousel>
    <div class="-tw-mt-8 tw-bg-slate-100">
      <div
        class="tw-container tw-relative tw-z-40 tw-mx-auto tw-flex tw-flex-col tw-bg-white tw-p-4 sm:tw-mt-8 sm:tw-rounded-lg">
        <h2>Berita Terbaru</h2>
        <div class="tw-mt-4 tw-grid tw-grid-cols-2 tw-gap-4 sm:tw-grid-cols-3">
          <div class="tw-col-span-2 tw-rounded">
            <v-img
              :src="posts[0].image"
              alt=""
              :aspect-ratio="aspectRatio"
              :gradient="`to left bottom,
        rgba(
            ${posts[0].category.color1[0]},
            ${posts[0].category.color1[1]},
            ${posts[0].category.color1[2]},
            ${posts[0].category.color1[3]}),
        rgba(
            ${posts[0].category.color2[0]},
            ${posts[0].category.color2[1]},
            ${posts[0].category.color2[2]},
            ${posts[0].category.color2[3]})`"
              class="tw-flex tw-items-end tw-rounded-lg tw-p-4"
              cover>
              <h2 class="tw-text-white">
                {{ posts[0].title }}
              </h2>
              <p class="tw-truncate tw-text-justify tw-text-white">
                {{ posts[0].excerpt }}
              </p>
            </v-img>
          </div>
          <v-img
            v-for="(item, index) in posts.slice(1)"

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
          <Link :href="route('artikel')" class="tw-col-span-2 sm:tw-col-span-3">
            <v-btn variant="outlined" class="tw-w-full"> Selengkapnya </v-btn>
          </Link>
        </div>
      </div>
      <v-parallax
        src="https://picsum.photos/1009"
        height="500"
        class="tw-z-0 sm:-tw-mt-16">
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
        <div
          class="grid tw-col-span-1 tw-mt-4 tw-grid tw-gap-4 sm:tw-grid-cols-2 md:tw-grid-cols-3">
          <v-card v-for="(item, index) in categories" :key="index">
            <v-img
              :src="item.image"
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
              <v-card-title class="text-white">{{ item.name }}</v-card-title>
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
    Link,
  },
  props: {
    carousel: Object,
    posts: Object,
    categories: Object,
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
      repetions: [0, 1, 2, 3],
    };
  },

  mounted() {
    // console.log(this.posts);
  },
};
</script>
