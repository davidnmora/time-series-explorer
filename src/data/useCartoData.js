import { useEffect, useState } from 'react'
import DataFetcher from './DataFetcher'

const useCartoData = (
  cartoTableName,
  fields,
  sqlFilter = '',
  dataFormatter = null
) => {
  const [data, setData] = useState([])

  useEffect(() => {
    DataFetcher.fetchSQL(
      cartoTableName,
      fields,
      sqlFilter
    ).then((fetchedData) =>
      setData(dataFormatter ? dataFormatter(fetchedData) : fetchedData)
    )
  }, [cartoTableName, fields, dataFormatter, sqlFilter])

  return data
}

export default useCartoData
