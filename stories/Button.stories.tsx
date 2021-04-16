import React from 'react'
import { Story, Meta } from '@storybook/react'
import centered from '@storybook/addon-centered'

import { DefaultButton, Props } from '../src/components/Buttons/Default'

export default {
    title: 'Default Button',
    component: DefaultButton,
    decorators: [centered],
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta

const Template: Story<Props> = args => <DefaultButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
    label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    label: 'Button'
}
