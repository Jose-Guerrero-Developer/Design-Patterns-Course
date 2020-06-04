import { db }         from '../../configs/db.js'
import { MySQL      } from './MySQL.js'
import { PostgreSQL } from './PostgreSQL.js'
import { Provider   } from '../enum/Provider.js'

export abstract class Model {
  /**
   * - En: Set up the instance with the database providers
   * - Es: Establece la instancia con los proveedores de base de datos
   * @var MySQL - PostgreSQL
   */
  private adapter: MySQL | PostgreSQL
  /**
   * - En: Build adapter instance and establish connection to database
   * - Es: Construir instancia adaptador y establece conexión con la base de datos
   * @return void
   */
  constructor() { this.buildInAdapter().connection() }
  /**
   * - En: Set the instance with the provider
   * - Es: Establece la instancia con el proveedor
   * @return Model
   */
  private buildInAdapter(): this {
    switch (db.mode) {
      case Provider.MySQL:
        this.adapter = new MySQL
        break
      case Provider.PostgreSQL:
        this.adapter = new PostgreSQL
        break
      default:
        throw new Error('Set a valid configuration for the database type')
    }
    return this
  }
  /**
   * - En: Establish connection to the database
   * - Es: Establece conexión con la base de datos
   * @return
   */
  private connection(): string { return this.adapter.connection() }
  /**
   * - En: Return all resources
   * - Es: Retorna todos los recursos
   * @return
   */
  public all(): string { return this.adapter.all() }
  /**
   * - En: Returns the requested resource
   * - Es: Retorna el recurso solicitado
   * @return
   */
  public find(): string { return this.adapter.find() }
}
