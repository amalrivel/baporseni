<script setup>
import { computed, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
    default: "2xl",
  },
  closeable: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["close"]);

watch(
  () => props.show,
  () => {
    if (props.show) {
      document.body.style.overflow = "tw-hidden";
    } else {
      document.body.style.overflow = null;
    }
  }
);

const close = () => {
  if (props.closeable) {
    emit("close");
  }
};

const closeOnEscape = (e) => {
  if (e.key === "Escape" && props.show) {
    close();
  }
};

onMounted(() => document.addEventListener("keydown", closeOnEscape));

onUnmounted(() => {
  document.removeEventListener("keydown", closeOnEscape);
  document.body.style.overflow = null;
});

const maxWidthClass = computed(() => {
  return {
    sm: "sm:tw-max-w-sm",
    md: "sm:tw-max-w-md",
    lg: "sm:tw-max-w-lg",
    xl: "sm:tw-max-w-xl",
    "2xl": "sm:tw-max-w-2xl",
  }[props.maxWidth];
});
</script>

<template>
  <teleport to="body">
    <transition leave-active-class="tw-duration-200">
      <div
        v-show="show"
        class="tw-fixed tw-inset-0 tw-z-50 tw-overflow-y-auto tw-px-4 tw-py-6 sm:tw-px-0"
        scroll-region
      >
        <transition
          enter-active-class="tw-ease-out tw-duration-300"
          enter-from-class="tw-opacity-0"
          enter-to-class="tw-opacity-100"
          leave-active-class="tw-ease-in tw-duration-200"
          leave-from-class="tw-opacity-100"
          leave-to-class="tw-opacity-0"
        >
          <div
            v-show="show"
            class="tw-fixed tw-inset-0 tw-transform tw-transition-all"
            @click="close"
          >
            <div class="tw-absolute tw-inset-0 tw-bg-gray-500 tw-opacity-75" />
          </div>
        </transition>

        <transition
          enter-active-class="tw-ease-out tw-duration-300"
          enter-from-class="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
          enter-to-class="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
          leave-active-class="tw-ease-in tw-duration-200"
          leave-from-class="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
          leave-to-class="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
        >
          <div
            v-show="show"
            class="tw-mb-6 tw-transform tw-overflow-hidden tw-rounded-lg tw-bg-white tw-shadow-xl tw-transition-all sm:tw-mx-auto sm:tw-w-full"
            :class="maxWidthClass"
          >
            <slot v-if="show" />
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>
