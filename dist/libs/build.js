var g=this&&this.__awaiter||function(e,o,s,n){return new(s||(s=Promise))((function(i,l){function t(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var o;e.done?i(e.value):(o=e.value,o instanceof s?o:new s((function(e){e(o)}))).then(t,r)}d((n=n.apply(e,o||[])).next())}))};import{exit as o}from"process";import{CheckPath as _e,ReadJson as l,RemoveDir as eo}from"@yangzw/bruce-us/dist/node.js";import oo from"ora";import{CreateWebpack as le,ParseConfig as V}from"../configs/index.js";import{BuildAnswer as Te}from"../helpers/index.js";import{BUILD_TEXT as TT}from"../langs/index.js";import{JudgeFile as H,ShowTitle as so}from"../utils/index.js";export default function c(e){var s;return g(this,void 0,void 0,(function*(){so("build");const n=H("","configFile"),i=H("src"),{buildError:t,buildSuccess:r,useTs:d}=yield V();n||(console.log(TT.judgeBrucerc),o(1)),_e("node_modules")||(console.log(TT.judgeModules),o(1)),_e("package.json")||(console.log(TT.judgePackage),o(1)),d&&!_e("tsconfig.json")&&(console.log(TT.judgeTsconfig),o(1)),i||(console.log(TT.judgeIndexes),o(1));const{analyze:a,compress:u,lintcss:c,lintjs:m,mode:f,named:g,polyfill:p,timed:j}=e,y=a||u||c||m||f||g||p||j?{mode:""===f?"prod":f,polyfill:""===p?"es6":p,useAnalyzer:a,useCompressor:u,useCsslint:c,useHash:g,useJslint:m,useTimer:j}:yield Te(),h=oo(TT.doing).start(),{mode:v,useAnalyzer:x,useTimer:w}=y,{name:T="unknown",version:k="1.0.0"}=null!==(s=l("package.json"))&&void 0!==s?s:{};!w&&eo(`dist/${v}`),h.stop();const{dist:b,flag:C}=yield le(y);C?(console.log(TT.done(T,k,v)),yield null==r?void 0:r({dist:b,mode:v})):(console.log(TT.undone),yield null==t?void 0:t({dist:b,mode:v})),!x&&o(1)}))}