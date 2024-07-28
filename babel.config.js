module.exports = function (api) {
  const presets = ["babel-preset-expo"];
  const plugins = [];
  if (api.env("production")) plugins.push("transform-remove-console");
  plugins.push("react-native-reanimated/plugin");
  api.cache(true);
  return { presets, plugins };
};
