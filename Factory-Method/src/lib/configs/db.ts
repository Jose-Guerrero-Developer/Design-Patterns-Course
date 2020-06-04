import { Provider } from '../core/enum/Provider.js'
import { ConfigDB } from '../core/types/ConfigDB.js'

/**
 * - En: Sets up the database configuration
 * - Es: Establece la configuración de base de datos
 * @return {mode, connections}
 */
export const db: ConfigDB = {
  mode: Provider.PostgreSQL,
  connections: {
    mysql: {
      host: 'localhost', port: 3306, name: 'typescirpt', password: '123456'
    },
    postgres: {
      host: 'localhost', port: 5432, name: 'typescript', password: '123456'
    }
  }
}
