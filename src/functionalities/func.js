const formatMe = time => {
  if (time < 10) {
    return "0" + time;
  }
  return `${time}`;
};

export { formatMe };
