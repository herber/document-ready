module.exports = (cb) => {
  if (typeof document != 'object') throw new Error('document must be object');

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    return setTimeout(cb, 0)
  }

  document.addEventListener('DOMContentLoaded', () => {
    cb();
  });
};
