// [castelog:compilables] "./lib/nativa/nativa.calo"
// [castelog:compilables] "./lib/db/db.calo"
// [castelog:compilables] "./lib/nativa/components.calo"
// [castelog:compilables] "./lib/componentes/Icono/componente.calo"

// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"estado","version":"0.0.1","contenido":{"head":"<head>\n    <title>Estado 2.0</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"./lib/nativa/components.css\" />\n    <script src=\"./lib/nativa/nativa.js\"></script>\n    <script src=\"./lib/nativa/components.js\"></script>\n    <script src=\"./lib/db/db.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component\">\n        <router-view :app=\"this\"></router-view>\n        <SoloEscritorio>\n            <LayoutHorizontal :separacion=\"5\">\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        Soy una celda\n                    </CeldaHorizontal>\n                    <CeldaHorizontal ancho=\"100%\" clases=\"Carta\">\n                        En una row\n                    </CeldaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        O sea que\n                    </CeldaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        A ver si me entiendes...\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" :columnas=\"3\" clases=\"Carta\">\n                        Deberían verse 2 celdas horizontalmente en lugar de cuatro\n                    </CeldaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" :columnas=\"1\" clases=\"Carta\">\n                        OK???\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n            </LayoutHorizontal>\n        </SoloEscritorio>\n        <SoloTablet>\n            <LayoutHorizontal :separacion=\"5\">\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        En tablet soy asi\n                    </CeldaHorizontal>\n                    <CeldaHorizontal ancho=\"100%\" clases=\"Carta\">\n                        En tablet soy asi\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n            </LayoutHorizontal>\n            <LayoutHorizontal :separacion=\"5\">\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        En tablet soy asi\n                    </CeldaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        En tablet soy asi\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n            </LayoutHorizontal>\n            <LayoutHorizontal :separacion=\"5\">\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        En tablet soy asi\n                    </CeldaHorizontal>\n                    <CeldaHorizontal ancho=\"100%\" :columnas=\"1\" clases=\"Carta\">\n                        En tablet soy asi\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n            </LayoutHorizontal>\n        </SoloTablet>\n        <SoloMovil>\n            <LayoutHorizontal :separacion=\"5\">\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        En movil soy asi<br/>\n                        En movil soy asi<br/>\n                        En movil soy asi<br/>\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"100%\" clases=\"Carta\">\n                        En movil soy asi\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        En movil soy asi\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" clases=\"Carta\">\n                        En movil soy asi\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" :columnas=\"3\" clases=\"Carta\">\n                        En movil soy asi\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n                <FilaHorizontal>\n                    <CeldaHorizontal ancho=\"1%\" :columnas=\"1\" clases=\"Carta\">\n                        En movil soy asi\n                    </CeldaHorizontal>\n                </FilaHorizontal>\n            </LayoutHorizontal>\n        </SoloMovil>\n    </div>",
  function(component) {return { watch:{ $route:function() {if((!(this.authentication))) {
this.$router.history.push( "/login" );
}
}
},
mounted() {if((!(this.authentication))) {
this.$router.history.push( "/login" );
}
}
};},
  "\"html {}\\n    body {}\\n    .Component {}\\n    .App {}\\n\", null", {},
  [ { path:"/login",
name:"Login",
component:PaginaDeLogin,
props:{ 
}
},
{ path:"/logout",
name:"Logout",
component:PaginaDeLogout,
props:{ 
}
},
{ path:"/guia",
name:"Guia",
component:PaginaDeGuia,
props:{ 
}
},
{ path:"/votaciones/problemas/propuestos",
name:"ProblemasPropuestos",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"problemas",
"propuestos" ],
atrasHacia:"/votaciones/problemas"
}
},
{ path:"/votaciones/problemas/destacados",
name:"ProblemasDestacados",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"problemas",
"destacados" ],
atrasHacia:"/votaciones/problemas"
}
},
{ path:"/votaciones/problemas/aprobados",
name:"ProblemasAprobados",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"problemas",
"aprobados" ],
atrasHacia:"/votaciones/problemas"
}
},
{ path:"/votaciones/problemas/nuevo",
name:"NuevoProblema",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"problemas",
"nuevo" ],
atrasHacia:"/votaciones/problemas"
}
},
{ path:"/votaciones/problemas",
name:"VotacionesDeProblemas",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"problemas" ],
atrasHacia:"/votaciones"
}
},
{ path:"/votaciones/soluciones/propuestas",
name:"SolucionesPropuestas",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"soluciones",
"propuestas" ],
atrasHacia:"/votaciones/soluciones"
}
},
{ path:"/votaciones/soluciones/destacadas",
name:"SolucionesDestacadas",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"soluciones",
"destacadas" ],
atrasHacia:"/votaciones/soluciones"
}
},
{ path:"/votaciones/soluciones/aprobadas",
name:"SolucionesAprobadas",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"soluciones",
"aprobadas" ],
atrasHacia:"/votaciones/soluciones"
}
},
{ path:"/votaciones/soluciones/nueva",
name:"NuevaSolucion",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"soluciones",
"nueva" ],
atrasHacia:"/votaciones/soluciones"
}
},
{ path:"/votaciones/soluciones",
name:"VotacionesDeSoluciones",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"soluciones" ],
atrasHacia:"/votaciones"
}
},
{ path:"/votaciones/implementaciones/propuestas",
name:"ImplementacionesPropuestas",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"implementaciones",
"propuestas" ],
atrasHacia:"/votaciones/implementaciones"
}
},
{ path:"/votaciones/implementaciones/destacadas",
name:"ImplementacionesDestacadas",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"implementaciones",
"destacadas" ],
atrasHacia:"/votaciones/implementaciones"
}
},
{ path:"/votaciones/implementaciones/aprobadas",
name:"ImplementacionesAprobadas",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"implementaciones",
"aprobadas" ],
atrasHacia:"/votaciones/implementaciones"
}
},
{ path:"/votaciones/implementaciones/nueva",
name:"NuevaSolucion",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"implementaciones",
"nueva" ],
atrasHacia:"/votaciones/implementaciones"
}
},
{ path:"/votaciones/implementaciones",
name:"VotacionesDeImplementaciones",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"implementaciones" ],
atrasHacia:"/votaciones"
}
},
{ path:"/votaciones/seguimiento",
name:"VotacionesDeSeguimiento",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones",
"seguimiento" ],
atrasHacia:"/votaciones"
}
},
{ path:"/votaciones",
name:"Votaciones",
component:PaginaDeSeccion,
props:{ seccion:[ "votaciones" ]
}
},
{ path:"/leyes",
name:"Leyes",
component:PaginaDeSeccion,
props:{ seccion:[ "leyes" ],
atrasHacia:"/"
}
},
{ path:"/confrontaciones",
name:"Confrontaciones",
component:PaginaDeSeccion,
props:{ seccion:[ "confrontaciones" ],
atrasHacia:"/"
}
},
{ path:"/educacion",
name:"Educacion",
component:PaginaDeSeccion,
props:{ seccion:[ "educacion" ],
atrasHacia:"/"
}
},
{ path:"/noticias",
name:"Noticias",
component:PaginaDeSeccion,
props:{ seccion:[ "noticias" ],
atrasHacia:"/"
}
},
{ path:"/economia",
name:"Economia",
component:PaginaDeSeccion,
props:{ seccion:[ "economia" ],
atrasHacia:"/"
}
},
{ path:"/preferencias",
name:"Preferencias",
component:PaginaDePreferencias,
props:{ 
}
},
{ path:"/",
name:"Home",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");