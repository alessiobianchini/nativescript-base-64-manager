import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { isIOS } from '@nativescript/core/ui/page/page';

declare var NSString: any;
declare var NSData: any;
declare var NSUTF8StringEncoding: any;
declare var java: any;
declare var android: any;

export class Common extends Observable {
  public message: string;

  constructor() {
    super();
  }

  public btoa(inputString: string) {
    if (isIOS) {
      const text = NSString.stringWithString(inputString);
      const data = text.dataUsingEncoding(NSUTF8StringEncoding);

      return data.base64EncodedStringWithOptions(0);
    } else {
      const text = new java.lang.String(inputString);
      const data = text.getBytes("UTF-8");

      return android.util.Base64.encodeToString(data, android.util.Base64.DEFAULT);
    }
  }

  public atob(base64string: string) {
    if (isIOS) {
      const decodedData = NSData.alloc().initWithBase64EncodedStringOptions(base64string, 0);

      return NSString.alloc().initWithDataEncoding(decodedData, NSUTF8StringEncoding);
    } else {
      const decodedString = android.util.Base64.decode(base64string, android.util.Base64.DEFAULT);

      return decodeURI(new java.lang.String(decodedString));
    }
  }
}
