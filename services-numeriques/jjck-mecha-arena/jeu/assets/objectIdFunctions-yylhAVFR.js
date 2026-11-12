import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./shaderStore-D-XQlhUT.js";var n=e({objectIdFunctions:()=>a}),r=`objectIdFunctions`,i=`highp vec4 encodeObjectId(highp float objectId) {
#ifdef PREPASS_OBJECT_ID_R8
return vec4(objectId/255.0,0.0,0.0,1.0);
#else
highp float id=floor(objectId);highp vec3 encodedId=vec3(
floor(mod(id,16777216.0)/65536.0),
floor(mod(id,65536.0)/256.0),
mod(id,256.0)
)/255.0;return vec4(encodedId,step(0.5,id));
#endif
}
`;t.IncludesShadersStore[r]||(t.IncludesShadersStore[r]=i);var a={name:r,shader:i};export{n,a as t};