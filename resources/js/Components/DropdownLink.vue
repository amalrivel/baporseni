<script setup>
import { Link } from "@inertiajs/inertia-vue3";
</script>

<template>
  <Link
    class="tw-block tw-w-full tw-px-4 tw-py-2 tw-text-left tw-text-sm tw-leading-5 tw-text-gray-700 tw-transition tw-duration-150 tw-ease-in-out hover:tw-bg-gray-100 focus:tw-bg-gray-100 focus:tw-outline-none">
    <slot />
  </Link>
</template>
