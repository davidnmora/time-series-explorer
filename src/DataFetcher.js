import axios from 'axios'

class DataFetcher {
  constructor() {
    this._cartoClientCredentials = {
      apiKey: 'default_public',
      username: 'ruralinnovation-admin',
      CARTO_SERVER: 'https://ruralinnovation-admin.carto.com',
    }
  }

  fetchSQL = (cartoLayerId, fields, sqlFilter = '') => {
    const DEV_SQL_CLIENT = axios.create({
      method: 'get',
      url: `${this._cartoClientCredentials.CARTO_SERVER}/api/v2/sql`,
    })

    const _fields = Array.isArray(fields) ? fields.join(',') : fields

    const sqlQuery = {
      query: `SELECT ${_fields} FROM "${this._cartoClientCredentials.username}".${cartoLayerId} ${sqlFilter}`,
    }
    const promise = DEV_SQL_CLIENT.request({
      params: {
        q: sqlQuery.query,
        api_key: this._cartoClientCredentials.apiKey,
        data: sqlQuery,
      },
    })

    return promise.then((res) => res.data.rows)
  }
}

export default new DataFetcher()
