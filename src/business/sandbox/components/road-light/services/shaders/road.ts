export const fragmentShader = `
  uniform vec3 uColor;
  void main () {
    gl_FragColor = vec4(uColor, 1.);
  }
`;

export const vertexShader = `
  uniform float uTravelLength;
  #include

  void main () {
    vec3 transformed = position.xyz;

    // Normalize progress to a range of 0 to 1
    float progress = (transformed.y + uTravelLength / 2.) / uTravelLength;
    vec3 distortion = getDistortion(progress);
    transformed.x += distortion.x;
    transformed.z += distortion.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed.xyz, 1.);
  }
`;
