declare global {
  interface Window {
    allValues?: any;
    Intercom?: any;
    intercomSettings?: any;
    attachEvent?: any;
  }
}

// need to use this instead of Object.values – problem in Chrome 65
// when object has functions as values it returns array of strings
window.allValues = (obj) => Object.keys(obj).map(k => obj[k]);

export const TemporaryConstantRemoveLater = {};
