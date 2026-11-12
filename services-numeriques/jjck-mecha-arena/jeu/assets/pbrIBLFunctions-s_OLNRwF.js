import{t as e}from"./shaderStore-D-XQlhUT.js";var t=`pbrFragmentReflectionDeclaration`,n=`#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_cube<f32>;
#endif
#ifdef USEIRRADIANCEMAP
var irradianceSamplerSampler: sampler;var irradianceSampler: texture_cube<f32>;
#endif
#else
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_2d<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_2d<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_2d<f32>;
#endif
#ifdef USEIRRADIANCEMAP
var irradianceSamplerSampler: sampler;var irradianceSampler: texture_2d<f32>;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#endif
`;e.IncludesShadersStoreWGSL[t]||(e.IncludesShadersStoreWGSL[t]=n);var r={name:t,shader:n},i=`pbrIBLFunctions`,a=`#if defined(REFLECTION) || defined(SS_REFRACTION)
fn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTexels);return lod;}
fn getLinearLodFromRoughness(cubeMapDimensionPixels: f32,roughness: f32)->f32 {var lod: f32=log2(cubeMapDimensionPixels)*roughness;return lod;}
#endif
#if defined(ENVIRONMENTBRDF) && defined(RADIANCEOCCLUSION)
fn environmentRadianceOcclusion(ambientOcclusion: f32,NdotVUnclamped: f32)->f32 {var temp: f32=NdotVUnclamped+ambientOcclusion;return saturate(temp*temp-1.0+ambientOcclusion);}
#endif
#if defined(BENTNORMAL) && defined(REFLECTION)
fn bentNormalSGOverlap(axisDistanceSquared: f32,spread: f32,reflectionSpread: f32)->f32 {let distanceSquared: f32=clamp(axisDistanceSquared,0.0,4.0);let spreadProduct: f32=spread*reflectionSpread;let spreadDifference: f32=spread-reflectionSpread;let productLength: f32=sqrt(spreadDifference*spreadDifference+spreadProduct*(4.0-distanceSquared));let exponent: f32=-distanceSquared/max(productLength+spread+reflectionSpread,1e-30);let x: f32=2.0*productLength/max(spreadProduct,1e-30);var overlap: f32=spread*(1.0-exp(-x))/max(productLength,1e-30);if (x<0.01) {overlap=2.0*spread/max(spreadProduct,1e-30)*(1.0-x*(0.5-x/6.0));}
return exp(exponent)*overlap;}
fn bentNormalSGOcclusion(bentDistanceSquared: f32,normalDistanceSquared: f32,NdotV: f32,ambientOcclusion: f32,alphaG: f32)->f32 {let visibility: f32=saturate(ambientOcclusion);let coneCos: f32=sqrt(1.0-visibility);let visibilitySpread: f32=visibility/(1.0+coneCos);let reflectionSpread: f32=2.0*alphaG*alphaG*saturate(NdotV);let visible: f32=bentNormalSGOverlap(bentDistanceSquared,visibilitySpread,reflectionSpread);let hemisphere: f32=bentNormalSGOverlap(normalDistanceSquared,1.0,reflectionSpread);return min(1.0,visible/hemisphere);}
fn environmentBentNormalOcclusion(bentNormal: vec3f,reflectionDirection: vec3f,normal: vec3f,NdotV: f32,ambientOcclusion: f32,alphaG: f32)->f32 {let visibility: f32=saturate(ambientOcclusion);if (visibility==0.0 || visibility==1.0) {return visibility;}
let coneSin: f32=sqrt(visibility);let cosBentNormal: f32=dot(bentNormal,normal);var axis: vec3f=bentNormal;if (cosBentNormal<coneSin) {let tangent: vec3f=bentNormal-cosBentNormal*normal;let tangentLength: f32=length(tangent);axis=normal;if (tangentLength>1e-6) {axis=coneSin*normal+sqrt(1.0-visibility)*tangent/tangentLength;}}
let bentDelta: vec3f=axis-reflectionDirection;let normalDelta: vec3f=normal-reflectionDirection;return bentNormalSGOcclusion(dot(bentDelta,bentDelta),dot(normalDelta,normalDelta),NdotV,visibility,alphaG);}
#endif
#if defined(ENVIRONMENTBRDF) && defined(HORIZONOCCLUSION)
fn environmentHorizonOcclusion(view: vec3f,normal: vec3f,geometricNormal: vec3f)->f32 {var reflection: vec3f=reflect(view,normal);var temp: f32=saturate(1.0+1.1*dot(reflection,geometricNormal));return temp*temp;}
#endif
#if defined(LODINREFLECTIONALPHA) || defined(SS_LODINREFRACTIONALPHA)
fn UNPACK_LOD(x: f32)->f32 {return (1.0-x)*255.0;}
fn getLodFromAlphaGNdotV(cubeMapDimensionPixels: f32,alphaG: f32,NdotV: f32)->f32 {var microsurfaceAverageSlope: f32=alphaG;microsurfaceAverageSlope*=sqrt(abs(NdotV));return getLodFromAlphaG(cubeMapDimensionPixels,microsurfaceAverageSlope);}
#endif
`;e.IncludesShadersStoreWGSL[i]||(e.IncludesShadersStoreWGSL[i]=a);var o={name:i,shader:a};export{r as n,o as t};