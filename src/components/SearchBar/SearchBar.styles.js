import styled from 'styled-components';

export const Wrapper=styled.div`
    display:flex;
    align-items:center;
    height:60px;
    background: var(--darkGrey);
    padding:0 20px;
`;

export const Content =styled.div`
position:relative;
max-width:var(--maxWidth);
width:100%;
height:35px;
background: var(--medGrey);
margin:0 auto;
border-radius: 40px;
color:var(--white);

img{
    position:absolute;
    left:15px;
    top:4px;
    width:25px;
}
input{
    font-size:22px;
    position:absolute;
    left:0;
    margin:5px 0;
    padding: 0 0 0 50px;
    border:0;
    background:transparent;
    color:var(--white);
    :focus{
        outline:none;
    }
}

`;
