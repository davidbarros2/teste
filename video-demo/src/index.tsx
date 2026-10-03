import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {Close, Hook, Layers} from './scenes';
import {CLASSICO, Theme, ThemeCtx, TRON} from './theme';

const Enviar: React.FC<{theme: Theme}> = ({theme}) => (
  <ThemeCtx.Provider value={theme}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={100}>
        <Hook />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
      <TransitionSeries.Sequence durationInFrames={515}>
        <Layers />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
      <TransitionSeries.Sequence durationInFrames={135}>
        <Close />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </ThemeCtx.Provider>
);

const EnviarClassico: React.FC = () => <Enviar theme={CLASSICO} />;
const EnviarTron: React.FC = () => <Enviar theme={TRON} />;

const Root: React.FC = () => (
  <>
    <Composition id="Enviar" component={EnviarClassico} durationInFrames={720} fps={30} width={1080} height={1920} />
    <Composition id="EnviarTron" component={EnviarTron} durationInFrames={720} fps={30} width={1080} height={1920} />
  </>
);

registerRoot(Root);
