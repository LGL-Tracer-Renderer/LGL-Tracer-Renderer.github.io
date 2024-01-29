# Quick Start

## Install

Can be installed via npm:

```bash
npm i lgl-tracer
```

Browser loading is also supported:

```html
<script src="https://lgltracer.com/release/lglTracer.umd.js"></script>
```

Lib size: about 150 Kb

## Usage

lgltracer is a plug-in for [threejs](https://threejs.org/), so threejs needs to be imported first. Assuming install via npm, you can load like this:

```javascript
import * as THREE from 'three';
import { LGLTracerRenderer, DisneyMaterial } from 'lgl-tracer';
```

A simple example, if we just want to render a ball

```javascript
import * as THREE from 'three';
import { LGLTracerRenderer, DisneyMaterial, DirectionalLight } from 'lgl-tracer';
// const { LGLTracerRenderer, DisneyMaterial, DirectionalLight } = LGLTracer; // if use UMD

const renderer = new LGLTracerRenderer();
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const sphereGeometry = new THREE.SphereGeometry(1, 128, 64);
// Look here
const rayTracingMaterial = new DisneyMaterial();
const sphereMesh = new THREE.Mesh(sphereGeometry, rayTracingMaterial);
scene.add(sphereMesh);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.z = 5;

const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.y = 1;
scene.add(directionalLight);

renderer.setSize(window.innerWidth, window.innerHeight);

function tick() {
	renderer.render(scene, camera);
	requestAnimationFrame(tick);
}

// Look here
renderer.buildScene(scene, camera).then(() => {
	tick();
});

```
you will get the following result:

<div style="width:100%; text-align:center;">
    <img src="_images\Intro\ball.JPG" style="max-width:1000px;" width="80%">
</div>

A more complicated example, if we want to render a gltf model(other format's model (such as fbx/obj) follow the same steps, only the loader is different)

```javascript
import * as THREE from 'three';
import { LGLTracerRenderer } from 'lgl-tracer';
// https://github.com/mrdoob/three.js/tree/dev/examples/jsm/loaders
import { RGBELoader } from './RGBELoader';
import { GLTFLoader } from './GLTFLoader';

const envMapPath = './assets/peppermint_powerplant_4k.hdr';
const gltfModelPath = './assets/DamagedHelmet/scene.gltf';

const renderer = new LGLTracerRenderer();
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
camera.position.z = 4;

renderer.setSize(window.innerWidth, window.innerHeight);

async function init() {
	// Note that if it is after R136, it needs to be declared as FloatType
	const rgbeLoader = new RGBELoader().setDataType(THREE.FloatType);
	const envMap = await new Promise(resolve => {
		rgbeLoader.load(envMapPath, resolve);
	});
	scene.environment = envMap;

    const gltfLoader = new GLTFLoader();
	const gltfInfo = await new Promise(resolve => {
		gltfLoader.load(gltfModelPath, resolve);
	});
	scene.add(gltfInfo.scene);

	await renderer.buildScene(scene, camera);
    
    render();
}

function render() {
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

init();
```
quite simple right? 

then you will get the following result:

<div style="width:100%; text-align:center;">
    <img src="_images\Intro\gltf.JPG" style="max-width:1000px;" width="80%">
</div>

For more detailed usage, please visit the API section.

## License

```license
MIT license statement included in LGLTracer:

GLSL-PathTracer:
Copyright 2019-2021 Asif Ali. MIT License

ray-tracing-renderer:
Copyright 2019 HOVER. MIT License

LGLTracer is not open source, but for this closed source version, you can use it freely (including commercially). 
If you have any questions, please feel free to contact me by email(lg2lugang@gmail.com).
```