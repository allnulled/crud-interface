
const Rasgos = { 
};
Rasgos.RasgoDeControlDeTexto = { props:{ valor:{ type:String,
default:() => {return "";
}
},
vincularValor:{ type:Array,
default:[  ]
}
},
data() {return { internal_value:this.valor
};
},
watch:{ internal_value( nuevoValor ) {if(Array.isArray(this.vincularValor) && this.vincularValor.length > 1 && typeof this.vincularValor[ 1 ] === 'string') {
this.vincularValor[ 0 ][ this.vincularValor[ 1 ] ] = nuevoValor;
}
}
}
};
const SeparadorHorizontal = Castelog.metodos.un_componente_vue2("SeparadorHorizontal", "<hr class=\"SeparadorHorizontal Component margin_vertical_2\"></hr>", null, null);
const ContenidoDePagina = Castelog.metodos.un_componente_vue2("ContenidoDePagina", "<div class=\"ContenidoDePagina Component\">\n        <div class=\"contenido\">\n            <slot></slot>\n        </div>\n    </div>", null, null);
const TituloDePagina = Castelog.metodos.un_componente_vue2("TituloDePagina", "<div class=\"TituloDePagina Component padding_2\">\n        <h1>\n            <table>\n                <tr>\n                    <td style=\"width: 100%; text-align: left;\"><slot></slot></td>\n                    <td :class=\"{invisible: !atrasHacia}\">\n                        <ControlParaBoton style=\"vertical-align: middle;\" :al-clicar=\"() => $router.history.push(atrasHacia)\">Atrás</ControlParaBoton>\n                    </td>\n                </tr>\n            </table>\n        </h1>\n    </div>", function(component) {return { props:{ atrasHacia:{ type:String,
default:() => {return "";
}
}
},
data() {return { 
};
}
};}, null);
const LayoutCentradoFijo = Castelog.metodos.un_componente_vue2("LayoutCentradoFijo", "<div class=\"LayoutCentradoFijo Component\">\n        <div class=\"layout_centrado_fijo_contenedor_1\">\n            <div class=\"layout_centrado_fijo_contenedor_2\">\n                <div class=\"layout_centrado_fijo_contenedor_3\">\n                    <div class=\"layout_centrado_fijo_contenedor_4\">\n                        <div class=\"layout_centrado_fijo_contenido sombreado\">\n                            <slot></slot>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>", null, null);
const LayoutHorizontal = Castelog.metodos.un_componente_vue2("LayoutHorizontal", "<div class=\"LayoutHorizontal Component\" :style=\"'box-sizing: border-box; padding-right: 0px; margin-left: 0px; margin-top: -' + separacion + 'px;'\">\n        <table style=\"width: 100%; box-sizing: border-box;\" :style=\"'border-collapse: ' + (separacion ? 'separate' : 'collapse') + '; border-spacing: ' + separacion + 'px;'\">\n            <slot></slot>\n        </table>\n    </div>", function(component) {return { props:{ separacion:{ type:Number,
default:function() {return 0;
}
}
}
};}, null);
const FilaHorizontal = Castelog.metodos.un_componente_vue2("FilaHorizontal", "<tr class=\"FilaHorizontal Component\" style=\"display: table-row; height: 100%;\">\n        <slot></slot>\n    </tr>", null, null);
const CeldaHorizontal = Castelog.metodos.un_componente_vue2("CeldaHorizontal", "<td class=\"CeldaHorizontal Component\" :class=\"clases\" :style=\"'display: table-cell; width: ' + ancho + '; vertical-align: top; height: inherit;'\" :colspan=\"columnas\">\n        <slot></slot>\n    </td>", function(component) {return { props:{ columnas:{ type:Number,
default:function() {return 1;
}
},
separacion:{ type:Number,
default:function() {return 0;
}
},
ancho:{ type:String,
default:function() {return "1%";
}
},
clases:{ type:[ String,
Object ],
default:function() {return "";
}
}
}
};}, null);
const SoloEscritorio = Castelog.metodos.un_componente_vue2("SoloEscritorio", "<div class=\"SoloEscritorio1 SoloEscritorio2 SoloEscritorio3 Component\">\n        <slot></slot>\n    </div>", null, null);
const SoloTablet = Castelog.metodos.un_componente_vue2("SoloTablet", "<div class=\"SoloTablet1 SoloTablet2 SoloTablet3 Component\">\n        <slot></slot>\n    </div>", null, null);
const SoloMovil = Castelog.metodos.un_componente_vue2("SoloMovil", "<div class=\"SoloMovil1 SoloMovil2 Component\">\n        <slot></slot>\n    </div>", null, null);
const LayoutVertical = Castelog.metodos.un_componente_vue2("LayoutVertical", "<div class=\"LayoutVertical Component\">\n        <slot></slot>\n    </div>", null, null);
const CeldaVertical = Castelog.metodos.un_componente_vue2("CeldaVertical", "<div class=\"CeldaVertical Component\">\n        <slot></slot>\n    </div>", null, null);
const Carta = Castelog.metodos.un_componente_vue2("Carta", "<div class=\"Carta Component\">\n        <slot></slot>\n    </div>", null, null);
const Contextualizador = Castelog.metodos.un_componente_vue2("Contextualizador", "<div class=\"Contextualizador Component padding_2 margin_2 margin_bottom_0\" v-if=\"contexto\">\n        <template v-for=\"(itemContextual, indexContextual) in contexto\">\n            <span style=\"display: inline-block;\" class=\"item_de_contexto\" v-bind:key=\"'contextualizador-' + uuid + '-item-' + indexContextual\">\n                <span v-if=\"indexContextual !== 0\"> » </span>\n                <Hipervinculo class=\"padding_1\" v-if=\"itemContextual.link\" :hipervinculo=\"itemContextual.link\"> {{ itemContextual.texto }} </Hipervinculo>\n                <span class=\"padding_1\" v-else> {{ itemContextual.texto }} </span>\n            </span>\n        </template>\n    </div>", function(component) {return { props:{ uuid:{ type:String,
default:function() {return Castelog.metodos.un_texto_aleatorio(10, undefined);
}
},
contexto:{ type:Array,
required:true
}
}
};}, null);
const ExploradorDeSecciones = Castelog.metodos.un_componente_vue2("ExploradorDeSecciones", "<div class=\"ExploradorDeSecciones Component\">\n        <TituloDePagina :atras-hacia=\"atrasHacia\">{{ accederTitulo(arbolDeSecciones, seccion) }}</TituloDePagina>\n        <Contextualizador :contexto=\"subseccionSeleccionada.$contexto\"></Contextualizador>\n        <ContenidoDePagina>\n            <div>Secciones disponibles:</div>\n            <ListaNumerada>\n                <template v-for=\"(item, itemIndex) in subseccionSeleccionada\">\n                    <ItemDeLista v-if=\"!itemIndex.startsWith('$')\" v-bind:key=\"'seccion-explorable-' + itemIndex\">\n                        <Hipervinculo :hipervinculo=\"item.$hipervinculo\">\n                        {{ item.$titulo }}\n                        </Hipervinculo>\n                    </ItemDeLista>\n                </template>\n            </ListaNumerada>\n        </ContenidoDePagina>\n    </div>", function(component) {return { props:{ atrasHacia:{ type:String,
default:() => {return "/";
}
},
arbolDeSecciones:{ type:Object,
default:() => {return { 
};
}
},
seccion:{ type:Array,
default:() => {return [  ];
}
}
},
data() {return { subseccionSeleccionada:this.accederSubseccion( this.arbolDeSecciones,
this.seccion )
};
},
watch:{ seccion:function( nuevoValor ) {this.subseccionSeleccionada = this.accederSubseccion( this.arbolDeSecciones,
nuevoValor );
}
},
methods:{ accederTitulo( arbol,
seccion ) {let acceso = arbol;
for(let index = 0; index < seccion.length; index++) {acceso = acceso[ seccion[ index ] ];}
return acceso.$titulo;
},
accederSubseccion( arbol,
seccion ) {let acceso = arbol;
for(let index = 0; index < seccion.length; index++) {acceso = acceso[ seccion[ index ] ];}
return acceso;
}
}
};}, null);
const PaginaDeSeccion = Castelog.metodos.un_componente_vue2("PaginaDeSeccion", "<div class=\"PaginaDeSeccion Component\">\n        <ExploradorDeSecciones :arbol-de-secciones=\"arbolDeSecciones\" :seccion=\"seccion\" :atras-hacia=\"atrasHacia\"></ExploradorDeSecciones>\n    </div>", function(component) {return { props:{ atrasHacia:{ type:String,
default:() => {return "/";
}
},
seccion:{ type:Array,
default:() => {return [  ];
}
}
},
data() {return { arbolDeSecciones:{ votaciones:{ $titulo:"Votaciones",
$contexto:[ { link:"/",
texto:"Índice"
},
{ texto:"Votaciones"
} ],
problemas:{ $titulo:"Problemas",
$hipervinculo:"/votaciones/problemas",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ texto:"Problemas"
} ],
aprobados:{ $titulo:"Problemas aprobados",
$hipervinculo:"/votaciones/problemas/aprobados",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/problemas",
texto:"Problemas"
},
{ texto:"Aprobados"
} ]
},
destacados:{ $titulo:"Problemas destacados",
$hipervinculo:"/votaciones/problemas/destacados",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/problemas",
texto:"Problemas"
},
{ texto:"Destacados"
} ]
},
propuestos:{ $titulo:"Problemas propuestos",
$hipervinculo:"/votaciones/problemas/propuestos",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/problemas",
texto:"Problemas"
},
{ texto:"Propuestos"
} ]
},
nuevo:{ $titulo:"Nuevo problema",
$hipervinculo:"/votaciones/problemas/nuevo",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/problemas",
texto:"Problemas"
},
{ texto:"Nuevo"
} ]
}
},
soluciones:{ $titulo:"Soluciones",
$hipervinculo:"/votaciones/soluciones",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ texto:"Soluciones"
} ],
aprobadas:{ $titulo:"Soluciones aprobadas",
$hipervinculo:"/votaciones/soluciones/aprobadas",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/soluciones",
texto:"Soluciones"
},
{ texto:"Aprobadas"
} ]
},
destacadas:{ $titulo:"Soluciones destacadas",
$hipervinculo:"/votaciones/soluciones/destacadas",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/soluciones",
texto:"Soluciones"
},
{ texto:"Destacadas"
} ]
},
propuestas:{ $titulo:"Soluciones propuestas",
$hipervinculo:"/votaciones/soluciones/propuestas",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/soluciones",
texto:"Soluciones"
},
{ texto:"Propuestas"
} ]
},
nueva:{ $titulo:"Nueva solución",
$hipervinculo:"/votaciones/soluciones/nueva",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/soluciones",
texto:"Soluciones"
},
{ texto:"Nueva"
} ]
}
},
implementaciones:{ $titulo:"Implementaciones",
$hipervinculo:"/votaciones/implementaciones",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ texto:"Implementaciones"
} ],
aprobadas:{ $titulo:"Implementaciones aprobadas",
$hipervinculo:"/votaciones/implementaciones/aprobadas",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/implementaciones",
texto:"Implementaciones"
},
{ texto:"Aprobadas"
} ]
},
destacadas:{ $titulo:"Implementaciones destacadas",
$hipervinculo:"/votaciones/implementaciones/destacadas",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/implementaciones",
texto:"Implementaciones"
},
{ texto:"Destacadas"
} ]
},
propuestas:{ $titulo:"Implementaciones propuestas",
$hipervinculo:"/votaciones/implementaciones/propuestas",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/implementaciones",
texto:"Implementaciones"
},
{ texto:"Propuestas"
} ]
},
nueva:{ $titulo:"Nueva solución",
$hipervinculo:"/votaciones/implementaciones/nueva",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ link:"/votaciones/implementaciones",
texto:"Implementaciones"
},
{ texto:"Nueva"
} ]
}
},
seguimiento:{ $titulo:"Seguimiento",
$hipervinculo:"/votaciones/seguimiento",
$contexto:[ { link:"/",
texto:"Índice"
},
{ link:"/votaciones",
texto:"Votaciones"
},
{ texto:"Seguimiento"
} ]
}
},
leyes:{ $titulo:"Leyes",
$hipervinculo:"/leyes",
$contexto:[ { link:"/",
texto:"Índice"
},
{ texto:"Leyes"
} ]
},
confrontaciones:{ $titulo:"Confrontaciones",
$hipervinculo:"/confrontaciones",
$contexto:[ { link:"/",
texto:"Índice"
},
{ texto:"Confrontaciones"
} ]
},
educacion:{ $titulo:"Educación",
$hipervinculo:"/educacion",
$contexto:[ { link:"/",
texto:"Índice"
},
{ texto:"Educación"
} ]
},
noticias:{ $titulo:"Noticias",
$hipervinculo:"/noticias",
$contexto:[ { link:"/",
texto:"Índice"
},
{ texto:"Noticias"
} ]
},
economia:{ $titulo:"Economía",
$hipervinculo:"/economia",
$contexto:[ { link:"/",
texto:"Índice"
},
{ texto:"Economía"
} ]
}
}
};
}
};}, null);
const FormularioDeControles = Castelog.metodos.un_componente_vue2("FormularioDeControles", "<div class=\"FormularioDeControles Component\">\n        <slot></slot>\n    </div>", function(component) {return { props:{ alEnviar:{ type:Function,
default:() => {return undefined;
}
}
},
methods:{ enviarFormulario( evento ) {if(typeof this.alEnviar === 'function') {
this.alEnviar( evento,
this );
}
}
}
};}, null);
const EtiquetaParaControl = Castelog.metodos.un_componente_vue2("EtiquetaParaControl", "<div class=\"EtiquetaParaControl Component\">\n        <slot></slot>\n    </div>", null, null);
const ControlParaTexto = Castelog.metodos.un_componente_vue2("ControlParaTexto", "<div class=\"ControlParaTexto Component\">\n        <EtiquetaParaControl>\n            <slot></slot>\n        </EtiquetaParaControl>\n        <input class=\"sombreado\" type=\"text\" v-model=\"internal_value\"></input>\n    </div>", function(component) {return { 
...(Rasgos.RasgoDeControlDeTexto )
};}, null);
const ControlParaPassword = Castelog.metodos.un_componente_vue2("ControlParaPassword", "<div class=\"ControlParaPassword Component\">\n        <EtiquetaParaControl>\n            <slot></slot>\n        </EtiquetaParaControl>\n        <input class=\"sombreado\" type=\"password\" v-model=\"internal_value\"></input>\n    </div>", function(component) {return { 
...(Rasgos.RasgoDeControlDeTexto )
};}, null);
const ControlParaFechaConReloj = Castelog.metodos.un_componente_vue2("ControlParaFechaConReloj", "<div class=\"ControlParaFechaConReloj Component\">\n        Reloj...\n    </div>", function(component) {return { props:{ valor:Rasgos.RasgoDeControlDeTexto.props.valor,
vincularValor:Rasgos.RasgoDeControlDeTexto.props.vincularValor,
modo:"completo"
},
data() {return { internal_value:this.valor
};
},
watch:{ internal_value( nuevoValor ) {if(Array.isArray(this.vincularValor) && this.vincularValor.length > 1 && typeof this.vincularValor[ 1 ] === 'string') {
this.vincularValor[ 0 ][ this.vincularValor[ 1 ] ] = nuevoValor;
}
}
}
};}, null);
const ControlParaFechaConCalendario = Castelog.metodos.un_componente_vue2("ControlParaFechaConCalendario", "<div class=\"ControlParaFechaConCalendario Component\">\n        Calendario...\n    </div>", function(component) {return { props:{ valor:Rasgos.RasgoDeControlDeTexto.props.valor,
vincularValor:Rasgos.RasgoDeControlDeTexto.props.vincularValor,
modo:"completo"
},
data() {return { internal_value:this.valor
};
},
watch:{ internal_value( nuevoValor ) {if(Array.isArray(this.vincularValor) && this.vincularValor.length > 1 && typeof this.vincularValor[ 1 ] === 'string') {
this.vincularValor[ 0 ][ this.vincularValor[ 1 ] ] = nuevoValor;
}
}
}
};}, null);
const ControlParaFecha = Castelog.metodos.un_componente_vue2("ControlParaFecha", "<div class=\"ControlParaFecha Component\">\n        <EtiquetaParaControl>\n            <slot></slot>\n        </EtiquetaParaControl>\n        <ControlParaFechaConCalendario v-if=\"['calendario','completo'].indexOf(modo) !== -1\" />\n        <ControlParaFechaConReloj v-if=\"['completo','reloj'].indexOf(modo) !== -1\" />\n    </div>", function(component) {return { props:{ valor:Rasgos.RasgoDeControlDeTexto.props.valor,
vincularValor:Rasgos.RasgoDeControlDeTexto.props.vincularValor,
modo:"completo"
},
data() {return { internal_value:this.valor
};
},
watch:{ internal_value( nuevoValor ) {if(Array.isArray(this.vincularValor) && this.vincularValor.length > 1 && typeof this.vincularValor[ 1 ] === 'string') {
this.vincularValor[ 0 ][ this.vincularValor[ 1 ] ] = nuevoValor;
}
}
}
};}, null);
const ControlParaBoton = Castelog.metodos.un_componente_vue2("ControlParaBoton", "<button class=\"ControlParaBoton Component sombreado\" v-on:click=\"alClicar\">\n        <slot></slot>\n    </button>", function(component) {return { props:{ alClicar:{ type:Function,
default:() => {return { 
};
}
}
}
};}, null);
const ControlParaBotonDeEnvio = Castelog.metodos.un_componente_vue2("ControlParaBotonDeEnvio", "<button class=\"ControlParaBotonDeEnvio Component sombreado\" v-on:click=\"enviar\">\n        <slot></slot>\n    </button>", function(component) {return { props:{ vincularEnvio:{ type:Array,
default:() => {return [  ];
}
}
},
data() {return { 
};
},
methods:{ enviar() {if(Array.isArray(this.vincularEnvio) && this.vincularEnvio.length > 0) {
let objetivo = this.vincularEnvio[ 0 ];
for(let index = 1; index < this.vincularEnvio.length; index++) {objetivo = objetivo[ this.vincularEnvio[ index ] ];}
objetivo(  );
}
}
}
};}, null);
const CajaSimple = Castelog.metodos.un_componente_vue2("CajaSimple", "<div class=\"CajaSimple Component\">\n        <slot></slot>\n    </div>", null, null);
const CajaHorizontal = Castelog.metodos.un_componente_vue2("CajaHorizontal", "<table class=\"CajaHorizontal Component\">\n        <tbody>\n            <tr>\n                <slot></slot>\n            </tr>\n        </tbody>\n    </table>", null, null);
const CajonHorizontal = Castelog.metodos.un_componente_vue2("CajonHorizontal", "<td class=\"CajonHorizontal Component\">\n        <slot></slot>\n    </td>", null, null);
const EspacioDeTexto = Castelog.metodos.un_componente_vue2("EspacioDeTexto", "<span class=\"EspacioDeTexto Component\">\n        <slot></slot>\n    </span>", null, null);
const Hipervinculo = Castelog.metodos.un_componente_vue2("Hipervinculo", "<router-link class=\"Hipervinculo Component\" :to=\"hipervinculo\">\n        <slot></slot>\n    </router-link>", function(component) {return { props:{ hipervinculo:{ type:String,
default:() => {return "#";
}
}
}
};}, null);
const ListaNumerada = Castelog.metodos.un_componente_vue2("ListaNumerada", "<ul class=\"ListaNumerada Component\">\n        <slot></slot>\n    </ul>", null, null);
const ItemDeLista = Castelog.metodos.un_componente_vue2("ItemDeLista", "<li class=\"ItemDeLista Component\">\n        <slot></slot>\n    </li>", null, null);
const PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio", "<div class=\"PaginaDeInicio Component\">\n        <TituloDePagina>Índice</TituloDePagina>\n        <Contextualizador :contexto=\"[{ texto:'Índice' }]\"></Contextualizador>\n        <ContenidoDePagina>\n            <ListaNumerada>\n                <ItemDeLista>\n                    <Hipervinculo hipervinculo=\"/guia\">Guía</Hipervinculo>\n                </ItemDeLista>\n                <ItemDeLista>\n                    <Hipervinculo hipervinculo=\"/votaciones\">Votaciones</Hipervinculo>\n                </ItemDeLista>\n                <ItemDeLista>\n                    <Hipervinculo hipervinculo=\"/leyes\">Leyes</Hipervinculo>\n                </ItemDeLista>\n                <ItemDeLista>\n                    <Hipervinculo hipervinculo=\"/confrontaciones\">Confrontaciones</Hipervinculo>\n                </ItemDeLista>\n                <ItemDeLista>\n                    <Hipervinculo hipervinculo=\"/educacion\">Educación</Hipervinculo>\n                </ItemDeLista>\n                <ItemDeLista>\n                    <Hipervinculo hipervinculo=\"/noticias\">Noticias</Hipervinculo>\n                </ItemDeLista>\n                <ItemDeLista>\n                    <Hipervinculo hipervinculo=\"/economia\">Economía</Hipervinculo>\n                </ItemDeLista>\n                <ItemDeLista>\n                    <Hipervinculo hipervinculo=\"/preferencias\">Preferencias</Hipervinculo>\n                </ItemDeLista>\n                <ItemDeLista>\n                    <Hipervinculo hipervinculo=\"/logout\">Salir</Hipervinculo>\n                </ItemDeLista>\n            </ListaNumerada>\n        </ContenidoDePagina>\n    </div>", null, null);
const PaginaDeLogin = Castelog.metodos.un_componente_vue2("PaginaDeLogin", "<div class=\"PaginaDeLogin Component\">\n        <LayoutCentradoFijo>\n            <TituloDePagina style=\"min-width: 150px;\">Identificación</TituloDePagina>\n            <ContenidoDePagina style=\"background-color: rgba(255,255,255,0.2);\" class=\"padding_0\">\n                <FormularioDeControles :al-enviar=\"this.enviarFormulario\" ref=\"FormularioDeLogin\">\n                    <ControlParaTexto :vincular-valor=\"[this,'internal_user']\">Usuario:</ControlParaTexto>\n                    <ControlParaPassword :vincular-valor=\"[this,'internal_password']\">Contraseña:</ControlParaPassword>\n                    <SeparadorHorizontal />\n                    <CajaSimple style=\"text-align: right;\">\n                        <ControlParaBotonDeEnvio :vincular-envio=\"[this,'$refs','FormularioDeLogin', 'enviarFormulario']\">Entrar</ControlParaBotonDeEnvio>\n                    </CajaSimple>\n                    <CajaSimple style=\"text-align: right;\">\n                        <EspacioDeTexto style=\"font-size: 10px;\">O regístrate <Hipervinculo :hipervinculo=\"'/register'\">aquí</Hipervinculo></EspacioDeTexto>\n                    </CajaSimple>\n                </FormularioDeControles>\n            </ContenidoDePagina>\n        </LayoutCentradoFijo>\n    </div>", function(component) {return { props:{ app:{ type:Object,
required:true
}
},
data() {return { internal_user:"",
internal_password:""
};
},
methods:{ enviarFormulario() {this.app.authentication = { user:{ 
},
groups:[  ],
privileges:[  ],
session:{ 
}
};
this.$router.history.push( "/" );
}
}
};}, null);
const PaginaDeLogout = Castelog.metodos.un_componente_vue2("PaginaDeLogout", "<div class=\"PaginaDeLogout Component\">\n        <TituloDePagina style=\"min-width: 150px;\" atras-hacia=\"/\">Salir</TituloDePagina>\n        <Contextualizador :contexto=\"[{ link: '/', texto: 'Índice' }, { texto: 'Salir' }]\"></Contextualizador>\n        <ContenidoDePagina>\n            <SeparadorHorizontal />\n            <CajaSimple>¿Seguro que quieres salir de la aplicación definitivamente?</CajaSimple>\n            <SeparadorHorizontal />\n            <CajaHorizontal>\n                <CajonHorizontal style=\"width:100%;\"></CajonHorizontal>\n                <CajonHorizontal><ControlParaBoton :al-clicar=\"volver\">Volver</ControlParaBoton></CajonHorizontal>\n                <CajonHorizontal><ControlParaBoton :al-clicar=\"salirDefinitivamente\">Salir definitivamente</ControlParaBoton></CajonHorizontal>\n            </CajaHorizontal>\n        </ContenidoDePagina>\n    </div>", function(component) {return { props:{ app:{ type:Object,
required:true
}
},
methods:{ volver() {this.$router.history.push( "/" );
},
salirDefinitivamente() {this.app.authentication = undefined;
this.$router.history.push( "/login" );
}
}
};}, null);
const PaginaDePreferencias = Castelog.metodos.un_componente_vue2("PaginaDePreferencias", "<div class=\"PaginaDePreferencias Component\">\n        <TituloDePagina atras-hacia=\"/\">Preferencias</TituloDePagina>\n        <ContenidoDePagina>\n            \n        </ContenidoDePagina>\n    </div>", null, null);
const PaginaDeGuia = Castelog.metodos.un_componente_vue2("PaginaDeGuia", "<div class=\"PaginaDeGuia Component\">\n        <TituloDePagina atras-hacia=\"/\">Guía</TituloDePagina>\n        <ContenidoDePagina>\n            \n        </ContenidoDePagina>\n    </div>", null, null);