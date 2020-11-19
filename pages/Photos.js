import React, { useContext } from 'react';
import {AppContext} from '../AppContext';
import {getClass} from '../utils';

import Image from '../components/Image';

function Photos() {
	const {allPhotos} = useContext(AppContext)
	return (
		<main className="photos">
			{allPhotos.map((photo,index) => {
				return(
					<Image photo={photo} key={photo.id} className={getClass(index)}/>
				)	
			})}
		</main>
	);
}

export default Photos;
