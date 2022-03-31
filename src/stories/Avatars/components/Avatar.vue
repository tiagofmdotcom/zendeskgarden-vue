<template>
    <figure :class="classes" :style="styles" :data-badge="badge">
        <span class="c-avatar__txt" v-if="$slots.text">
            <slot name="text" />
        </span>

        <span class="c-avatar__svg" v-if="$slots.icon">
            <slot name="icon" />
        </span>        
        <slot v-else></slot>
    </figure>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

import '@zendeskgarden/css-bedrock';
import '@zendeskgarden/css-avatars';

export default defineComponent({
    props: {
        isSystem: {
            type: Boolean,
        },
        status: { 
            type: String,
            validator: (value: string): boolean => {
                return ['available', 'away', 'active'].indexOf(value) !== -1;
            },
            required: false,
        },        
        size: { //TODO: React components provides XXS
            type: String,
            validator: (value: string): boolean => {
                return ['xs', 'sm', 'lg', 'md'].indexOf(value) !== -1;
            },
            default: 'md',
        },
        badge: {
            type: Number,
            required: false,
        },

        backgroundColor: {
            type: String,
            default: '#012b30'
        },

        foregroundColor: {
            type: String,
            default: 'white'
        },    

        surfaceColor: {
            type: String,
            required: false
        },              
    },


    setup(props, {slots}) {
        console.dir(slots.default)
        console.dir(slots.text)
        props = reactive(props);
        return {
            classes: computed(() => ({
                'c-avatar': true,
                'c-avatar--system': props.isSystem,
                [`c-avatar--${props.size}`]: props.size || props.size !== 'md',
                [`is-${props.status}`]: props.status,
                'is-active': Number.isFinite(props.badge),
            })),

            styles: computed(() => ({
                '--foreground-color': props.foregroundColor,
                '--surface-color': props.surfaceColor || (props.badge && 'white') || 'transparent', // 1st defined color; 2nd white if badge; default fallback to transparent
                '--background-color': props.backgroundColor,
            })),            
        };
    },
});
</script>
<style lang="scss" scoped>
.c-avatar {
    color: var(--surface-color);
    background-color: var(--background-color);
}

.c-avatar :deep(.c-avatar__txt) {
  color: var(--foreground-color);
}    
</style>