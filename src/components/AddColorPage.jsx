import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles/styles';
import { initialColors } from '../constants/colors';
import { HexColorPicker } from 'react-colorful';

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
      ...styles.addColorPage.container,
      background: `linear-gradient(135deg, ${previewColor}20 0%, #ffffff 100%)`
    }}>
      <div style={styles.addColorPage.form}>
        <h1 style={styles.addColorPage.title}>
          添加新颜色
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={styles.addColorPage.label}>
              选择颜色
            </label>
            <div style={{ marginBottom: '15px' }}>
              <HexColorPicker
                color={formData.hex || '#ffffff'}
                onChange={(color) => {
                  setFormData({ ...formData, hex: color });
                  setPreviewColor(color);
                }}
                style={{ width: '100%', height: '200px' }}
              />
            </div>
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
              style={styles.addColorPage.input}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={styles.addColorPage.label}>
              颜色名称
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="例如：经典红"
              style={styles.addColorPage.input}
            />
          </div>
          {error && (
            <div style={styles.addColorPage.error}>
              {error}
            </div>
          )}
          <div style={styles.addColorPage.buttonGroup}>
            <button
              type="button"
              onClick={() => navigate('/')}
              style={styles.addColorPage.cancelButton}
            >
              取消
            </button>
            <button
              type="submit"
              style={styles.addColorPage.submitButton}
            >
              添加
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddColorPage;