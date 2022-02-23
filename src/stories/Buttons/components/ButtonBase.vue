<template>
    <component
        :is="elementTag"
        :type="elementTag === 'button' && elementTag || null"
        :class="classes"
        @click="$emit('click')"
        :disabled="disabled"
    >
        <slot>{{ label }}</slot>
    </component>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

import '@zendeskgarden/css-bedrock';
import '@zendeskgarden/css-buttons';

export default defineComponent({
    props: {
        /* FIXME: Not implemented in Garden CSS components
        isNeutral: {
            type: Boolean,
        }, 
        */
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
        /* FIXME: Not implemented in Garden CSS components
        focusInset: {
            type: Boolean,
        },
        */
        isLink: {
            type: Boolean,
        },
        isStretched: {
            type: Boolean,
        },
        isHovered: {
            type: Boolean,
        },
        isFocused: {
            type: Boolean,
        },
        isActive: {
            type: [String, Boolean],
        },
        isExternal: {
            type: Boolean,
        },       
        disabled: {
            type: Boolean,
        },
        hasIcon: {
            type: Boolean,
        },
        size: {
            type: String,
            validator: (value: string): boolean => {
                return ['sm', 'lg', 'md'].indexOf(value) !== -1;
            },
            default: 'md',
        },
        label: {
            type: String,
        },
        elementTag: {
            type: String,
            default: 'button'
        },
    },

    emits: ['click'],

    setup(props) {
        props = reactive(props);
        return {
            classes: computed(() => ({
                'c-btn': true,
                'c-btn--primary': props.isPrimary,
                'c-btn--danger': props.isDanger,
                'c-btn--full': props.isStretched,
                'c-btn--basic': props.isBasic,
                'c-btn--pill': props.isPill,
                'c-btn--anchor': props.isLink,
                [`c-btn--${props.size}`]: props.size || props.size !== 'md',
                // ⬇ Forced state
                'is-hovered': props.isHovered,
                'is-active': props.isActive,
                'is-focused': props.isFocused,
                'is-disabled': props.disabled,
                //
                'c-btn--icon': props.hasIcon,
            })),
        };
    },
});
</script>