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
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
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
      transition: 'background 0.3s ease'
    },
    form: {
      maxWidth: '600px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    },
    title: {
      textAlign: 'center',
      color: '#1a1a1a',
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '32px',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    },
    input: {
      width: '100%',
      padding: '16px',
      borderRadius: '12px',
      border: '2px solid #eee',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500',
      color: '#1a1a1a'
    },
    error: {
      color: '#FF3B30',
      marginBottom: '20px',
      fontSize: '14px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end'
    },
    cancelButton: {
      padding: '16px 32px',
      borderRadius: '12px',
      border: '2px solid #eee',
      background: 'transparent',
      color: '#1a1a1a',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s ease'
    },
    submitButton: {
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      background: 'linear-gradient(135deg, #007AFF 0%, #00C6FB 100%)',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 122, 255, 0.3)'
    }
  }
};