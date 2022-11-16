import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Character = () => {

    const [charactersList, setCharactersList] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res=> setCharactersList(res.data.results))
    }, [])
    

const {id} = useParams()

    return (
        <ul className='name-character'>
            <h2>Character List</h2>
            {charactersList.map(character => (
                <li key={character.id}>
                    <Link to={`/character/${character.id}`}>{character.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Character;