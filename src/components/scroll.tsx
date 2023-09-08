import {motion, useScroll} from "framer-motion";

export const Scroll = () => {
    const {scrollYProgress} = useScroll();

    return (
        <>
            <motion.div
                className="progress-bar"
                style={{
                    scaleX: scrollYProgress,
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: '2px',
                    background: '#fff',
                    position: 'fixed',
                    zIndex: '12',
                    transformOrigin: 'left'
                }}
            />
        </>
    );
}