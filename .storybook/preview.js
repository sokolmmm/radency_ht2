import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: '#BEBEBE',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
