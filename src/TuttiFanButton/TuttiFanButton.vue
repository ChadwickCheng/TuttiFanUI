<template>
  <button
    :class="['tutti-btn', customClass]"
    :style="[tuttiStyle, customStyle]"
    @click="onClick"
  >
    <slot>默认按钮</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  customClass: String,      // 用户自定义类名
  customStyle: Object,      // 用户自定义样式
  type: { type: String, default: 'primary' }, // 按钮类型
});

const emits = defineEmits(['click']);

const tuttiStyle = {
  background: props.type === 'primary' ? '#ff6f61' : '#fff',
  color: props.type === 'primary' ? '#fff' : '#ff6f61',
  borderRadius: '8px',
  padding: '8px 20px',
  border: '1px solid #ff6f61',
  boxShadow: '0 2px 8px rgba(255,111,97,0.15)',
  cursor: 'pointer',
  fontWeight: 'bold',
};

function onClick(e: MouseEvent) {
  emits('click', e);
}
</script>

<style lang="scss" scoped>
.tutti-btn {
  transition: all 0.2s;
}
.tutti-btn:hover {
  opacity: 0.85;
}
</style>