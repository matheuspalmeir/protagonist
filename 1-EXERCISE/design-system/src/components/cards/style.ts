import styled from 'styled-components';

interface CardContainerI { 
    backgroundColor: string;
}
export const CardContainer = styled.div<CardContainerI>`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 180px;
    padding: 5px;
    margin: 10px;
    background: ${props => props.backgroundColor} ;
    border-radius: 5px;
`;

export const CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    margin: 10px;
`

export const CardFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`