
import Dynamic from "../Dynamic";
import {mainThemeConfig} from '../../main/style';
import { BaseFontI } from "../interfaces";

const {doubleExtraSmall} = mainThemeConfig.fontStyles;


const Subheading = (props : BaseFontI) => {

    const sizeStyle = props.sizeStyle || doubleExtraSmall;

    return <Dynamic {...sizeStyle} {...props}>
      {props.children}
    </Dynamic>
    
}

export default Subheading;