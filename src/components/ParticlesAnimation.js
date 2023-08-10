import React, { useRef, useEffect } from 'react';

const ParticlesAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // قم بتعيين حجم عنصر الكانفاس بنفس حجم الشاشة
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // قم بتعيين خصائص الجسيمات (لون وحجم وسرعة)
    const particlesCount = 100;
    const particles = [];
    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 1,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
      });
    }

    // قم بتحديث حركة الجسيمات ورسمها على الكانفاس
    const drawParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'rgba(255, 255, 255, 0.7)';

      particles.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        // اعادة تعيين موقع الجسيمات عند الخروج من الشاشة
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.x = Math.random() * canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(drawParticles);
    };

    // بدء الرسم وتحديث الحركة
    drawParticles();

    // قم بتنظيف الكانفاس عند إلغاء المكون
    return () => cancelAnimationFrame(drawParticles);
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default ParticlesAnimation;
