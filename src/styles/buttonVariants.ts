import { designTokens } from './designTokens';

const { color, border } = designTokens;

type ButtonVariantStyles = {
  backgroundColor?: string;
  color?: string;
  border?: string;
};

type ButtonVariantStates = {
  enabled: ButtonVariantStyles;
  hovered: ButtonVariantStyles;
  pressed: ButtonVariantStyles;
  disabled: ButtonVariantStyles;
  loading: ButtonVariantStyles;
};

type ButtonVariants = {
  filled: {
    primary: ButtonVariantStates;
    secondary: ButtonVariantStates;
    tertiary: ButtonVariantStates;
  };
  outlined: {
    primary: ButtonVariantStates;
    secondary: ButtonVariantStates;
    tertiary: ButtonVariantStates;
  };
  text: {
    primary: ButtonVariantStates;
    secondary: ButtonVariantStates;
    tertiary: ButtonVariantStates;
  };
};

export const buttonVariants: ButtonVariants = {
  filled: {
    primary: {
      enabled: {
        backgroundColor: color.primary.base1,
        color: color.primary.text1,
        border: 'none',
      },
      hovered: {
        backgroundColor: color.primary.base2,
        color: color.primary.text1,
      },
      pressed: {
        backgroundColor: color.primary.base3,
      },
      disabled: {
        backgroundColor: color.disabled.base,
        color: color.disabled.text,
        border: 'none',
      },
      loading: {
        backgroundColor: color.primary.base3,
      },
    },
    secondary: {
      enabled: {
        backgroundColor: color.secondary.base1,
        color: color.secondary.text1,
        border: 'none',
      },
      hovered: {
        backgroundColor: color.secondary.base2,
        color: color.secondary.text1,
      },
      pressed: {
        backgroundColor: color.secondary.base3,
      },
      disabled: {
        backgroundColor: color.disabled.base,
        color: color.disabled.text,
        border: 'none',
      },
      loading: {
        backgroundColor: color.secondary.base1,
      },
    },
    tertiary: {
      enabled: {
        backgroundColor: color.surface.base2,
        color: color.surface.text1,
        border: 'none',
      },
      hovered: {
        backgroundColor: color.surface.base3,
        color: color.surface.text1,
      },
      pressed: {
        backgroundColor: color.surface.line,
      },
      disabled: {
        backgroundColor: color.disabled.base,
        color: color.disabled.text,
        border: 'none',
      },
      loading: {
        backgroundColor: color.surface.line,
      },
    },
  },
  outlined: {
    primary: {
      enabled: {
        backgroundColor: 'transparent',
        color: color.primary.base1,
        border: `${border.weight.medium.borderWidth} solid ${color.primary.base1}`,
      },
      hovered: {
        backgroundColor: color.primary.tonal,
        color: color.primary.base1,
      },
      pressed: {
        backgroundColor: color.primary.base1,
        color: color.primary.text1,
      },
      disabled: {
        color: color.disabled.text,
        backgroundColor: 'transparent',
        border: `${border.weight.medium.borderWidth} solid ${color.disabled.text}`,
      },
      loading: {
        backgroundColor: color.primary.base1,
      },
    },
    secondary: {
      enabled: {
        backgroundColor: 'transparent',
        color: color.secondary.base1,
        border: `${border.weight.medium.borderWidth} solid ${color.secondary.base1}`,
      },
      hovered: {
        backgroundColor: color.secondary.tonal,
        color: color.secondary.base1,
      },
      pressed: {
        backgroundColor: color.secondary.base1,
        color: color.secondary.text1,
      },
      disabled: {
        color: color.disabled.text,
        backgroundColor: 'transparent',
        border: `${border.weight.medium.borderWidth} solid ${color.disabled.text}`,
      },
      loading: {
        backgroundColor: color.secondary.base1,
        color: color.secondary.text1,
      },
    },
    tertiary: {
      enabled: {
        backgroundColor: 'transparent',
        color: color.surface.text1,
        border: `${border.weight.medium.borderWidth} solid ${color.surface.base2}`,
      },
      hovered: {
        backgroundColor: color.surface.base2,
        color: color.surface.text1,
      },
      pressed: {
        backgroundColor: color.surface.base3,
        color: color.surface.text1,
        border: `${border.weight.medium.borderWidth} solid ${color.surface.base2}`,
      },
      disabled: {
        color: color.disabled.text,
        backgroundColor: 'transparent',
        border: `${border.weight.medium.borderWidth} solid ${color.disabled.text}`,
      },
      loading: {
        backgroundColor: color.primary.base1,
        color: color.primary.text1,
      },
    },
  },
  text: {
    primary: {
      enabled: {
        backgroundColor: 'transparent',
        color: color.primary.base1,
        border: 'none',
      },
      hovered: {
        backgroundColor: color.primary.tonal,
        color: color.primary.base1,
      },
      pressed: {
        backgroundColor: color.primary.base1,
        color: color.primary.text1,
      },
      disabled: {
        color: color.disabled.text,
        backgroundColor: 'transparent',
        border: 'none',
      },
      loading: {
        backgroundColor: color.primary.base1,
        color: color.primary.text1,
      },
    },
    secondary: {
      enabled: {
        backgroundColor: 'transparent',
        color: color.secondary.base1,
        border: 'none',
      },
      hovered: {
        backgroundColor: color.secondary.tonal,
        color: color.secondary.base1,
      },
      pressed: {
        backgroundColor: color.secondary.base1,
        color: color.secondary.text1,
      },
      disabled: {
        color: color.disabled.text,
        backgroundColor: 'transparent',
        border: 'none',
      },
      loading: {
        backgroundColor: color.secondary.base1,
        color: color.secondary.text1,
      },
    },
    tertiary: {
      enabled: {
        backgroundColor: 'transparent',
        color: color.surface.text2,
        border: 'none',
      },
      hovered: {
        backgroundColor: color.surface.base2,
        color: color.surface.text2,
      },
      pressed: {
        backgroundColor: color.surface.text2,
        color: color.surface.base1,
      },
      disabled: {
        color: color.disabled.text,
        backgroundColor: 'transparent',
        border: 'none',
      },
      loading: {
        backgroundColor: color.surface.text2,
        color: color.surface.base1,
      },
    },
  },
};
