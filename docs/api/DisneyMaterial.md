# DisneyMaterial

Disney Principled BSDF. 

The validation report of material parameters can check [Validation](validation/Disney.md).


<div style="width:100%; text-align:center;">
    <img src="_images\intro\compare1.JPG" style="max-width:1200px;" width="100%">
</div>

## Constructor

### DisneyMaterial(parameters: Object)

Any properties of the material can be passed in here.

## Properties

### .workflow

* Type: `String: Metalness|Specular`
* Default: `Metalness`

Declare current material uses Metalness Workflow or Specular Workflow.

### .color

* Type: `Color`
* Default: `0xffffff`

### .roughness

* Type: `Number`
* Default: `0.5`

### .metalness

* Type: `Number`
* Default: `0.0`

### .ior

* Type: `Number`
* Default: `1.5`

### .specularTint

* Type: `Number`
* Default: `0.0`
  
### .transmission

* Type: `Number`
* Default: `0.0`

### .atDistance

* Type: `Number`
* Default: `1.0`

### .extinction

* Type: `Color`
* Default: `0xffffff`

### .sheen

* Type: `Number`
* Default: `0.0`

### .sheenTint

* Type: `Number`
* Default: `0.5`

### .clearcoat

* Type: `Number`
* Default: `0.0`

### .clearcoatRoughness

* Type: `Number`
* Default: `0.0`

### .subsurface

* Type: `Number`
* Default: `0.0`

### .map

* Type: `Texture`
* Default: `null`

### .normalMap

* Type: `Texture`
* Default: `null`

### .normalScale

* Type: `Vector2`
* Default: `(1,1)`

### .emissiveMap

* Type: `Texture`
* Default: `null`

### .roughnessMap

* Type: `Texture`
* Default: `null`

### .metalnessMap

* Type: `Texture`
* Default: `null`

### .specularColor

* Type: `Color`
* Default: `0xffffff`

### .glossiness

* Type: `Number`
* Default: `1`

### .specularMap

* Type: `Texture`
* Default: `null`

### .glossinessMap

* Type: `Texture`
* Default: `null`

## Methods

### fromBasicMaterial(source: THREE.Material) : DisneyMaterial

Convert the threejs's material to lglTracer's disney material but only copy the color and color map parameters.

### fromStandardMaterial(source: THREE.Material) : DisneyMaterial

Will convert the threejs's [MeshStandardMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial) type material to lglTracer's disney material, will assign values to the corresponding parameters.The parameters of the Specular Workflow (
`source.isGLTFSpecularGlossinessMaterial`) will also be converted.

<div style="width:100%; text-align:center;">
    <img src="_images\Intro\sg.JPG" style="max-width:1200px;" width="80%">
</div>

Tips: When call the LGLTracerRenderer's buildScene method, the scene's threejs material will be auto convert to disney material.

```javascript
if (mesh.material.isMeshStandardMaterial) {
    mesh.material = new DisneyMaterial().fromStandardMaterial(mesh.material);
} else {
	mesh.material = new DisneyMaterial().fromBasicMaterial(mesh.material);
}
```