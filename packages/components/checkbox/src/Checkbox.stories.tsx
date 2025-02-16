import { FormField } from '@spark-ui/form-field'
import { Close } from '@spark-ui/icons/dist/icons/Close'
import { Plus } from '@spark-ui/icons/dist/icons/Plus'
import { Label } from '@spark-ui/label'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { cx } from 'class-variance-authority'
import { useId, useState } from 'react'

import { Checkbox, CheckboxProps } from './Checkbox'
import { CheckboxGroup } from './CheckboxGroup'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="flex gap-lg">
    <div className="w-1/2 shrink basis-auto">
      <Checkbox>Accept terms and conditions</Checkbox>
    </div>

    <div className="w-1/2 shrink basis-auto">
      <Checkbox>
        Refuse terms and conditions, because you are so unhappy with it. There is no reason to
        accept that, it’s unfair!
      </Checkbox>
    </div>
  </div>
)

export const Disabled: StoryFn = _args => <Checkbox disabled>Accept terms and conditions</Checkbox>

export const Uncontrolled: StoryFn = () => {
  const handleCheckedChange = (current: boolean, indeterminate?: boolean) => {
    console.log(current, indeterminate)
  }

  return (
    <div className="flex flex-col gap-lg">
      <Checkbox defaultChecked onCheckedChange={handleCheckedChange}>
        Accept terms and conditions
      </Checkbox>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [checked, setChecked] = useState(true)

  const handleCheckedChange = (current: boolean) => {
    setChecked(current)
  }

  return (
    <div className="flex gap-lg">
      <Checkbox checked={checked} onCheckedChange={handleCheckedChange}>
        Accept terms and conditions
      </Checkbox>

      <Checkbox checked="indeterminate" onCheckedChange={handleCheckedChange}>
        Accept terms and conditions
      </Checkbox>
    </div>
  )
}

const intent = [
  'main',
  'support',
  'accent',
  'basic',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
] as const

export const Intent: StoryFn = _args => (
  <div className="flex gap-lg">
    {intent.map(color => {
      return (
        <Checkbox className="capitalize" key={color} intent={color} defaultChecked>
          {color}
        </Checkbox>
      )
    })}
  </div>
)

export const Icon: StoryFn = _args => (
  <div className="flex flex-col gap-lg">
    <Checkbox defaultChecked icon={<Close />}>
      Accept terms and conditions
    </Checkbox>
    <Checkbox checked="indeterminate" indeterminateIcon={<Plus />}>
      Accept terms and conditions
    </Checkbox>
  </div>
)

export const Group: StoryFn = _args => {
  return (
    <CheckboxGroup name="sport">
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupControlled: StoryFn = () => {
  const [value, setValue] = useState<string[]>([])

  const handleCheckedChange = (current: string[]) => {
    setValue(current)
  }

  return (
    <CheckboxGroup value={value} onCheckedChange={handleCheckedChange}>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupUncontrolled: StoryFn = () => {
  const handleCheckedChange = (value: string[]) => {
    console.log(value)
  }

  return (
    <CheckboxGroup defaultValue={['soccer', 'tennis']} onCheckedChange={handleCheckedChange}>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupOrientation: StoryFn = _args => {
  return (
    <CheckboxGroup orientation="horizontal">
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupIntent: StoryFn = _args => {
  return (
    <CheckboxGroup>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const GroupImproved: StoryFn = () => {
  const [value, setValue] = useState<string[]>([])

  const handleCheckedChange = (current: string[]) => {
    setValue(current)
  }

  return (
    <FormField name="sport" state={value.length === 0 ? 'error' : undefined} isRequired>
      <FormField.Label asChild>
        <span>Sports</span>
      </FormField.Label>

      <CheckboxGroup value={value} onCheckedChange={handleCheckedChange}>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>

      <FormField.ErrorMessage>The sport field is required.</FormField.ErrorMessage>
    </FormField>
  )
}

export const CustomImplementation: StoryFn = () => {
  const CustomCheckbox = ({ children, checked, ...others }: CheckboxProps) => {
    const id = useId()
    const { value } = others

    return (
      <Label
        id={id}
        htmlFor={value}
        className={cx(
          'flex flex-wrap shadow rounded-md gap-md p-lg max-w-sz-320',
          checked ? 'bg-success/dim-4' : '',
          'cursor-pointer'
        )}
      >
        <Checkbox aria-labelledby={id} id={value} checked={checked} {...others} />
        {children}
      </Label>
    )
  }

  const Example = () => {
    const [checked, setChecked] = useState(['A'])

    const values = ['A', 'B', 'C']

    return (
      <CheckboxGroup value={checked} name="sport" onCheckedChange={setChecked}>
        {values.map(value => {
          return (
            <CustomCheckbox key={value} value={value} checked={checked.includes(value)}>
              <div className="flex grow justify-between">
                <span className="font-bold">{value}</span>
                <span>this is a custom</span>
              </div>
              <div className="w-full text-right italic">implementation of a checkbox</div>
            </CustomCheckbox>
          )
        })}
      </CheckboxGroup>
    )
  }

  return <Example />
}

export const InvisibleCheckbox: StoryFn = () => {
  const CustomCheckbox = ({ children, checked, ...others }: CheckboxProps) => {
    const id = useId()
    const { value } = others

    return (
      <Label
        id={id}
        htmlFor={value}
        className={cx(
          'flex flex-wrap shadow rounded-md gap-md p-lg max-w-sz-320',
          checked ? 'bg-success/dim-3' : '',
          'focus-within:ring-outline-high',
          '[&:has(:focus-visible)]:focus-within:ring-2',
          'cursor-pointer'
        )}
      >
        <VisuallyHidden>
          <Checkbox aria-labelledby={id} id={value} checked={checked} {...others} />
        </VisuallyHidden>
        {children}
      </Label>
    )
  }

  const Example = () => {
    const [checked, setChecked] = useState(['D'])

    const values = ['D', 'E', 'F']

    return (
      <CheckboxGroup value={checked} name="sport" onCheckedChange={setChecked}>
        {values.map(value => {
          return (
            <CustomCheckbox key={value} value={value} checked={checked.includes(value)}>
              <div className="flex grow justify-between">
                <span className="font-bold">{value}</span>
                <span>this is a custom</span>
              </div>
              <div className="w-full text-right italic">implementation of a checkbox</div>
            </CustomCheckbox>
          )
        })}
      </CheckboxGroup>
    )
  }

  return <Example />
}
