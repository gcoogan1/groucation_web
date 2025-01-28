type Palettes = {
  [key: string]: string;
};

/* Core Colors */
/* NOTE --> Focus core color is defined inside semanticColors */

type PrimitiveColors = {
  groupcationPink: Palettes;
  grayscale: Palettes;
};

const primitiveColors: PrimitiveColors = {
  groupcationPink: {
    '50': '#FEF2F8',
    '100': '#FACCE4',
    '200': '#F499C9',
    '300': '#EF66AE',
    '400': '#E93393',
    '500': '#E40078',
    '600': '#B60060',
    '700': '#890048',
    '800': '#5B0030',
    '900': '#2E0018',
  },
  grayscale: {
    '50': '#FFFFFF',
    '100': '#F0EFF0',
    '200': '#E2DFE0',
    '300': '#D3CED1',
    '400': '#C5BEC1',
    '500': '#B6AEB2',
    '600': '#928B8E',
    '700': '#6D686B',
    '800': '#494647',
    '900': '#242324',
  },
};

/* Colors Themes */

type SemanticColors = {
  primary: Palettes;
  secondary: Palettes;
  surface: Palettes;
  disabled: Palettes;
  focus: Palettes;
};

const semanticColors: SemanticColors = {
  primary: {
    base1: primitiveColors.groupcationPink[500],
    base2: primitiveColors.groupcationPink[600],
    base3: primitiveColors.groupcationPink[700],
    tonal: primitiveColors.groupcationPink[50],
    text1: primitiveColors.grayscale[50],
  },
  secondary: {
    base1: primitiveColors.grayscale[900],
    base2: primitiveColors.grayscale[800],
    base3: primitiveColors.grayscale[700],
    tonal: primitiveColors.grayscale[100],
    text1: primitiveColors.grayscale[50],
    text2: primitiveColors.grayscale[400],
  },
  surface: {
    base1: primitiveColors.grayscale[50],
    base2: primitiveColors.grayscale[100],
    base3: primitiveColors.grayscale[200],
    line: primitiveColors.grayscale[300],
    text1: primitiveColors.grayscale[900],
    text2: primitiveColors.grayscale[700],
  },
  disabled: {
    base: primitiveColors.grayscale[200],
    text: primitiveColors.grayscale[600],
  },
  focus: {
    base: '#0000FF',
  },
};

/* Fonts */

type Typography = {
  fontFamily: Palettes;
  fontSize: Palettes;
  lineHeight: Palettes;
  fontWeight: Palettes;
};

const typography: Typography = {
  fontFamily: {
    sans: "'Rubik', sans-serif",
  },
  fontSize: {
    12: '12px',
    14: '14px',
    18: '18px',
    24: '24px',
    32: '32px',
    42: '42px',
    54: '54px',
    68: '68px',
  },
  lineHeight: {
    18: '18px',
    22: '22px',
    26: '26px',
    32: '32px',
    42: '42px',
    54: '54px',
    70: '70px',
    88: '88px',
  },
  fontWeight: {
    regular: '400',
    bold: '600',
    black: '800',
  },
};

/* Font Themes */

type FontValues = {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
};

type FontPalettes = {
  [key: string]: FontValues;
};

type Font = {
  body: FontPalettes;
  title: FontPalettes;
  display: FontPalettes;
};

const font: Font = {
  body: {
    small: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[12],
      lineHeight: typography.lineHeight[18],
      fontWeight: typography.fontWeight.regular,
    },
    smallBold: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[12],
      lineHeight: typography.lineHeight[18],
      fontWeight: typography.fontWeight.bold,
    },
    medium: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[14],
      lineHeight: typography.lineHeight[22],
      fontWeight: typography.fontWeight.regular,
    },
    mediumBold: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[14],
      lineHeight: typography.lineHeight[22],
      fontWeight: typography.fontWeight.bold,
    },
  },
  title: {
    small: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[18],
      lineHeight: typography.lineHeight[26],
      fontWeight: typography.fontWeight.bold,
    },
    medium: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[24],
      lineHeight: typography.lineHeight[32],
      fontWeight: typography.fontWeight.bold,
    },
    large: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[32],
      lineHeight: typography.lineHeight[42],
      fontWeight: typography.fontWeight.bold,
    },
  },
  display: {
    small: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[42],
      lineHeight: typography.lineHeight[54],
      fontWeight: typography.fontWeight.black,
    },
    medium: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[54],
      lineHeight: typography.lineHeight[70],
      fontWeight: typography.fontWeight.black,
    },
    large: {
      fontFamily: typography.fontFamily.sans,
      fontSize: typography.fontSize[68],
      lineHeight: typography.lineHeight[88],
      fontWeight: typography.fontWeight.black,
    },
  },
};

/* Border Themes */

type BorderWidth = {
  borderWidth: string;
};

type BorderRadius = {
  borderRadius: string;
};

type Border = {
  weight: {
    thin: BorderWidth;
    medium: BorderWidth;
    think: BorderWidth;
  };
  radius: {
    sharp: BorderRadius;
    small: BorderRadius;
    medium: BorderRadius;
    large: BorderRadius;
    xLarge: BorderRadius;
    round: BorderRadius;
  };
};

const border: Border = {
  weight: {
    thin: {
      borderWidth: '1px',
    },
    medium: {
      borderWidth: '2px',
    },
    think: {
      borderWidth: '4px',
    },
  },
  radius: {
    sharp: {
      borderRadius: '0px',
    },
    small: {
      borderRadius: '4px',
    },
    medium: {
      borderRadius: '8px',
    },
    large: {
      borderRadius: '12px',
    },
    xLarge: {
      borderRadius: '16px',
    },
    round: {
      borderRadius: '999px',
    },
  },
};

/* Effect */

// --> Opacity
type OpacityValue = {
  opacity: string;
};

type Opacity = {
  full: OpacityValue;
  overlay: OpacityValue;
  strong: OpacityValue;
  medium: OpacityValue;
  weak: OpacityValue;
  tonal: OpacityValue;
};

const opacity: Opacity = {
  full: {
    opacity: '100%',
  },
  overlay: {
    opacity: '90%',
  },
  strong: {
    opacity: '75%',
  },
  medium: {
    opacity: '50%',
  },
  weak: {
    opacity: '25%',
  },
  tonal: {
    opacity: '5%',
  },
};

// --> Shadow
type Shadow = {
  card: {
    boxShadow: string;
  };
};

const shadow: Shadow = {
  card: {
    boxShadow: '4px 4px 16px -4px rgba(36, 5, 36, .05)',
  },
};

type Effect = {
  opacity: Opacity;
  shadow: Shadow;
};

const effect: Effect = {
  opacity,
  shadow,
};

/* Layout */

type Layout = {
  space: Palettes;
};

const layout: Layout = {
  space: {
    '2xSmall': '2px',
    xSmall: '4px',
    small: '8px',
    mediumSmall: '12px',
    medium: '16px',
    mediumLarge: '24px',
    large: '32px',
    xLarge: '64px',
  },
};

export const designTokens = {
  color: { ...semanticColors },
  font: { ...font },
  border: { ...border },
  effect: { ...effect },
  // opacity: { ...opacity },
  // shadow: { ...shadow },
  layout: { ...layout },
};
