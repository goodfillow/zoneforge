
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0514);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(80, 80, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Add Hall (wireframe cube)
const hallGeometry = new THREE.BoxGeometry(65, 8, 65);
const hallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.2 });
const hall = new THREE.Mesh(hallGeometry, hallMaterial);
scene.add(hall);

// Dummy cubes
const cubeGeometry = new THREE.BoxGeometry(5, 4, 5);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x966eff });
for (let i = 0; i < 5; i++) {
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(Math.random() * 50 - 25, 2, Math.random() * 50 - 25);
  scene.add(cube);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
