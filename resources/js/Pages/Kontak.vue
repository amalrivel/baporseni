<template>
  <Head title="Baporseni" />
  <HomeLayout
    ><div class="tw-container tw-mx-auto">
      <v-breadcrumbs :items="items">
        <template v-slot:prepend>
          <v-icon size="small" icon="mdi-vuetify"></v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <div class="tw-container tw-mx-auto -tw-mt-8 tw-p-4">
      <v-form ref="form" v-model="valid">
        <div class="tw-grid tw-gap-4 sm:tw-grid-cols-3">
          <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="First name"></v-text-field>
          <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="First name"></v-text-field>
          <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="First name"></v-text-field>
          <v-text-field
            class="tw-col-span-3"
            v-model="model"
            :counter="max"
            :rules="rules"
            label="First name"></v-text-field>
          <v-textarea
            class="tw-col-span-3"
            name="input-7-1"
            variant="filled"
            label="Label"
            auto-grow
            model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></v-textarea>
        </div>
      </v-form>
    </div>
  </HomeLayout>
</template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import HomeLayout from "@/Layouts/HomeLayout.vue";

export default {
  components: {
    Head,
    HomeLayout,
  },
  data() {
    return {
      items: [
        {
          title: "Dashboard",
        },
        {
          title: "Link 1",
        },
        {
          title: "Link 2",
        },
      ],
    };
  },
};
</script>
