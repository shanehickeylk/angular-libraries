declare global {
  interface Array<T> {
    isArrayEqual: (Array) => boolean;
  }
}

if (!Array.prototype.isArrayEqual) {
  Array.prototype.isArrayEqual = function(otherArray) {
    return (this.length === otherArray.length) && this.every((element, index) => element === otherArray[index]);
  };
}

export const TemporaryConstantRemoveLater = {};
