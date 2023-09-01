import React from 'react';
import iconsSprite from '../../assets/SvgSprite/svgSprite.svg'

type iconsPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon:React.FC<iconsPropsType> = (props: iconsPropsType) => {
    return (
        <svg
            width={props.width || '50px'}
            height={props.height || '50px'}
            viewBox={props.height || '0 0 16 17'}
        >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

