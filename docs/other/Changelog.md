# Changelog

Briefly record the changed API. For detailed information, please refer to the corresponding page.

## V1.1.6

Fix

* Non-indexed geometry
* Transmission

## V1.1.5

Add

* renderer.tileSlicesNum

## V1.1.4

* Support KHR_texture_transform extension

## V1.1.2

* Fix Temporal denoise

## V1.1.1/V1.0.8

Add

* renderer.setDenoiseNormalFactor

## V1.1.0

Add

* renderer.updateMeshTransform

Update

* renderer.updateMeshMaterial


Tips: If it is a static scene, please continue to use v1.0.x

## V1.0.7

Add

* renderer.setTileSlicesNumber
* renderer.updateMeshMaterial
* renderer.dispose
* renderer.getContext

Fix

* **DisneyMaterial.fromBasicMaterial/fromStandardMaterial** method now no longer creates a new material, changes properties directly on the current material

