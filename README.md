# Base 64 Manager
## nativescript-base-64-manager

https://github.com/alessiobianchini/nativescript-base-64-manager

This plugin offers the standards atob and btoa javascript functions for Android and iOS. 

## Installation

```javascript
tns plugin add nativescript-base-64-manager
```

## Usage 
	
```javascript
import { Base64Manager } from 'nativescript-base-64-manager';

const base64String = "QmFzZSA2NCBNYW5hZ2VyIGlzIHdvcmtpbmchIQ=="
const standardString = "Base 64 Manager is working!!"
const _base64Manager = new Base64Manager();

console.log(standardString + " -> btoa -> " + _base64Manager.btoa(standardString));
console.log(base64String + " -> atob -> " + _base64Manager.atob(base64String));
```
