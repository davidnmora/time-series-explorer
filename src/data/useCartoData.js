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
    DataFetcher.fetchSQL(cartoTableName, fields, sqlFilter).then(
      (fetchedData) => {
        const formattedData = dataFormatter
          ? dataFormatter(fetchedData)
          : fetchedData
        setData(formattedData)
      }
    )
  }, [cartoTableName, fields, dataFormatter, sqlFilter])

  return data
}

export default useCartoData
