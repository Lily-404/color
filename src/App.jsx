import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

const initialColors = [
  { hex: '#FF6B6B', name: 'Coral Red' },
  { hex: '#4ECDC4', name: 'Medium Turquoise' },
  { hex: '#45B7D1', name: 'Sky Blue' },
  { hex: '#96CEB4', name: 'Sage Green' },
  { hex: '#FFEEAD', name: 'Pale Yellow' },
  { hex: '#D4A5A5', name: 'Dusty Rose' },
  { hex: '#9B59B6', name: 'Purple' },
  { hex: '#3498DB', name: 'Blue' },
  { hex: '#1ABC9C', name: 'Turquoise' },
  { hex: '#2ECC71', name: 'Emerald' },
  { hex: '#F1C40F', name: 'Yellow' },
  { hex: '#E67E22', name: 'Orange' },
  { hex: '#F2F2F7', name: 'Light Gray' },
  { hex: '#007AFF', name: 'iOS Blue' },
  { hex: '#8E8E93', name: 'Gray' },
  { hex: '#FFFFFF', name: 'White' },
  { hex: '#D1D1D6', name: 'Silver' },
  { hex: '#4CD964', name: 'Green' },
  { hex: '#FF3B30', name: 'Red' },
  { hex: '#1c1c1e', name: 'Dark' },
  { hex: '#34C759', name: 'iOS Success' },
  { hex: '#FF9500', name: 'iOS Warning' },
  { hex: '#FF2D55', name: 'iOS Error' },
  { hex: '#5856D6', name: 'iOS Purple' },
  { hex: '#FF3B30', name: 'iOS Destructive' },
  { hex: '#30B0C7', name: 'iOS Tint' },
  { hex: '#64D2FF', name: 'iOS Light Blue' },
  { hex: '#98989D', name: 'iOS Secondary' },
];

const ColorCard = ({ color }) => {
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
        backgroundColor: color.hex,
        width: '180px',
        height: '120px',
        margin: '10px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
      }}
    >
      <div
        style={{
          padding: '12px',
          color: isDark ? '#fff' : '#000',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          fontSize: '14px',
          fontWeight: '500',
        }}
      >
        {color.name}
      </div>
      <div
        style={{
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(8px)',
          color: isDark ? '#fff' : '#000',
          padding: '12px',
          fontFamily: 'Monaco, monospace',
          fontSize: '13px',
          letterSpacing: '0.5px',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
      >
        {color.hex.toUpperCase()}
      </div>
      {copied && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          已复制
        </div>
      )}
    </div>
  );
};

const AddColorPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ hex: '', name: '' });
  const [error, setError] = useState('');
  const [previewColor, setPreviewColor] = useState('#FFFFFF');

  const handleSubmit = (e) => {
    e.preventDefault();
    const hexRegex = /^#([A-Fa-f0-9]{6})$/;
    
    if (!hexRegex.test(formData.hex)) {
      setError('请输入有效的十六进制颜色代码（例如：#FF0000）');
      return;
    }
    
    if (!formData.name.trim()) {
      setError('请输入颜色名称');
      return;
    }

    const newColor = {
      hex: formData.hex.toUpperCase(),
      name: formData.name.trim()
    };

    const existingColors = JSON.parse(localStorage.getItem('colors') || JSON.stringify(initialColors));
    localStorage.setItem('colors', JSON.stringify([...existingColors, newColor]));
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${previewColor}20 0%, #ffffff 100%)`,
      padding: '40px 20px',
      transition: 'background 0.3s ease',
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#1a1a1a',
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '32px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        }}>
          添加新颜色
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a1a1a',
              }}
            >
              颜色代码
            </label>
            <input
              type="text"
              value={formData.hex}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, hex: value });
                if (/^#([A-Fa-f0-9]{6})$/.test(value)) {
                  setPreviewColor(value);
                }
              }}
              placeholder="#FF0000"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: '2px solid #eee',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a1a1a',
              }}
            >
              颜色名称
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="例如：经典红"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: '2px solid #eee',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
            />
          </div>
          {error && (
            <div style={{
              color: '#FF3B30',
              marginBottom: '20px',
              fontSize: '14px',
            }}>
              {error}
            </div>
          )}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => navigate('/')}
              style={{
                padding: '16px 32px',
                borderRadius: '12px',
                border: '2px solid #eee',
                background: 'transparent',
                color: '#1a1a1a',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
            >
              取消
            </button>
            <button
              type="submit"
              style={{
                padding: '16px 32px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #007AFF 0%, #00C6FB 100%)',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 122, 255, 0.3)',
              }}
            >
              添加
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [hoverColor, setHoverColor] = useState(null);
  const [colors, setColors] = useState(initialColors);
  const navigate = useNavigate();

  useEffect(() => {
    const savedColors = localStorage.getItem('colors');
    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: hoverColor
        ? `linear-gradient(135deg, ${hoverColor} 0%, #ffffff 100%)`
        : 'linear-gradient(135deg, #f6f7f9 0%, #ffffff 100%)',
      padding: '40px 20px',
      transition: 'background 0.5s ease',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}>
        <button
          onClick={() => navigate('/add')}
          style={{
            position: 'fixed',
            right: '40px',
            bottom: '40px',
            width: '60px',
            height: '60px',
            borderRadius: '30px',
            border: 'none',
            background: 'rgba(0, 122, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            cursor: 'pointer',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 122, 255, 0.25)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 40px rgba(0, 122, 255, 0.35)',
            },
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 style={{
          textAlign: 'center',
          color: '#1a1a1a',
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '40px',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          颜色调色板
        </h1>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}>
          {colors.map((color) => (
            <ColorCard
              key={color.hex}
              color={color}
              onMouseEnter={() => setHoverColor(color.hex)}
              onMouseLeave={() => setHoverColor(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddColorPage />} />
      </Routes>
    </Router>
  );
};

export default App;