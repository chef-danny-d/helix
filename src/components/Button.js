import React from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const ButtonStyle = styled.div`
  .btn{
      //font-size: ${(props) => props.big ? 'initial' : '1.75rem'};
  }
`

const Btn = (props) => (
    <ButtonStyle>
        <Button>
            {props.children}
        </Button>
    </ButtonStyle>
)

export default Btn