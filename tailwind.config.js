// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  // ...
};
