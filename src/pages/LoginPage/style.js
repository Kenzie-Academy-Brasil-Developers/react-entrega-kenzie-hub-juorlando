import styled from "styled-components";

export const StyledBox = styled.div`
width: 369px;
height: 567.67px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
gap: 22px;

h1{
    height: 19.97px;
    color: var(--color-primary);
    font-size: larger;
}
`

export const StyledForm = styled.form`
width: 100%;
height: 502px;
display: flex;
flex-direction: column;
gap: 22px;
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
}

`
