import React, { useEffect, useState } from 'react';
const AppContext = React.createContext();

const endpoint = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

function AppContextProvider(props) {
    const [allPhotos,setAllPhotos] = useState([]);
    const [cartItems,setCartItems] = useState([]);


    // *** Initialize the data ***
	async function getPhotos(url) {
		// is there something with the string 'allPhotos' inside localStorage
		const lsAllPhotos = JSON.parse(localStorage.getItem('allPhotos'));
		if (lsAllPhotos) {
			// set the local storage value to state
			setAllPhotos(lsAllPhotos);
		} else {
			console.log('nothing in ls, we go and fetch the data we need');
			const response = await fetch(url);
			const data = await response.json();
			setAllPhotos(data);
		}
    }
    
	function initCartItems() {
		const lsCartItems = JSON.parse(localStorage.getItem('cartItems'));
		if (lsCartItems) {
			setCartItems(lsCartItems);
		}
    }
    
	useEffect(() => {
		if (allPhotos.length > 0) {
			localStorage.setItem('allPhotos', JSON.stringify(allPhotos));
		}
    }, [allPhotos]);
    
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

    useEffect(() => {
        getPhotos(endpoint);
        initCartItems();
    },[])

    function toggleFavorite(id) {
        const newPhotosArrays = allPhotos.map(photo => {
            // It is the one I am looking for, So I will update object.
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite,
                }
            }
            // It is not the one I am looking for, So I will not change anything.
            return {...photo}
        })
        setAllPhotos(newPhotosArrays);
    }
    function addToCart(img) {
        // how to add an element to an array in an immutable way
        // Push is mutable (array.push(newstuff))
        // map is immutable (let newArr = array.map())
        setCartItems(prevItems => [...prevItems, img]);
    }
    function removeCard(id) {
        setCartItems(previtems => previtems.filter(item => item.id !== id));
    }

    function emptyCard(e) {
        setCartItems([]);
    }

    return(
        <AppContext.Provider value={{allPhotos, toggleFavorite, cartItems, addToCart, removeCard, emptyCard}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider,AppContext};