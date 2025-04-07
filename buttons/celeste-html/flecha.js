function setupFlechaBack() {
    const flecha = document.getElementById('flechaBack');
    
    if (flecha) {
      flecha.addEventListener('click', () => {
        window.location.href = 'buttons/celeste-panel.html'; 
        // Opcional: añade transición antes de redirigir
        flecha.style.opacity = '0.7';
        setTimeout(() => {
          window.location.href = 'buttons/celeste-panel.html';
        }, 200);
      });
    }
  }
  
  // Ejecutar al cargar la página
  document.addEventListener('DOMContentLoaded', setupFlechaBack);