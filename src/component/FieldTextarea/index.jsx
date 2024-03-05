import React from "react"
import styled from "styled-components"

const FieldTextareaDiv = styled.textarea`
    width: 100%;
    height: 11.6875rem;
    margin:2.19rem 0;
    border-radius: 0.25rem;
    background: var(--color-gray-medium);
    color: var(----color-gray-dark);
    align-self: center;
    font-family: var(--roboto);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    resize: none;
    ::placeholder{
        color: var(--color-gray-light);
        font-family: var(--roboto);
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
`
const FieldTextarea = (props) => {
    return <FieldTextareaDiv placeholder={props.placeholder}></FieldTextareaDiv>
}

export default FieldTextarea