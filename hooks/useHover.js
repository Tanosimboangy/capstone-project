import { useEffect, useState, useRef } from 'react';

function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

     useEffect(() => {
         const instance = ref.current;
        instance.addEventListener("mouseenter", enter);
        instance.addEventListener("mouseleave", leave);
        return () => {
            instance.removeEventListener("mouseenter", enter);
            instance.removeEventListener("mouseleave", leave);
        }
     }, [])
    
    function enter() {
        setHovered(true);
    }

    function leave() {
        setHovered(false);
    }

    return [hovered, ref]
}

export default useHover
