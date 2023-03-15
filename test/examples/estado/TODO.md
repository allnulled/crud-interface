[ ] Tarea. Pantallas de problemas, soluciones e implementaciones ( = x ), de comentarios al respecto y de ingreso de recurso así como ingreso y modificación de comentario sobre recurso.
  [ ] A) ¿Qué tiene que permitir hacer?
    [ ] 1. Consultar x según fechas, autor, texto, temática, votos (positivos, negativos, neutros), etc.
        [ ] a. Con filtros
        [ ] b. Con orden configurable
        [ ] c. Con paginación opcional
        [ ] d. Con scripting aplicable (que permitiría gráficas, pero eso en última instancia)
    [ ] 2. Consultar comentarios (de comentarios también) de x según fechas, autor, texto, votos, etc.
        [ ] a. Con filtros
        [ ] b. Con orden configurable
        [ ] c. Con paginación opcional
        [ ] d. Con scripting aplicable (que permitiría gráficas, pero eso en última instancia)
    [ ] 3. Navegar a través de comentarios de x.
        [ ] a. Donde se vea usuario, fecha, y texto de comentario (plano, monoespaciado).
        [ ] b. Donde se pueda cargar el comentario padre (si lo tiene) (y wrapee a los comentarios actuales automáticamente).
        [ ] c. Donde se pueda cargar los comentarios hijo (si los tiene) (y se apendicen a los comentarios actuales automáticamente).
        [ ] d. Donde se pueda navegar a través de la paginación de los comentarios hijo de un recurso tipo x.
        [ ] e. Donde se pueda navegar a través de los comentarios de un comentario concreto de dicho tipo de recurso.
        [ ] f. Donde se pueda votar en positivo, negativo o neutro un comentario.
        [ ] g. Donde se puedan ver los votos positivos, negativos o neutros de un comentario.
    [ ] 4. Agregar propuestas de x (ni editar, ni eliminar)
        [ ] a. Donde se pueda establecer el texto
        [ ] b. Donde se guarde automáticamente el usuario y la fecha de creación
        [ ] c. No poder agregar/actualizar/eliminar recursos de tipo x ni destacados, ni clasificados, ni aprobados. No desde usuario: eso se hace en un proceso o una query, seguramente un proceso.
    [ ] 5. Agregar/Eliminar (soft delete) comentarios de x.
        [ ] a. Donde se pueda establecer el texto, el nodo padre (o nulo) y el recurso tipo x sobre el cual va el comentario originalmente.
        [ ] b. Donde se guarde automáticamente el usuario y la fecha de creación
        [ ] c. No poder agregar/actualizar/eliminar recursos de tipo x ni destacados, ni clasificados, ni aprobados. No desde usuario: eso se hace en un proceso o una query, seguramente un proceso.
    [ ] 6. Acoplar ciclos de progresión de estado legislativo
        [ ] 
--------------------------------------
  [ ] B) ¿Qué tiene que aparecer para ello?
    [ ] Backend:
        [ ] 1. Modelos:
                - problemas_{propuestos|destacados|clasificados|aprobados}
                - soluciones_{propuestas|destacadas|clasificadas|aprobadas}
                - implementaciones_{propuestas|destacadas|clasificadas|aprobadas}
            [ ] a. IDEM
            [ ] b. IDEM
            [ ] c. IDEM
            [ ] d. IDEM
        [ ] 2. Modelos:
                - comentarios_de_problemas_{propuestos|destacados|clasificados|aprobados}
                - comentarios_de_soluciones_{propuestos|destacados|clasificados|aprobados}
                - comentarios_de_implementaciones_{propuestos|destacados|clasificados|aprobados}
            [ ] a. IDEM
            [ ] b. IDEM
            [ ] c. IDEM
            [ ] d. IDEM
        [ ] 3. Modelos: con anteriores es suficiente.
            [ ] a. IDEM
            [ ] b. IDEM
            [ ] c. IDEM
            [ ] d. IDEM
            [ ] e. IDEM
            [ ] f. IDEM
            [ ] g. Modelos:
                - votos_a_comentarios_de_problemas_{propuestos|destacados|clasificados|aprobados}
                - votos_a_comentarios_de_soluciones_{propuestos|destacados|clasificados|aprobados}
                - votos_a_comentarios_de_implementaciones_{propuestos|destacados|clasificados|aprobados}
                - votos_a_problemas_{propuestos|destacados|clasificados|aprobados}
                - votos_a_soluciones_{propuestos|destacados|clasificados|aprobados}
                - votos_a_implementaciones_{propuestos|destacados|clasificados|aprobados}
        [ ] 4. Hooks + Filtros de la REST:
                - filtro: Castelog.variables.hooks_para_rest.solo_permitir_operaciones(operaciones:Array<String>)
                - filtro: Castelog.variables.hooks_para_rest.no_permitir_operaciones(operaciones:Array<String>)
                - filtro: Castelog.variables.hooks_para_rest.fijar_parametro_en_operaciones(operaciones:Array<String>columna:String, valor_o_factory:any|Function)
                - filtro: Castelog.variables.hooks_para_rest.solo_permitir_parametros_en_operaciones(columnas:Array<String>)
                - filtro: Castelog.variables.hooks_para_rest.fijar_filtros_de_busqueda_en_operaciones(operaciones:Array<String>columna:String, valor_o_factory:any|Function)
                - filtro: Castelog.variables.hooks_para_rest.solo_permitir_filtros_de_busqueda_en_operaciones(operaciones:Array<String>columna:String, valor_o_factory:any|Function)
                - filtro: Castelog.variables.hooks_para_rest.al_eliminar_hacer_soft_delete(operaciones:Array<String>columna:String, valor_o_factory:any|Function)
            [ ] a. IDEM
            [ ] b. IDEM
        [ ] 5. IDEM
            [ ] a. IDEM
            [ ] b. IDEM
    [ ] Frontend:
        [ ] 1. Componente vue2: ExploradorDeDatosParaRest (aplicado a un recurso tipo x), NavegadorParaRest
            [ ] a. Componentes vue2: ExploradorDeDatosParaRest, BuscadorParaRest
            [ ] b. Componentes vue2: ExploradorDeDatosParaRest, BuscadorParaRest
            [ ] c. Componentes vue2: ExploradorDeDatosParaRest, BuscadorParaRest, PaginadorParaRest
            [ ] d. Componentes vue2: ExploradorDeDatosParaRest, ScripterParaRest
        [ ] 2. Componente vue2: ExploradorDeDatosParaRest (aplicado a los comentarios de un recurso tipo x), NavegadorParaRest
            [ ] a. Componentes vue2: ExploradorDeDatosParaRest, BuscadorParaRest
            [ ] b. Componentes vue2: ExploradorDeDatosParaRest, BuscadorParaRest
            [ ] c. Componentes vue2: ExploradorDeDatosParaRest, BuscadorParaRest, PaginadorParaRest
            [ ] d. Componentes vue2: ExploradorDeDatosParaRest, ScripterParaRest
        [ ] 3. Componente vue2: ExploradorDeComentariosParaRest (aplicable a los comentarios de un recurso tipo x o a un recurso tipo x)
            [ ] a. Componente vue2: ExploradorDeComentariosParaRest, CartaDeComentarioParaRest
            [ ] b. Componente vue2: ExploradorDeComentariosParaRest, CartaDeComentarioParaRest, BotonDeCargaDePadre
            [ ] c. Componente vue2: ExploradorDeComentariosParaRest, CartaDeComentarioParaRest, BotonDeCargaDeHijos
            [ ] d. Componente vue2: ExploradorDeComentariosParaRest (aplicado a comentarios)
            [ ] e. Componente vue2: ExploradorDeComentariosParaRest (aplicado a recursos tipo x)
            [ ] f. Componente vue2: ExploradorDeComentariosParaRest, CartaDeComentarioParaRest, BarraDeVotosDeComentariosParaRest, FormularioDeControles
            [ ] g. Componente vue2: ExploradorDeComentariosParaRest, CartaDeComentarioParaRest, BarraDeVotosDeComentariosParaRest
        [ ] 4. Componente vue2: FormularioDeControles
            [ ] a. Componente vue2: FormularioDeControles, ControlDeTextoLargo
            [ ] b. Componente vue2: FormularioDeControles
        [ ] 5. Componente vue2: FormularioDeControles
            [ ] a. Componente vue2: FormularioDeControles, ControlDeTextoLargo, Hipervinculo (referenciando comentario y recurso tipo x)
            [ ] b. Componente vue2: FormularioDeControles

  [ ] ¿Cuál es la mejor forma en que podría aparecer?
    [ ] Backend:
        [ ] 1. Está dicha
            [ ] a. Está dicha
            [ ] b. Está dicha
            [ ] c. Está dicha
            [ ] d. Está dicha
        [ ] 2. Está dicha
            [ ] a. Está dicha
            [ ] b. Está dicha
            [ ] c. Está dicha
            [ ] d. Está dicha
        [ ] 3. Está dicha
            [ ] a. Está dicha
            [ ] b. Está dicha
            [ ] c. Está dicha
            [ ] d. Está dicha
            [ ] e. Está dicha
            [ ] f. Está dicha
        [ ] 4. Está dicha
            [ ] a. Está dicha
            [ ] b. Está dicha
        [ ] 5. Está dicha
            [ ] a. Está dicha
            [ ] b. Está dicha
    [ ] Frontend:
        [ ] 1. Páginas: 
            [ En neto sería ]
                - (conteniendo a: 12 páginas) Pagina_de_recurso_de_votacion (tipo:{ problema|solucion|implementacion }, estado_tipo: {propuestos|destacados|clasificados|aprobados})
                - (conteniendo a: 12 páginas) Pagina_de_comentarios_a_recurso_de_votacion (tipo:{ problema|solucion|implementacion }, estado_tipo: {propuestos|destacados|clasificados|aprobados})
                - (conteniendo a: 24 páginas) Pagina_de_modificacion_de_comentario_a_recurso_de_votacion (tipo:{ problema|solucion|implementacion }, estado_tipo: {propuestos|destacados|clasificados|aprobados}, comentario_padre: Number, operacion: {insertar|actualizar})
            [ En bruto sería ]
                - Pagina_de_problemas_{propuestos|destacados|clasificados|aprobados}
                - Pagina_de_soluciones_{propuestas|destacadas|clasificadas|aprobadas}
                - Pagina_de_implementaciones_{propuestas|destacadas|clasificadas|aprobadas}
                - Pagina_de_comentarios_de_problemas_{propuestos|destacados|clasificados|aprobados}
                - Pagina_de_comentarios_de_soluciones_{propuestas|destacadas|clasificadas|aprobadas}
                - Pagina_de_comentarios_de_implementaciones_{propuestas|destacadas|clasificadas|aprobadas}
                +24
                - Pagina_de_{agregar|editar}_comentario_a_problemas_{propuestos|destacados|clasificados|aprobados}
                - Pagina_de_{agregar|editar}_comentario_a_soluciones_{propuestas|destacadas|clasificadas|aprobadas}
                - Pagina_de_{agregar|editar}_comentario_a_implementaciones_{propuestas|destacadas|clasificadas|aprobadas}
                +24
            [ ] a. IDEM
            [ ] b. IDEM
            [ ] c. IDEM
            [ ] d. IDEM
        [ ] 2. IDEM
            [ ] a. IDEM
            [ ] b. IDEM
            [ ] c. IDEM
            [ ] d. IDEM
        [ ] 3. IDEM
            [ ] a. IDEM
            [ ] b. IDEM
            [ ] c. IDEM
            [ ] d. IDEM
            [ ] e. IDEM
            [ ] f. IDEM
        [ ] 4. IDEM
            [ ] a. IDEM
            [ ] b. IDEM
        [ ] 5. IDEM
            [ ] a. IDEM
            [ ] b. IDEM



Luego quedarán apps:
    - Acuerdos
        - Inicio
    - Sucesos (por decidir)
        - Inicio (por decidir)
    - Expedientes (por decidir)
        - Inicio (por decidir)
    - Educación
        - Inicio
        - Documentos
        - Artículos educativos
        - Asignaturas
        - Cursos
        - Exámenes
        - Entidades
        - Centros
        - Créditos
        - Comunicados
        - Temas
        - Suscripciones
        - Comentarios
        - Votos
    - Actualidad
        - Inicio
        - Portales
        - Documentos periodísticos
        - Artículos periodísticos
        - Agentes
        - Acciones
        - Temas
        - Suscripciones
        - Comentarios
        - Votos
