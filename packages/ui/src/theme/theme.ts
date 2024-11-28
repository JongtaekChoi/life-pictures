const lightTheme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#ffffff",
    text: "#333333",
  },
  spacing: (factor: number) => `${factor * 8}px`,
};

type Theme = typeof lightTheme;

const darkTheme: Theme = {
  colors: {
    primary: "#2980b9",
    secondary: "#27ae60",
    background: "#2c3e50",
    text: "#ecf0f1",
  },
  spacing: (factor: number) => `${factor * 8}px`,
};

export { lightTheme, darkTheme };
export type { Theme };
