module.exports = {
  description() {
    return 'generates a blueprint and definition';
  },

  beforeInstall() {
    console.log('Before installation hook!');
  },

  afterInstall() {
    console.log('After installation hook!');
  }
};
