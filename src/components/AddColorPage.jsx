import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles/styles';
import { initialColors } from '../constants/colors';
import { HexColorPicker } from 'react-colorful';
import { generateColorScheme } from '../services/colorAI';
import ColorCard from './ColorCard';

const AddColorPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ hex: '', name: '' });
  const [error, setError] = useState('');
  const [previewColor, setPreviewColor] = useState('#FFFFFF');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedColors, setGeneratedColors] = useState([]);
  const [apiKey, setApiKey] = useState(localStorage.getItem('moonshotApiKey') || '');

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

  const handleGenerateColors = async () => {
    if (!description.trim()) {
      setError('请输入颜色风格描述');
      return;
    }
    if (!apiKey.trim()) {
      setError('请输入API密钥');
      return;
    }
    setIsGenerating(true);
    setError('');
    try {
      const colors = await generateColorScheme(description, apiKey);
      if (colors && colors.length > 0) {
        setGeneratedColors(colors);
        localStorage.setItem('moonshotApiKey', apiKey);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{
      ...styles.addColorPage.container,
      background: `linear-gradient(135deg, ${previewColor}20 0%, #ffffff 100%)`
    }}>
      <div style={styles.addColorPage.form}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={styles.addColorPage.subtitle}>
            AI配色
          </h2>
          <div style={{ marginBottom: '20px' }}>
            <label style={styles.addColorPage.label}>
              API密钥
            </label>
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="请输入Moonshot API密钥"
              style={styles.addColorPage.input}
            />
            <label style={styles.addColorPage.label}>
              描述颜色风格
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="例如：温暖的秋季配色"
              style={styles.addColorPage.input}
            />
            <button
              type="button"
              onClick={handleGenerateColors}
              disabled={isGenerating}
              style={{
                ...styles.addColorPage.generateButton,
                opacity: isGenerating ? 0.7 : 1
              }}
            >
              {isGenerating ? '生成中...' : '生成配色方案'}
            </button>
          </div>
          {generatedColors.length > 0 && (
            <div>
              <h3 style={styles.addColorPage.previewTitle}>
                {description} - 配色方案
              </h3>
              <div style={styles.addColorPage.previewGrid}>
                {generatedColors.map((color) => (
                  <ColorCard
                    key={color.hex}
                    color={color}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleSaveGeneratedColors}
                style={styles.addColorPage.saveButton}
              >
                保存配色方案
              </button>
            </div>
          )}
        </div>
        <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
          <h2 style={styles.addColorPage.subtitle}>
            手动添加颜色
          </h2>
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
    </div>
  );
};

export default AddColorPage;