# LGLTracerRenderer

Similar to Threejs's original [WebGLRenderer](https://threejs.org/docs/index.html?q=renderer#api/en/renderers/WebGLRenderer), but the underlying implementation is based on native WebGL 2.0 and completely takes over all subsequent rendering processes.

## Constructor

### LGLTracerRenderer(parameters: Object)

#### canvas 

* Type: `HTMLCanvasElement`

The canvas element used by the renderer, will be created by default if it is not passed.

### useWorker

* Type: `Bool`
* Default: `true`

Whether the process of building BVH is carried out in WebWoker.

#### loadingCallback: 

* Type: `Object`

Contains the `onProgress` that is called back before calling the buildScene method, and the `onComplete` that the buildScene call is completed.

```javascript
new LGLTracerRenderer({
    loadingCallback: {
        onProgress: () => console.log('Building BVH...'),
        onComplete: () => console.log('Building Complete.')
  }
})
```
## Properties

### .bounces

* Type: `Number`
* Default: `2`

The number of times the light bounces per path, at least 2 times and at most 8 times.

### .envMapIntensity

* Type: `Number`
* Default: `1`

Set the intensity of the environment lighting.

### .enableDenoise

* Type: `Bool`
* Default: `false`

Whether to enable the SVGF(Spatiotemporal Variance-Guided Filter) denoise pass. SVGF pass include temporal and spatial part, controlled by two independent switches.


<div style="width:100%; text-align:center;">
    <img src="_images\Intro\denoising.jpg" width="90%">
</div>

### .enableTemporalDenoise

* Type: `Bool`
* Default: `true`

Whether to enable the temporal part denoise. temporal denoise will turn on the reprojection pass, reuse effective information in historical pixels for denoise, and pass the variance factor to spatial denoise.

### .enableSpatialDenoise

* Type: `Bool`
* Default: `true`

Whether to enable the spatial part denoise. spatial denoise will turn on the A-Tours filter pass.

### .fullSampleCallback

* Type: `Function`
* Default: `null`

The callback method after the complete sampling of a frame is rendered, for example, to ensure that the screenshot from the canvas is successful.

```javascript
renderer.fullSampleCallback = () => {
	offScreenCtx.drawImage(renderer.domElement, 0, 0);
	const fullSampleImgData = offScreenCanvas.toDataURL(`image/jpeg`);
};
```

### .movingDownsampling

* Type: `Bool`
* Default: `false`

Whether to downsample during camera movement (to maintain frame rate).

### .needsUpdate

* Type: `Bool`
* Default: `false`

Whether to clear the current accumulated results and start drawing again. When changing some configurations dynamically, this property needs to be `true` in order not to be affected by the results of historical accumulation.

```javascript
renderer.bounces = 4;
renderer.envMapIntensity = 3;
renderer.useTileRender = true;
renderer.enableTemporalDenoise = true;

renderer.needsUpdate = true;
```

### .renderWhenOffFocus

* Type: `Bool`
* Default: `true`

Whether to keep sampling when canvas element off focus.

### .toneMapping

* Type: `THREE.ToneMappingConstants`
* Default: `THREE.LinearToneMapping`

Set the method used in ToneMapping pass. including several methods [built-in](https://threejs.org/docs/#api/en/constants/Renderer) support in threejs.

### .useTileRender

* Type: `Bool`
* Default: `false`

Whether to use tile rendering, if enabled, the screen space will be divided according to the frame rate and then rendered block by block.


## Methods

### .buildScene(scene: Object3D, camera: Camera)

* Return: `Promise`

Initialize the scene construction according to the scene information and setting parameters(Including bvh build based on webworker). This method needs to be called before the `render` method.

### .setSize(width: Number, height: Number, updateStyle: Boolean)

Set the size of the canvas element and rendering buffers.

### .render(scene: Object3D, camera: Camera)

Drawcall after scene initialization(buildScene method).

```javascript
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
renderer.buildScene(scene, camera).then(() => {
	render();
});
```
### .updateEnvLight()

Dynamic update the environment lights in the scene.

```javascript
scene.environment = newEnvMap;
renderer.updateEnvLight();
renderer.needsUpdate = true;
```

### .updateMeshLight()

Dynamically adjust the properties of the light in the scene(No support dynamic add/delete now).

```javascript
directionalLight.position.x = 10;
directionalLight.color = new THREE.Color(1, 0, 0);

renderer.updateMeshLight();
renderer.needsUpdate = true;
```

### .setDenoiseColorBlendFactor(value: Number)
* Default: `0.2`

Set svgf reproject pass's color blend factor, the factor is used to determine the weight of mixing the current frame and the history frame.

### .setDenoiseMomentBlendFactor(value: Number)
* Default: `0.2`

Set svgf reproject pass's moment variance blend factor, the factor is used to determine the weight of mixing the current frame and the history frame.

### .setDenoiseColorFactor(value: Number)
* Default: `0.5`

Set svgf a-tours filter pass's color threshold value.

### .setDenoisePositionFactor(value: Number)

* Default: `0.35`

Set svgf a-tours filter pass's position threshold value.

### .getSize(target : Vector2) : Vector2

Return the Vector2 that containing the current width and height size.

### .getTotalSamples() : Number

Returns the current number of accumulated samples.