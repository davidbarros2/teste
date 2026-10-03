// Layer 3 — sistemas de design. O guião e o plano visual são os mesmos;
// trocar de tema muda só o aspeto.
import {createContext, useContext} from 'react';
import {continueRender, delayRender, staticFile} from 'remotion';

// Orbitron (SIL OFL), incluído em public/fonts para não depender da rede ao renderizar
const orbitron = 'Orbitron';
if (typeof document !== 'undefined') {
  const handle = delayRender('Carregar Orbitron');
  const face = new FontFace(orbitron, `url(${staticFile('fonts/Orbitron.woff2')}) format('woff2')`, {weight: '400 900'});
  face
    .load()
    .then(() => {
      document.fonts.add(face);
      continueRender(handle);
    })
    .catch(() => continueRender(handle));
}

export type Theme = {
  name: 'classico' | 'tron';
  bg: string;
  secondary: string;
  primary: string;
  accent: string;
  text: string;
  muted: string;
  ok: string;
  font: string;
  headingFont: string;
  uppercase: boolean;
  radius: number;
  glow: (color: string, strength?: number) => string; // text-shadow
};

export const CLASSICO: Theme = {
  name: 'classico',
  bg: '#0B1020',
  secondary: '#1B2440',
  primary: '#4F7CFF',
  accent: '#FFB547',
  text: '#F2F4FA',
  muted: '#8A93B2',
  ok: '#3DDC97',
  font: '"Liberation Sans", "DejaVu Sans", Arial, sans-serif',
  headingFont: '"Liberation Sans", "DejaVu Sans", Arial, sans-serif',
  uppercase: false,
  radius: 28,
  glow: () => 'none',
};

export const TRON: Theme = {
  name: 'tron',
  bg: '#010308',
  secondary: '#03111A',
  primary: '#2DE2FF',
  accent: '#FF8A1F',
  text: '#E6FBFF',
  muted: '#6FA3B3',
  ok: '#5CFFC8',
  font: `${orbitron}, "DejaVu Sans Mono", monospace`,
  headingFont: `${orbitron}, "DejaVu Sans Mono", monospace`,
  uppercase: true,
  radius: 6,
  glow: (c, s = 1) => `0 0 ${8 * s}px ${c}, 0 0 ${22 * s}px ${c}AA`,
};

export const ThemeCtx = createContext<Theme>(CLASSICO);
export const useTheme = () => useContext(ThemeCtx);

export const W = 1080;
export const H = 1920;
