/**
 * - En: Interface for the construction of the data model
 * - Es: Interfaz para la construcción de el modelo de datos
 * @return Builder
 */
export interface Builder {
  connection(): string, all(): string, find(): string
}
