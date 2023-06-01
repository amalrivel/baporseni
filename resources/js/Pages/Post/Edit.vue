<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
      <template #header>
        <h2 class="tw-text-xl tw-font-semibold tw-leading-tight tw-text-gray-800">
          Post
        </h2>
      </template>
      <div
        v-if="$page.props.flash.message"
        class="tw-mb-4 tw-bg-green-100 tw-p-4 tw-text-sm tw-text-green-700 sm:tw-rounded-lg"
        role="alert">
        <span class="tw-font-medium">
          {{ $page.props.flash.message }}
        </span>
      </div>
      <div class="tw-py-12">
        <div
          class="tw-mx-auto tw-flex tw-max-w-7xl tw-flex-col tw-gap-4 sm:tw-px-6 lg:tw-px-8">

          <div
            class="tw-overflow-hidden tw-bg-white tw-shadow-sm sm:tw-rounded-lg">
            <div class="tw-p-6 tw-text-gray-900">
              <h4>{{ post.title }}</h4>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  </template>

  <script>
  import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
  import PrimaryButton from "@/Components/PrimaryButton.vue";
  import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

  export default {
    components: {
      AuthenticatedLayout,
      Head,
      PrimaryButton,
      Link,
    },
    props: {
      post: Object,
      category: Object,
      user: Object,
    },
    methods: {},
    setup() {
      const form = useForm();
      const destroy = (id) => {
        if (confirm("Are you sure you want to Delete")) {
          form.delete(route("dashboard.posts.destroy", id), {
            preserveScroll: true,
          });
        }
      };
      return { form, destroy };
    },
    created() {
      console.log(this.$props);
    },
  };
  </script>
