module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
  };

module.exports = function(eleventyConfig) {
  // Input Directory : src Output directory: _site

  return {
      dir: { input: 'src', output: '_site' }
  };
};