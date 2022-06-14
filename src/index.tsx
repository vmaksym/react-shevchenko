import * as React from 'react'

type Props = {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}
