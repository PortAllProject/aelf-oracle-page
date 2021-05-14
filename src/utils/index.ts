import {config} from '../constants';

export type FDemoUtil = (
  user: string
) => {
  name: string
  version: number
}

export const demoUtil: FDemoUtil = (user) => {
  return {
    name: config.name,
    version: 0.1,
  }
};
