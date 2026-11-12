import{t as e}from"./shaderStore-D-XQlhUT.js";import{t}from"./helperFunctions-CPZVryR8.js";var n=`lod3DPixelShader`,r=`#ifndef USE_EXACT_SRGB_CONVERSIONS
#define USE_EXACT_SRGB_CONVERSIONS
#endif
#include<helperFunctions>
varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32; 
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textureCoordinates=vec3i(vec2i(fragmentInputs.vUV*vec2f(textureSize.xy)),i32(uniforms.slice));fragmentOutputs.color=textureLoad(textureSampler,textureCoordinates,i32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);} else if (uniforms.gamma==2) {fragmentOutputs.color=vec4f(toGammaSpaceExact(fragmentOutputs.color.rgb),fragmentOutputs.color.a);}}
`;e.ShadersStoreWGSL[n]||(e.ShadersStoreWGSL[n]=r);var i=[t];for(let t of i)e.IncludesShadersStoreWGSL[t.name]||(e.IncludesShadersStoreWGSL[t.name]=t.shader);var a={name:n,shader:r};export{a as lod3DPixelShaderWGSL};