const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// 워크스페이스 외부 경로 포함
config.watchFolders = [path.resolve(__dirname, "../../packages/ui")];

// symlink된 모듈을 처리
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "../../node_modules"),
];

module.exports = config;
