// The added "@type" comment will enable TypeScript type information via VSCode, etc.

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-optimize'
  ],
  root: "src",
  buildOptions: {
    out: "dist"
  }
};