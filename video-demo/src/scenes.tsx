import React from 'react';
import {AbsoluteFill, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, Bubble, ChatPhone, Padlock, panelStyle, Ticks, WordReveal} from './parts';
import {useTheme} from './theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

// ───────────── Beat 1 · Gancho ─────────────
export const Hook: React.FC = () => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const msg = 'Jantamos às 8?';
  const typed = msg.slice(0, Math.floor(interpolate(frame, [4, 30], [0, msg.length], clamp)));
  const tap = 38;
  const ripple = interpolate(frame, [tap, tap + 18], [0, 1], clamp);
  const press = frame >= tap && frame < tap + 6 ? 0.88 : 1;
  const sent = spring({frame: frame - tap - 4, fps, config: {damping: 13}});
  const phoneIn = spring({frame, fps, config: {damping: 16}});

  return (
    <AbsoluteFill>
      <Background />
      <WordReveal text="Tocaste em Enviar." start={2} size={76} top={300} heading />
      <ChatPhone contact="Rita" scale={0.94 + 0.06 * phoneIn}>
        {/* mensagem enviada */}
        <div
          style={{
            position: 'absolute',
            right: 40,
            top: 200 + (1 - sent) * 640,
            opacity: sent,
            transform: `scale(${0.7 + 0.3 * sent})`,
            transformOrigin: 'right bottom',
          }}
        >
          <Bubble text={msg} />
        </div>
        {/* barra de escrita */}
        <div style={{position: 'absolute', left: 32, right: 32, bottom: 36, height: 110, display: 'flex', alignItems: 'center', gap: 20}}>
          <div
            style={{
              flex: 1,
              height: 96,
              borderRadius: t.name === 'tron' ? 6 : 48,
              background: t.name === 'tron' ? 'rgba(45,226,255,0.06)' : 'rgba(255,255,255,0.07)',
              border: t.name === 'tron' ? `1px solid ${t.primary}88` : undefined,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 36px',
              color: t.text,
              fontFamily: t.font,
              fontSize: 38,
            }}
          >
            {frame < tap + 4 ? typed : ''}
            {frame < tap && Math.floor(frame / 8) % 2 === 0 ? <span style={{color: t.primary}}>|</span> : null}
          </div>
          <div style={{position: 'relative', width: 96, height: 96}}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: t.name === 'tron' ? 8 : 48,
                border: `4px solid ${t.accent}`,
                boxShadow: t.name === 'tron' ? `0 0 16px ${t.accent}` : undefined,
                opacity: 1 - ripple,
                transform: `scale(${1 + ripple * 1.8})`,
              }}
            />
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: t.name === 'tron' ? 8 : 48,
                background: t.name === 'tron' ? `${t.primary}22` : `linear-gradient(180deg, #6a90ff, ${t.primary})`,
                border: t.name === 'tron' ? `3px solid ${t.primary}` : undefined,
                boxShadow: t.name === 'tron' ? `0 0 18px ${t.primary}` : undefined,
                transform: `scale(${press})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="44" height="44" viewBox="0 0 24 24">
                <path d="M3 11.5 L21 3 L13.5 21 L11 13 Z" fill={t.name === 'tron' ? t.primary : '#fff'} />
              </svg>
            </div>
          </div>
        </div>
      </ChatPhone>
      <WordReveal text="Em menos de 1 segundo, atravessou 5 camadas." start={52} size={50} top={1640} perWord={3} />
    </AbsoluteFill>
  );
};

// ───────────── Beats 2–6 · Camadas ─────────────
const ENTER = [10, 105, 195, 285, 395];
const END = 515;
const CARD_TOP = 400;
const CARD_STEP = 200;
const CARD_H = 172;

const LAYERS = [
  {title: 'Encriptação', sub: 'o teu telemóvel tranca-a', caption: 'O teu telemóvel tranca-a com uma chave que só o teu amigo tem.'},
  {title: 'Rede móvel', sub: 'uma antena apanha-a', caption: 'Uma antena apanha-a pelo ar.'},
  {title: 'Fibra ótica', sub: 'à velocidade da luz', caption: 'Viaja por fibra ótica, à velocidade da luz.'},
  {title: 'Servidor', sub: 'guarda-a sem a abrir', caption: 'Um servidor guarda-a, sem a conseguir abrir, até o teu amigo estar online.'},
  {title: 'Telemóvel do amigo', sub: 'destranca-a', caption: 'O telemóvel dele destranca-a.'},
];

const MiniVisual: React.FC<{i: number; local: number}> = ({i, local}) => {
  const t = useTheme();
  const {fps} = useVideoConfig();
  if (i === 0) return <Padlock closed={spring({frame: local - 35, fps, config: {damping: 12}})} size={84} />;
  if (i === 1)
    return (
      <svg width="120" height="100" viewBox="0 0 120 100">
        <path d="M60 40 L48 96 M60 40 L72 96 M52 72 L68 72" stroke={t.text} strokeWidth="4" strokeLinecap="round" />
        {[0, 1, 2].map((k) => {
          const p = ((local + k * 12) % 36) / 36;
          return (
            <circle key={k} cx="60" cy="36" r={8 + p * 44} fill="none" stroke={t.primary} strokeWidth="4" opacity={1 - p} />
          );
        })}
      </svg>
    );
  if (i === 2) {
    const p = (local % 30) / 30;
    return (
      <svg width="200" height="60" viewBox="0 0 200 60">
        <line x1="6" y1="30" x2="194" y2="30" stroke={t.accent} strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
        <circle cx={6 + p * 188} cy="30" r="10" fill={t.accent} />
        <circle cx={6 + p * 188} cy="30" r="22" fill={t.accent} opacity="0.25" />
      </svg>
    );
  }
  if (i === 3)
    return (
      <svg width="110" height="110" viewBox="0 0 110 110">
        {[0, 1, 2].map((k) => (
          <g key={k}>
            <rect x="10" y={8 + k * 34} width="90" height="26" rx="6" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" />
            <circle cx="24" cy={21 + k * 34} r="5" fill={Math.floor(local / 10 + k) % 3 === 0 ? t.ok : t.muted} />
          </g>
        ))}
      </svg>
    );
  return <Padlock closed={1 - spring({frame: local - 35, fps, config: {damping: 12}})} size={84} color={t.ok} />;
};

export const Layers: React.FC = () => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const active = ENTER.filter((e) => frame >= e).length - 1;
  const midpoint = interpolate(frame, [ENTER[2], ENTER[2] + 15, ENTER[3] - 10, ENTER[3] + 5], [0, 1, 1, 0], clamp);

  // posição do "token" (a mensagem) ao longo do trilho
  let tokenY = CARD_TOP + CARD_H / 2;
  ENTER.forEach((e, i) => {
    if (i === 0) return;
    tokenY += spring({frame: frame - e, fps, config: {damping: 15}}) * CARD_STEP;
  });
  const locked = spring({frame: frame - ENTER[0] - 35, fps, config: {damping: 12}}) - spring({frame: frame - ENTER[4] - 35, fps, config: {damping: 12}});
  const railEnd = tokenY;

  return (
    <AbsoluteFill>
      <Background tint={midpoint > 0.5 ? t.accent : t.primary} tintAmount={0.18 + midpoint * 0.1} />
      {/* contador */}
      <div style={{position: 'absolute', top: 290, left: 0, right: 0, textAlign: 'center', fontFamily: t.headingFont}}>
        <span style={{color: t.muted, fontSize: 36, fontWeight: 700, letterSpacing: 6}}>CAMADA </span>
        <span style={{color: midpoint > 0.5 ? t.accent : t.primary, fontSize: 56, fontWeight: 700, textShadow: t.glow(midpoint > 0.5 ? t.accent : t.primary, 1)}}>{Math.max(active, 0) + 1}</span>
        <span style={{color: t.muted, fontSize: 36, fontWeight: 700}}> / 5</span>
      </div>

      {/* trilho */}
      <svg width="1080" height="1920" style={{position: 'absolute'}}>
        <line x1="980" y1={CARD_TOP + CARD_H / 2} x2="980" y2={CARD_TOP + 4 * CARD_STEP + CARD_H / 2} stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeDasharray="2 14" strokeLinecap="round" />
        <line x1="980" y1={CARD_TOP + CARD_H / 2} x2="980" y2={railEnd} stroke={midpoint > 0.5 ? t.accent : t.primary} strokeWidth="6" strokeLinecap="round" style={t.name === 'tron' ? {filter: `drop-shadow(0 0 8px ${midpoint > 0.5 ? t.accent : t.primary}) drop-shadow(0 0 20px ${midpoint > 0.5 ? t.accent : t.primary})`} : undefined} />
      </svg>

      {LAYERS.map((l, i) => {
        const s = spring({frame: frame - ENTER[i], fps, config: {damping: 14}});
        if (frame < ENTER[i]) return null;
        const isActive = i === active;
        const hue = i === 2 ? t.accent : i === 4 ? t.ok : t.primary;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: 80,
              width: 820,
              top: CARD_TOP + i * CARD_STEP - (1 - s) * 60,
              height: CARD_H,
              opacity: s * (isActive ? 1 : 0.5),
              ...panelStyle(t, hue, isActive),
              display: 'flex',
              alignItems: 'center',
              padding: '0 36px',
              gap: 30,
              fontFamily: t.font,
            }}
          >
            <div style={{width: 96, height: 96, borderRadius: t.name === 'tron' ? 6 : 48, transform: t.name === 'tron' ? 'rotate(45deg) scale(0.82)' : undefined, background: `${hue}26`, border: `3px solid ${hue}`, boxShadow: t.name === 'tron' ? `0 0 14px ${hue}` : undefined, color: hue, fontSize: t.name === 'tron' ? 40 : 46, textShadow: t.glow(hue, 0.6), fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{transform: t.name === 'tron' ? 'rotate(-45deg)' : undefined}}>{i + 1}</span>
            </div>
            <div style={{flex: 1}}>
              <div style={{color: t.text, fontFamily: t.headingFont, fontSize: t.name === 'tron' ? 36 : 46, fontWeight: 700, letterSpacing: t.name === 'tron' ? 2 : 0, textTransform: t.name === 'tron' ? 'uppercase' : 'none', textShadow: t.glow(t.text, 0.35)}}>{l.title}</div>
              <div style={{color: t.muted, fontSize: t.name === 'tron' ? 30 : 36, marginTop: 8}}>{l.sub}</div>
            </div>
            <MiniVisual i={i} local={frame - ENTER[i]} />
          </div>
        );
      })}

      {/* token: a mensagem a descer, com cadeado */}
      <div style={{position: 'absolute', left: 980 - 46, top: tokenY - 46, width: 92, height: 92, borderRadius: t.name === 'tron' ? 10 : 46, transform: t.name === 'tron' ? 'rotate(45deg) scale(0.86)' : undefined, background: t.name === 'tron' ? t.bg : `linear-gradient(180deg, #6a90ff, ${t.primary})`, border: t.name === 'tron' ? `4px solid ${t.primary}` : undefined, boxShadow: t.name === 'tron' ? `0 0 20px ${t.primary}, 0 0 60px ${t.primary}, inset 0 0 18px ${t.primary}` : `0 0 0 6px ${t.bg}, 0 0 40px ${t.primary}`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{position: 'absolute', opacity: 1 - locked, transform: t.name === 'tron' ? 'rotate(-45deg)' : undefined}}>
          <svg width="44" height="44" viewBox="0 0 24 24"><path d="M4 5 h16 v10 h-9 l-5 4 v-4 h-2 z" fill={t.name === 'tron' ? t.primary : '#fff'} /></svg>
        </div>
        <div style={{position: 'absolute', opacity: locked, transform: `${t.name === 'tron' ? 'rotate(-45deg) ' : ''}scale(${0.6 + 0.4 * locked})`}}>
          <Padlock closed={locked} size={52} color={t.name === 'tron' ? t.accent : '#fff'} />
        </div>
      </div>

      {/* legendas da narração */}
      {LAYERS.map((l, i) => {
        const to = i < 4 ? ENTER[i + 1] : END;
        return (
          <Sequence key={i} from={ENTER[i]} durationInFrames={to - ENTER[i]} layout="none">
            <CaptionOut dur={to - ENTER[i]}>
              <WordReveal text={l.caption} start={4} size={46} weight={700} top={1460} perWord={3} />
            </CaptionOut>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

const CaptionOut: React.FC<{dur: number; children: React.ReactNode}> = ({dur, children}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [dur - 8, dur], [1, 0], clamp);
  return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};

// ───────────── Beat 7 · Fecho ─────────────
export const Close: React.FC = () => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t1 = spring({frame: frame - 30, fps, config: {damping: 10}});
  const t2 = spring({frame: frame - 42, fps, config: {damping: 10}});
  return (
    <AbsoluteFill>
      <Background tint={t.ok} tintAmount={0.14} />
      <WordReveal text="Dois vistos cinzentos." start={10} size={76} top={300} heading />
      <ChatPhone contact="Rita">
        <div style={{position: 'absolute', right: 40, top: 200}}>
          <Bubble text="Jantamos às 8?">
            <Ticks a={t1} b={t2} color={t.name === 'tron' ? t.text : '#dfe6ff'} />
          </Bubble>
        </div>
        <div style={{position: 'absolute', left: 40, top: 360, opacity: spring({frame: frame - 80, fps, config: {damping: 14}})}}>
          <Bubble text="Combinado!" incoming />
        </div>
      </ChatPhone>
      <WordReveal text="Cinco camadas. E ninguém pelo caminho a conseguiu ler." start={56} size={50} top={1640} perWord={3} />
    </AbsoluteFill>
  );
};
