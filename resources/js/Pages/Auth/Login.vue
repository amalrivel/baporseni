<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

defineProps({
  canResetPassword: Boolean,
  status: String,
});

const form = useForm({
  email: "",
  password: "",
  remember: false,
});

const submit = () => {
  form.post(route("login"), {
    onFinish: () => form.reset("password"),
  });
};
</script>

<template>
  <GuestLayout>
    <Head title="Log in" />

    <div
      v-if="status"
      class="tw-mb-4 tw-text-sm tw-font-medium tw-text-green-600">
      {{ status }}
    </div>

    <form @submit.prevent="submit">
      <div>
        <!-- <InputLabel for="email" value="Email" /> -->

        <!-- <TextInput
          id="email"
          type="email"
          class="tw-mt-1 tw-block tw-w-full"
          v-model="form.email"
          required
          autofocus
          autocomplete="username" /> -->
        <v-text-field
          id="email"
          type="email"
          v-model="form.email"
          required
          autofocus
          label="Email"></v-text-field>

        <InputError class="" :message="form.errors.email" />
      </div>

      <div>
        <!-- <InputLabel for="password" value="Password" />

        <TextInput
          id="password"
          type="password"
          class="tw-mt-1 tw-block tw-w-full"
          v-model="form.password"
          required
          autocomplete="current-password" /> -->
        <v-text-field
          id="password"
          type="password"
          v-model="form.password"
          required
          label="Password"></v-text-field>

        <InputError class="" :message="form.errors.password" />
      </div>

      <div class="tw-mt-4 tw-flex tw-items-center tw-justify-end">
        <!-- <PrimaryButton
          class="tw-ml-4"
          :class="{ 'tw-opacity-25': form.processing }"
          :disabled="form.processing">
          Log in
        </PrimaryButton> -->
        <v-btn
          variant="tonal"
          class="tw-w-full"
          :disabled="form.processing"
          type="submit">
          Log in
        </v-btn>
      </div>
    </form>
  </GuestLayout>
</template>

<script>
// export default {
//   mounted() {
//     console.log(this.form.errors.email);
//   },
// };
</script>
