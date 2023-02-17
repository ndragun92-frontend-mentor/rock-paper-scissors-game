/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 */
module.exports = {
  content: [],
  safelist: [
    "shadow-outerRockLarge",
    "shadow-outerPaperLarge",
    "shadow-outerScissorsLarge",
    "shadow-inner",
    "shadow-innerLarge",
  ],
  theme: {
    screens: {
      touch: { raw: "hover: none" },
      "can-hover": { raw: "hover: hover" },
      xxs: "380px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1366px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
    },
    extend: {
      backgroundImage: {
        default:
          "radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        scissors: "radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        paper: "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        rock: "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        lizard: "radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        cyan: "radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
      },
      colors: {
        primary: {
          dark: "hsl(229, 25%, 31%)",
          light: "#f8f8f8",
          score: "hsl(229, 64%, 46%)",
          header: "hsl(217, 16%, 45%)",
          close: "#3B4262",
        },
      },
      boxShadow: {
        outerPlaceholder: "0 10px 1px -1px transparent",
        outerPlaceholderLarge: "0 15px 1px -1px transparent",
        outerRock: "0 10px 1px -1px #9f1535, 0 8px 7px 0 rgb(0 0 0 / 40%)",
        outerRockLarge: "0 15px 1px -1px #9f1535, 0 8px 7px 0 rgb(0 0 0 / 40%)",
        outerPaper: "0 10px 1px -1px #2a48c4, 0 8px 7px 0 rgb(0 0 0 / 40%)",
        outerPaperLarge:
          "0 15px 1px -1px #2a48c4, 0 8px 7px 0 rgb(0 0 0 / 40%)",
        outerScissors: "0 10px 1px -1px #c76e1e, 0 8px 7px 0 rgb(0 0 0 / 40%)",
        outerScissorsLarge:
          "0 15px 1px -1px #c76e1e, 0 8px 7px 0 rgb(0 0 0 / 40%)",
        inner: "inset 0 10px 1px -1px #b9bfd4",
        innerLarge: "inset 0 15px 1px -1px #b9bfd4",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
    },
  },
};
