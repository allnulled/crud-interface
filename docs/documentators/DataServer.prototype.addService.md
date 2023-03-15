**Descripción:**

Esta función (prototipada) sirve para añadir nuevos **servicios de datos** al `DataServer`.

> Por **servicios de datos** se entienden las clases que derivan de `DataService` y representan tablas de la base de datos.

Los servicios de datos, por tanto, se encargan de puente entre el `DataServer` y la base de datos.

**Parámetros:**

Parámetro 1: interfaz estática

  - **Nombre:** `staticInterface`
  - **Tipo:** `Object`
  - **Valor por defecto:** `{}`
  - **Descripción:** Este parámetro extiende la instancia de `DataService` a ser creada, mediante `Object.assign`.

Parámetro 2: interfaz dinámica

  - **Nombre:** `dynamicInterface`
  - **Tipo:** `Object`
  - **Valor por defecto:** `{}`
  - **Descripción:** Este parámetro extiende la instancia de `DataService.prototype` a ser creada, mediante `Object.assign`.

Parámetro 3: función constructora

  - **Nombre:** `constructorFunction`
  - **Tipo:** `Function`
  - **Valor por defecto:** `() => undefined`
  - **Descripción:** Este parámetro es el constructor de instancias del servicio.

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `DataServer`
  - **Descripción:** Esta función retorna la instancia de `DataServer` que ha gestionado la operación, lista para continuar añadiendo queries tal que `dataServer.addService({ ... }).addService({ ... })`.
