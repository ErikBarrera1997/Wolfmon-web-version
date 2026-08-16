let canvasFactory = null;

export function isBrowser() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}

export function setCanvasFactory(fn) {
  canvasFactory = fn;
}

export function getCanvasFactory() {
  if (canvasFactory) return canvasFactory;
  if (isBrowser()) {
    return (width, height) => {
      const c = window.document.createElement('canvas');
      c.width = width;
      c.height = height;
      return c;
    };
  }
  return null;
}

export function createCtx2D(width, height) {
  const factory = getCanvasFactory();
  if (!factory) {
    throw new Error(
      'No canvas factory available. Run in a browser or call setCanvasFactory().',
    );
  }
  const ctx = factory(width, height).getContext('2d');
  if (!ctx) throw new Error('Failed to obtain a 2d context');
  return ctx;
}
