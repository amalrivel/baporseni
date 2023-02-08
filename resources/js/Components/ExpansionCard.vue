<template>
  <v-card>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
      class=""
      :gradient="`to left bottom, rgba(${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},.1), rgba(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},.5)`"
      height="300px"
      cover>
      <div class="tw-flex tw-h-[300px] tw-flex-col-reverse tw-overflow-scroll">
        <v-card-actions>
          <v-card-title class="text-white">Pre-fab homes</v-card-title>

          <v-spacer></v-spacer>

          <v-btn
            :icon="
              show ? 'mdi-chevron-up text-white' : 'mdi-chevron-down text-white'
            "
            @click="show = !show"></v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-card-text class="tw-text-white">
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape. asd
              asdasdasd sad as
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
  data() {
    return {
      show: false,
    };
  },
};
</script>
