import React from 'react';
import {AbsoluteFill, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, Bubble, ChatPhone, Padlock, Ticks, WordReveal} from './parts';
import {C, FONT} from './theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

// ───────────── Beat 1 · Gancho ─────────────
export const Hook: React.FC = () => {
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
      <WordReveal text="Tocaste em Enviar." start={2} size={76} top={300} />
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
              borderRadius: 48,
              background: 'rgba(255,255,255,0.07)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 36px',
              color: C.text,
              fontFamily: FONT,
              fontSize: 38,
            }}
          >
            {frame < tap + 4 ? typed : ''}
            {frame < tap && Math.floor(frame / 8) % 2 === 0 ? <span style={{color: C.primary}}>|</span> : null}
          </div>
          <div style={{position: 'relative', width: 96, height: 96}}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 48,
                border: `4px solid ${C.accent}`,
                opacity: 1 - ripple,
                transform: `scale(${1 + ripple * 1.8})`,
              }}
            />
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: 48,
                background: `linear-gradient(180deg, #6a90ff, ${C.primary})`,
                transform: `scale(${press})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="44" height="44" viewBox="0 0 24 24">
                <path d="M3 11.5 L21 3 L13.5 21 L11 13 Z" fill="#fff" />
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
  const {fps} = useVideoConfig();
  if (i === 0) return <Padlock closed={spring({frame: local - 35, fps, config: {damping: 12}})} size={84} />;
  if (i === 1)
    return (
      <svg width="120" height="100" viewBox="0 0 120 100">
        <path d="M60 40 L48 96 M60 40 L72 96 M52 72 L68 72" stroke={C.text} strokeWidth="4" strokeLinecap="round" />
        {[0, 1, 2].map((k) => {
          const p = ((local + k * 12) % 36) / 36;
          return (
            <circle key={k} cx="60" cy="36" r={8 + p * 44} fill="none" stroke={C.primary} strokeWidth="4" opacity={1 - p} />
          );
        })}
      </svg>
    );
  if (i === 2) {
    const p = (local % 30) / 30;
    return (
      <svg width="200" height="60" viewBox="0 0 200 60">
        <line x1="6" y1="30" x2="194" y2="30" stroke={C.accent} strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
        <circle cx={6 + p * 188} cy="30" r="10" fill={C.accent} />
        <circle cx={6 + p * 188} cy="30" r="22" fill={C.accent} opacity="0.25" />
      </svg>
    );
  }
  if (i === 3)
    return (
      <svg width="110" height="110" viewBox="0 0 110 110">
        {[0, 1, 2].map((k) => (
          <g key={k}>
            <rect x="10" y={8 + k * 34} width="90" height="26" rx="6" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" />
            <circle cx="24" cy={21 + k * 34} r="5" fill={Math.floor(local / 10 + k) % 3 === 0 ? C.ok : C.muted} />
          </g>
        ))}
      </svg>
    );
  return <Padlock closed={1 - spring({frame: local - 35, fps, config: {damping: 12}})} size={84} color={C.ok} />;
};

export const Layers: React.FC = () => {
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
      <Background tint={midpoint > 0.5 ? C.accent : C.primary} tintAmount={0.18 + midpoint * 0.1} />
      {/* contador */}
      <div style={{position: 'absolute', top: 290, left: 0, right: 0, textAlign: 'center', fontFamily: FONT}}>
        <span style={{color: C.muted, fontSize: 36, fontWeight: 700, letterSpacing: 6}}>CAMADA </span>
        <span style={{color: midpoint > 0.5 ? C.accent : C.primary, fontSize: 56, fontWeight: 700}}>{Math.max(active, 0) + 1}</span>
        <span style={{color: C.muted, fontSize: 36, fontWeight: 700}}> / 5</span>
      </div>

      {/* trilho */}
      <svg width="1080" height="1920" style={{position: 'absolute'}}>
        <line x1="980" y1={CARD_TOP + CARD_H / 2} x2="980" y2={CARD_TOP + 4 * CARD_STEP + CARD_H / 2} stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeDasharray="2 14" strokeLinecap="round" />
        <line x1="980" y1={CARD_TOP + CARD_H / 2} x2="980" y2={railEnd} stroke={midpoint > 0.5 ? C.accent : C.primary} strokeWidth="6" strokeLinecap="round" />
      </svg>

      {LAYERS.map((l, i) => {
        const s = spring({frame: frame - ENTER[i], fps, config: {damping: 14}});
        if (frame < ENTER[i]) return null;
        const isActive = i === active;
        const hue = i === 2 ? C.accent : i === 4 ? C.ok : C.primary;
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
              borderRadius: 28,
              background: `linear-gradient(135deg, ${hue}33 0%, rgba(27,36,64,0.85) 55%)`,
              border: `2px solid ${isActive ? hue : 'rgba(255,255,255,0.08)'}`,
              boxShadow: `inset 0 2px 0 rgba(255,255,255,0.14)${isActive ? `, 0 0 50px ${hue}55` : ''}`,
              display: 'flex',
              alignItems: 'center',
              padding: '0 36px',
              gap: 30,
              fontFamily: FONT,
            }}
          >
            <div style={{width: 96, height: 96, borderRadius: 48, background: `${hue}26`, border: `3px solid ${hue}`, color: hue, fontSize: 46, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {i + 1}
            </div>
            <div style={{flex: 1}}>
              <div style={{color: C.text, fontSize: 46, fontWeight: 700}}>{l.title}</div>
              <div style={{color: C.muted, fontSize: 36, marginTop: 6}}>{l.sub}</div>
            </div>
            <MiniVisual i={i} local={frame - ENTER[i]} />
          </div>
        );
      })}

      {/* token: a mensagem a descer, com cadeado */}
      <div style={{position: 'absolute', left: 980 - 46, top: tokenY - 46, width: 92, height: 92, borderRadius: 46, background: `linear-gradient(180deg, #6a90ff, ${C.primary})`, boxShadow: `0 0 0 6px ${C.bg}, 0 0 40px ${C.primary}`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{position: 'absolute', opacity: 1 - locked}}>
          <svg width="44" height="44" viewBox="0 0 24 24"><path d="M4 5 h16 v10 h-9 l-5 4 v-4 h-2 z" fill="#fff" /></svg>
        </div>
        <div style={{position: 'absolute', opacity: locked, transform: `scale(${0.6 + 0.4 * locked})`}}>
          <Padlock closed={locked} size={52} color="#fff" />
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
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t1 = spring({frame: frame - 30, fps, config: {damping: 10}});
  const t2 = spring({frame: frame - 42, fps, config: {damping: 10}});
  return (
    <AbsoluteFill>
      <Background tint={C.ok} tintAmount={0.14} />
      <WordReveal text="Dois vistos cinzentos." start={10} size={76} top={300} />
      <ChatPhone contact="Rita">
        <div style={{position: 'absolute', right: 40, top: 200}}>
          <Bubble text="Jantamos às 8?">
            <Ticks a={t1} b={t2} color="#dfe6ff" />
          </Bubble>
        </div>
        <div style={{position: 'absolute', left: 40, top: 360, opacity: spring({frame: frame - 80, fps, config: {damping: 14}})}}>
          <div style={{display: 'inline-block', padding: '24px 30px', borderRadius: '34px 34px 34px 8px', background: 'rgba(255,255,255,0.1)', color: C.text, fontFamily: FONT, fontSize: 40, fontWeight: 700, boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.12)'}}>
            Combinado!
          </div>
        </div>
      </ChatPhone>
      <WordReveal text="Cinco camadas. E ninguém pelo caminho a conseguiu ler." start={56} size={50} top={1640} perWord={3} />
    </AbsoluteFill>
  );
};
