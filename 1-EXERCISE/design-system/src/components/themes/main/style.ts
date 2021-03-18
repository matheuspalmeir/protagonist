

export const mainThemeConfig = {
    colors: {
        darkLow: "rgba(0,0,0, 0.44)",
        darkMedium: "rgba(0,0,0, 0.60)",
        darkHigh: "rgba(0,0,0, 0.80)",
        magenta: "#E63888",
        lightSolid: "#FFFF",
        lightHigh: "rgba(255,255,255, 0.8)"
    },
    font: 'Roboto-Regular',
    fontStyles:{
        doubleExtraSmall: {      
			tag: "h6",
			fontSize: [16],
			fontWeight: 700,
		  	lineHeight: ["20px"],
	   	},
        extraSmall: {      
			tag: "h5",
			fontSize: [18, 20],
			fontWeight: 700,
		  	lineHeight: ["22px", "24px"],
	   	},
        small: {      
			tag: "h4",
			fontSize: [20, 24],
			fontWeight: 700,
		  	lineHeight: ["24px", "28px"],
		  	letterSpacing: "-0.6px"
	   },
        medium: {      
			tag: "h3",
			fontSize: [24, 32],
			fontWeight: 700,
		  	lineHeight: ["28px", "36px"],
		  	letterSpacing: "-0.8px"
	   },
        large: {      
			tag: "h2",
			fontSize: [32, 40],
			fontWeight: 700,
		  	lineHeight: ["36px", "44px"],
		  	letterSpacing: "-1px"
	   },
        extraLarge: 
        {      
          	tag: "h1",
          	fontSize: [40, 48],
          	fontWeight: 700,
        	lineHeight: ["44px", "52px"],
			letterSpacing: "-1.2px"
 		}
    },
	breakpoints: ["319px", "599px"]
};
