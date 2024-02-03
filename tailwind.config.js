/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        TimesNewRoman: ["Gupter", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Authorfont: ["Minerva-Modern-Regular", "sans-serif"],
        CooperHevitt: ["CooperHewitt-Light", "sans-serif"],
        Gamiliademo: ["GamiliademoRegular-mL9Ev", "sans-serif"],
        VulturaRegular: ["Vultura-Regular", "sans-serif"],
        Mont: ["Mont-ExtraLightDEMO", "sans-serif"],
        Slabo: ["Slabo27px-Regular", "sans-serif"],
        AGaramondProRegular: ["AGaramondPro-Regular", "sans-serif"],
        HankenGrotesk: ["HankenGrotesk-VariableFont_wght", "sans-serif"],
      },
    },
  },
  plugins: [],
};
