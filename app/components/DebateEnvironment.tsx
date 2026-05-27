"use client";

import { useEffect, useRef } from "react";

export default function DebateEnvironment() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ---- CURSOR LOGIC ----
        const cur = cursorRef.current;
        const ring = ringRef.current;
        if (!cur || !ring) return;

        let mx = 0, my = 0, rx = 0, ry = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            cur.style.left = `${mx}px`;
            cur.style.top = `${my}px`;
        };

        document.addEventListener("mousemove", handleMouseMove);

        let animationFrameId: number;
        const animRing = () => {
            rx += (mx - rx) * 0.12;
            ry += (my - ry) * 0.12;
            ring.style.left = `${rx}px`;
            ring.style.top = `${ry}px`;
            animationFrameId = requestAnimationFrame(animRing);
        };
        animRing();

        // ---- HOVER STATE FOR CURSOR ----
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'button' || target.closest('button')) {
                cur.style.width = '20px';
                cur.style.height = '20px';
                cur.style.background = 'var(--red)';
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'button' || target.closest('button')) {
                cur.style.width = '12px';
                cur.style.height = '12px';
                cur.style.background = 'var(--gold)';
            }
        };

        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        // ---- CANVAS LOGIC ----
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let W: number, H: number;
        let particles: Particle[] = [];
        const mouse = { x: 0, y: 0 };

        const resize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const checkMouse = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        document.addEventListener("mousemove", checkMouse);

        class Particle {
            x!: number; y!: number; size!: number;
            ox!: number; oy!: number;
            vx!: number; vy!: number;
            side!: "r" | "b"; alpha!: number; t!: number;

            constructor() { this.reset(); }

            reset() {
                this.x = Math.random() * W;
                this.y = Math.random() * H;
                this.size = Math.random() * 1.5 + 0.3;
                this.ox = this.x; this.oy = this.y;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.side = Math.random() < 0.5 ? "r" : "b";
                this.alpha = Math.random() * 0.5 + 0.1;
                this.t = Math.random() * Math.PI * 2;
            }

            update() {
                this.t += 0.005;
                const dx = this.x - mouse.x, dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    const force = (140 - dist) / 140;
                    this.x += (dx / dist) * force * 2.5;
                    this.y += (dy / dist) * force * 2.5;
                }
                this.x += this.vx + Math.sin(this.t) * 0.2;
                this.y += this.vy + Math.cos(this.t) * 0.15;
                if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
            }

            draw() {
                if (!ctx) return;
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.side === "r" ? "#e8341a" : "#1a6de8";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 180; i++) particles.push(new Particle());

        const drawGrid = () => {
            ctx.strokeStyle = "rgba(255,255,255,.025)";
            ctx.lineWidth = 1;
            const spacing = 80;
            for (let x = 0; x < W; x += spacing) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
            }
            for (let y = 0; y < H; y += spacing) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
            }
        };

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i], p2 = particles[j];
                    const dx = p1.x - p2.x, dy = p1.y - p2.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 90) {
                        ctx.globalAlpha = (1 - d / 90) * 0.06;
                        ctx.strokeStyle = p1.side === p2.side ? (p1.side === "r" ? "#e8341a" : "#1a6de8") : "#f0c040";
                        ctx.lineWidth = 0.5;
                        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
                    }
                }
            }
        };

        const drawMouseGlow = () => {
            const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
            g.addColorStop(0, "rgba(240,192,64,.04)");
            g.addColorStop(1, "rgba(0,0,0,0)");
            ctx.globalAlpha = 1;
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);
        };

        let canvasFrameId: number;
        const loop = () => {
            ctx.globalAlpha = 1;
            ctx.fillStyle = "#080b12";
            ctx.fillRect(0, 0, W, H);
            drawGrid();
            drawMouseGlow();
            particles.forEach((p) => p.update());
            drawConnections();
            particles.forEach((p) => p.draw());
            canvasFrameId = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("resize", resize);
            document.removeEventListener("mousemove", checkMouse);
            cancelAnimationFrame(animationFrameId);
            cancelAnimationFrame(canvasFrameId);
        };
    }, []);

    return (
        <>
            <canvas id="bg" ref={canvasRef} />
            <div id="cursor" ref={cursorRef} />
            <div id="cursor-ring" ref={ringRef} />
        </>
    );
}
