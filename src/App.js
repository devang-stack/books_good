import React from 'react';
import { useState } from 'react';

import './App.css';

const db = {
  JavaScript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      author: "By-: Marjin Haverbeke"
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
      author: "By-: Kyle Simpson"
    },
  ],
  GeneralComputer: [
    {
      name: "Nand2Tetris",
      rating: "4.5/5",
      author: "By-: Noam Nisan(MIT Press)",
    },
  ],
  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      author: "By-: Amish Tripathi"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      author: "By-: J.K. Rowling",
    },
  ],
}



function App() {
  const [selectedGenre, setGenre] = useState("GeneralComputer")
  function clickHandler(genre) {
    setGenre(genre)

  }

  return (
    <div className="App">
      <h1>Good Books📚📚📖📕</h1>

      <div>
        {Object.keys(db).map((genre) => (
          <button
            style={{
              padding: "0.5rem 1rem",
              margin: "0.5rem 0.5rem",
              border: "1px solid black",
              borderRadius: "0.5rem",
              backgroundColor: "#6EE7B7",
              cursor: "pointer"

            }}
            onClick={() => clickHandler(genre)}>
            {genre}
          </button>
        ))
        }
      </div>

      <div>
        
          {db[selectedGenre].map((book) => (
            <ul style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid #D1D5DB",
              width: "80%",
              margin: "1rem 5rem",
              borderRadius: "0.5rem",
              textAlign: "center"
            }}>
              <li style={{ fontSize: "larger", textAlign: 'center' }}>{book.name}</li>
              <li style={{ fontSize: "smaller", textAlign: 'center' }}>{book.rating}</li>
              <li style={{ fontSize: "smaller", textAlign: 'center' }}>{book.author}</li>
            </ul>
          ))}
        

      </div>

    </div>
  );
}

export default App;
