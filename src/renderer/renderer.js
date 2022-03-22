import { createContext } from './context';
import {
  line, circle, text, rect, path, ring,
} from './shape';
import {
  restore, save, scale, translate, rotate,
} from './transform';

export function createRenderer(width, height) {
  const context = createContext(width, height);
  return {
    line: (options) => line(context, options),
    path: (options) => path(context, options),
    rect: (options) => rect(context, options),
    ring: (options) => ring(context, options),
    text: (options) => text(context, options),
    circle: (options) => circle(context, options),
    scale: (...args) => scale(context, ...args),
    rotate: (...args) => rotate(context, ...args),
    translate: (...args) => translate(context, ...args),
    restore: () => restore(context),
    save: () => save(context),
    node: () => context.node,
    group: () => context.group,
  };
}
