import { ArrayOfObjectsInputProps } from 'sanity'

export function getArrayInput({ maxLength = 1 }) {
  return function ArrayInput(props) {
    const { value, arrayFunctions } = props
    return props.renderDefault({
      ...props,
      arrayFunctions:
        value && value.length >= maxLength ? () => null : arrayFunctions,
    })
  }
}
