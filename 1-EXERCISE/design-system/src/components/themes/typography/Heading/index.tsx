import Dynamic from "../Dynamic/Dynamic";
import { BaseFontI } from "../interfaces";
import {mainThemeConfig} from '../../main/style';

const {medium} = mainThemeConfig.fontStyles;

const Heading = (props : BaseFontI) => {

    const sizeStyle = props.sizeStyle || medium;

    return <Dynamic {...sizeStyle} {...props}>
        {props.children}
    </Dynamic>
}

export default Heading;
