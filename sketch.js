let song;
let fft;
let playButton;
let playing = false;
let particles = [];
let colorPalette = [];

function preload() {
    song = loadSound('assets/Legendary.mp3');
    song = loadSound('assets/Good-Kid_From-The-Start.mp3');
    song = null;
}

function setup() {
    let canvas = createCanvas(400, 200);
    canvas.parent('musicBox');
    
    playButton = select('#playButton');
    playButton.mousePressed(togglePlay);
    
    // Crear paleta de colores violetita
    colorPalette = [
        color(138, 43, 226),   // BlueViolet
        color(147, 112, 219),  // MediumPurple
        color(186, 85, 211),   // MediumOrchid
        color(148, 0, 211),    // DarkViolet
        color(153, 50, 204),   // DarkOrchid
        color(199, 21, 133)    // MediumVioletRed
    ];
    
    // Si no hay archivo de música, crear un oscilador para demo
    if (!song) {
        song = new p5.Oscillator('sine');
        song.freq(440);
        song.amp(0.1);
    }
    
    fft = new p5.FFT();
    fft.setInput(song);
    
    // Inicializar partículas
    for (let i = 0; i < 20; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            size: random(2, 6),
            speed: random(0.5, 2),
            color: random(colorPalette)
        });
    }
}

function draw() {
    // Fondo degradado violetita
    drawGradientBackground();
    
    // Obtener datos de frecuencia
    let spectrum = fft.analyze();
    let waveform = fft.waveform();
    
    // Dibujar barras de frecuencia
    drawFrequencyBars(spectrum);
    
    // Dibujar forma de onda
    drawWaveform(waveform);
    
    // Actualizar y dibujar partículas
    updateParticles(spectrum);
    
    // Efecto de brillo si está reproduciendo
    if (playing) {
        drawGlowEffect();
    }
}

function drawGradientBackground() {
    for (let i = 0; i <= height; i++) {
        let inter = map(i, 0, height, 0, 1);
        let c = lerpColor(color(248, 240, 255), color(230, 204, 255), inter);
        stroke(c);
        line(0, i, width, i);
    }
}

function drawFrequencyBars(spectrum) {
    noStroke();
    let barWidth = width / 64;
    
    for (let i = 0; i < spectrum.length; i += 8) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h = map(spectrum[i], 0, 255, 0, height * 0.8);
        
        // Seleccionar color de la paleta basado en la frecuencia
        let colorIndex = Math.floor(map(i, 0, spectrum.length, 0, colorPalette.length));
        let barColor = colorPalette[colorIndex % colorPalette.length];
        
        // Añadir transparencia basada en la amplitud
        let alpha = map(spectrum[i], 0, 255, 50, 255);
        barColor.setAlpha(alpha);
        
        fill(barColor);
        rect(x, height - h, barWidth, h);
        
        // Añadir reflejo
        let reflectionColor = color(red(barColor), green(barColor), blue(barColor), alpha * 0.3);
        fill(reflectionColor);
        rect(x, height - h - 5, barWidth, 3);
    }
}

function drawWaveform(waveform) {
    stroke(138, 43, 226, 150);
    strokeWeight(2);
    noFill();
    
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, height * 0.3, height * 0.7);
        vertex(x, y);
    }
    endShape();
}

function updateParticles(spectrum) {
    let avgAmplitude = 0;
    for (let i = 0; i < spectrum.length; i += 10) {
        avgAmplitude += spectrum[i];
    }
    avgAmplitude /= (spectrum.length / 10);
    
    for (let particle of particles) {
        // Mover partícula
        particle.x += particle.speed;
        if (particle.x > width) particle.x = 0;
        
        // Hacer que el tamaño responda a la música
        let responsiveSize = particle.size + map(avgAmplitude, 0, 255, 0, 3);
        
        // Dibujar partícula
        fill(particle.color);
        noStroke();
        ellipse(particle.x, particle.y, responsiveSize);
        
        // Estela de partícula
        fill(red(particle.color), green(particle.color), blue(particle.color), 50);
        ellipse(particle.x - 5, particle.y, responsiveSize * 0.7);
    }
}

function drawGlowEffect() {
    // Efecto de brillo en los bordes
    stroke(186, 85, 211, 100);
    strokeWeight(3);
    noFill();
    rect(2, 2, width - 4, height - 4);
    
    stroke(199, 21, 133, 50);
    strokeWeight(1);
    rect(1, 1, width - 2, height - 2);
}

function togglePlay() {
    if (playing) {
        if (song.stop) {
            song.stop();
        } else {
            song.amp(0);
        }
        playButton.html('▶ Reproducir');
    } else {
        if (song.play) {
            song.loop();
        } else {
            song.start();
            song.amp(0.1);
        }
        playButton.html('⏸ Pausar');
    }
    playing = !playing;
}

// Función para añadir interactividad con el mouse
function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        // Añadir nueva partícula en la posición del mouse
        particles.push({
            x: mouseX,
            y: mouseY,
            size: random(3, 8),
            speed: random(1, 3),
            color: random(colorPalette)
        });
        
        // Limitar el número de partículas
        if (particles.length > 50) {
            particles.shift();
        }
    }
}