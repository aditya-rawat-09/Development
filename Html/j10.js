// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("globeCanvas") });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create globe
const globe = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x0077be, wireframe: true })
);
scene.add(globe);

// Camera position
camera.position.z = 10;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.005;
    renderer.render(scene, camera);
}

animate();
