import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {H, Theme, useTheme, W} from './theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const hex = (a: number) => Math.round(Math.min(Math.max(a, 0), 1) * 255).toString(16).padStart(2, '0');

// Fundo com profundidade: varia por tema
export const Background: React.FC<{tint?: string; tintAmount?: number}> = ({tint, tintAmount = 0.18}) => {
  const t = useTheme();
  return t.name === 'tron' ? <TronBackground tint={tint ?? t.primary} amount={tintAmount} /> : <ClassicBackground tint={tint ?? t.primary} amount={tintAmount} />;
};

const ClassicBackground: React.FC<{tint: string; amount: number}> = ({tint, amount}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const dots = Array.from({length: 28}, (_, i) => {
    const x = (i * 397) % W;
    const y = ((i * 613 + frame * (0.6 + (i % 5) * 0.25)) % (H + 40)) - 20;
    return <circle key={i} cx={x} cy={H - y} r={2 + (i % 3)} fill={t.text} opacity={0.08 + (i % 4) * 0.03} />;
  });
  return (
    <AbsoluteFill style={{background: t.bg}}>
      <AbsoluteFill style={{background: `radial-gradient(circle at 50% ${35 + Math.sin(frame / 60) * 5}%, ${tint}${hex(amount)} 0%, transparent 60%)`}} />
      <svg width={W} height={H} style={{position: 'absolute'}}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={t.text} strokeOpacity="0.05" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#grid)" transform={`translate(0 ${(frame * 0.5) % 60})`} />
        {dots}
      </svg>
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)'}} />
    </AbsoluteFill>
  );
};

// Tron: chão em grelha com perspetiva a vir na nossa direção, horizonte a brilhar, linhas de varrimento
const TronBackground: React.FC<{tint: string; amount: number}> = ({tint, amount}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const horizon = 1180;
  const vx = W / 2;
  const floorH = H - horizon;
  const rows = Array.from({length: 14}, (_, i) => {
    const p = ((i + (frame % 30) / 30) / 14) ** 2.2; // 0 no horizonte → 1 em baixo
    return horizon + p * floorH;
  });
  const cols = Array.from({length: 23}, (_, i) => (i - 11) * 260);
  const ceil = Array.from({length: 8}, (_, i) => horizon - 360 - ((i + (frame % 40) / 40) / 8) ** 2 * 900);
  return (
    <AbsoluteFill style={{background: `linear-gradient(180deg, ${t.bg} 0%, #020a14 ${(horizon / H) * 100}%, ${t.bg} 100%)`}}>
      <AbsoluteFill style={{background: `radial-gradient(ellipse 70% 18% at 50% ${(horizon / H) * 100}%, ${tint}${hex(amount * 2.2)} 0%, transparent 70%)`}} />
      <svg width={W} height={H} style={{position: 'absolute'}}>
        <defs>
          <linearGradient id="floorFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={tint} stopOpacity="0" />
            <stop offset="0.35" stopColor={tint} stopOpacity="0.55" />
            <stop offset="1" stopColor={tint} stopOpacity="0.9" />
          </linearGradient>
          <filter id="neon" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#neon)" opacity="0.5">
          {rows.map((y, i) => (
            <line key={`r${i}`} x1="0" x2={W} y1={y} y2={y} stroke="url(#floorFade)" strokeWidth={1 + ((y - horizon) / floorH) * 2.5} />
          ))}
          {cols.map((x, i) => (
            <line key={`c${i}`} x1={vx} y1={horizon} x2={vx + x * 3} y2={H} stroke={tint} strokeOpacity="0.55" strokeWidth="1.6" />
          ))}
        </g>
        {/* teto ténue */}
        <g opacity="0.12">
          {ceil.map((y, i) => (
            <line key={`t${i}`} x1="0" x2={W} y1={y} y2={y} stroke={tint} strokeWidth="1" />
          ))}
        </g>
        <line x1="0" x2={W} y1={horizon} y2={horizon} stroke={tint} strokeWidth="3" filter="url(#neon)" />
      </svg>
      <AbsoluteFill style={{background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 2px, transparent 2px, transparent 5px)'}} />
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.75) 100%)'}} />
      <HudCorners color={tint} />
    </AbsoluteFill>
  );
};

const HudCorners: React.FC<{color: string}> = ({color}) => {
  const frame = useCurrentFrame();
  const o = 0.5 + 0.2 * Math.sin(frame / 12);
  const L = 70;
  const m = 60;
  const paths = [
    `M${m} ${m + L} V${m} H${m + L}`,
    `M${W - m - L} ${m} H${W - m} V${m + L}`,
    `M${m} ${H - m - L} V${H - m} H${m + L}`,
    `M${W - m - L} ${H - m} H${W - m} V${H - m - L}`,
  ];
  return (
    <svg width={W} height={H} style={{position: 'absolute', opacity: o}}>
      {paths.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={color} strokeWidth="3" />
      ))}
    </svg>
  );
};

// Superfície de um cartão/painel segundo o tema
export const panelStyle = (t: Theme, hue: string, active: boolean): React.CSSProperties =>
  t.name === 'tron'
    ? {
        borderRadius: t.radius,
        background: `linear-gradient(90deg, ${hue}1F 0%, rgba(1,8,14,0.88) 40%)`,
        border: `2px solid ${active ? hue : `${hue}55`}`,
        boxShadow: active ? `0 0 18px ${hue}, 0 0 50px ${hue}66, inset 0 0 24px ${hue}44` : `inset 0 0 12px ${hue}22`,
      }
    : {
        borderRadius: t.radius,
        background: `linear-gradient(135deg, ${hue}33 0%, rgba(27,36,64,0.85) 55%)`,
        border: `2px solid ${active ? hue : 'rgba(255,255,255,0.08)'}`,
        boxShadow: `inset 0 2px 0 rgba(255,255,255,0.14)${active ? `, 0 0 50px ${hue}55` : ''}`,
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
  heading?: boolean;
}> = ({text, start, size = 44, weight = 700, color, top, perWord = 4, heading = false}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const c = color ?? (heading && t.name === 'tron' ? t.primary : t.text);
  const words = text.split(' ');
  const fs = t.uppercase ? size * (heading ? 0.82 : 0.76) : size;
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left: t.uppercase ? 60 : 80,
        right: t.uppercase ? 60 : 80,
        textAlign: 'center',
        fontFamily: heading ? t.headingFont : t.font,
        fontSize: fs,
        fontWeight: weight,
        lineHeight: 1.35,
        letterSpacing: t.uppercase ? fs * 0.06 : 0,
        textTransform: t.uppercase && heading ? 'uppercase' : 'none',
        color: c,
        textShadow: heading ? t.glow(c, 1) : t.glow(c, 0.4),
      }}
    >
      {words.map((w, i) => {
        const s = spring({frame: frame - start - i * perWord, fps, config: {damping: 14}});
        return (
          <span key={i} style={{display: 'inline-block', marginRight: fs * 0.3, opacity: s, transform: `translateY(${(1 - s) * 24}px)`}}>
            {w}
          </span>
        );
      })}
    </div>
  );
};

export const Padlock: React.FC<{closed: number; size?: number; color?: string}> = ({closed, size = 64, color}) => {
  const t = useTheme();
  const c = color ?? t.accent;
  const shackleY = interpolate(closed, [0, 1], [-14, 0], clamp);
  const outline = t.name === 'tron';
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" style={outline ? {filter: `drop-shadow(0 0 6px ${c})`, overflow: 'visible'} : {overflow: 'visible'}}>
      <path d="M20 30 V20 a12 12 0 0 1 24 0 V30" fill="none" stroke={c} strokeWidth="6" strokeLinecap="round" transform={`translate(0 ${shackleY})`} />
      <rect x="12" y="28" width="40" height="30" rx={outline ? 3 : 7} fill={outline ? 'none' : c} stroke={c} strokeWidth={outline ? 5 : 0} />
      <circle cx="32" cy="42" r="4" fill={outline ? c : t.bg} />
    </svg>
  );
};

export const Ticks: React.FC<{a: number; b: number; color?: string}> = ({a, b, color}) => {
  const t = useTheme();
  const c = color ?? t.muted;
  return (
    <svg width="54" height="30" viewBox="0 0 54 30" style={t.name === 'tron' ? {filter: `drop-shadow(0 0 5px ${c})`} : undefined}>
      <path d="M4 16 L13 25 L30 6" fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity={a} transform={`scale(${0.6 + 0.4 * a})`} style={{transformOrigin: '15px 15px'}} />
      <path d="M20 16 L29 25 L46 6" fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity={b} transform={`scale(${0.6 + 0.4 * b})`} style={{transformOrigin: '31px 15px'}} />
    </svg>
  );
};

// Telemóvel com conversa (usado no gancho e no fecho)
export const ChatPhone: React.FC<{children?: React.ReactNode; contact: string; scale?: number}> = ({children, contact, scale = 1}) => {
  const t = useTheme();
  const tron = t.name === 'tron';
  return (
    <div
      style={{
        position: 'absolute',
        left: (W - 760) / 2,
        top: 520,
        width: 760,
        height: 1060,
        borderRadius: tron ? 18 : 64,
        background: tron ? 'rgba(1,8,14,0.82)' : `linear-gradient(180deg, ${t.secondary} 0%, #121a33 100%)`,
        border: tron ? `2px solid ${t.primary}` : undefined,
        boxShadow: tron
          ? `0 0 24px ${t.primary}, 0 0 80px ${t.primary}55, inset 0 0 40px ${t.primary}33`
          : `0 0 0 3px rgba(255,255,255,0.08), 0 40px 120px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.12)`,
        overflow: 'hidden',
        transform: `scale(${scale})`,
        fontFamily: t.font,
      }}
    >
      <div style={{height: 140, display: 'flex', alignItems: 'center', gap: 22, padding: '0 40px', borderBottom: `1px solid ${tron ? `${t.primary}66` : 'rgba(255,255,255,0.08)'}`}}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: tron ? 4 : 36,
            transform: tron ? 'rotate(45deg) scale(0.75)' : undefined,
            background: tron ? 'transparent' : `linear-gradient(135deg, ${t.primary}, ${t.accent})`,
            border: tron ? `3px solid ${t.accent}` : undefined,
            boxShadow: tron ? `0 0 14px ${t.accent}` : undefined,
          }}
        />
        <div style={{color: t.text, fontSize: tron ? 32 : 38, fontWeight: 700, letterSpacing: tron ? 4 : 0, textTransform: tron ? 'uppercase' : 'none', textShadow: t.glow(t.text, 0.4)}}>{contact}</div>
      </div>
      {children}
    </div>
  );
};

export const Bubble: React.FC<{text: string; children?: React.ReactNode; style?: React.CSSProperties; incoming?: boolean}> = ({text, children, style, incoming = false}) => {
  const t = useTheme();
  const tron = t.name === 'tron';
  const c = incoming ? t.accent : t.primary;
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        gap: 14,
        padding: '24px 30px',
        borderRadius: tron ? 6 : incoming ? '34px 34px 34px 8px' : '34px 34px 8px 34px',
        background: tron ? `${c}14` : incoming ? 'rgba(255,255,255,0.1)' : `linear-gradient(180deg, #6a90ff 0%, ${t.primary} 100%)`,
        border: tron ? `2px solid ${c}` : undefined,
        boxShadow: tron ? `0 0 14px ${c}, inset 0 0 16px ${c}33` : incoming ? 'inset 0 2px 0 rgba(255,255,255,0.12)' : 'inset 0 2px 0 rgba(255,255,255,0.35), 0 12px 30px rgba(79,124,255,0.35)',
        color: tron ? t.text : '#fff',
        fontFamily: t.font,
        fontSize: tron ? 34 : 40,
        fontWeight: 700,
        textShadow: t.glow(c, 0.5),
        ...style,
      }}
    >
      {text}
      {children}
    </div>
  );
};
