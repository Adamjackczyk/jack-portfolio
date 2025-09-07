// starfield.frag
// Round, soft stars with additive blending.

precision mediump float;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(uv, uv);
  if (r2 > 1.0) discard;

  float core = pow(1.0 - r2, 1.95);  // brighter center
  gl_FragColor = vec4(.6, .1, 1.0, core * vAlpha * 15.0);
}
