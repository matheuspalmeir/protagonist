
type TypeColor = {
    darkLow: "rgba(0,0,0, 0.44)",
    darkMedium: "rgba(0,0,0, 0.60)",
    darkHigh: "rgba(0,0,0, 0.80)",
    magenta: "#E63888",
    lightSolid: "#FFFF",
    lightHigh: "rgba(255,255,255, 0.8)"
}

interface FontStylesI {
    tag: string,
    fontSize: Array<number>,
    fontWeight: number,
    lineHeight?: Array<string>,
    letterSpacing?: string,
    color?: TypeColor
}

export interface BaseFontI {
    children: any
    sizeStyle?: FontStylesI
}