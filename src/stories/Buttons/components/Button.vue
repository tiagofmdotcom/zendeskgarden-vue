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
        :isHovered="isHovered"
        :isFocused="isFocused"
        :isSelected="isSelected"
        :size="size"
    >
        <slot></slot>
    </ButtonBase>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
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
        return {
            onClick() {
                emit('click');
            },
        };
    },
});
</script>
<style lang="ts">
    
</style>