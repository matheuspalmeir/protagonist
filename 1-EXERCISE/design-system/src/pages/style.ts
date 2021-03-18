import styled from 'styled-components';

interface HeaderI {
    bgColor?: string;
}

interface TableI {
    rowBgColor?: string;
    columFontColor?: string;
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-content: baseline;
    background: #f6f7f9;
    overflow-x: hidden;
`;

export const Header = styled.div<HeaderI>`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    display: flex;
    height: 100px;
    padding-right: 50px;
    padding-left: 50px;
    background-color: ${props => props.bgColor };

`;

export const SubHeader = styled(Header)`
    text-align: left;
    align-items: flex-end;
    height: 70px;
    background-color: transparent;

`;

export const Colors = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    padding-right: 40px;
    padding-left: 40px;

`;

export const TypographyTable = styled.table`
    width: 100%;
    padding: 10px;
    margin: 10px;
    text-align: left;
    border: none;
    padding-right: 40px;
    padding-left: 40px;

`;

export const TRow = styled.tr<TableI>`
    background-color: ${props => props.rowBgColor || '#ffff'};
    padding: 8px;
     
`;

export const THeader = styled.th<TableI>`
    background-color: ${props => props.rowBgColor || '#ffff'};
    padding: 8px;
    border-bottom: 1.5px solid rgba(0,0,0,0.2);

    div{
        color: #8d93a1 !important;
    }
`

export const TColumn = styled.td<TableI>`
    flex-wrap: nowrap;
    text-align: 'left';
    padding: 5px;
    padding-left: 80px;
    margin: 0px;
    color: ${props => props.columFontColor || '#8d93a1'};
    border-bottom: 1.5px solid rgba(0,0,0,0.2);

`

export const LogoIcon = styled.img`
    width: 40px;
`
