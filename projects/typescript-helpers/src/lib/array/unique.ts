declare global {
  interface Array<T> {
    unique: () => Array<T>;
  }
}

if (!Array.prototype.unique) {
  Array.prototype.unique = function() {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (result.indexOf(this[i]) === -1) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

export const TemporaryConstantRemoveLater = {};
