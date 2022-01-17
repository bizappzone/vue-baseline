// Example preset
module.exports = {
  theme: {
    extend: {
      colors: {
        "primary-5-color": "#2572b4",
        "primary-4-color": "#fecaca",
        "primary-6-color": "#143c5f",
        // 'primary-dark-5-color': 'var(--primary-dark-color)',
        // 'primary-dark-4-color': 'var(--primary-dark-4-color)',
        // 'primary-dark-6-color': 'var(--primary-dark-6-color)',

        "on-primary-5-color": "#fff",
        "on-primary-4-color": "#ebebeb",
        "on-primary-6-color": "#ebebeb",
        // 'on-primary-dark-5-color': 'var(--on-primary-dark-color)',
        // 'on-primary-dark-4-color': 'var(--on-primary-dark-4-color)',
        // 'on-primary-dark-6-color': 'var(--on-primary-dark-6-color)',

        "secondary-5-color": "#eaebed",
        "secondary-4-color": "#4f46e5",
        // "secondary-4-color": "var(--secondary)",
        "secondary-6-color": "#dcdee1",
        // 'secondary-dark-5-color': 'var(--secondary-dark-color)',
        // 'secondary-dark-4-color': 'var(--secondary-dark-4-color)',
        // 'secondary-dark-6-color': 'var(--secondary-dark-6-color)',

        "on-secondary-5-color": "#335075",
        "on-secondary-4-color": "var(--on-secondary-4-color)",
        "on-secondary-6-color": "var(--on-secondary-6-color)",
        // 'on-secondary-dark-5-color': 'var(--on-secondary-dark-color)',
        // 'on-secondary-dark-4-color': 'var(--on-secondary-dark-4-color)',
        // 'on-secondary-dark-6-color': 'var(--on-secondary-dark-6-color)',

        "accent-5-color": "#4d4d4d",
        "accent-4-color": "var(--accent-4-color)",
        "accent-6-color": "#1a1a1a",
        // 'accent-dark-5-color': 'var(--accent-dark-color)',
        // 'accent-dark-4-color': 'var(--accent-dark-4-color)',
        // 'accent-dark-6-color': 'var(--accent-dark-6-color)',

        // 'on-accent-5-color': 'var(--on-accent-color)',
        // 'on-accent-4-color': 'var(--on-accent-4-color)',
        // 'on-accent-6-color': 'var(--on-accent-6-color)',
        // 'on-accent-dark-5-color': 'var(--on-accent-dark-color)',
        // 'on-accent-dark-4-color': 'var(--on-accent-dark-4-color)',
        // 'on-accent-dark-6-color': 'var(--on-accent-dark-6-color)',

        // 'warn-5-color': 'var(--warn-color)',
        // 'warn-4-color': 'var(--warn-4-color)',
        // 'warn-6-color': 'var(--warn-6-color)',
        // 'warn-dark-5-color': 'var(--warn-dark-color)',
        // 'warn-dark-4-color': 'var(--warn-dark-4-color)',
        // 'warn-dark-6-color': 'var(--warn-dark-6-color)',

        // 'on-warn-5-color': 'var(--on-warn-color)',
        // 'on-warn-4-color': 'var(--on-warn-4-color)',
        // 'on-warn-6-color': 'var(--on-warn-6-color)',
        // 'on-warn-dark-5-color': 'var(--on-warn-dark-color)',
        // 'on-warn-dark-4-color': 'var(--on-warn-dark-4-color)',
        // 'on-warn-dark-6-color': 'var(--on-warn-dark-6-color)',

        // 'disable-5-color': 'var(--disable-color)',
        // 'disable-4-color': 'var(--disable-4-color)',
        // 'disable-6-color': 'var(--disable-6-color)',
        // 'disable-dark-5-color': 'var(--disable-dark-color)',
        // 'disable-dark-4-color': 'var(--disable-dark-4-color)',
        // 'disable-dark-6-color': 'var(--disable-dark-6-color)',

        // 'on-disable-5-color': 'var(--on-disable-color)',
        // 'on-disable-4-color': 'var(--on-disable-4-color)',
        // 'on-disable-6-color': 'var(--on-disable-6-color)',
        // 'on-disable-dark-5-color': 'var(--on-disable-dark-color)',
        // 'on-disable-dark-4-color': 'var(--on-disable-dark-4-color)',
        // 'on-disable-dark-6-color': 'var(--on-disable-dark-6-color)',
      },
      backgoundColor: {
        skin: {
          // primary: "#f87171",
          // 'primary-button': 'var(--button-color)',
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
