<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="text-xl font-semibold leading-tight text-gray-800">Post</h2>
    </template>

    <div class="py-12">
      <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-white p-4 shadow sm:rounded-lg sm:p-8">
          <h2 className="text-lg font-medium text-gray-900">
            Title : {{ post.title }}
          </h2>
          <p className="mt-1 text-sm text-gray-600">{{ post.excerpt }}</p>

          <p className="mt-1 text-sm text-gray-600">
            update : {{ post.updated_at }}
          </p>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";

export default {
  components: {
    AuthenticatedLayout,
    Head,
    PrimaryButton,
    Link,
  },
  props: {
    post: Object,
  },
  created() {
    console.log(this.post);
  },
};
</script>
