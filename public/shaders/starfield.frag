precision mediump float;

varying float vAlpha;
varying vec3  vColor;

void main() {

  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(uv, uv);
  if (r2 > 1.0) discard;

  float core = pow(1.0 - r2, 3.4);
  vec3 color = pow(vColor, vec3(1.2));
  gl_FragColor = vec4(color, core * vAlpha);
}
