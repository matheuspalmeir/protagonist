
import Dynamic from "../Dynamic";
import {mainThemeConfig} from '../../main/style';
import { BaseFontI } from "../interfaces";

const {doubleExtraSmall} = mainThemeConfig.fontStyles;

/**
 * Subheading is a text component, with standart font size set at theme config.
 *  You can use any other size style passing it by props, but it's important 
 * to follow the prop interface and the best pratice is to use this props from theme. 
*/

const Subheading = (props : BaseFontI) => {

    const sizeStyle = props.sizeStyle || doubleExtraSmall;

    return <Dynamic {...sizeStyle} {...props}>
      {props.children}
    </Dynamic>
    
}

export default Subheading;