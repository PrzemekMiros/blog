const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets/css");
    eleventyConfig.addPassthroughCopy("./src/assets/js");
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    eleventyConfig.addPassthroughCopy("./src/assets/webfonts");
    eleventyConfig.addPassthroughCopy('./src/admin');
    
    eleventyConfig.addFilter('svg', svgFilter);

    eleventyConfig.addFilter("readablePostDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
          zone: "Europe/Amsterdam",
      }).setLocale('pl').toLocaleString(DateTime.DATE_FULL);
  });
  
  eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
          zone: "Europe/Amsterdam",
      }).setLocale('pl').toISODate();
  });

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
      dir: {
        input: "src",
        output: "public",
        includes: "includes"
      }
    }
  };

