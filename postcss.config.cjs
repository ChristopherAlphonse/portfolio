const tailwindcss = require("tailwindcss");

module.exports = {
  Plugin: [
    require("autoprefixer"),
    tailwindcss("./tailwind.config.js"),
    process.env.NODE_ENV === "production"
      ? require("@fullhuman/postcss-purgecss")({
          content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
          defaultExtractor: (content) =>
            content.match(/[A-Za-z0-9-_:/]+/g) || [],
        })
      : "",
  ],
};
