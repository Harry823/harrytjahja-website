import coreWebVitals from 'eslint-config-next/core-web-vitals';

export default [
  ...coreWebVitals,
  {
    rules: {
      // App Router loads fonts in layout.tsx, not pages/_document.js
      '@next/next/no-page-custom-font': 'off',
    },
  },
];
