# LGL Tracer Renderer

> lglTracer is a web path tracing renderer, implemented as a plug-in library on top of [Threejs](https://threejs.org/).

To know more or view online examples you can check [Homepage](http://lgltracer.com/).

Or you can try it yourself by following the [Quick Start](guide/QuickStart.md) guide.

Lets go ~

## Features

- Disney BSDF Material
- SVGF Denoise
- BVH(SAH) Acceleration(with Web Workers)
- Path tracing with MIS/NEE
- Progressive/Tile Rendering
- Environment lighting(importance sampling)
- Analytic Lights(Point/Directional/Rect/Sphere)
- WebGL 2.0
- Metalness workflow and Specular workflow
- Threejs material convert(so you can import any model format supported by threejs (such as gltf,fbx,obj,etc.))
- Threejs version independent(even R80), tracer only uses a few core api.

## Thanks

lglTracer is inspired by many excellent open source projects:

[PBRT](https://github.com/mmp/pbrt-v3)

[GLSL-PathTracer](https://github.com/knightcrawler25/GLSL-PathTracer)

[ray-tracing-renderer](https://github.com/hoverinc/ray-tracing-renderer)


## Feedback/Contact

* [Twitter](https://twitter.com/WebAMV)
* Email: lg2lugang@gmail.com