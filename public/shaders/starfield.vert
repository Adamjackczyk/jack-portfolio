attribute float aScale;
attribute vec3  aColor;
attribute float aPhase;   // NEW

uniform float uTime;

varying float vAlpha;
varying vec3  vColor;

void main() {
  vec3 p = position;
  float dist = length(p);

  vColor = aColor;

  float ang = uTime * 0.04 + dist * 0.6;
  float s = sin(ang), c = cos(ang);
  p.xz = mat2(c, -s, s, c) * p.xz;

  float fade = 1.0 - smoothstep(4.0, 12.0, dist);
  float twinkle = 0.5 + 0.2 * (0.5 + 0.9 * sin(uTime * 4.2 + aPhase));
  vAlpha = fade * twinkle;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float size = (aScale * 1.1) * (170.0 / max(1.0, -mv.z));
  gl_PointSize = min(size, 5.0);

  gl_Position = projectionMatrix * mv;
}