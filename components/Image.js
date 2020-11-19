import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { AppContext } from '../AppContext';

function Image({ className, photo }) {
    const { toggleFavorite } = useContext(AppContext);
    const {addToCart} = useContext(AppContext);
    const {cartItems} = useContext(AppContext)
    const {removeCard} = useContext(AppContext)
    const [hovered, setHovered] = useState(false);

    function heartFunction() {
        if (photo.isFavorite) {
            return <i className="ri-heart-fill favorite" ></i>;
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(photo.id)} className="ri-heart-line favorite"></i>
        }
    }
    function cartFunction() {
        if(cartItems.some((cartItem => cartItem.id === photo.id))) {
            return <i onClick={() => removeCard(photo.id)} className="ri-shopping-cart-fill cart"></i>
        } else if (hovered) {
            return  <i onClick={() => addToCart(photo)} className="ri-add-circle-line cart"></i>;
        }
    }
	return (
		<div className={`${className} image-container`}
			onMouseEnter={() => {setHovered(true);}}
			onMouseLeave={() => {setHovered(false);	}}>
			{heartFunction()}
			{cartFunction()}
			<img src={photo.url} className="image-grid" />
		</div>
	);
}
export default Image;
Image.propTypes={
    className: propTypes.string,
    img:propTypes.shape({
        id:propTypes.string,
        url: propTypes.string,
        isFavorite: propTypes.bool,
    })
}