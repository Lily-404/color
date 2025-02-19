import React, { useState, useEffect } from 'react';
import { styles } from '../styles/styles';

const ColorCard = ({ color, onMouseEnter, onMouseLeave }) => {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const rgb = hexToRgb(color.hex);
    setIsDark(isDarkColor(rgb));
  }, [color]);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const isDarkColor = (rgb) => {
    return (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) < 128;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      onClick={copyToClipboard}
      style={{
        ...styles.colorCard.base,
        backgroundColor: color.hex
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = -(x - centerX) / 10;

        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        e.currentTarget.style.boxShadow = `
          0 15px 35px rgba(0, 0, 0, 0.2),
          ${rotateY / 2}px ${rotateX / 2}px 15px rgba(0, 0, 0, 0.1)
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        onMouseLeave && onMouseLeave();
      }}
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
    >
      <div
        style={{
          ...styles.colorCard.name,
          color: isDark ? '#fff' : '#000'
        }}
      >
        {color.name}
      </div>
      <div
        style={{
          ...styles.colorCard.hex,
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(8px)',
          color: isDark ? '#fff' : '#000'
        }}
      >
        {color.hex.toUpperCase()}
      </div>
      {copied && (
        <div style={styles.colorCard.copyMessage}>
          已复制
        </div>
      )}
    </div>
  );
};

export default ColorCard;