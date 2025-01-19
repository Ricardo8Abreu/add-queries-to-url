import verifyData from 'verify-accounting-data'

export type Queries = Record<string, string>

const addQueriesToUrl = ({ url, queries }: { url: string, queries?: Queries }) => {
  if (!queries) {
    return url
  }
  const objectify = Object.entries(queries)

  const filteredData = objectify.filter(([key, value]) => {
    const { value: hasValue } = verifyData(value)
    return hasValue
  })

  const { value: hasQueries } = verifyData(filteredData)

  if (hasQueries) {
    const queryString = new URLSearchParams(filteredData).toString()
    url = url.concat(`?${queryString}`)
  }

  return url
}

export default addQueriesToUrl
