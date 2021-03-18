import {ThemeProps} from './interfaces';
import { mainThemeConfig } from './style';
import { ThemeProvider } from "styled-components";

/**
* Maintheme is wrappered by styled-components component "ThemeProvider".
* By using Maintheme, you can create a new config theme file and set any
  theme to your pages. 
* Besides that, you can create a new component for example, MyOtherTheme and 
  use it, associating a key to a new route, and the hook "withTheme" will apply
  your new theme into the page (check this out at "routes.tsx"). 
 */

const MainTheme = (props : ThemeProps) => {

    const mainTheme = props.theme || mainThemeConfig;

    return (
      	<ThemeProvider theme={mainTheme}>
          	{props.children}
      	</ThemeProvider>
    );
};

export default MainTheme; 