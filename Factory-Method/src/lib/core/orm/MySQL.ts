import { Builder } from './interfaces/Builder.js'

export class MySQL implements Builder {
  /**
   * - En: Establish the connection to the database
   * - Es: Estable la conexión con la base de datos
   * @return
   */
  connection(): string {
    return 'Method connection (MySQL)'
  }
  /**
   * - En: Return all resources
   * - Es: Retorna todos los recursos
   * @return
   */
  all():string {
    return 'Method all, return all records (MySQL)'
  }
  /**
   * - En: Returns the requested resource
   * - Es: Retorna el recurso solicitado
   * @return
   */
  find(): string {
    return 'Method find, return find id record (MySQL)'
  }
}
