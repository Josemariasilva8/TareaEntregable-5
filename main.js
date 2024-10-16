function changeTheme(color) {
    const root = document.documentElement; // Seleccionamos el elemento <html> (el root)
    
    if (color === 'blue') {
        root.style.setProperty('--bg-color', '#87CEEB');  // Celeste
        root.style.setProperty('--text-color', '#00008B'); // Azul oscuro
    } else if (color === 'green') {
        root.style.setProperty('--bg-color', '#98FB98');  // Verde claro
        root.style.setProperty('--text-color', '#006400'); // Verde oscuro
    } else if (color === 'red') {
        root.style.setProperty('--bg-color', '#FFB6C1');  // Rosa claro
        root.style.setProperty('--text-color', '#8B0000'); // Rojo oscuro
    }
}

// Función para restablecer el tema predeterminado (blanco y negro)
function resetTheme() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', 'white');
    root.style.setProperty('--text-color', 'black');
}