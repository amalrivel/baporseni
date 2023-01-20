<template>
  <Head title="Baporseni" />
  <HomeLayout>
    <div class="tw-container tw-mx-auto">
      <v-breadcrumbs :items="items">
        <template v-slot:prepend>
          <v-icon size="small" icon="mdi-vuetify"></v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <div class="tw-container tw-mx-auto -tw-mt-8 tw-p-4"></div>
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
    return {};
  },
};
</script>
