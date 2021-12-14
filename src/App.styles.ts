import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 20px);

    h1 {
        font-size: 2rem;
        color: #0008;
    }
    `;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 20px);
    padding: 20px;
    z-index: 1;

    button {
        margin: 5px 10px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        color: #fff;
        background-color: #0008;

        &:hover {
            background-color: #A5A5A5;
            cursor: pointer;
        }
    }
`;

export const Geracao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    z-index: 0;
    h1 {
        font-size: 4rem;
        padding: 10px;
        color: #0008;
    }
`;

export const Corpo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 920px;
`;

export const Topo = styled.div<{cor:string}>`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    width: calc(100vw - 20px);
    background-color: ${props => props.cor};
    

    h2{
        position: relative;
        top: -150px;
        left: 680px;
        margin-left: 10px;
        color: #FFFA;
        font-size: 10rem;
        font-family: 'arial', sans-serif;
        font-weight: bold;
    }
    h1{
        position: relative;
        left: -200px;
        margin-bottom: 10px;
        color: #FFFE;
        font-size: 4rem;
        text-shadow: 0px 0px 3px #3338;        
    }
    img{
        width: 480px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
`;

export const DescricaoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 10px;
    width: 100%;; 
    margin-bottom: 50px;  
`;

export const Descricao = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    h3{
        margin-bottom: 10px;
        color: #000A;
        font-size: 1.4rem;
        font-family: 'arial', sans-serif;
        font-weight: bold;
    }
    p{
        margin-bottom: 10px;
        color: #0008;
        font-size: 1rem;
        font-family: 'arial', sans-serif;
        font-weight: bold;
        padding-left: 10px;
    }
    
`;

export const Progress = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #0008;
    font-size: 1rem;
    font-family: 'arial', sans-serif;
    font-weight: bold;
    padding-left: 10px;

`;

export const Loading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 100px;
    
    h1{
        margin-bottom: 10px;
        color: #0008;
        font-size: 5rem;
        font-family: 'arial', sans-serif;
        font-weight: bold;
    }

    progress{
        width: 40%;
        margin-bottom: 10px;
        height: 30px;
        transform: scaleX(-1);
        filter: invert(100%);
        border: none;
    }
`;