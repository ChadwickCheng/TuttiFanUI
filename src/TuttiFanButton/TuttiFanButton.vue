<template>
  <button
    :class="btnClass"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <span v-if="loading" class="tutti-btn__loading">加载中...</span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  size: { type: String, default: 'medium' }, // medium / small / mini
  type: { type: String, default: 'primary' }, // primary / success / warning / danger / info / text
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  autofocus: { type: Boolean, default: false },
  nativeType: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  }, // button / submit / reset
})

const emits = defineEmits(['click'])

const btnClass = computed(() => [
  'tutti-btn',
  `tutti-btn--${props.type}`,
  `tutti-btn--${props.size}`,
  { 'is-plain': props.plain },
  { 'is-round': props.round },
  { 'is-circle': props.circle },
  { 'is-loading': props.loading },
  { 'is-disabled': props.disabled },
])

function handleClick(e: MouseEvent) {
  if (!props.loading && !props.disabled) {
    emits('click', e)
  }
}
</script>

<style scoped>
.tutti-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0 20px;
  height: 36px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  background: #ff6f61;
  color: #fff;
}
.tutti-btn--small { height: 32px; font-size: 13px; }
.tutti-btn--mini { height: 28px; font-size: 12px; }
.tutti-btn--success { background: #67c23a; }
.tutti-btn--warning { background: #e6a23c; }
.tutti-btn--danger { background: #f56c6c; }
.tutti-btn--info { background: #909399; }
.tutti-btn--text { background: none; color: #ff6f61; }
.is-plain { background: #fff; color: #ff6f61; border: 1px solid #ff6f61; }
.is-round { border-radius: 20px; }
.is-circle { border-radius: 50%; padding: 0; width: 36px; height: 36px; }
.is-loading { opacity: 0.7; cursor: not-allowed; }
.is-disabled { opacity: 0.5; cursor: not-allowed; }
.tutti-btn__loading { margin-right: 6px; }
</style>