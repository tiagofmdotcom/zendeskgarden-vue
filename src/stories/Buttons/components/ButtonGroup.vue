<template>
    <div role="group" class="c-btn-group">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    emits: ['click'],

    setup(props, { emit }) {
        props = reactive(props);
        return {
            onClick() {
                emit('click');
            },
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@zendeskgarden/css-variables';

.c-btn-group {
    display: inline-flex;
    position: relative;
    z-index: 0;
    white-space: nowrap;
}
.c-btn-group :focus {
    outline: none;
}
.is-rtl .c-btn-group {
    direction: rtl;
}

.c-btn-group:deep(.c-btn) {
    position: relative;
    margin-left: calc(1px * -1);

    &:hover,
    &:active {
        z-index: 1;
    }
    &:disabled {
        z-index: -1;
        border-top-width: 0;
        border-bottom-width: 0;
        border-right-color: var(--zd-color-blue-400);
        border-left-color: var(--zd-color-blue-400);
    }

    &:first-of-type:not(:last-of-type) {
        margin-left: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    &:last-of-type:not(:first-of-type) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    &:first-of-type:not(:last-of-type) .c-btn__icon {
        margin-right: -2px;
    }
    &:last-of-type:not(:first-of-type) .c-btn__icon {
        margin-left: -2px;
    }

    &.c-btn--primary {
        border-top-width: 0;
        border-bottom-width: 0;
        border-right-color: var(--zd-color-blue-400);
        border-left-color: var(--zd-color-blue-400);

        &:first-of-type:not(:last-of-type) {
            border-left-width: 0;
        }
        &:last-of-type:not(:first-of-type) {
            border-right-width: 0;
        }
    }
}

.is-rtl :deep(.c-btn) { // RTL & DEFAULT
    &:first-of-type:not(:last-of-type) {
        margin-right: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    &:last-of-type:not(:first-of-type) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
}

.is-rtl :deep(.c-btn--primary) { // RTL & PRIMARY
    &:first-of-type:not(:last-of-type) {
        border-right-width: 0;
    }
    &:last-of-type:not(:first-of-type) {
        border-left-width: 0;
    }
}
</style>