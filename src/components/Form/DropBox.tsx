import {
  FormControl, FormLabel, Select, SelectProps as ChakraSelectProps,
  theme as baseTheme,
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface SelectProps extends ChakraSelectProps {
  name: string,
  label?: string,
}

const DropBoxBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ name, label, ...rest }, ...ref) => {
  return (
    <FormControl >
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Select
        placeholder={label}
        id={name}
        name={name}
        size="lg"
        variant="filled"
        focusBorderColor='pink.500'
        bgColor='gray.900'
        {...rest}
      >
      </Select>
    </FormControl>
  )
}

export const DropBox = forwardRef(DropBoxBase);

interface OptionsProps {
  value: string,
  text: string
}

const DropBoxItemBase: ForwardRefRenderFunction<HTMLOptionElement, OptionsProps> = ({ value, text, ...rest }, ...ref) => {
  return (
      <option {...ref} style={{ color: baseTheme.colors.white, background: baseTheme.colors.gray[900] }} value={value} {...rest}>{text}</option>

        )
}
        export const DropBoxItem = forwardRef(DropBoxItemBase);
