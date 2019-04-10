declare global {
  interface Array<T> {
    splitInHalves: () => Array<T>;
  }
}

if (!Array.prototype.splitInHalves) {
  Array.prototype.splitInHalves = function() {
    const rightArray = this.slice(0);
    const leftArray = rightArray.splice(0, Math.ceil(rightArray.length / 2));
    return [leftArray, rightArray];
  };
}

export const TemporaryConstantRemoveLater = {};
