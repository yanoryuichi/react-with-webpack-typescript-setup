import React from 'react'

type Props = {
    name: string
}

const HelloMessage: React.FC<Props> = ({ name }) => {
    return <div>Hello {name}</div>
}

export default function App() {
    return <HelloMessage name="React">Hello, world!</HelloMessage>
}
