import Dynamic from "../Dynamic";
import { BaseFontI } from "../interfaces";
import {mainThemeConfig} from '../../main/style';

const {bodyText} = mainThemeConfig.fontStyles;

/**
 * BodyText is a text component, with standart font size set at theme config.
 *  You can use any other size style passing it by props, but it's important 
 * to follow the prop interface and the best pratice is to use this props from theme. 
*/

const BodyText = (props : BaseFontI) => {

    const sizeStyle = props.sizeStyle || bodyText;

    return <Dynamic {...sizeStyle} {...props}>
        {props.children}
    </Dynamic>
}

export default BodyText;