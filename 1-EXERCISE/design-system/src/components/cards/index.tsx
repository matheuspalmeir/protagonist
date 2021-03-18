import React, { CSSProperties } from 'react';
import {CardContainer, CardContent, CardFooter } from './style'; 

interface CardI {
    content:  React.ReactNode | string;
    footer:   React.ReactNode | string;
    bgColor?: string;
};

const Card = (props: CardI) => {
    
    const bg = props.bgColor ||' #FFFF';

    return(
        <CardContainer backgroundColor={bg}>
            <CardContent>
                {props.content}
            </CardContent>
            <CardFooter>
                {props.footer}
            </CardFooter>
        </CardContainer>
    )
}


export default Card;