export const tokens = {
  grey: {
    100: "#d0d0d0",
    200: "#a0a0a0",
    300: "#707070",
    400: "#404040",
    500: "#101010",
    600: "#0d0d0d",
    700: "#0a0a0a",
    800: "#070707",
    900: "#040404"
  },
  primary: {
    // light green
    100: "#ffe4e9",  // light pink
    200: "#ffb3c1",  // soft pink
    300: "#ff8099",  
    400: "#ffe4e9",  // light pink
    500: "#ffb3c1",  // soft pink
    600: "#ff8099",  
    700: "#ffe4e9",  // light pink
    800: "#ffb3c1",  // soft pink
    900: "#ff8099",  
  },
  secondary: {
    // yellow
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#f7d299",
    400: "#f5c377",
    500: "#f2b455",
    600: "#c29044",
    700: "#916c33",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // purple
    500: "#9333ea",
  },
  background: {
    light:"#f8fafc",
    main: "#1f2026",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.light,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 34,
    },
    h2: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 26,
    },
    h3: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
