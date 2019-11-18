import { darken } from 'polished';

// export const backgroundMain = '#ff6347';
// export const backgroundSecond = '#ff3938';

// export const backgroundMain = '#666';
// export const backgroundSecond = '#111';

// export const backgroundMain = '#f70';
// export const backgroundSecond = '#f32';

// export const backgroundMain = '#f3de29';
// export const backgroundSecond = '#fa0';

export const backgroundMain = '#68d';
export const backgroundSecond = darken(0.3, backgroundMain);

export const accentColor = '#38f';

export const background = `linear-gradient(135deg, ${backgroundMain}, ${backgroundSecond})`;
