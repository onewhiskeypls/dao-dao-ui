import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { AmountSelector } from './AmountSelector'

export default {
  title: '(OLD DAO DAO) / components / StakingModal / AmountSelector',
  component: AmountSelector,
} as ComponentMeta<typeof AmountSelector>

const Template: ComponentStory<typeof AmountSelector> = (args) => {
  const [amount, setAmount] = useState(50)

  return <AmountSelector {...args} amount={amount} setAmount={setAmount} />
}

export const Default = Template.bind({})
Default.args = {
  max: 200,
}