import{readFileSync as tt,renameSync as ss,writeFileSync as st}from"fs";import{dirname as t}from"path";import{fileURLToPath as l}from"url";import{AbsPath as S,CopyDir as es}from"@yangzw/bruce-us/dist/node.js";import me from"voca";import{JudgeFile as V}from"../utils/index.js";const{camelCase:ce,titleCase:ae}=me;export default function rr({frame:e="js",name:s="unknown",style:o="scss",template:r="component",useTs:m=!1}={}){const c=t(l(import.meta.url)),n=`src/${r}s/${s}`;if(es({dist:n,src:`../assets/mate/${e}${m?"-ts":""}`,srcDir:c}),"react"===e){const e=V(n),t=tt(e,"utf8").replace(/scss/g,o).replace(/demo/g,s).replace(/Demo/g,ae(ce(s))).replace(/component/g,r).replace(/Component/g,ae(r)),m=S(`${n}/index.scss`),c=S(`${n}/index.${o}`),a=tt(m,"utf8").replace(/demo/g,s).replace(/component/g,r);st(e,t,"utf8"),st(m,a,"utf8"),ss(m,c)}}