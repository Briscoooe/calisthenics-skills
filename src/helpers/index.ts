export function getIsElementInWindow(
  windowHeight: number,
  scrollPosition: number,
  elTopPosition: number,
  elHeight: number
) {
  if (windowHeight + scrollPosition > elTopPosition + elHeight) {
    return true;
  }

  return false;
}

export default {
  getIsElementInWindow
};
