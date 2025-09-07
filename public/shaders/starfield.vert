// starfield.vert
// Vertex shader for additive point stars.
// Three injects: position, modelViewMatrix, projectionMatrix.

attribute float aScale;   // per-point random scale
attribute vec3 aColor;    // per-point color
uniform float uTime;      // time from TS for subtle spin
varying float vAlpha;     // opacity to fragment
varying vec3 vColor;      // color to fragment

void main() {
  vec3 p = position;
  float dist = length(p);

  // Subtle spin around Z
  float ang = uTime * 0.08 + dist * 0.6;
  float s = sin(ang), c = cos(ang);
  p.xz = mat2(c, -s, s, c) * p.xz;

  // 1 near camera, fades to 0 by ~14 units
  vAlpha = 1.0 - smoothstep(10.0, 14.0, dist);

  // Perspective-correct point size (good cross-GPU behavior)
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float size = (aScale * 0.8) * (220.0 / max(1.0, -mv.z));
  gl_PointSize = size;

  vColor = aColor;
  gl_Position = projectionMatrix * mv;
}
