<template>
    <IconButton
        @click="onClick"
        :disabled="disabled"      
        :isPrimary="isPrimary"
        :isDanger="isDanger"
        :isPill="isPill"
        :isBasic="isBasic"
        :hasIcon="true"
        :isRotated="isRotated"
        :size="size"
    >
        {{ chevronDownIcon }}
    </IconButton>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import IconButton from './IconButton.vue';
import chevronDownIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

export default defineComponent({
    components: { IconButton },
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
        isRotated: {
            type: Boolean
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

        // HACK: gets default slot text content : https://stackoverflow.com/a/64167032/1869192
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const getSlotChildrenText = (children: any) => children.map((node: any) => {
        if (!node.children || typeof node.children === 'string') return node.children || ''
        else if (Array.isArray(node.children)) return getSlotChildrenText(node.children)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        else if (node.children.default) return getSlotChildrenText(node.children.default())
        }).join('')

        return {
            onClick() {
                emit('click');
            },
            
            chevronDownIcon
        };
    },
});
</script>
<style lang="ts">
    
</style>