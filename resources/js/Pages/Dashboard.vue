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
            <h3>Laravel Version</h3>
            <p>{{ laravelVersion }}</p>
          </div>
        </div>
        <div
          class="tw-overflow-hidden tw-bg-white tw-shadow-sm sm:tw-rounded-lg">
          <div class="tw-p-6 tw-text-gray-900">
            <h3>php Version</h3>
            <p>{{ phpVersion }}</p>
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
    laravelVersion: String,
    phpVersion: String,
  },

  data() {
    return {
      user: usePage().props.value.auth.user,
    };
  },

  mounted() {
    console.log(usePage().props.value.auth.user.name);
    console.log(this.$props)
  },
};
</script>
