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
          <p className="mt-1 text-sm text-gray-600">
            category : {{ category[0].name }}
          </p>
          <p className="mt-1 text-sm text-gray-600">
            author : {{ user[0].name }}
          </p>
          <p className="mt-1 text-sm text-gray-600">{{ post.body }}</p>
          <p className="mt-1 text-sm text-gray-600">
            update : {{ post.updated_at }}
          </p>
          <div class="flex justify-end gap-4">
            <Link
              :href="route('dashboard.posts.edit', post.slug)"
              class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900">
              Edit
            </Link>
            <button
              @click="destroy(post.slug)"
              class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900">
              Delete
            </button>
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

const form = useForm();

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
