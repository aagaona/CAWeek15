import React, { useState } from 'react';
import axios from 'axios';

function AddCommander({ decks, setDecks }) {
  const [commanderName, setCommanderName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleAdd() {
    try {
      const response = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${commanderName}`);
      console.log(response.data);
      const cardData = response.data;

      await axios.post('https://65bc4e1752189914b5bdbc75.mockapi.io/commanderdecks', {
        commander: cardData.name,
        wincount: 0,
        totalgames: 0,
        lastresult: null,
        image: cardData.image_uris.art_crop,
        typeline: cardData.type_line,
      });

      setCommanderName('');
      
      const getData = async () => {
        try {
          let resp = await axios.get('https://65bc4e1752189914b5bdbc75.mockapi.io/commanderdecks');
          console.log(resp.data);
          setDecks(resp.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      getData();
      setErrorMessage('');
    } catch (error) {
      console.error('Error retrieving card:', error);
      setErrorMessage('Error: You Failed to Find the Card. Refine and Try Again.');
    }
  }

  function handleInputChange(event) {
    setCommanderName(event.target.value);
  }

  return (
    <div className='add-field'>
      <div className='form-floating d-grid'>
        <input
          className='form-control'
          type="text"
          placeholder="Commander Card Name"
          value={commanderName}
          onChange={handleInputChange}
        />
        <label>
          New Commander Deck
        </label>
        <button className="btn btn-primary btn-lg" type="button" onClick={handleAdd}>
          Add Deck
        </button>
        {errorMessage && (
          <div className="alert alert-danger mt-2">
            {errorMessage}
          </div>
        )}
        <h6 className='mt-2'>Powered by Scryfall API</h6>
      </div>
    </div>
  );
}

export default AddCommander;
