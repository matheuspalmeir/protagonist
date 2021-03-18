
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

const LabelIcon = (props: LabelIconI) => {
    return <LabelIconContainer>
        {props.icon}
        <BodyText sizeStyle={{...bodyText, fontSize: [12]}}>{props.labelText}</BodyText>
    </LabelIconContainer>
}

export default LabelIcon;