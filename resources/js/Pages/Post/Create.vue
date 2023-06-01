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
            <h3 class="mb-4">Create Post</h3>
            <v-text-field
              v-model="firstname"
              label="Title"
              required></v-text-field>
            <v-textarea label="Content"></v-textarea>
            <div class="tw-gap-4 sm:tw-flex">
              <v-combobox
                label="Category"
                :items="category.map((item) => item.name)"></v-combobox>
              <v-file-input label="Image"></v-file-input>
            </div>
            <v-checkbox label="Carousel"></v-checkbox>
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
import { useForm } from "@inertiajs/inertia-vue3";
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
  setup() {
    const Title = ref(null);
    const Content = ref(null);
    const Category = ref(null);
    const Carousel = ref(null);

    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: "",
    });

    const updatePassword = () => {
      form.put(route("password.update"), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
          if (form.errors.password) {
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

    return {
      passwordInput,
      currentPasswordInput,
      form,
      updatePassword,
    };
  },

  created() {
    console.log(this.$props);
  },
};
</script>
