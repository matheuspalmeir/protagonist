import React from "react";

import { mainThemeConfig } from './style';
import {ThemeProps} from './interfaces';
import { ThemeProvider } from "styled-components";


const MainTheme = (props : ThemeProps) => (
    <ThemeProvider theme={mainThemeConfig}>
        {props.children}
    </ThemeProvider>
  );

export default MainTheme; 