<!-- <script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
</script> -->

<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="tw-text-xl tw-font-semibold tw-leading-tight tw-text-gray-800">
        Dashboard
      </h2>
    </template>

    <div class="tw-py-12">
      <div
        class="tw-mx-auto tw-flex tw-max-w-7xl tw-flex-col tw-gap-4 sm:tw-px-6 lg:tw-px-8">
        <div
          class="tw-overflow-hidden tw-bg-white tw-shadow-sm sm:tw-rounded-lg">
          <div class="tw-p-6 tw-text-gray-900">
            <h1>Selamat Datang {{ user.name }}</h1>
          </div>
        </div>
        <div
          class="tw-overflow-hidden tw-bg-white tw-shadow-sm sm:tw-rounded-lg">
          <div class="tw-p-6 tw-text-gray-900">
            <h3>Blog Post</h3>
            <v-table>
              <thead>
                <tr v-for="(post, index) in Object.keys(posts[0])" :key="index">
                  <th v-if="index === 0">No</th>
                  <th class="text-left">{{ post }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(post, index) in posts" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ post.title }}</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, usePage } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Head,
    usePage,
    AuthenticatedLayout,
  },
  props: {
    posts: Object,
    status: String,
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
      user: usePage().props.value.auth.user,
    };
  },

  mounted() {
    console.log(usePage().props.value.auth.user.name);
    console.log(this.status);
  },
};
</script>
