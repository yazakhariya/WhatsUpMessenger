import * as React from 'react'

type Props = {
  isEmpty: boolean
  minLength: number
  isToken?: boolean
}

export const useValidation = (value: string, validations: Props) => {
  // Под validations подразумевается все то, что указывается в значениях для валидации

  const [lengthError, setLengthError] = React.useState<boolean>(false)
  const [emptyInputError, setEmptyInputError] = React.useState<boolean>(false)
  const [tokenError, setTokenError] = React.useState<boolean>(false)

  React.useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setLengthError(true)
            : setLengthError(false)
          break

        case 'isEmpty':
          value ? setEmptyInputError(false) : setEmptyInputError(true)
          break

        case 'isToken':
          /^[A-Za-z0-9]*$/.test(String(value).toLowerCase())
            ? setTokenError(false)
            : setTokenError(true)
          break

        default:
          break
      }
    }
  }, [validations, value])

  return {
    lengthError,
    emptyInputError,
    tokenError,
  }
}

export const useInput = (currentValue: string, validations: Props) => {
  const [value, setValue] = React.useState(currentValue)
  const [isUsed, setIsUsed] = React.useState<boolean>(false)

  const valid = useValidation(value, validations)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlur = (_e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUsed(true)
  }

  return {
    value,
    onChange,
    onBlur,
    isUsed,
    ...valid,
  }
}
