import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, FONT, H, W} from './theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

// Fundo com profundidade: gradiente + grelha + partículas + vinheta
export const Background: React.FC<{tint?: string; tintAmount?: number}> = ({tint = C.primary, tintAmount = 0.18}) => {
  const frame = useCurrentFrame();
  const dots = Array.from({length: 28}, (_, i) => {
    const x = (i * 397) % W;
    const y = ((i * 613 + frame * (0.6 + (i % 5) * 0.25)) % (H + 40)) - 20;
    const r = 2 + (i % 3);
    return <circle key={i} cx={x} cy={H - y} r={r} fill={C.text} opacity={0.08 + (i % 4) * 0.03} />;
  });
  return (
    <AbsoluteFill style={{background: C.bg}}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% ${35 + Math.sin(frame / 60) * 5}%, ${tint}${Math.round(tintAmount * 255)
            .toString(16)
            .padStart(2, '0')} 0%, transparent 60%)`,
        }}
      />
      <svg width={W} height={H} style={{position: 'absolute'}}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={C.text} strokeOpacity="0.05" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#grid)" transform={`translate(0 ${(frame * 0.5) % 60})`} />
        {dots}
      </svg>
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)'}} />
    </AbsoluteFill>
  );
};

// Texto que aparece palavra a palavra (TextReveal, revealMode="word")
export const WordReveal: React.FC<{
  text: string;
  start: number;
  size?: number;
  weight?: number;
  color?: string;
  top: number;
  perWord?: number;
}> = ({text, start, size = 44, weight = 700, color = C.text, top, perWord = 4}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const words = text.split(' ');
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left: 80,
        right: 80,
        textAlign: 'center',
        fontFamily: FONT,
        fontSize: size,
        fontWeight: weight,
        lineHeight: 1.3,
        color,
      }}
    >
      {words.map((w, i) => {
        const s = spring({frame: frame - start - i * perWord, fps, config: {damping: 14}});
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              marginRight: size * 0.28,
              opacity: s,
              transform: `translateY(${(1 - s) * 24}px)`,
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};

export const Padlock: React.FC<{closed: number; size?: number; color?: string}> = ({closed, size = 64, color = C.accent}) => {
  // closed: 0 = aberto, 1 = fechado
  const shackleY = interpolate(closed, [0, 1], [-14, 0], clamp);
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path
        d="M20 30 V20 a12 12 0 0 1 24 0 V30"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        transform={`translate(0 ${shackleY})`}
      />
      <rect x="12" y="28" width="40" height="30" rx="7" fill={color} />
      <circle cx="32" cy="42" r="4" fill={C.bg} />
    </svg>
  );
};

export const Ticks: React.FC<{a: number; b: number; color?: string}> = ({a, b, color = C.muted}) => (
  <svg width="54" height="30" viewBox="0 0 54 30">
    <path d="M4 16 L13 25 L30 6" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity={a} transform={`scale(${0.6 + 0.4 * a})`} style={{transformOrigin: '15px 15px'}} />
    <path d="M20 16 L29 25 L46 6" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity={b} transform={`scale(${0.6 + 0.4 * b})`} style={{transformOrigin: '31px 15px'}} />
  </svg>
);

// Telemóvel com conversa (usado no gancho e no fecho)
export const ChatPhone: React.FC<{children?: React.ReactNode; contact: string; scale?: number}> = ({children, contact, scale = 1}) => (
  <div
    style={{
      position: 'absolute',
      left: (W - 760) / 2,
      top: 520,
      width: 760,
      height: 1060,
      borderRadius: 64,
      background: `linear-gradient(180deg, ${C.secondary} 0%, #121a33 100%)`,
      boxShadow: `0 0 0 3px rgba(255,255,255,0.08), 0 40px 120px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.12)`,
      overflow: 'hidden',
      transform: `scale(${scale})`,
      fontFamily: FONT,
    }}
  >
    <div style={{height: 140, display: 'flex', alignItems: 'center', gap: 22, padding: '0 40px', borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
      <div style={{width: 72, height: 72, borderRadius: 36, background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`}} />
      <div style={{color: C.text, fontSize: 38, fontWeight: 700}}>{contact}</div>
    </div>
    {children}
  </div>
);

export const Bubble: React.FC<{text: string; children?: React.ReactNode; style?: React.CSSProperties}> = ({text, children, style}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'flex-end',
      gap: 14,
      padding: '24px 30px',
      borderRadius: '34px 34px 8px 34px',
      background: `linear-gradient(180deg, #6a90ff 0%, ${C.primary} 100%)`,
      boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.35), 0 12px 30px rgba(79,124,255,0.35)',
      color: '#fff',
      fontFamily: FONT,
      fontSize: 40,
      fontWeight: 700,
      ...style,
    }}
  >
    {text}
    {children}
  </div>
);
