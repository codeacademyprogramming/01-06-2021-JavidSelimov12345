import React, { FormEvent, useEffect, useState } from 'react';
import Changebuttons from './Changebuttons';

import Citybox from './Citybox';

function Wheather() {
	const [mcity, setMcity] = useState('baku');
    const [city, setCity] = useState('');
	const [items, setItems] = useState([]);
    
	const [cityList,setCityList] = useState()



	const getData = (mcity: string) => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mcity}&APPID=d58c9776916be7ba74bbdeff6fa4729b`)
			.then((res) => res.json())
			.then(
				(result) => {
					setItems(result);
          
				},

				(error) => {
					console.log(error);
					alert('Eroror bash verdi');
				}
			);
	};

	useEffect(() => {
		getData(mcity);
		// cityList.push(items)
	}, [mcity]);

    const handleGetCity =(e:FormEvent)=>{
        e.preventDefault();
       
        setCity(mcity)
        
        console.log(city)
        console.log(mcity)

        console.log('bu citylistdir',cityList)
        
        console.log(items)
        
       
        
      
    }


	return (
		<>
			<form>
        <h1>Wheather app</h1>
				<label htmlFor="CityName">City : </label>
				<input value = {mcity} type="text" id="CityName"onChange={e => setMcity(e.target.value)} />

				<button id="but" type="submit"onClick={(e)=>handleGetCity(e)}>
					add
				</button>
			</form>

			<Changebuttons />

			<Citybox />
		</>
	);
}

export default Wheather;
