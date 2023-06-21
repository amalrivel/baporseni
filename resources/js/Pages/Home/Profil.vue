<template>
  <Head title="Profile" />
  <HomeLayout>
    <div class="tw-mx-auto tw-h-full tw-w-full 2xl:tw-container">
      <v-img
        src="https://picsum.photos/1009"
        height="150"
        class="tw-z-0"
        gradient="to top,rgba(0,0,0,.5),rgba(225,225,225,.1)"
        cover>
        <div
          class="tw-container tw-mx-auto tw-flex tw-h-full tw-items-end tw-p-4">
          <h1 class="tw-text-white">Profil</h1>
        </div>
      </v-img>
    </div>

    <div class="tw-container tw-mx-auto tw-flex tw-flex-col tw-gap-4 tw-p-4">
      <h2>Logo Kami</h2>
      <div class="tw-grid tw-grid-cols-9 tw-gap-4">
        <img
          class="tw-col-span-9 sm:tw-col-span-3"
          src="https://picsum.photos/1001" />
        <div class="tw-col-span-9 sm:tw-col-span-6">
          <h3>Makna Logo, Arti Warna Logo, dan Bentuk Huruf (Typeface) Logo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            semper justo arcu, nec laoreet ex tincidunt scelerisque. Nunc tempus
            volutpat sapien, eget porta arcu tincidunt vel. Sed vel interdum
            magna, non elementum nibh. In gravida nisi tellus, vel auctor mauris
            lobortis at. Proin condimentum metus ac tellus tempor, vel tempor
            purus maximus. Proin condimentum, lorem tempus feugiat finibus, mi
            purus tristique quam, sit amet posuere arcu est et neque. Fusce et
            malesuada lectus. Maecenas at ex ut urna eleifend iaculis eu eget
            velit. Aliquam nec enim congue, fermentum mauris sit amet, auctor
            felis. Praesent nec viverra orci, sit amet facilisis velit. Aliquam
            metus arcu, commodo eget purus et, lacinia pharetra elit. Vestibulum
            diam metus, porta et scelerisque eu, pretium ac diam. Nulla sed
            vulputate ante.
          </p>
        </div>
      </div>
    </div>
    <!-- <v-img src="https://picsum.photos/1009"></v-img> -->
    <div class="tw-container tw-mx-auto tw-flex tw-flex-col tw-gap-4 tw-p-4">
      <h2>Tugas dan Fungsi</h2>

      <div class="tw-flex tw-flex-row">
        <v-tabs
          v-model="tab"
          direction="vertical"
          color="primary"
          class="!tw-overflow-visible">
          <v-tab value="option-1"> Tugas </v-tab>
          <v-tab value="option-2"> Fungsi </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="option-1">
            <v-card flat>
              <v-card-text>
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                  Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                  non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non
                  nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                  Pellentesque libero tortor, tincidunt et, tincidunt eget,
                  semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-2">
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                  egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                  id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                  aliquam libero, non adipiscing dolor urna a orci. Curabitur
                  ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et
                  pellentesque egestas, lacus ante convallis tellus, vitae
                  iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In hac habitasse platea dictumst. Fusce ac
                  felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero. Nam commodo suscipit
                  quam. In consectetuer turpis ut velit. Sed cursus turpis vitae
                  tortor. Aliquam eu nunc.
                </p>

                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius
                  tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                  fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede.
                  In dui magna, posuere eget, vestibulum et, tempor auctor,
                  justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
                  dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </div>
    </div>

    <div class="tw-container tw-mx-auto tw-px-4">
      <h2>Sejarah Singkat Baporseni</h2>
      <v-timeline align="start">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :dot-color="year.color"
          size="small">
          <template v-slot:opposite>
            <div
              :class="`pt-1 headline font-weight-bold text-${year.color}`"
              v-text="year.year"></div>
          </template>
          <div>
            <h2
              :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
              Lorem ipsum
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div
      class="tw-container tw-mx-auto tw-mt-4 tw-flex tw-flex-col tw-gap-4 tw-p-4">
      <h2>Bagan Struktur Organisasi</h2>
      <img src="https://picsum.photos/1600" alt="https://picsum.photos/200" />
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
  data: () => ({
    tab: "option-1",
    aspectRatio: 16 / 9,
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
    years: [
      {
        color: "cyan",
        year: "1960",
      },
      {
        color: "green",
        year: "1970",
      },
      {
        color: "pink",
        year: "1980",
      },
      {
        color: "amber",
        year: "1990",
      },
      {
        color: "orange",
        year: "2000",
      },
    ],
  }),
};
</script>
