<template>
  <Head title="Cabang Kegiatan" />
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
          <h1 class="tw-text-white">Cabang Kegiatan</h1>
        </div>
      </v-img>
    </div>
    <div
      class="tw-container tw-mx-auto tw-grid tw-grid-cols-1 tw-gap-4 tw-p-4 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4">
      <!-- <div class="tw-container tw-mx-auto tw-flex  tw-flex-wrap tw-gap-4 tw-p-4"> -->
      <ExpansionCard v-for="n in 10" :key="n" />
    </div>
  </HomeLayout>
</template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import HomeLayout from "@/Layouts/HomeLayout.vue";
import ExpansionCard from "@/Components/ExpansionCard.vue";

export default {
  components: {
    Head,
    HomeLayout,
    ExpansionCard,
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
