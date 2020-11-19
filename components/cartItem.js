import React, { useContext } from 'react'
import { AppContext } from "../AppContext.js";
import useHover from "../hooks/useHover.js";

function cartItem({item}) {
    const { removeCard } = useContext(AppContext)
    const [hovered, ref] = useHover();

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

    return (
        <div className="cart-item">
            <i 
                onMouseEnter={() => SetHovered(true)} 
                onMouseLeave={() => SetHovered(false)} 
                onClick={() => removeCard(item.id)} 
                className={iconClassName}
                ref={ref}
                >
            </i>
            <img onClick={() => removeCard(item.id)} src={item.url} width="130px"/>
            <p>$5.99</p>
        </div>
    )
}

export default cartItem
