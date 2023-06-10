const { getDefaultConfig } = require('@expo/metro-config');

// module.exports = getDefaultConfig(__dirname);

const updateExts = (data) => {
  data.push('cjs');
  return data.filter((ext) => ext !== 'svg');
};

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: updateExts(assetExts),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
