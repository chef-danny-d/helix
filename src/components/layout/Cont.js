import React from 'react'
import Container from 'react-bootstrap/Container'

const Cont = (props) => (
    <Container>
        {props.children}
    </Container>
)

export default Cont