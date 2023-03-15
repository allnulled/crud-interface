

----

## DataServer

**Tipo:** class

**Índice de propiedad:** root

**Descripción:**

Esta función (constructora de clase y no prototipada) sirve para orquestrar los servicios, el gestor de datos y el gestor de autentificación, entre otras utilidades más secundarias como: despachar peticiones, generar un despachador de peticiones, generar un controlador de servidor o generar un servidor HTTP para Node.js. Esta clase es la clase principal de la API y, de hecho, las demás clases son propiedades estáticas suyas también.

**Parámetros:**

Parámetro único: 

  - **Nombre:** `dyanmicInterface`
  - **Tipo:** `Object`
  - **Valor por defecto:** `{}`
  - **Descripción:** Este parámetro extiende la instancia de `DataServer` a ser creada, mediante `Object.assign`.

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `DataServer`
  - **Descripción:** Esta función retorna la instancia de `DataServer`, lista para ser inicializada con `dataServer.initialize`.






----

## DataServer.create

**Tipo:** function

**Índice de propiedad:** 0

**Descripción:**

Este método sirve para crear una instancia de `DataServer` desde un método estático de la clase (y así evitar el uso de `new` si se requiere).

**Parámetros:**

Parámetro único: 

  - **Nombre:** `dyanmicInterface`
  - **Tipo:** `Object`
  - **Valor por defecto:** `{}`
  - **Descripción:** Este parámetro extiende la instancia de `DataServer` a ser creada, mediante `Object.assign`.

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `DataServer`
  - **Descripción:** Este método retorna una instancia de `DataServer` recién creada.






----

## DataServer.initialize

**Tipo:** function

**Índice de propiedad:** 1

**Descripción:**

Este método sirve para crear **e inicializar** (llamar al `initialize`) una instancia de `DataServer` desde un método estático de la clase (y así evitar el uso de `new` si se requiere).

**Parámetros:**

Parámetro único: 

  - **Nombre:** `dyanmicInterface`
  - **Tipo:** `Object`
  - **Valor por defecto:** `{}`
  - **Descripción:** Este parámetro extiende la instancia de `DataServer` a ser creada, mediante `Object.assign`.

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `Promise<DataServer>`
  - **Descripción:** Este método retorna la instancia de `DataServer` después de haber sido inicializada (de forma asíncrona).






----

## DataServer.RestInterface

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## DataServer.RestByMySQL

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## DataServer.AuthInterface

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## DataServer.AuthByMySQL

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## DataServer.DataService

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## DataServer.RestUtils

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## DataServer.Hooks

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## DataServer.RestByDexie

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## DataServer.AuthByDexie

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## DataServer.VirtualDataServer

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----

## DataServer.VirtualDataService

**Tipo:** function

**Índice de propiedad:** 12

Por documentar.





----

## DataServer.prototype.addService

**Tipo:** function

**Índice de propiedad:** 0

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






----

## DataServer.prototype.addQuery

**Tipo:** function

**Índice de propiedad:** 1

**Descripción:**

Esta función (prototipada) sirve para añadir nuevas queries o **consultas de datos** al `DataServer`.

> Por **consultas de datos** se entienden las clases que derivan de `QueryService` y representan puntos de una aplicación en los que se gestionan operaciones de datos mínimamente complejas.

**Parámetros:**

Parámetro 1: interfaz estática

  - **Nombre:** `staticInterface`
  - **Tipo:** `Object`
  - **Valor por defecto:** `{}`
  - **Descripción:** Este parámetro extiende la instancia de `QueryService` a ser creada, mediante `Object.assign`.

Parámetro 2: interfaz dinámica

  - **Nombre:** `dynamicInterface`
  - **Tipo:** `Object`
  - **Valor por defecto:** `{}`
  - **Descripción:** Este parámetro extiende la instancia de `QueryService.prototype` a ser creada, mediante `Object.assign`.

Parámetro 3: función constructora

  - **Nombre:** `constructorFunction`
  - **Tipo:** `Function`
  - **Valor por defecto:** `() => undefined`
  - **Descripción:** Este parámetro es el constructor de instancias del servicio.

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `DataServer`
  - **Descripción:** Esta función retorna la instancia de `DataServer` que ha gestionado la operación, lista para continuar añadiendo queries tal que `dataServer.addQuery({ ... }).addQuery({ ... })`.






----

## DataServer.prototype.addProcess

**Tipo:** function

**Índice de propiedad:** 2

**Descripción:**

Esta función (prototipada) sirve para añadir nuevos **procesos de datos** al `DataServer`.

> Por **procesos de datos** se entienden las clases que derivan de `ProcessService` y representan puntos de una aplicación en los que se gestionan bloques de operaciones de datos, opcionalmente con algún tipo de persistencia de estado que hace que varíe su conducta.

**Parámetros:**

Parámetro 1: interfaz estática

  - **Nombre:** `staticInterface`
  - **Tipo:** `Object`
  - **Valor por defecto:** `{}`
  - **Descripción:** Este parámetro extiende la instancia de `ProcessService` a ser creada, mediante `Object.assign`.

Parámetro 2: interfaz dinámica

  - **Nombre:** `dynamicInterface`
  - **Tipo:** `Object`
  - **Valor por defecto:** `{}`
  - **Descripción:** Este parámetro extiende la instancia de `ProcessService.prototype` a ser creada, mediante `Object.assign`.

Parámetro 3: función constructora

  - **Nombre:** `constructorFunction`
  - **Tipo:** `Function`
  - **Valor por defecto:** `() => undefined`
  - **Descripción:** Este parámetro es el constructor de instancias del servicio.

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `DataServer`
  - **Descripción:** Esta función retorna la instancia de `DataServer` que ha gestionado la operación, lista para continuar añadiendo queries tal que `dataServer.addProcess({ ... }).addProcess({ ... })`.






----

## DataServer.prototype.dispatch

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## DataServer.prototype.createDispatcher

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## DataServer.prototype.createHttpServerController

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## DataServer.prototype.createHttpServer

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## DataServer.prototype.listen

**Tipo:** function

**Índice de propiedad:** 7

**Descripción:**


**Parámetros:**

Parámetro 1: función constructora

  - **Nombre:** `algo`
  - **Tipo:** `Function`
  - **Valor por defecto:** `() => undefined`
  - **Descripción:** 

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `DataServer`
  - **Descripción:** 






----

## DataServer.prototype.stopDatabaseConnection

**Tipo:** function

**Índice de propiedad:** 8

**Descripción:**


**Parámetros:**

Parámetro 1: función constructora

  - **Nombre:** `algo`
  - **Tipo:** `Function`
  - **Valor por defecto:** `() => undefined`
  - **Descripción:** 

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `DataServer`
  - **Descripción:** 






----

## DataServer.prototype.stopHttpServer

**Tipo:** function

**Índice de propiedad:** 9

**Descripción:**


**Parámetros:**

Parámetro 1: función constructora

  - **Nombre:** `algo`
  - **Tipo:** `Function`
  - **Valor por defecto:** `() => undefined`
  - **Descripción:** 

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `DataServer`
  - **Descripción:** 






----

## DataServer.prototype.resetDatabase

**Tipo:** function

**Índice de propiedad:** 10

**Descripción:**


**Parámetros:**

Parámetro 1: función constructora

  - **Nombre:** `algo`
  - **Tipo:** `Function`
  - **Valor por defecto:** `() => undefined`
  - **Descripción:** 

**Retorno:**

  - **Tipo:** `Object`
  - **Interfaz:** `DataServer`
  - **Descripción:** 






----

## DataServer.prototype.resetAuth

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----

## DataServer.prototype.dispatchSelf

**Tipo:** function

**Índice de propiedad:** 12

Por documentar.





----

## DataServer.prototype.createClient

**Tipo:** function

**Índice de propiedad:** 13

Por documentar.





----

## DataServer.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 14

Por documentar.





----

## DataServer.prototype.initializeRest

**Tipo:** function

**Índice de propiedad:** 15

Por documentar.





----

## DataServer.prototype.initializeAuth

**Tipo:** function

**Índice de propiedad:** 16

Por documentar.





----

## DataServer.prototype.onError

**Tipo:** function

**Índice de propiedad:** 17

Por documentar.





----

## DataServer.prototype.onDispatchError

**Tipo:** function

**Índice de propiedad:** 18

Por documentar.





----



----

## VirtualDataServer

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## VirtualDataServer.create

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## VirtualDataServer.initialize

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## VirtualDataServer.throwOnErrorStatus

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## VirtualDataServer.prototype.addService

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## VirtualDataServer.prototype.addQuery

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## VirtualDataServer.prototype.addProcess

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## VirtualDataServer.prototype.dispatch

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## VirtualDataServer.prototype.createDispatcher

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## VirtualDataServer.prototype.createHttpServerController

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## VirtualDataServer.prototype.createHttpServer

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## VirtualDataServer.prototype.listen

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## VirtualDataServer.prototype.stopDatabaseConnection

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## VirtualDataServer.prototype.stopHttpServer

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## VirtualDataServer.prototype.resetDatabase

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## VirtualDataServer.prototype.resetAuth

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----

## VirtualDataServer.prototype.dispatchSelf

**Tipo:** function

**Índice de propiedad:** 12

Por documentar.





----

## VirtualDataServer.prototype.createClient

**Tipo:** function

**Índice de propiedad:** 13

Por documentar.





----

## VirtualDataServer.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 14

Por documentar.





----

## VirtualDataServer.prototype.initializeRest

**Tipo:** function

**Índice de propiedad:** 15

Por documentar.





----

## VirtualDataServer.prototype.initializeAuth

**Tipo:** function

**Índice de propiedad:** 16

Por documentar.





----

## VirtualDataServer.prototype.onError

**Tipo:** function

**Índice de propiedad:** 17

Por documentar.





----

## VirtualDataServer.prototype.onDispatchError

**Tipo:** function

**Índice de propiedad:** 18

Por documentar.





----



----

## DataService

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## DataService.create

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## DataService.initialize

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## DataService.path

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## DataService.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## DataService.prototype.generateContext

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## DataService.prototype.dispatch

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## DataService.prototype.dispatchDefine

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## DataService.prototype.dispatchSelectOne

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## DataService.prototype.dispatchSelectMany

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## DataService.prototype.dispatchInsertOne

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## DataService.prototype.dispatchInsertMany

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## DataService.prototype.dispatchUpdateOne

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## DataService.prototype.dispatchUpdateMany

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## DataService.prototype.dispatchDeleteOne

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## DataService.prototype.dispatchDeleteMany

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----

## DataService.prototype.dispatchGetFile

**Tipo:** function

**Índice de propiedad:** 12

Por documentar.





----

## DataService.prototype.dispatchSetFile

**Tipo:** function

**Índice de propiedad:** 13

Por documentar.





----

## DataService.prototype.onFormatParametersForSelectOne

**Tipo:** function

**Índice de propiedad:** 14

Por documentar.





----

## DataService.prototype.onQueryForSelectOne

**Tipo:** function

**Índice de propiedad:** 15

Por documentar.





----

## DataService.prototype.onFormatOutputForSelectOne

**Tipo:** function

**Índice de propiedad:** 16

Por documentar.





----

## DataService.prototype.onFormatParametersForSelectMany

**Tipo:** function

**Índice de propiedad:** 17

Por documentar.





----

## DataService.prototype.onQueryForSelectMany

**Tipo:** function

**Índice de propiedad:** 18

Por documentar.





----

## DataService.prototype.onFormatOutputForSelectMany

**Tipo:** function

**Índice de propiedad:** 19

Por documentar.





----

## DataService.prototype.onFormatParametersForInsertOne

**Tipo:** function

**Índice de propiedad:** 20

Por documentar.





----

## DataService.prototype.onQueryForInsertOne

**Tipo:** function

**Índice de propiedad:** 21

Por documentar.





----

## DataService.prototype.onFormatOutputForInsertOne

**Tipo:** function

**Índice de propiedad:** 22

Por documentar.





----

## DataService.prototype.onFormatParametersForInsertMany

**Tipo:** function

**Índice de propiedad:** 23

Por documentar.





----

## DataService.prototype.onQueryForInsertMany

**Tipo:** function

**Índice de propiedad:** 24

Por documentar.





----

## DataService.prototype.onFormatOutputForInsertMany

**Tipo:** function

**Índice de propiedad:** 25

Por documentar.





----

## DataService.prototype.onFormatParametersForUpdateOne

**Tipo:** function

**Índice de propiedad:** 26

Por documentar.





----

## DataService.prototype.onQueryForUpdateOne

**Tipo:** function

**Índice de propiedad:** 27

Por documentar.





----

## DataService.prototype.onFormatOutputForUpdateOne

**Tipo:** function

**Índice de propiedad:** 28

Por documentar.





----

## DataService.prototype.onFormatParametersForUpdateMany

**Tipo:** function

**Índice de propiedad:** 29

Por documentar.





----

## DataService.prototype.onQueryForUpdateMany

**Tipo:** function

**Índice de propiedad:** 30

Por documentar.





----

## DataService.prototype.onFormatOutputForUpdateMany

**Tipo:** function

**Índice de propiedad:** 31

Por documentar.





----

## DataService.prototype.onFormatParametersForDeleteOne

**Tipo:** function

**Índice de propiedad:** 32

Por documentar.





----

## DataService.prototype.onQueryForDeleteOne

**Tipo:** function

**Índice de propiedad:** 33

Por documentar.





----

## DataService.prototype.onFormatOutputForDeleteOne

**Tipo:** function

**Índice de propiedad:** 34

Por documentar.





----

## DataService.prototype.onFormatParametersForDeleteMany

**Tipo:** function

**Índice de propiedad:** 35

Por documentar.





----

## DataService.prototype.onQueryForDeleteMany

**Tipo:** function

**Índice de propiedad:** 36

Por documentar.





----

## DataService.prototype.onFormatOutputForDeleteMany

**Tipo:** function

**Índice de propiedad:** 37

Por documentar.





----

## DataService.prototype.onFormatParametersForGetFile

**Tipo:** function

**Índice de propiedad:** 38

Por documentar.





----

## DataService.prototype.onQueryForGetFile

**Tipo:** function

**Índice de propiedad:** 39

Por documentar.





----

## DataService.prototype.onServeFile

**Tipo:** function

**Índice de propiedad:** 40

Por documentar.





----

## DataService.prototype.onFormatParametersForSetFile

**Tipo:** function

**Índice de propiedad:** 41

Por documentar.





----

## DataService.prototype.onQueryForSetFile

**Tipo:** function

**Índice de propiedad:** 42

Por documentar.





----

## DataService.prototype.onPersistFile

**Tipo:** function

**Índice de propiedad:** 43

Por documentar.





----

## DataService.prototype.onRespond

**Tipo:** function

**Índice de propiedad:** 44

Por documentar.





----

## DataService.prototype.onDefine

**Tipo:** function

**Índice de propiedad:** 45

Por documentar.





----

## DataService.prototype.setServer

**Tipo:** function

**Índice de propiedad:** 46

Por documentar.





----

## DataService.prototype.onError

**Tipo:** function

**Índice de propiedad:** 47

Por documentar.





----

## DataService.prototype.onDispatchError

**Tipo:** function

**Índice de propiedad:** 48

Por documentar.





----



----

## Hooks

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## Hooks.create

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## Hooks.prototype.addHook

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## Hooks.prototype.addHooks

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## Hooks.prototype.useHook

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## Hooks.prototype.replaceHook

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## Hooks.prototype.removeHook

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## Hooks.prototype.onError

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## Hooks.prototype.onDispatchError

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----



----

## RestInterface

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## RestInterface.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## RestInterface.prototype.selectMany

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## RestInterface.prototype.selectOne

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## RestInterface.prototype.insertMany

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## RestInterface.prototype.insertOne

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## RestInterface.prototype.updateMany

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## RestInterface.prototype.updateOne

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## RestInterface.prototype.deleteMany

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## RestInterface.prototype.deleteOne

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## RestInterface.prototype.getFile

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## RestInterface.prototype.setFile

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## RestInterface.prototype.resetDatabase

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----



----

## RestByMySQL

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## RestByMySQL.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## RestByMySQL.prototype.selectMany

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## RestByMySQL.prototype.selectOne

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## RestByMySQL.prototype.insertMany

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## RestByMySQL.prototype.insertOne

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## RestByMySQL.prototype.updateMany

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## RestByMySQL.prototype.updateOne

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## RestByMySQL.prototype.deleteMany

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## RestByMySQL.prototype.deleteOne

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## RestByMySQL.prototype.getFile

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## RestByMySQL.prototype.setFile

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## RestByMySQL.prototype.resetDatabase

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----

## RestByMySQL.prototype.onError

**Tipo:** function

**Índice de propiedad:** 12

Por documentar.





----

## RestByMySQL.prototype.onDispatchError

**Tipo:** function

**Índice de propiedad:** 13

Por documentar.





----



----

## AuthInterface

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## AuthInterface.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## AuthInterface.prototype.authenticate

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## AuthInterface.prototype.login

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## AuthInterface.prototype.logout

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## AuthInterface.prototype.refresh

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## AuthInterface.prototype.register

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## AuthInterface.prototype.confirm

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## AuthInterface.prototype.forgot

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## AuthInterface.prototype.recover

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## AuthInterface.prototype.unregister

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## AuthInterface.prototype.hasAuthorizationFor

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## AuthInterface.prototype.resetAuth

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----



----

## AuthByMySQL

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## AuthByMySQL.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## AuthByMySQL.prototype.onRespond

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## AuthByMySQL.prototype.dispatch

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## AuthByMySQL.prototype.generateContext

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## AuthByMySQL.prototype.authenticate

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## AuthByMySQL.prototype.dispatchRegister

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## AuthByMySQL.prototype.dispatchConfirm

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## AuthByMySQL.prototype.dispatchLogin

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## AuthByMySQL.prototype.dispatchLogout

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## AuthByMySQL.prototype.dispatchForgot

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## AuthByMySQL.prototype.dispatchRecover

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## AuthByMySQL.prototype.dispatchUnregister

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----

## AuthByMySQL.prototype.dispatchModify

**Tipo:** function

**Índice de propiedad:** 12

Por documentar.





----

## AuthByMySQL.prototype.onRegister

**Tipo:** function

**Índice de propiedad:** 13

Por documentar.





----

## AuthByMySQL.prototype.onConfirm

**Tipo:** function

**Índice de propiedad:** 14

Por documentar.





----

## AuthByMySQL.prototype.onLogin

**Tipo:** function

**Índice de propiedad:** 15

Por documentar.





----

## AuthByMySQL.prototype.onLogout

**Tipo:** function

**Índice de propiedad:** 16

Por documentar.





----

## AuthByMySQL.prototype.onForgot

**Tipo:** function

**Índice de propiedad:** 17

Por documentar.





----

## AuthByMySQL.prototype.onRecover

**Tipo:** function

**Índice de propiedad:** 18

Por documentar.





----

## AuthByMySQL.prototype.onUnregister

**Tipo:** function

**Índice de propiedad:** 19

Por documentar.





----

## AuthByMySQL.prototype.onModify

**Tipo:** function

**Índice de propiedad:** 20

Por documentar.





----

## AuthByMySQL.prototype.onFormatParametersForRegister

**Tipo:** function

**Índice de propiedad:** 21

Por documentar.





----

## AuthByMySQL.prototype.onFormatOutputForRegister

**Tipo:** function

**Índice de propiedad:** 22

Por documentar.





----

## AuthByMySQL.prototype.onFormatParametersForConfirm

**Tipo:** function

**Índice de propiedad:** 23

Por documentar.





----

## AuthByMySQL.prototype.onFormatOutputForConfirm

**Tipo:** function

**Índice de propiedad:** 24

Por documentar.





----

## AuthByMySQL.prototype.onFormatParametersForLogin

**Tipo:** function

**Índice de propiedad:** 25

Por documentar.





----

## AuthByMySQL.prototype.onFormatOutputForLogin

**Tipo:** function

**Índice de propiedad:** 26

Por documentar.





----

## AuthByMySQL.prototype.onFormatParametersForLogout

**Tipo:** function

**Índice de propiedad:** 27

Por documentar.





----

## AuthByMySQL.prototype.onFormatOutputForLogout

**Tipo:** function

**Índice de propiedad:** 28

Por documentar.





----

## AuthByMySQL.prototype.onFormatParametersForForgot

**Tipo:** function

**Índice de propiedad:** 29

Por documentar.





----

## AuthByMySQL.prototype.onFormatOutputForForgot

**Tipo:** function

**Índice de propiedad:** 30

Por documentar.





----

## AuthByMySQL.prototype.onFormatParametersForRecover

**Tipo:** function

**Índice de propiedad:** 31

Por documentar.





----

## AuthByMySQL.prototype.onFormatOutputForRecover

**Tipo:** function

**Índice de propiedad:** 32

Por documentar.





----

## AuthByMySQL.prototype.onFormatParametersForUnregister

**Tipo:** function

**Índice de propiedad:** 33

Por documentar.





----

## AuthByMySQL.prototype.onFormatOutputForUnregister

**Tipo:** function

**Índice de propiedad:** 34

Por documentar.





----

## AuthByMySQL.prototype.onFormatParametersForModify

**Tipo:** function

**Índice de propiedad:** 35

Por documentar.





----

## AuthByMySQL.prototype.onFormatOutputForModify

**Tipo:** function

**Índice de propiedad:** 36

Por documentar.





----

## AuthByMySQL.prototype.register

**Tipo:** function

**Índice de propiedad:** 37

Por documentar.





----

## AuthByMySQL.prototype.confirm

**Tipo:** function

**Índice de propiedad:** 38

Por documentar.





----

## AuthByMySQL.prototype.login

**Tipo:** function

**Índice de propiedad:** 39

Por documentar.





----

## AuthByMySQL.prototype.logout

**Tipo:** function

**Índice de propiedad:** 40

Por documentar.





----

## AuthByMySQL.prototype.forgot

**Tipo:** function

**Índice de propiedad:** 41

Por documentar.





----

## AuthByMySQL.prototype.recover

**Tipo:** function

**Índice de propiedad:** 42

Por documentar.





----

## AuthByMySQL.prototype.unregister

**Tipo:** function

**Índice de propiedad:** 43

Por documentar.





----

## AuthByMySQL.prototype.modify

**Tipo:** function

**Índice de propiedad:** 44

Por documentar.





----

## AuthByMySQL.prototype.resetAuth

**Tipo:** function

**Índice de propiedad:** 45

Por documentar.





----

## AuthByMySQL.prototype.hasAuthorizationFor

**Tipo:** function

**Índice de propiedad:** 46

Por documentar.





----

## AuthByMySQL.prototype.onError

**Tipo:** function

**Índice de propiedad:** 47

Por documentar.





----

## AuthByMySQL.prototype.onDispatchError

**Tipo:** function

**Índice de propiedad:** 48

Por documentar.





----



----

## RestUtils

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## RestUtils.prototype

**Tipo:** object

**Índice de propiedad:** 0

Por documentar.





----

## RestUtils.modules

**Tipo:** object

**Índice de propiedad:** 1

Por documentar.





----

## RestUtils.modulePolyfills

**Tipo:** object

**Índice de propiedad:** 2

Por documentar.





----

## RestUtils.require

**Tipo:** object

**Índice de propiedad:** 3

Por documentar.





----

## RestUtils.define

**Tipo:** object

**Índice de propiedad:** 4

Por documentar.





----

## RestUtils.definePolyfill

**Tipo:** object

**Índice de propiedad:** 5

Por documentar.





----

## RestUtils.wrapResponse

**Tipo:** object

**Índice de propiedad:** 6

Por documentar.





----

## RestUtils.respondContext

**Tipo:** object

**Índice de propiedad:** 7

Por documentar.





----

## RestUtils.generateRandomToken

**Tipo:** object

**Índice de propiedad:** 8

Por documentar.





----

## RestUtils.generateOnErrorFunction

**Tipo:** object

**Índice de propiedad:** 9

Por documentar.





----

## RestUtils.generateContextByRequestResponseFactory

**Tipo:** object

**Índice de propiedad:** 10

Por documentar.





----

## RestUtils.generateOnDispatchErrorFunction

**Tipo:** object

**Índice de propiedad:** 11

Por documentar.





----

## RestUtils.noop

**Tipo:** object

**Índice de propiedad:** 12

Por documentar.





----

## RestUtils.basicServiceFactory

**Tipo:** object

**Índice de propiedad:** 13

Por documentar.





----

## RestUtils.basicQueryFactory

**Tipo:** object

**Índice de propiedad:** 14

Por documentar.





----

## RestUtils.basicProcessFactory

**Tipo:** object

**Índice de propiedad:** 15

Por documentar.





----

## RestUtils.basicControllerFallback

**Tipo:** object

**Índice de propiedad:** 16

Por documentar.





----

## RestUtils.sanitize

**Tipo:** object

**Índice de propiedad:** 17

Por documentar.





----

## RestUtils.sanitizeId

**Tipo:** object

**Índice de propiedad:** 18

Por documentar.





----

## RestUtils.availableOperators

**Tipo:** object

**Índice de propiedad:** 19

Por documentar.





----

## RestUtils.validateStaticServiceInterface

**Tipo:** object

**Índice de propiedad:** 20

Por documentar.





----

## RestUtils.validateDynamicServiceInterface

**Tipo:** object

**Índice de propiedad:** 21

Por documentar.





----

## RestUtils.validateStaticQueryInterface

**Tipo:** object

**Índice de propiedad:** 22

Por documentar.





----

## RestUtils.validateDynamicQueryInterface

**Tipo:** object

**Índice de propiedad:** 23

Por documentar.





----

## RestUtils.validateStaticProcessInterface

**Tipo:** object

**Índice de propiedad:** 24

Por documentar.





----

## RestUtils.validateDynamicProcessInterface

**Tipo:** object

**Índice de propiedad:** 25

Por documentar.





----

## RestUtils.expandConnection

**Tipo:** object

**Índice de propiedad:** 26

Por documentar.





----

## RestUtils.formatTableFromRequest

**Tipo:** object

**Índice de propiedad:** 27

Por documentar.





----

## RestUtils.formatWhereFromRequest

**Tipo:** object

**Índice de propiedad:** 28

Por documentar.





----

## RestUtils.formatOrderFromRequest

**Tipo:** object

**Índice de propiedad:** 29

Por documentar.





----

## RestUtils.formatGroupFromRequest

**Tipo:** object

**Índice de propiedad:** 30

Por documentar.





----

## RestUtils.formatPaginationFromRequest

**Tipo:** object

**Índice de propiedad:** 31

Por documentar.





----

## RestUtils.formatItemFromRequest

**Tipo:** object

**Índice de propiedad:** 32

Por documentar.





----

## RestUtils.formatItemsFromRequest

**Tipo:** object

**Índice de propiedad:** 33

Por documentar.





----

## RestUtils.formatValuesFromRequest

**Tipo:** object

**Índice de propiedad:** 34

Por documentar.





----

## RestUtils.fromWhereToSQL

**Tipo:** object

**Índice de propiedad:** 35

Por documentar.





----

## RestUtils.fromOrderToSQL

**Tipo:** object

**Índice de propiedad:** 36

Por documentar.





----

## RestUtils.fromGroupToSQL

**Tipo:** object

**Índice de propiedad:** 37

Por documentar.





----

## RestUtils.fromPaginationToSQL

**Tipo:** object

**Índice de propiedad:** 38

Por documentar.





----

## RestUtils.fromItemToKeysSQL

**Tipo:** object

**Índice de propiedad:** 39

Por documentar.





----

## RestUtils.fromItemsToKeysSQL

**Tipo:** object

**Índice de propiedad:** 40

Por documentar.





----

## RestUtils.fromItemToValuesSQL

**Tipo:** object

**Índice de propiedad:** 41

Por documentar.





----

## RestUtils.fromItemToSettablesSQL

**Tipo:** object

**Índice de propiedad:** 42

Por documentar.





----

## RestUtils.fromItemsToValuesSQL

**Tipo:** object

**Índice de propiedad:** 43

Por documentar.





----

## RestUtils.fromWhereToFilterFunction

**Tipo:** object

**Índice de propiedad:** 44

Por documentar.





----

## RestUtils.fromURLToQuerystringObject

**Tipo:** object

**Índice de propiedad:** 45

Por documentar.





----



----

## RestByDexie

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## RestByDexie.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## RestByDexie.prototype.selectMany

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## RestByDexie.prototype.selectOne

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## RestByDexie.prototype.insertMany

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## RestByDexie.prototype.insertOne

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## RestByDexie.prototype.updateMany

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## RestByDexie.prototype.updateOne

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## RestByDexie.prototype.deleteMany

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## RestByDexie.prototype.deleteOne

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## RestByDexie.prototype.getFile

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## RestByDexie.prototype.setFile

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## RestByDexie.prototype.resetDatabase

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----

## RestByDexie.prototype.onError

**Tipo:** function

**Índice de propiedad:** 12

Por documentar.





----

## RestByDexie.prototype.onDispatchError

**Tipo:** function

**Índice de propiedad:** 13

Por documentar.





----



----

## AuthByDexie

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## AuthByDexie.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## AuthByDexie.prototype.onRespond

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## AuthByDexie.prototype.dispatch

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## AuthByDexie.prototype.generateContext

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## AuthByDexie.prototype.authenticate

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## AuthByDexie.prototype.dispatchRegister

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## AuthByDexie.prototype.dispatchConfirm

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## AuthByDexie.prototype.dispatchLogin

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## AuthByDexie.prototype.dispatchLogout

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## AuthByDexie.prototype.dispatchForgot

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## AuthByDexie.prototype.dispatchRecover

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## AuthByDexie.prototype.dispatchUnregister

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----

## AuthByDexie.prototype.dispatchModify

**Tipo:** function

**Índice de propiedad:** 12

Por documentar.





----

## AuthByDexie.prototype.onRegister

**Tipo:** function

**Índice de propiedad:** 13

Por documentar.





----

## AuthByDexie.prototype.onConfirm

**Tipo:** function

**Índice de propiedad:** 14

Por documentar.





----

## AuthByDexie.prototype.onLogin

**Tipo:** function

**Índice de propiedad:** 15

Por documentar.





----

## AuthByDexie.prototype.onLogout

**Tipo:** function

**Índice de propiedad:** 16

Por documentar.





----

## AuthByDexie.prototype.onForgot

**Tipo:** function

**Índice de propiedad:** 17

Por documentar.





----

## AuthByDexie.prototype.onRecover

**Tipo:** function

**Índice de propiedad:** 18

Por documentar.





----

## AuthByDexie.prototype.onUnregister

**Tipo:** function

**Índice de propiedad:** 19

Por documentar.





----

## AuthByDexie.prototype.onModify

**Tipo:** function

**Índice de propiedad:** 20

Por documentar.





----

## AuthByDexie.prototype.onFormatParametersForRegister

**Tipo:** function

**Índice de propiedad:** 21

Por documentar.





----

## AuthByDexie.prototype.onFormatOutputForRegister

**Tipo:** function

**Índice de propiedad:** 22

Por documentar.





----

## AuthByDexie.prototype.onFormatParametersForConfirm

**Tipo:** function

**Índice de propiedad:** 23

Por documentar.





----

## AuthByDexie.prototype.onFormatOutputForConfirm

**Tipo:** function

**Índice de propiedad:** 24

Por documentar.





----

## AuthByDexie.prototype.onFormatParametersForLogin

**Tipo:** function

**Índice de propiedad:** 25

Por documentar.





----

## AuthByDexie.prototype.onFormatOutputForLogin

**Tipo:** function

**Índice de propiedad:** 26

Por documentar.





----

## AuthByDexie.prototype.onFormatParametersForLogout

**Tipo:** function

**Índice de propiedad:** 27

Por documentar.





----

## AuthByDexie.prototype.onFormatOutputForLogout

**Tipo:** function

**Índice de propiedad:** 28

Por documentar.





----

## AuthByDexie.prototype.onFormatParametersForForgot

**Tipo:** function

**Índice de propiedad:** 29

Por documentar.





----

## AuthByDexie.prototype.onFormatOutputForForgot

**Tipo:** function

**Índice de propiedad:** 30

Por documentar.





----

## AuthByDexie.prototype.onFormatParametersForRecover

**Tipo:** function

**Índice de propiedad:** 31

Por documentar.





----

## AuthByDexie.prototype.onFormatOutputForRecover

**Tipo:** function

**Índice de propiedad:** 32

Por documentar.





----

## AuthByDexie.prototype.onFormatParametersForUnregister

**Tipo:** function

**Índice de propiedad:** 33

Por documentar.





----

## AuthByDexie.prototype.onFormatOutputForUnregister

**Tipo:** function

**Índice de propiedad:** 34

Por documentar.





----

## AuthByDexie.prototype.onFormatParametersForModify

**Tipo:** function

**Índice de propiedad:** 35

Por documentar.





----

## AuthByDexie.prototype.onFormatOutputForModify

**Tipo:** function

**Índice de propiedad:** 36

Por documentar.





----

## AuthByDexie.prototype.register

**Tipo:** function

**Índice de propiedad:** 37

Por documentar.





----

## AuthByDexie.prototype.confirm

**Tipo:** function

**Índice de propiedad:** 38

Por documentar.





----

## AuthByDexie.prototype.login

**Tipo:** function

**Índice de propiedad:** 39

Por documentar.





----

## AuthByDexie.prototype.logout

**Tipo:** function

**Índice de propiedad:** 40

Por documentar.





----

## AuthByDexie.prototype.forgot

**Tipo:** function

**Índice de propiedad:** 41

Por documentar.





----

## AuthByDexie.prototype.recover

**Tipo:** function

**Índice de propiedad:** 42

Por documentar.





----

## AuthByDexie.prototype.unregister

**Tipo:** function

**Índice de propiedad:** 43

Por documentar.





----

## AuthByDexie.prototype.modify

**Tipo:** function

**Índice de propiedad:** 44

Por documentar.





----

## AuthByDexie.prototype.resetAuth

**Tipo:** function

**Índice de propiedad:** 45

Por documentar.





----

## AuthByDexie.prototype.hasAuthorizationFor

**Tipo:** function

**Índice de propiedad:** 46

Por documentar.





----

## AuthByDexie.prototype.refresh

**Tipo:** function

**Índice de propiedad:** 47

Por documentar.





----

## AuthByDexie.prototype.onError

**Tipo:** function

**Índice de propiedad:** 48

Por documentar.





----

## AuthByDexie.prototype.onDispatchError

**Tipo:** function

**Índice de propiedad:** 49

Por documentar.





----



----

## VirtualDataService

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## VirtualDataService.create

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## VirtualDataService.initialize

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## VirtualDataService.path

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## VirtualDataService.prototype.initialize

**Tipo:** function

**Índice de propiedad:** 0

Por documentar.





----

## VirtualDataService.prototype.generateContext

**Tipo:** function

**Índice de propiedad:** 1

Por documentar.





----

## VirtualDataService.prototype.dispatch

**Tipo:** function

**Índice de propiedad:** 2

Por documentar.





----

## VirtualDataService.prototype.dispatchDefine

**Tipo:** function

**Índice de propiedad:** 3

Por documentar.





----

## VirtualDataService.prototype.dispatchSelectOne

**Tipo:** function

**Índice de propiedad:** 4

Por documentar.





----

## VirtualDataService.prototype.dispatchSelectMany

**Tipo:** function

**Índice de propiedad:** 5

Por documentar.





----

## VirtualDataService.prototype.dispatchInsertOne

**Tipo:** function

**Índice de propiedad:** 6

Por documentar.





----

## VirtualDataService.prototype.dispatchInsertMany

**Tipo:** function

**Índice de propiedad:** 7

Por documentar.





----

## VirtualDataService.prototype.dispatchUpdateOne

**Tipo:** function

**Índice de propiedad:** 8

Por documentar.





----

## VirtualDataService.prototype.dispatchUpdateMany

**Tipo:** function

**Índice de propiedad:** 9

Por documentar.





----

## VirtualDataService.prototype.dispatchDeleteOne

**Tipo:** function

**Índice de propiedad:** 10

Por documentar.





----

## VirtualDataService.prototype.dispatchDeleteMany

**Tipo:** function

**Índice de propiedad:** 11

Por documentar.





----

## VirtualDataService.prototype.dispatchGetFile

**Tipo:** function

**Índice de propiedad:** 12

Por documentar.





----

## VirtualDataService.prototype.dispatchSetFile

**Tipo:** function

**Índice de propiedad:** 13

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForSelectOne

**Tipo:** function

**Índice de propiedad:** 14

Por documentar.





----

## VirtualDataService.prototype.onQueryForSelectOne

**Tipo:** function

**Índice de propiedad:** 15

Por documentar.





----

## VirtualDataService.prototype.onFormatOutputForSelectOne

**Tipo:** function

**Índice de propiedad:** 16

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForSelectMany

**Tipo:** function

**Índice de propiedad:** 17

Por documentar.





----

## VirtualDataService.prototype.onQueryForSelectMany

**Tipo:** function

**Índice de propiedad:** 18

Por documentar.





----

## VirtualDataService.prototype.onFormatOutputForSelectMany

**Tipo:** function

**Índice de propiedad:** 19

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForInsertOne

**Tipo:** function

**Índice de propiedad:** 20

Por documentar.





----

## VirtualDataService.prototype.onQueryForInsertOne

**Tipo:** function

**Índice de propiedad:** 21

Por documentar.





----

## VirtualDataService.prototype.onFormatOutputForInsertOne

**Tipo:** function

**Índice de propiedad:** 22

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForInsertMany

**Tipo:** function

**Índice de propiedad:** 23

Por documentar.





----

## VirtualDataService.prototype.onQueryForInsertMany

**Tipo:** function

**Índice de propiedad:** 24

Por documentar.





----

## VirtualDataService.prototype.onFormatOutputForInsertMany

**Tipo:** function

**Índice de propiedad:** 25

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForUpdateOne

**Tipo:** function

**Índice de propiedad:** 26

Por documentar.





----

## VirtualDataService.prototype.onQueryForUpdateOne

**Tipo:** function

**Índice de propiedad:** 27

Por documentar.





----

## VirtualDataService.prototype.onFormatOutputForUpdateOne

**Tipo:** function

**Índice de propiedad:** 28

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForUpdateMany

**Tipo:** function

**Índice de propiedad:** 29

Por documentar.





----

## VirtualDataService.prototype.onQueryForUpdateMany

**Tipo:** function

**Índice de propiedad:** 30

Por documentar.





----

## VirtualDataService.prototype.onFormatOutputForUpdateMany

**Tipo:** function

**Índice de propiedad:** 31

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForDeleteOne

**Tipo:** function

**Índice de propiedad:** 32

Por documentar.





----

## VirtualDataService.prototype.onQueryForDeleteOne

**Tipo:** function

**Índice de propiedad:** 33

Por documentar.





----

## VirtualDataService.prototype.onFormatOutputForDeleteOne

**Tipo:** function

**Índice de propiedad:** 34

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForDeleteMany

**Tipo:** function

**Índice de propiedad:** 35

Por documentar.





----

## VirtualDataService.prototype.onQueryForDeleteMany

**Tipo:** function

**Índice de propiedad:** 36

Por documentar.





----

## VirtualDataService.prototype.onFormatOutputForDeleteMany

**Tipo:** function

**Índice de propiedad:** 37

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForGetFile

**Tipo:** function

**Índice de propiedad:** 38

Por documentar.





----

## VirtualDataService.prototype.onQueryForGetFile

**Tipo:** function

**Índice de propiedad:** 39

Por documentar.





----

## VirtualDataService.prototype.onServeFile

**Tipo:** function

**Índice de propiedad:** 40

Por documentar.





----

## VirtualDataService.prototype.onFormatParametersForSetFile

**Tipo:** function

**Índice de propiedad:** 41

Por documentar.





----

## VirtualDataService.prototype.onQueryForSetFile

**Tipo:** function

**Índice de propiedad:** 42

Por documentar.





----

## VirtualDataService.prototype.onPersistFile

**Tipo:** function

**Índice de propiedad:** 43

Por documentar.





----

## VirtualDataService.prototype.onRespond

**Tipo:** function

**Índice de propiedad:** 44

Por documentar.





----

## VirtualDataService.prototype.onDefine

**Tipo:** function

**Índice de propiedad:** 45

Por documentar.





----

## VirtualDataService.prototype.setServer

**Tipo:** function

**Índice de propiedad:** 46

Por documentar.





----

## VirtualDataService.prototype.resetDatabase

**Tipo:** function

**Índice de propiedad:** 47

Por documentar.





----

## VirtualDataService.prototype.onError

**Tipo:** function

**Índice de propiedad:** 48

Por documentar.





----

## VirtualDataService.prototype.onDispatchError

**Tipo:** function

**Índice de propiedad:** 49

Por documentar.





----



----

## default

**Tipo:** class

**Índice de propiedad:** root

Por documentar.





----

## default.DataServer

**Tipo:** object

**Índice de propiedad:** 0

Por documentar.





----

## default.VirtualDataServer

**Tipo:** object

**Índice de propiedad:** 1

Por documentar.





----

## default.DataService

**Tipo:** object

**Índice de propiedad:** 2

Por documentar.





----

## default.Hooks

**Tipo:** object

**Índice de propiedad:** 3

Por documentar.





----

## default.RestInterface

**Tipo:** object

**Índice de propiedad:** 4

Por documentar.





----

## default.RestByMySQL

**Tipo:** object

**Índice de propiedad:** 5

Por documentar.





----

## default.AuthInterface

**Tipo:** object

**Índice de propiedad:** 6

Por documentar.





----

## default.AuthByMySQL

**Tipo:** object

**Índice de propiedad:** 7

Por documentar.





----

## default.RestUtils

**Tipo:** object

**Índice de propiedad:** 8

Por documentar.





----

## default.RestByDexie

**Tipo:** object

**Índice de propiedad:** 9

Por documentar.





----

## default.AuthByDexie

**Tipo:** object

**Índice de propiedad:** 10

Por documentar.





----

## default.VirtualDataService

**Tipo:** object

**Índice de propiedad:** 11

Por documentar.





----

## default.default

**Tipo:** object

**Índice de propiedad:** 12

Por documentar.





----

