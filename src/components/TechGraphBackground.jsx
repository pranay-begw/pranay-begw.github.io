import React, { useEffect, useRef } from 'react';

const TechGraphBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        let width, height;

        // Comprehensive tech stack for full screen scatter
        const icons = [
            'https://cdn.simpleicons.org/javascript/ffffff',
            'https://cdn.simpleicons.org/typescript/ffffff',
            'https://cdn.simpleicons.org/react/ffffff',
            'https://cdn.simpleicons.org/nextdotjs/ffffff',
            'https://cdn.simpleicons.org/nodedotjs/ffffff',
            'https://cdn.simpleicons.org/python/ffffff',
            'https://cdn.simpleicons.org/django/ffffff',
            'https://cdn.simpleicons.org/flask/ffffff',
            'https://cdn.simpleicons.org/postgresql/ffffff',
            'https://cdn.simpleicons.org/mongodb/ffffff',
            'https://cdn.simpleicons.org/docker/ffffff',
            'https://cdn.simpleicons.org/amazonaws/ffffff',
            'https://cdn.simpleicons.org/github/ffffff',
            'https://cdn.simpleicons.org/tailwindcss/ffffff',
            'https://cdn.simpleicons.org/java/ffffff',
            'https://cdn.simpleicons.org/kotlin/ffffff',
            'https://cdn.simpleicons.org/android/ffffff',
            'https://cdn.simpleicons.org/mysql/ffffff',
            'https://cdn.simpleicons.org/redis/ffffff',
            'https://cdn.simpleicons.org/graphql/ffffff',
            'https://cdn.simpleicons.org/tensorflow/ffffff',
            'https://cdn.simpleicons.org/pytorch/ffffff',
            'https://cdn.simpleicons.org/pandas/ffffff',
            'https://cdn.simpleicons.org/numpy/ffffff',
            'https://cdn.simpleicons.org/scikitlearn/ffffff'
        ];

        const particles = [];
        const ICON_SIZE = 24;

        const mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Grid-based distribution for even spread
            const gridSize = 120; // Size of each grid cell
            const cols = Math.ceil(width / gridSize);
            const rows = Math.ceil(height / gridSize);

            particles.length = 0;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    // Only populate ~45% of grid cells to keep it sparse but even
                    if (Math.random() > 0.55) continue;

                    const iconUrl = icons[Math.floor(Math.random() * icons.length)];
                    const img = new Image();
                    img.crossOrigin = "anonymous";
                    img.src = iconUrl;

                    // Calculate position specific to this grid cell with some jitter
                    const jitter = gridSize * 0.4;
                    const x = (c * gridSize) + (gridSize / 2) + (Math.random() - 0.5) * jitter;
                    const y = (r * gridSize) + (gridSize / 2) + (Math.random() - 0.5) * jitter;

                    particles.push({
                        x: x,
                        y: y,
                        baseX: x,
                        baseY: y,
                        vx: 0,
                        vy: 0,
                        size: ICON_SIZE,
                        img: img,
                        density: (Math.random() * 20) + 5
                    });
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                // Physics: Mouse Repulsion
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = 150;
                let force = 0;

                if (distance < maxDistance) {
                    force = (maxDistance - distance) / maxDistance;
                    // Milder repulsion force
                    const directionX = forceDirectionX * force * p.density * 0.1;
                    const directionY = forceDirectionY * force * p.density * 0.1;

                    p.vx -= directionX;
                    p.vy -= directionY;
                }

                // Spring back to base position
                const homeDx = p.baseX - p.x;
                const homeDy = p.baseY - p.y;

                // Spring force (Ultra gentle return)
                p.vx += homeDx * 0.01;
                p.vy += homeDy * 0.01;

                // Friction (Max friction to kill almost all bounce)
                p.vx *= 0.90;
                p.vy *= 0.90;

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Draw node
                const isImageValid = p.img.complete && p.img.naturalWidth !== 0;

                if (isImageValid) {
                    ctx.globalAlpha = 0.9; // Slightly more transparent for scattered look
                    try {
                        ctx.drawImage(p.img, p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
                    } catch (e) {
                        // Silent fail 
                    }
                    ctx.globalAlpha = 1;
                } else {
                    // Fallback dot
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(45, 212, 191, 0.4)';
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', init);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        draw();

        return () => {
            window.removeEventListener('resize', init);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[-1] opacity-60 bg-dark-bg"
            style={{ filter: 'grayscale(100%) brightness(1.2)' }}
        />
    );
};

export default TechGraphBackground;
