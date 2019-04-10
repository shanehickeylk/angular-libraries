import './string/latinize';

export function camelize(str) {
  if (str) {
    return str.toLowerCase().replace(/((\_|\-|\s)[a-z0-9])/g, ($1) => $1.toUpperCase().replace(/(\_|\-|\s)/, ''));
  }
}

// Naive implementaion
export function singularize(str) {
  return str.replace(/s$/, '');
}

export function classify(str) {
  return titleize(camelize(str));
}

export function underscore(str) {
  return str.replace(/\.?([A-Z])/g, (x, y) => {
      return '_' + y.toLowerCase();
  }).replace(/^_/, '');
}

export function titleize(str) {
  return str.replace(/^([a-z])/, ($1) => $1.toUpperCase());
}

export function humanize(str) {
  return underscore(str).replace(/_/g, ' ');
}

export function escapeRegExp(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
