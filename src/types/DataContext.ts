export type DataContext<P> = 
  | { type: 'list'; data: P[] }
  | { type: 'object'; data: P };