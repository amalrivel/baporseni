<script setup>
defineProps({
  type: {
    type: String,
    default: "submit",
  },
});
</script>

<template>
  <button
    :type="type"
    class="tw-inline-flex tw-items-center tw-rounded-md tw-border tw-border-transparent tw-bg-red-600 tw-px-4 tw-py-2 tw-text-xs tw-font-semibold tw-uppercase tw-tracking-widest tw-text-white tw-transition tw-duration-150 tw-ease-in-out hover:tw-bg-red-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500 focus:tw-ring-offset-2 active:tw-bg-red-700">
    <slot />
  </button>
</template>
