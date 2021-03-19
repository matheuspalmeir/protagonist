import logo from '../assets/images/logo-serasa.png';
import Card from '../components/cards';
import Heading from '../components/themes/typography/Heading/index';
import BodyText from '../components/themes/typography/BodyText';
import Subheading from '../components/themes/typography/Subheading/index';
import {TypeColor} from '../components/themes/typography/interfaces';
import LabelIcon from '../components/labelicon/index';
import {DesktopIcon, MobileIcon} from '../components/icons';
import { mainThemeConfig } from '../components/themes/main/style';
import {
    Container, 
    Header, 
    SubHeader, 
    Colors, 
    TypographyTable, 
    TRow, 
    TColumn, 
    THeader, 
    LogoIcon,
    Typeface,
    Cell
} from './style';

const {
    bodyText,
    doubleExtraSmall,
    extraSmall, 
    small, 
    large, 
    extraLarge
} = mainThemeConfig.fontStyles; 

const Home = () => {
    return <Container>
        <Header bgColor={mainThemeConfig.colors.magenta}>
            <Heading sizeStyle={{...large, color: '#ffff'}}>Colors and Types</Heading>
            <LogoIcon src={logo} alt="serasa"/>
        </Header>
        
        <SubHeader>
            <Heading style={{
                    borderBottom: `3px solid ${mainThemeConfig.colors.magenta}`,
                    paddingBottom: '2px'
                }}
                sizeStyle={{...small, color: mainThemeConfig.colors.darkHigh}}
            >
                Colors
            </Heading>
        </SubHeader>
        <Colors>
            {Object.keys(mainThemeConfig.colors).map((value: string) => {
                const currentColor = mainThemeConfig.colors[value as keyof TypeColor];

                return <Card 
                        bgColor={(value === 'lightSolid') || (value === 'lightHigh') ? mainThemeConfig.colors.darkLow : '#ffff'}
                        content={<div style={{
                                        width: "100%",
                                        height: "100px",
                                        backgroundColor: currentColor,
                                        borderRadius: 10,
                                    }} 
                                />}
                        footer={
                            <>
                                <Subheading sizeStyle={{...doubleExtraSmall, color: currentColor, fontWeight: 700 }}>{value}</Subheading>
                                <BodyText sizeStyle={{...bodyText, color: currentColor}}>{currentColor}</BodyText>
                            </>
                        }
                    />
                }
            )}
        </Colors>
        
        <SubHeader>
            <Heading style={{
                    borderBottom: `3px solid ${mainThemeConfig.colors.magenta}`,
                    paddingBottom: '2px'
                }}
                sizeStyle={{...small, color: mainThemeConfig.colors.darkHigh}}>
                Types
            </Heading>
        </SubHeader>
        <Typeface>
            <div style={{width: 300, display: 'block'}}>
                <Subheading 
                    sizeStyle={{
                        ...doubleExtraSmall, 
                        color: mainThemeConfig.colors.darkMedium
                    }}
                >
                    Typeface: Roboto
                </Subheading>
                <a href='https://fonts.google.com/specimen/Roboto'>
                    https://fonts.google.com/specimen/Roboto
                </a>
            </div>
            <div>
                <Subheading
                    sizeStyle={{
                        ...doubleExtraSmall, 
                        color: mainThemeConfig.colors.darkMedium
                    }}
                >
                    Weights: Regular 400. Bold 700.
                </Subheading>
            </div>
        </Typeface>
        
        <SubHeader>
            <Subheading>Headings</Subheading>
        </SubHeader>
        <TypographyTable>
                <TRow>
                    <THeader rowBgColor={'#f6f7f9'}>
                        <BodyText> Name</BodyText>
                    </THeader>
                    <THeader rowBgColor={'#f6f7f9'}>
                        <BodyText> Size </BodyText>
                    </THeader>
                    <THeader rowBgColor={'#f6f7f9'}>
                        <BodyText> Line </BodyText>
                    </THeader>
                    <THeader rowBgColor={'#f6f7f9'}>
                        <BodyText> Weight </BodyText>
                    </THeader>
                    <THeader rowBgColor={'#f6f7f9'}>
                        <BodyText> Letter spacing </BodyText>
                    </THeader>
                </TRow>
                <TRow>
                    <TColumn columFontColor={mainThemeConfig.colors.darkHigh}><Heading sizeStyle={extraLarge}>Display</Heading></TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="48px (3,0 rem)"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="40px (2,50 rem)"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="52px"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="44px"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>Bold (700)</TColumn>
                    <TColumn>-1.2</TColumn>
                </TRow>
                <TRow>
                    <TColumn columFontColor={mainThemeConfig.colors.darkHigh}><Heading sizeStyle={large}>Heading L</Heading></TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="40px (2,5 rem)"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="32px (2,0 rem)"
                                />
                        </Cell>    
                    </TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="44px"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="36px"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>Bold (700)</TColumn>
                    <TColumn>-1</TColumn>
                </TRow>
                <TRow>
                    <TColumn columFontColor={mainThemeConfig.colors.darkHigh}><Heading>Heading M</Heading></TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="32px (2,0 rem)"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="24px (1,5 rem)"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="36px"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="28px"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>Bold (700)</TColumn>
                    <TColumn>-0.8</TColumn>
                </TRow>
                <TRow>
                    <TColumn columFontColor={mainThemeConfig.colors.darkHigh}><Heading sizeStyle={small}>Heading S </Heading></TColumn>
                    <TColumn display="flex">
                        <Cell>   
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="24px (1,5 rem)"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="20px (1,25 rem)"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="28px"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="24px"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>Bold (700)</TColumn>
                    <TColumn>-0.6</TColumn>
                </TRow>
                <TRow>
                    <TColumn><Heading sizeStyle={{...extraSmall, color: mainThemeConfig.colors.magenta }}>Heading XS </Heading></TColumn>
                    <TColumn display="flex">
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="20px (1,5 rem)"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="18px (1,13 rem)"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="24px"
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="22px"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>Bold (700)</TColumn>
                    <TColumn>-</TColumn>
                </TRow>
                <TRow >
                    <TColumn columFontColor={mainThemeConfig.colors.darkHigh}><Subheading>Subheading</Subheading></TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="16px (1,0 rem)"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText=""
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="20px"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>Bold (700)</TColumn>
                    <TColumn>-</TColumn>
                </TRow>
                <TRow>
                    <TColumn columFontColor={mainThemeConfig.colors.darkHigh}><BodyText> BodyText </BodyText></TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText="16px (1,0 rem)"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>
                        <Cell>
                            <LabelIcon 
                                icon={<DesktopIcon/>} 
                                labelText=""
                            />
                            <LabelIcon 
                                icon={<MobileIcon/>} 
                                labelText="24px"
                            />
                        </Cell>
                    </TColumn>
                    <TColumn>Regular (400)</TColumn>
                    <TColumn>-</TColumn>
                </TRow>    
        </TypographyTable>

    </Container>
}

export default Home; 