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
        :isActive="pressedState"
        :size="size"
        :iconSvg="icon"
    >
    </IconButton>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue';
import IconButton from './IconButton.vue';

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
            default: true
        },
        isBasic: {
            type: Boolean,
            default: true
        },
        isRotated: {
            type: Boolean
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
        iconSvg: {
            type: String
        }        
    },

    emits: ['click'],

    setup(props, { emit, slots }) {
        props = reactive(props);

        // HACK: gets default slot text content : https://stackoverflow.com/a/64167032/1869192
        const getSlotChildrenText = (children: any) => children.map((node: any) => {
        if (!node.children || typeof node.children === 'string') return node.children || ''
        else if (Array.isArray(node.children)) return getSlotChildrenText(node.children)
        else if (node.children.default) return getSlotChildrenText(node.children.default())
        }).join('')

        const pressedState = ref(props.isPressed);
        return {
            pressedState,
            onClick() {
                pressedState.value = !pressedState.value;
                emit('click', {isPressed: pressedState.value});
            },
            icon: computed(() => {
                if ([false, 'mixed'].includes(pressedState.value)) {
                    return slots.default && getSlotChildrenText(slots.default()) ||'';
                } else {
                    return slots.pressed && getSlotChildrenText(slots.pressed()) ||'';
                }
            })
            
        };
    },
});
</script>
<style lang="ts">
    
</style>