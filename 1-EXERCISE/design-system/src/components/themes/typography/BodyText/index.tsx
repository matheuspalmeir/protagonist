import Dynamic from "../Dynamic";
import { BaseFontI } from "../interfaces";
import {mainThemeConfig} from '../../main/style';

const {bodyText} = mainThemeConfig.fontStyles;

const BodyText = (props : BaseFontI) => {

    const sizeStyle = props.sizeStyle || bodyText;

    return <Dynamic {...sizeStyle} {...props}>
        {props.children}
    </Dynamic>
}

export default BodyText;