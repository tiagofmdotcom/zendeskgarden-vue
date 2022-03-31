import { Meta, Story } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { Avatar } from '@stories/Avatars';

export default {
    title: 'Packages/Avatars',
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg'],
            control: { type: 'select'},
        },

        label: {
            control: 'text',
            description: 'Slot content',
        }, 

        badge: {
            control: 'number',
        }, 

        backgroundColor: {
            control: 'color',
        },

        foregroundColor : {
            control: 'color',
        },     

        surfaceColor : {
            control: 'color',
        },          

        status: {
            options: ['available', 'away'],
            control: { type: 'select'},
        },        

        type: {
            options: ['text', 'image', 'icon'],
            control: { type: 'select', default: 'text' }
        },

    }
} as Meta;

// AvatarComponent
import InlineSvg from 'vue-inline-svg';
import smiley from '@zendeskgarden/svg-icons/src/16/smiley-stroke.svg';

import image from "../../../public/favicon.ico";
const AvatarComponent: Story = (args) => defineComponent({
    components: { Avatar, InlineSvg },
    setup: () => ({ args, smiley, image }),
    template: `
    <Avatar v-bind="args" v-if="args.type === 'text'" #text>{{args.label}}</Avatar>
    <Avatar v-bind="args" v-else-if="args.type === 'icon'" #text>
        <inline-svg 
            :src="smiley" 
            width="16" 
            height="16"
            fill="black"
            aria-label="My image"
        ></inline-svg>
    </Avatar>
    
    <Avatar v-bind="args" v-else>
        <img :src="image" alt="" />
    </Avatar>
    `
});
export const AvatarStory = AvatarComponent.bind({});
AvatarStory.storyName = 'Avatar';
AvatarStory.args = {
    label: 'G',
    size: 'md',
    isSystem: false,
    backgroundColor: '#012b30',
    foregroundColor: 'white',
    surfaceColor: null,
    badge: null,
    status: null,
    type: 'text',
};