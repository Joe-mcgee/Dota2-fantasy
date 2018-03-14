

module.exports.createTimePad = (series = 10, timeout = 1000) => {
  let seriesCounter = 0;
  let delay = 0;

  return () => {
    return new Promise((resolve) => {
      if (--seriesCounter <= 0) {
        delay += timeout;
        seriesCounter = series;
      }

      setTimeout(resolve, delay);
    });
  };
};
