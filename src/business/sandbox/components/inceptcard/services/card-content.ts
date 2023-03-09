import * as THREE from 'three';

export const scene = new THREE.Scene();
const boxGeo = new THREE.BoxGeometry(2, 2, 2);
const boxMat = new THREE.MeshStandardMaterial({ color: 0xff00ff });
const light = new THREE.AmbientLight(0xffffff, 0.2);
export const box = new THREE.Mesh(boxGeo, boxMat);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(box);
scene.add(light);
scene.add(pointLight);
export const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 500);
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);
