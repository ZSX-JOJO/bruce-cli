var x=this&&this.__awaiter||function(o,n,t,e){return new(t||(t=Promise))((function(r,i){function s(o){try{a(e.next(o))}catch(o){i(o)}}function c(o){try{a(e.throw(o))}catch(o){i(o)}}function a(o){var n;o.done?r(o.value):(n=o.value,n instanceof t?n:new t((function(o){o(n)}))).then(s,c)}a((e=e.apply(o,n||[])).next())}))};import{exit as s}from"node:process";import{RemoveDir as eo,WaitFor as We}from"@yangzw/bruce-us/dist/node.js";import no from"ora";import{RemoveAnswer as mr}from"../helpers/index.js";import{REMOVE_TEXT as so}from"../langs/index.js";import{ShowTitle as io}from"../utils/index.js";export default function b(){return x(this,void 0,void 0,(function*(){io("remove");const{caches:o}=yield mr(),n=no(so.doing).start();o.forEach((o=>eo(o))),yield We(2e3),n.stop(),console.log(so.done),s(1)}))}