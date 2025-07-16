# 🎶 Caja de Música Interactiva

Una aplicación web que transforma la música en visualizaciones dinámicas y coloridas utilizando p5.js y análisis de audio en tiempo real.

## ✨ Características

- **Visualización de Audio en Tiempo Real**: Análisis FFT que convierte las frecuencias de audio en barras visuales dinámicas
- **Partículas Animadas**: Sistema de partículas que responde a la intensidad de la música
- **Paleta de Colores Violeta**: Diseño estético con degradados y efectos de brillo
- **Interactividad**: Haz clic en el canvas para generar nuevas partículas
- **Interfaz Intuitiva**: Botón de reproducción/pausa con feedback visual
- **Efectos Visuales**: Formas de onda, reflejos, y efectos de brillo

## 🚀 Demo

![Caja de Música](https://img.shields.io/badge/Estado-Funcional-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![p5.js](https://img.shields.io/badge/p5.js-1.4.0-red)

## 📁 Estructura del Proyecto

```
caja-musica/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y diseño visual
├── sketch.js           # Lógica principal de p5.js
├── assets/             # Archivos de audio
│   ├── Good-Kid_From-The-Start.mp3
│   └── [otros archivos de música]
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos, gradientes y efectos visuales
- **JavaScript (ES6)**: Lógica de la aplicación
- **p5.js**: Biblioteca para gráficos y animaciones
- **p5.sound.js**: Extensión para procesamiento de audio

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/caja-musica.git
   cd caja-musica
   ```

2. **Agrega tus archivos de música:**
   - Coloca tus archivos MP3 en la carpeta `assets/`
   - Actualiza la ruta en `sketch.js` línea 8:
   ```javascript
   song = loadSound('assets/tu-cancion.mp3');
   ```

3. **Ejecuta la aplicación:**
   - Abre `index.html` en tu navegador
   - O utiliza un servidor local como Live Server en VS Code

## 🎵 Uso

1. **Reproducir Música**: Haz clic en el botón "▶ Reproducir" para iniciar la visualización
2. **Interactuar**: Haz clic en cualquier parte del canvas para generar nuevas partículas
3. **Pausar**: Haz clic en "⏸ Pausar" para detener la reproducción
4. **Disfrutar**: Observa cómo las visualizaciones responden a la música en tiempo real

## 🔧 Personalización

### Cambiar Colores
Modifica la paleta de colores en `sketch.js`:
```javascript
colorPalette = [
    color(138, 43, 226),   // BlueViolet
    color(147, 112, 219),  // MediumPurple
    // Agrega más colores aquí
];
```

### Ajustar Partículas
Modifica la cantidad inicial de partículas:
```javascript
// Línea 41 en sketch.js
for (let i = 0; i < 20; i++) { // Cambia 20 por el número deseado
```

### Cambiar Dimensiones
Ajusta el tamaño del canvas:
```javascript
// Línea 10 en sketch.js
let canvas = createCanvas(400, 200); // Modifica ancho y alto
```

## 🎨 Características Técnicas

- **Análisis FFT**: Transformada rápida de Fourier para análisis de frecuencias
- **Renderizado 60 FPS**: Animaciones fluidas con p5.js
- **Partículas Responsivas**: Tamaño y comportamiento basado en la amplitud del audio
- **Gradientes Dinámicos**: Fondos que cambian según la música
- **Optimización**: Límite de partículas para mantener el rendimiento

## 🐛 Solución de Problemas

### La música no se reproduce
- Verifica que el archivo esté en la carpeta `assets/`
- Asegúrate de que el formato sea MP3
- Revisa la ruta en `sketch.js`

### No hay visualización
- Verifica que las bibliotecas p5.js se carguen correctamente
- Revisa la consola del navegador para errores
- Asegúrate de que el navegador permita la reproducción de audio

### Rendimiento lento
- Reduce el número de partículas
- Disminuye la resolución del canvas
- Cierra otras pestañas del navegador

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [p5.js](https://p5js.org/) - Biblioteca de gráficos creativa
- [p5.sound](https://p5js.org/reference/#/libraries/p5.sound) - Extensión de audio
- Inspirado en visualizadores de música clásicos

## 📧 Contacto

**Desarrollador**: Cande Molinari  
**Email**: candemolinari20@gmail.com
**GitHub**: https://github.com/Candex22

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!

**Hecho con 💜 y mucha música**
