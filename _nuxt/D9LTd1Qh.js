var qt=Object.defineProperty;var Zt=(n,e,t)=>e in n?qt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var E=(n,e,t)=>Zt(n,typeof e!="symbol"?e+"":e,t);import{ao as Jt,ap as Ve,aq as Tt,ar as Qt,as as be,at as St,au as H,av as z,aw as L,ax as W,ay as D,az as ei,aA as ti,aB as Et,aC as Te,aD as U,aE as ii,aF as _t,aG as si,aH as Oe,aI as Ye,aJ as ni,aK as ye,aL as ri,aM as Mt,aN as oi,aO as ai,aP as li,aQ as Z,aR as Rt,aS as $e,aT as ci,aU as hi,aV as ui,aW as Ae,aX as di,aY as Lt,aZ as qe,a_ as $,a$ as fi,b0 as Ze,b1 as pi,b2 as J,b3 as mi,b4 as gi,b5 as vi,b6 as xi,b7 as oe,b8 as Fe,b9 as bi,ba as Ct,bb as yi,bc as Ai,bd as wi,be as Ti,bf as It,bg as Si,bh as Se,bi as et,bj as tt,bk as it,bl as st,bm as Ei,bn as _i,bo as Mi,bp as Ri,bq as Li,br as we,bs as _,bt as M,bu as N,bv as Ut,bw as nt,a0 as ce,bx as ae,by as Dt,bz as Ci,bA as Ii,bB as Ie,bC as de,bD as Ui,bE as rt,bF as Di,bG as Oi,bH as Fi,bI as Ee,bJ as Re,bK as Ot,bL as Ft,bM as Bt,bN as kt,bO as Pt,bP as zt,bQ as ne,bR as Nt,bS as Ht,bT as Bi,bU as Ue,bV as ki,bW as Pi,bX as Gt,bY as R,bZ as K,b_ as Je,b$ as zi,c0 as Vt,c1 as Ni,c2 as Q,c3 as ot,c4 as Le,c5 as Hi,c6 as F,c7 as Gi,c8 as Vi,c9 as at,ca as lt,cb as $i,cc as ji,cd as Ki,ce as Xi,cf as Wi,ah as Yi,cg as ct,ch as qi}from"./C-eLz7ZE.js";function ht(n,e){if(e===Jt)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ve||e===Tt){let t=n.getIndex();if(t===null){const o=[],l=n.getAttribute("position");if(l!==void 0){for(let a=0;a<l.count;a++)o.push(a);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Ve)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Zi extends Qt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new is(t)}),this.register(function(t){return new ss(t)}),this.register(function(t){return new ds(t)}),this.register(function(t){return new fs(t)}),this.register(function(t){return new ps(t)}),this.register(function(t){return new rs(t)}),this.register(function(t){return new os(t)}),this.register(function(t){return new as(t)}),this.register(function(t){return new ls(t)}),this.register(function(t){return new ts(t)}),this.register(function(t){return new cs(t)}),this.register(function(t){return new ns(t)}),this.register(function(t){return new us(t)}),this.register(function(t){return new hs(t)}),this.register(function(t){return new Qi(t)}),this.register(function(t){return new ms(t)}),this.register(function(t){return new gs(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=be.extractUrlBase(e);o=be.resolveURL(c,this.path)}else o=be.extractUrlBase(e);this.manager.itemStart(e);const l=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},a=new St(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},l)}catch(u){l(u)}},i,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},l={},a=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===$t){try{o[T.KHR_BINARY_GLTF]=new vs(e)}catch(h){s&&s(h);return}r=JSON.parse(o[T.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cs(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case T.KHR_MATERIALS_UNLIT:o[h]=new es;break;case T.KHR_DRACO_MESH_COMPRESSION:o[h]=new xs(r,this.dracoLoader);break;case T.KHR_TEXTURE_TRANSFORM:o[h]=new bs;break;case T.KHR_MESH_QUANTIZATION:o[h]=new ys;break;default:d.indexOf(h)>=0&&l[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(l),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Ji(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const T={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Qi{constructor(e){this.parser=e,this.name=T.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new L(16777215);a.color!==void 0&&u.setRGB(a.color[0],a.color[1],a.color[2],W);const h=a.range!==void 0?a.range:0;switch(a.type){case"directional":c=new Et(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ti(u),c.distance=h;break;case"spot":c=new ei(u),c.distance=h,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,c.angle=a.spot.outerConeAngle,c.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return c.position.set(0,0,0),q(c,a),a.intensity!==void 0&&(c.intensity=a.intensity),c.name=t.createUniqueName(a.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(a){return i._getNodeRef(t.cache,l,a)})}}class es{constructor(){this.name=T.KHR_MATERIALS_UNLIT}getMaterialType(){return $}extendParams(e,t,i){const s=[];e.color=new L(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],W),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,D))}return Promise.all(s)}}class ts{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class is{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new z(l,l)}return Promise.all(r)}}class ss{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ns{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class rs{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new L(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],W)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,D)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class os{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class as{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return t.attenuationColor=new L().setRGB(l[0],l[1],l[2],W),Promise.all(r)}}class ls{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class cs{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return t.specularColor=new L().setRGB(l[0],l[1],l[2],W),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,D)),Promise.all(r)}}class hs{constructor(e){this.parser=e,this.name=T.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class us{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ds{constructor(e){this.parser=e,this.name=T.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class fs{constructor(e){this.parser=e,this.name=T.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=s.images[o.source];let a=i.textureLoader;if(l.uri){const c=i.options.manager.getHandler(l.uri);c!==null&&(a=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,a);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ps{constructor(e){this.parser=e,this.name=T.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=s.images[o.source];let a=i.textureLoader;if(l.uri){const c=i.options.manager.getHandler(l.uri);c!==null&&(a=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,a);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ms{constructor(e){this.name=T.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const a=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(l,a,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class gs{constructor(e){this.name=T.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==k.TRIANGLES&&c.mode!==k.TRIANGLE_STRIP&&c.mode!==k.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,l=[],a={};for(const c in o)l.push(this.parser.getDependency("accessor",o[c]).then(u=>(a[c]=u,a[c])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const m of h){const b=new Te,x=new U,p=new _t,g=new U(1,1,1),A=new ii(m.geometry,m.material,d);for(let y=0;y<d;y++)a.TRANSLATION&&x.fromBufferAttribute(a.TRANSLATION,y),a.ROTATION&&p.fromBufferAttribute(a.ROTATION,y),a.SCALE&&g.fromBufferAttribute(a.SCALE,y),A.setMatrixAt(y,b.compose(x,p,g));for(const y in a)if(y==="_COLOR_0"){const C=a[y];A.instanceColor=new si(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,a[y]);Oe.prototype.copy.call(A,m),this.parser.assignFinalMaterial(A),f.push(A)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const $t="glTF",ge=12,ut={JSON:1313821514,BIN:5130562};class vs{constructor(e){this.name=T.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ge),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$t)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ge,r=new DataView(e,ge);let o=0;for(;o<s;){const l=r.getUint32(o,!0);o+=4;const a=r.getUint32(o,!0);if(o+=4,a===ut.JSON){const c=new Uint8Array(e,ge+o,l);this.content=i.decode(c)}else if(a===ut.BIN){const c=ge+o;this.body=e.slice(c,c+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class xs{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=T.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},a={},c={};for(const u in o){const h=je[u]||u.toLowerCase();l[h]=o[u]}for(const u in e.attributes){const h=je[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],f=fe[d.componentType];c[h]=f.name,a[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const m in f.attributes){const b=f.attributes[m],x=a[m];x!==void 0&&(b.normalized=x)}h(f)},l,c,W,d)})})}}class bs{constructor(){this.name=T.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ys{constructor(){this.name=T.KHR_MESH_QUANTIZATION}}class jt extends _i{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=l*2,c=l*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,m=e*c,b=m-c,x=-2*f+3*d,p=f-d,g=1-x,A=p-d+h;for(let y=0;y!==l;y++){const C=o[b+y+l],O=o[b+y+a]*u,P=o[m+y+l],me=o[m+y]*u;r[y]=g*C+A*O+x*P+p*me}return r}}const As=new _t;class ws extends jt{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return As.fromArray(r).normalize().toArray(r),r}}const k={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fe={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dt={9728:Rt,9729:Z,9984:li,9985:ai,9986:oi,9987:Mt},ft={33071:hi,33648:ci,10497:$e},Pe={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},je={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},te={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ts={CUBICSPLINE:void 0,LINEAR:It,STEP:Ti},ze={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ss(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),n.DefaultMaterial}function le(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function q(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Es(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],l=[],a=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;l.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;a.push(d)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function _s(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ms(n){let e;const t=n.extensions&&n.extensions[T.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ne(t.attributes):e=n.indices+":"+Ne(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Ne(n.targets[i]);return e}function Ne(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ke(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Rs(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ls=new Te;class Cs{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ji,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const l=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(l)===!0;const a=l.match(/Version\/(\d+)/);s=i&&a?parseInt(a[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Ye(this.options.manager):this.textureLoader=new ni(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new St(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return le(r,l,s),q(l,s),Promise.all(i._invokeAll(function(a){return a.afterRoot&&a.afterRoot(l)})).then(function(){for(const a of l.scenes)a.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let l=0,a=o.length;l<a;l++)e[o[l]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,l)=>{const a=this.associations.get(o);a!=null&&this.associations.set(l,a);for(const[c,u]of o.children.entries())r(u,l.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[T.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(be.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Pe[s.type],l=fe[s.componentType],a=s.normalized===!0,c=new l(s.count*o);return Promise.resolve(new ye(c,o,a))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const l=o[0],a=Pe[s.type],c=fe[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*a,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let b,x;if(f&&f!==h){const p=Math.floor(d/f),g="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let A=t.cache.get(g);A||(b=new c(l,p*f,s.count*f/u),A=new ri(b,f/u),t.cache.add(g,A)),x=new Si(A,a,d%f/u,m)}else l===null?b=new c(s.count*a):b=new c(l,d,s.count*a),x=new ye(b,a,m);if(s.sparse!==void 0){const p=Pe.SCALAR,g=fe[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,C=new g(o[1],A,s.sparse.count*p),O=new c(o[2],y,s.sparse.count*a);l!==null&&(x=new ye(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let P=0,me=C.length;P<me;P++){const ee=C[P];if(x.setX(ee,O[P*a]),a>=2&&x.setY(ee,O[P*a+1]),a>=3&&x.setZ(ee,O[P*a+2]),a>=4&&x.setW(ee,O[P*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let l=this.textureLoader;if(o.uri){const a=i.manager.getHandler(o.uri);a!==null&&(l=a)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],l=r.images[t],a=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[a])return this.textureCache[a];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||l.name||"",u.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(u.name=l.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=dt[d.magFilter]||Z,u.minFilter=dt[d.minFilter]||Mt,u.wrapS=ft[d.wrapS]||$e,u.wrapT=ft[d.wrapT]||$e,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Rt&&u.minFilter!==Z,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[a]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],l=self.URL||self.webkitURL;let a=o.uri||"",c=!1;if(o.bufferView!==void 0)a=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return a=l.createObjectURL(d),a});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(a).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){const x=new Se(b);x.needsUpdate=!0,d(x)}),t.load(be.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return c===!0&&l.revokeObjectURL(a),q(h,o),h.userData.mimeType=o.mimeType||Rs(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[T.KHR_TEXTURE_TRANSFORM]){const l=i.extensions!==void 0?i.extensions[T.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const a=r.associations.get(o);o=r.extensions[T.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,a)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+i.uuid;let a=this.cache.get(l);a||(a=new ui,Ae.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,a.sizeAttenuation=!1,this.cache.add(l,a)),i=a}else if(e.isLine){const l="LineBasicMaterial:"+i.uuid;let a=this.cache.get(l);a||(a=new di,Ae.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,this.cache.add(l,a)),i=a}if(s||r||o){let l="ClonedMaterial:"+i.uuid+":";s&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let a=this.cache.get(l);a||(a=i.clone(),r&&(a.vertexColors=!0),o&&(a.flatShading=!0),s&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(l,a),this.associations.set(a,this.associations.get(i))),i=a}e.material=i}getMaterialType(){return Lt}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const l={},a=r.extensions||{},c=[];if(a[T.KHR_MATERIALS_UNLIT]){const h=s[T.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(l,r,t))}else{const h=r.pbrMetallicRoughness||{};if(l.color=new L(1,1,1),l.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],W),l.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(l,"map",h.baseColorTexture,D)),l.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,l.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(l,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(l,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=qe);const u=r.alphaMode||ze.OPAQUE;if(u===ze.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,u===ze.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==$&&(c.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new z(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;l.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==$&&(c.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==$){const h=r.emissiveFactor;l.emissive=new L().setRGB(h[0],h[1],h[2],W)}return r.emissiveTexture!==void 0&&o!==$&&c.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,D)),Promise.all(c).then(function(){const h=new o(l);return r.name&&(h.name=r.name),q(h,r),t.associations.set(h,{materials:e}),r.extensions&&le(s,h,r),h})}createUniqueName(e){const t=fi.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(l){return i[T.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(a){return pt(a,l,t)})}const o=[];for(let l=0,a=e.length;l<a;l++){const c=e[l],u=Ms(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[T.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=pt(new Ze,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,l=[];for(let a=0,c=o.length;a<c;a++){const u=o[a].material===void 0?Ss(this.cache):this.getDependency("material",o[a].material);l.push(u)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(a){const c=a.slice(0,a.length-1),u=a[a.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const b=u[f],x=o[f];let p;const g=c[f];if(x.mode===k.TRIANGLES||x.mode===k.TRIANGLE_STRIP||x.mode===k.TRIANGLE_FAN||x.mode===void 0)p=r.isSkinnedMesh===!0?new pi(b,g):new J(b,g),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),x.mode===k.TRIANGLE_STRIP?p.geometry=ht(p.geometry,Tt):x.mode===k.TRIANGLE_FAN&&(p.geometry=ht(p.geometry,Ve));else if(x.mode===k.LINES)p=new mi(b,g);else if(x.mode===k.LINE_STRIP)p=new gi(b,g);else if(x.mode===k.LINE_LOOP)p=new vi(b,g);else if(x.mode===k.POINTS)p=new xi(b,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&_s(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),q(p,r),x.extensions&&le(s,p,x),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&le(s,h[0],r),h[0];const d=new oe;r.extensions&&le(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Fe(bi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ct(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),q(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,l=[],a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){l.push(h);const d=new Te;r!==null&&d.fromArray(r.array,c*16),a.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yi(l,a)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],l=[],a=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],m=s.samplers[f.sampler],b=f.target,x=b.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,g=s.parameters!==void 0?s.parameters[m.output]:m.output;b.node!==void 0&&(o.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",p)),a.push(this.getDependency("accessor",g)),c.push(m),u.push(b))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],b=h[3],x=h[4],p=[];for(let g=0,A=d.length;g<A;g++){const y=d[g],C=f[g],O=m[g],P=b[g],me=x[g];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const ee=i._createAnimationTracks(y,C,O,P,me);if(ee)for(let ke=0;ke<ee.length;ke++)p.push(ee[ke])}return new Ai(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let a=0,c=s.weights.length;a<c;a++)l.morphTargetInfluences[a]=s.weights[a]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],l=s.children||[];for(let c=0,u=l.length;c<u;c++)o.push(i.getDependency("node",l[c]));const a=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),a]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ls)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",l=[],a=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return a&&l.push(a),r.camera!==void 0&&l.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){l.push(c)}),this.nodeCache[e]=Promise.all(l).then(function(c){let u;if(r.isBone===!0?u=new wi:c.length>1?u=new oe:c.length===1?u=c[0]:u=new Oe,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),q(u,r),r.extensions&&le(i,u,r),r.matrix!==void 0){const h=new Te;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new oe;i.name&&(r.name=s.createUniqueName(i.name)),q(r,i),i.extensions&&le(t,r,i);const o=i.nodes||[],l=[];for(let a=0,c=o.length;a<c;a++)l.push(s.getDependency("node",o[a]));return Promise.all(l).then(function(a){for(let u=0,h=a.length;u<h;u++)r.add(a[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Ae||d instanceof Se)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],l=e.name?e.name:e.uuid,a=[];te[r.path]===te.weights?e.traverse(function(d){d.morphTargetInfluences&&a.push(d.name?d.name:d.uuid)}):a.push(l);let c;switch(te[r.path]){case te.weights:c=tt;break;case te.rotation:c=it;break;case te.position:case te.scale:c=et;break;default:switch(i.itemSize){case 1:c=tt;break;case 2:case 3:default:c=et;break}break}const u=s.interpolation!==void 0?Ts[s.interpolation]:It,h=this._getArrayFromAccessor(i);for(let d=0,f=a.length;d<f;d++){const m=new c(a[d]+"."+te[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ke(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof it?ws:jt;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Is(n,e,t){const i=e.attributes,s=new Mi;if(i.POSITION!==void 0){const l=t.json.accessors[i.POSITION],a=l.min,c=l.max;if(a!==void 0&&c!==void 0){if(s.set(new U(a[0],a[1],a[2]),new U(c[0],c[1],c[2])),l.normalized){const u=Ke(fe[l.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new U,a=new U;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(a.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),a.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),a.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const b=Ke(fe[d.componentType]);a.multiplyScalar(b)}l.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}n.boundingBox=s;const o=new Ri;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function pt(n,e,t){const i=e.attributes,s=[];function r(o,l){return t.getDependency("accessor",o).then(function(a){n.setAttribute(l,a)})}for(const o in i){const l=je[o]||o.toLowerCase();l in n.attributes||s.push(r(i[o],l))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(l){n.setIndex(l)});s.push(o)}return st.workingColorSpace!==W&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),q(n,e),Is(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Es(n,e.targets,t):n})}class Us{constructor(){this.loaded={},this.textureLoader=new Ye,this.gltfLoader=new Zi}init(){}loadUltraHDR(e){return new Promise(t=>{this.hdrLoader.load(e,function(i){i.mapping=Li,i.needsUpdate=!0,t(i)})})}async loadModel(e){return await this.gltfLoader.loadAsync(e)}async loadTexture(e){if(this.loaded[e])return this.loaded[e];if(e.split(".").pop()==="ktx2")return await this.loadKTX(e);const i=await this.textureLoader.loadAsync(e);return this.loaded[e]=i,i}loadTextureSync(e){if(this.loaded[e])return this.loaded[e];if(e.split(".").pop()==="ktx2")return this.loadKTX(e);const i=this.textureLoader.load(e);return this.loaded[e]=i,i}async loadKTX(e){const t=await this.ktxLoader.loadAsync(e);return this.loaded[e]=t,t}}const Kt=new Us,V=function(e,t,i){return e*(1-i)+t*i},se=function(e,t,i){return e===t?i<=e?0:1:Math.max(0,Math.min(1,(i-e)/(t-e)))};var Xt=we?1:2;const Ds=n=>{Xt=n,console.log(n)};class Os extends Fe{constructor(e,t,i,s){super(e,t,i,s),this.resizeEvent=this.resize.bind(this),_.on(M.RESIZE,this.resizeEvent),this.updateEvent=this.update.bind(this),_.on(M.PRE_UPDATE,this.updateEvent),this.layers.enableAll()}update(){}resize(e,t){this.aspect=e/t,this.updateProjectionMatrix()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class X{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),X.nextNameID=X.nextNameID||0,this.$name.id=`lil-gui-name-${++X.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Fs extends X{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Xe(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Bs={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Xe,toHexString:Xe},_e={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},ks={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=_e.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return _e.toHexString(s)}},Ps={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=_e.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return _e.toHexString(s)}},zs=[Bs,_e,ks,Ps];function Ns(n){return zs.find(e=>e.match(n))}class Hs extends X{constructor(e,t,i,s){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ns(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Xe(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class He extends X{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Gs extends X{constructor(e,t,i,s,r,o){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);const l=o!==void 0;this.step(l?o:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},i=g=>{const A=parseFloat(this.$input.value);isNaN(A)||(this._snapClampSetValue(A+g),this.$input.value=this.getValue())},s=g=>{g.key==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),i(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),i(this._step*this._arrowKeyMultiplier(g)*-1))},r=g=>{this._inputFocused&&(g.preventDefault(),i(this._step*this._normalizeMouseWheel(g)))};let o=!1,l,a,c,u,h;const d=5,f=g=>{l=g.clientX,a=c=g.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",b)},m=g=>{if(o){const A=g.clientX-l,y=g.clientY-a;Math.abs(y)>d?(g.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(A)>d&&b()}if(!o){const A=g.clientY-c;h-=A*this._step*this._arrowKeyMultiplier(g),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=g.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",b)},x=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,g,A,y,C)=>(p-g)/(A-g)*(C-y)+y,t=p=>{const g=this.$slider.getBoundingClientRect();let A=e(p,g.left,g.right,this._min,this._max);this._snapClampSetValue(A)},i=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,l,a;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(l=p.touches[0].clientX,a=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=p=>{if(o){const g=p.touches[0].clientX-l,A=p.touches[0].clientY-a;Math.abs(g)>Math.abs(A)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),m=400;let b;const x=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const A=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+A),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(f,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Vs extends X{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class $s extends X{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var js=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Ks(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let mt=!1,gt=class Wt{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:l=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),a&&this.domElement.classList.add("allow-touch-styles"),!mt&&l&&(Ks(js),mt=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new Vs(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new Gs(this,e,t,i,s,r);case"boolean":return new Fs(this,e,t);case"string":return new $s(this,e,t);case"function":return new He(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new Hs(this,e,t,i)}addFolder(e){const t=new Wt({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof He||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof He)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},B,vt;N?(B=new gt,console.log(B.domElement),B.domElement.style.left="80px",B.__folders={},vt=new gt,B.__folders.GUI2=vt):B="";const xt=new Oe,ve={mouseForce:{x:.75,y:.6},reactiveness:3,distance:we?60:80};class bt extends Os{constructor(t=1,i=1,s=.1,r=2e3,o={x:0,y:20,z:0},l=!1){super(t,i,s,r);E(this,"eventListeners",[]);if(o.z=ve.distance,this.position.copy(o),this.lookAt(new U(0,0,0)),window.cam=this,N){const c=B.addFolder("camera");c.add(ve,"distance",0,500).onChange(u=>{this.position.z=u}),c.close()}this.timeline=Ut.timeline({paused:!0});const a={distance:ve.distance};this.timeline.to(a,{distance:nt,ease:"power3.inOut",duration:1,onUpdate:()=>{this.position.z=a.distance}}),this.timeline.to(a,{distance:nt,ease:"power3.inOut",duration:1,onUpdate:()=>{this.position.z=a.distance}})}transition(t,i){i=="justfade"?this.position.z=V(ve.distance,ve.distance+10,t):this.timeline.progress(t)}reset(){}on(t,i){this.eventListeners.push({eventName:t,cb:i})}emit(t){this.eventListeners.forEach(i=>{i.eventName==t&&i.cb()})}async setState(t,i={}){switch(t){case ce.INTRO:break}}getWorldDirection(){return xt.position.copy(this.currentPosition),xt.getWorldDirection(this.tempVec3),this.tempVec3}activate(){}desactivate(){}}class Xs extends ae{constructor(){super(),N&&(window.scene=this),this.matrixAutoUpdate=!1,this.matrixWorldAutoUpdate=!0,this.backgroundScene=new ae}}const re=new Xs;class Ws{constructor(){E(this,"_viewOffset",0);E(this,"_lastViewOffset",0);var e={x:0,y:Ci,z:Dt};N?this.cameraPool={main:new bt(20,1,.1,500,e)}:this.cameraPool={main:new bt(20,1,.1,500,e)},this.cameraPool.main.lookAt(new U(0,0,0)),this.camera=null,this.current=this.cameraPool.main,this.frustum=new Ii,this.projScreenMatrix=new Te,this.addEvents()}addEvents(){_.on(M.PRE_UPDATE,this.update.bind(this))}set current(e){var t;(t=this._current)!=null&&t.desactive&&(this._current.desactive(),re.remove(this._current)),this._current=e,this._current.activate&&this._current.activate()}update(e){this._lastViewOffset!=this._viewOffset&&(this.current.setViewOffset(Ie.w,Ie.h,this._viewOffset,0,Ie.w,Ie.h),this._lastViewOffset=this._viewOffset)}updateFrustum(e=null){const t=e||this.current;this.projScreenMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreenMatrix)}get current(){return this._current}set viewoffset(e){this._viewOffset=e}get viewoffset(){return this._viewOffset}}const I=new Ws;class Ys{constructor(){this.mouse={value:new z(0,0)},this.timer={value:0},this.cloudTimer={value:0},this.DPI={value:de},this.resY={value:0},this.aspect={value:1},this.resolution={value:new z},this.maxBrowsingCloud={value:1},this.scrollProgress={value:0},this.sceneOpacity={value:1},_.on(M.RESIZE,(e,t)=>{this.aspect.value=e/t,this.DPI.value=de,this.resolution.value.x=e*de,this.resolution.value.y=t*de}),_.on(M.PRE_UPDATE,e=>{this.scrollProgress.value=se(Dt,Ui,I.current.position.z),this.timer.value+=e})}}const qs=new Ys;let w=null;rt!=null&&(w=new Di({canvas:rt,antialias:!0,alpha:!1,stencil:!1}),w.autoClear=!1,w.setPixelRatio(de),w.outputColorSpace=D,w.info.autoReset=!1,w.setClearColor(16777215,1),w.debug.checkShaderErrors=N,w.shadowMap.autoUpdate=!1,w.localClippingEnabled=!1,w.setTransparentSort((n,e)=>{if(n.object._closestDistance!=null&&(n.z=n.object._closestDistance),e.object._closestDistance!=null&&(e.z=e.object._closestDistance),n.groupOrder!==e.groupOrder)return n.groupOrder-e.groupOrder;if(n.renderOrder!==e.renderOrder)return n.renderOrder-e.renderOrder}),w.setOpaqueSort((n,e)=>{var t=n.z,i=e.z;return n.object._closestDistance!=null&&(t=n.object._closestDistance),e.object._closestDistance!=null&&(i=e.object._closestDistance),n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:t!==i?t-i:n.id-e.id}));var Me=new Ze;Me.setIndex([2,1,0]);Me.setAttribute("position",new Oi([-1,-1,0,-1,4,0,4,-1,0],3));var yt=`
#fboh-fbos-list{
	all: unset;
	position: fixed;
	right: 0;
	bottom: 0;
	z-index: 1000000;
	width: 150px;
}
#fboh-fbos-list, #fboh-fbos-list *, #fboh-hotspot, #fboh-label, #fboh-info{
	box-sizing: border-box;
	font-family: 'Roboto Mono', 'courier new', courier, monospace;
	font-size: 11px;
	line-height: 1.4em;
}
#fboh-fbos-list li{
	cursor: pointer;
	color: white;
	width: 100%;
	padding: 4px 0;
	border-top: 1px solid #888;
	border-bottom: 1px solid black;
	background-color: #444;
	text-align: center;
	text-shadow: 0 -1px black;
}
#fboh-fbos-list li:hover{
	background-color: rgba( 158, 253, 56, .5 );
}
#fboh-fbos-list li.active{
	background-color: rgba( 158, 253, 56, .5 );
	color: white;
	text-shadow: 0 1px black;
}
#fboh-hotspot{
	position: absolute;
	left: 0;
	top: 0;
	background-color: rgba( 158, 253, 56,.5);
	pointer-events: none;
}
#fboh-label{
	position: absolute;
	left: 0;
	bottom: 0;
	transform-origin: bottom left;
	pointer-events: none;
}
#fboh-info{
	display: none;
	position: fixed;
    z-index: 1000001;
	left: 160px;
	top: 10px;
	pointer-events: none;
}
.fboh-card{
	display: block;
	white-space: nowrap;
	color: black;
	padding: 10px;
	background-color: white;
	border: 1px solid black;
}
`;let Ce={};Ce[Bi]="THREE.AlphaFormat";Ce[Ue]="THREE.RGBAFormat";Ce[ki]="THREE.LuminanceFormat";Ce[Pi]="THREE.LuminanceAlphaFormat";let G={};G[Re]="THREE.UnsignedByteType";G[Ot]="THREE.ByteType";G[Ft]="THREE.ShortType";G[Bt]="THREE.UnsignedShortType";G[kt]="THREE.IntType";G[Pt]="THREE.UnsignedIntType";G[zt]="THREE.FloatType";G[ne]="THREE.HalfFloatType";G[Nt]="THREE.UnsignedShort4444Type";G[Ht]="THREE.UnsignedShort5551Type";class Zs{constructor(e){this.renderer=e,this.autoUpdate=!1,this.fbos=[],this.list=document.createElement("ul"),this.list.setAttribute("id","fboh-fbos-list"),this.scene=new ae,this.camera=new Ct(-1,1,1,-1,1e-6,1e3),this.raycaster=new Fi,this.mouse=new z,this.grid=document.createElement("div"),this.grid.setAttribute("style","position: fixed; z-index: 10000; left: 50%; top: 50%; border: 1px solid #000000; transform: translate3d(-50%, -50%, 0 ); box-shadow: 0 0 50px black; display: none"),this.grid.setAttribute("id","bfoh-grid"),this.hotspot=document.createElement("div"),this.hotspot.setAttribute("id","fboh-hotspot"),this.label=document.createElement("div"),this.label.setAttribute("id","fboh-label"),this.label.className="fboh-card",this.info=document.createElement("div"),this.info.setAttribute("id","fboh-info"),this.info.className="fboh-card",setTimeout(()=>{document.body.appendChild(this.list),document.body.appendChild(this.grid),this.grid.appendChild(this.hotspot),this.hotspot.appendChild(this.label),document.body.appendChild(this.info)},1e3),this.currentObj=null,this.currentU=0,this.currentV=0,this.fboMap=new Map,this.offsetX=0,this.offsetY=0,this.grid.appendChild(this.hotspot);const t=window.document.head||window.document.getElementsByTagName("head")[0],i=window.document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=yt:i.appendChild(document.createTextNode(yt)),t.appendChild(i);const s=document.createElement("link");s.type="text/css",s.rel="stylesheet",s.href="https://fonts.googleapis.com/css?family=Roboto+Mono",t.appendChild(s),this.grid.addEventListener("wheel",a=>{var c=a.deltaY<0?1:-1;this.camera.zoom+=c/50,this.camera.updateProjectionMatrix(),this.grid.style.transform=`translate3d(-50%, -50%, 0 ) scale(${this.camera.zoom},${this.camera.zoom}) translate3d(${this.offsetX}px,${this.offsetY}px,0) `,this.label.style.transform=`scale(${1/this.camera.zoom},${1/this.camera.zoom})`,this.hotspot.style.transform=`scale(${1/this.camera.zoom},${1/this.camera.zoom})`,this.hotspot.style.borderWidth=`${1/this.camera.zoom}px`,this.readPixel(this.currentObj,this.currentU,this.currentV)});let r=!1,o={x:0,y:0},l={x:0,y:0};this.grid.addEventListener("mousedown",a=>{r=!0,o.x=a.clientX,o.y=a.clientY,l.x=this.offsetX,l.y=this.offsetY}),this.grid.addEventListener("mouseup",a=>{r=!1}),this.grid.addEventListener("mouseout",a=>{this.label.style.display="none",r=!1}),this.grid.addEventListener("mouseover",a=>{this.label.style.display="block"}),this.grid.addEventListener("mousemove",a=>{if(console.log("yolo "),r)this.offsetX=l.x+(a.clientX-o.x)/this.camera.zoom,this.offsetY=l.y+(a.clientY-o.y)/this.camera.zoom,this.camera.position.x=-this.offsetX,this.camera.position.y=this.offsetY,this.grid.style.transform=`translate3d(-50%, -50%, 0 ) scale(${this.camera.zoom},${this.camera.zoom}) translate3d(${this.offsetX}px,${this.offsetY}px,0)`;else{this.mouse.x=a.clientX/e.domElement.clientWidth*2-1,this.mouse.y=-(a.clientY/e.domElement.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const c=this.raycaster.intersectObject(this.currentObj.quad,!0);c.length>0?(this.readPixel(this.fboMap.get(c[0].object),c[0].uv.x,c[0].uv.y),this.label.style.display="block"):this.label.style.display="none"}}),window.addEventListener("keydown",a=>{a.keyCode===27&&this.hide()}),this.grid.addEventListener("keydown",a=>{a.keyCode===27&&this.hide()})}hide(){this.hideAll(),this.info.style.display="none",this.grid.style.display="none",this.currentObj=null}attach(e,t,i){var s=document.createElement("li");s.textContent=t,e.image&&(e.width=e.image.width,e.height=e.image.height);const r=600,o=e.height*r/e.width,l=new $({map:e.texture==null?e:e.texture,side:qe}),a=new J(new Ee(1,1),l);a.visible=!1,a.width=r,a.height=o,a.scale.set(r,o,1),this.scene.add(a);var c={width:r,height:o,name:t,fbo:e,flipY:e.flipY,li:s,visible:!1,quad:a,material:l,formatter:i};this.fbos.push(c),this.fboMap.set(a,c),s.addEventListener("click",u=>{a.visible=!a.visible,a.visible?(this.hideAll(),a.visible=!0,s.classList.add("active"),this.info.style.display="block",this.grid.style.display="block",this.grid.style.width=c.width+2+"px",this.grid.style.height=c.height+2+"px",this.currentObj=c,this.info.innerHTML=`Width: ${e.width} Height: ${e.height}<br/>Format: ${Ce[e.texture?e.texture.format:e.format]} Type: ${G[e.texture?e.texture.type:e.type]}`):(this.info.style.display="none",s.classList.remove("active"),this.grid.style.display="none",this.currentObj=null)}),this.buildList()}detach(e){var t=0;for(var i of this.fbos)i.fbo===e&&this.fbos.splice(t,1),t++;this.buildList()}refreshFBO(e){for(var t of this.fbos)if(t.fbo===e){const s=e.height*600/e.width;t.width=600,t.height=s,t.quad.width=600,t.quad.height=s,t.quad.scale.set(600,s,1)}}hideAll(){this.fbos.forEach(e=>{e.quad.visible=!1,e.li.classList.remove("active")})}buildList(){for(;this.list.firstChild;)this.list.removeChild(this.list.firstChild);for(var e of this.fbos)this.list.appendChild(e.li)}setSize(e,t){this.camera.left=e/-2,this.camera.right=e/2,this.camera.top=t/2,this.camera.bottom=t/-2,this.camera.updateProjectionMatrix()}readPixel(e,t,i){if(this.currentU=t,this.currentV=i,this.currentObj===null)return;const s=e.fbo,r=~~(s.width*t),o=~~(s.height*i);let l={};l[Re]=Uint8Array,l[Ot]=Int8Array,l[Ft]=Int16Array,l[Bt]=Uint16Array,l[kt]=Int32Array,l[Pt]=Uint32Array,l[zt]=Float32Array,l[ne]=Float32Array,l[Nt]=Uint16Array,l[Ht]=Uint16Array;var a=l[s.texture?s.texture.type:s.type];if(a===null){console.log(s.texture?s.texture.type:s.type+" not supported");return}const c=new a(4);if(s.isDataTexture==!0){const m=s.format==1023?4:3,b=s.source.data.width;s.source.data.height;const x=b*o+r;c[0]=s.source.data.data[x*m].toFixed(4),c[1]=s.source.data.data[x*m+1].toFixed(4),c[2]=s.source.data.data[x*m+2].toFixed(4),c[3]=s.source.data.data[x*m+3].toFixed(4)}else this.renderer.readRenderTargetPixels(s,r,o,1,1,c);const u=`X : ${r} Y: ${o}`,h=e.formatter?e.formatter({x:r,y:o,u:t,v:i,r:c[0],g:c[1],b:c[2],a:c[3]}):`R: ${c[0]} G: ${c[1]} B: ${c[2]} A: ${c[3]}`;this.label.innerHTML=`${u}<br/>${h}`;const d=~~(t*s.width)*e.quad.width/s.width,f=~~(e.flipY?(1-i)*s.height:i*s.height)*e.quad.height/s.height;this.hotspot.style.width=`${e.quad.width/s.width}px`,this.hotspot.style.height=`${e.quad.height/s.height}px`,this.hotspot.style.transform=`translate3d(${d}px,${f}px,0)`,this.label.style.bottom=e.quad.height/s.height+"px"}update(){const e=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.render(this.scene,this.camera),this.renderer.autoClear=e,this.autoUpdate&&this.readPixel(this.currentObj,this.currentU,this.currentV)}}var pe=null;if(Gt){var pe=new Zs(w);pe.setSize(window.innerWidth,window.innerHeight),_.on(M.RESIZE,(e,t)=>{pe.setSize(e,t)}),_.on(M.POST_UPDATE,()=>{let e=w.getRenderTarget();pe.update(),w.setRenderTarget(e)})}else pe={attach:()=>{}};const At=pe;/**
 * postprocessing v6.37.3 build Sun Apr 27 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Js=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Ze;return t.setAttribute("position",new ye(n,3)),t.setAttribute("uv",new ye(e,2)),t})(),Be=class We{static get fullscreenGeometry(){return Js}constructor(e="Pass",t=new ae,i=new Ni){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new J(We.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new ae),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Vt){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof K||t instanceof Ae||t instanceof Se||t instanceof We)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Qs=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Yt="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",en=class extends Q{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new R(null),opacity:new R(1)},blending:Le,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Qs,vertexShader:Yt})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},tn={NONE:0},ie=-1,j=class extends Je{constructor(n,e=ie,t=ie,i=1){super(),this.resizable=n,this.baseSize=new z(1,1),this.preferredSize=new z(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new z,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==ie?t.width=e.width:e.height!==ie?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==ie?t.height=e.height:e.width!==ie?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(ie),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return ie}},S={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},sn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",nn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",rn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",on="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",an="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",ln="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",cn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",hn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",un="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",dn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",fn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",pn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",mn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",gn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",vn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",xn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",bn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",yn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",An="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",wn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Tn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",Sn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",En="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",_n="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",Mn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",Rn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",Ln="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Cn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",In="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",Un="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",Dn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",On="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",Fn=new Map([[S.ADD,sn],[S.ALPHA,nn],[S.AVERAGE,rn],[S.COLOR,on],[S.COLOR_BURN,an],[S.COLOR_DODGE,ln],[S.DARKEN,cn],[S.DIFFERENCE,hn],[S.DIVIDE,un],[S.DST,null],[S.EXCLUSION,dn],[S.HARD_LIGHT,fn],[S.HARD_MIX,pn],[S.HUE,mn],[S.INVERT,gn],[S.INVERT_RGB,vn],[S.LIGHTEN,xn],[S.LINEAR_BURN,bn],[S.LINEAR_DODGE,yn],[S.LINEAR_LIGHT,An],[S.LUMINOSITY,wn],[S.MULTIPLY,Tn],[S.NEGATION,Sn],[S.NORMAL,En],[S.OVERLAY,_n],[S.PIN_LIGHT,Mn],[S.REFLECT,Rn],[S.SATURATION,Ln],[S.SCREEN,Cn],[S.SOFT_LIGHT,In],[S.SRC,Un],[S.SUBTRACT,Dn],[S.VIVID_LIGHT,On]]),Bn=class extends Je{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new R(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return Fn.get(this.blendFunction)}},kn=class extends Je{constructor(n,e,{attributes:t=tn.NONE,blendFunction:i=S.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:o=null,vertexShader:l=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=l,this.defines=s,this.uniforms=r,this.extensions=o,this.blendMode=new Bn(i),this.blendMode.addEventListener("change",a=>this.setChanged()),this._inputColorSpace=W,this._outputColorSpace=zi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=Vt){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof K||e instanceof Ae||e instanceof Se||e instanceof Be)&&this[n].dispose()}}},Qe={MEDIUM:2,LARGE:3},Pn=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,zn="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",Nn=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],Hn=class extends Q{constructor(n=new ot){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new R(null),texelSize:new R(new ot),scale:new R(1),kernel:new R(0)},blending:Le,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Pn,vertexShader:zn}),this.setTexelSize(n.x,n.y),this.kernelSize=Qe.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return Nn[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},Gn=class extends Be{constructor({kernelSize:n=Qe.MEDIUM,resolutionScale:e=.5,width:t=j.AUTO_SIZE,height:i=j.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new K(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const o=this.resolution=new j(this,s,r,e);o.addEventListener("change",l=>this.setSize(o.baseWidth,o.baseHeight)),this._blurMaterial=new Hn,this._blurMaterial.kernelSize=n,this.copyMaterial=new en}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,o=this.camera,l=this.renderTargetA,a=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let d=0,f=u.length;d<f;++d){const m=(d&1)===0?l:a;c.kernel=u[d],c.inputBuffer=h.texture,n.setRenderTarget(m),n.render(r,o),h=m}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,o)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Re?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===D&&(this.renderTargetA.texture.colorSpace=D,this.renderTargetB.texture.colorSpace=D))}static get AUTO_SIZE(){return j.AUTO_SIZE}},Vn=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,$n=class extends Q{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Hi.replace(/\D+/g,"")},uniforms:{inputBuffer:new R(null),threshold:new R(0),smoothing:new R(1),range:new R(null)},blending:Le,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Vn,vertexShader:Yt}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},jn=class extends Be{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=j.AUTO_SIZE,height:r=j.AUTO_SIZE,resolutionX:o=s,resolutionY:l=r}={}){super("LuminancePass"),this.fullscreenMaterial=new $n(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new K(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const a=this.resolution=new j(this,o,l,i);a.addEventListener("change",c=>this.setSize(a.baseWidth,a.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==Re&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Kn=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,Xn="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Wn=class extends Q{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new R(null),texelSize:new R(new z)},blending:Le,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Kn,vertexShader:Xn})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Yn=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,qn="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Zn=class extends Q{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new R(null),supportBuffer:new R(null),texelSize:new R(new z),radius:new R(.85)},blending:Le,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Yn,vertexShader:qn})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Jn=class extends Be{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new K(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Wn,this.upsamplingMaterial=new Zn,this.resolution=new z}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:o}=this,{downsamplingMaterial:l,upsamplingMaterial:a}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=l;for(let d=0,f=c.length;d<f;++d){const m=c[d];l.setSize(h.width,h.height),l.inputBuffer=h.texture,n.setRenderTarget(m),n.render(r,o),h=m}this.fullscreenMaterial=a;for(let d=u.length-1;d>=0;--d){const f=u[d];a.setSize(h.width,h.height),a.inputBuffer=h.texture,a.supportBuffer=c[d].texture,n.setRenderTarget(f),n.render(r,o),h=f}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,o=this.downsamplingMipmaps.length;r<o;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==Re)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===D)for(const s of i)s.texture.colorSpace=D}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},Qn=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,er=class extends kn{constructor({blendFunction:n=S.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:i=!1,intensity:s=1,radius:r=.85,levels:o=8,kernelSize:l=Qe.LARGE,resolutionScale:a=.5,width:c=j.AUTO_SIZE,height:u=j.AUTO_SIZE,resolutionX:h=c,resolutionY:d=u}={}){super("BloomEffect",Qn,{blendFunction:n,uniforms:new Map([["map",new R(null)],["intensity",new R(s)]])}),this.renderTarget=new K(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Gn({kernelSize:l}),this.luminancePass=new jn({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new Jn,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=o,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const f=this.resolution=new j(this,h,d,a);f.addEventListener("change",m=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===D&&(this.renderTarget.texture.colorSpace=D))}},tr=/([\s\S]*?\bvoid\b +\bmain\b[\s\S]*?{)([\s\S]*)}/m;let Ge=n=>n!=""?`
`+n+`

`:"",ir=n=>`${Ge(n.prefix)}$1${Ge(n.main)}$2${Ge(n.suffix)}}`;class sr extends H{constructor({samples:e=6,transmissionSampler:t=!1,transmission:i=1,thickness:s=0,roughness:r=0,chromaticAberration:o=.03,anisotropy:l=.1,anisotropicBlur:a=.1,distortion:c=0,distortionScale:u=.5,normalMapForce:h=.5,temporalDistortion:d=0,clearcoat:f=0,attenuationDistance:m=.5,attenuationColor:b=new L("white"),...x}={}){super(x),this.samples=e,this.transmissionSampler=t,this.uniforms={normalMapForce:{value:h},chromaticAberration:{value:o},transmission:{value:0},_transmission:{value:i},transmissionMap:{value:null},thickness:{value:s},roughness:{value:r},thicknessMap:{value:null},attenuationDistance:{value:m},attenuationColor:{value:b},anisotropicBlur:{value:a},normalMorph:{value:1},time:qs.timer,distortion:{value:c},distortionScale:{value:u},temporalDistortion:{value:d},buffer:{value:null}},this.onBeforeCompile=p=>{p.uniforms={...p.uniforms,...this.uniforms},p.defines.GPU_TIER=F.tier.toString(),this.anisotropy>0&&(p.defines.USE_ANISOTROPY=""),t?p.defines.USE_SAMPLER="":p.defines.USE_TRANSMISSION="",p.vertexShader=p.vertexShader.replace(tr,ir({prefix:`
              uniform float time;
              varying vec3 vTransform;
              varying vec2 vUv;
              varying vec3 vPositionW;`,main:`   

              vUv = uv;

              // vec3 spherePosition =  UVToSphere(uv);

              // vec3 position = spherePosition * 0.55;

              // vec3 normal = spherePosition;
            `,suffix:`
              vTransform = transformed;
              vPositionW = ( modelViewMatrix * vec4( transformed, 1.0 ) ).xyz;
            `})),p.fragmentShader=` 
          uniform float normalMapForce;
          varying vec3 vPositionW;
          uniform mat3 normalMatrix;
          varying vec2 vUv;
          varying vec3 vTransform;
          uniform float chromaticAberration;         
          uniform float anisotropicBlur;      
          uniform float time;
          uniform float distortion;
          uniform float distortionScale;
          uniform float temporalDistortion;

        
          uniform sampler2D buffer;

          uniform float normalMorph;
  

       
        vec3 random3(vec3 c) {
          float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
          vec3 r;
          r.z = fract(512.0*j);
          j *= .125;
          r.x = fract(512.0*j);
          j *= .125;
          r.y = fract(512.0*j);
          return r-0.5;
        }
  
        uint hash(uint x) {
          x += (x << 10u);
          x ^= (x >>  6u);
          x += (x <<  3u);
          x ^= (x >> 11u);
          x += (x << 15u);
          return x;
        }
  
        uint hash(uvec2 v) { return hash(v.x ^ hash(v.y)); }
        uint hash(uvec3 v) { return hash(v.x ^ hash(v.y) ^ hash(v.z)); }
        uint hash(uvec4 v) { return hash(v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w)); }
  
        float floatConstruct(uint m) {
          const uint ieeeMantissa = 0x007FFFFFu;
          const uint ieeeOne = 0x3F800000u;
          m &= ieeeMantissa;
          m |= ieeeOne;
          float f = uintBitsToFloat(m);
          return f - 1.0;
        }
  
        float randomBase(float x) { return floatConstruct(hash(floatBitsToUint(x))); }
        float randomBase(vec2 v) { return floatConstruct(hash(floatBitsToUint(v))); }
        float randomBase(vec3 v) { return floatConstruct(hash(floatBitsToUint(v))); }
        float randomBase(vec4 v) { return floatConstruct(hash(floatBitsToUint(v))); }
        
        float rand(float seed) {
          float result = randomBase(vec3(gl_FragCoord.xy, seed));
          return result;
        }
  
        const float F3 = 0.3333333;
        const float G3 = 0.1666667;
  
        float snoise(vec3 p) {
          vec3 s = floor(p + dot(p, vec3(F3)));
          vec3 x = p - s + dot(s, vec3(G3));
          vec3 e = step(vec3(0.0), x - x.yzx);
          vec3 i1 = e*(1.0 - e.zxy);
          vec3 i2 = 1.0 - e.zxy*(1.0 - e);
          vec3 x1 = x - i1 + G3;
          vec3 x2 = x - i2 + 2.0*G3;
          vec3 x3 = x - 1.0 + 3.0*G3;
          vec4 w, d;
          w.x = dot(x, x);
          w.y = dot(x1, x1);
          w.z = dot(x2, x2);
          w.w = dot(x3, x3);
          w = max(0.6 - w, 0.0);
          d.x = dot(random3(s), x);
          d.y = dot(random3(s + i1), x1);
          d.z = dot(random3(s + i2), x2);
          d.w = dot(random3(s + 1.0), x3);
          w *= w;
          w *= w;
          d *= w;
          return dot(d, vec4(52.0));
        }
  
        float snoiseFractal(vec3 m) {
          return 0.5333333 * snoise(m)
               + 0.2666667 * snoise(2.0*m)
               + 0.1333333 * snoise(4.0*m)
               + 0.0666667 * snoise(8.0*m);
        }
`+p.fragmentShader,p.fragmentShader=p.fragmentShader.replace("#include <transmission_pars_fragment>",`
          #ifdef USE_TRANSMISSION
            uniform float _transmission;
            uniform float thickness;
            uniform float attenuationDistance;
            uniform vec3 attenuationColor;
            #ifdef USE_TRANSMISSIONMAP
              uniform sampler2D transmissionMap;
            #endif
            #ifdef USE_THICKNESSMAP
              uniform sampler2D thicknessMap;
            #endif
            uniform vec2 transmissionSamplerSize;
            uniform sampler2D transmissionSamplerMap;
            uniform mat4 modelMatrix;
            uniform mat4 projectionMatrix;
            varying vec3 vWorldPosition;
  
            vec3 getVolumeTransmissionRay( const in vec3 modelScale, const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix) {
              vec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);
              return normalize(refractionVector) * thickness * modelScale;
            }
  
            float applyIorToRoughness(const in float roughness, const in float ior) {
              return roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);
            }
  
            vec4 getTransmissionSample( const in float transmissionSamplerSizeLog,  const in vec2 fragCoord, const in float roughness, const in float ior) {
              float framebufferLod = transmissionSamplerSizeLog * applyIorToRoughness(roughness, ior);
              #ifdef USE_SAMPLER
                #ifdef texture2DLodEXT
                  return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
                #else
                  return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
                #endif
              #else
                return texture2D(buffer, fragCoord.xy);
              #endif
            }
  
            vec3 applyVolumeAttenuation(const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance) {
              return radiance;
            }
  
            vec4 getIBLVolumeRefraction(
              const in float transmissionSamplerSizeLog,
              const in vec3 modelScale,
              const in vec3 n,
              const in vec3 v,
              const in float roughness,
              const in vec3 diffuseColor,
              const in vec3 specularColor,
              const in float specularF90,
              const in vec3 position,
              const in mat4 modelMatrix,
              const in mat4 viewMatrix,
              const in mat4 projMatrix,
              const in float ior,
              const in float thickness,
              const in vec3 attenuationColor,
              const in float attenuationDistance
            ) {
              vec3 transmissionRay = getVolumeTransmissionRay(modelScale, n, v, thickness, ior, modelMatrix);
              vec3 refractedRayExit = position + transmissionRay;
              vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);
              vec2 refractionCoords = ndcPos.xy / ndcPos.w;
              refractionCoords += 1.0;
              refractionCoords *= 0.5;

             
              vec4 transmittedLight = getTransmissionSample(transmissionSamplerSizeLog, refractionCoords, roughness, ior);
              vec3 attenuatedColor = applyVolumeAttenuation(transmittedLight.rgb, length(transmissionRay), attenuationColor, attenuationDistance);
              // Not required ? 
              // vec3 F = EnvironmentBRDF(n, v, specularColor, specularF90, roughness);
              return vec4( attenuatedColor * diffuseColor, transmittedLight.a);
            }
          #endif`),p.fragmentShader=p.fragmentShader.replace("#include <transmission_fragment>",`
          material.transmission = _transmission;
          material.transmissionAlpha = 1.0;
          material.thickness = thickness;
          material.attenuationDistance = attenuationDistance;
          material.attenuationColor = attenuationColor;
          
          #ifdef USE_TRANSMISSIONMAP
            material.transmission *= texture2D(transmissionMap, vUv).r;
          #endif
          #ifdef USE_THICKNESSMAP
            material.thickness *= texture2D(thicknessMap, vUv).g;
          #endif
          
          vec3 pos = vWorldPosition;
          float runningSeed = 0.0;
          vec3 v = normalize(cameraPosition - pos);
          vec3 n = inverseTransformDirection(normal, viewMatrix);
          vec3 transmission = vec3(0.0);
          float transmissionR, transmissionB, transmissionG;
          vec3 fullTransmission = vec3(0.0);
          float randomCoords = rand(runningSeed++);
          float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
          vec3 distortionNormal = vec3(0.0);


          float thick = thickness;
          if ( abs(n.z) < 0.4) {
           thick *= 1.5;
          }

        
          
          if (distortion > 0.0) {

            vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
            distortionNormal = distortion * vec3(
              snoiseFractal(vec3((pos * distortionScale + temporalOffset))),
              snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)),
              snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset))
            );
          }

          float invsamples = 1.0 / float(${e});

          vec3 modelScale;
          modelScale.x = length(vec3(modelMatrix[0].xyz));
          modelScale.y = length(vec3(modelMatrix[1].xyz));
          modelScale.z = length(vec3(modelMatrix[2].xyz));

          float transmissionSamplerSizeLog =  log2(transmissionSamplerSize.x);
       
          for (float i = 0.0; i < ${e}.0; i++) {

            #if GPU_TIER > 1 
              vec3 sampleNorm = normalize(
                n + 
                roughnessFactor * roughnessFactor * 2.0 * 
                normalize(vec3(
                  rand(runningSeed++) - 0.5,
                  rand(runningSeed++) - 0.5,
                  rand(runningSeed++) - 0.5
                )) * 
                pow(rand(runningSeed++), 0.33) +
                distortionNormal
              );

            #else 

               vec3 sampleNorm = normalize( n );

            #endif
            


            float rdmInvSamples = (i + randomCoords) * invsamples;
            

              if( chromaticAberration > 0.0 ) {


                transmissionR = getIBLVolumeRefraction( transmissionSamplerSizeLog, modelScale, 
                  sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
                  pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, thick + thickness_smear * rdmInvSamples,
                  material.attenuationColor, material.attenuationDistance
                ).r;
                
                transmissionG = getIBLVolumeRefraction( transmissionSamplerSizeLog, modelScale,
                  sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
                  pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + chromaticAberration * rdmInvSamples),
                  thick + thickness_smear * rdmInvSamples,
                  material.attenuationColor, material.attenuationDistance
                ).g;
                
                transmissionB = getIBLVolumeRefraction( transmissionSamplerSizeLog, modelScale,
                  sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
                  pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * rdmInvSamples),
                  thick + thickness_smear * rdmInvSamples,
                  material.attenuationColor, material.attenuationDistance
                ).b;
                
                transmission.r += transmissionR;
                transmission.g += transmissionG;
                transmission.b += transmissionB;

            
                }
                else {

                  fullTransmission = getIBLVolumeRefraction( transmissionSamplerSizeLog, modelScale, 
                  sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
                  pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, thick + thickness_smear * rdmInvSamples,
                  material.attenuationColor, material.attenuationDistance
                  ).rgb;

                  transmission += fullTransmission;
                 

                }


          
  
           
          }
          
          transmission *= invsamples;
          totalDiffuse = mix(totalDiffuse, transmission.rgb, material.transmission);`)},Object.keys(this.uniforms).forEach(p=>{Object.defineProperty(this,p,{get:()=>this.uniforms[p].value,set:g=>this.uniforms[p].value=g})})}setTime(e){this.uniforms.time.value=e}}class nr extends Q{constructor(){super({vertexShader:`
        void main() {
          
        }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;
        }
      `})}}new L(0);new L(0);function rr(n,e,t,i,s,r={}){const{resolution:o=1024,backside:l=!0,backsideEnvMapIntensity:a=1}=r;var c=null,u=null,h=null,d=null,f=null,m=F.tier>2;m&&(c=new er({intensity:1,mipmapBlur:!0,resolutionScale:1,luminanceThreshold:.6,luminanceSmoothing:.594,radius:.05}),h=new J(Me,new Q({uniforms:{tInput:{value:null},tInput2:{value:null},intensity:{value:10},bloomColor:{value:new L(16777215)}},vertexShader:`
  
              varying vec2 vUv;
  
              void main() {
  
                vUv = vec2(0.5)+(position.xy)*0.5;
  
                gl_Position = vec4( position.xy, 0.0,  1.0 );
  
              }
          `,fragmentShader:`
          
                varying vec2 vUv; 
  
                uniform sampler2D tInput;
  
                uniform sampler2D tInput2;
  
                uniform float intensity;
  
                uniform vec3 bloomColor;
  
                void main() { 
  
  
                    vec4 base       = min( vec4( 1.0) ,(texture2D(tInput, vUv))) ;
                    
                    vec4 blend      = min( vec4(1.0), texture2D( tInput2, vUv ) * vec4(bloomColor, 1.0) * intensity * 5.0);
  
                    vec4 temp       = (1.0 - ((1.0 - base) * (1.0 - blend)));
  
                    gl_FragColor = temp;
  
                    // #include <colorspace_fragment>
                }
          `,depthTest:!1,depthWrite:!1})),h.frustumCulled=!1,d=new Fe(45,1,.1,1e3),c.initialize({},!1,ne),c.mipmapBlurPass.scene.matrixWorldAutoUpdate=!1,c.luminancePass.scene.matrixWorldAutoUpdate=!1,u=c.luminanceMaterial);const b=t.getPixelRatio(),x=new K(o*b,o*b,{type:ne,format:Ue}),p=new K(o*b,o*b,{type:ne,format:Ue});c&&(f=new K(o*b,o*b,{type:ne,format:Ue}),c.setSize(o*b,o*b)),Gt&&(At.attach(x,"main"),At.attach(p,"back")),new nr;let g,A,y;return function(O={}){y=n,y&&(A=w.toneMapping,g=e.envMapIntensity,w.toneMapping=Gi,y.visible=!1,l&&F.tier>2&&(w.setRenderTarget(p),w.clear(),w.render(i,s),y.material=e,y.material.buffer=p.texture,y.material.thickness=y.material.backsideThickness,y.material.side=Vi,y.material.envMapIntensity=e.envMapIntensity,m&&(c.luminancePass.enabled=!0,u.threshold=O.threshold,u.smoothing=O.smoothing,c.mipmapBlurPass.radius=O.radius,c.update(w,p),h.material.uniforms.intensity.value=O.bloomIntensity,h.material.uniforms.tInput.value=p.texture,h.material.uniforms.tInput2.value=c.getTexture(),w.setRenderTarget(f),w.clear(),w.render(h,d),y.material.buffer=f.texture,y.visible=!0)),w.setRenderTarget(x),w.clear(),w.render(i,s),y.visible=!0,y.material.thickness=y.material.frontsideThickness,y.material.side=0,y.material.buffer=x.texture,y.material.envMapIntensity=g,w.setRenderTarget(null),w.toneMapping=A)}}class xe extends J{constructor({args:e,map:t,toneMapped:i=!1,color:s="white",form:r="rect",intensity:o=1,scale:l=1,target:a,material:c,...u}={}){let h;switch(r){case"circle":h=new at(0,1,64);break;case"ring":h=new at(.5,1,64);break;case"rect":h=new Ee;break;default:typeof r=="function"?h=new r(...e||[]):h=new Ee}const d=c||new $({color:new L(s),toneMapped:i,map:t,side:qe});if(super(h,d),c||this.material.color.multiplyScalar(o),Array.isArray(l)?l.length===2?this.scale.set(l[0],l[1],1):this.scale.set(...l):this.scale.set(l,l,l),a){const f=Array.isArray(a)?new U(...a):a;this.lookAt(f)}Object.entries(u).forEach(([f,m])=>{this[f]!==void 0&&(m&&typeof m=="object"?Object.assign(this[f],m):this[f]=m)})}setColorIntensity(e,t=1){this.material instanceof $&&(this.material.color.set(e),this.material.color.multiplyScalar(t))}setTarget(e){const t=Array.isArray(e)?new U(...e):e;this.lookAt(t)}setScale(e){Array.isArray(e)?e.length===2?this.scale.set(e[0],e[1],1):this.scale.set(...e):this.scale.set(e,e,e)}dispose(){this.geometry.dispose(),this.material.map&&this.material.map.dispose(),this.material.dispose()}}class or{constructor({scene:e=new ae,near:t=1,far:i=1e3,resolution:s=1024,frames:r=1,background:o=!1,backgroundBlurriness:l=0,backgroundIntensity:a=1,backgroundRotation:c=new lt(0,0,0),environmentIntensity:u=1,environmentRotation:h=new lt(0,0,0),ground:d=!1}={}){var f,m;this.scene=e,this.near=t,this.far=i,this.resolution=s,this.frames=r,this.background=o,this.backgroundBlurriness=l,this.backgroundIntensity=a,this.backgroundRotation=c,this.environmentIntensity=u,this.environmentRotation=h,this.ground=d,this.frameCount=1,this.disposed=!1,this.originalProps={background:e.background,environment:e.environment,backgroundBlurriness:e.backgroundBlurriness,backgroundIntensity:e.backgroundIntensity,backgroundRotation:(f=e.backgroundRotation)==null?void 0:f.clone(),environmentIntensity:e.environmentIntensity,environmentRotation:(m=e.environmentRotation)==null?void 0:m.clone()},this.virtualScene=new ae}async loadEnvironmentMap(e){return new Promise(t=>{new Ye().load(e,i=>{this.setEnvironmentMap(i),t(i)})})}async loadEnvironmentCube(e){return new Promise(t=>{new $i().load(e,i=>{this.setEnvironmentMap(i),t(i)})})}setEnvironmentMap(e){this.background!=="only"&&(this.scene.environment=e),this.background&&(this.scene.background=e),this.scene.backgroundBlurriness=this.backgroundBlurriness,this.scene.backgroundIntensity=this.backgroundIntensity,this.scene.backgroundRotation=this.backgroundRotation,this.scene.environmentIntensity=this.environmentIntensity,this.scene.environmentRotation=this.environmentRotation}setupPortal(e){const t=new ji(this.resolution);t.texture.type=ne,this.cubeCamera=new Ki(this.near,this.far,t),typeof e=="function"?e(this.virtualScene):e&&this.virtualScene.add(e),this.virtualScene.add(this.cubeCamera),this.setEnvironmentMap(t.texture)}update(e){this.disposed||this.cubeCamera&&(this.cubeCamera.update(w,this.virtualScene),this.frameCount++)}dispose(){this.disposed=!0,this.background!=="only"&&(this.scene.environment=this.originalProps.environment),this.background&&(this.scene.background=this.originalProps.background),this.scene.backgroundBlurriness=this.originalProps.backgroundBlurriness,this.scene.backgroundIntensity=this.originalProps.backgroundIntensity,this.scene.backgroundRotation=this.originalProps.backgroundRotation,this.scene.environmentIntensity=this.originalProps.environmentIntensity,this.scene.environmentRotation=this.originalProps.environmentRotation,this.groundProjection&&(this.scene.remove(this.groundProjection),this.groundProjection.dispose())}}class ar{constructor(e,t=""){this.includeName=t,this.cb=e,this.boundHandleDrag=this.handleDrag.bind(this),this.boundHandleDrop=this.handleDrop.bind(this),this.boundHandleDragEnter=this.handleDragEnter.bind(this),this.boundHandleDragLeave=this.handleDragLeave.bind(this),this.attach(document.body)}handleDrag(e){e.preventDefault(),e.stopPropagation()}handleDrop(e){e.preventDefault(),e.stopPropagation();const t=e.dataTransfer.files;if(t&&t.length>0){const i=t[0];if(i.name.toLowerCase().includes(this.includeName)==!0){if(this.includeName=="mp4"){const s=URL.createObjectURL(i);this.cb(s,i.name)}if(this.includeName=="png"){const s=new FileReader;s.onload=r=>{const o=new Image;o.onload=()=>{this.cb(o,i.name)},o.src=r.target.result},s.readAsDataURL(i),i.name}}}}handleDragEnter(e){e.preventDefault(),e.stopPropagation()}handleDragLeave(e){e.preventDefault(),e.stopPropagation()}attach(e){e.addEventListener("dragover",this.boundHandleDrag),e.addEventListener("drop",this.boundHandleDrop),e.addEventListener("dragenter",this.boundHandleDragEnter),e.addEventListener("dragleave",this.boundHandleDragLeave)}detach(e){e.removeEventListener("dragover",this.boundHandleDrag),e.removeEventListener("drop",this.boundHandleDrop),e.removeEventListener("dragenter",this.boundHandleDragEnter),e.removeEventListener("dragleave",this.boundHandleDragLeave)}}const Y={scale:8.7565,staticPosition:{x:0,y:0,z:-50}};class lr extends Oe{constructor(e){super()}preload(e){if(this.video=e.video,this.image=e.image,this.ratio=1,this.video!=null?(this.videoTexture=new Xi(this.video),this.videoTexture.minFilter=Z,this.videoTexture.magFilter=Z,this.videoTexture.colorSpace=D,this.videoTexture.needsUpdate=!0,this.videoTexture.generateMipmaps=!1,this.video.addEventListener("loadeddata",()=>{this.ratio=this.video.videoWidth/this.video.videoHeight,this.setScale(Y.scale)},!1)):(this.videoTexture=new Se(this.image),this.videoTexture.minFilter=Z,this.videoTexture.magFilter=Z,this.videoTexture.colorSpace=D,this.videoTexture.needsUpdate=!0,this.ratio=this.image.width/this.image.height),this.mesh=new J(new Ee(1,1),new $({map:this.videoTexture,transparent:!0,depthTest:!1,depthWrite:!1,side:0})),this.mesh.renderOrder=-1e3,this.mesh.position.z=-20,this.mesh.scale.set(Y.scale*this.ratio,Y.scale,Y.scale),this.add(this.mesh),N){const t=B.addFolder("video");t.add(Y,"scale",.1,20).onChange(s=>{this.mesh.scale.set(s,s,s)}),t.close();let i={export:()=>{console.log(Y);const s="video.json",r=document.createElement("a");r.href=URL.createObjectURL(new Blob([JSON.stringify(Y,null,2)],{type:"json"})),r.download=s,r.click()}};t.add(i,"export").name("export"),new ar(async(s,r)=>{this.video.src=s,this.video.play()},"mp4")}}setScale(e){this.mesh.scale.set(Y.scale*e*this.ratio,Y.scale*e,1)}transition(e){this.mesh.material.opacity=e}getVideoTexture(){return this.videoTexture}}class cr extends J{constructor(){const e=new Ee(5,5),t=new $({color:16711680,transparent:!0,side:0});super(e,t),this.rotation.x=1.3707963267948964,this.position.y=Wi,this.scale.set(1.75,1.75,1.75)}async preload(){const e=await Kt.loadTexture("gl/floor2.png");this.material.map=e,this.material.map.needsUpdate=!0}}function hr(n){const e=n<.5?2*n:2*(1-n),t=e*e*e;return n<.5?t/2:1-t/2}const v={roughness:.02,metalness:.3,ior:1.046,chromaticAberration:.02,frontsideThickness:.64,backsideThickness:0,distortion:0,distortionScale:0,temporalDistortion:0,attenuationDistance:50,attenuationColor:16777215,envMapIntensity:.1,anisotropy:1,anisotropicBlur:0,clearcoat:0,clearcoatRoughness:0,scale:6.017,threshold:.68,smoothing:1,radius:0,bloomIntensity:0,rotationX:-.204185307179586,rotationY:-.204185307179586,lightX:-10,lightY:10,lightZ:-10,lightIntensity:10,forceMouseX:.6,forceMouseY:.6,mouseSmoothFactor:1,mobileMouseSmoothFactor:1};class ur extends oe{constructor(){super();E(this,"timer",0);E(this,"transitionValue",0);E(this,"transitionValue2",0);E(this,"easedTransitionValue2",0);E(this,"sinEasedTransitionValue2",0);E(this,"fasterTransitionValue",0);E(this,"transitionType","none");E(this,"fasterTransitionValue3",0);E(this,"smoothedMouse",{x:0,y:0});E(this,"canMouseSmooth",!1);E(this,"canMouseSmoothFactor",0);E(this,"isFirst",!0);E(this,"mouse",{x:0,y:0});this.scale.set(2,2,2),this.floor=new cr,this.add(this.floor);const t=new Et(16777215,Math.PI);F.tier>2&&(t.position.set(0,0,10),this.add(t)),F.tier>1&&(this.lightFormerScene=this.createLightFormers(),this.env=new or,this.env.setupPortal(this.lightFormerScene),this.env.update(),re.environment=this.env.scene.environment),this.directional=t,we!=!0&&(v.mouseSmoothFactor=v.mobileMouseSmoothFactor),this.video=new lr,this.add(this.video),this.addEvents()}preload(t){var i=[];return i.push(this.loadModel()),i.push(this.floor.preload()),i.push(this.video.preload(t)),Promise.all(i).then(()=>{this.add(this.model.scene)})}async loadModel(){this.model=await Kt.loadModel("/gl/shield-v1.glb");var t=we?8:6,i=2048;F.tier==2&&(t=5,i=1024),F.tier==1&&(t=4,i=768);const s=new sr({samples:t,resolution:i,transmission:1,roughness:0,metalness:0,clearcoat:v.clearcoat,clearcoatRoughness:v.clearcoatRoughness,thickness:1,backsideThickness:1,ior:1.5,chromaticAberration:v.chromaticAberration,anisotropy:v.anisotropy,anisotropicBlur:v.anisotropicBlur,distortion:v.distortion,distortionScale:v.distortionScale,temporalDistortion:v.temporalDistortion,attenuationDistance:v.attenuationDistance,attenuationColor:new L(v.attenuationColor),color:new L(16777215),transparent:!1,envMapIntensity:v.envMapIntensity,normalMapForce:0,side:0,transparent:!0,fog:!1});if(this.blob=null,this.model.scene.traverse(r=>{r.material&&(this.blob=r,this.blob.scale.set(v.scale,v.scale,v.scale))}),this.blob.material=s,this.blob.material.side=2,this.blob.material.roughness=v.roughness,this.blob.material.metalness=v.metalness,re.environmentIntensity=v.envMapIntensity,this.blob.material.frontsideThickness=v.frontsideThickness,this.blob.material.backsideThickness=v.backsideThickness,this.renderTransmission=rr(this.blob,this.blob.material,w,re,I.current,{}),N){this.folder=B.addFolder("transmission"),this.folder.add(v,"roughness",0,1).step(.001).onChange(a=>{s.roughness=a}),this.folder.add(v,"metalness",0,1).step(.001).onChange(a=>{s.metalness=a}),this.folder.add(v,"ior",0,3).step(.001).onChange(a=>{s.ior=a}),this.folder.add(v,"chromaticAberration",0,1).step(.001).onChange(a=>{s.uniforms.chromaticAberration.value=a}),this.folder.add(v,"frontsideThickness",0,3).step(.001).onChange(a=>{s.frontsideThickness=a}),this.folder.add(v,"backsideThickness",0,3).step(.001).onChange(a=>{s.backsideThickness=a}),this.folder.add(v,"distortion",0,1).step(.001).onChange(a=>{s.distortion=a}),this.folder.add(v,"distortionScale",0,1).step(.001).onChange(a=>{s.distortionScale=a}),this.folder.add(v,"temporalDistortion",0,1).step(.001).onChange(a=>{s.temporalDistortion=a}),this.folder.add(v,"envMapIntensity",0,1).step(.001).onChange(a=>{re.environmentIntensity=a}),this.folder.add(v,"anisotropicBlur",0,1).step(.001).onChange(a=>{s.anisotropicBlur=a}),this.folder.add(v,"clearcoat",0,1).step(.001).onChange(a=>{s.clearcoat=a}),this.folder.add(v,"clearcoatRoughness",0,1).step(.001).onChange(a=>{s.clearcoatRoughness=a}),this.folder.add(v,"threshold",0,1).step(.001).name("bloom threshold"),this.folder.add(v,"smoothing",0,1).step(.001).name("bloom smoothing"),this.folder.add(v,"radius",0,1).step(.001).name("bloom radius"),this.folder.add(v,"bloomIntensity",0,5).step(.001).name("bloom intensity"),this.folder.add(v,"lightX",-10,10).step(.001).onChange(a=>{this.directional.position.x=a}),this.folder.add(v,"lightY",-10,10).step(.001).onChange(a=>{this.directional.position.y=a}),this.folder.add(v,"lightZ",-10,10).step(.001).onChange(a=>{this.directional.position.z=a}),this.folder.add(v,"lightIntensity",0,10).step(.001).onChange(a=>{this.directional.intensity=a});const r=B.addFolder("mouse");r.add(v,"forceMouseX",0,1).step(.001),r.add(v,"forceMouseY",0,1).step(.001),r.add(v,"mouseSmoothFactor",.95,1).step(1e-4),r.close();let o={export:()=>{console.log(v);const a="transmission.json",c=document.createElement("a");c.href=URL.createObjectURL(new Blob([JSON.stringify(v,null,2)],{type:"json"})),c.download=a,c.click()}};this.folder.add(o,"export").name("export");const l=B.addFolder("blob");l.add(v,"scale",1,10).step(.001).onChange(a=>{this.blob.scale.set(a,a,a)}),l.add(v,"rotationX",-Math.PI*2,Math.PI*2).step(.001),l.add(v,"rotationY",-Math.PI*2,Math.PI*2).step(.001),this.folder.close(),l.close()}}transition(t,i,s,r){this.transitionType=r,this.transitionValue=t,this.transitionValue2=i,this.transitionValue3=s,this.fasterTransitionValue=se(0,.5,t),this.easedTransitionValue2=hr(this.transitionValue2),this.fasterTransitionValue3=se(0,.25,this.transitionValue3),this.sinEasedTransitionValue2=Math.sin(Math.PI*this.easedTransitionValue2)}setState(t){t==ce.INTRO&&(this.canMouseSmooth=!1,this.canMouseSmoothFactor=0,this.smoothedMouse={x:0,y:0},this.timer=0,this.transitionValue=0,this.transitionValue2=0,this.easedTransitionValue2=0,this.sinEasedTransitionValue2=0,this.fasterTransitionValue=0)}stateDone(t){t==ce.INTRO&&(this.canMouseSmooth=!0)}update(t){if(this.transitionValue>=1&&this.isFirst==!1){this.blob.visible=!1,this.floor.visible=!1;return}this.isFirst=!1,this.blob.visible=!0;const i=Math.min(t,.3),s=v.mouseSmoothFactor*(1-i),r=1-s;this.canMouseSmoothFactor+=this.canMouseSmooth?i*1:-i*1,this.canMouseSmoothFactor=Math.min(this.canMouseSmoothFactor,1),this.canMouseSmoothFactor=Math.max(this.canMouseSmoothFactor,0),this.transitionType!="fade"&&this.transitionType!="justfade"?this.video.transition(this.transitionValue):(this.blob.material.opacity=V(1,0,this.transitionValue),this.blob.material.roughness=V(v.roughness,.1,this.sinEasedTransitionValue2)),this.timer+=i,this.video.quaternion.copy(I.current.quaternion),this.mouse.x*=this.canMouseSmoothFactor,this.mouse.y*=this.canMouseSmoothFactor,this.smoothedMouse.x=this.smoothedMouse.x*s+this.mouse.x*r,this.smoothedMouse.y=this.smoothedMouse.y*s+this.mouse.y*r;const o=(this.transitionType=="none"?1:1-this.transitionValue)*this.canMouseSmoothFactor,l=.035*o;this.transitionType=="justfade"?(this.blob.rotation.y=(1-this.fasterTransitionValue)*v.rotationY-Math.PI+this.smoothedMouse.x*v.forceMouseY*o+Math.sin(this.timer)*l,this.blob.rotation.y+=this.fasterTransitionValue*v.rotationY,this.blob.rotation.x=(1-this.fasterTransitionValue)*v.rotationX+this.smoothedMouse.y*v.forceMouseX*o+Math.sin(this.timer+45)*l,this.blob.rotation.x+=this.fasterTransitionValue*v.rotationX):(this.blob.rotation.y=(1-this.transitionValue3)*v.rotationY+V(-Math.PI,-Math.PI*3,this.transitionValue3)+this.smoothedMouse.x*v.forceMouseY*o+Math.sin(this.timer)*l,this.blob.rotation.x=(1-this.transitionValue3)*v.rotationX+this.smoothedMouse.y*v.forceMouseX*o+Math.sin(this.timer+45)*l),this.blob.material.ior=V(v.ior,1.156,this.transitionValue),this.blob.material.distortion=V(v.distortion,0,this.fasterTransitionValue)*se(50,70,I.current.position.z),(we!=!0||F.tier<=2)&&(this.blob.material.distortion=0),this.blob.material.chromaticAberration=V(v.chromaticAberration,v.chromaticAberration*.1,this.transitionValue),F.tier<=2&&(this.blob.material.chromaticAberration*=se(50,70,I.current.position.z)),F.tier<=1&&(this.blob.material.chromaticAberration=0);const a=V(1.68,1,se(50,70,I.current.position.z));this.video.setScale(a),this.video.visible=!0,this.floor.rotation.z=this.blob.rotation.y,this.floor.material.opacity=V(.4,0,this.transitionValue),this.transitionType=="justfade"&&(this.floor.material.opacity=V(.4,0,this.transitionValue)),this.floor.visible=!1,_.emit(M.TRANSMISSION,!0),this.directional.intensity=this.transitionValue,this.renderTransmission(v),_.emit(M.TRANSMISSION,!1),this.video.visible=!1,this.floor.visible=!0}onMouseMove(t){this.mouse=t.normalized}addEvents(){_.on(M.PRE_UPDATE,this.update.bind(this)),_.on(M.MOUSE_MOVE,this.onMouseMove.bind(this))}createLightFormers(){const t=new oe,i=new xe({intensity:4,scale:[10,10,1],position:new U(0,5,-9)});i.rotation.x=Math.PI/2,t.add(i),[2,0,2,0,2,0,2,0].forEach((a,c)=>{const u=new xe({form:"circle",intensity:4,scale:[4,1,1],position:new U(a,4,c*4)});u.rotation.x=Math.PI/2,t.add(u)});const r=new xe({intensity:2,scale:[50,2,1],position:new U(-5,1,-1)});r.rotation.y=Math.PI/2,t.add(r);const o=new xe({intensity:2,scale:[50,2,1],position:new U(-5,-1,-1)});o.rotation.y=Math.PI/2,t.add(o);const l=new xe({intensity:2,scale:[50,2,1],position:new U(10,1,0)});return l.rotation.y=-Math.PI/2,t.add(l),t}}const he={colorA:1387334,colorB:461588};class dr extends oe{constructor(){super();E(this,"ratio",1);if(this.target=new K(1,1,{minFilter:Z,magFilter:Z,type:ne}),this.target.generateMipmaps=!1,this.offlineMesh=new J(Me,new Q({vertexShader:`

                    varying vec2 vUv;

                    uniform float ratio;

                    float when_fgt(float x, float y) {

                        return max(sign(x - y), 0.0);
                    }

                    vec2 correctRatio(vec2 inUv, float baseratio, float asp){

                        return mix(
                            vec2(
                                inUv.x, 
                                inUv.y * baseratio / asp + .5 * ( 1. - baseratio / asp )
                            ),
                            vec2(
                                inUv.x * asp / baseratio + .5 * ( 1. - asp / baseratio),
                                inUv.y
                            )
                            ,when_fgt(baseratio, asp)
                        );
                    }


                    void main() {

                        vec2 p = position.xy;

                        p.x = -p.x;

                        vUv = p.xy * 0.5 + 0.5;

                        vUv = correctRatio(vUv, 1.0, ratio);

                        

                        gl_Position = vec4( position.xy, 0.0,  1.0 );
                    }
                `,fragmentShader:`

                    vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

                    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
                    float cnoise(vec2 P){
                        vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
                        vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
                        Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
                        vec4 ix = Pi.xzxz;
                        vec4 iy = Pi.yyww;
                        vec4 fx = Pf.xzxz;
                        vec4 fy = Pf.yyww;
                        vec4 i = permute(permute(ix) + iy);
                        vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
                        vec4 gy = abs(gx) - 0.5;
                        vec4 tx = floor(gx + 0.5);
                        gx = gx - tx;
                        vec2 g00 = vec2(gx.x,gy.x);
                        vec2 g10 = vec2(gx.y,gy.y);
                        vec2 g01 = vec2(gx.z,gy.z);
                        vec2 g11 = vec2(gx.w,gy.w);
                        vec4 norm = 1.79284291400159 - 0.85373472095314 * 
                            vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
                        g00 *= norm.x;
                        g01 *= norm.y;
                        g10 *= norm.z;
                        g11 *= norm.w;
                        float n00 = dot(g00, vec2(fx.x, fy.x));
                        float n10 = dot(g10, vec2(fx.y, fy.y));
                        float n01 = dot(g01, vec2(fx.z, fy.z));
                        float n11 = dot(g11, vec2(fx.w, fy.w));
                        vec2 fade_xy = fade(Pf.xy);
                        vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
                        float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
                        return 2.3 * n_xy;
                    }

                    #define DITHERING
                    #include <common>
                    #include <dithering_pars_fragment>

                    uniform vec3 colorA;
                    uniform vec3 colorB;
                    varying vec2 vUv;

                    void main() {

                        float colorMix =  min( 1.0, max( 0.0, (vUv.y - 0.2) + vUv.x * 0.75 ))   ;

                        float nn = cnoise( vUv * 2.0 );

                        colorMix = max( mix( colorMix, nn, vUv.x  ), colorMix );

                        vec3 color = mix( colorA, colorB,  colorMix);
                        gl_FragColor = vec4(color, 1.0);

                        #include <dithering_fragment>
                    }
                `,uniforms:{colorA:{value:new L(he.colorA)},colorB:{value:new L(he.colorB)},ratio:{value:1}},depthTest:!1,depthWrite:!1,transparent:!0})),this.offlineScene=new ae,this.offlineScene.add(this.offlineMesh),this.offlineMesh.frustumCulled=!1,this.offlineCamera=new Fe(45,1,.1,1e3),this.onlineMesh=new J(Me,new Q({vertexShader:`

                    varying vec2 vUv;

                    void main() {

                        vUv = position.xy * 0.5 + 0.5;

                        gl_Position = vec4( position.xy, 0.0,  1.0 );
                    }
                `,fragmentShader:`
                
                    uniform sampler2D tMap;
                    varying vec2 vUv;

                    void main() {
                        vec4 color = texture2D( tMap, vUv );
                        gl_FragColor = linearToOutputTexel(color);

                    }
                `,uniforms:{tMap:{value:this.target.texture}},depthTest:!1,depthWrite:!1})),this.add(this.onlineMesh),this.onlineMesh.frustumCulled=!1,this.onlineMesh.renderOrder=-30,this.name="background",this.addEvents(),console.log(this),window.bg=this,N){const t=B.addFolder("Background");t.addColor(he,"colorA").name("colorA").onChange(s=>{this.offlineMesh.material.uniforms.colorA.value.set(s),this.update()}),t.addColor(he,"colorB").name("colorB").onChange(s=>{this.offlineMesh.material.uniforms.colorB.value.set(s),this.update()});let i={export:()=>{console.log(he);const s="background.json",r=document.createElement("a");r.href=URL.createObjectURL(new Blob([JSON.stringify(he,null,2)],{type:"json"})),r.download=s,r.click()}};t.add(i,"export").name("export"),t.close()}}preload(){}update(){console.log("update background");const t=w.getRenderTarget();w.setRenderTarget(this.target),w.clear(),w.render(this.offlineScene,this.offlineCamera),w.setRenderTarget(t)}onResize(t,i){console.log("sieze background",t,i),this.ratio=t/i,this.offlineMesh.material.uniforms.ratio.value=this.ratio,this.target.setSize(t,i),this.update()}addEvents(){_.on(M.RESIZE,this.onResize.bind(this))}}class fr extends oe{constructor(){super(),this.glass=new ur,this.add(this.glass),this.background=new dr,this.add(this.background),this.addEvents()}setState(e,t){this.glass.setState(e,t)}transition(e,t,i,s){this.glass.transition(e,t,i,s)}preload(e){var t=[];return t.push(this.glass.preload(e)),Promise.all(t)}update(e){}stateDone(e){this.glass.stateDone(e)}toggleVisbility(e){}killTweens(){}transmission(e){}addEvents(){_.on(M.TRANSMISSION,this.transmission.bind(this)),_.on(M.PRE_UPDATE,this.update.bind(this))}}class pr extends oe{constructor(){super(),this.currentMode=-1,this.scene==null&&(this.scene=new fr,this.add(this.scene))}async preload(e){await this.scene.preload(e)}async setState(e,t){return this.scene.setState(e,t)}transition(e,t,i,s){this.scene.transition(e,t,i,s)}stateDone(e,t){return this.scene.stateDone(e,t)}}var De={exports:{}},mr=De.exports,wt;function gr(){return wt||(wt=1,function(n,e){(function(t,i){n.exports=i()})(mr,function(){var t=function(){function i(f){return o.appendChild(f.dom),f}function s(f){for(var m=0;m<o.children.length;m++)o.children[m].style.display=m===f?"block":"none";r=f}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),s(++r%o.children.length)},!1);var l=(performance||Date).now(),a=l,c=0,u=i(new t.Panel("FPS","#0ff","#002")),h=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=i(new t.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:o,addPanel:i,showPanel:s,begin:function(){l=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(h.update(f-l,200),f>a+1e3&&(u.update(1e3*c/(f-a),100),a=f,c=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return f},update:function(){l=this.end()},domElement:o,setMode:s}};return t.Panel=function(i,s,r){var o=1/0,l=0,a=Math.round,c=a(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,f=2*c,m=3*c,b=15*c,x=74*c,p=30*c,g=document.createElement("canvas");g.width=u,g.height=h,g.style.cssText="width:80px;height:48px";var A=g.getContext("2d");return A.font="bold "+9*c+"px Helvetica,Arial,sans-serif",A.textBaseline="top",A.fillStyle=r,A.fillRect(0,0,u,h),A.fillStyle=s,A.fillText(i,d,f),A.fillRect(m,b,x,p),A.fillStyle=r,A.globalAlpha=.9,A.fillRect(m,b,x,p),{dom:g,update:function(y,C){o=Math.min(o,y),l=Math.max(l,y),A.fillStyle=r,A.globalAlpha=1,A.fillRect(0,0,u,b),A.fillStyle=s,A.fillText(a(y)+" "+i+" ("+a(o)+"-"+a(l)+")",d,f),A.drawImage(g,m+c,b,x-c,p,m,b,x-c,p),A.fillRect(m+x-c,b,c,p),A.fillStyle=r,A.globalAlpha=.9,A.fillRect(m+x-c,b,c,a((1-y/C)*p))}}},t})}(De)),De.exports}var vr=gr();const xr=Yi(vr);function ue(n){return n<.5?8*n*n*n*n:1-Math.pow(-2*n+2,4)/2}class Ar{constructor(){E(this,"easedTransitionValue",0);E(this,"nonEasedTransitionValue",0);E(this,"lastType","fade");E(this,"preloadedPercent",0);console.log(w),this.transitionned=!1,N&&(this.folder=B.__folders.GUI2.addFolder("States"),this.stats=new xr,this.stats.showPanel(0),document.body.appendChild(this.stats.dom),this.debugOptions={currentState:ct,transition:()=>{this.transitionned!=!0&&(this.transition(1),this.transitionned=!0)},transitionwithfade:()=>{this.transitionned!=!0&&(this.transition(1,"fade"),this.transitionned=!0)},transitionwithnoscale:()=>{this.transitionned!=!0&&(this.transition(1,"justfade"),this.transitionned=!0)},reset:()=>{this.transitionned==!0&&(this.transition(0,this.lastType),this.transitionned=!1)},intro:()=>{this.transitionned=!0,this.easedTransitionValue=1,this.nonEasedTransitionValue=1,this.root.transition(1,"fade"),I.current.transition(1),this.setState(ce.INTRO)}},this.guiopts={gputier:"-1",name:"null",fps:"0",dpi:""+de},this.folder.add(this.debugOptions,"transitionwithnoscale").name("Spin and fade out"),this.folder.add(this.debugOptions,"reset"),this.folder.add(this.debugOptions,"intro").name("Intro"),this.folder.add(this.guiopts,"gputier").name("GPU TIER").listen(),this.folder.add(this.guiopts,"name").name("name").listen(),this.folder.add(this.guiopts,"fps").name("tier fps").listen(),this.folder.add(this.guiopts,"dpi").name("dpi").listen())}transition(e=1,t="none"){return new Promise((i,s)=>{this.lastType=t,this.tween&&(this.tween.kill(),this.tween=null);const r=this.lastType=="justfade"?.5:1;this.tween=Ut.to(this,{easedTransitionValue:e,duration:4*r,ease:"none",onUpdate:()=>{this.lastType=="justfade"?(this.root.transition(ue(this.easedTransitionValue),this.easedTransitionValue,ue(this.easedTransitionValue),t),I.current.transition(this.easedTransitionValue,t)):(this.root.transition(ue(se(.5,1,this.easedTransitionValue)),this.easedTransitionValue,ue(se(0,.5,this.easedTransitionValue)),t),I.current.transition(this.easedTransitionValue))},onComplete:()=>{i()}})})}async preload(e){return new Promise(async(t,i)=>{N&&(this.guiopts.gputier=""+F.tier,this.guiopts.name=F.gpu,this.guiopts.fps=F.fps);var s=[];Promise.all(s).then(async r=>{this.root=new pr,await this.root.preload(e),this.transitionned=!0,this.easedTransitionValue=1,this.nonEasedTransitionValue=1,this.root.transition(1,"fade"),I.current.transition(1),t()})})}async start(){re.add(this.root),this.addEvents()}async setState(e,t){var i=[];switch(e){case ce.VOID:case ce.IDLE:i.push(this.root.setState(e,t)),i.push(I.current.setState(e,t));break;case ce.INTRO:i.push(this.root.setState(e,t)),i.push(this.transition(0,"fade").then(()=>{this.transitionned=!1}));break}return Promise.all(i).then(async s=>(await this.stateDone(e,t),this.debugState&&(this.debugOptions.currentState=e),qi(e),s.flat()))}stateDone(e,t,i){return new Promise(s=>{var r=[];r.push(this.root.stateDone(e,t)),Promise.all(r).then(()=>{s(r)})})}set scroll(e){this.easedTransitionValue=e,this.nonEasedTransitionValue=e,this.root.transition(ue(this.easedTransitionValue),this.easedTransitionValue,ue(this.easedTransitionValue),"justfade")}get scroll(){return this.easedTransitionValue}set viewoffset(e){I.viewoffset=e}get viewoffset(){return I.viewoffset}set zoomMoveFactor(e){Ds(e)}get zoomMoveFactor(){return Xt}getHotSpots(){return this.root.getHotSpots()}dawnupdate(){}update(e){this.stats&&this.stats.begin(),_.emit(M.PRE_RENDER,re,I.current),w.clear(),w.render(re,I.current),this.stats&&this.stats.end()}postupdate(){}duskupdate(){}addEvents(){this.postUpdateEvent=this.postupdate.bind(this),_.on(M.POST_UPDATE,this.postUpdateEvent),this.updateEvent=this.update.bind(this),_.on(M.UPDATE,this.updateEvent),this.dawnUpdateEvent=this.dawnupdate.bind(this),_.on(M.DAWN_UPDATE,this.dawnUpdateEvent),this.duskUpdateEvent=this.duskupdate.bind(this),_.on(M.DUSK_UPDATE,this.duskUpdateEvent),this.resizeEvent=this.resize.bind(this),_.on(M.RESIZE,this.resizeEvent),N&&_.on(M.RELOAD,this.reload.bind(this))}reload(){this.setState(ct,{reload:!0})}resize(e,t){w.setSize(e,t)}get percent(){return this.preloadedPercent}}export{Ar as default};
