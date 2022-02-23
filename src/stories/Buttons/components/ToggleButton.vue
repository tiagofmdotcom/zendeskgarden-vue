<template>
    <ButtonBase
        elementTag="button"
        @click="onClick"
        :disabled="disabled"
        :isPrimary="isPrimary"
        :isDanger="isDanger"
        :isPill="isPill"
        :isBasic="isBasic"
        :isLink="isLink"
        :isStretched="isStretched"
        :isActive="pressedState"
        :size="size"
    >
        <slot></slot>
    </ButtonBase>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import ButtonBase from './ButtonBase.vue';

export default defineComponent({
    components: { ButtonBase },

    props: {
        isPrimary: {
            type: Boolean,
        },
        isDanger: {
            type: Boolean,
        },
        isPill: {
            type: Boolean,
        },
        isBasic: {
            type: Boolean,
        },

        isLink: {
            type: Boolean,
        },
        isStretched: {
            type: Boolean,
        },
        isPressed: {
            type: [String, Boolean],
            validator: (value: string | boolean): boolean => {
                return [true, false, 'mixed'].indexOf(value) !== -1;
            },
            default: 'mixed',
        },
        disabled: {
            type: Boolean,
        },
        size: {
            type: String,
            validator: (value: string): boolean => {
                return ['sm', 'lg', 'md'].indexOf(value) !== -1;
            },
            default: 'md',
        },
    },

    emits: ['click'],

    setup(props, { emit }) {
        props = reactive(props);
        const pressedState = ref(props.isPressed);
        return {
            pressedState,
            onClick() {
                pressedState.value = !pressedState.value;
                emit('click', pressedState.value);
            },
        };
    },
});
</script>
<style lang="ts">
</style>