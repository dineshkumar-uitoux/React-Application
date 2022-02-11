import React from 'react'
import styled from 'styled-components';
const Load = styled.h1`
font-size:100px;
color:#34dbed`
const Div = styled.div`
text-align:center;
margin-top:300px;
`
function Loading() {
    return (
        <Div><Load>Loading...</Load></Div>

    )
}

export default Loading;