import "./bootstrap";
import "../css/app.css"; //9368

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

// Vuetify 24225
import "vuetify/styles"; //22788
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  //   title: (title) => `${title} - ${appName}`,
  title: (title) => `${title}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob("./Pages/**/*.vue")
    ),
  setup({ el, app, props, plugin }) {
    const vuetify = createVuetify({
      components,
      directives,
    });
    return createApp({ render: () => h(app, props) })
      .use(plugin)
      .component('QuillEditor', QuillEditor)
      .use(vuetify)
      .use(ZiggyVue, Ziggy)
      .mount(el);
  },
});

InertiaProgress.init({ color: "#4B5563" });
