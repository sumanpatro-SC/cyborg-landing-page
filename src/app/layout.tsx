import type { Metadata } from "next";
import {
  Share_Tech_Mono,
  Orbitron,
  Rajdhani,
} from "next/font/google";
import "./globals.css";

const shareMonoTech = Share_Tech_Mono({
  weight: ["400"],
  variable: "--font-share-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CYBORG PROTOCOL — IIT Bombay Techfest",
  description: "Human • Machine • Evolved - Join the ultimate tech fusion hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${shareMonoTech.variable} ${orbitron.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Background effects canvases */}
        <canvas id="c-rain" className="fixed inset-0 z-0 pointer-events-none"></canvas>
        <canvas id="c-liquid" className="fixed inset-0 z-[1] pointer-events-none"></canvas>
        <canvas id="c-neural" className="fixed inset-0 z-[2] pointer-events-none"></canvas>
        <canvas id="c-parts" className="fixed inset-0 z-[3] pointer-events-none"></canvas>
        
        {/* Scanlines and vignette */}
        <div className="scanlines"></div>
        <div className="vignette"></div>
        
        {/* Custom cursor */}
        <div id="cur"></div>
        <div id="cur-ring"></div>
        
        {/* Main content */}
        {children}
        
        {/* Background effect scripts */}
        <script dangerouslySetInnerHTML={{__html: `
          // Digital Rain
          (()=>{
            const c=document.getElementById('c-rain'), x=c.getContext('2d');
            c.width=innerWidth; c.height=innerHeight;
            const cols=Math.floor(c.width/16), drops=Array(cols).fill(1);
            const ch='アイウエオ01アBCDEFGHIJ';
            setInterval(()=>{
              x.fillStyle='rgba(3,8,15,0.06)'; x.fillRect(0,0,c.width,c.height);
              x.fillStyle='#00e5c8'; x.font='12px Share Tech Mono';
              drops.forEach((y,i)=>{
                x.fillText(ch[Math.floor(Math.random()*ch.length)],i*16,y*16);
                if(y*16>c.height&&Math.random()>.975) drops[i]=0; drops[i]++;
              });
            },55);
            window.addEventListener('resize',()=>{c.width=innerWidth;c.height=innerHeight;});
          })();

          // Neural Network
          (()=>{
            const c=document.getElementById('c-neural'), x=c.getContext('2d');
            c.width=innerWidth; c.height=innerHeight;
            const N=70;
            const ns=Array.from({length:N},()=>({
              x:Math.random()*c.width, y:Math.random()*c.height,
              vx:(Math.random()-.5)*.45, vy:(Math.random()-.5)*.45,
              p:Math.random()*Math.PI*2, s:Math.random()*1.8+.8
            }));
            let nmx=c.width/2, nmy=c.height/2;
            document.addEventListener('mousemove',e=>{nmx=e.clientX;nmy=e.clientY;});
            setInterval(()=>{
              x.clearRect(0,0,c.width,c.height);
              ns.forEach(n=>{
                const dx=n.x-nmx, dy=n.y-nmy, d=Math.hypot(dx,dy);
                if(d<110){n.vx+=dx/d*.25;n.vy+=dy/d*.25;}
                n.x+=n.vx; n.y+=n.vy; n.vx*=.99; n.vy*=.99;
                if(n.x<0||n.x>c.width)n.vx*=-1;
                if(n.y<0||n.y>c.height)n.vy*=-1;
                n.p+=.018;
                x.beginPath(); x.arc(n.x,n.y,n.s,0,Math.PI*2);
                x.fillStyle=\`rgba(0,229,200,\${.3+Math.sin(n.p)*.2})\`; x.fill();
              });
              for(let i=0;i<N;i++) for(let j=i+1;j<N;j++){
                const d=Math.hypot(ns[i].x-ns[j].x,ns[i].y-ns[j].y);
                if(d<130){ x.beginPath(); x.moveTo(ns[i].x,ns[i].y); x.lineTo(ns[j].x,ns[j].y);
                  x.strokeStyle=\`rgba(0,229,200,\${(1-d/130)*.3})\`; x.lineWidth=.5; x.stroke(); }
              }
            },16);
            window.addEventListener('resize',()=>{c.width=innerWidth;c.height=innerHeight;});
          })();

          // Liquid Metal
          (()=>{
            const c=document.getElementById('c-liquid'), x=c.getContext('2d');
            c.width=innerWidth; c.height=innerHeight;
            let lmx=c.width/2, lmy=c.height/2;
            document.addEventListener('mousemove',e=>{lmx=e.clientX;lmy=e.clientY;});
            const blobs=[
              {x:c.width*.3,y:c.height*.4,r:170,vx:.35,vy:.25,h:175},
              {x:c.width*.7,y:c.height*.6,r:130,vx:-.3,vy:.35,h:185},
              {x:c.width*.5,y:c.height*.25,r:110,vx:.2,vy:-.28,h:200},
              {x:lmx,y:lmy,r:90,vx:0,vy:0,h:170,mouse:true}
            ];
            setInterval(()=>{
              x.clearRect(0,0,c.width,c.height);
              blobs[3].x+=(lmx-blobs[3].x)*.07; blobs[3].y+=(lmy-blobs[3].y)*.07;
              blobs.forEach(b=>{
                if(!b.mouse){
                  b.x+=b.vx; b.y+=b.vy;
                  if(b.x<b.r||b.x>c.width-b.r)b.vx*=-1;
                  if(b.y<b.r||b.y>c.height-b.r)b.vy*=-1;
                }
                const g=x.createRadialGradient(b.x,b.y,0,b.x,b.y,b.r);
                g.addColorStop(0,\`hsla(\${b.h},100%,55%,0.22)\`);
                g.addColorStop(.5,\`hsla(\${b.h},100%,50%,0.07)\`);
                g.addColorStop(1,'transparent');
                x.beginPath(); x.arc(b.x,b.y,b.r,0,Math.PI*2);
                x.fillStyle=g; x.fill();
              });
            },16);
            window.addEventListener('resize',()=>{c.width=innerWidth;c.height=innerHeight;});
          })();

          // Particles
          (()=>{
            const c=document.getElementById('c-parts'), x=c.getContext('2d');
            c.width=innerWidth; c.height=innerHeight;
            let pmx=c.width/2, pmy=c.height/2;
            document.addEventListener('mousemove',e=>{pmx=e.clientX;pmy=e.clientY;});
            const ps=Array.from({length:150},()=>({
              x:Math.random()*c.width, y:Math.random()*c.height,
              ox:Math.random()*c.width, oy:Math.random()*c.height,
              s:Math.random()*1.8+.4, sp:Math.random()*.4+.1,
              a:Math.random()*.5+.15, col:Math.random()>.55?'0,229,200':'245,166,35'
            }));
            (function draw(){
              x.clearRect(0,0,c.width,c.height);
              const t=Date.now()*.001;
              ps.forEach(p=>{
                const dx=pmx-p.x, dy=pmy-p.y, d=Math.hypot(dx,dy);
                if(d<90){ p.x+=dx/d*1.8; p.y+=dy/d*1.8; }
                else{ p.x+=(p.ox-p.x)*p.sp*.02; p.y+=(p.oy-p.y)*p.sp*.02; }
                p.ox+=Math.sin(t+p.s)*.25; p.oy+=Math.cos(t+p.s)*.25;
                x.beginPath(); x.arc(p.x,p.y,p.s,0,Math.PI*2);
                x.fillStyle=\`rgba(\${p.col},\${p.a})\`; x.fill();
              });
              requestAnimationFrame(draw);
            })();
            window.addEventListener('resize',()=>{c.width=innerWidth;c.height=innerHeight;});
          })();

          // Cursor
          const cur = document.getElementById('cur');
          const ring = document.getElementById('cur-ring');
          let mx=0,my=0,rx=0,ry=0;
          document.addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            cur.style.left = mx+'px'; cur.style.top = my+'px';
          });
          (function loop(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
          document.querySelectorAll('button,a,.card').forEach(el=>{
            el.addEventListener('mouseenter',()=>cur.classList.add('active'));
            el.addEventListener('mouseleave',()=>cur.classList.remove('active'));
          });
        `}} />
      </body>
    </html>
  );
}
