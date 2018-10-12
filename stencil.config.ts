import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'agc-ui',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  globalStyle: 'src/global/variables.css' 
};
