import React, { useEffect } from 'react'
import axios from 'axios'


function MockApi({decks,setDecks}) {

    
    const url  = `https://65bc4e1752189914b5bdbc75.mockapi.io/commanderdecks`;

    useEffect(() => {
        const getData = async () => {
            try {
                let resp = await axios.get(url);
                console.log(resp.data);
                setDecks(resp.data);
            } catch (error) {console.error("Error fetching data:", error);
            };
        };

        getData();
    },[]);

  
    return (
    <div>

    </div>
  )
}

export default MockApi