import React from 'react'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'

const RowStyle = styled.div`
  .row{
      margin: ${(props) => props.reset ? 'initial' : '0px'};
  }
`

const Rows = (props) => (
    <RowStyle>
        <Row>
            {props.children}
        </Row>
    </RowStyle>
)

export default Rows