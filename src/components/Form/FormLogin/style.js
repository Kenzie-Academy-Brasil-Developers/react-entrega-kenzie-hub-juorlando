import styled from "styled-components"

export const StyledForm = styled.form`
width: 100%;
height: 502px;
display: flex;
flex-direction: column;
gap: 15px;
padding: 42px 22px;
background-color: var(--color-grey-3);

label{
    color: var(--color-grey-0);
    font-size: small;
}

h2{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: larger;
}

p{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: small;
    color: var(--color-grey-1);
}`