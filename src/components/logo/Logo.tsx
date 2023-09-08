import React from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const Logo:React.FC = () => {
    return (
        <a href="#" className="logo" onClick={()=> scroll.scrollToTop()}>
            <Icon  iconId='logo' width="16" height="17" viewBox="0 0 16 17" />
        </a>
    );
};

