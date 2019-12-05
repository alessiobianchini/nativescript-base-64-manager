import { Base64Manager } from 'nativescript-base-64-manager';

const base64String = "QmFzZSA2NCBNYW5hZ2VyIGlzIHdvcmtpbmchIQ=="
console.log(Base64Manager.btoa(base64String));

const standardString = "Base 64 Manager is working!!"
console.log(Base64Manager.atob(standardString));

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
