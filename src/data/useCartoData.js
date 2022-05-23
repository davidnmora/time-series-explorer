import dataB from '../data/hardCodedDataB.json'
import dataA from '../data/hardCodedDataA.json'

const useCartoData = (
  cartoTableName,
  fields,
  sqlFilter = '',
  dataFormatter = (data) => data,
  defaultValue = []
) => {
  // hardcoded so we don't rely on CORI's server, which may change
  if (cartoTableName === 'mrli_county_time_series') {
    return dataFormatter(dataB)
  } else {
    return dataFormatter(dataA)
  }
}

export default useCartoData
