import{MAP_TEXT as ve,QUESTION_TEXT as Ee}from"../langs/index.js";import{DEPENDENCE as Te}from"../utils/index.js";const Oe={choices:["dist","node_modules","package-lock.json","yarn.lock"],message:Ee.cache,name:"cache",type:"checkbox"},lt=(e="js")=>({choices:Te[e],message:Ee.deps,name:"deps",type:"checkbox"}),Et=(e=!1)=>({choices:e?Object.entries(ve.ext).filter((e=>"js"!==e[0])).map((e=>({name:e[1],value:e[0]}))):Object.entries(ve.ext).filter((e=>"ts"!==e[0])).map((e=>({name:e[1],value:e[0]}))),default:0,message:Ee.ext,name:"ext",type:"list"}),dt={choices:[{name:"JavaScript",value:"js"},{name:"React",value:"react"}],default:0,message:Ee.frame,name:"frame",type:"list"},jt={choices:[{name:"简体中文",value:"zh-chs"},{name:"繁體中文",value:"zh-cht"}],default:0,message:Ee.lang,name:"lang",type:"list"},st={choices:Object.entries(ve.mode).map((e=>({name:e[1],value:e[0]}))).slice(1),default:0,message:Ee.mode,name:"mode",type:"list"},ct={choices:Object.entries(ve.polyfill).map((e=>({name:e[1],value:e[0]}))),default:0,message:Ee.polyfill,name:"polyfill",type:"list"},ht={choices:[{name:"Scss",value:"scss"},{name:"Less",value:"less"}],default:0,message:Ee.style,name:"style",type:"list"},xt={choices:Object.entries(ve.template).map((e=>({name:e[1],value:e[0]}))),default:0,message:Ee.template,name:"template",type:"list"};export{Oe as CACHE,Te as DEPENDENCE,lt as DEPS,Et as EXT,dt as FRAME,jt as LANG,st as MODE,ct as POLYFILL,ht as STYLE,xt as TEMPLATE};