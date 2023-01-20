<template>
  <div class="tw-relative">
    <v-layout class="tw-flex-col">
      <v-navigation-drawer v-model="drawer" temporary location="right">
        <v-list density="compact" nav>
          <Link href="/">
            <v-list-item title="Beranda" value="beranda"></v-list-item>
          </Link>
          <Link :href="route('profil')">
            <v-list-item title="Profil" value="profil"></v-list-item>
          </Link>
          <Link :href="route('cabangKegiatan')">
            <v-list-item
              title="Cabang Kegiatan"
              value="cabangKegiatan"></v-list-item>
          </Link>
          <Link :href="route('artikel')">
            <v-list-item title="Artikel" value="artikel"></v-list-item>
          </Link>
          <Link :href="route('kontak')">
            <v-list-item title="Kontak" value="kontak"></v-list-item>
          </Link>
        </v-list>
      </v-navigation-drawer>
      <div class="tw-flex tw-min-h-screen tw-flex-col">
        <header class="tw-sticky tw-top-0 tw-z-50 tw-bg-white tw-shadow">
          <div class="tw-container tw-mx-auto tw-flex tw-p-4">
            <h1 class="tw-mr-auto tw-flex tw-items-center">
              <Link href="/"> Baposerni </Link>
            </h1>
            <ul
              class="tw-hidden tw-items-center tw-justify-end tw-gap-8 sm:tw-flex">
              <li><Link href="/">Beranda</Link></li>
              <li><Link :href="route('profil')">Profil</Link></li>
              <li>
                <Link :href="route('cabangKegiatan')">Cabang Kegiatan</Link>
              </li>
              <li><Link :href="route('artikel')">Artikel</Link></li>
              <li><Link :href="route('kontak')">Kontak</Link></li>
            </ul>
            <div class="tw-block sm:tw-hidden">
              <v-app-bar-nav-icon
                variant="text"
                @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </div>
          </div>
        </header>
        <main class="tw-flex tw-flex-col tw-gap-8">
          <slot />
        </main>
        <v-divider></v-divider>
        <footer class="tw-mt-auto">
          <div
            class="tw-container tw-mx-auto tw-flex tw-flex-col tw-items-center tw-gap-4 tw-p-4">
            <div class="tw-flex tw-gap-4">
              <h1>IMG</h1>
              <h2>Baporseni</h2>
            </div>
            <ul class="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-justify-end tw-gap-4">
              <li><Link href="/">Beranda</Link></li>
              <li><Link :href="route('profil')">Profil</Link></li>
              <li>
                <Link :href="route('cabangKegiatan')">Cabang Kegiatan</Link>
              </li>
              <li><Link :href="route('artikel')">Artikel</Link></li>
              <li><Link :href="route('kontak')">Kontak</Link></li>
              <li><Link :href="route('login')">Punya Hak Akses?</Link></li>
            </ul>
            <p>Copyright © 2023 Timah-Baporseni ∙ All the rights reserved.</p>
          </div>
        </footer>
      </div>
    </v-layout>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Link,
  },
  data() {
    return {
      showingNavigationDropdown: false,
      drawer: null,
    };
  },
};
</script>
