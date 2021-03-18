
import styled from 'styled-components';


interface IconI {
    size?: number;
    color?: string;

}

const Icon = styled.svg<IconI>`
    width: ${props => props.size || "20px"};
    height: ${props => props.size || "20px"};
    fill: ${props => props.color || 'grey'};
    margin: 5px;

    
`

/**
 * DesktopIcon is an icon component, created using a svg tag. You can create any icon,
 * by using the Icon Component. It receives a path and has two optional props: size and color. 
*/

export const DesktopIcon = (props: IconI) => {
    return <Icon viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path>
    </Icon>
}

export const MobileIcon = (props: IconI) => {
    return <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
    </Icon>
}