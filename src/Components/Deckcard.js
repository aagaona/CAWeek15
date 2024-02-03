import axios from 'axios';
import React from 'react';

function Deckcard({ deck, setDecks }) {
  async function handleDelete(id) {
    try {
      await axios.delete(`https://65bc4e1752189914b5bdbc75.mockapi.io/commanderdecks/${id}`);

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
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  async function handleVictoryCount (deck,id){
    const winCount = deck.wincount;
    const totalCount = deck.totalgames;

    const updatedCount = {
        wincount: winCount+1,
        totalgames: totalCount+1,
        lastresult: true
    };

    try{
        await axios.put(`https://65bc4e1752189914b5bdbc75.mockapi.io/commanderdecks/${id}`, updatedCount);

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

    } catch (error) {
        console.error("Error fetching data:", error);
      }
  };

  async function handleTotalGamesCount (deck,id){
    const totalCount = deck.totalgames;

    const updatedCount = {
        totalgames: totalCount+1,
        lastresult: false
    };

    try{
        await axios.put(`https://65bc4e1752189914b5bdbc75.mockapi.io/commanderdecks/${id}`, updatedCount);

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

    } catch (error) {
        console.error("Error fetching data:", error);
      }
  };



  return (
    <div className='card'>
      <div className='card-body'>
        <span className='img-span'>
          <img src={deck.image} className='commander-pic' alt="Commander"/>
          <div class="overlay">
            <div class="text">Explore the Deck</div>
          </div>
        </span>
        <span className='data-span'>
          <h1>{deck.commander}</h1>
          <h6>{deck.typeline}</h6>
          <div>
            <h4>
              Wins: {deck.wincount}/{deck.totalgames}
            </h4>
          </div>
          <h5>
            Last Result: {deck.lastresult ? `🌟Sweet Victory!🌟` : `☠ You were Defeated ☠`}
          </h5>
          <button className='btn btn-primary count' onClick={() => handleVictoryCount(deck,deck.id)}>Victory</button>
          <button className='btn btn-danger count' onClick={() => handleTotalGamesCount(deck,deck.id)}>Defeat</button>
        </span>
      </div>
      <button className='btn btn-danger delete' onClick={() => handleDelete(deck.id)}>Delete Deck</button>
    </div>
  )
}

export default Deckcard;
