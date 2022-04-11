# Q&A

Collect frequently asked questions here

## 1.What has changed between Version 1.1.x and Version 1.0.x? Which one should I choose to use?

Compared with v1.0, v1.1 adds support for Mesh to change Transform and Material properties, but this brings higher ray detection costs, and some optimizations for static scenes have to be deleted.

So if your scene is static (for example, you only need to generate the final screenshot), go ahead and use v1.0:

```bash
npm i lgl-tracer@1.0.7
```

Docs:

https://lgltracer.com/docs/v1_0/index.html

v1.0 and v1.1 will be updated separately for two different directions (static and dynamic scenes)

## 2.Will this project be open sourced? What if I want to use it for commercial purposes?

I'm very sorry, this project will not be open source, I have spent a lot of effort on it. 

But if it is only for commercial use of the closed source version of lglTracer, just contact me by email and leave your or your company's usage information, you can **Free to use**. For more cooperation methods, please email me to know more.

## 3.What is the version update plan for lglTracer?

There is no new feature update plan for the time being. There are some features that I am interested in such as subsurface scattering, BDPT, etc., but how to integrate these features into lglTracer efficiently and universally will take too much time. Therefore, in the future, lglTracer will mainly maintain the existing functions.

## 4.Will there be a WebGPU version of lglTracer?

Please stay tuned to lglTracer and look forward to the future.