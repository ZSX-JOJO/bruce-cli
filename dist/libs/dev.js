var g=this&&this.__awaiter||function(e,o,n,s){return new(n||(n=Promise))((function(t,i){function r(e){try{u(s.next(e))}catch(e){i(e)}}function c(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var o;e.done?t(e.value):(o=e.value,o instanceof n?o:new n((function(e){e(o)}))).then(r,c)}u((s=s.apply(e,o||[])).next())}))};import{exit as o}from"process";import{CheckPath as _e}from"@yangzw/bruce-us/dist/node.js";import{CreateVite as W,ParseConfig as V}from"../configs/index.js";import{DevAnswer as lt}from"../helpers/index.js";import{DEV_TEXT as ET}from"../langs/index.js";import{JudgeFile as H,ShowTitle as so}from"../utils/index.js";export default function v(e){return g(this,void 0,void 0,(function*(){so("dev");const n=H("","configFile"),s=H("src"),{useTs:t}=yield V();n||(console.log(ET.judgeBrucerc),o(1)),_e("node_modules")||(console.log(ET.judgeModules),o(1)),_e("package.json")||(console.log(ET.judgePackage),o(1)),t&&!_e("tsconfig.json")&&(console.log(ET.judgeTsconfig),o(1)),s||(console.log(ET.judgeIndexes),o(1));const{encrypt:i,lintcss:r,lintjs:c,open:u,port:l}=e,a=i||r||c||u||l?{port:0===l?9999:l,useCsslint:r,useHttps:i,useJslint:c,useOpener:u}:yield lt();yield W(a)}))}