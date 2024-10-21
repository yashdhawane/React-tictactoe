// src/components/Board.tsx
import React from 'react';
import Square from './Square';
import { useRecoilState } from 'recoil';
import { calculateWinner } from '../utils/calculateWinner';
import { squaresState, isXNextState } from '../atom/state';
import styles from '../styles/Board.module.css';

const Board: React.FC = () => {

    // const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
    // const [isXNext, setIsXNext] = useState(true);
    const [squares, setSquares] = useRecoilState(squaresState);
    const [isXNext, setIsXNext] = useRecoilState(isXNextState);
  

  const handleClick = (index: number) => {
    const newSquares = [...squares];
    if (newSquares[index]) return;

    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index: number) => (
    <Square value={squares[index]} onClick={() => handleClick(index)} />
  );

  const winner = calculateWinner(squares);

  
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;



  return (
    <div>
      {winner ? (
        <div>
          <h3>🎉 Congratulations! {status} won the game! 🎉</h3>
          <button onClick={resetGame} className={styles.resetButton}>
            Restart Game
          </button>
        </div>
      ) : (
        // If no winner, show the game board and the game status
        <div>
          <h3>{status}</h3>
          <div className={styles.boardRow}>
            {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
          </div>
          <div className={styles.boardRow}>
            {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
          </div>
          <div className={styles.boardRow}>
            {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
          </div>
          <button onClick={resetGame} className={styles.resetButton}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );



};

export default Board;
