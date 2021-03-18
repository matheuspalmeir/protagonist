
import React from 'react';
import BodyText from '../themes/typography/BodyText';
import { mainThemeConfig } from '../themes/main/style';
import {LabelIconContainer} from './style';

const {
    bodyText
} = mainThemeConfig.fontStyles; 

interface LabelIconI {
   icon?: React.ReactNode
   labelText: string;
}

/**
 * LabelIcon is a info text component, which can has an icon follow by a text.
 *  You can use any other icon, and any personalized text passing it by props. 
*/

const LabelIcon = (props: LabelIconI) => {
    return <LabelIconContainer>
        {props.icon}
        <BodyText sizeStyle={{...bodyText, fontSize: [12]}}>{props.labelText}</BodyText>
    </LabelIconContainer>
}

export default LabelIcon;