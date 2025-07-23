import verifyData from '@riki/verify-accounting-data'

import { type AddQueriesToUrlParams } from './types'

export type Queries = Record<string, string>;

const addQueriesToUrl = ({ url, queries = {} }: AddQueriesToUrlParams) => {
  const { hasData: hasQueries } = verifyData(queries)

  if (!hasQueries) {
    return url
  }

  const objectify = Object.entries(queries)

  const filteredData = objectify.filter(([key, value]) => {
    const { hasData: hasValue } = verifyData(value)
    return hasValue
  })

  const { hasData: hasFilteredQueries } = verifyData(filteredData)

  if (hasFilteredQueries) {
    const queryString = new URLSearchParams(filteredData).toString()
    url = url.concat(`?${queryString}`)
  }

  return url
}

export default addQueriesToUrl

export * from './types'