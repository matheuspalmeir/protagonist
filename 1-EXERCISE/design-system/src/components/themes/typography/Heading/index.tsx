import Dynamic from "../Dynamic";
import { BaseFontI } from "../interfaces";
import {mainThemeConfig} from '../../main/style';

const {medium} = mainThemeConfig.fontStyles;

/**
 * Heading is a text component, with standart font size set at theme config.
 *  You can use any other size style passing it by props, but it's important 
 * to follow the prop interface and the best pratice is to use this props from theme.
 * 
 * The Heading component can use six different sizes and weights font: DoubleExtraSmall, 
 * ExtraSmall, Small, Medium, Large, ExtraLarge 
*/

const Heading = (props : BaseFontI) => {

    const sizeStyle = props.sizeStyle || medium;

    return <Dynamic {...sizeStyle} {...props}>
        {props.children}
    </Dynamic>
}

export default Heading;
