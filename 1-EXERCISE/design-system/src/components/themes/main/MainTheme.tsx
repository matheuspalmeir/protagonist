import React from "react";

import { theme } from './style';
import {ThemeProps} from './interfaces';
import { ThemeProvider } from "styled-components";



const MainTheme = (props : ThemeProps) => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  );

export default MainTheme; 