<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const props = defineProps({
  category: Object,
  user: Object,
});

const form = useForm({
  title: "",
  content: "",
  category: "",
  image: "",
  carausel: "",
});

const submit = () => {
  console.log(form);
};
</script>

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
      class="tw-bg-red-100 tw-p-4 tw-text-sm tw-text-red-700 sm:tw-rounded-lg"
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
            <h3 class="mb-4">Create Post</h3>
            <form @submit.prevent="submit">
              <v-text-field
                v-model="form.title"
                label="Title"
                required></v-text-field>
              <!-- <v-textarea label="Content" v-model="form.content"></v-textarea> -->
              <div id="app" class="tw-mb-8">
                <p class="tw-mb-2">Content</p>
                <quill-editor  theme="snow" v-model:content="form.content" contentType="html"></quill-editor>
              </div>
              <div class="tw-gap-4 sm:tw-flex">
                <v-combobox
                  label="Category"
                  :items="category.map((item) => item.name)" v-model="form.category"></v-combobox>
                <v-file-input label="Image" v-model="form.image"></v-file-input>
              </div>
              <v-checkbox label="Carousel" v-model="form.carausel"></v-checkbox>
              <v-btn color="blue" :disabled="form.processing" type="submit"
                >Submit</v-btn
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<!-- <script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

export default {
  components: {
    AuthenticatedLayout,
    Head,
    PrimaryButton,
    Link,
  },
  props: {
    category: Object,
    user: Object,
  },
  methods: {},
  setup() {
    const form = useForm({
      title: "",
      content: "",
      category: "",
      image: "",
      carousel: "",
    });
    const title = ref(null);
    const content = ref(null);
    const category = ref(null);
    const image = ref(null);
    const carousel = ref(null);

    // const destroy = (id) => {
    //   if (confirm("Are you sure you want to Delete")) {
    //     form.delete(route("dashboard.posts.destroy", id), {
    //       preserveScroll: true,
    //     });
    //   }
    // };
    const updatePosts = () => {
      form.put(route("password.update"), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
          if (form.errors.title) {
            form.reset("password", "password_confirmation");
            passwordInput.value.focus();
          }
          if (form.errors.current_password) {
            form.reset("current_password");
            currentPasswordInput.value.focus();
          }
        },
      });
    };
    return { form, updatePosts };
  },

  created() {
    console.log(this.$props);
  },
};
</script> -->
