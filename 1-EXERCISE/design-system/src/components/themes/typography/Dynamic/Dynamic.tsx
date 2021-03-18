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

const Dynamic = ({children, ...props} : DynamicI) =>( 
    <StyledDiv {...props}>
        {children}
    </StyledDiv>
);

export default Dynamic;



