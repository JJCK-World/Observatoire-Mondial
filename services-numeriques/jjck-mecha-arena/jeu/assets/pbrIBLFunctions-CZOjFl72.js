import{t as e}from"./shaderStore-D-XQlhUT.js";var t=`pbrFragmentReflectionDeclaration`,n=`#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform samplerCube irradianceSampler;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D reflectionSamplerLow;uniform sampler2D reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform sampler2D irradianceSampler;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=n);var r={name:t,shader:n},i=`pbrIBLFunctions`,a=`#if defined(REFLECTION) || defined(SS_REFRACTION)
float getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels);return lod;}
float getLinearLodFromRoughness(float cubeMapDimensionPixels,float roughness) {float lod=log2(cubeMapDimensionPixels)*roughness;return lod;}
#endif
#if defined(ENVIRONMENTBRDF) && defined(RADIANCEOCCLUSION)
float environmentRadianceOcclusion(float ambientOcclusion,float NdotVUnclamped) {float temp=NdotVUnclamped+ambientOcclusion;return saturate(square(temp)-1.0+ambientOcclusion);}
#endif
#if defined(BENTNORMAL) && defined(REFLECTION)
#ifdef GL_FRAGMENT_PRECISION_HIGH
highp float bentNormalSGOverlap(highp float axisDistanceSquared,highp float spread,highp float reflectionSpread) {highp float distanceSquared=clamp(axisDistanceSquared,0.0,4.0);highp float spreadProduct=spread*reflectionSpread;highp float spreadDifference=spread-reflectionSpread;highp float productLength=sqrt(spreadDifference*spreadDifference+spreadProduct*(4.0-distanceSquared));highp float exponent=-distanceSquared/max(productLength+spread+reflectionSpread,1e-30);highp float x=2.0*productLength/max(spreadProduct,1e-30);highp float overlap=spread*(1.0-exp(-x))/max(productLength,1e-30);if (x<0.01) {overlap=2.0*spread/max(spreadProduct,1e-30)*(1.0-x*(0.5-x/6.0));}
return exp(exponent)*overlap;}
highp float bentNormalSGOcclusion(highp float bentDistanceSquared,highp float normalDistanceSquared,highp float NdotV,highp float ambientOcclusion,highp float alphaG) {highp float visibility=saturate(ambientOcclusion);highp float coneCos=sqrt(1.0-visibility);highp float visibilitySpread=visibility/(1.0+coneCos);highp float reflectionSpread=2.0*alphaG*alphaG*saturate(NdotV);highp float visible=bentNormalSGOverlap(bentDistanceSquared,visibilitySpread,reflectionSpread);highp float hemisphere=bentNormalSGOverlap(normalDistanceSquared,1.0,reflectionSpread);return min(1.0,visible/hemisphere);}
highp float environmentBentNormalOcclusion(highp vec3 bentNormal,highp vec3 reflectionDirection,highp vec3 normal,highp float NdotV,highp float ambientOcclusion,highp float alphaG) {highp float visibility=saturate(ambientOcclusion);if (visibility==0.0 || visibility==1.0) {return visibility;}
highp float coneSin=sqrt(visibility);highp float cosBentNormal=dot(bentNormal,normal);highp vec3 axis=bentNormal;if (cosBentNormal<coneSin) {highp vec3 tangent=bentNormal-cosBentNormal*normal;highp float tangentLength=length(tangent);axis=normal;if (tangentLength>1e-6) {axis=coneSin*normal+sqrt(1.0-visibility)*tangent/tangentLength;}}
highp vec3 bentDelta=axis-reflectionDirection;highp vec3 normalDelta=normal-reflectionDirection;return bentNormalSGOcclusion(dot(bentDelta,bentDelta),dot(normalDelta,normalDelta),NdotV,visibility,alphaG);}
#else
float environmentBentNormalOcclusion(vec3 bentNormal,vec3 reflectionDirection,vec3 normal,float NdotV,float ambientOcclusion,float alphaG) {return saturate(ambientOcclusion);}
#endif
#endif
#if defined(ENVIRONMENTBRDF) && defined(HORIZONOCCLUSION)
float environmentHorizonOcclusion(vec3 view,vec3 normal,vec3 geometricNormal) {vec3 reflection=reflect(view,normal);float temp=saturate(1.0+1.1*dot(reflection,geometricNormal));return square(temp);}
#endif
#if defined(LODINREFLECTIONALPHA) || defined(SS_LODINREFRACTIONALPHA)
#define UNPACK_LOD(x) (1.0-x)*255.0
float getLodFromAlphaG(float cubeMapDimensionPixels,float alphaG,float NdotV) {float microsurfaceAverageSlope=alphaG;microsurfaceAverageSlope*=sqrt(abs(NdotV));return getLodFromAlphaG(cubeMapDimensionPixels,microsurfaceAverageSlope);}
#endif
`;e.IncludesShadersStore[i]||(e.IncludesShadersStore[i]=a);var o={name:i,shader:a};export{r as n,o as t};