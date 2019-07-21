import React from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const ButtonStyle = styled.div`
    .btn{
      //font-size: ${(props) => props.big ? 'initial' : '1.75rem'};
    }
    ${(props) => props.search ? 'initial' : `
        {
            flex: 1;
        }
        > button{
            width: 100%;
            border-radius: 0;
        }
    `}
`

const Btn = (props) => (
    <ButtonStyle>
        <Button>
            {props.children}
        </Button>
    </ButtonStyle>
)

export default Btn