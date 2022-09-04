import '../styles/app.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
};

export const decorators = [
  (Story) => (
    <div className="app">
      <Story />
    </div>
  ),
];
