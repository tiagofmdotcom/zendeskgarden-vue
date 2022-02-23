<template>
    <ButtonBase 
        elementTag="button"
        @click="onClick"
        :disabled="disabled"      
        :isPrimary="isPrimary"
        :isDanger="isDanger"
        :isPill="isPill"
        :isBasic="isBasic"
        :hasIcon="true"
        :size="size"
    >
        <inline-svg 
            :class="classes"
            :src="icon" 
            width="16" 
            height="16"
            fill="black"
            aria-label="My image"
        ></inline-svg>
    </ButtonBase>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import ButtonBase from './ButtonBase.vue';
import InlineSvg from 'vue-inline-svg';

export default defineComponent({
    components: { ButtonBase, InlineSvg },
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

        return {
            onClick() {
                emit('click');
            },

            classes: computed(() => ({
                'c-btn__icon': true,
                'is-rotated': props.isRotated, // FIXME: transition is not being performed (component is fully rerendering) | see: https://github.com/storybookjs/storybook/issues/15345
            })),
            
            icon: computed(() => slots.default && getSlotChildrenText(slots.default()) || props.iconSvg || '')
        };
    },
});
</script>
<style lang="ts">
    
</style>