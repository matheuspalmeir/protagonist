import React from 'react';
import {CardContainer, CardContent, CardFooter } from './style'; 

interface CardI {
    content:  React.ReactNode | string;
    footer:   React.ReactNode | string;
    bgColor?: string;
};

/**
 * Card is a generic info component, which has two  standart props children: 
 * "content" and "footer".
 * You can use any other React Node into content and footer. 
*/

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