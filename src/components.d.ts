/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
  interface MySelect {
    'opts': Array<string>;
  }
  interface NavSelector {}
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMySelectElement extends Components.MySelect, HTMLStencilElement {}
  var HTMLMySelectElement: {
    prototype: HTMLMySelectElement;
    new (): HTMLMySelectElement;
  };

  interface HTMLNavSelectorElement extends Components.NavSelector, HTMLStencilElement {}
  var HTMLNavSelectorElement: {
    prototype: HTMLNavSelectorElement;
    new (): HTMLNavSelectorElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'my-select': HTMLMySelectElement;
    'nav-selector': HTMLNavSelectorElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppProfile {
    'match'?: MatchResults;
  }
  interface AppRoot {}
  interface MySelect {
    'onSelectFamily'?: (event: CustomEvent<any>) => void;
    'opts'?: Array<string>;
  }
  interface NavSelector {}

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'my-select': MySelect;
    'nav-selector': NavSelector;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'my-select': LocalJSX.MySelect & JSXBase.HTMLAttributes<HTMLMySelectElement>;
      'nav-selector': LocalJSX.NavSelector & JSXBase.HTMLAttributes<HTMLNavSelectorElement>;
    }
  }
}


