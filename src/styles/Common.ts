import {useState} from "react";

type FszTypeProps = {
    fMax: number
    fMin: number
}

export const Fsz = ({fMax, fMin}: FszTypeProps) => `
    font-size: clamp(${fMin}px, calc( (100vw - 320px)/(1024 - 320) * (${fMax} - ${fMin}) + ${fMin}px), ${fMax}px);
`
