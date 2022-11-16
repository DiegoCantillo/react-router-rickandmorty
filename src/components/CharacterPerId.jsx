import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CharacterPerId = () => {

    const [characterId, setCharacterId] = useState({})
    const {id} = useParams()
   
    useEffect(()=> {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacterId(res.data))
    }, [id])

    return (
        <>
         <div className='character-per-id'>
            <h1>{characterId.name}</h1>
            <img src={characterId.image} alt="" />
            <p><b>Specie: </b>{characterId.species}</p>
            <p><b>Status:</b> {characterId.status}</p>
            <Link to={'/character'} ><i className="fa-solid fa-circle-left"></i></Link>
         </div>
        </>
    );
};

export default CharacterPerId;