<template>
    <ButtonBase 
        elementTag="a"
        @click="onClick"
        :isDanger="isDanger"
        :isExternal="isDanger"
        :isLink="true"
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
        isDanger: {
            type: Boolean,
        },
        isExternal: {
            type: Boolean,
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