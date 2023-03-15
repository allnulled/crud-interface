
window.componentes.Rectangulo = Castelog.metodos.un_componente_vue2("Rectangulo", "<div class=\"Rectangulo Component\">\n        <div class=\"rectangulo_contenedor\" :style=\"'top:'+y+'px;left:'+x+'px;width:'+ancho+'px;height:'+alto+'px;background-color:'+color+';rotation:'+rotacion+';'+otrosEstilos\"></div>\n    </div>", function(component) {return { props:{ x:{ type:Number,
default:function() {return 0;
}
},
y:{ type:Number,
default:function() {return 0;
}
},
ancho:{ type:Number,
default:function() {return 30;
}
},
alto:{ type:Number,
default:function() {return 30;
}
},
color:{ type:String,
default:function() {return "black";
}
},
rotacion:{ type:String,
default:function() {return "deg(0)";
}
},
otrosEstilos:{ type:String,
default:function() {return "";
}
}
}
};}, null);
window.componentes.Icono = Castelog.metodos.un_componente_vue2("Icono", "<div class=\"Icono Component\">\n        <div class=\"icono_contenedor\" :style=\"{width:tamanyo+'px',height:tamanyo+'px'}\">\n            <template v-if=\"tipo === 'hamburguesa'\">\n                <Rectangulo :ancho=\"26\" :alto=\"4\" :x=\"2\" :y=\"4\" otros-estilos=\"border-radius: 4pt;\"></Rectangulo>\n                <Rectangulo :ancho=\"26\" :alto=\"4\" :x=\"2\" :y=\"13\" otros-estilos=\"border-radius: 4pt;\"></Rectangulo>\n                <Rectangulo :ancho=\"26\" :alto=\"4\" :x=\"2\" :y=\"22\" otros-estilos=\"border-radius: 4pt;\"></Rectangulo>\n            </template>\n            <template v-else-if=\"tipo === 'punto'\">\n                <Rectangulo :ancho=\"4\" :alto=\"4\" :x=\"13\" :y=\"13\" otros-estilos=\"border-radius:50%;\"></Rectangulo>\n            </template>\n            <template v-else-if=\"tipo === 'tres puntos'\">\n                <Rectangulo :ancho=\"4\" :alto=\"4\" :x=\"4\" :y=\"13\" otros-estilos=\"border-radius:50%;\"></Rectangulo>\n                <Rectangulo :ancho=\"4\" :alto=\"4\" :x=\"13\" :y=\"13\" otros-estilos=\"border-radius:50%;\"></Rectangulo>\n                <Rectangulo :ancho=\"4\" :alto=\"4\" :x=\"22\" :y=\"13\" otros-estilos=\"border-radius:50%;\"></Rectangulo>\n            </template>\n            <template v-else-if=\"tipo === 'flecha izquierda'\">\n                \n            </template>\n            <template v-else-if=\"tipo === 'flecha derecha'\">\n                \n            </template>\n            <template v-else-if=\"tipo === 'flecha arriba'\">\n                \n            </template>\n            <template v-else-if=\"tipo === 'flecha abajo'\">\n                \n            </template>\n            <template v-else-if=\"tipo === 'doble flecha izquierda'\">\n                \n            </template>\n            <template v-else-if=\"tipo === 'doble flecha derecha'\">\n                \n            </template>\n            <template v-else-if=\"tipo === 'doble flecha arriba'\">\n                \n            </template>\n            <template v-else-if=\"tipo === 'doble flecha abajo'\">\n                \n            </template>\n        </div>\n    </div>", function(component) {return { props:{ tamanyo:{ type:Number,
default:function() {return 30;
}
},
tipo:{ type:String,
default:function() {return "punto";
}
}
}
};}, null);