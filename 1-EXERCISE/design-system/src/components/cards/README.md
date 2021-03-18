```js
import Card from './index.tsx';

import {mainThemeConfig} from '../themes/main/style';

<Card 
    bgColor={mainThemeConfig.colors.magenta}
    content={<div style={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: '#ffff',
                    borderRadius: 10,
                    color: 'black',
                    textAlign: 'center',
                }} 
            >Content here!</div>}
    footer={<div style={{textAlign: 'center'}}> Footer Info </div>}
/>

```