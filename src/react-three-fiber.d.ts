import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

declare module '@react-three/fiber' {
  interface ThreeElements {
    textGeometry: Object3DNode<CustomElement, typeof TextGeometry>;
  }
}
