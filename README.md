# Base 64 Manager
## nativescript-base-64-manager

Add your plugin badges here. See [nativescript-urlhandler](https://github.com/hypery2k/nativescript-urlhandler) for example.

This plugin offers the standards atob and btoa javascript functions for Android and iOS. 

## Installation

```javascript
tns plugin add nativescript-base-64-manager
```

## Usage 
	
```javascript
import { Base64Manager } from 'nativescript-base-64-manager';

const base64String = "QmFzZSA2NCBNYW5hZ2VyIGlzIHdvcmtpbmchIQ=="
console.log(Base64Manager.btoa(base64String));

const standardString = "Base 64 Manager is working!!"
console.log(Base64Manager.atob(standardString));
```
