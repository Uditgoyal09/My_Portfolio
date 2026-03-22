import { useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   AnimatedBackground
   – Canvas-based: floating orbs, drifting grid lines,
     mouse-reactive spotlight, shooting stars, and
     a subtle noise-grain overlay.
   Usage:
     <AnimatedBackground />          ← fixed behind everything
     <AnimatedBackground zIndex={0} accentColor="#00e5a0" />
══════════════════════════════════════════════════════ */

const AnimatedBackground = ({
  accentColor = "#00e5a0",
  accentColor2 = "#00b4ff",
  zIndex = -1,
}) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef(null);

  /* parse hex → rgb components */
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  };

  const c1 = hexToRgb(accentColor);
  const c2 = hexToRgb(accentColor2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    /* ── Resize ── */
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    /* ── Mouse ── */
    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouse);

    /* ════════════════════════
       1. ORBS
    ════════════════════════ */
    const NUM_ORBS = 6;
    const orbs = Array.from({ length: NUM_ORBS }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 180 + Math.random() * 220,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: i % 2 === 0 ? c1 : c2,
      alpha: 0.045 + Math.random() * 0.04,
    }));

    const drawOrbs = () => {
      orbs.forEach((o) => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r) o.x = W + o.r;
        if (o.x > W + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = H + o.r;
        if (o.y > H + o.r) o.y = -o.r;

        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, `rgba(${o.color},${o.alpha})`);
        g.addColorStop(1, `rgba(${o.color},0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });
    };

    /* ════════════════════════
       2. GRID LINES (drifting)
    ════════════════════════ */
    let gridOffset = 0;
    const GRID_SIZE = 70;

    const drawGrid = () => {
      gridOffset = (gridOffset + 0.15) % GRID_SIZE;
      ctx.save();
      ctx.strokeStyle = `rgba(${c1},0.04)`;
      ctx.lineWidth = 0.5;

      for (let x = -GRID_SIZE + gridOffset; x < W + GRID_SIZE; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = -GRID_SIZE + gridOffset; y < H + GRID_SIZE; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      ctx.restore();
    };

    /* ════════════════════════
       3. MOUSE SPOTLIGHT
    ════════════════════════ */
    const drawSpotlight = () => {
      const { x, y } = mouseRef.current;
      if (x < 0) return;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 320);
      g.addColorStop(0, `rgba(${c1},0.055)`);
      g.addColorStop(0.5, `rgba(${c1},0.018)`);
      g.addColorStop(1, `rgba(${c1},0)`);
      ctx.beginPath();
      ctx.arc(x, y, 320, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    };

    /* ════════════════════════
       4. SHOOTING STARS
    ════════════════════════ */
    class Star {
      constructor() { this.reset(true); }
      reset(initial = false) {
        this.x = Math.random() * W;
        this.y = initial ? Math.random() * H : -10;
        this.len = 60 + Math.random() * 120;
        this.speed = 3 + Math.random() * 5;
        this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3;
        this.alpha = 0;
        this.fadeIn = true;
        this.color = Math.random() > 0.5 ? c1 : c2;
        this.life = 0;
        this.maxLife = 80 + Math.random() * 60;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life++;
        if (this.life < 20) this.alpha = this.life / 20;
        else if (this.life > this.maxLife - 20) this.alpha = (this.maxLife - this.life) / 20;
        else this.alpha = 1;
        if (this.life >= this.maxLife || this.x > W + 50 || this.y > H + 50) this.reset();
      }
      draw() {
        const tail = {
          x: this.x - Math.cos(this.angle) * this.len,
          y: this.y - Math.sin(this.angle) * this.len,
        };
        const g = ctx.createLinearGradient(tail.x, tail.y, this.x, this.y);
        g.addColorStop(0, `rgba(${this.color},0)`);
        g.addColorStop(1, `rgba(${this.color},${this.alpha * 0.8})`);
        ctx.beginPath();
        ctx.moveTo(tail.x, tail.y);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // glowing tip
        const tipG = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 4);
        tipG.addColorStop(0, `rgba(${this.color},${this.alpha})`);
        tipG.addColorStop(1, `rgba(${this.color},0)`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = tipG;
        ctx.fill();
      }
    }

    const NUM_STARS = 4;
    const stars = Array.from({ length: NUM_STARS }, () => new Star());

    const drawStars = () => {
      stars.forEach((s) => { s.update(); s.draw(); });
    };

    /* ════════════════════════
       5. FLOATING DOTS
    ════════════════════════ */
    const NUM_DOTS = 40;
    const dots = Array.from({ length: NUM_DOTS }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.8 + Math.random() * 1.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: 0.1 + Math.random() * 0.3,
      color: Math.random() > 0.5 ? c1 : c2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    }));

    const drawDots = () => {
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        d.pulse += d.pulseSpeed;
        if (d.x < 0) d.x = W;
        if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H;
        if (d.y > H) d.y = 0;

        const a = d.alpha * (0.7 + 0.3 * Math.sin(d.pulse));
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 3);
        g.addColorStop(0, `rgba(${d.color},${a})`);
        g.addColorStop(1, `rgba(${d.color},0)`);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });
    };

    /* ════════════════════════
       6. CORNER BEAMS
    ════════════════════════ */
    let beamT = 0;
    const drawBeams = () => {
      beamT += 0.005;
      const a = 0.03 + 0.015 * Math.sin(beamT);

      // top-left beam
      const g1 = ctx.createLinearGradient(0, 0, W * 0.5, H * 0.4);
      g1.addColorStop(0, `rgba(${c1},${a})`);
      g1.addColorStop(1, `rgba(${c1},0)`);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(W * 0.5, H * 0.4);
      ctx.lineTo(0, H * 0.3);
      ctx.closePath();
      ctx.fillStyle = g1;
      ctx.fill();

      // bottom-right beam
      const g2 = ctx.createLinearGradient(W, H, W * 0.5, H * 0.6);
      g2.addColorStop(0, `rgba(${c2},${a})`);
      g2.addColorStop(1, `rgba(${c2},0)`);
      ctx.beginPath();
      ctx.moveTo(W, H);
      ctx.lineTo(W * 0.5, H * 0.6);
      ctx.lineTo(W, H * 0.7);
      ctx.closePath();
      ctx.fillStyle = g2;
      ctx.fill();
    };

    /* ════════════════════════
       MAIN LOOP
    ════════════════════════ */
    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      // base dark bg
      ctx.fillStyle = "#080c10";
      ctx.fillRect(0, 0, W, H);

      drawBeams();
      drawGrid();
      drawOrbs();
      drawSpotlight();
      drawDots();
      drawStars();

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [c1, c2]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
};

export default AnimatedBackground;
