import{t as e}from"./shaderStore-D-XQlhUT.js";import{t}from"./clipPlaneFragmentDeclaration-ByWuc2u-.js";import{t as n}from"./logDepthDeclaration-FIwYr9tC.js";import{t as r}from"./fogFragmentDeclaration-RaGxQRv_.js";import{t as i}from"./objectIdFunctions-DbOLxRrm.js";import{n as a,t as o}from"./meshBlendTagFragmentOutput-BRH6s5gV.js";import{t as s}from"./packingFunctions-zMCp-5EJ.js";import{t as c}from"./logDepthFragment-CxtJswLx.js";import{t as l}from"./fogFragment-C9E3EVJj.js";import{r as u}from"./index-DPVGjELF.js";import{t as d}from"./clipPlaneFragment-CIXWtyW3.js";import{t as f}from"./geometryRenderingFragment-po9sGJ7r.js";var p=`gaussianSplattingPixelShader`,m=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define PREPASS_CUSTOM_VARYINGS
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#ifdef GPUPICKER_PACK_DEPTH
#include<packingFunctions>
#endif
varying vColor: vec4f;varying vPosition: vec2f;
#ifdef PREPASS
uniform geometryZeroAlphaDiscard: f32;
#ifdef PREPASS_POSITION
varying vGeometryPositionW: vec3f;
#endif
#ifdef PREPASS_LOCAL_POSITION
varying vGeometryPositionL: vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vGeometryViewDepth: f32;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
varying vGeometryNormalizedViewDepth: f32;
#endif
#ifdef PREPASS_NORMAL
varying vGeometryNormalV: vec3f;
#endif
#ifdef PREPASS_WORLD_NORMAL
varying vGeometryNormalW: vec3f;
#endif
#if defined(PREPASS_ALBEDO) || defined(PREPASS_ALBEDO_SQRT)
varying vGeometryAlbedo: vec3f;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
varying vGeometryCurrentPosition: vec4f;varying vGeometryPreviousPosition: vec4f;
#endif
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<gaussianSplattingFragmentDeclaration>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var finalColor: vec4f=gaussianColor(input.vColor,input.vPosition);
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
if (finalColor.a<=0.0 && uniforms.geometryZeroAlphaDiscard>0.0) {discard;}
let geometryColor=finalColor;
#if defined(PREPASS_ALBEDO) || defined(PREPASS_ALBEDO_SQRT)
let geometryAlbedo=input.vGeometryAlbedo;
#endif
#ifdef PREPASS_POSITION
let geometryPositionW=input.vGeometryPositionW;
#endif
#ifdef PREPASS_LOCAL_POSITION
let geometryPositionL=input.vGeometryPositionL;
#endif
#ifdef PREPASS_DEPTH
let geometryViewDepth=input.vGeometryViewDepth;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
let geometryNormalizedViewDepth=input.vGeometryNormalizedViewDepth;
#endif
#ifdef PREPASS_NORMAL
let geometryNormalV=input.vGeometryNormalV;
#endif
#ifdef PREPASS_WORLD_NORMAL
let geometryNormalW=input.vGeometryNormalW;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
let geometryCurrentPosition=input.vGeometryCurrentPosition;let geometryPreviousPosition=input.vGeometryPreviousPosition;
#endif
#include<geometryRenderingFragment>
#elif defined(GPUPICKER_DEPTH)
fragmentOutputs.fragData0=finalColor;
#ifdef GPUPICKER_PACK_DEPTH
fragmentOutputs.fragData1=pack(fragmentInputs.position.z);
#else
fragmentOutputs.fragData1=vec4f(fragmentInputs.position.z,0.0,0.0,1.0);
#endif
#else
fragmentOutputs.color=finalColor;
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;e.ShadersStoreWGSL[p]||(e.ShadersStoreWGSL[p]=m);var h=[t,n,r,i,a,s,c,l,u,d,o,f];for(let t of h)e.IncludesShadersStoreWGSL[t.name]||(e.IncludesShadersStoreWGSL[t.name]=t.shader);var g={name:p,shader:m};export{g as gaussianSplattingPixelShaderWGSL};