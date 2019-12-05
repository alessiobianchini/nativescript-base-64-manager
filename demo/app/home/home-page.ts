import { Base64Manager } from 'nativescript-base-64-manager';

const base64String = "QmFzZSA2NCBNYW5hZ2VyIGlzIHdvcmtpbmchIQ=="
const standardString = "Base 64 Manager is working!!"
const _base64Manager = new Base64Manager();

console.log(standardString + " -> btoa -> " + _base64Manager.btoa(standardString));
console.log(base64String + " -> atob -> " + _base64Manager.atob(base64String));

/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}
