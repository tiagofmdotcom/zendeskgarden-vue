import { Meta, Story } from '@storybook/vue3';
import { defineComponent } from 'vue';

import {Button, Anchor, ToggleButton, IconButton, ChevronButton} from '@stories/Buttons';

export default {
    title: 'Packages/Buttons',
    argTypes: {
        onClick: {},
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' }
        },

        label: {
            control: 'text',
            description: 'Slot content',
        }
    }
} as Meta;

// ButtonComponent
const ButtonComponent: Story = (args) => defineComponent({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args" v-slot="label"></Button>'
});
export const ButtonStory = ButtonComponent.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
    label: 'Button',
    disabled: false,
    isPrimary: false,
    isDanger: false,
    isPill: false,
    isBasic: false,
    isLink: false,
    isStretched: false,
    size: 'md',
};

// AnchorComponent
const AnchorComponent: Story = (args) => defineComponent({
    components: { Anchor },
    setup: () => ({ args }),
    template: '<Anchor v-bind="args" v-slot="label"></Anchor>'
});
export const AnchorStory = AnchorComponent.bind({});
AnchorStory.parameters = { controls: { exclude: ['size', 'onClick'] } };
AnchorStory.storyName = 'Anchor';
AnchorStory.args = {
    label: 'Anchor',
    isDanger: false,
    isExternal: false,
};

// ToggleButtonComponent
//FIXME : Sync "isPressed" attribute with inner vue component state (check: https://storybook.js.org/addons/storybook-addon-knobs-color-options | https://github.com/storybookjs/storybook/issues/3855#issuecomment-624164453 )
const ToggleButtonComponent: Story = (args) => defineComponent({
    components: { ToggleButton },
    setup: () => ({ args }),
    template: '<ToggleButton v-bind="args" v-slot="label"></ToggleButton>'
});
export const ToggleButtonStory = ToggleButtonComponent.bind({});
ToggleButtonStory.parameters = { controls: { exclude: ['size', 'onClick'] } };
ToggleButtonStory.storyName = 'ToggleButton';
ToggleButtonStory.args = {
    label: 'Toggle Button',
    disabled: false,
    isPrimary: false,
    isDanger: false,
    isPill: false,
    isBasic: false,
    isLink: false,
    isStretched: false,
    isPressed: false,
    size: 'md',
};


// IconButton
import smiley from '@zendeskgarden/svg-icons/src/16/smiley-stroke.svg';
const IconButtonComponent: Story = (args) => defineComponent({
    components: { IconButton },
    setup: () => ({ args }),
    template: `<IconButton v-bind="args"/>`
});
export const IconButtonStory = IconButtonComponent.bind({});
IconButtonStory.parameters = { controls: { exclude: ['iconSvg', 'label'] } };
IconButtonStory.storyName = 'IconButton';
IconButtonStory.args = {
    disabled: false,
    isPrimary: false,
    isDanger: false,
    isPill: false,
    isBasic: false,
    isRotated: false,
    size: 'md',
    iconSvg: smiley
};

// ChevronButton
const ChevronButtonComponent: Story = (args) => defineComponent({
    components: { ChevronButton },
    setup: () => ({ args }),
    template: `<ChevronButton v-bind="args"/>`
});
export const ChevronButtonStory = ChevronButtonComponent.bind({});
ChevronButtonStory.parameters = { controls: { exclude: ['label'] } };
ChevronButtonStory.storyName = 'ChevronButton';
ChevronButtonStory.args = {
    disabled: false,
    isPrimary: false,
    isDanger: false,
    isPill: false,
    isBasic: false,
    isRotated: false,
    size: 'md',
};