# Lights

All analytic lighting implementations inherit from the base [Light](https://threejs.org/docs/#api/en/lights/Light) class of threejs.

The validation report of lights can check [Validation](validation/Lights.md).

## EnvironmentLight

* Type: `Color|Texture`

```javascript
// HDR map
scene.environment = rgbeLoader.load(hdrEnvMapPath);
// Texture map(LDR)
scene.environment = textureLoader.load(texturePath);
// Const color
scene.environment = THREE.Color(0xffffff);
```

## PointLight

PointLight(color: Integer, intensity: Float)

``` javascript
const pointLight = new PointLight(0xffffff, 1);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);
```

## DirectionalLight

DirectionalLight(color: Integer, intensity: Float)

``` javascript
const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0);
directionalLight.target.set(0, 0, 0);
scene.add(directionalLight);
```

### Properties

#### .position

* Type: `Vector3`
* Default: `[0,0,0]`

#### .target

* Type: `Vector3`
* Default: `[0,0,0]`

## RectAreaLight

RectAreaLight(color: Integer, intensity: Float, width: Float, height: Float)

```javascript
const width = 10;
const height = 10;
const rectAreaLight = new RectAreaLight(0xffffff, 1, width, height);
rectAreaLight.position.set(5, 5, 0);
rectAreaLight.target.set(0, 0, 0);
scene.add( rectAreaLight )
```

#### .height

* Type: `Number`
* Default: `10`

#### .width

* Type: `Number`
* Default: `10`

#### .targe

* Type: `Vector3`
* Default: `[0,0,0]`

## SphereAreaLight

SphereAreaLight(color: Integer, intensity: Float, radius: Float)

```javascript
const radius = 2;
const sphereAreaLight = new SphereAreaLight(0xffffff, 1, radius);
sphereAreaLight.position.set(0, 5, 0);
scene.add( sphereAreaLight )
```

#### .radius

* Type: `Number`
* Default: `1`