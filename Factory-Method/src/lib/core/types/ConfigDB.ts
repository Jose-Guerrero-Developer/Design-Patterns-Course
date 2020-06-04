import { Provider } from '../enum/Provider.js'

/**
 * - En: Sets the type of settings for the database
 * - Es: Establece el tipo de configuraciones para la base de datos
 * @return {mode, connections}
 */
export type ConfigDB = {
  mode: Provider,
  connections: {
    mysql?:    { host: string, port: number, name: string, password: string },
    postgres?: { host: string, port: number, name: string, password: string }
  }
}
