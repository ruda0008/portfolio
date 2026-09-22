import React, { useEffect, useRef } from 'react';

/**
 * StarryBackground
 * An interactive, high-performance celestial starfield & constellation canvas
 * crafted specifically to harmonize with both the warm cream (Light) and
 * warm charcoal (Dark) palettes of the portfolio.
 * 
 * Enhanced with crisp celestial cartography contrast for high visibility in Light mode.
 */
export default function StarryBackground({ theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Track mouse position smoothly
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 145,
      active: false,
    };

    const isDark = theme === 'dark';

    // Color palettes tuned for high aesthetics & contrast in both themes
    const starColorsDark = [
      'rgba(255, 248, 238, ', // Soft warm ivory
      'rgba(219, 138, 102, ', // Claude clay / terracotta accent
      'rgba(251, 211, 141, ', // Warm golden amber
      'rgba(235, 185, 155, ', // Dusty peach
    ];

    // Light mode palette: crisp celestial cartography contrast on cream paper
    const starColorsLight = [
      'rgba(215, 80, 35, ',   // Vibrant terracotta clay
      'rgba(180, 100, 25, ',  // Deep warm golden amber
      'rgba(60, 50, 75, ',    // Deep celestial slate ink
      'rgba(195, 65, 45, ',   // Deep terracotta rust
      'rgba(85, 75, 100, ',   // Twilight astronomical ink
    ];

    const starColors = isDark ? starColorsDark : starColorsLight;

    // Shooting stars array
    const shootingStars = [];
    let lastShootingStarTime = performance.now();

    function createShootingStar() {
      const startX = Math.random() * (width * 0.85);
      const startY = Math.random() * (height * 0.45);
      const angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 degrees downward
      const speed = isDark ? (7 + Math.random() * 5) : (8 + Math.random() * 5);
      const length = 75 + Math.random() * 65;
      
      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        life: 0,
        maxLife: 45 + Math.random() * 20,
        color: isDark ? '255, 235, 205' : '215, 80, 35',
      });
    }

    // Determine particle count based on viewport area
    const area = width * height;
    const baseCount = Math.floor(area / (isDark ? 10500 : 9000));
    const starCount = Math.max(50, Math.min(baseCount, 140));

    // Initialize stars with crisp sizing for light mode visibility
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      let radius;
      if (isDark) {
        radius = Math.random() < 0.70 
          ? 0.85 + Math.random() * 0.75 
          : Math.random() < 0.90 
            ? 1.6 + Math.random() * 0.6 
            : 2.3 + Math.random() * 0.8;
      } else {
        // Light mode: larger, crisper radii so stars are distinctly noticeable on cream paper
        radius = Math.random() < 0.55
          ? 1.25 + Math.random() * 0.75  // 1.25px - 2.0px
          : Math.random() < 0.85
            ? 1.9 + Math.random() * 0.7   // 1.9px - 2.6px
            : 2.7 + Math.random() * 0.9;  // 2.7px - 3.6px (prominent focal stars)
      }

      const isFocal = isDark ? radius > 2.0 : radius > 2.5;

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isDark ? 0.22 : 0.28),
        vy: (Math.random() - 0.5) * (isDark ? 0.22 : 0.28),
        radius,
        colorBase: starColors[Math.floor(Math.random() * starColors.length)],
        // Higher base alpha in light mode for unmistakable contrast
        baseAlpha: isDark ? 0.38 + Math.random() * 0.50 : 0.55 + Math.random() * 0.40,
        twinkleSpeed: 0.015 + Math.random() * 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
        isFocal,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    // Animation loop
    let isVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      // Smooth mouse interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      // Check shooting star trigger
      if (currentTime - lastShootingStarTime > 7000 + Math.random() * 4000) {
        createShootingStar();
        lastShootingStarTime = currentTime;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Constellation filaments between close stars
      const connectionDist = isDark ? 95 : 90;
      const connectionDistSq = connectionDist * connectionDist;

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistSq) {
            const dist = Math.sqrt(distSq);
            // More prominent line alpha in light mode so constellation threads are clearly visible
            const lineAlpha = (1 - dist / connectionDist) * (isDark ? 0.15 : 0.28);
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(219, 138, 102, ${lineAlpha})`
              : `rgba(198, 96, 60, ${lineAlpha})`;
            ctx.lineWidth = isDark ? 0.65 : 0.95;
            ctx.stroke();
          }
        }
      }

      // 2. Filaments from stars to cursor
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < stars.length; i++) {
          const dx = mouse.x - stars[i].x;
          const dy = mouse.y - stars[i].y;
          const distSq = dx * dx + dy * dy;
          const mRadiusSq = mouse.radius * mouse.radius;

          if (distSq < mRadiusSq) {
            const dist = Math.sqrt(distSq);
            const mAlpha = (1 - dist / mouse.radius) * (isDark ? 0.24 : 0.42);
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark
              ? `rgba(251, 211, 141, ${mAlpha})`
              : `rgba(215, 80, 35, ${mAlpha})`;
            ctx.lineWidth = isDark ? 0.75 : 1.1;
            ctx.stroke();

            // Gentle magnetic pull towards cursor
            const force = (1 - dist / mouse.radius) * (isDark ? 0.6 : 0.8);
            stars[i].x += (dx / dist) * force;
            stars[i].y += (dy / dist) * force;
          }
        }
      }

      // 3. Update & render stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Drift slowly
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges with slight padding
        if (star.x < -20) star.x = width + 20;
        else if (star.x > width + 20) star.x = -20;
        if (star.y < -20) star.y = height + 20;
        else if (star.y > height + 20) star.y = -20;

        // Twinkle calculation
        star.twinklePhase += star.twinkleSpeed;
        const twinkleFactor = 0.5 + 0.5 * Math.sin(star.twinklePhase);
        const currentAlpha = star.baseAlpha * (0.65 + 0.35 * twinkleFactor);

        // Draw star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.colorBase}${currentAlpha})`;
        ctx.fill();

        // Prominent / focal stars have an outer glow halo and diamond sparkle spikes
        if (star.isFocal) {
          // Soft outer halo
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * (isDark ? 2.8 : 2.2), 0, Math.PI * 2);
          ctx.fillStyle = `${star.colorBase}${currentAlpha * (isDark ? 0.22 : 0.25)})`;
          ctx.fill();

          // Delicate 4-point cross diffraction sparkle
          const spikeLen = (star.radius * 2.6) * (0.7 + 0.3 * twinkleFactor);
          ctx.beginPath();
          // Horizontal
          ctx.moveTo(star.x - spikeLen, star.y);
          ctx.lineTo(star.x + spikeLen, star.y);
          // Vertical
          ctx.moveTo(star.x, star.y - spikeLen);
          ctx.lineTo(star.x + spikeLen, star.y);
          ctx.strokeStyle = `${star.colorBase}${currentAlpha * (isDark ? 0.55 : 0.80)})`;
          ctx.lineWidth = isDark ? 0.55 : 0.95;
          ctx.stroke();
        }
      }

      // 4. Render shooting stars / meteors
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const meteor = shootingStars[i];
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life++;

        const progress = meteor.life / meteor.maxLife;
        const trailAlpha = (1 - progress) * (isDark ? 0.75 : 0.85);

        // Draw gradient streak
        const tailX = meteor.x - (meteor.vx / Math.hypot(meteor.vx, meteor.vy)) * meteor.length;
        const tailY = meteor.y - (meteor.vy / Math.hypot(meteor.vx, meteor.vy)) * meteor.length;

        const grad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        grad.addColorStop(0, `rgba(${meteor.color}, 0)`);
        grad.addColorStop(0.65, `rgba(${meteor.color}, ${trailAlpha * 0.45})`);
        grad.addColorStop(1, `rgba(${meteor.color}, ${trailAlpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = isDark ? 1.4 : 2.0;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Bright tip
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, isDark ? 1.2 : 1.8, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${trailAlpha})` : `rgba(215, 80, 35, ${trailAlpha})`;
        ctx.fill();

        if (meteor.life >= meteor.maxLife || meteor.x > width + 50 || meteor.y > height + 50) {
          shootingStars.splice(i, 1);
        }
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
