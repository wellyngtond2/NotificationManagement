import { FormControl, FormErrorMessage, FormLabel, Textarea as ChakraText, TextareaProps as ChakraTextareaProps } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface TextareaProps extends ChakraTextareaProps {
  name: string,
  label?: string,
  error?: FieldError
}

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error} >
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraText
        id={name}
        name={name}
        placeholder={label}
        size="lg"
        variant="filled"
        focusBorderColor='pink.500'
        bgColor='gray.900'
        ref={ref}
        _hover={{
          bgColor: 'gray.900',
        }}
        {...rest} />
        <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}

export const Textarea = forwardRef(TextareaBase);