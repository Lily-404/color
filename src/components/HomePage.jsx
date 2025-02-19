import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles/styles';
import ColorCard from './ColorCard';
import { initialColors } from '../constants/colors';

const HomePage = () => {
  const [hoverColor, setHoverColor] = useState(null);
  const [colors, setColors] = useState(initialColors);
  const navigate = useNavigate();

  const handleDeleteColor = (colorToDelete) => {
    const updatedColors = colors.filter(color => color.hex !== colorToDelete.hex);
    setColors(updatedColors);
    localStorage.setItem('colors', JSON.stringify(updatedColors));
  };

  useEffect(() => {
    const savedColors = localStorage.getItem('colors');
    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }
  }, []);

  return (
    <div style={{
      ...styles.homePage.container,
      background: hoverColor
        ? `linear-gradient(135deg, ${hoverColor} 0%, #ffffff 100%)`
        : 'linear-gradient(135deg, #f6f7f9 0%, #ffffff 100%)'
    }}>
      <div style={styles.homePage.content}>
        <button
          onClick={() => navigate('/add')}
          style={styles.homePage.addButton}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 style={styles.homePage.title}>
          颜色调色板
        </h1>
        <div style={styles.homePage.grid}>
          {colors.map((color) => (
            <ColorCard
              key={color.hex}
              color={color}
              onMouseEnter={() => setHoverColor(color.hex)}
              //保留了上一个颜色的状态
              // onMouseLeave={() => setHoverColor(null)}
              onDelete={handleDeleteColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;