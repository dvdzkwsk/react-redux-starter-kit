// Require all files in ~/src, excluding app.js
const srcContext = require.context('./src', true, /^((?!app).)*\.(js|jsx)/);
srcContext.keys().forEach(srcContext);
