import Heading from '../components/themes/typography/Heading/index';
import Subheading from '../components/themes/typography/Subheading/index';
import { mainThemeConfig } from '../components/themes/main/style';

const {
    extraSmall, 
    small, 
    large, 
    extraLarge
} = mainThemeConfig.fontStyles;

const Home = () => {
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <Subheading>Subheading </Subheading>

        <Heading sizeStyle={extraSmall}>Heading </Heading>
        <Heading sizeStyle={small}>Heading </Heading>
        <Heading>Heading</Heading>
        <Heading sizeStyle={large}>Heading </Heading>
        <Heading sizeStyle={extraLarge}>Heading</Heading>
    </div>
}

export default Home; 