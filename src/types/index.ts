type Queries = Record<string, string>;

interface AddQueriesToUrlParams {
  url: string;
  queries?: Queries;
}

export type {
  Queries,
  AddQueriesToUrlParams
}