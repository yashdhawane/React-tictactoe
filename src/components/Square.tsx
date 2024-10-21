// src/components/Square.tsx
import React from 'react';
import styles from '../styles/Board.module.css';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
