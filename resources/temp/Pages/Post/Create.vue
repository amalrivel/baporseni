<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="text-xl font-semibold leading-tight text-gray-800">Post</h2>
    </template>

    <form @submit.prevent="updatePassword" class="py-12">
      <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-white p-4 shadow sm:rounded-lg sm:p-8">
          <form @submit.prevent="submit">
            <div>
              <InputLabel for="title" value="Title" />
              <TextInput
                id="title"
                ref="title"
                v-model="form.title"
                type="text"
                class="mt-1 block w-full"
              />
              <InputError :message="form.errors.title" class="mt-2" />
            </div>
            <PrimaryButton :disabled="form.processing">Save</PrimaryButton>
          </form>
        </div>
      </div>
    </form>
  </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
  title: "",
  slug: "",
  content: "",
});

export default {
  components: {
    AuthenticatedLayout,
    Head,
    PrimaryButton,
    Link,
    InputError,
    InputLabel,
    TextInput,
    useForm,
  },
  data() {
    return {
      currentDataInput: null,
      dataInput: null,
    };
  },
  setup() {
    const form = useForm({
      title: "",
      slug: "",
      content: "",
    });
    const submit = () => {
      console.log(form.post());
      //   form.post(route("blogs.store"));
    };

    return { form, submit };
  },
  created() {
    // console.log(this.form);
  },
};
</script>
