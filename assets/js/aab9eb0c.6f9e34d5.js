"use strict";(self.webpackChunkgtanexus_github_io=self.webpackChunkgtanexus_github_io||[]).push([[966],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(u.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),c=r,k=p["".concat(u,".").concat(c)]||p[c]||m[c]||l;return t?n.createElement(k,o(o({ref:a},d),{},{components:t})):n.createElement(k,o({ref:a},d))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3321:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const l={title:"Controles y Comandos",sidebar_position:4},o="Controles y comandos",i={unversionedId:"controls/index",id:"controls/index",title:"Controles y Comandos",description:"Como usuario ten en cuenta que los binds que veras a continuaci\xf3n se pueden modificar dentro del juego seg\xfan tu prefieras para asi tener una configuraci\xf3n optima ;)",source:"@site/docs/controls/index.md",sourceDirName:"controls",slug:"/controls/",permalink:"/controls/",draft:!1,tags:[],version:"current",lastUpdatedAt:1705007318,formattedLastUpdatedAt:"11 ene 2024",sidebarPosition:4,frontMatter:{title:"Controles y Comandos",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Codigo Penal",permalink:"/guides/cod_penal/"},next:{title:"Donaciones",permalink:"/donaciones/"}},u={},s=[{value:"1. Controles",id:"1-controles",level:2},{value:"General",id:"general",level:3},{value:"Movimiento",id:"movimiento",level:3},{value:"Inventario",id:"inventario",level:3},{value:"Uso del telefono",id:"uso-del-telefono",level:3},{value:"Uso del radio",id:"uso-del-radio",level:3},{value:"Men\xfa de Veh\xedculo",id:"men\xfa-de-veh\xedculo",level:3},{value:"Conducci\xf3n Autos/Motos/Botes",id:"conducci\xf3n-autosmotosbotes",level:3},{value:"Conducci\xf3n de Aeronaves",id:"conducci\xf3n-de-aeronaves",level:3},{value:"Uso de las sirenas Policia/EMS/Bomberos",id:"uso-de-las-sirenas-policiaemsbomberos",level:3},{value:"Interacci\xf3n",id:"interacci\xf3n",level:3},{value:"Combate",id:"combate",level:3},{value:"2. Comandos",id:"2-comandos",level:2},{value:"/reporte",id:"reporte",level:3},{value:"/ooc",id:"ooc",level:3},{value:"/me",id:"me",level:3},{value:"/do",id:"do",level:3},{value:"/entorno",id:"entorno",level:3},{value:"/hud",id:"hud",level:3},{value:"/cargar",id:"cargar",level:3},{value:"/darllave",id:"darllave",level:3},{value:"/darllavepermanente",id:"darllavepermanente",level:3},{value:"/quitarllave",id:"quitarllave",level:3},{value:"/id",id:"id",level:3},{value:"/carhud",id:"carhud",level:3},{value:"/kilometraje",id:"kilometraje",level:3},{value:"/e",id:"e",level:3},{value:"/flashsensitive",id:"flashsensitive",level:3},{value:"3. Bindear y Desbindear un comando a una tecla",id:"3-bindear-y-desbindear-un-comando-a-una-tecla",level:2},{value:"Bindeo de animaciones",id:"bindeo-de-animaciones",level:3},{value:"Bindeo de Objetos",id:"bindeo-de-objetos",level:3},{value:"Desbindear comando",id:"desbindear-comando",level:3}],d={toc:s},p="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"controles-y-comandos"},"Controles y comandos"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Como usuario ten en cuenta que los binds que veras a continuaci\xf3n se pueden modificar dentro del juego seg\xfan tu prefieras para asi tener una configuraci\xf3n optima ;)")),(0,r.kt)("h2",{id:"1-controles"},"1. Controles"),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pausa ",(0,r.kt)("strong",{parentName:"li"},"ESC")),(0,r.kt)("li",{parentName:"ul"},"Abrir el chat ",(0,r.kt)("strong",{parentName:"li"},"T")),(0,r.kt)("li",{parentName:"ul"},"Men\xfa Radial ",(0,r.kt)("strong",{parentName:"li"},"F1")),(0,r.kt)("li",{parentName:"ul"},"Abrir interfaz de Trabajos/Jugadores Online ",(0,r.kt)("strong",{parentName:"li"},"FIN o HOME")),(0,r.kt)("li",{parentName:"ul"},"Menu de prendas ",(0,r.kt)("strong",{parentName:"li"},"H")," sirve para quitarte una prenda que tengas puesta"),(0,r.kt)("li",{parentName:"ul"},"Menu de lista de animaciones ",(0,r.kt)("strong",{parentName:"li"},"F4"))),(0,r.kt)("h3",{id:"movimiento"},"Movimiento"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adelante ",(0,r.kt)("strong",{parentName:"li"},"W")),(0,r.kt)("li",{parentName:"ul"},"Atr\xe1s ",(0,r.kt)("strong",{parentName:"li"},"S")),(0,r.kt)("li",{parentName:"ul"},"Izquierda ",(0,r.kt)("strong",{parentName:"li"},"A")),(0,r.kt)("li",{parentName:"ul"},"Derecha ",(0,r.kt)("strong",{parentName:"li"},"D")),(0,r.kt)("li",{parentName:"ul"},"Saltar ",(0,r.kt)("strong",{parentName:"li"},"Space")),(0,r.kt)("li",{parentName:"ul"},"Correr ",(0,r.kt)("strong",{parentName:"li"},"Mayus o Shift")),(0,r.kt)("li",{parentName:"ul"},"Cambiar entre 1ra y 3ra persona ",(0,r.kt)("strong",{parentName:"li"},"V")),(0,r.kt)("li",{parentName:"ul"},"Subir/bajarse del veh\xedculo ",(0,r.kt)("strong",{parentName:"li"},"F")),(0,r.kt)("li",{parentName:"ul"},"Agacharse ",(0,r.kt)("strong",{parentName:"li"},"Ctrl Left")),(0,r.kt)("li",{parentName:"ul"},"Mirar atr\xe1s ",(0,r.kt)("strong",{parentName:"li"},"C")),(0,r.kt)("li",{parentName:"ul"},"Levantar las manos ",(0,r.kt)("strong",{parentName:"li"},"X")),(0,r.kt)("li",{parentName:"ul"},"Cancelar cualquier tipo de animacion ",(0,r.kt)("strong",{parentName:"li"},"X")),(0,r.kt)("li",{parentName:"ul"},"Tirarse en el suelo ",(0,r.kt)("strong",{parentName:"li"},"Z")),(0,r.kt)("li",{parentName:"ul"},"Tumbar jugador ",(0,r.kt)("strong",{parentName:"li"},"Shift + G"))),(0,r.kt)("h3",{id:"inventario"},"Inventario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abrir inventario ",(0,r.kt)("strong",{parentName:"li"},"F2")),(0,r.kt)("li",{parentName:"ul"},"Cerrar inventario ",(0,r.kt)("strong",{parentName:"li"},"ESC")),(0,r.kt)("li",{parentName:"ul"},"Ver los 5 primeros items que tienes acomodados en el inventario ",(0,r.kt)("strong",{parentName:"li"},"TAB"))),(0,r.kt)("h3",{id:"uso-del-telefono"},"Uso del telefono"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abrir Telefono ",(0,r.kt)("strong",{parentName:"li"},"M")),(0,r.kt)("li",{parentName:"ul"},"Cerrar Telefono ",(0,r.kt)("strong",{parentName:"li"},"M")),(0,r.kt)("li",{parentName:"ul"},"Tomar llamada ",(0,r.kt)("strong",{parentName:"li"},"Enter")),(0,r.kt)("li",{parentName:"ul"},"Colgar llamada ",(0,r.kt)("strong",{parentName:"li"},"Retroceso")),(0,r.kt)("li",{parentName:"ul"},"Alternar cursor para el uso del telefono ",(0,r.kt)("strong",{parentName:"li"},"Alt"))),(0,r.kt)("h3",{id:"uso-del-radio"},"Uso del radio"),(0,r.kt)("p",null,"Para usar la radio y colocar una frecuencia tienes que abrir tu inventario en ",(0,r.kt)("strong",{parentName:"p"},"F2")," y darle clic derecho al item de la radio y darle usar, ahora digitas una frecuencia, por ejemplo 1 y le das ",(0,r.kt)("strong",{parentName:"p"},"Enter")," para confirmar."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hablar en la radio ",(0,r.kt)("strong",{parentName:"li"},"Alt"))),(0,r.kt)("h3",{id:"men\xfa-de-veh\xedculo"},"Men\xfa de Veh\xedculo"),(0,r.kt)("p",null,"Es un apartado que en resumidas cuentas te permite cambiar de asiento entre otras funciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abrir men\xfa de veh\xedculo ",(0,r.kt)("strong",{parentName:"li"},"9"))),(0,r.kt)("h3",{id:"conducci\xf3n-autosmotosbotes"},"Conducci\xf3n Autos/Motos/Botes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cinturon ",(0,r.kt)("strong",{parentName:"li"},"B")),(0,r.kt)("li",{parentName:"ul"},"Acelerar ",(0,r.kt)("strong",{parentName:"li"},"W")),(0,r.kt)("li",{parentName:"ul"},"Frenar ",(0,r.kt)("strong",{parentName:"li"},"S")),(0,r.kt)("li",{parentName:"ul"},"izquierda ",(0,r.kt)("strong",{parentName:"li"},"A")),(0,r.kt)("li",{parentName:"ul"},"Derecha ",(0,r.kt)("strong",{parentName:"li"},"D")),(0,r.kt)("li",{parentName:"ul"},"Subir/bajarse del veh\xedculo ",(0,r.kt)("strong",{parentName:"li"},"F")),(0,r.kt)("li",{parentName:"ul"},"Control Cruzero ",(0,r.kt)("strong",{parentName:"li"},"Y")),(0,r.kt)("li",{parentName:"ul"},"Ajuste de luces ",(0,r.kt)("strong",{parentName:"li"},"H")),(0,r.kt)("li",{parentName:"ul"},"Freno de mano/cruce cerrado en barco o moto acuatica  ",(0,r.kt)("strong",{parentName:"li"},"Space")),(0,r.kt)("li",{parentName:"ul"},"Selector de emisora ",(0,r.kt)("strong",{parentName:"li"},"Q")),(0,r.kt)("li",{parentName:"ul"},"Clax\xf3n ",(0,r.kt)("strong",{parentName:"li"},"E")),(0,r.kt)("li",{parentName:"ul"},"Uso del nitro ",(0,r.kt)("strong",{parentName:"li"},"Shift")),(0,r.kt)("li",{parentName:"ul"},"Disminuir presi\xf3n del nitro ",(0,r.kt)("strong",{parentName:"li"},"Alt"))),(0,r.kt)("h3",{id:"conducci\xf3n-de-aeronaves"},"Conducci\xf3n de Aeronaves"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cinturon ",(0,r.kt)("strong",{parentName:"li"},"B")),(0,r.kt)("li",{parentName:"ul"},"Acelerar ",(0,r.kt)("strong",{parentName:"li"},"W")),(0,r.kt)("li",{parentName:"ul"},"Desacelerar ",(0,r.kt)("strong",{parentName:"li"},"S")),(0,r.kt)("li",{parentName:"ul"},"Virar aeronave a la izquierda ",(0,r.kt)("strong",{parentName:"li"},"A")),(0,r.kt)("li",{parentName:"ul"},"Virar aeronave a la derecha ",(0,r.kt)("strong",{parentName:"li"},"D")),(0,r.kt)("li",{parentName:"ul"},"Subir/bajarse del veh\xedculo ",(0,r.kt)("strong",{parentName:"li"},"F")),(0,r.kt)("li",{parentName:"ul"},"Alebeo izquierda ",(0,r.kt)("strong",{parentName:"li"},"numpad4")),(0,r.kt)("li",{parentName:"ul"},"Alebeo derecha ",(0,r.kt)("strong",{parentName:"li"},"numpad6")),(0,r.kt)("li",{parentName:"ul"},"Cabeceo hacia adelante ",(0,r.kt)("strong",{parentName:"li"},"numpad8")),(0,r.kt)("li",{parentName:"ul"},"Cabeceo hacia atr\xe1s ",(0,r.kt)("strong",{parentName:"li"},"numpad5")),(0,r.kt)("li",{parentName:"ul"},"Tren de aterrizaje ",(0,r.kt)("strong",{parentName:"li"},"G")),(0,r.kt)("li",{parentName:"ul"},"Control Cruzero ",(0,r.kt)("strong",{parentName:"li"},"Y")),(0,r.kt)("li",{parentName:"ul"},"Ajuste de luces ",(0,r.kt)("strong",{parentName:"li"},"H")),(0,r.kt)("li",{parentName:"ul"},"Gancho de la aeronave ",(0,r.kt)("strong",{parentName:"li"},"E")),(0,r.kt)("li",{parentName:"ul"},"Selector de emisora ",(0,r.kt)("strong",{parentName:"li"},"Q")),(0,r.kt)("li",{parentName:"ul"},"Hacer rapel desde el helicoptero ",(0,r.kt)("strong",{parentName:"li"},"X"))),(0,r.kt)("p",null,"Aunque no dispongas de un panel numerico puedes utilizar tu mouse como tim\xf3n manteniendo presionado ",(0,r.kt)("strong",{parentName:"p"},"Clic Left"),"."),(0,r.kt)("h3",{id:"uso-de-las-sirenas-policiaemsbomberos"},"Uso de las sirenas Policia/EMS/Bomberos"),(0,r.kt)("p",null,"Deben tener en cuenta tener las luces encendidas (",(0,r.kt)("strong",{parentName:"p"},"Q"),") para poder usar las 3 sirenas mensionadas a continuaci\xf3n."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clax\xf3n ",(0,r.kt)("strong",{parentName:"li"},"E")),(0,r.kt)("li",{parentName:"ul"},"Encender luces ",(0,r.kt)("strong",{parentName:"li"},"Q")),(0,r.kt)("li",{parentName:"ul"},"Sirena Stock ",(0,r.kt)("strong",{parentName:"li"},"R")),(0,r.kt)("li",{parentName:"ul"},"Sirena 1 ",(0,r.kt)("strong",{parentName:"li"},"numpad1")),(0,r.kt)("li",{parentName:"ul"},"Sirena 2 ",(0,r.kt)("strong",{parentName:"li"},"numpad2")),(0,r.kt)("li",{parentName:"ul"},"Sirena 3 ",(0,r.kt)("strong",{parentName:"li"},"numpad3"))),(0,r.kt)("h3",{id:"interacci\xf3n"},"Interacci\xf3n"),(0,r.kt)("p",null,"Para interactuar con la mayor\xeda de objetos en GTA NEXUS hay tres formas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Q")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"F1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"E"))),(0,r.kt)("h3",{id:"combate"},"Combate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recargar ",(0,r.kt)("strong",{parentName:"li"},"R")),(0,r.kt)("li",{parentName:"ul"},"Apuntar ",(0,r.kt)("strong",{parentName:"li"},"Clic Right")),(0,r.kt)("li",{parentName:"ul"},"Golpear o Disparar ",(0,r.kt)("strong",{parentName:"li"},"Clic Left")),(0,r.kt)("li",{parentName:"ul"},"Esquivar golpe ",(0,r.kt)("strong",{parentName:"li"},"Space"))),(0,r.kt)("h2",{id:"2-comandos"},"2. Comandos"),(0,r.kt)("h3",{id:"reporte"},"/reporte"),(0,r.kt)("p",null,"Este comando sirve para enviar un reporte a la administraci\xf3n sobre una duda o un inconveniente surgido en partida. "),(0,r.kt)("h3",{id:"ooc"},"/ooc"),(0,r.kt)("p",null,"Enviar un mensaje que no tiene fuera de rol. Ejemplo:"),(0,r.kt)("p",null,"[id 1]"," /ooc Como se usa el telefono?"),(0,r.kt)("p",null,"[id 2]"," /ooc con la tecla M"),(0,r.kt)("p",null,"[id 1]"," /ooc gracias"),(0,r.kt)("h3",{id:"me"},"/me"),(0,r.kt)("p",null,"Enviar mensaje me, sirve para interpretar acciones de tu personaje. Ejemplo:"),(0,r.kt)("p",null,"[id 1]"," /me se mete la mano en el bolsillo"),(0,r.kt)("h3",{id:"do"},"/do"),(0,r.kt)("p",null,"Enviar mensaje do, sirve para interpretar el entorno.\nEjemplo: "),(0,r.kt)("p",null,"[id 2]"," /do que tendr\xeda?"),(0,r.kt)("p",null,"[id 1]","/do monedas"),(0,r.kt)("h3",{id:"entorno"},"/entorno"),(0,r.kt)("p",null,"Este comando envia un llamado automatico a la policia, le puedes a\xf1ardir informacion sobre los sucedido. Por ejemplo:"),(0,r.kt)("p",null,"/entorno se ha visto una persona robar una tienda cerca del casino"),(0,r.kt)("h3",{id:"hud"},"/hud"),(0,r.kt)("p",null,"Este comando sirve para ajustar la interfaz;(Salud, Comida, ID, etc)."),(0,r.kt)("h3",{id:"cargar"},"/cargar"),(0,r.kt)("p",null,"Este comando sirve para levantar a un jugador sobre los hombros de tu personajes."),(0,r.kt)("h3",{id:"darllave"},"/darllave"),(0,r.kt)("p",null,"Este comando sirve para dar una llave temporal a un jugador."),(0,r.kt)("h3",{id:"darllavepermanente"},"/darllavepermanente"),(0,r.kt)("p",null,"Este comando sirve para dar una llave permanente a un jugador."),(0,r.kt)("h3",{id:"quitarllave"},"/quitarllave"),(0,r.kt)("p",null,"Quitar llave de tus vehiculos a jugadores."),(0,r.kt)("h3",{id:"id"},"/id"),(0,r.kt)("p",null,"Ver tu n\xfamero de DNI y id de jugador."),(0,r.kt)("h3",{id:"carhud"},"/carhud"),(0,r.kt)("p",null,"Este comando sirve para ajustar la interfaz de la informacion que tu vehiculo muestra en pantalla;(Velocidad, RPM, Gasolina, Cinturon, Estado del motor, Luces)."),(0,r.kt)("h3",{id:"kilometraje"},"/kilometraje"),(0,r.kt)("p",null,"Comprobar el kilometraje de tu vehiculo."),(0,r.kt)("h3",{id:"e"},"/e"),(0,r.kt)("p",null,"Este comando sirve para digitar el nombre nemot\xe9cnico de una animaci\xf3n."),(0,r.kt)("h3",{id:"flashsensitive"},"/flashsensitive"),(0,r.kt)("p",null,"Configurar de manera que cuando te tiren una granada aturdidora salga la pantalla blanco/negro."),(0,r.kt)("h2",{id:"3-bindear-y-desbindear-un-comando-a-una-tecla"},"3. Bindear y Desbindear un comando a una tecla"),(0,r.kt)("p",null,"Lo siguiente es un ejemplo de como lo tienes que aplicar."),(0,r.kt)("h3",{id:"bindeo-de-animaciones"},"Bindeo de animaciones"),(0,r.kt)("p",null,"Para bindear una animaci\xf3n a una tecla presionamos el ",(0,r.kt)("strong",{parentName:"p"},"F8")," y digitamos lo siguiente:"),(0,r.kt)("p",null,'bind keyboard "numpad7" "cargar"'),(0,r.kt)("h3",{id:"bindeo-de-objetos"},"Bindeo de Objetos"),(0,r.kt)("p",null,"Para bindear objetos usamos en comando ",(0,r.kt)("strong",{parentName:"p"},"/e")," junto al ",(0,r.kt)("strong",{parentName:"p"},"nombre nemot\xe9cnico")," del objeto, pero reformulandola para que lo detecte correctamente."),(0,r.kt)("p",null,'bind keyboard "numpad7" "e toolbox"'),(0,r.kt)("h3",{id:"desbindear-comando"},"Desbindear comando"),(0,r.kt)("p",null,"Para desbindear un comando digitamos lo siguiente:"),(0,r.kt)("p",null,'unbind keyboard "numpad7"'),(0,r.kt)("admonition",{title:"Modificaciones en Controles y Comandos",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Es responsabilidad del usuario revisar este apartado periodicamente para informarse de los nuevos cambios.")))}m.isMDXComponent=!0}}]);