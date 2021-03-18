import styled from 'styled-components';
import {
    space,
    lineHeight,
    fontSize,
    size,
    color,
    textStyle,
    fontWeight,
    letterSpacing,
} from "styled-system";

const StyledDiv = styled.div`
${space}
${fontSize}
${color}
${size}
${textStyle}
${lineHeight}
${letterSpacing}
${fontWeight}
`;

interface DynamicI {
    children: any
}

/**
 * Dynamic is a component to receive exact font styles props that comes from a "mother component".
 *  This component should be use as child if you want to create a new typography component.  
*/

const Dynamic = ({children, ...props} : DynamicI) =>( 
    <StyledDiv {...props}>
        {children}
    </StyledDiv>
);

export default Dynamic;



