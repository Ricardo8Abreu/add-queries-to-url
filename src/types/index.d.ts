export type Queries = Record<string, string>;

export interface AddQueriesToUrlParams {
  url: string;
  queries?: Queries;
}