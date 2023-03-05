import { ShaderChunk } from 'three';

export const fragmentShader = `
	#define USE_FOG;
	${ShaderChunk.fog_pars_fragment}
	varying vec3 vColor;
	varying vec2 vUv;
	uniform vec2 uFade;

	void main () {
		vec3 color = vec3(vColor);
		float fadeStart = 0.4;
		float maxFade = 0.;
		float alpha = 1.;

		alpha = smoothstep(uFade.x, uFade.y, vUv.x);
		gl_FragColor = vec4(color, alpha);
		if (gl_FragColor.a < 0.0001) discard;
		${ShaderChunk.fog_fragment}
	}
`;

export const vertexShader = `
	#define USE_FOG;
  ${ShaderChunk.fog_pars_vertex}
	attribute vec3 aOffset;
	attribute vec2 aMetrics;
	attribute vec3 aColor;

	uniform float uTime;
	uniform float uSpeed;
	uniform float uTravelLength;

	varying vec2 vUv;
	varying vec3 vColor;

	#include

	void main () {
		vec3 transformed = position.xyz;

		float radius = aMetrics.r;
		float length = aMetrics.g;

		// 1. Set radius and length
		transformed.xy *= radius;
		transformed.z *= length;

		// 2. Place them
		float zOffset = uTime * uSpeed + aOffset.z;
		zOffset = length - mod(zOffset, uTravelLength);
		transformed.z += zOffset;
		transformed.xy += aOffset.xy;

		float progress = abs(transformed.z / uTravelLength);
		transformed.xyz += getDistortion(progress);

		vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
		gl_Position = projectionMatrix * mvPosition;
		vUv = uv;
		vColor = aColor;
    ${ShaderChunk.fog_vertex}
	}
`;
