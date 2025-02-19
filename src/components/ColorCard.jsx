import React, { useState, useEffect } from 'react';
import { styles } from '../styles/styles';

const ColorCard = ({ color, onMouseEnter, onMouseLeave, onDelete }) => {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

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
    if (!showDeleteButton) {
      navigator.clipboard.writeText(color.hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete && onDelete(color);
  };

  return (
    <div
      onClick={copyToClipboard}
      onMouseEnter={() => {
        setShowDeleteButton(true);
        onMouseEnter && onMouseEnter();
      }}
      onMouseLeave={(e) => {
        setShowDeleteButton(false);
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        onMouseLeave && onMouseLeave();
      }}
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
        const rotateX = (y - centerY) / 5; // 增加旋转角度
        const rotateY = -(x - centerX) / 5;

        e.currentTarget.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08, 1.08, 1.08)`;
        e.currentTarget.style.boxShadow = `
          0 20px 50px rgba(0, 0, 0, 0.3),
          ${rotateY}px ${rotateX}px 20px rgba(0, 0, 0, 0.15)
        `;
      }}
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
      {showDeleteButton && (
        <div
          onClick={handleDelete}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
            color: isDark ? '#fff' : '#000',
            borderRadius: '12px',
            cursor: 'pointer',
            opacity: '0.8',
            transition: 'all 0.2s ease',
            backdropFilter: 'blur(8px)',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.8';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ColorCard;