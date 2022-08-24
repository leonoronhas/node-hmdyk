/**
 * Countdown date formatter
 */
const countdown = (seconds) => {
  const d = Math.floor(seconds / (3600 * 24));
  let s = seconds;
  s -= d * 3600 * 24;

  const h = Math.floor(s / 3600);

  s -= h * 3600;

  const m = Math.floor(s / 60);

  s -= m * 60;

  const tmp = [];

  d && tmp.push(d + "d");

  (d || h) && tmp.push(h + "h");

  (d || h || m) && tmp.push(m + "m");

  tmp.push(s + "s");

  return tmp.join(" ");
};

module.exports = { countdown };
