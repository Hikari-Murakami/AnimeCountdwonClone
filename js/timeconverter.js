convertMilliseconds = (ms) => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const remainingSeconds = seconds % 60
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;

  return {
    days,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds
  };
}
module.exports = { convertMilliseconds };
