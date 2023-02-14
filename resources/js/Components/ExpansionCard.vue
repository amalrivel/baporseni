<template>
  <v-card>
    <v-img
      :src="category.image"
      class=""
      :gradient="`to left bottom,
        rgba(
            ${category.color1[0]},
            ${category.color1[1]},
            ${category.color1[2]},
            ${category.color1[3]}),
        rgba(
            ${category.color2[0]},
            ${category.color2[1]},
            ${category.color2[2]},
            ${category.color2[3]})`"
      height="300px"
      cover>
      <div class="tw-flex tw-h-[300px] tw-flex-col-reverse tw-overflow-scroll">
        <v-card-actions>
          <v-card-title class="text-white !tw-flex-1">{{
            category.name
          }}</v-card-title>

          <!-- <v-spacer></v-spacer> -->

          <v-btn
            :icon="
              show ? 'mdi-chevron-up text-white' : 'mdi-chevron-down text-white'
            "
            @click="show = !show"></v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-card-text class="tw-text-white">
              {{ category.excerpt }}
            </v-card-text>
            <v-divider></v-divider>
          </div>
        </v-expand-transition>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    category: Object,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    console.log(this.category);
  },
};
</script>
