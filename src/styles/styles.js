export const styles = {
  colorCard: {
    base: {
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
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    name: {
      padding: '12px',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      fontSize: '14px',
      fontWeight: '500'
    },
    hex: {
      padding: '12px',
      fontFamily: 'Monaco, monospace',
      fontSize: '13px',
      letterSpacing: '0.5px',
      borderBottomLeftRadius: '12px',
      borderBottomRightRadius: '12px'
    },
    copyMessage: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.72)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 0.2s ease-out'
    }
  },
  homePage: {
    container: {
      minHeight: '100vh',
      padding: '40px 20px',
      transition: 'background 0.5s ease'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative'
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '40px',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px'
    },
    addButton: {
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
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  addColorPage: {
    container: {
      minHeight: '100vh',
      padding: '40px 20px',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.8))',
      backdropFilter: 'blur(20px) saturate(180%)'
    },
    form: {
      maxWidth: '800px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(16px) saturate(180%)',
      borderRadius: '28px',
      padding: '48px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 8px 24px -8px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      transform: 'translateY(0)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    subtitle: {
      color: '#1a1a1a',
      fontSize: '1.75rem',
      fontWeight: '700',
      marginBottom: '32px',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.02em'
    },
    input: {
      width: 'calc(100% - 36px)',
      padding: '18px',
      borderRadius: '16px',
      border: '2px solid rgba(238, 238, 238, 0.8)',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(8px)',
      '&:focus': {
        border: '2px solid rgba(0, 122, 255, 0.5)',
        boxShadow: '0 0 0 4px rgba(0, 122, 255, 0.1)',
        background: 'rgba(255, 255, 255, 0.95)'
      },
      '&::placeholder': {
        color: 'rgba(0, 0, 0, 0.4)'
      }
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontWeight: '600',
      color: '#1a1a1a',
      fontSize: '15px',
      letterSpacing: '0.01em'
    },
    error: {
      color: '#FF3B30',
      marginBottom: '20px',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      opacity: '0.9'
    },
    buttonGroup: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'flex-end',
      marginTop: '32px'
    },
    cancelButton: {
      padding: '16px 32px',
      borderRadius: '16px',
      border: '2px solid rgba(238, 238, 238, 0.8)',
      background: 'rgba(255, 255, 255, 0.8)',
      color: '#1a1a1a',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(8px)',
      '&:hover': {
        background: 'rgba(238, 238, 238, 0.8)',
        transform: 'translateY(-2px)'
      }
    },
    submitButton: {
      padding: '16px 36px',
      borderRadius: '16px',
      border: 'none',
      background: 'linear-gradient(135deg, #007AFF 0%, #00C6FB 100%)',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 24px rgba(0, 122, 255, 0.3)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 28px rgba(0, 122, 255, 0.35)'
      }
    },
    generateButton: {
      width: '100%',
      padding: '18px 36px',
      marginTop: '16px',
      borderRadius: '16px',
      border: 'none',
      background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 24px rgba(255, 107, 107, 0.25)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 28px rgba(255, 107, 107, 0.3)'
      },
      '&:disabled': {
        opacity: '0.7',
        cursor: 'not-allowed',
        transform: 'none'
      }
    },
    previewTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '20px',
      marginTop: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      '&::before': {
        content: '""',
        display: 'block',
        width: '4px',
        height: '24px',
        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
        borderRadius: '2px'
      }
    },
    previewGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      marginBottom: '24px',
      padding: '16px',
      background: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(8px)'
    },
    saveButton: {
      width: '100%',
      padding: '18px 36px',
      borderRadius: '16px',
      border: 'none',
      background: 'linear-gradient(135deg, #34C759 0%, #2ECC71 100%)',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 24px rgba(46, 204, 113, 0.25)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 28px rgba(46, 204, 113, 0.3)'
      }
    }
  }
};