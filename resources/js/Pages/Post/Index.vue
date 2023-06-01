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
        <Link :href="route('dashboard.posts.create')" class="tw-px-6">
          <v-btn color="blue"> Create </v-btn>
        </Link>
        <div
          class="tw-overflow-hidden tw-bg-white tw-shadow-sm sm:tw-rounded-lg">
          <div class="tw-p-6 tw-text-gray-900">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left"><h3>Title</h3></th>
                  <th class="text-left"><h3>Update at</h3></th>
                  <th class="text-left"><h3>Actions</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="post in posts" :key="post.id">
                  <td>{{ post.title }}</td>
                  <td>{{ post.updated_at }}</td>
                  <td>
                    <div class="tw-flex tw-gap-4 tw-py-2">
                      <Link :href="route('dashboard.posts.show', post.slug)">
                        <v-btn
                          color="blue"
                          density="comfortable"
                          icon="mdi-eye">
                        </v-btn>
                      </Link>
                      <Link :href="route('dashboard.posts.edit', post.slug)">
                        <v-btn
                          color="deep-purple-darken-2"
                          density="comfortable"
                          icon="mdi-pencil">
                        </v-btn>
                      </Link>
                      <v-btn
                        @click="destroy(post.slug)"
                        color="red"
                        density="comfortable"
                        icon="mdi-delete">
                      </v-btn>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="py-12">
      <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"> -->

    <!-- <Link
          :href="route('dashboard.posts.create')"
          class="mx-4 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 sm:mx-0">
          Create
        </Link> -->
    <!-- <div
          v-for="post in posts"
          :key="post.id"
          class="overflow-hidden bg-white p-4 shadow sm:rounded-lg sm:p-8">
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </v-table>
        </div> -->

    <!-- <div
          v-for="post in posts"
          :key="post.id"
          class="overflow-hidden bg-white p-4 shadow sm:rounded-lg sm:p-8">
          <Link :href="route('dashboard.posts.show', post.slug)">
            <h2 className="text-lg font-medium text-gray-900">
              Title : {{ post.title }}
            </h2>
            <p className="mt-1 text-sm text-gray-600">{{ post.excerpt }}</p>
            <p className="mt-1 text-sm text-gray-600">
              category : {{ post.category.name }}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              author : {{ post.user.name }}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              update : {{ post.updated_at }}
            </p>
          </Link>
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
        </div> -->
    <!-- </div>
    </div> -->
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
    posts: Object,
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
