var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\Brightways\remix\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-SUC2ZDHC.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-55DNWN2R.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-55DNWN2R.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VFGGZOM4.css";

// app/components/ui/layout.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());

// app/components/ui/footer.tsx
init_react();

// app/components/ui/logo.tsx
init_react();
var import_react = __toESM(require("react"));
var Logo = ({ color = "#2C4EFF" }) => {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    width: "93",
    height: "19",
    viewBox: "0 0 93 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M0.202234 2.03058C1.92993 1.57214 3.43578 1.34201 4.71978 1.34019C7.46778 1.3363 8.8424 2.28836 8.84364 4.19636C8.8444 5.36036 8.29898 6.24913 7.20738 6.86268C7.9395 7.04164 8.54573 7.38878 9.02606 7.9041C9.50639 8.40742 9.7468 9.04308 9.74731 9.81108C9.74824 11.2511 9.21497 12.3678 8.14749 13.1614C7.08 13.9429 5.76025 14.3347 4.18826 14.337C2.61626 14.3392 1.25406 14.0291 0.10165 13.4067C0.472804 12.1102 0.657666 10.3639 0.656235 8.16795C0.654795 5.95995 0.503462 3.91416 0.202234 2.03058ZM2.92699 12.3947C3.4551 12.562 3.98315 12.6452 4.51115 12.6445C5.33915 12.6433 6.02302 12.4384 6.56275 12.0296C7.10248 11.6088 7.37209 11.0204 7.3716 10.2644C7.37066 8.82445 6.59019 8.10555 5.0302 8.10776C4.2862 8.10881 3.5303 8.26588 2.7625 8.57897C2.76329 9.79097 2.81812 11.0629 2.92699 12.3947ZM2.74347 6.99499C2.91145 6.95875 3.15742 6.91641 3.48139 6.86795C3.81736 6.81947 4.07533 6.77711 4.2553 6.74085C4.43528 6.7046 4.65725 6.65028 4.9212 6.57791C5.19715 6.50552 5.4071 6.42122 5.55103 6.32502C5.70696 6.2168 5.86288 6.08458 6.01877 5.92836C6.31858 5.62793 6.46829 5.18972 6.46792 4.61372C6.46719 3.49772 5.80083 2.94066 4.46883 2.94255C4.03683 2.94316 3.50888 3.01591 2.88497 3.16079C2.79057 5.62092 2.74341 6.89899 2.74347 6.99499ZM14.0474 13.999C13.6755 14.1435 13.2795 14.2161 12.8595 14.2167C12.4395 14.2173 12.0975 14.1218 11.8333 13.9301C11.5812 13.7265 11.455 13.4507 11.4548 13.1027C11.4546 12.7427 11.5082 12.0946 11.6155 11.1584C11.7229 10.2223 11.7763 9.31621 11.7758 8.44021C11.7752 7.55221 11.6365 6.51441 11.3597 5.3268C11.7436 5.18226 12.1216 5.10972 12.4936 5.1092C12.8656 5.10867 13.1837 5.23422 13.4478 5.48585C13.724 5.73746 13.8622 6.07326 13.8625 6.49326C13.8626 6.70926 13.8269 7.03331 13.7551 7.46541C13.6834 7.88551 13.6416 8.20357 13.6298 8.41959C14.0971 7.35093 14.6485 6.51615 15.2841 5.91525C15.9317 5.30233 16.5735 4.99542 17.2095 4.99452C17.6535 4.99389 18.0076 5.14939 18.2718 5.46102C18.536 5.77265 18.6683 6.16846 18.6686 6.64846C18.6689 7.11646 18.5492 7.50063 18.3094 7.80097C18.0695 8.08931 17.7696 8.23373 17.4096 8.23424C17.0616 8.23473 16.7796 8.19913 16.5636 8.12744C16.5995 7.98339 16.6174 7.85136 16.6173 7.73136C16.617 7.23936 16.4428 6.99361 16.0948 6.9941C15.5668 6.99485 15.0692 7.52955 14.6019 8.59822C14.1466 9.65486 13.8412 10.6453 13.6858 11.5695C13.7464 12.4694 13.8669 13.2793 14.0474 13.999ZM19.6943 5.26101C20.0782 5.15246 20.4622 5.09792 20.8462 5.09738C21.2422 5.09682 21.5782 5.21634 21.8544 5.45595C22.1305 5.69556 22.2687 6.00737 22.269 6.39137C22.2692 6.76336 22.2037 7.41746 22.0723 8.35364C21.9529 9.27781 21.8933 9.9979 21.8937 10.5139C21.8946 11.8579 22.0213 13.0157 22.2739 13.9874C21.902 14.1319 21.5001 14.2045 21.0681 14.2051C20.6361 14.2057 20.294 14.1102 20.0419 13.9185C19.7898 13.7149 19.6636 13.4271 19.6633 13.0551C19.6631 12.6711 19.7347 12.047 19.8781 11.1828C20.0216 10.3185 20.0931 9.60445 20.0927 9.04045C20.0917 7.54045 19.9589 6.28063 19.6943 5.26101ZM19.9256 1.19268C20.3455 1.00008 20.7594 0.903497 21.1674 0.90292C21.5754 0.902343 21.8755 1.00992 22.0676 1.22565C22.2718 1.42936 22.374 1.73521 22.3742 2.14321C22.3745 2.55121 22.2367 2.91141 21.9609 3.2238C21.6971 3.53617 21.3492 3.69266 20.9172 3.69328C20.0292 3.69453 19.5849 3.23316 19.5843 2.30916C19.5841 1.90116 19.6978 1.529 19.9256 1.19268ZM30.3311 6.79396C29.695 6.60286 29.065 6.50775 28.441 6.50863C27.817 6.50952 27.2291 6.69635 26.6773 7.06913C26.2459 7.93374 26.0305 8.85204 26.0311 9.82404C26.0315 10.388 26.1099 10.9399 26.2662 11.4797C26.4225 12.0075 26.6807 12.2711 27.0407 12.2706C27.4487 12.27 27.9943 11.6873 28.6776 10.5223C29.3608 9.35733 29.912 8.11455 30.3311 6.79396ZM27.6379 17.1478C28.4059 17.1467 29.0057 16.8818 29.4374 16.3532C29.869 15.8246 30.0846 15.1463 30.0841 14.3183C30.0838 13.9103 30.0534 13.3164 29.9929 12.5364C29.9444 11.7565 29.914 11.2046 29.9018 10.8806C29.0508 12.3698 28.3074 13.2828 27.6716 13.6197C27.3477 13.7882 27.0058 13.8727 26.6458 13.8732C25.7458 13.8745 25.0495 13.5214 24.5571 12.8141C24.0646 12.1068 23.818 11.2432 23.8174 10.2232C23.8165 8.83118 24.2477 7.61257 25.111 6.56734C25.9863 5.5101 27.09 4.98054 28.422 4.97866C29.766 4.97676 31.1221 5.20884 32.4904 5.6749C32.1313 6.95941 31.9521 8.21967 31.9529 9.45567C31.9533 10.0437 31.9957 10.7756 32.0803 11.6515C32.1649 12.5154 32.2073 13.1573 32.2076 13.5773C32.2085 15.0533 31.7413 16.272 30.806 17.2333C29.8706 18.2066 28.6709 18.6943 27.2069 18.6964C26.3429 18.6976 25.5988 18.5307 24.9746 18.1955C24.3624 17.8724 24.056 17.3628 24.0556 16.6668C24.0553 16.2348 24.2171 15.8686 24.5409 15.5682C24.8647 15.2677 25.2486 15.1172 25.6926 15.1165C25.7886 15.1164 25.9086 15.1282 26.0526 15.152C26.0167 15.3081 25.9988 15.4461 25.9989 15.5661C25.9991 15.9981 26.1614 16.3699 26.4856 16.6814C26.8098 16.9929 27.1939 17.1484 27.6379 17.1478ZM42.4589 6.9028L42.2814 10.8631C42.2821 11.9191 42.4568 12.9868 42.8055 14.0663C42.4336 14.2108 42.0557 14.2834 41.6717 14.2839C40.6277 14.2854 40.1053 13.7341 40.1046 12.6301C40.1041 11.8141 40.1754 10.854 40.3187 9.74983C40.462 8.64563 40.5336 7.96752 40.5334 7.71552C40.533 7.09152 40.2508 6.77992 39.6868 6.78072C39.0868 6.78157 38.4211 7.34651 37.6899 8.47555C36.9586 9.59258 36.5392 10.5292 36.4317 11.2853C36.4559 11.6333 36.5765 12.5271 36.7935 13.9668C36.4216 14.1113 36.0136 14.1839 35.5696 14.1846C34.6456 14.1859 34.1833 13.7365 34.1827 12.8365C34.1824 12.4045 34.2479 11.5584 34.3791 10.2982C34.5102 9.02605 34.5756 8.00595 34.5751 7.23795C34.5734 4.68195 34.428 2.57016 34.1389 0.902566C34.5229 0.758023 34.9188 0.685462 35.3268 0.684885C35.7348 0.684308 36.0709 0.821832 36.3351 1.09746C36.6112 1.36107 36.7495 1.72687 36.7498 2.19487C36.7501 2.66287 36.6847 3.62897 36.5537 5.09315C36.4346 6.55732 36.3754 7.69741 36.3759 8.51341C36.7953 7.62481 37.4068 6.81395 38.2103 6.08081C39.0258 5.33565 39.8356 4.96251 40.6396 4.96137C41.8516 4.95966 42.458 5.6068 42.4589 6.9028ZM45.3361 2.41672C45.7199 2.22418 46.1099 2.12763 46.5059 2.12707C46.9019 2.12651 47.22 2.25206 47.4601 2.50372C47.7123 2.75536 47.8385 3.12718 47.8389 3.61918C47.8392 4.11118 47.8095 4.66923 47.75 5.29331C48.6499 5.29204 49.5079 5.16482 50.3237 4.91167C50.4679 5.15147 50.54 5.43336 50.5403 5.75736C50.5405 6.06936 50.3966 6.32757 50.1088 6.53197C49.8329 6.72436 49.5509 6.82076 49.2629 6.82117C48.9749 6.82158 48.6509 6.78604 48.2909 6.71455C47.9308 6.64306 47.6968 6.60139 47.5888 6.58954C47.5769 6.69756 47.541 6.91361 47.4812 7.23769C47.4334 7.56176 47.3916 7.84382 47.3558 8.08387C47.2602 8.74401 47.2127 9.45207 47.2132 10.2081C47.2142 11.8521 47.7488 12.6733 48.8168 12.6718C49.2128 12.6712 49.6687 12.5326 50.1845 12.2559C50.3406 12.4837 50.4188 12.7775 50.4191 13.1375C50.4193 13.4975 50.2215 13.7798 49.8256 13.9844C49.4417 14.1769 48.9798 14.2736 48.4398 14.2743C46.3278 14.2773 45.271 13.0788 45.2695 10.6788C45.2692 10.3308 45.3168 9.70076 45.4122 8.78862C45.5196 7.87647 45.5732 7.13839 45.5728 6.57439C44.9968 6.61121 44.5349 6.71386 44.187 6.88235C44.0428 6.66656 43.9707 6.42066 43.9705 6.14466C43.9703 5.85666 44.0722 5.62251 44.276 5.44223C44.4799 5.24994 44.7319 5.15358 45.0319 5.15316C45.3319 5.15273 45.5299 5.15845 45.6259 5.17032C45.6378 5.0743 45.6437 4.94829 45.6436 4.79229C45.643 3.89229 45.5405 3.10044 45.3361 2.41672ZM50.982 6.06274C51.3536 5.39021 51.8814 5.05346 52.5654 5.0525C53.0094 5.05187 53.3695 5.29136 53.6458 5.77097C53.9221 6.23858 54.1145 6.82031 54.223 7.51615C54.3434 8.19998 54.4399 8.89585 54.5123 9.60375C54.6935 11.3675 54.9161 12.3332 55.1802 12.5008C55.6481 12.3801 56.0617 11.6656 56.4208 10.357C56.78 9.03654 56.9593 8.04628 56.9589 7.38628C56.9584 6.71428 56.9221 6.18033 56.8498 5.78444C57.2698 5.69984 57.6297 5.65733 57.9297 5.65691C58.9617 5.65545 59.4781 6.14672 59.4787 7.13072C59.4797 8.66672 59.5585 9.92061 59.7152 10.8924C59.8838 11.8521 60.0822 12.4219 60.3103 12.6015C60.6463 12.5771 60.9341 12.3127 61.1738 11.8083C61.4134 11.304 61.587 10.6917 61.6946 9.97158C61.8977 8.6153 61.999 7.57715 61.9985 6.85715C61.9981 6.12515 61.9617 5.5612 61.8894 5.1653C62.3094 5.08071 62.6693 5.0382 62.9693 5.03778C64.0013 5.03632 64.5177 5.52759 64.5183 6.51159C64.5187 7.13559 64.3932 7.89176 64.1418 8.78012C63.8904 9.65648 63.5609 10.5149 63.1535 11.3555C62.746 12.1841 62.2485 12.8928 61.6608 13.4816C61.0852 14.0704 60.5094 14.3653 59.9334 14.3661C59.2734 14.367 58.7751 13.8757 58.4385 12.8922C58.174 12.1486 57.9574 11.1829 57.7886 9.99511C57.6808 10.3913 57.603 10.6794 57.5551 10.8594C57.5073 11.0395 57.4234 11.3096 57.3037 11.6698C57.1839 12.03 57.0761 12.3061 56.9802 12.4983C56.8843 12.6904 56.7525 12.9186 56.5847 13.1828C56.4288 13.447 56.267 13.6393 56.099 13.7595C55.6793 14.0961 55.2114 14.2648 54.6954 14.2655C54.1914 14.2662 53.7712 14.0388 53.4349 13.5833C53.1106 13.1277 52.8822 12.5461 52.7498 11.8382C52.6293 11.1304 52.5208 10.4046 52.4244 9.6607C52.1951 7.76502 51.7143 6.5657 50.982 6.06274ZM73.868 5.65236C73.5449 7.03281 73.3838 8.41904 73.3848 9.81104C73.3857 11.191 73.5425 12.5588 73.8554 13.9144C73.4235 14.059 72.9796 14.1316 72.5236 14.1323C72.0676 14.1329 71.7495 14.0014 71.5693 13.7376C71.3891 13.4619 71.2989 13.072 71.2985 12.568C71.2982 12.052 71.3758 11.3499 71.5312 10.4617C70.6804 12.2869 69.8591 13.44 69.0674 13.9212C68.7076 14.1377 68.3356 14.2462 67.9516 14.2467C67.0396 14.248 66.3314 13.913 65.827 13.2417C65.3225 12.5585 65.07 11.7128 65.0693 10.7048C65.0683 9.16881 65.4935 7.82421 66.3447 6.671C67.1959 5.5058 68.2996 4.92223 69.6556 4.92032C71.0236 4.91838 72.4277 5.16239 73.868 5.65236ZM71.5107 6.73569C70.8746 6.54459 70.3346 6.44936 69.8906 6.44998C68.9906 6.45126 68.3187 6.65021 67.875 7.04684C67.4676 8.05541 67.2643 9.0817 67.265 10.1257C67.2653 10.6777 67.3497 11.2356 67.518 11.7993C67.6984 12.3631 67.9686 12.6447 68.3286 12.6442C68.7486 12.6436 69.2882 12.0248 69.9474 10.7879C70.6066 9.55097 71.1277 8.20024 71.5107 6.73569ZM75.6522 11.1398L75.8305 8.54758C75.8298 7.38358 75.661 6.27982 75.3244 5.2363C75.6603 5.09182 76.0742 5.01923 76.5662 5.01854C77.5262 5.01718 78.0066 5.5505 78.0073 6.6185C78.0076 7.0985 77.942 7.77659 77.8106 8.65278C77.6792 9.52897 77.6136 10.1351 77.6138 10.4711C77.614 10.7951 77.6201 11.0351 77.6322 11.191C77.6443 11.335 77.6745 11.509 77.7226 11.7129C77.7949 12.1208 78.029 12.3245 78.425 12.3239C78.833 12.3233 79.2648 12.0047 79.7204 11.3681C80.1879 10.7194 80.5595 10.0049 80.835 9.2245C81.1225 8.44409 81.2661 7.82589 81.2658 7.36989C81.2051 6.42198 81.1027 5.70812 80.9584 5.22832C81.3423 5.08378 81.7322 5.01123 82.1282 5.01067C82.5362 5.01009 82.8723 5.13562 83.1365 5.38724C83.4126 5.63885 83.5508 5.97466 83.5511 6.39466C83.5554 12.9467 82.358 16.8784 79.9588 18.1897C79.419 18.4785 78.8071 18.6234 78.1231 18.6243C77.4391 18.6253 76.839 18.4462 76.3227 18.0869C75.8185 17.7276 75.5662 17.224 75.5658 16.576C75.5655 16.144 75.7272 15.7777 76.051 15.4773C76.3749 15.1888 76.7588 15.0443 77.2028 15.0436C77.2988 15.0435 77.4188 15.0553 77.5628 15.0791C77.5269 15.2352 77.509 15.3732 77.509 15.4932C77.5097 16.5492 77.8761 17.0767 78.6081 17.0757C79.0521 17.075 79.4539 16.8345 79.8136 16.354C80.1733 15.8734 80.4609 15.285 80.6765 14.5887C81.0955 13.1721 81.3047 11.8878 81.3039 10.7358C80.9446 11.7083 80.4531 12.495 79.8295 13.0959C79.2179 13.6848 78.5521 13.9797 77.8321 13.9808C76.3801 13.9828 75.6534 13.0358 75.6522 11.1398ZM86.9877 10.8358C86.9518 11.0038 86.9339 11.1419 86.9339 11.2499C86.9342 11.7419 87.0785 12.1197 87.3667 12.3833C87.6668 12.6468 88.0629 12.7783 88.5549 12.7776C89.0589 12.7769 89.4729 12.6863 89.7967 12.5058C90.1326 12.3133 90.3004 12.0311 90.3002 11.6591C90.2999 11.2871 90.1198 10.9934 89.7596 10.7779C89.4115 10.5504 88.9854 10.371 88.4813 10.2397C87.9892 10.1084 87.4911 9.96508 86.987 9.8098C86.4829 9.64251 86.0507 9.38512 85.6905 9.03763C85.3423 8.69012 85.168 8.25237 85.1676 7.72437C85.1671 6.89637 85.6046 6.19975 86.4803 5.63451C87.3559 5.06927 88.2737 4.78597 89.2337 4.78462C90.2897 4.78312 91.0938 4.99798 91.6461 5.4292C91.9703 5.68074 92.1325 6.01651 92.1328 6.43651C92.1331 6.84451 91.9713 7.18074 91.6474 7.4452C91.3356 7.69764 90.9517 7.82419 90.4957 7.82483C90.3997 7.82497 90.2797 7.81314 90.1357 7.78934C90.1716 7.63329 90.1895 7.49526 90.1894 7.37526C90.1892 7.02726 90.057 6.76345 89.7929 6.58382C89.5288 6.4042 89.1687 6.31471 88.7127 6.31535C88.2687 6.31598 87.8608 6.40656 87.4889 6.58708C87.345 6.77929 87.2732 7.02539 87.2734 7.32539C87.2736 7.62539 87.4477 7.87114 87.7958 8.06265C88.144 8.24216 88.5641 8.40356 89.0562 8.54687C89.5602 8.67816 90.0643 8.83344 90.5685 9.01273C91.0726 9.18002 91.4987 9.44941 91.847 9.82092C92.1952 10.1804 92.3695 10.6362 92.3699 11.1882C92.3705 12.0882 91.921 12.8388 91.0214 13.4401C90.1337 14.0293 89.2159 14.3246 88.2679 14.326C87.3199 14.3273 86.5338 14.1604 85.9096 13.8253C85.2974 13.4782 84.991 12.9566 84.9906 12.2606C84.9903 11.8286 85.1461 11.4804 85.4579 11.216C85.7817 10.9395 86.1716 10.801 86.6276 10.8003C86.7236 10.8002 86.8436 10.812 86.9877 10.8358Z",
    fill: color
  }));
};

// app/components/ui/footer.tsx
var Footer = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-[100%] min-h-[200px] bg-blue flex justify-center items-center mx-auto h-auto  gap-10 py-[30px]"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "w-[80%] gap-10 grid grid-cols-1 md:grid-cols-4 "
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-start gap-3 font-[14px]  text-white font-text"
  }, /* @__PURE__ */ React.createElement(Logo, {
    color: "white"
  }), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis ligula, pharetra sit amet urna non, tempor tincidunt diam. Nunc ac pharetra turpis.")), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-start font-semibold gap-3 font-[14px]  text-white font-text"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[12px] font-normal font-heading"
  }, "Our Service"), /* @__PURE__ */ React.createElement("a", null, "Home"), /* @__PURE__ */ React.createElement("a", null, "Home"), /* @__PURE__ */ React.createElement("a", null, "Home"), /* @__PURE__ */ React.createElement("a", null, "Home")), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-start font-semibold gap-3 font-[14px]  text-white font-text"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[12px] font-normal font-heading"
  }, "Follow Us"), /* @__PURE__ */ React.createElement("a", null, "Facebook"), /* @__PURE__ */ React.createElement("a", null, "Facebook"), /* @__PURE__ */ React.createElement("a", null, "Facebook")), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-start font-semibold gap-3 font-[14px]  text-white font-text"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[12px] font-normal font-heading"
  }, "Company"), /* @__PURE__ */ React.createElement("a", null, "Privacy Policy"), /* @__PURE__ */ React.createElement("a", null, "Terms Of Service"))));
};
var footer_default = Footer;

// app/components/ui/header.tsx
init_react();
var import_react2 = __toESM(require("react"));
var import_bs = require("react-icons/bs");
var Header = ({ pathname }) => {
  const [open, setOpen] = import_react2.default.useState(false);
  const [onTop, setOnTop] = import_react2.default.useState(pathname === "/" ? true : false);
  const divRef = import_react2.default.useRef(null);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const scroll = () => {
    if (divRef.current !== null) {
      const top = window.pageYOffset;
      if (top < window.innerHeight) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    }
  };
  import_react2.default.useEffect(() => {
    if (pathname === "/") {
      document.removeEventListener("scroll", scroll);
      document.addEventListener("scroll", scroll);
      return () => document.removeEventListener("scroll", scroll);
    }
  }, [pathname]);
  import_react2.default.useEffect(() => {
    if (pathname === "/") {
      scroll();
    }
  }, [pathname]);
  return /* @__PURE__ */ import_react2.default.createElement("header", {
    ref: divRef,
    className: `flex h-16 p-4 left-0 right-0 top-0 items-center fixed justify-between ${onTop ? "bg-transparent" : "bg-white"} w-screen box-border overflow-hidden z-50`
  }, /* @__PURE__ */ import_react2.default.createElement("section", {
    className: "min-w-[100px]"
  }, /* @__PURE__ */ import_react2.default.createElement(Logo, null)), /* @__PURE__ */ import_react2.default.createElement("section", {
    className: "sm:hidden"
  }, /* @__PURE__ */ import_react2.default.createElement(import_bs.BsList, {
    onClick: handleOpen.bind(null),
    className: "h-7 w-7"
  })), /* @__PURE__ */ import_react2.default.createElement("main", {
    className: `${open ? "left-0" : "left-full"} absolute top-16 px-4 pb-4 w-full z-10 sm:ml-12  sm:static sm:flex sm:flex-row sm:justify-end sm:items-center sm:p-0  ${onTop ? "text-white" : "text-black"}`
  }, /* @__PURE__ */ import_react2.default.createElement("section", {
    className: "transition duration-200 flex flex-col sm:flex-row sm:gap-3 font-text font-normal"
  }, /* @__PURE__ */ import_react2.default.createElement("a", {
    className: "transition duration-200 hover:text-blue",
    href: "/stores"
  }, "Stores"), /* @__PURE__ */ import_react2.default.createElement("a", {
    className: "transition duration-200 hover:text-blue",
    href: "/pricing/dry-cleaning"
  }, "Pricing"), /* @__PURE__ */ import_react2.default.createElement("a", {
    className: "transition duration-200 hover:text-blue",
    href: "/contact"
  }, "Contact Us")), /* @__PURE__ */ import_react2.default.createElement("section", {
    className: "flex flex-col sm:flex-row sm:gap-4 sm:items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-1 px-2 rounded-m font-text"
  }, /* @__PURE__ */ import_react2.default.createElement("a", {
    className: "transition duration-200 hover:text-blue"
  }, "Login")), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "bg-blue py-2 px-3 rounded-md text-white font-text hover:bg-blue-100 "
  }, /* @__PURE__ */ import_react2.default.createElement("a", null, "Book Now")))));
};
var header_default = Header;

// app/components/ui/layout.tsx
var Layout = ({ children }) => {
  const location = (0, import_remix2.useLocation)();
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col min-h-[calc(100vh - 64px)] h-auto min-w-screen"
  }, /* @__PURE__ */ import_react3.default.createElement(header_default, {
    pathname: location.pathname
  }), children, /* @__PURE__ */ import_react3.default.createElement(footer_default, null));
};
var layout_default = Layout;

// route:D:\Brightways\remix\app\root.tsx
var links = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Outfit&family=Poppins&family=Inter&display=swap"
    },
    {
      rel: "stylesheet",
      href: tailwind_default
    },
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: global_medium_default,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: global_large_default,
      media: "screen and (min-width: 1024px)"
    }
  ];
};
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(layout_default, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null))));
}

// route:D:\Brightways\remix\app\routes\contact\index.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default2
});
init_react();
var import_react6 = __toESM(require("react"));

// app/components/contact/contact.tsx
init_react();
var import_react5 = __toESM(require("react"));

// app/components/ui/input.tsx
init_react();
var import_react4 = __toESM(require("react"));
var Input = (_a) => {
  var _b = _a, { label, type, placeholder, name } = _b, props = __objRest(_b, ["label", "type", "placeholder", "name"]);
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col gap-1"
  }, /* @__PURE__ */ import_react4.default.createElement("label", {
    className: "font-text font-normal text-[14px]",
    htmlFor: name
  }, label), /* @__PURE__ */ import_react4.default.createElement("input", {
    className: " placeholder:font-text placeholder:font-semibold placeholder:text-black h-10 text-[14px] p-1 px-2 rounded-md outline-none border-none",
    type,
    placeholder,
    name
  }));
};
var input_default = Input;

// app/components/contact/contact.tsx
var Contact = () => {
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex-1 h-[80vh] w-[80%] mx-auto flex flex-col md:flex-row justify-center align-middle min-h-[calc(100vh)]"
  }, /* @__PURE__ */ import_react5.default.createElement("section", {
    className: "hidden md:flex justify-center items-center md:flex-1"
  }, /* @__PURE__ */ import_react5.default.createElement("h1", null, "Image Here")), /* @__PURE__ */ import_react5.default.createElement("form", {
    className: "md:flex-1 flex flex-col gap-5 my-auto"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ import_react5.default.createElement("h1", {
    className: "font-heading font-semibold text-[42px]"
  }, "Contact Us"), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "font-text font-normal text-[16px]"
  }, "Explore the future with us.", /* @__PURE__ */ import_react5.default.createElement("br", null), "Feel free to get in touch.")), /* @__PURE__ */ import_react5.default.createElement(input_default, {
    name: "name",
    label: "Name",
    placeholder: "Enter your name here.",
    type: "text"
  }), /* @__PURE__ */ import_react5.default.createElement(input_default, {
    name: "email",
    label: "Email",
    placeholder: "Enter your Email here.",
    type: "email"
  }), /* @__PURE__ */ import_react5.default.createElement(input_default, {
    name: "message",
    label: "Message",
    placeholder: "Enter your message here.",
    type: "text"
  }), /* @__PURE__ */ import_react5.default.createElement("button", {
    className: "h-10 bg-blue text-white font-text font-semibold text-[14px] rounded-md",
    type: "submit"
  }, "Send Message")));
};
var contact_default = Contact;

// route:D:\Brightways\remix\app\routes\contact\index.tsx
var ContactPage = () => {
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(contact_default, null));
};
var contact_default2 = ContactPage;

// route:D:\Brightways\remix\app\routes\stores\index.tsx
var stores_exports = {};
__export(stores_exports, {
  default: () => stores_default,
  loader: () => loader
});
init_react();
var import_react11 = __toESM(require("react"));

// app/components/stores/container.tsx
init_react();
var import_react8 = __toESM(require("react"));
var import_remix4 = __toESM(require_remix());

// app/components/stores/store.tsx
init_react();
var import_react7 = __toESM(require("react"));
var import_fa = require("react-icons/fa");
var import_bi = require("react-icons/bi");
var import_fi = require("react-icons/fi");
var Store = ({ store }) => {
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex flex-col bg-white p-5 gap-2 rounded-lg hover:shadow-lg transition-shadow duration-500"
  }, /* @__PURE__ */ import_react7.default.createElement("h1", {
    className: "font-heading font-semibold text-black text-[24px] mb-5"
  }, store.name), /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "flex items-center gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react7.default.createElement(import_fa.FaRegAddressBook, null), /* @__PURE__ */ import_react7.default.createElement("p", null, store.address)), /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "flex items-center gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react7.default.createElement(import_fa.FaRegCalendarAlt, null), /* @__PURE__ */ import_react7.default.createElement("p", null, store.openOn)), /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "flex items-center gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react7.default.createElement(import_bi.BiTime, null), /* @__PURE__ */ import_react7.default.createElement("p", null, store.timing)), /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "flex items-center gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react7.default.createElement(import_fi.FiPhoneCall, null), /* @__PURE__ */ import_react7.default.createElement("p", null, store.phoneNumber)), /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "flex items-center gap-2 font-text text-[14px] mt-5"
  }, /* @__PURE__ */ import_react7.default.createElement("button", {
    className: "h-10 w-32 p-2 bg-blue text-white rounded-md px-3"
  }, "Get Direction"), /* @__PURE__ */ import_react7.default.createElement("button", {
    className: "h-10 w-32 p-2 bg-blue text-white rounded-md px-3"
  }, "Call")));
};
var store_default = Store;

// app/components/stores/container.tsx
var Container = () => {
  const { stores } = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "flex flex-col justify-center gap-5 items-center w-screen"
  }, /* @__PURE__ */ import_react8.default.createElement("section", {
    className: "w-[80%] grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-10 py-5"
  }, stores.map((store) => {
    return /* @__PURE__ */ import_react8.default.createElement(store_default, {
      key: store.id,
      store
    });
  })));
};
var container_default = Container;

// app/components/wrappers/infoWrapper.tsx
init_react();
var import_react10 = __toESM(require("react"));

// app/components/ui/info.tsx
init_react();
var import_react9 = __toESM(require("react"));
var Info = ({ heading, subHeading }) => {
  return /* @__PURE__ */ import_react9.default.createElement("section", {
    className: "flex w-[80%] flex-col items-center"
  }, /* @__PURE__ */ import_react9.default.createElement("h1", {
    className: "font-heading text-[32px] text-black text-center font-bold"
  }, heading), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: " bg-blue h-[6px] w-10 rounded-sm"
  }), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "mt-4 font-text text-[16px] text-text-gray text-center"
  }, subHeading));
};
var info_default = Info;

// app/components/wrappers/infoWrapper.tsx
var InfoWrapper = ({ children, heading, subHeading }) => {
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-col items-center gap-[50px] py-[50px] mt-[50px] w-full"
  }, /* @__PURE__ */ import_react10.default.createElement(info_default, {
    heading,
    subHeading
  }), children);
};
var infoWrapper_default = InfoWrapper;

// app/data/data.tsx
init_react();

// public/images/dry-cleaning.png
var dry_cleaning_default = "/build/_assets/dry-cleaning-E25CI4UP.png";

// app/data/data.tsx
var storesData = [{
  id: 1,
  name: "Brightways Drycleaners NIT 1",
  address: "1 J/16 NIT FARIDABAD",
  timing: "10:00 - 9:00",
  phoneNumber: "9810136709",
  openOn: "Mon - Fri"
}, {
  id: 2,
  name: "Brightways Drycleaners NIT 1",
  address: "1 J/16 NIT FARIDABAD",
  timing: "10:00 - 9:00",
  phoneNumber: "9810136709",
  openOn: "Mon - Fri"
}, {
  id: 3,
  name: "Brightways Drycleaners NIT 1",
  address: "1 J/16 NIT FARIDABAD",
  timing: "10:00 - 9:00",
  phoneNumber: "9810136709",
  openOn: "Mon - Fri"
}];
var itemData = [{
  id: 1,
  name: "Blazer",
  price: 200
}, {
  id: 2,
  name: "Blazer",
  price: 200
}, {
  id: 3,
  name: "Blazer",
  price: 200
}, {
  id: 4,
  name: "Blazer",
  price: 200
}];
var categoriesData = [{
  id: 1,
  name: "Formal Wears",
  items: itemData
}, {
  id: 2,
  name: "Formal Wears",
  items: itemData
}, {
  id: 3,
  name: "Formal Wears",
  items: itemData
}, {
  id: 4,
  name: "Formal Wears",
  items: itemData
}];
var servicesData = [{
  id: 1,
  name: "Dry Cleaning",
  short_desc: "For sensitive and soft fabrics",
  image: dry_cleaning_default,
  detailed_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem maximus, dictum lorem nec, tincidunt urna. Fusce rhoncus lacus ante, quis mollis ex tincidunt ac. Sed sit amet tempus orci. ",
  categories: categoriesData
}, {
  id: 2,
  name: "Dry Cleaning",
  short_desc: "For sensitive and soft fabrics",
  image: dry_cleaning_default,
  detailed_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem maximus, dictum lorem nec, tincidunt urna. Fusce rhoncus lacus ante, quis mollis ex tincidunt ac. Sed sit amet tempus orci. ",
  categories: categoriesData
}, {
  id: 3,
  name: "Dry Cleaning",
  short_desc: "For sensitive and soft fabrics",
  image: dry_cleaning_default,
  detailed_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem maximus, dictum lorem nec, tincidunt urna. Fusce rhoncus lacus ante, quis mollis ex tincidunt ac. Sed sit amet tempus orci. ",
  categories: categoriesData
}, {
  id: 4,
  name: "Dry Cleaning",
  short_desc: "For sensitive and soft fabrics",
  image: dry_cleaning_default,
  detailed_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem maximus, dictum lorem nec, tincidunt urna. Fusce rhoncus lacus ante, quis mollis ex tincidunt ac. Sed sit amet tempus orci. ",
  categories: categoriesData
}];
var testimonialData = [{
  id: 1,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}, {
  id: 2,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}, {
  id: 3,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}, {
  id: 4,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}, {
  id: 5,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}];
var processStepData = [{
  id: 1,
  data: "Follow this step to start creating value for your customers"
}, {
  id: 2,
  data: "Follow this step to start creating value for your customers"
}, {
  id: 3,
  data: "Follow this step to start creating value for your customers"
}];
var featuresData = [{
  title: "Customer service on your fingertips",
  desc: "Any change in delivery times or date, or if something goes wrong, we are here. Our customer support team will assist you gladly.",
  img: ""
}, {
  title: "Customer service on your fingertips",
  desc: "Any change in delivery times or date, or if something goes wrong, we are here. Our customer support team will assist you gladly.",
  img: ""
}];

// route:D:\Brightways\remix\app\routes\stores\index.tsx
var loader = async () => {
  return {
    stores: storesData
  };
};
var Index = () => {
  return /* @__PURE__ */ import_react11.default.createElement(infoWrapper_default, {
    heading: "Our Stores",
    subHeading: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
  }, /* @__PURE__ */ import_react11.default.createElement(container_default, null));
};
var stores_default = Index;

// route:D:\Brightways\remix\app\routes\services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => services_default
});
init_react();
var import_react12 = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());
var ServicesPage = () => {
  return /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "mt-[80px]"
  }, /* @__PURE__ */ import_react12.default.createElement("p", null, "Services"), /* @__PURE__ */ import_react12.default.createElement(import_remix5.Outlet, null));
};
var services_default = ServicesPage;

// route:D:\Brightways\remix\app\routes\services\index.tsx
var services_exports2 = {};
__export(services_exports2, {
  default: () => services_default2
});
init_react();
var import_react14 = __toESM(require("react"));

// app/components/services/service.tsx
init_react();
var import_react13 = __toESM(require("react"));
var Service = ({ service }) => {
  return /* @__PURE__ */ import_react13.default.createElement("a", {
    href: `/pricing/${service.name}`,
    className: "w-full md:w-80 p-3 h-24 gap-2 rounded-md flex flex-row items-center bg-white hover:drop-shadow-lg transition-all duration-500 ease-in-out"
  }, /* @__PURE__ */ import_react13.default.createElement("section", {
    className: "flex justify-center opacity-100 items-center overflow-hidden h-[50px] w-[50px]"
  }, /* @__PURE__ */ import_react13.default.createElement("img", {
    className: " h-full w-full",
    src: dry_cleaning_default
  })), /* @__PURE__ */ import_react13.default.createElement("section", {
    className: "flex flex-col gap-[3px] opacity-100"
  }, /* @__PURE__ */ import_react13.default.createElement("p", null, service.name), /* @__PURE__ */ import_react13.default.createElement("p", null, service.short_desc)));
};
var service_default = Service;

// route:D:\Brightways\remix\app\routes\services\index.tsx
var Index2 = () => {
  return /* @__PURE__ */ import_react14.default.createElement("div", null, /* @__PURE__ */ import_react14.default.createElement(service_default, null), /* @__PURE__ */ import_react14.default.createElement(service_default, null), /* @__PURE__ */ import_react14.default.createElement(service_default, null));
};
var services_default2 = Index2;

// route:D:\Brightways\remix\app\routes\pricing.tsx
var pricing_exports = {};
__export(pricing_exports, {
  default: () => pricing_default,
  loader: () => loader2
});
init_react();
var import_react20 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());

// app/components/pricing/costEstimator.tsx
init_react();
var import_react17 = __toESM(require("react"));
var import_react_transition_group = require("react-transition-group");

// app/components/context/cartContext.tsx
init_react();
var import_react15 = __toESM(require("react"));
var CartContext = import_react15.default.createContext(null);
var CartProvider = ({ children }) => {
  const [items, setItems] = import_react15.default.useState([]);
  const [totalCost, setTotalCost] = import_react15.default.useState(0);
  const getTotalCost = () => {
    const cost = items.reduce((prev, curr) => {
      return prev + curr.quantity * curr.item.price;
    }, 0);
    setTotalCost(cost);
  };
  const add = (item) => {
    const index = items.findIndex((prev) => item.id === prev.item.id);
    setItems((prev) => {
      if (index === -1) {
        const currentItem = { quantity: 1, item };
        return [...prev, currentItem];
      } else {
        prev[index].quantity++;
        return [...prev];
      }
    });
  };
  const remove = (id) => {
    const index = items.findIndex((prev) => id === prev.item.id);
    if (index !== -1) {
      setItems((prev) => {
        if (prev[index].quantity > 1) {
          prev[index].quantity--;
          return [...prev];
        } else {
          return prev.filter((item) => item.item.id !== id);
        }
      });
    }
  };
  import_react15.default.useEffect(() => {
    getTotalCost();
  }, [items]);
  const getTotalItems = () => {
    return items.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);
  };
  return /* @__PURE__ */ import_react15.default.createElement(CartContext.Provider, {
    value: { cart: { estimatedCost: totalCost, items }, add, remove, getTotalItems }
  }, children);
};
var cartContext_default = CartProvider;

// app/components/pricing/item.tsx
init_react();
var import_react16 = __toESM(require("react"));
var import_bs2 = require("react-icons/bs");
var import_bi2 = require("react-icons/bi");
var Item = ({ item, operation = "ADD" /* ADD */, classes = "" }) => {
  const { add, remove } = import_react16.default.useContext(CartContext);
  return /* @__PURE__ */ import_react16.default.createElement("div", {
    className: `flex flex-row items-center gap-3 ` + classes
  }, /* @__PURE__ */ import_react16.default.createElement("p", {
    className: "flex-1 font-text text-[16px]"
  }, item.name), /* @__PURE__ */ import_react16.default.createElement("p", {
    className: "font-text text-[16px]"
  }, item.price), operation === "ADD" /* ADD */ && /* @__PURE__ */ import_react16.default.createElement(import_bs2.BsPlusCircle, {
    color: "#2C4EFF",
    onClick: add.bind(null, item)
  }), operation === "SUBTRACT" /* SUBTRACT */ && /* @__PURE__ */ import_react16.default.createElement(import_bi2.BiMinusCircle, {
    color: "#2C4EFF",
    onClick: remove.bind(null, item.id)
  }));
};
var item_default = Item;

// app/components/pricing/costEstimator.tsx
var CostEstimator = ({ open }) => {
  const { cart } = import_react17.default.useContext(CartContext);
  return /* @__PURE__ */ import_react17.default.createElement(import_react_transition_group.CSSTransition, {
    timeout: 200,
    in: open,
    classNames: {
      enter: "h-0",
      enterActive: "h-auto transition duration-[200ms]",
      exit: "h-auto",
      exitActive: "h-0 transition duration-[200ms]"
    },
    unmountOnExit: true
  }, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "fixed flex flex-col gap-5 min-w-[calc(90%-98px)] p-5  bg-white bottom-10 right-24 h-0 animate-grow-vertical"
  }, /* @__PURE__ */ import_react17.default.createElement("p", {
    className: " font-text text-blue text-[18px] font-semibold"
  }, "Cost Estimation"), /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "flex flex-col gap-2"
  }, cart.items.map((cartItem) => {
    return /* @__PURE__ */ import_react17.default.createElement("div", {
      className: "flex gap-2 flex-row justify-between items-center",
      key: cartItem.item.id
    }, /* @__PURE__ */ import_react17.default.createElement("p", null, cartItem.quantity, "x "), /* @__PURE__ */ import_react17.default.createElement(item_default, {
      item: cartItem.item,
      classes: "flex-1",
      operation: "SUBTRACT" /* SUBTRACT */
    }));
  })), cart.items.length === 0 && /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "flex justify-center items-center py-5"
  }, /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "font-text text-[16px]"
  }, "No item added yet.")), /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "py-2 border-t-2 border-t-text-gray flex flex-row justify-between items-center"
  }, /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "font-text text-[16px] font-semibold"
  }, "Total Price"), /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "font-text text-[16px] font-bold"
  }, cart.estimatedCost))));
};
var costEstimator_default = CostEstimator;

// app/components/services/container.tsx
init_react();
var import_react18 = __toESM(require("react"));
var Container2 = ({ services }) => {
  return /* @__PURE__ */ import_react18.default.createElement("section", {
    className: "flex flex-col gap-5"
  }, services.map((service) => {
    return /* @__PURE__ */ import_react18.default.createElement(service_default, {
      key: service.id,
      service
    });
  }));
};
var container_default2 = Container2;

// app/components/ui/cart.tsx
init_react();
var import_react19 = __toESM(require("react"));
var import_bs3 = require("react-icons/bs");
var import_cg = require("react-icons/cg");
var Cart = ({ open, handleOpen }) => {
  const { getTotalItems } = import_react19.default.useContext(CartContext);
  return /* @__PURE__ */ import_react19.default.createElement("section", {
    onClick: handleOpen.bind(null),
    className: " overflow-visible fixed right-10 bottom-10 bg-blue rounded-full h-12 w-12 flex items-center justify-center"
  }, !open && /* @__PURE__ */ import_react19.default.createElement("div", {
    className: "absolute h-6 w-6 flex items-center justify-center right-[-7px] top-[-7px] rounded-full bg-white"
  }, /* @__PURE__ */ import_react19.default.createElement("p", {
    className: "font-text text-[14px] text-blue font-bold"
  }, getTotalItems())), open ? /* @__PURE__ */ import_react19.default.createElement(import_cg.CgClose, {
    color: "#fff"
  }) : /* @__PURE__ */ import_react19.default.createElement(import_bs3.BsBag, {
    color: "#fff"
  }));
};
var cart_default = Cart;

// route:D:\Brightways\remix\app\routes\pricing.tsx
var loader2 = async () => {
  return servicesData;
};
var PricingPage = () => {
  const services = (0, import_remix6.useLoaderData)();
  const [open, setOpen] = import_react20.default.useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return /* @__PURE__ */ import_react20.default.createElement(cartContext_default, null, /* @__PURE__ */ import_react20.default.createElement(infoWrapper_default, {
    heading: "Our Pricing",
    subHeading: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
  }, /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "flex w-[80%] flex-col md:flex-row gap-10"
  }, /* @__PURE__ */ import_react20.default.createElement(container_default2, {
    services
  }), /* @__PURE__ */ import_react20.default.createElement(import_remix6.Outlet, null), /* @__PURE__ */ import_react20.default.createElement(cart_default, {
    open,
    handleOpen
  }), /* @__PURE__ */ import_react20.default.createElement(costEstimator_default, {
    open
  }))));
};
var pricing_default = PricingPage;

// route:D:\Brightways\remix\app\routes\pricing\$service.tsx
var service_exports = {};
__export(service_exports, {
  default: () => service_default3,
  loader: () => loader3
});
init_react();
var import_react23 = __toESM(require("react"));

// app/components/pricing/service.tsx
init_react();
var import_react22 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());

// app/components/pricing/category.tsx
init_react();
var import_react21 = __toESM(require("react"));
var Category = ({ category }) => {
  return /* @__PURE__ */ import_react21.default.createElement("div", {
    className: "flex flex-col gap-3"
  }, /* @__PURE__ */ import_react21.default.createElement("span", {
    className: "font-text text-[18px] text-text-gray text-left font-semibold"
  }, category.name), /* @__PURE__ */ import_react21.default.createElement("section", {
    className: "flex flex-col gap-2"
  }, category.items.map((item) => {
    return /* @__PURE__ */ import_react21.default.createElement(item_default, {
      key: item.id,
      item,
      operation: "ADD" /* ADD */
    });
  })));
};
var category_default = Category;

// app/components/pricing/service.tsx
var Service2 = () => {
  const { service } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ import_react22.default.createElement("div", {
    className: "flex flex-col flex-1 w-auto h-auto gap-2"
  }, /* @__PURE__ */ import_react22.default.createElement("h2", {
    className: "font-heading text-[32px] font-semibold"
  }, service.name), /* @__PURE__ */ import_react22.default.createElement("p", {
    className: "font-text text-[16px]"
  }, service.detailed_desc), /* @__PURE__ */ import_react22.default.createElement("section", {
    className: "flex flex-col gap-8 mt-5"
  }, service.categories.map((category) => {
    return /* @__PURE__ */ import_react22.default.createElement(category_default, {
      key: category.id,
      category
    });
  })));
};
var service_default2 = Service2;

// route:D:\Brightways\remix\app\routes\pricing\$service.tsx
var loader3 = async ({ params }) => {
  const name = params.service;
  const service = servicesData.filter((service2) => service2.name === name);
  return {
    service: service[0]
  };
};
var SingleService = () => {
  return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement(service_default2, null));
};
var service_default3 = SingleService;

// route:D:\Brightways\remix\app\routes\pricing\index.tsx
var pricing_exports2 = {};
__export(pricing_exports2, {
  default: () => pricing_default2
});
init_react();
var import_react24 = __toESM(require("react"));
var Index3 = () => {
  return /* @__PURE__ */ import_react24.default.createElement("div", {
    className: "flex-1 flex justify-center items-center"
  }, /* @__PURE__ */ import_react24.default.createElement("p", null, "No Service Selected"));
};
var pricing_default2 = Index3;

// route:D:\Brightways\remix\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index4,
  loader: () => loader4
});
init_react();
var import_react33 = __toESM(require("react"));

// app/components/home/featuresList.tsx
init_react();
var import_react27 = __toESM(require("react"));
var import_remix8 = __toESM(require_remix());

// app/components/features/feature.tsx
init_react();
var import_react26 = __toESM(require("react"));

// app/hooks/useInView.tsx
init_react();
var import_react25 = __toESM(require("react"));
var useInView = (options, once = true) => {
  const ref = import_react25.default.useRef(null);
  const [inView, setInView] = import_react25.default.useState(false);
  const callback = async (entries) => {
    const [entry2] = entries;
    setInView((prev) => {
      if (prev && once) {
        return true;
      } else {
        return entry2.isIntersecting;
      }
    });
  };
  import_react25.default.useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (ref.current)
      observer.observe(ref.current);
    return () => {
      if (ref.current)
        observer.unobserve(ref.current);
    };
  }, [ref]);
  return { inView, ref };
};
var useInView_default = useInView;

// app/components/features/feature.tsx
var Feature = ({ feature, options }) => {
  const { ref, inView } = useInView_default(options);
  return /* @__PURE__ */ import_react26.default.createElement("div", {
    ref,
    className: `transition duration-500 even:delay-100 odd:delay-300 flex flex-col-reverse sm:flex-row sm:even:flex-row-reverse ${inView ? " opacity-100 scale-100" : "opacity-0 scale-0"} `
  }, /* @__PURE__ */ import_react26.default.createElement("section", {
    className: `flex flex-col flex-1 items-start justify-center gap-3`
  }, /* @__PURE__ */ import_react26.default.createElement("p", {
    className: " text-text-gray text-[14px] font-bold"
  }, "FAST CUSTOMER SUPPORT"), /* @__PURE__ */ import_react26.default.createElement("h1", {
    className: "text-[32px] font-heading leading-[44px] font-semibold"
  }, feature.title), /* @__PURE__ */ import_react26.default.createElement("p", {
    className: "text-[16px] font-text font-normal leading-6"
  }, feature.desc), /* @__PURE__ */ import_react26.default.createElement("button", {
    className: " transition duration-300 delay-100 hover:bg-hover-black bg-black rounded-md font-text px-3 py-2 text-white mt-2"
  }, "Contact Us")), /* @__PURE__ */ import_react26.default.createElement("section", {
    className: "flex-1 flex justify-center items-center"
  }, /* @__PURE__ */ import_react26.default.createElement("p", null, "Image Here")));
};
var feature_default = Feature;

// app/components/home/featuresList.tsx
var FeaturesList = () => {
  const { features } = (0, import_remix8.useLoaderData)();
  const parentRef = import_react27.default.useRef(null);
  return /* @__PURE__ */ import_react27.default.createElement("div", {
    ref: parentRef,
    className: "flex flex-col w-[80%] min-h-[100vh] h-auto gap-40 my-20 overflow-hidden"
  }, features.data.map((feature) => {
    return /* @__PURE__ */ import_react27.default.createElement(feature_default, {
      key: Math.random() * 100,
      feature,
      options: { threshold: 0.2, root: parentRef == null ? void 0 : parentRef.current }
    });
  }));
};
var featuresList_default = FeaturesList;

// app/components/home/landingPage.tsx
init_react();
var import_react28 = __toESM(require("react"));

// public/images/lpbg.png
var lpbg_default = "/build/_assets/lpbg-QZ2BVTLB.png";

// app/components/home/landingPage.tsx
var LandingPage = () => {
  return /* @__PURE__ */ import_react28.default.createElement("div", {
    className: "relative flex justify-center items-center w-[100%] min-h-auto min-h-[100vh] overflow-hidden"
  }, /* @__PURE__ */ import_react28.default.createElement("section", {
    className: "animate-fade-out opacity-0 p-4 flex flex-col sm:items-center gap-4 text-white sm:w-[60%] sm:pt-4 sm:justify-center"
  }, /* @__PURE__ */ import_react28.default.createElement("p", {
    className: "text-[42px] md:text-center text-blue font-semibold font-heading sm:text-white mx-auto overflow-hidden"
  }, "Most Trusted and Reliable Drycleaner In Faridabad"), /* @__PURE__ */ import_react28.default.createElement("p", {
    className: "text-xl text-black sm:text-white font-text"
  }, "Here you can put a short description about your project."), /* @__PURE__ */ import_react28.default.createElement("div", {
    className: "flex flex-row gap-3 my-2"
  }, /* @__PURE__ */ import_react28.default.createElement("button", {
    className: " bg-blue p-3 rounded-lg text-white font-text"
  }, "Book now"), /* @__PURE__ */ import_react28.default.createElement("button", {
    className: "bg-white text-blue p-3 rounded-lg sm:text-blue font-text"
  }, "See how it's work"))), /* @__PURE__ */ import_react28.default.createElement("section", {
    className: "hidden absolute sm:block w-full h-full z-[-1] overflow-hidden"
  }, /* @__PURE__ */ import_react28.default.createElement("img", {
    src: lpbg_default,
    alt: "pic",
    className: "w-full h-full sm:min-h-[calc(100%-200px)]"
  })));
};
var landingPage_default = LandingPage;

// app/components/home/process.tsx
init_react();
var import_react30 = __toESM(require("react"));
var import_remix9 = __toESM(require_remix());

// app/components/process/step.tsx
init_react();
var import_react29 = __toESM(require("react"));
var Step = ({ step, options }) => {
  const { ref, inView } = useInView_default(options);
  return /* @__PURE__ */ import_react29.default.createElement("section", {
    ref,
    key: step.id,
    className: `hover:-translate-y-2 transition duration-500 delay-[${step.id * 100 + 200}ms] flex-1 border-b-2 border-text-gray last:border-none ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`
  }, /* @__PURE__ */ import_react29.default.createElement("h1", {
    className: "font-heading text-[32px] font-bold"
  }, "Step ", step.id), /* @__PURE__ */ import_react29.default.createElement("p", {
    className: "font-text text-[14px] font-normal"
  }, step.data));
};
var step_default = Step;

// app/components/home/process.tsx
var Process = () => {
  const { process: process2 } = (0, import_remix9.useLoaderData)();
  const parentRef = import_react30.default.useRef(null);
  const { ref, inView } = useInView_default({ threshold: 0.25 });
  return /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "relative min-h-[100vh] min-w-[100%] bg-inherit flex"
  }, /* @__PURE__ */ import_react30.default.createElement("section", {
    ref,
    className: `w-[80%] min-h-[80vh] bg-white flex flex-col sm:flex-row m-auto p-10 gap-10 transition-opacity duration-500`
  }, /* @__PURE__ */ import_react30.default.createElement("div", {
    className: `transition duration-500 delay-[100ms] flex-1 flex flex-col ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100%]"}`
  }, /* @__PURE__ */ import_react30.default.createElement("section", {
    className: "flex-1 flex justify-center items-center"
  }, /* @__PURE__ */ import_react30.default.createElement("p", null, "Image Here")), /* @__PURE__ */ import_react30.default.createElement("section", {
    className: "flex-1 flex flex-col gap-4"
  }, /* @__PURE__ */ import_react30.default.createElement("h1", {
    className: "font-heading text-[42px] font-bold"
  }, process2.heading), /* @__PURE__ */ import_react30.default.createElement("h1", {
    className: "font-text text-[14px] font-normal"
  }, process2.sub_heading))), /* @__PURE__ */ import_react30.default.createElement("div", {
    ref: parentRef,
    className: `transition duration-500 delay-[200ms] flex-1 flex flex-col gap-10 ${inView ? "opacity-100" : "opacity-0"}`
  }, process2.data.map((step) => {
    return /* @__PURE__ */ import_react30.default.createElement(step_default, {
      step,
      key: step.id,
      options: { threshold: 0.5, root: parentRef == null ? void 0 : parentRef.current }
    });
  }))), /* @__PURE__ */ import_react30.default.createElement("span", {
    className: "absolute w-[75%] h-[80vh] m-auto left-0 right-0 bottom-0 top-0 bg-[#F2F2F2] z-[-1] translate-y-1 shadow-lg"
  }));
};
var process_default = Process;

// app/components/home/testimonialsList.tsx
init_react();
var import_react32 = __toESM(require("react"));
var import_remix10 = __toESM(require_remix());

// app/components/Testimonials/testimonial.tsx
init_react();
var import_react31 = __toESM(require("react"));
var Testimonial = ({ testimonial, options }) => {
  const { ref, inView } = useInView_default(options);
  return /* @__PURE__ */ import_react31.default.createElement("div", {
    ref,
    className: `hover:shadow-lg hover:translate-y-3 transition duration-500 delay-100 min-w-[250px] w-[250px] min-h-[250px] h-[250px] bg-white rounded-lg flex flex-col items-center justify-center p-4 ${inView ? " opacity-100 scale-100" : "opacity-0 scale-0"} `
  }, /* @__PURE__ */ import_react31.default.createElement("p", {
    className: "text-[14px] font-text font-semibold mb-3 min-h-[100px] h-[100px]"
  }, '"', testimonial.review, '"'), /* @__PURE__ */ import_react31.default.createElement("p", {
    className: "text-[16px] font-text font-extrabold"
  }, testimonial.name), /* @__PURE__ */ import_react31.default.createElement("p", {
    className: "text-text-gray text-[14px] font-normal"
  }, testimonial.source), /* @__PURE__ */ import_react31.default.createElement("a", {
    href: `/reviews/${testimonial.id}`
  }, "Read Full Review"));
};
var testimonial_default = Testimonial;

// app/components/home/testimonialsList.tsx
var TestimonialsList = () => {
  const { testimonials } = (0, import_remix10.useLoaderData)();
  const parentRef = import_react32.default.useRef(null);
  const { ref, inView } = useInView_default({ threshold: 0.5 });
  return /* @__PURE__ */ import_react32.default.createElement("div", {
    ref,
    className: "flex flex-col w-[80%] my-[50px]"
  }, /* @__PURE__ */ import_react32.default.createElement("h1", {
    className: `transition duration-500 delay-100 text-center font-heading font-bold text-[48px] ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} `
  }, testimonials.heading), /* @__PURE__ */ import_react32.default.createElement("p", {
    className: `transition duration-500 delay-300 text-center mt-3 font-text text-[16px] ${inView ? "opacity-100" : "opacity-0"}`
  }, testimonials.sub_heading), /* @__PURE__ */ import_react32.default.createElement("section", {
    ref: parentRef,
    className: "flex flex-col items-center max-h-[100vh] sm:flex-row py-[50px] h-auto gap-10 overflow-x-scroll no-scrollbar"
  }, testimonials.data.map((testimonial) => {
    return /* @__PURE__ */ import_react32.default.createElement(testimonial_default, {
      options: { threshold: 0.25, root: parentRef == null ? void 0 : parentRef.current },
      key: Math.random() * 100,
      testimonial
    });
  })));
};
var testimonialsList_default = TestimonialsList;

// route:D:\Brightways\remix\app\routes\index.tsx
async function loader4() {
  const data = {
    testimonials: {
      heading: "Testimonials",
      sub_heading: "People love what we do and we want to let your know",
      data: testimonialData
    },
    process: {
      heading: "How it's works",
      sub_heading: "Wow this project is so awesome! Let me tell you why right here, right now.",
      data: processStepData
    },
    features: {
      data: featuresData
    }
  };
  return data;
}
function Index4() {
  return /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "h-auto relative z-20 w-screen overflow-x-hidden flex flex-col items-center scroll-smooth"
  }, /* @__PURE__ */ import_react33.default.createElement(landingPage_default, null), /* @__PURE__ */ import_react33.default.createElement(featuresList_default, null), /* @__PURE__ */ import_react33.default.createElement(process_default, null), /* @__PURE__ */ import_react33.default.createElement(testimonialsList_default, null));
}

// route:D:\Brightways\remix\app\routes\auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default
});
init_react();
var import_react34 = __toESM(require("react"));
var import_remix11 = __toESM(require_remix());
var Auth = () => {
  return /* @__PURE__ */ import_react34.default.createElement("div", null, /* @__PURE__ */ import_react34.default.createElement("h1", null, "Auth"), /* @__PURE__ */ import_react34.default.createElement(import_remix11.Outlet, null));
};
var auth_default = Auth;

// route:D:\Brightways\remix\app\routes\auth\register.tsx
var register_exports = {};
__export(register_exports, {
  default: () => register_default
});
init_react();
var import_react35 = __toESM(require("react"));
var Register = () => {
  return /* @__PURE__ */ import_react35.default.createElement("div", null, "Register");
};
var register_default = Register;

// route:D:\Brightways\remix\app\routes\auth\login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => login_default
});
init_react();
var import_react36 = __toESM(require("react"));
var Login = () => {
  return /* @__PURE__ */ import_react36.default.createElement("div", null, "Login");
};
var login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "b4b7d156", "entry": { "module": "/build/entry.client-TBDLZJXS.js", "imports": ["/build/_shared/chunk-KROZOGSQ.js", "/build/_shared/chunk-2TPFPJRA.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-YML4VVQP.js", "imports": ["/build/_shared/chunk-PPI3WSW7.js", "/build/_shared/chunk-VBXVBJZG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth": { "id": "routes/auth", "parentId": "root", "path": "auth", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth-OJZHJZHC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "routes/auth", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-PWVPCKFR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/register": { "id": "routes/auth/register", "parentId": "routes/auth", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/register-UB3Z3NXU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact/index": { "id": "routes/contact/index", "parentId": "root", "path": "contact", "index": true, "caseSensitive": void 0, "module": "/build/routes/contact/index-62GUSOUA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UJJHZASL.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pricing": { "id": "routes/pricing", "parentId": "root", "path": "pricing", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pricing-CVY5PWF7.js", "imports": ["/build/_shared/chunk-INNLCKGY.js", "/build/_shared/chunk-2GNHIGYG.js", "/build/_shared/chunk-AN5BQVJK.js", "/build/_shared/chunk-3PAGGDBD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pricing/$service": { "id": "routes/pricing/$service", "parentId": "routes/pricing", "path": ":service", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pricing/$service-7KHKVD6L.js", "imports": ["/build/_shared/chunk-PPI3WSW7.js", "/build/_shared/chunk-VBXVBJZG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pricing/index": { "id": "routes/pricing/index", "parentId": "routes/pricing", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/pricing/index-D2DF2UY4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services": { "id": "routes/services", "parentId": "root", "path": "services", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services-I2E2BJFP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services/index": { "id": "routes/services/index", "parentId": "routes/services", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/services/index-WE7S5ZYR.js", "imports": ["/build/_shared/chunk-2GNHIGYG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/stores/index": { "id": "routes/stores/index", "parentId": "root", "path": "stores", "index": true, "caseSensitive": void 0, "module": "/build/routes/stores/index-CQIBTFLY.js", "imports": ["/build/_shared/chunk-INNLCKGY.js", "/build/_shared/chunk-3PAGGDBD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B4B7D156.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "root",
    path: "contact",
    index: true,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/stores/index": {
    id: "routes/stores/index",
    parentId: "root",
    path: "stores",
    index: true,
    caseSensitive: void 0,
    module: stores_exports
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/services/index": {
    id: "routes/services/index",
    parentId: "routes/services",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: services_exports2
  },
  "routes/pricing": {
    id: "routes/pricing",
    parentId: "root",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: pricing_exports
  },
  "routes/pricing/$service": {
    id: "routes/pricing/$service",
    parentId: "routes/pricing",
    path: ":service",
    index: void 0,
    caseSensitive: void 0,
    module: service_exports
  },
  "routes/pricing/index": {
    id: "routes/pricing/index",
    parentId: "routes/pricing",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: pricing_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/auth/register": {
    id: "routes/auth/register",
    parentId: "routes/auth",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "routes/auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6RDpcXEJyaWdodHdheXNcXHJlbWl4XFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3VpL2xheW91dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvZm9vdGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9sb2dvLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9oZWFkZXIudHN4IiwgInJvdXRlOkQ6XFxCcmlnaHR3YXlzXFxyZW1peFxcYXBwXFxyb3V0ZXNcXGNvbnRhY3RcXGluZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3VpL2lucHV0LnRzeCIsICJyb3V0ZTpEOlxcQnJpZ2h0d2F5c1xccmVtaXhcXGFwcFxccm91dGVzXFxzdG9yZXNcXGluZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zdG9yZXMvY29udGFpbmVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zdG9yZXMvc3RvcmUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3dyYXBwZXJzL2luZm9XcmFwcGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9pbmZvLnRzeCIsICIuLi9hcHAvZGF0YS9kYXRhLnRzeCIsICJyb3V0ZTpEOlxcQnJpZ2h0d2F5c1xccmVtaXhcXGFwcFxccm91dGVzXFxzZXJ2aWNlcy50c3giLCAicm91dGU6RDpcXEJyaWdodHdheXNcXHJlbWl4XFxhcHBcXHJvdXRlc1xcc2VydmljZXNcXGluZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlLnRzeCIsICJyb3V0ZTpEOlxcQnJpZ2h0d2F5c1xccmVtaXhcXGFwcFxccm91dGVzXFxwcmljaW5nLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wcmljaW5nL2Nvc3RFc3RpbWF0b3IudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2NvbnRleHQvY2FydENvbnRleHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3ByaWNpbmcvaXRlbS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2VydmljZXMvY29udGFpbmVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9jYXJ0LnRzeCIsICJyb3V0ZTpEOlxcQnJpZ2h0d2F5c1xccmVtaXhcXGFwcFxccm91dGVzXFxwcmljaW5nXFwkc2VydmljZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvcHJpY2luZy9zZXJ2aWNlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wcmljaW5nL2NhdGVnb3J5LnRzeCIsICJyb3V0ZTpEOlxcQnJpZ2h0d2F5c1xccmVtaXhcXGFwcFxccm91dGVzXFxwcmljaW5nXFxpbmRleC50c3giLCAicm91dGU6RDpcXEJyaWdodHdheXNcXHJlbWl4XFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvbWUvZmVhdHVyZXNMaXN0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mZWF0dXJlcy9mZWF0dXJlLnRzeCIsICIuLi9hcHAvaG9va3MvdXNlSW5WaWV3LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL2xhbmRpbmdQYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL3Byb2Nlc3MudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3Byb2Nlc3Mvc3RlcC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaG9tZS90ZXN0aW1vbmlhbHNMaXN0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9UZXN0aW1vbmlhbHMvdGVzdGltb25pYWwudHN4IiwgInJvdXRlOkQ6XFxCcmlnaHR3YXlzXFxyZW1peFxcYXBwXFxyb3V0ZXNcXGF1dGgudHN4IiwgInJvdXRlOkQ6XFxCcmlnaHR3YXlzXFxyZW1peFxcYXBwXFxyb3V0ZXNcXGF1dGhcXHJlZ2lzdGVyLnRzeCIsICJyb3V0ZTpEOlxcQnJpZ2h0d2F5c1xccmVtaXhcXGFwcFxccm91dGVzXFxhdXRoXFxsb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJEOlxcXFxCcmlnaHR3YXlzXFxcXHJlbWl4XFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkQ6XFxcXEJyaWdodHdheXNcXFxccmVtaXhcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkQ6XFxcXEJyaWdodHdheXNcXFxccmVtaXhcXFxcYXBwXFxcXHJvdXRlc1xcXFxjb250YWN0XFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJEOlxcXFxCcmlnaHR3YXlzXFxcXHJlbWl4XFxcXGFwcFxcXFxyb3V0ZXNcXFxcc3RvcmVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJEOlxcXFxCcmlnaHR3YXlzXFxcXHJlbWl4XFxcXGFwcFxcXFxyb3V0ZXNcXFxcc2VydmljZXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkQ6XFxcXEJyaWdodHdheXNcXFxccmVtaXhcXFxcYXBwXFxcXHJvdXRlc1xcXFxzZXJ2aWNlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiRDpcXFxcQnJpZ2h0d2F5c1xcXFxyZW1peFxcXFxhcHBcXFxccm91dGVzXFxcXHByaWNpbmcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXEJyaWdodHdheXNcXFxccmVtaXhcXFxcYXBwXFxcXHJvdXRlc1xcXFxwcmljaW5nXFxcXCRzZXJ2aWNlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJEOlxcXFxCcmlnaHR3YXlzXFxcXHJlbWl4XFxcXGFwcFxcXFxyb3V0ZXNcXFxccHJpY2luZ1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiRDpcXFxcQnJpZ2h0d2F5c1xcXFxyZW1peFxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJEOlxcXFxCcmlnaHR3YXlzXFxcXHJlbWl4XFxcXGFwcFxcXFxyb3V0ZXNcXFxcYXV0aC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkQ6XFxcXEJyaWdodHdheXNcXFxccmVtaXhcXFxcYXBwXFxcXHJvdXRlc1xcXFxhdXRoXFxcXHJlZ2lzdGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiRDpcXFxcQnJpZ2h0d2F5c1xcXFxyZW1peFxcXFxhcHBcXFxccm91dGVzXFxcXGF1dGhcXFxcbG9naW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jb250YWN0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb250YWN0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9zdG9yZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N0b3Jlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdG9yZXNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zZXJ2aWNlc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2VydmljZXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3NlcnZpY2VzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZXJ2aWNlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NlcnZpY2VzXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJpY2luZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJpY2luZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcmljaW5nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9wcmljaW5nLyRzZXJ2aWNlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcmljaW5nLyRzZXJ2aWNlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcHJpY2luZ1wiLFxuICAgICAgcGF0aDogXCI6c2VydmljZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJpY2luZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJpY2luZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3ByaWNpbmdcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGhcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvcmVnaXN0ZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvcmVnaXN0ZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hdXRoXCIsXG4gICAgICBwYXRoOiBcInJlZ2lzdGVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2F1dGhcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvY2F0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gXCIuL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgZ2xvYmFsTWVkaXVtU3R5bGVzVXJsIGZyb20gXCIuL3N0eWxlcy9nbG9iYWwtbWVkaXVtLmNzc1wiO1xuaW1wb3J0IGdsb2JhbExhcmdlU3R5bGVzVXJsIGZyb20gXCIuL3N0eWxlcy9nbG9iYWwtbGFyZ2UuY3NzXCI7XG5pbXBvcnQgdGFpbFdpbmRTdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvdWkvbGF5b3V0XCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6IFwicHJlY29ubmVjdFwiLFxuICAgICAgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwicHJlY29ubmVjdFwiLFxuICAgICAgaHJlZjogXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NjAwJmZhbWlseT1PdXRmaXQmZmFtaWx5PVBvcHBpbnMmZmFtaWx5PUludGVyJmRpc3BsYXk9c3dhcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IHRhaWxXaW5kU3R5bGVzLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IGdsb2JhbFN0eWxlc1VybCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBnbG9iYWxNZWRpdW1TdHlsZXNVcmwsXG4gICAgICBtZWRpYTogXCJwcmludCwgKG1pbi13aWR0aDogNjQwcHgpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogZ2xvYmFsTGFyZ2VTdHlsZXNVcmwsXG4gICAgICBtZWRpYTogXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweClcIixcbiAgICB9LFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZW1peCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcclxuXHJcbmNvbnN0IExheW91dCA6IFJlYWN0LkZDID0gKHtjaGlsZHJlbn0pID0+IHtcclxuXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWluLWgtW2NhbGMoMTAwdmggLSA2NHB4KV0gaC1hdXRvIG1pbi13LXNjcmVlbic+XHJcbiAgICAgICAgPEhlYWRlciBwYXRobmFtZT17bG9jYXRpb24ucGF0aG5hbWV9IC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxGb290ZXIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCAiaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4vbG9nbydcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctWzEwMCVdIG1pbi1oLVsyMDBweF0gYmctYmx1ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC1hdXRvIGgtYXV0byAgZ2FwLTEwIHB5LVszMHB4XSc+XHJcbiAgICAgICA8bWFpbiBjbGFzc05hbWU9J3ctWzgwJV0gZ2FwLTEwIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTQgJz5cclxuICAgICAgXHJcbiAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTMgZm9udC1bMTRweF0gIHRleHQtd2hpdGUgZm9udC10ZXh0Jz5cclxuICAgICAgICAgIDxMb2dvIGNvbG9yPSd3aGl0ZScgLz5cclxuICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSB0dXJwaXMgbGlndWxhLCBwaGFyZXRyYSBzaXQgYW1ldCB1cm5hIG5vbiwgdGVtcG9yIHRpbmNpZHVudCBkaWFtLiBOdW5jIGFjIHBoYXJldHJhIHR1cnBpcy48L3A+XHJcbiAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgZm9udC1zZW1pYm9sZCBnYXAtMyBmb250LVsxNHB4XSAgdGV4dC13aGl0ZSBmb250LXRleHQnPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVsxMnB4XSBmb250LW5vcm1hbCBmb250LWhlYWRpbmcnPk91ciBTZXJ2aWNlPC9wPlxyXG4gICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBmb250LXNlbWlib2xkIGdhcC0zIGZvbnQtWzE0cHhdICB0ZXh0LXdoaXRlIGZvbnQtdGV4dCc+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtWzEycHhdIGZvbnQtbm9ybWFsIGZvbnQtaGVhZGluZyc+Rm9sbG93IFVzPC9wPlxyXG4gICAgICAgICAgPGE+RmFjZWJvb2s8L2E+XHJcbiAgICAgICAgICA8YT5GYWNlYm9vazwvYT5cclxuICAgICAgICAgIDxhPkZhY2Vib29rPC9hPlxyXG4gICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGZvbnQtc2VtaWJvbGQgZ2FwLTMgZm9udC1bMTRweF0gIHRleHQtd2hpdGUgZm9udC10ZXh0Jz5cclxuICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtWzEycHhdIGZvbnQtbm9ybWFsIGZvbnQtaGVhZGluZyc+Q29tcGFueTwvcD5cclxuICAgICAgICAgICA8YT5Qcml2YWN5IFBvbGljeTwvYT5cclxuICAgICAgICAgICA8YT5UZXJtcyBPZiBTZXJ2aWNlPC9hPlxyXG4gICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxudHlwZSBMb2dvUHJvcHMgPSB7XHJcbiAgY29sb3I/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ286IFJlYWN0LkZDPExvZ29Qcm9wcz4gPSAoe2NvbG9yID0gJyMyQzRFRkYnfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiOTNcIiBoZWlnaHQ9XCIxOVwiIHZpZXdCb3g9XCIwIDAgOTMgMTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuPHBhdGggZD1cIk0wLjIwMjIzNCAyLjAzMDU4QzEuOTI5OTMgMS41NzIxNCAzLjQzNTc4IDEuMzQyMDEgNC43MTk3OCAxLjM0MDE5QzcuNDY3NzggMS4zMzYzIDguODQyNCAyLjI4ODM2IDguODQzNjQgNC4xOTYzNkM4Ljg0NDQgNS4zNjAzNiA4LjI5ODk4IDYuMjQ5MTMgNy4yMDczOCA2Ljg2MjY4QzcuOTM5NSA3LjA0MTY0IDguNTQ1NzMgNy4zODg3OCA5LjAyNjA2IDcuOTA0MUM5LjUwNjM5IDguNDA3NDIgOS43NDY4IDkuMDQzMDggOS43NDczMSA5LjgxMTA4QzkuNzQ4MjQgMTEuMjUxMSA5LjIxNDk3IDEyLjM2NzggOC4xNDc0OSAxMy4xNjE0QzcuMDggMTMuOTQyOSA1Ljc2MDI1IDE0LjMzNDcgNC4xODgyNiAxNC4zMzdDMi42MTYyNiAxNC4zMzkyIDEuMjU0MDYgMTQuMDI5MSAwLjEwMTY1IDEzLjQwNjdDMC40NzI4MDQgMTIuMTEwMiAwLjY1NzY2NiAxMC4zNjM5IDAuNjU2MjM1IDguMTY3OTVDMC42NTQ3OTUgNS45NTk5NSAwLjUwMzQ2MiAzLjkxNDE2IDAuMjAyMjM0IDIuMDMwNThaTTIuOTI2OTkgMTIuMzk0N0MzLjQ1NTEgMTIuNTYyIDMuOTgzMTUgMTIuNjQ1MiA0LjUxMTE1IDEyLjY0NDVDNS4zMzkxNSAxMi42NDMzIDYuMDIzMDIgMTIuNDM4NCA2LjU2Mjc1IDEyLjAyOTZDNy4xMDI0OCAxMS42MDg4IDcuMzcyMDkgMTEuMDIwNCA3LjM3MTYgMTAuMjY0NEM3LjM3MDY2IDguODI0NDUgNi41OTAxOSA4LjEwNTU1IDUuMDMwMiA4LjEwNzc2QzQuMjg2MiA4LjEwODgxIDMuNTMwMyA4LjI2NTg4IDIuNzYyNSA4LjU3ODk3QzIuNzYzMjkgOS43OTA5NyAyLjgxODEyIDExLjA2MjkgMi45MjY5OSAxMi4zOTQ3Wk0yLjc0MzQ3IDYuOTk0OTlDMi45MTE0NSA2Ljk1ODc1IDMuMTU3NDIgNi45MTY0MSAzLjQ4MTM5IDYuODY3OTVDMy44MTczNiA2LjgxOTQ3IDQuMDc1MzMgNi43NzcxMSA0LjI1NTMgNi43NDA4NUM0LjQzNTI4IDYuNzA0NiA0LjY1NzI1IDYuNjUwMjggNC45MjEyIDYuNTc3OTFDNS4xOTcxNSA2LjUwNTUyIDUuNDA3MSA2LjQyMTIyIDUuNTUxMDMgNi4zMjUwMkM1LjcwNjk2IDYuMjE2OCA1Ljg2Mjg4IDYuMDg0NTggNi4wMTg3NyA1LjkyODM2QzYuMzE4NTggNS42Mjc5MyA2LjQ2ODI5IDUuMTg5NzIgNi40Njc5MiA0LjYxMzcyQzYuNDY3MTkgMy40OTc3MiA1LjgwMDgzIDIuOTQwNjYgNC40Njg4MyAyLjk0MjU1QzQuMDM2ODMgMi45NDMxNiAzLjUwODg4IDMuMDE1OTEgMi44ODQ5NyAzLjE2MDc5QzIuNzkwNTcgNS42MjA5MiAyLjc0MzQxIDYuODk4OTkgMi43NDM0NyA2Ljk5NDk5Wk0xNC4wNDc0IDEzLjk5OUMxMy42NzU1IDE0LjE0MzUgMTMuMjc5NSAxNC4yMTYxIDEyLjg1OTUgMTQuMjE2N0MxMi40Mzk1IDE0LjIxNzMgMTIuMDk3NSAxNC4xMjE4IDExLjgzMzMgMTMuOTMwMUMxMS41ODEyIDEzLjcyNjUgMTEuNDU1IDEzLjQ1MDcgMTEuNDU0OCAxMy4xMDI3QzExLjQ1NDYgMTIuNzQyNyAxMS41MDgyIDEyLjA5NDYgMTEuNjE1NSAxMS4xNTg0QzExLjcyMjkgMTAuMjIyMyAxMS43NzYzIDkuMzE2MjEgMTEuNzc1OCA4LjQ0MDIxQzExLjc3NTIgNy41NTIyMSAxMS42MzY1IDYuNTE0NDEgMTEuMzU5NyA1LjMyNjhDMTEuNzQzNiA1LjE4MjI2IDEyLjEyMTYgNS4xMDk3MiAxMi40OTM2IDUuMTA5MkMxMi44NjU2IDUuMTA4NjcgMTMuMTgzNyA1LjIzNDIyIDEzLjQ0NzggNS40ODU4NUMxMy43MjQgNS43Mzc0NiAxMy44NjIyIDYuMDczMjYgMTMuODYyNSA2LjQ5MzI2QzEzLjg2MjYgNi43MDkyNiAxMy44MjY5IDcuMDMzMzEgMTMuNzU1MSA3LjQ2NTQxQzEzLjY4MzQgNy44ODU1MSAxMy42NDE2IDguMjAzNTcgMTMuNjI5OCA4LjQxOTU5QzE0LjA5NzEgNy4zNTA5MyAxNC42NDg1IDYuNTE2MTUgMTUuMjg0MSA1LjkxNTI1QzE1LjkzMTcgNS4zMDIzMyAxNi41NzM1IDQuOTk1NDIgMTcuMjA5NSA0Ljk5NDUyQzE3LjY1MzUgNC45OTM4OSAxOC4wMDc2IDUuMTQ5MzkgMTguMjcxOCA1LjQ2MTAyQzE4LjUzNiA1Ljc3MjY1IDE4LjY2ODMgNi4xNjg0NiAxOC42Njg2IDYuNjQ4NDZDMTguNjY4OSA3LjExNjQ2IDE4LjU0OTIgNy41MDA2MyAxOC4zMDk0IDcuODAwOTdDMTguMDY5NSA4LjA4OTMxIDE3Ljc2OTYgOC4yMzM3MyAxNy40MDk2IDguMjM0MjRDMTcuMDYxNiA4LjIzNDczIDE2Ljc3OTYgOC4xOTkxMyAxNi41NjM2IDguMTI3NDRDMTYuNTk5NSA3Ljk4MzM5IDE2LjYxNzQgNy44NTEzNiAxNi42MTczIDcuNzMxMzZDMTYuNjE3IDcuMjM5MzYgMTYuNDQyOCA2Ljk5MzYxIDE2LjA5NDggNi45OTQxQzE1LjU2NjggNi45OTQ4NSAxNS4wNjkyIDcuNTI5NTUgMTQuNjAxOSA4LjU5ODIyQzE0LjE0NjYgOS42NTQ4NiAxMy44NDEyIDEwLjY0NTMgMTMuNjg1OCAxMS41Njk1QzEzLjc0NjQgMTIuNDY5NCAxMy44NjY5IDEzLjI3OTMgMTQuMDQ3NCAxMy45OTlaTTE5LjY5NDMgNS4yNjEwMUMyMC4wNzgyIDUuMTUyNDYgMjAuNDYyMiA1LjA5NzkyIDIwLjg0NjIgNS4wOTczOEMyMS4yNDIyIDUuMDk2ODIgMjEuNTc4MiA1LjIxNjM0IDIxLjg1NDQgNS40NTU5NUMyMi4xMzA1IDUuNjk1NTYgMjIuMjY4NyA2LjAwNzM3IDIyLjI2OSA2LjM5MTM3QzIyLjI2OTIgNi43NjMzNiAyMi4yMDM3IDcuNDE3NDYgMjIuMDcyMyA4LjM1MzY0QzIxLjk1MjkgOS4yNzc4MSAyMS44OTMzIDkuOTk3OSAyMS44OTM3IDEwLjUxMzlDMjEuODk0NiAxMS44NTc5IDIyLjAyMTMgMTMuMDE1NyAyMi4yNzM5IDEzLjk4NzRDMjEuOTAyIDE0LjEzMTkgMjEuNTAwMSAxNC4yMDQ1IDIxLjA2ODEgMTQuMjA1MUMyMC42MzYxIDE0LjIwNTcgMjAuMjk0IDE0LjExMDIgMjAuMDQxOSAxMy45MTg1QzE5Ljc4OTggMTMuNzE0OSAxOS42NjM2IDEzLjQyNzEgMTkuNjYzMyAxMy4wNTUxQzE5LjY2MzEgMTIuNjcxMSAxOS43MzQ3IDEyLjA0NyAxOS44NzgxIDExLjE4MjhDMjAuMDIxNiAxMC4zMTg1IDIwLjA5MzEgOS42MDQ0NSAyMC4wOTI3IDkuMDQwNDVDMjAuMDkxNyA3LjU0MDQ1IDE5Ljk1ODkgNi4yODA2MyAxOS42OTQzIDUuMjYxMDFaTTE5LjkyNTYgMS4xOTI2OEMyMC4zNDU1IDEuMDAwMDggMjAuNzU5NCAwLjkwMzQ5NyAyMS4xNjc0IDAuOTAyOTJDMjEuNTc1NCAwLjkwMjM0MyAyMS44NzU1IDEuMDA5OTIgMjIuMDY3NiAxLjIyNTY1QzIyLjI3MTggMS40MjkzNiAyMi4zNzQgMS43MzUyMSAyMi4zNzQyIDIuMTQzMjFDMjIuMzc0NSAyLjU1MTIxIDIyLjIzNjcgMi45MTE0MSAyMS45NjA5IDMuMjIzOEMyMS42OTcxIDMuNTM2MTcgMjEuMzQ5MiAzLjY5MjY2IDIwLjkxNzIgMy42OTMyOEMyMC4wMjkyIDMuNjk0NTMgMTkuNTg0OSAzLjIzMzE2IDE5LjU4NDMgMi4zMDkxNkMxOS41ODQxIDEuOTAxMTYgMTkuNjk3OCAxLjUyOSAxOS45MjU2IDEuMTkyNjhaTTMwLjMzMTEgNi43OTM5NkMyOS42OTUgNi42MDI4NiAyOS4wNjUgNi41MDc3NSAyOC40NDEgNi41MDg2M0MyNy44MTcgNi41MDk1MiAyNy4yMjkxIDYuNjk2MzUgMjYuNjc3MyA3LjA2OTEzQzI2LjI0NTkgNy45MzM3NCAyNi4wMzA1IDguODUyMDQgMjYuMDMxMSA5LjgyNDA0QzI2LjAzMTUgMTAuMzg4IDI2LjEwOTkgMTAuOTM5OSAyNi4yNjYyIDExLjQ3OTdDMjYuNDIyNSAxMi4wMDc1IDI2LjY4MDcgMTIuMjcxMSAyNy4wNDA3IDEyLjI3MDZDMjcuNDQ4NyAxMi4yNyAyNy45OTQzIDExLjY4NzMgMjguNjc3NiAxMC41MjIzQzI5LjM2MDggOS4zNTczMyAyOS45MTIgOC4xMTQ1NSAzMC4zMzExIDYuNzkzOTZaTTI3LjYzNzkgMTcuMTQ3OEMyOC40MDU5IDE3LjE0NjcgMjkuMDA1NyAxNi44ODE4IDI5LjQzNzQgMTYuMzUzMkMyOS44NjkgMTUuODI0NiAzMC4wODQ2IDE1LjE0NjMgMzAuMDg0MSAxNC4zMTgzQzMwLjA4MzggMTMuOTEwMyAzMC4wNTM0IDEzLjMxNjQgMjkuOTkyOSAxMi41MzY0QzI5Ljk0NDQgMTEuNzU2NSAyOS45MTQgMTEuMjA0NiAyOS45MDE4IDEwLjg4MDZDMjkuMDUwOCAxMi4zNjk4IDI4LjMwNzQgMTMuMjgyOCAyNy42NzE2IDEzLjYxOTdDMjcuMzQ3NyAxMy43ODgyIDI3LjAwNTggMTMuODcyNyAyNi42NDU4IDEzLjg3MzJDMjUuNzQ1OCAxMy44NzQ1IDI1LjA0OTUgMTMuNTIxNCAyNC41NTcxIDEyLjgxNDFDMjQuMDY0NiAxMi4xMDY4IDIzLjgxOCAxMS4yNDMyIDIzLjgxNzQgMTAuMjIzMkMyMy44MTY1IDguODMxMTggMjQuMjQ3NyA3LjYxMjU3IDI1LjExMSA2LjU2NzM0QzI1Ljk4NjMgNS41MTAxIDI3LjA5IDQuOTgwNTQgMjguNDIyIDQuOTc4NjZDMjkuNzY2IDQuOTc2NzYgMzEuMTIyMSA1LjIwODg0IDMyLjQ5MDQgNS42NzQ5QzMyLjEzMTMgNi45NTk0MSAzMS45NTIxIDguMjE5NjcgMzEuOTUyOSA5LjQ1NTY3QzMxLjk1MzMgMTAuMDQzNyAzMS45OTU3IDEwLjc3NTYgMzIuMDgwMyAxMS42NTE1QzMyLjE2NDkgMTIuNTE1NCAzMi4yMDczIDEzLjE1NzMgMzIuMjA3NiAxMy41NzczQzMyLjIwODUgMTUuMDUzMyAzMS43NDEzIDE2LjI3MiAzMC44MDYgMTcuMjMzM0MyOS44NzA2IDE4LjIwNjYgMjguNjcwOSAxOC42OTQzIDI3LjIwNjkgMTguNjk2NEMyNi4zNDI5IDE4LjY5NzYgMjUuNTk4OCAxOC41MzA3IDI0Ljk3NDYgMTguMTk1NUMyNC4zNjI0IDE3Ljg3MjQgMjQuMDU2IDE3LjM2MjggMjQuMDU1NiAxNi42NjY4QzI0LjA1NTMgMTYuMjM0OCAyNC4yMTcxIDE1Ljg2ODYgMjQuNTQwOSAxNS41NjgyQzI0Ljg2NDcgMTUuMjY3NyAyNS4yNDg2IDE1LjExNzIgMjUuNjkyNiAxNS4xMTY1QzI1Ljc4ODYgMTUuMTE2NCAyNS45MDg2IDE1LjEyODIgMjYuMDUyNiAxNS4xNTJDMjYuMDE2NyAxNS4zMDgxIDI1Ljk5ODggMTUuNDQ2MSAyNS45OTg5IDE1LjU2NjFDMjUuOTk5MSAxNS45OTgxIDI2LjE2MTQgMTYuMzY5OSAyNi40ODU2IDE2LjY4MTRDMjYuODA5OCAxNi45OTI5IDI3LjE5MzkgMTcuMTQ4NCAyNy42Mzc5IDE3LjE0NzhaTTQyLjQ1ODkgNi45MDI4TDQyLjI4MTQgMTAuODYzMUM0Mi4yODIxIDExLjkxOTEgNDIuNDU2OCAxMi45ODY4IDQyLjgwNTUgMTQuMDY2M0M0Mi40MzM2IDE0LjIxMDggNDIuMDU1NyAxNC4yODM0IDQxLjY3MTcgMTQuMjgzOUM0MC42Mjc3IDE0LjI4NTQgNDAuMTA1MyAxMy43MzQxIDQwLjEwNDYgMTIuNjMwMUM0MC4xMDQxIDExLjgxNDEgNDAuMTc1NCAxMC44NTQgNDAuMzE4NyA5Ljc0OTgzQzQwLjQ2MiA4LjY0NTYzIDQwLjUzMzYgNy45Njc1MiA0MC41MzM0IDcuNzE1NTJDNDAuNTMzIDcuMDkxNTIgNDAuMjUwOCA2Ljc3OTkyIDM5LjY4NjggNi43ODA3MkMzOS4wODY4IDYuNzgxNTcgMzguNDIxMSA3LjM0NjUxIDM3LjY4OTkgOC40NzU1NUMzNi45NTg2IDkuNTkyNTggMzYuNTM5MiAxMC41MjkyIDM2LjQzMTcgMTEuMjg1M0MzNi40NTU5IDExLjYzMzMgMzYuNTc2NSAxMi41MjcxIDM2Ljc5MzUgMTMuOTY2OEMzNi40MjE2IDE0LjExMTMgMzYuMDEzNiAxNC4xODM5IDM1LjU2OTYgMTQuMTg0NkMzNC42NDU2IDE0LjE4NTkgMzQuMTgzMyAxMy43MzY1IDM0LjE4MjcgMTIuODM2NUMzNC4xODI0IDEyLjQwNDUgMzQuMjQ3OSAxMS41NTg0IDM0LjM3OTEgMTAuMjk4MkMzNC41MTAyIDkuMDI2MDUgMzQuNTc1NiA4LjAwNTk1IDM0LjU3NTEgNy4yMzc5NUMzNC41NzM0IDQuNjgxOTUgMzQuNDI4IDIuNTcwMTYgMzQuMTM4OSAwLjkwMjU2NkMzNC41MjI5IDAuNzU4MDIzIDM0LjkxODggMC42ODU0NjIgMzUuMzI2OCAwLjY4NDg4NUMzNS43MzQ4IDAuNjg0MzA4IDM2LjA3MDkgMC44MjE4MzIgMzYuMzM1MSAxLjA5NzQ2QzM2LjYxMTIgMS4zNjEwNyAzNi43NDk1IDEuNzI2ODcgMzYuNzQ5OCAyLjE5NDg3QzM2Ljc1MDEgMi42NjI4NyAzNi42ODQ3IDMuNjI4OTcgMzYuNTUzNyA1LjA5MzE1QzM2LjQzNDYgNi41NTczMiAzNi4zNzU0IDcuNjk3NDEgMzYuMzc1OSA4LjUxMzQxQzM2Ljc5NTMgNy42MjQ4MSAzNy40MDY4IDYuODEzOTUgMzguMjEwMyA2LjA4MDgxQzM5LjAyNTggNS4zMzU2NSAzOS44MzU2IDQuOTYyNTEgNDAuNjM5NiA0Ljk2MTM3QzQxLjg1MTYgNC45NTk2NiA0Mi40NTggNS42MDY4IDQyLjQ1ODkgNi45MDI4Wk00NS4zMzYxIDIuNDE2NzJDNDUuNzE5OSAyLjIyNDE4IDQ2LjEwOTkgMi4xMjc2MyA0Ni41MDU5IDIuMTI3MDdDNDYuOTAxOSAyLjEyNjUxIDQ3LjIyIDIuMjUyMDYgNDcuNDYwMSAyLjUwMzcyQzQ3LjcxMjMgMi43NTUzNiA0Ny44Mzg1IDMuMTI3MTggNDcuODM4OSAzLjYxOTE4QzQ3LjgzOTIgNC4xMTExOCA0Ny44MDk1IDQuNjY5MjMgNDcuNzUgNS4yOTMzMUM0OC42NDk5IDUuMjkyMDQgNDkuNTA3OSA1LjE2NDgyIDUwLjMyMzcgNC45MTE2N0M1MC40Njc5IDUuMTUxNDcgNTAuNTQgNS40MzMzNiA1MC41NDAzIDUuNzU3MzZDNTAuNTQwNSA2LjA2OTM2IDUwLjM5NjYgNi4zMjc1NyA1MC4xMDg4IDYuNTMxOTdDNDkuODMyOSA2LjcyNDM2IDQ5LjU1MDkgNi44MjA3NiA0OS4yNjI5IDYuODIxMTdDNDguOTc0OSA2LjgyMTU4IDQ4LjY1MDkgNi43ODYwNCA0OC4yOTA5IDYuNzE0NTVDNDcuOTMwOCA2LjY0MzA2IDQ3LjY5NjggNi42MDEzOSA0Ny41ODg4IDYuNTg5NTRDNDcuNTc2OSA2LjY5NzU2IDQ3LjU0MSA2LjkxMzYxIDQ3LjQ4MTIgNy4yMzc2OUM0Ny40MzM0IDcuNTYxNzYgNDcuMzkxNiA3Ljg0MzgyIDQ3LjM1NTggOC4wODM4N0M0Ny4yNjAyIDguNzQ0MDEgNDcuMjEyNyA5LjQ1MjA3IDQ3LjIxMzIgMTAuMjA4MUM0Ny4yMTQyIDExLjg1MjEgNDcuNzQ4OCAxMi42NzMzIDQ4LjgxNjggMTIuNjcxOEM0OS4yMTI4IDEyLjY3MTIgNDkuNjY4NyAxMi41MzI2IDUwLjE4NDUgMTIuMjU1OUM1MC4zNDA2IDEyLjQ4MzcgNTAuNDE4OCAxMi43Nzc1IDUwLjQxOTEgMTMuMTM3NUM1MC40MTkzIDEzLjQ5NzUgNTAuMjIxNSAxMy43Nzk4IDQ5LjgyNTYgMTMuOTg0NEM0OS40NDE3IDE0LjE3NjkgNDguOTc5OCAxNC4yNzM2IDQ4LjQzOTggMTQuMjc0M0M0Ni4zMjc4IDE0LjI3NzMgNDUuMjcxIDEzLjA3ODggNDUuMjY5NSAxMC42Nzg4QzQ1LjI2OTIgMTAuMzMwOCA0NS4zMTY4IDkuNzAwNzYgNDUuNDEyMiA4Ljc4ODYyQzQ1LjUxOTYgNy44NzY0NyA0NS41NzMyIDcuMTM4MzkgNDUuNTcyOCA2LjU3NDM5QzQ0Ljk5NjggNi42MTEyMSA0NC41MzQ5IDYuNzEzODYgNDQuMTg3IDYuODgyMzVDNDQuMDQyOCA2LjY2NjU2IDQzLjk3MDcgNi40MjA2NiA0My45NzA1IDYuMTQ0NjZDNDMuOTcwMyA1Ljg1NjY2IDQ0LjA3MjIgNS42MjI1MSA0NC4yNzYgNS40NDIyM0M0NC40Nzk5IDUuMjQ5OTQgNDQuNzMxOSA1LjE1MzU4IDQ1LjAzMTkgNS4xNTMxNkM0NS4zMzE5IDUuMTUyNzMgNDUuNTI5OSA1LjE1ODQ1IDQ1LjYyNTkgNS4xNzAzMkM0NS42Mzc4IDUuMDc0MyA0NS42NDM3IDQuOTQ4MjkgNDUuNjQzNiA0Ljc5MjI5QzQ1LjY0MyAzLjg5MjI5IDQ1LjU0MDUgMy4xMDA0NCA0NS4zMzYxIDIuNDE2NzJaTTUwLjk4MiA2LjA2Mjc0QzUxLjM1MzYgNS4zOTAyMSA1MS44ODE0IDUuMDUzNDYgNTIuNTY1NCA1LjA1MjVDNTMuMDA5NCA1LjA1MTg3IDUzLjM2OTUgNS4yOTEzNiA1My42NDU4IDUuNzcwOTdDNTMuOTIyMSA2LjIzODU4IDU0LjExNDUgNi44MjAzMSA1NC4yMjMgNy41MTYxNUM1NC4zNDM0IDguMTk5OTggNTQuNDM5OSA4Ljg5NTg1IDU0LjUxMjMgOS42MDM3NUM1NC42OTM1IDExLjM2NzUgNTQuOTE2MSAxMi4zMzMyIDU1LjE4MDIgMTIuNTAwOEM1NS42NDgxIDEyLjM4MDEgNTYuMDYxNyAxMS42NjU2IDU2LjQyMDggMTAuMzU3QzU2Ljc4IDkuMDM2NTQgNTYuOTU5MyA4LjA0NjI4IDU2Ljk1ODkgNy4zODYyOEM1Ni45NTg0IDYuNzE0MjggNTYuOTIyMSA2LjE4MDMzIDU2Ljg0OTggNS43ODQ0NEM1Ny4yNjk4IDUuNjk5ODQgNTcuNjI5NyA1LjY1NzMzIDU3LjkyOTcgNS42NTY5MUM1OC45NjE3IDUuNjU1NDUgNTkuNDc4MSA2LjE0NjcyIDU5LjQ3ODcgNy4xMzA3MkM1OS40Nzk3IDguNjY2NzIgNTkuNTU4NSA5LjkyMDYxIDU5LjcxNTIgMTAuODkyNEM1OS44ODM4IDExLjg1MjEgNjAuMDgyMiAxMi40MjE5IDYwLjMxMDMgMTIuNjAxNUM2MC42NDYzIDEyLjU3NzEgNjAuOTM0MSAxMi4zMTI3IDYxLjE3MzggMTEuODA4M0M2MS40MTM0IDExLjMwNCA2MS41ODcgMTAuNjkxNyA2MS42OTQ2IDkuOTcxNThDNjEuODk3NyA4LjYxNTMgNjEuOTk5IDcuNTc3MTUgNjEuOTk4NSA2Ljg1NzE1QzYxLjk5ODEgNi4xMjUxNSA2MS45NjE3IDUuNTYxMiA2MS44ODk0IDUuMTY1M0M2Mi4zMDk0IDUuMDgwNzEgNjIuNjY5MyA1LjAzODIgNjIuOTY5MyA1LjAzNzc4QzY0LjAwMTMgNS4wMzYzMiA2NC41MTc3IDUuNTI3NTkgNjQuNTE4MyA2LjUxMTU5QzY0LjUxODcgNy4xMzU1OSA2NC4zOTMyIDcuODkxNzYgNjQuMTQxOCA4Ljc4MDEyQzYzLjg5MDQgOS42NTY0OCA2My41NjA5IDEwLjUxNDkgNjMuMTUzNSAxMS4zNTU1QzYyLjc0NiAxMi4xODQxIDYyLjI0ODUgMTIuODkyOCA2MS42NjA4IDEzLjQ4MTZDNjEuMDg1MiAxNC4wNzA0IDYwLjUwOTQgMTQuMzY1MyA1OS45MzM0IDE0LjM2NjFDNTkuMjczNCAxNC4zNjcgNTguNzc1MSAxMy44NzU3IDU4LjQzODUgMTIuODkyMkM1OC4xNzQgMTIuMTQ4NiA1Ny45NTc0IDExLjE4MjkgNTcuNzg4NiA5Ljk5NTExQzU3LjY4MDggMTAuMzkxMyA1Ny42MDMgMTAuNjc5NCA1Ny41NTUxIDEwLjg1OTRDNTcuNTA3MyAxMS4wMzk1IDU3LjQyMzQgMTEuMzA5NiA1Ny4zMDM3IDExLjY2OThDNTcuMTgzOSAxMi4wMyA1Ny4wNzYxIDEyLjMwNjEgNTYuOTgwMiAxMi40OTgzQzU2Ljg4NDMgMTIuNjkwNCA1Ni43NTI1IDEyLjkxODYgNTYuNTg0NyAxMy4xODI4QzU2LjQyODggMTMuNDQ3IDU2LjI2NyAxMy42MzkzIDU2LjA5OSAxMy43NTk1QzU1LjY3OTMgMTQuMDk2MSA1NS4yMTE0IDE0LjI2NDggNTQuNjk1NCAxNC4yNjU1QzU0LjE5MTQgMTQuMjY2MiA1My43NzEyIDE0LjAzODggNTMuNDM0OSAxMy41ODMzQzUzLjExMDYgMTMuMTI3NyA1Mi44ODIyIDEyLjU0NjEgNTIuNzQ5OCAxMS44MzgyQzUyLjYyOTMgMTEuMTMwNCA1Mi41MjA4IDEwLjQwNDYgNTIuNDI0NCA5LjY2MDdDNTIuMTk1MSA3Ljc2NTAyIDUxLjcxNDMgNi41NjU3IDUwLjk4MiA2LjA2Mjc0Wk03My44NjggNS42NTIzNkM3My41NDQ5IDcuMDMyODEgNzMuMzgzOCA4LjQxOTA0IDczLjM4NDggOS44MTEwNEM3My4zODU3IDExLjE5MSA3My41NDI1IDEyLjU1ODggNzMuODU1NCAxMy45MTQ0QzczLjQyMzUgMTQuMDU5IDcyLjk3OTYgMTQuMTMxNiA3Mi41MjM2IDE0LjEzMjNDNzIuMDY3NiAxNC4xMzI5IDcxLjc0OTUgMTQuMDAxNCA3MS41NjkzIDEzLjczNzZDNzEuMzg5MSAxMy40NjE5IDcxLjI5ODkgMTMuMDcyIDcxLjI5ODUgMTIuNTY4QzcxLjI5ODIgMTIuMDUyIDcxLjM3NTggMTEuMzQ5OSA3MS41MzEyIDEwLjQ2MTdDNzAuNjgwNCAxMi4yODY5IDY5Ljg1OTEgMTMuNDQgNjkuMDY3NCAxMy45MjEyQzY4LjcwNzYgMTQuMTM3NyA2OC4zMzU2IDE0LjI0NjIgNjcuOTUxNiAxNC4yNDY3QzY3LjAzOTYgMTQuMjQ4IDY2LjMzMTQgMTMuOTEzIDY1LjgyNyAxMy4yNDE3QzY1LjMyMjUgMTIuNTU4NSA2NS4wNyAxMS43MTI4IDY1LjA2OTMgMTAuNzA0OEM2NS4wNjgzIDkuMTY4ODEgNjUuNDkzNSA3LjgyNDIxIDY2LjM0NDcgNi42NzFDNjcuMTk1OSA1LjUwNTggNjguMjk5NiA0LjkyMjIzIDY5LjY1NTYgNC45MjAzMkM3MS4wMjM2IDQuOTE4MzggNzIuNDI3NyA1LjE2MjM5IDczLjg2OCA1LjY1MjM2Wk03MS41MTA3IDYuNzM1NjlDNzAuODc0NiA2LjU0NDU5IDcwLjMzNDYgNi40NDkzNiA2OS44OTA2IDYuNDQ5OThDNjguOTkwNiA2LjQ1MTI2IDY4LjMxODcgNi42NTAyMSA2Ny44NzUgNy4wNDY4NEM2Ny40Njc2IDguMDU1NDEgNjcuMjY0MyA5LjA4MTcgNjcuMjY1IDEwLjEyNTdDNjcuMjY1MyAxMC42Nzc3IDY3LjM0OTcgMTEuMjM1NiA2Ny41MTggMTEuNzk5M0M2Ny42OTg0IDEyLjM2MzEgNjcuOTY4NiAxMi42NDQ3IDY4LjMyODYgMTIuNjQ0MkM2OC43NDg2IDEyLjY0MzYgNjkuMjg4MiAxMi4wMjQ4IDY5Ljk0NzQgMTAuNzg3OUM3MC42MDY2IDkuNTUwOTcgNzEuMTI3NyA4LjIwMDI0IDcxLjUxMDcgNi43MzU2OVpNNzUuNjUyMiAxMS4xMzk4TDc1LjgzMDUgOC41NDc1OEM3NS44Mjk4IDcuMzgzNTggNzUuNjYxIDYuMjc5ODIgNzUuMzI0NCA1LjIzNjNDNzUuNjYwMyA1LjA5MTgyIDc2LjA3NDIgNS4wMTkyMyA3Ni41NjYyIDUuMDE4NTRDNzcuNTI2MiA1LjAxNzE4IDc4LjAwNjYgNS41NTA1IDc4LjAwNzMgNi42MTg1Qzc4LjAwNzYgNy4wOTg1IDc3Ljk0MiA3Ljc3NjU5IDc3LjgxMDYgOC42NTI3OEM3Ny42NzkyIDkuNTI4OTcgNzcuNjEzNiAxMC4xMzUxIDc3LjYxMzggMTAuNDcxMUM3Ny42MTQgMTAuNzk1MSA3Ny42MjAxIDExLjAzNTEgNzcuNjMyMiAxMS4xOTFDNzcuNjQ0MyAxMS4zMzUgNzcuNjc0NSAxMS41MDkgNzcuNzIyNiAxMS43MTI5Qzc3Ljc5NDkgMTIuMTIwOCA3OC4wMjkgMTIuMzI0NSA3OC40MjUgMTIuMzIzOUM3OC44MzMgMTIuMzIzMyA3OS4yNjQ4IDEyLjAwNDcgNzkuNzIwNCAxMS4zNjgxQzgwLjE4NzkgMTAuNzE5NCA4MC41NTk1IDEwLjAwNDkgODAuODM1IDkuMjI0NUM4MS4xMjI1IDguNDQ0MDkgODEuMjY2MSA3LjgyNTg5IDgxLjI2NTggNy4zNjk4OUM4MS4yMDUxIDYuNDIxOTggODEuMTAyNyA1LjcwODEyIDgwLjk1ODQgNS4yMjgzMkM4MS4zNDIzIDUuMDgzNzggODEuNzMyMiA1LjAxMTIzIDgyLjEyODIgNS4wMTA2N0M4Mi41MzYyIDUuMDEwMDkgODIuODcyMyA1LjEzNTYyIDgzLjEzNjUgNS4zODcyNEM4My40MTI2IDUuNjM4ODUgODMuNTUwOCA1Ljk3NDY2IDgzLjU1MTEgNi4zOTQ2NkM4My41NTU0IDEyLjk0NjcgODIuMzU4IDE2Ljg3ODQgNzkuOTU4OCAxOC4xODk3Qzc5LjQxOSAxOC40Nzg1IDc4LjgwNzEgMTguNjIzNCA3OC4xMjMxIDE4LjYyNDNDNzcuNDM5MSAxOC42MjUzIDc2LjgzOSAxOC40NDYyIDc2LjMyMjcgMTguMDg2OUM3NS44MTg1IDE3LjcyNzYgNzUuNTY2MiAxNy4yMjQgNzUuNTY1OCAxNi41NzZDNzUuNTY1NSAxNi4xNDQgNzUuNzI3MiAxNS43Nzc3IDc2LjA1MSAxNS40NzczQzc2LjM3NDkgMTUuMTg4OCA3Ni43NTg4IDE1LjA0NDMgNzcuMjAyOCAxNS4wNDM2Qzc3LjI5ODggMTUuMDQzNSA3Ny40MTg4IDE1LjA1NTMgNzcuNTYyOCAxNS4wNzkxQzc3LjUyNjkgMTUuMjM1MiA3Ny41MDkgMTUuMzczMiA3Ny41MDkgMTUuNDkzMkM3Ny41MDk3IDE2LjU0OTIgNzcuODc2MSAxNy4wNzY3IDc4LjYwODEgMTcuMDc1N0M3OS4wNTIxIDE3LjA3NSA3OS40NTM5IDE2LjgzNDUgNzkuODEzNiAxNi4zNTRDODAuMTczMyAxNS44NzM0IDgwLjQ2MDkgMTUuMjg1IDgwLjY3NjUgMTQuNTg4N0M4MS4wOTU1IDEzLjE3MjEgODEuMzA0NyAxMS44ODc4IDgxLjMwMzkgMTAuNzM1OEM4MC45NDQ2IDExLjcwODMgODAuNDUzMSAxMi40OTUgNzkuODI5NSAxMy4wOTU5Qzc5LjIxNzkgMTMuNjg0OCA3OC41NTIxIDEzLjk3OTcgNzcuODMyMSAxMy45ODA4Qzc2LjM4MDEgMTMuOTgyOCA3NS42NTM0IDEzLjAzNTggNzUuNjUyMiAxMS4xMzk4Wk04Ni45ODc3IDEwLjgzNThDODYuOTUxOCAxMS4wMDM4IDg2LjkzMzkgMTEuMTQxOSA4Ni45MzM5IDExLjI0OTlDODYuOTM0MiAxMS43NDE5IDg3LjA3ODUgMTIuMTE5NyA4Ny4zNjY3IDEyLjM4MzNDODcuNjY2OCAxMi42NDY4IDg4LjA2MjkgMTIuNzc4MyA4OC41NTQ5IDEyLjc3NzZDODkuMDU4OSAxMi43NzY5IDg5LjQ3MjkgMTIuNjg2MyA4OS43OTY3IDEyLjUwNThDOTAuMTMyNiAxMi4zMTMzIDkwLjMwMDQgMTIuMDMxMSA5MC4zMDAyIDExLjY1OTFDOTAuMjk5OSAxMS4yODcxIDkwLjExOTggMTAuOTkzNCA4OS43NTk2IDEwLjc3NzlDODkuNDExNSAxMC41NTA0IDg4Ljk4NTQgMTAuMzcxIDg4LjQ4MTMgMTAuMjM5N0M4Ny45ODkyIDEwLjEwODQgODcuNDkxMSA5Ljk2NTA4IDg2Ljk4NyA5LjgwOThDODYuNDgyOSA5LjY0MjUxIDg2LjA1MDcgOS4zODUxMiA4NS42OTA1IDkuMDM3NjNDODUuMzQyMyA4LjY5MDEyIDg1LjE2OCA4LjI1MjM3IDg1LjE2NzYgNy43MjQzN0M4NS4xNjcxIDYuODk2MzcgODUuNjA0NiA2LjE5OTc1IDg2LjQ4MDMgNS42MzQ1MUM4Ny4zNTU5IDUuMDY5MjcgODguMjczNyA0Ljc4NTk3IDg5LjIzMzcgNC43ODQ2MkM5MC4yODk3IDQuNzgzMTIgOTEuMDkzOCA0Ljk5Nzk4IDkxLjY0NjEgNS40MjkyQzkxLjk3MDMgNS42ODA3NCA5Mi4xMzI1IDYuMDE2NTEgOTIuMTMyOCA2LjQzNjUxQzkyLjEzMzEgNi44NDQ1MSA5MS45NzEzIDcuMTgwNzQgOTEuNjQ3NCA3LjQ0NTJDOTEuMzM1NiA3LjY5NzY0IDkwLjk1MTcgNy44MjQxOSA5MC40OTU3IDcuODI0ODNDOTAuMzk5NyA3LjgyNDk3IDkwLjI3OTcgNy44MTMxNCA5MC4xMzU3IDcuNzg5MzRDOTAuMTcxNiA3LjYzMzI5IDkwLjE4OTUgNy40OTUyNiA5MC4xODk0IDcuMzc1MjZDOTAuMTg5MiA3LjAyNzI2IDkwLjA1NyA2Ljc2MzQ1IDg5Ljc5MjkgNi41ODM4MkM4OS41Mjg4IDYuNDA0MiA4OS4xNjg3IDYuMzE0NzEgODguNzEyNyA2LjMxNTM1Qzg4LjI2ODcgNi4zMTU5OCA4Ny44NjA4IDYuNDA2NTYgODcuNDg4OSA2LjU4NzA4Qzg3LjM0NSA2Ljc3OTI5IDg3LjI3MzIgNy4wMjUzOSA4Ny4yNzM0IDcuMzI1MzlDODcuMjczNiA3LjYyNTM5IDg3LjQ0NzcgNy44NzExNCA4Ny43OTU4IDguMDYyNjVDODguMTQ0IDguMjQyMTYgODguNTY0MSA4LjQwMzU2IDg5LjA1NjIgOC41NDY4N0M4OS41NjAyIDguNjc4MTYgOTAuMDY0MyA4LjgzMzQ0IDkwLjU2ODUgOS4wMTI3M0M5MS4wNzI2IDkuMTgwMDIgOTEuNDk4NyA5LjQ0OTQxIDkxLjg0NyA5LjgyMDkyQzkyLjE5NTIgMTAuMTgwNCA5Mi4zNjk1IDEwLjYzNjIgOTIuMzY5OSAxMS4xODgyQzkyLjM3MDUgMTIuMDg4MiA5MS45MjEgMTIuODM4OCA5MS4wMjE0IDEzLjQ0MDFDOTAuMTMzNyAxNC4wMjkzIDg5LjIxNTkgMTQuMzI0NiA4OC4yNjc5IDE0LjMyNkM4Ny4zMTk5IDE0LjMyNzMgODYuNTMzOCAxNC4xNjA0IDg1LjkwOTYgMTMuODI1M0M4NS4yOTc0IDEzLjQ3ODIgODQuOTkxIDEyLjk1NjYgODQuOTkwNiAxMi4yNjA2Qzg0Ljk5MDMgMTEuODI4NiA4NS4xNDYxIDExLjQ4MDQgODUuNDU3OSAxMS4yMTZDODUuNzgxNyAxMC45Mzk1IDg2LjE3MTYgMTAuODAxIDg2LjYyNzYgMTAuODAwM0M4Ni43MjM2IDEwLjgwMDIgODYuODQzNiAxMC44MTIgODYuOTg3NyAxMC44MzU4WlwiIGZpbGw9e2NvbG9yfS8+XHJcbjwvc3ZnPlxyXG4gIClcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcIi4vbG9nb1wiO1xyXG5pbXBvcnQgeyBCc0xpc3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbnR5cGUgaGVhZGVyUHJvcFR5cGUgPSB7XHJcbiAgcGF0aG5hbWU6IHN0cmluZ1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxoZWFkZXJQcm9wVHlwZT4gPSAoe3BhdGhuYW1lfSkgPT4ge1xyXG5cclxuICBjb25zdCBbb3BlbixzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb25Ub3Asc2V0T25Ub3BdID0gUmVhY3QudXNlU3RhdGUocGF0aG5hbWUgPT09ICcvJyA/IHRydWUgOiBmYWxzZSlcclxuICBjb25zdCBkaXZSZWYgPSBSZWFjdC51c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihwcmV2ID0+ICFwcmV2KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChkaXZSZWYuY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgIGlmICh0b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICBzZXRPblRvcCh0cnVlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE9uVG9wKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKHBhdGhuYW1lID09PSAnLycpe1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsKTtcclxuICAgICAgfVxyXG4gIH0sW3BhdGhuYW1lXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvJyl7XHJcbiAgICAgIHNjcm9sbCgpXHJcbiAgICB9XHJcbiAgfSxbcGF0aG5hbWVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlclxyXG4gICAgICByZWY9e2RpdlJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBoLTE2IHAtNCBsZWZ0LTAgcmlnaHQtMCB0b3AtMCBpdGVtcy1jZW50ZXIgZml4ZWQganVzdGlmeS1iZXR3ZWVuICR7b25Ub3AgPyAnYmctdHJhbnNwYXJlbnQnIDogJ2JnLXdoaXRlJ30gdy1zY3JlZW4gYm94LWJvcmRlciBvdmVyZmxvdy1oaWRkZW4gei01MGB9XHJcbiAgICA+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1pbi13LVsxMDBweF1cIj5cclxuICAgICAgICA8TG9nbyAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPlxyXG4gICAgICAgIDxCc0xpc3Qgb25DbGljaz17aGFuZGxlT3Blbi5iaW5kKG51bGwpfSBjbGFzc05hbWU9XCJoLTcgdy03XCIgLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7b3BlbiA/ICdsZWZ0LTAnOiAnbGVmdC1mdWxsJ30gYWJzb2x1dGUgdG9wLTE2IHB4LTQgcGItNCB3LWZ1bGwgei0xMCBzbTptbC0xMiAgc206c3RhdGljIHNtOmZsZXggc206ZmxleC1yb3cgc206anVzdGlmeS1lbmQgc206aXRlbXMtY2VudGVyIHNtOnAtMCAgJHtvblRvcCA/ICd0ZXh0LXdoaXRlJyA6ICd0ZXh0LWJsYWNrJ31gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTpnYXAtMyBmb250LXRleHQgZm9udC1ub3JtYWxcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGhvdmVyOnRleHQtYmx1ZVwiIGhyZWY9XCIvc3RvcmVzXCI+U3RvcmVzPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgaG92ZXI6dGV4dC1ibHVlXCIgaHJlZj1cIi9wcmljaW5nL2RyeS1jbGVhbmluZ1wiPlByaWNpbmc8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBob3Zlcjp0ZXh0LWJsdWVcIiBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0IFVzPC9hPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHNtOmdhcC00IHNtOml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xIHB4LTIgcm91bmRlZC1tIGZvbnQtdGV4dFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBob3Zlcjp0ZXh0LWJsdWVcIj5Mb2dpbjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHB5LTIgcHgtMyByb3VuZGVkLW1kIHRleHQtd2hpdGUgZm9udC10ZXh0IGhvdmVyOmJnLWJsdWUtMTAwIFwiPlxyXG4gICAgICAgICAgICA8YT5Cb29rIE5vdzwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdCdcclxuXHJcbmNvbnN0IENvbnRhY3RQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPENvbnRhY3QgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2UiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vdWkvaW5wdXQnXHJcblxyXG5jb25zdCBDb250YWN0IDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LTEgaC1bODB2aF0gdy1bODAlXSBteC1hdXRvIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIG1pbi1oLVtjYWxjKDEwMHZoKV0nPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpmbGV4LTEnPlxyXG4gICAgICAgIDxoMT5JbWFnZSBIZXJlPC9oMT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J21kOmZsZXgtMSBmbGV4IGZsZXgtY29sIGdhcC01IG15LWF1dG8nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICc+XHJcbiAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIGZvbnQtc2VtaWJvbGQgdGV4dC1bNDJweF0nPkNvbnRhY3QgVXM8L2gxPlxyXG4gICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC10ZXh0IGZvbnQtbm9ybWFsIHRleHQtWzE2cHhdJz5FeHBsb3JlIHRoZSBmdXR1cmUgd2l0aCB1cy48YnIvPkZlZWwgZnJlZSB0byBnZXQgaW4gdG91Y2guPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxJbnB1dCBuYW1lPSduYW1lJyBsYWJlbD0nTmFtZScgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgbmFtZSBoZXJlLicgdHlwZT0ndGV4dCcgLz5cclxuICAgICAgICA8SW5wdXQgbmFtZT0nZW1haWwnIGxhYmVsPSdFbWFpbCcgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgRW1haWwgaGVyZS4nIHR5cGU9J2VtYWlsJyAvPlxyXG4gICAgICAgIDxJbnB1dCBuYW1lPSdtZXNzYWdlJyBsYWJlbD0nTWVzc2FnZScgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgbWVzc2FnZSBoZXJlLicgdHlwZT0ndGV4dCcgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0naC0xMCBiZy1ibHVlIHRleHQtd2hpdGUgZm9udC10ZXh0IGZvbnQtc2VtaWJvbGQgdGV4dC1bMTRweF0gcm91bmRlZC1tZCcgdHlwZT1cInN1Ym1pdFwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QiLCAiaW1wb3J0IFJlYWN0LCB7IEhUTUxJbnB1dFR5cGVBdHRyaWJ1dGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbnR5cGUgaW5wdXRQcm9wcyA9IHtcclxuICAgdHlwZTogc3RyaW5nLFxyXG4gICBsYWJlbDogSFRNTElucHV0VHlwZUF0dHJpYnV0ZSxcclxuICAgbmFtZTogc3RyaW5nLFxyXG4gICBwbGFjZWhvbGRlcjogc3RyaW5nXHJcbiAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBJbnB1dCA6IFJlYWN0LkZDPGlucHV0UHJvcHM+ID0gKHtsYWJlbCx0eXBlLHBsYWNlaG9sZGVyLG5hbWUsLi4ucHJvcHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0xJz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LXRleHQgZm9udC1ub3JtYWwgdGV4dC1bMTRweF0nIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9JyBwbGFjZWhvbGRlcjpmb250LXRleHQgcGxhY2Vob2xkZXI6Zm9udC1zZW1pYm9sZCBwbGFjZWhvbGRlcjp0ZXh0LWJsYWNrIGgtMTAgdGV4dC1bMTRweF0gcC0xIHB4LTIgcm91bmRlZC1tZCBvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUnIHR5cGU9e3R5cGV9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gbmFtZT17bmFtZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ34vY29tcG9uZW50cy9zdG9yZXMvY29udGFpbmVyJ1xyXG5pbXBvcnQgSW5mb1dyYXBwZXIgZnJvbSAnfi9jb21wb25lbnRzL3dyYXBwZXJzL2luZm9XcmFwcGVyJ1xyXG5pbXBvcnQgeyBzdG9yZXNEYXRhIH0gZnJvbSAnfi9kYXRhL2RhdGEnXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyIDogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0b3Jlczogc3RvcmVzRGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBJbmRleCA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW5mb1dyYXBwZXIgaGVhZGluZz0nT3VyIFN0b3Jlcycgc3ViSGVhZGluZz0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0Jz5cclxuICAgICAgPENvbnRhaW5lciAvPlxyXG4gICAgPC9JbmZvV3JhcHBlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xyXG5pbXBvcnQgeyBzdG9yZXNUeXBlIH0gZnJvbSAnfi90eXBlcy90eXBlcyc7XHJcbmltcG9ydCBJbmZvIGZyb20gJy4uL3VpL2luZm8nO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3N0b3Jlc30gPSB1c2VMb2FkZXJEYXRhPHtzdG9yZXM6IHN0b3Jlc1R5cGVbXX0+KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAtNSBpdGVtcy1jZW50ZXIgdy1zY3JlZW4nPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy1bODAlXSBncmlkIGdyaWQtcm93cy0zIG1kOmdyaWQtcm93cy0yIG1kOmdyaWQtY29scy0yIGdhcC0xMCBweS01Jz5cclxuICAgICAgICAgICAge3N0b3Jlcy5tYXAoKHN0b3JlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8U3RvcmUga2V5PXtzdG9yZS5pZH0gc3RvcmU9e3N0b3JlfSAvPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lciIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHN0b3Jlc1R5cGUgfSBmcm9tICd+L3R5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge0ZhUmVnQWRkcmVzc0Jvb2ssIEZhUmVnQ2FsZW5kYXJBbHR9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQge0JpVGltZX0gZnJvbSAncmVhY3QtaWNvbnMvYmknXHJcbmltcG9ydCB7RmlQaG9uZUNhbGx9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xyXG5cclxudHlwZSBzdG9yZVByb3BzID0ge1xyXG4gICAgc3RvcmU6IHN0b3Jlc1R5cGVcclxufVxyXG5cclxuY29uc3QgU3RvcmUgOiBSZWFjdC5GQzxzdG9yZVByb3BzPiA9ICh7c3RvcmV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGJnLXdoaXRlIHAtNSBnYXAtMiByb3VuZGVkLWxnIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi01MDAnPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgdGV4dC1bMjRweF0gbWItNSc+e3N0b3JlLm5hbWV9PC9oMT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtdGV4dCB0ZXh0LVsxNHB4XSc+XHJcbiAgICAgICAgICAgIDxGYVJlZ0FkZHJlc3NCb29rIC8+XHJcbiAgICAgICAgICAgIDxwPntzdG9yZS5hZGRyZXNzfTwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LXRleHQgdGV4dC1bMTRweF0nPlxyXG4gICAgICAgICAgICA8RmFSZWdDYWxlbmRhckFsdCAvPlxyXG4gICAgICAgICAgICA8cD57c3RvcmUub3Blbk9ufTwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LXRleHQgdGV4dC1bMTRweF0nPlxyXG4gICAgICAgICAgICA8QmlUaW1lIC8+XHJcbiAgICAgICAgICAgIDxwPntzdG9yZS50aW1pbmd9PC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtdGV4dCB0ZXh0LVsxNHB4XSc+XHJcbiAgICAgICAgICAgIDxGaVBob25lQ2FsbCAvPlxyXG4gICAgICAgICAgICA8cD57c3RvcmUucGhvbmVOdW1iZXJ9PC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtdGV4dCB0ZXh0LVsxNHB4XSBtdC01Jz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2gtMTAgdy0zMiBwLTIgYmctYmx1ZSB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHgtMyc+R2V0IERpcmVjdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0naC0xMCB3LTMyIHAtMiBiZy1ibHVlIHRleHQtd2hpdGUgcm91bmRlZC1tZCBweC0zJyA+Q2FsbDwvYnV0dG9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmUiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi91aS9pbmZvJ1xyXG5cclxudHlwZSBJbmZvV3JhcHBlclByb3BzID0ge1xyXG4gICAgaGVhZGluZzogc3RyaW5nLFxyXG4gICAgc3ViSGVhZGluZzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEluZm9XcmFwcGVyIDogUmVhY3QuRkM8SW5mb1dyYXBwZXJQcm9wcz4gPSAoe2NoaWxkcmVuLGhlYWRpbmcsc3ViSGVhZGluZ30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC1bNTBweF0gcHktWzUwcHhdIG10LVs1MHB4XSB3LWZ1bGwnPlxyXG4gICAgICAgIDxJbmZvIGhlYWRpbmc9e2hlYWRpbmd9IHN1YkhlYWRpbmc9e3N1YkhlYWRpbmd9IC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvV3JhcHBlciIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG50eXBlIGluZm9Qcm9wcyA9IHtcclxuICAgIGhlYWRpbmc6IHN0cmluZyxcclxuICAgIHN1YkhlYWRpbmc6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBJbmZvIDogUmVhY3QuRkM8aW5mb1Byb3BzPiA9ICh7aGVhZGluZyxzdWJIZWFkaW5nfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggdy1bODAlXSBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LVszMnB4XSB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGZvbnQtYm9sZCc+e2hlYWRpbmd9PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLWJsdWUgaC1bNnB4XSB3LTEwIHJvdW5kZWQtc20nPjwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtNCBmb250LXRleHQgdGV4dC1bMTZweF0gdGV4dC10ZXh0LWdyYXkgdGV4dC1jZW50ZXInPntzdWJIZWFkaW5nfTwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm8iLCAiaW1wb3J0IHsgY2F0ZWdvcnlUeXBlLCBmZWF0dXJlc1R5cGUsIGl0ZW1UeXBlLCBwYWdlc1R5cGUsIHByb2Nlc3NTdGVwRGF0YVR5cGUsIHNlcnZpY2VzVHlwZSwgc3RvcmVzVHlwZSwgdGVzdGltb25pYWxzVHlwZSB9IGZyb20gXCJ+L3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2RyeS1jbGVhbmluZy5wbmcnXHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmVzRGF0YSA6IHN0b3Jlc1R5cGVbXSA9IFt7XHJcbiAgaWQ6IDEsXHJcbiAgbmFtZTogJ0JyaWdodHdheXMgRHJ5Y2xlYW5lcnMgTklUIDEnLFxyXG4gIGFkZHJlc3M6ICcxIEovMTYgTklUIEZBUklEQUJBRCcsXHJcbiAgdGltaW5nOiAnMTA6MDAgLSA5OjAwJyxcclxuICBwaG9uZU51bWJlcjogJzk4MTAxMzY3MDknLFxyXG4gIG9wZW5PbjogJ01vbiAtIEZyaSdcclxufSx7XHJcbiAgaWQ6IDIsXHJcbiAgbmFtZTogJ0JyaWdodHdheXMgRHJ5Y2xlYW5lcnMgTklUIDEnLFxyXG4gIGFkZHJlc3M6ICcxIEovMTYgTklUIEZBUklEQUJBRCcsXHJcbiAgdGltaW5nOiAnMTA6MDAgLSA5OjAwJyxcclxuICBwaG9uZU51bWJlcjogJzk4MTAxMzY3MDknLFxyXG4gIG9wZW5PbjogJ01vbiAtIEZyaSdcclxufSx7XHJcbiAgaWQ6IDMsXHJcbiAgbmFtZTogJ0JyaWdodHdheXMgRHJ5Y2xlYW5lcnMgTklUIDEnLFxyXG4gIGFkZHJlc3M6ICcxIEovMTYgTklUIEZBUklEQUJBRCcsXHJcbiAgdGltaW5nOiAnMTA6MDAgLSA5OjAwJyxcclxuICBwaG9uZU51bWJlcjogJzk4MTAxMzY3MDknLFxyXG4gIG9wZW5PbjogJ01vbiAtIEZyaSdcclxufV1cclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtRGF0YSA6IGl0ZW1UeXBlW10gPSBbe1xyXG4gIGlkOiAxLFxyXG4gIG5hbWU6ICdCbGF6ZXInLFxyXG4gIHByaWNlOiAyMDBcclxufSx7XHJcbiAgaWQ6IDIsXHJcbiAgbmFtZTogJ0JsYXplcicsXHJcbiAgcHJpY2U6IDIwMFxyXG59LHtcclxuICBpZDogMyxcclxuICBuYW1lOiAnQmxhemVyJyxcclxuICBwcmljZTogMjAwXHJcbn0se1xyXG4gIGlkOiA0LFxyXG4gIG5hbWU6ICdCbGF6ZXInLFxyXG4gIHByaWNlOiAyMDBcclxufV1cclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzRGF0YTogY2F0ZWdvcnlUeXBlW10gPSBbe1xyXG4gIGlkOiAxLFxyXG4gIG5hbWU6ICdGb3JtYWwgV2VhcnMnLFxyXG4gIGl0ZW1zOiBpdGVtRGF0YVxyXG59LHtcclxuICBpZDogMixcclxuICBuYW1lOiAnRm9ybWFsIFdlYXJzJyxcclxuICBpdGVtczogaXRlbURhdGFcclxufSx7XHJcbiAgaWQ6IDMsXHJcbiAgbmFtZTogJ0Zvcm1hbCBXZWFycycsXHJcbiAgaXRlbXM6IGl0ZW1EYXRhXHJcbn0se1xyXG4gIGlkOiA0LFxyXG4gIG5hbWU6ICdGb3JtYWwgV2VhcnMnLFxyXG4gIGl0ZW1zOiBpdGVtRGF0YVxyXG59XVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzRGF0YSA6IHNlcnZpY2VzVHlwZVtdID0gW3tcclxuICBpZDogMSxcclxuICBuYW1lOiAnRHJ5IENsZWFuaW5nJyxcclxuICBzaG9ydF9kZXNjOiAnRm9yIHNlbnNpdGl2ZSBhbmQgc29mdCBmYWJyaWNzJyxcclxuICBpbWFnZTogSW1hZ2UsXHJcbiAgZGV0YWlsZWRfZGVzYzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgZXUgc2VtIG1heGltdXMsIGRpY3R1bSBsb3JlbSBuZWMsIHRpbmNpZHVudCB1cm5hLiBGdXNjZSByaG9uY3VzIGxhY3VzIGFudGUsIHF1aXMgbW9sbGlzIGV4IHRpbmNpZHVudCBhYy4gU2VkIHNpdCBhbWV0IHRlbXB1cyBvcmNpLiAnLFxyXG4gIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNEYXRhXHJcbn0se1xyXG4gIGlkOiAyLFxyXG4gIG5hbWU6ICdEcnkgQ2xlYW5pbmcnLFxyXG4gIHNob3J0X2Rlc2M6ICdGb3Igc2Vuc2l0aXZlIGFuZCBzb2Z0IGZhYnJpY3MnLFxyXG4gIGltYWdlOiBJbWFnZSxcclxuICBkZXRhaWxlZF9kZXNjOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVml2YW11cyBldSBzZW0gbWF4aW11cywgZGljdHVtIGxvcmVtIG5lYywgdGluY2lkdW50IHVybmEuIEZ1c2NlIHJob25jdXMgbGFjdXMgYW50ZSwgcXVpcyBtb2xsaXMgZXggdGluY2lkdW50IGFjLiBTZWQgc2l0IGFtZXQgdGVtcHVzIG9yY2kuICcsXHJcbiAgY2F0ZWdvcmllczogY2F0ZWdvcmllc0RhdGFcclxufSx7XHJcbiAgaWQ6IDMsXHJcbiAgbmFtZTogJ0RyeSBDbGVhbmluZycsXHJcbiAgc2hvcnRfZGVzYzogJ0ZvciBzZW5zaXRpdmUgYW5kIHNvZnQgZmFicmljcycsXHJcbiAgaW1hZ2U6IEltYWdlLFxyXG4gIGRldGFpbGVkX2Rlc2M6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIGV1IHNlbSBtYXhpbXVzLCBkaWN0dW0gbG9yZW0gbmVjLCB0aW5jaWR1bnQgdXJuYS4gRnVzY2UgcmhvbmN1cyBsYWN1cyBhbnRlLCBxdWlzIG1vbGxpcyBleCB0aW5jaWR1bnQgYWMuIFNlZCBzaXQgYW1ldCB0ZW1wdXMgb3JjaS4gJyxcclxuICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzRGF0YVxyXG59LHtcclxuICBpZDogNCxcclxuICBuYW1lOiAnRHJ5IENsZWFuaW5nJyxcclxuICBzaG9ydF9kZXNjOiAnRm9yIHNlbnNpdGl2ZSBhbmQgc29mdCBmYWJyaWNzJyxcclxuICBpbWFnZTogSW1hZ2UsXHJcbiAgZGV0YWlsZWRfZGVzYzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgZXUgc2VtIG1heGltdXMsIGRpY3R1bSBsb3JlbSBuZWMsIHRpbmNpZHVudCB1cm5hLiBGdXNjZSByaG9uY3VzIGxhY3VzIGFudGUsIHF1aXMgbW9sbGlzIGV4IHRpbmNpZHVudCBhYy4gU2VkIHNpdCBhbWV0IHRlbXB1cyBvcmNpLiAnLFxyXG4gIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNEYXRhXHJcbn1dXHJcblxyXG5leHBvcnQgY29uc3QgdGVzdGltb25pYWxEYXRhIDogdGVzdGltb25pYWxzVHlwZVtdID0gW3tcclxuICBpZDogMSxcclxuICBuYW1lOiBcIkFyanVuXCIsXHJcbiAgcmV2aWV3OiBcIlRoaXMgcHJvZHVjdCBpcyBzbyBjb29sIGFuZCBjcmVhdGUgc28gbXVjaCB2YWx1ZSBibGEgYmxhIGJsYSBibGFcIixcclxuICByYXRpbmc6IDUsXHJcbiAgc291cmNlOiBcIkdvb2dsZVwiXHJcbn0se1xyXG4gIGlkOiAyLFxyXG4gICAgbmFtZTogXCJBcmp1blwiLFxyXG4gICAgcmV2aWV3OiBcIlRoaXMgcHJvZHVjdCBpcyBzbyBjb29sIGFuZCBjcmVhdGUgc28gbXVjaCB2YWx1ZSBibGEgYmxhIGJsYSBibGFcIixcclxuICAgIHJhdGluZzogNSxcclxuICAgIHNvdXJjZTogXCJHb29nbGVcIlxyXG4gIH0se1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiBcIkFyanVuXCIsXHJcbiAgICByZXZpZXc6IFwiVGhpcyBwcm9kdWN0IGlzIHNvIGNvb2wgYW5kIGNyZWF0ZSBzbyBtdWNoIHZhbHVlIGJsYSBibGEgYmxhIGJsYVwiLFxyXG4gICAgcmF0aW5nOiA1LFxyXG4gICAgc291cmNlOiBcIkdvb2dsZVwiXHJcbiAgfSx7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6IFwiQXJqdW5cIixcclxuICAgIHJldmlldzogXCJUaGlzIHByb2R1Y3QgaXMgc28gY29vbCBhbmQgY3JlYXRlIHNvIG11Y2ggdmFsdWUgYmxhIGJsYSBibGEgYmxhXCIsXHJcbiAgICByYXRpbmc6IDUsXHJcbiAgICBzb3VyY2U6IFwiR29vZ2xlXCJcclxuICB9LHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogXCJBcmp1blwiLFxyXG4gICAgcmV2aWV3OiBcIlRoaXMgcHJvZHVjdCBpcyBzbyBjb29sIGFuZCBjcmVhdGUgc28gbXVjaCB2YWx1ZSBibGEgYmxhIGJsYSBibGFcIixcclxuICAgIHJhdGluZzogNSxcclxuICAgIHNvdXJjZTogXCJHb29nbGVcIlxyXG4gIH1dXHJcblxyXG4gIGV4cG9ydCBjb25zdCBwcm9jZXNzU3RlcERhdGEgOiBwcm9jZXNzU3RlcERhdGFUeXBlW10gPSBbe1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZGF0YTogXCJGb2xsb3cgdGhpcyBzdGVwIHRvIHN0YXJ0IGNyZWF0aW5nIHZhbHVlIGZvciB5b3VyIGN1c3RvbWVyc1wiXHJcbiAgfSx7XHJcbiAgICBpZDogMixcclxuICAgIGRhdGE6IFwiRm9sbG93IHRoaXMgc3RlcCB0byBzdGFydCBjcmVhdGluZyB2YWx1ZSBmb3IgeW91ciBjdXN0b21lcnNcIlxyXG59LHtcclxuICAgIGlkOiAzLFxyXG4gICAgZGF0YTogXCJGb2xsb3cgdGhpcyBzdGVwIHRvIHN0YXJ0IGNyZWF0aW5nIHZhbHVlIGZvciB5b3VyIGN1c3RvbWVyc1wiXHJcbn1dXHJcblxyXG5leHBvcnQgY29uc3QgZmVhdHVyZXNEYXRhIDogZmVhdHVyZXNUeXBlW10gPSBbe1xyXG4gIHRpdGxlOiBcIkN1c3RvbWVyIHNlcnZpY2Ugb24geW91ciBmaW5nZXJ0aXBzXCIsXHJcbiAgZGVzYzogXCJBbnkgY2hhbmdlIGluIGRlbGl2ZXJ5IHRpbWVzIG9yIGRhdGUsIG9yIGlmIHNvbWV0aGluZyBnb2VzIHdyb25nLCB3ZSBhcmUgaGVyZS4gT3VyIGN1c3RvbWVyIHN1cHBvcnQgdGVhbSB3aWxsIGFzc2lzdCB5b3UgZ2xhZGx5LlwiLFxyXG4gIGltZzogXCJcIlxyXG59LHtcclxuICB0aXRsZTogXCJDdXN0b21lciBzZXJ2aWNlIG9uIHlvdXIgZmluZ2VydGlwc1wiLFxyXG4gIGRlc2M6IFwiQW55IGNoYW5nZSBpbiBkZWxpdmVyeSB0aW1lcyBvciBkYXRlLCBvciBpZiBzb21ldGhpbmcgZ29lcyB3cm9uZywgd2UgYXJlIGhlcmUuIE91ciBjdXN0b21lciBzdXBwb3J0IHRlYW0gd2lsbCBhc3Npc3QgeW91IGdsYWRseS5cIixcclxuICBpbWc6IFwiXCJcclxufV1cclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlc0RhdGEgOiBwYWdlc1R5cGVbXSA9IFt7XHJcbiAgdGl0bGU6ICdIb21lJyxcclxuICBwYXRoOiAnLycsXHJcbn0se1xyXG4gIHRpdGxlOiAnQ29udGFjdCB1cycsXHJcbiAgcGF0aDogJy9jb250YWN0JyxcclxuICBpbkhlYWRlcjogdHJ1ZVxyXG59LHtcclxuICB0aXRsZTogJ0Fib3V0IHVzJyxcclxuICBwYXRoOiAnL2Fib3V0JyxcclxuICBpbkhlYWRlcjogdHJ1ZVxyXG59LHtcclxuICB0aXRsZTogJ1ByaWNpbmcnLFxyXG4gIHBhdGg6ICcvcHJpY2luZycsXHJcbiAgaW5IZWFkZXI6IHRydWVcclxufSx7XHJcbiAgdGl0bGU6ICdIb3cgaXRcXCdzIHdvcmtzJyxcclxuICBwYXRoOiAnL2hvd0l0c1dvcmtzJyxcclxuICBpbkhlYWRlcjogdHJ1ZVxyXG59LHtcclxuICB0aXRsZTogJ0xvZ2luJyxcclxuICBwYXRoOiAnL2F1dGgvbG9naW4nLFxyXG4gIGlzQWN0aW9uOiB0cnVlXHJcbn0se1xyXG4gIHRpdGxlOiAnUmVnaXN0ZXInLFxyXG4gIHBhdGg6ICcvYXV0aC9yZWdpc3RlcicsXHJcbiAgaXNBY3Rpb246IHRydWVcclxufSx7XHJcbiAgdGl0bGU6ICdBdXRoJyxcclxuICBwYXRoOiAnL2F1dGgnXHJcbn0se1xyXG4gIHRpdGxlOiAnQm9vayBOb3cnLFxyXG4gIHBhdGg6ICcvYm9vaycsXHJcbiAgaXNBY3Rpb246IHRydWVcclxufV0iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCdcclxuXHJcbmNvbnN0IFNlcnZpY2VzUGFnZSA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtWzgwcHhdJz5cclxuICAgICAgICA8cD5TZXJ2aWNlczwvcD5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzUGFnZSIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJ34vY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlJ1xyXG5cclxuY29uc3QgSW5kZXggOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNlcnZpY2UgLz5cclxuICAgICAgPFNlcnZpY2UgLz4gXHJcbiAgICAgIDxTZXJ2aWNlIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2VydmljZXNUeXBlIH0gZnJvbSAnfi90eXBlcy90eXBlcydcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvZHJ5LWNsZWFuaW5nLnBuZydcclxuXHJcbnR5cGUgc2VydmljZVByb3BzID0ge1xyXG4gIHNlcnZpY2U6IHNlcnZpY2VzVHlwZVxyXG59XHJcblxyXG5jb25zdCBTZXJ2aWNlIDogUmVhY3QuRkM8c2VydmljZVByb3BzPiA9ICh7c2VydmljZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17YC9wcmljaW5nLyR7c2VydmljZS5uYW1lfWB9IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctODAgcC0zIGgtMjQgZ2FwLTIgcm91bmRlZC1tZCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBiZy13aGl0ZSBob3Zlcjpkcm9wLXNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQnPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgb3BhY2l0eS0xMDAgaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlbiBoLVs1MHB4XSB3LVs1MHB4XSc+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nIGgtZnVsbCB3LWZ1bGwnIHNyYz17SW1hZ2V9IC8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC1bM3B4XSBvcGFjaXR5LTEwMCc+XHJcbiAgICAgICAgPHA+e3NlcnZpY2UubmFtZX08L3A+XHJcbiAgICAgICAgPHA+e3NlcnZpY2Uuc2hvcnRfZGVzY308L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvYT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2UiLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCc0JhZyB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgT3V0bGV0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBDb3N0RXN0aW1hdG9yIGZyb20gXCJ+L2NvbXBvbmVudHMvcHJpY2luZy9jb3N0RXN0aW1hdG9yXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIn4vY29tcG9uZW50cy9zZXJ2aWNlcy9jb250YWluZXJcIjtcclxuaW1wb3J0IHsgc2VydmljZXNEYXRhIH0gZnJvbSBcIn4vZGF0YS9kYXRhXCI7XHJcbmltcG9ydCB7IHNlcnZpY2VzVHlwZSB9IGZyb20gXCJ+L3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7IENnQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcclxuaW1wb3J0IENhcnRQcm92aWRlciwgeyBDYXJ0Q29udGV4dCwgQ2FydENvbnRleHRUeXBlIH0gZnJvbSBcIn4vY29tcG9uZW50cy9jb250ZXh0L2NhcnRDb250ZXh0XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCJ+L2NvbXBvbmVudHMvdWkvY2FydFwiO1xyXG5pbXBvcnQgSW5mbyBmcm9tIFwifi9jb21wb25lbnRzL3VpL2luZm9cIjtcclxuaW1wb3J0IEluZm9XcmFwcGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvd3JhcHBlcnMvaW5mb1dyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8c2VydmljZXNUeXBlW10+ID0+IHtcclxuICByZXR1cm4gc2VydmljZXNEYXRhO1xyXG59O1xyXG5cclxuY29uc3QgUHJpY2luZ1BhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHNlcnZpY2VzID0gdXNlTG9hZGVyRGF0YTxzZXJ2aWNlc1R5cGVbXT4oKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKChwcmV2KSA9PiAhcHJldilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFByb3ZpZGVyPlxyXG4gICAgICA8SW5mb1dyYXBwZXIgaGVhZGluZz1cIk91ciBQcmljaW5nXCIgc3ViSGVhZGluZz1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LVs4MCVdIGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC0xMFwiPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBzZXJ2aWNlcz17c2VydmljZXN9IC8+XHJcbiAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgICA8Q2FydCBvcGVuPXtvcGVufSBoYW5kbGVPcGVuPXtoYW5kbGVPcGVufSAvPlxyXG4gICAgICAgICAgPENvc3RFc3RpbWF0b3Igb3Blbj17b3Blbn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JbmZvV3JhcHBlcj5cclxuICAgIDwvQ2FydFByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nUGFnZTtcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcbmltcG9ydCB7IGl0ZW1PcGVyYXRpb24gfSBmcm9tIFwifi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCwgQ2FydENvbnRleHRUeXBlIH0gZnJvbSBcIi4uL2NvbnRleHQvY2FydENvbnRleHRcIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xyXG5cclxudHlwZSBjb3N0RXN0aW1hdG9yUHJvcHMgPSB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IENvc3RFc3RpbWF0b3I6IFJlYWN0LkZDPGNvc3RFc3RpbWF0b3JQcm9wcz4gPSAoeyBvcGVuIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBjYXJ0IH0gPSBSZWFjdC51c2VDb250ZXh0KENhcnRDb250ZXh0KSBhcyBDYXJ0Q29udGV4dFR5cGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q1NTVHJhbnNpdGlvblxyXG4gICAgICB0aW1lb3V0PXsyMDB9XHJcbiAgICAgIGluPXtvcGVufVxyXG4gICAgICBjbGFzc05hbWVzPXt7XHJcbiAgICAgICAgZW50ZXI6IFwiaC0wXCIsXHJcbiAgICAgICAgZW50ZXJBY3RpdmU6IFwiaC1hdXRvIHRyYW5zaXRpb24gZHVyYXRpb24tWzIwMG1zXVwiLFxyXG4gICAgICAgIGV4aXQ6IFwiaC1hdXRvXCIsXHJcbiAgICAgICAgZXhpdEFjdGl2ZTogXCJoLTAgdHJhbnNpdGlvbiBkdXJhdGlvbi1bMjAwbXNdXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIHVubW91bnRPbkV4aXRcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBmbGV4IGZsZXgtY29sIGdhcC01IG1pbi13LVtjYWxjKDkwJS05OHB4KV0gcC01ICBiZy13aGl0ZSBib3R0b20tMTAgcmlnaHQtMjQgaC0wIGFuaW1hdGUtZ3Jvdy12ZXJ0aWNhbFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nIGZvbnQtdGV4dCB0ZXh0LWJsdWUgdGV4dC1bMThweF0gZm9udC1zZW1pYm9sZCc+Q29zdCBFc3RpbWF0aW9uPC9wPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cclxuICAgICAgICAgIHtjYXJ0Lml0ZW1zLm1hcCgoY2FydEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCIgIGtleT17Y2FydEl0ZW0uaXRlbS5pZH0gPlxyXG4gICAgICAgICAgICAgPHA+e2NhcnRJdGVtLnF1YW50aXR5fXggPC9wPlxyXG4gICAgICAgICAgICAgPEl0ZW0gaXRlbT17Y2FydEl0ZW0uaXRlbX0gY2xhc3Nlcz0nZmxleC0xJyBvcGVyYXRpb249e2l0ZW1PcGVyYXRpb24uU1VCVFJBQ1R9IC8+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICB7Y2FydC5pdGVtcy5sZW5ndGggPT09IDAgJiYgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHktNVwiPns8cCBjbGFzc05hbWU9XCJmb250LXRleHQgdGV4dC1bMTZweF1cIj5ObyBpdGVtIGFkZGVkIHlldC48L3A+fTwvc2VjdGlvbj59XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMiBib3JkZXItdC0yIGJvcmRlci10LXRleHQtZ3JheSBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtdGV4dCB0ZXh0LVsxNnB4XSBmb250LXNlbWlib2xkXCI+VG90YWwgUHJpY2U8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXRleHQgdGV4dC1bMTZweF0gZm9udC1ib2xkXCI+e2NhcnQuZXN0aW1hdGVkQ29zdH08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29zdEVzdGltYXRvcjtcclxuIiwgImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpdGVtVHlwZSB9IGZyb20gXCJ+L3R5cGVzL3R5cGVzXCI7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgQ2FydEl0ZW1UeXBlID0ge1xyXG4gICAgcXVhbnRpdHk6IG51bWJlcixcclxuICAgIGl0ZW06IGl0ZW1UeXBlXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhcnRUeXBlID0ge1xyXG4gICAgZXN0aW1hdGVkQ29zdDogbnVtYmVyLFxyXG4gICAgaXRlbXM6IENhcnRJdGVtVHlwZVtdXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhcnRDb250ZXh0VHlwZSA9IHtcclxuICAgIGNhcnQ6IENhcnRUeXBlXHJcbiAgICBhZGQ6IChpdGVtOiBpdGVtVHlwZSkgPT4gdm9pZCxcclxuICAgIHJlbW92ZTogKGlkOiBudW1iZXIpID0+IHZvaWRcclxuICAgIGdldFRvdGFsSXRlbXM6ICgpID0+IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENhcnRDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpXHJcblxyXG5jb25zdCBDYXJ0UHJvdmlkZXIgOiBSZWFjdC5GQyA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlPENhcnRJdGVtVHlwZVtdPihbXSlcclxuICAgIGNvbnN0IFt0b3RhbENvc3Qsc2V0VG90YWxDb3N0XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMClcclxuXHJcbiAgICBjb25zdCBnZXRUb3RhbENvc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29zdCA9IGl0ZW1zLnJlZHVjZSgocHJldixjdXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3Vyci5xdWFudGl0eSpjdXJyLml0ZW0ucHJpY2VcclxuICAgICAgICB9LDApXHJcbiAgICAgICAgc2V0VG90YWxDb3N0KGNvc3QpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkID0gKGl0ZW06IGl0ZW1UeXBlKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgocHJldiA9PiBpdGVtLmlkID09PSBwcmV2Lml0ZW0uaWQpXHJcbiAgICAgICBzZXRJdGVtcyhwcmV2ID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gOiBDYXJ0SXRlbVR5cGUgPSB7cXVhbnRpdHk6IDEsaXRlbTogaXRlbX1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucHJldixjdXJyZW50SXRlbV1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwcmV2W2luZGV4XS5xdWFudGl0eSsrXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnByZXZdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlID0gKGlkOiBudW1iZXIpIDogdm9pZCA9PiB7XHJcbiAgICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleChwcmV2ID0+IGlkID09PSBwcmV2Lml0ZW0uaWQpXHJcbiAgICAgICBpZiAoaW5kZXggIT09IC0xKXtcclxuICAgICAgICBzZXRJdGVtcyhwcmV2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZXZbaW5kZXhdLnF1YW50aXR5ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcHJldltpbmRleF0ucXVhbnRpdHktLVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2XVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2LmZpbHRlcihpdGVtID0+IGl0ZW0uaXRlbS5pZCAhPT0gaWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0VG90YWxDb3N0KClcclxuICAgIH0sW2l0ZW1zXSlcclxuXHJcbiAgICBjb25zdCBnZXRUb3RhbEl0ZW1zID0gKCkgOiBudW1iZXIgPT4ge1xyXG4gICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgocHJldixjdXJyKSA9PiB7cmV0dXJuIHByZXYgKyBjdXJyLnF1YW50aXR5fSwwKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYXJ0OiB7ZXN0aW1hdGVkQ29zdDogdG90YWxDb3N0LGl0ZW1zOiBpdGVtc30sYWRkLHJlbW92ZSxnZXRUb3RhbEl0ZW1zfX0+e2NoaWxkcmVufTwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQcm92aWRlcjtcclxuXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJzUGx1c0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyBCaU1pbnVzQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYmknXHJcbmltcG9ydCB7IGl0ZW1PcGVyYXRpb24sIGl0ZW1UeXBlIH0gZnJvbSAnfi90eXBlcy90eXBlcydcclxuaW1wb3J0IHsgQ2FydENvbnRleHQsIENhcnRDb250ZXh0VHlwZSB9IGZyb20gJy4uL2NvbnRleHQvY2FydENvbnRleHQnXHJcblxyXG50eXBlIGl0ZW1Qcm9wcyA9IHtcclxuICAgIGl0ZW06IGl0ZW1UeXBlXHJcbiAgICBvcGVyYXRpb246IGl0ZW1PcGVyYXRpb25cclxuICAgIGNsYXNzZXM/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgSXRlbSA6IFJlYWN0LkZDPGl0ZW1Qcm9wcz4gPSAoe2l0ZW0sb3BlcmF0aW9uID0gaXRlbU9wZXJhdGlvbi5BREQsY2xhc3NlcyA9ICcnfSkgPT4ge1xyXG5cclxuICBjb25zdCB7YWRkLHJlbW92ZX0gPSBSZWFjdC51c2VDb250ZXh0KENhcnRDb250ZXh0KSBhcyBDYXJ0Q29udGV4dFR5cGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC0zIGAgKyBjbGFzc2VzfT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXgtMSBmb250LXRleHQgdGV4dC1bMTZweF0nPntpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC10ZXh0IHRleHQtWzE2cHhdJz57aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAge29wZXJhdGlvbiA9PT0gaXRlbU9wZXJhdGlvbi5BREQgJiYgPEJzUGx1c0NpcmNsZSBjb2xvcj0nIzJDNEVGRicgb25DbGljaz17YWRkLmJpbmQobnVsbCxpdGVtKX0gIC8+fVxyXG4gICAgICAgIHtvcGVyYXRpb24gPT09IGl0ZW1PcGVyYXRpb24uU1VCVFJBQ1QgJiYgPEJpTWludXNDaXJjbGUgY29sb3I9JyMyQzRFRkYnIG9uQ2xpY2s9e3JlbW92ZS5iaW5kKG51bGwsaXRlbS5pZCl9ICAvPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbSIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNlcnZpY2VzVHlwZSB9IGZyb20gJ34vdHlwZXMvdHlwZXMnXHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSdcclxuXHJcbnR5cGUgY29udGFpbmVyUHJvcHMgPSB7XHJcbiAgICBzZXJ2aWNlczogc2VydmljZXNUeXBlW11cclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyIDogUmVhY3QuRkM8Y29udGFpbmVyUHJvcHM+ID0gKHtzZXJ2aWNlc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC01Jz5cclxuICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlKSAgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFNlcnZpY2Uga2V5PXtzZXJ2aWNlLmlkfSBzZXJ2aWNlPXtzZXJ2aWNlfSAvPlxyXG4gICAgICAgIH0pfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnNCYWcgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCwgQ2FydENvbnRleHRUeXBlIH0gZnJvbSBcIi4uL2NvbnRleHQvY2FydENvbnRleHRcIjtcclxuXHJcbnR5cGUgY2FydFByb3BzID0ge1xyXG4gICAgb3BlbjogYm9vbGVhbixcclxuICAgIGhhbmRsZU9wZW46ICgpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgQ2FydCA6IFJlYWN0LkZDPGNhcnRQcm9wcz4gPSAoe29wZW4saGFuZGxlT3Blbn0pID0+IHtcclxuXHJcbiAgY29uc3Qge2dldFRvdGFsSXRlbXN9ID0gUmVhY3QudXNlQ29udGV4dChDYXJ0Q29udGV4dCkgYXMgQ2FydENvbnRleHRUeXBlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgb25DbGljaz17aGFuZGxlT3Blbi5iaW5kKG51bGwpfVxyXG4gICAgICBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctdmlzaWJsZSBmaXhlZCByaWdodC0xMCBib3R0b20tMTAgYmctYmx1ZSByb3VuZGVkLWZ1bGwgaC0xMiB3LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcclxuICAgID5cclxuICAgICAgeyFvcGVuICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGgtNiB3LTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmlnaHQtWy03cHhdIHRvcC1bLTdweF0gcm91bmRlZC1mdWxsIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXRleHQgdGV4dC1bMTRweF0gdGV4dC1ibHVlIGZvbnQtYm9sZFwiPntnZXRUb3RhbEl0ZW1zKCl9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7b3BlbiA/IDxDZ0Nsb3NlIGNvbG9yPVwiI2ZmZlwiIC8+IDogPEJzQmFnIGNvbG9yPVwiI2ZmZlwiIC8+fVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tIFwifi9jb21wb25lbnRzL3ByaWNpbmcvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBzZXJ2aWNlc0RhdGEgfSBmcm9tIFwifi9kYXRhL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBuYW1lID0gcGFyYW1zLnNlcnZpY2U7XHJcbiAgY29uc3Qgc2VydmljZSA9IHNlcnZpY2VzRGF0YS5maWx0ZXIoKHNlcnZpY2UpID0+IHNlcnZpY2UubmFtZSA9PT0gbmFtZSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2U6IHNlcnZpY2VbMF0sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IFNpbmdsZVNlcnZpY2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZXJ2aWNlIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlU2VydmljZTtcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xyXG5pbXBvcnQgeyBzZXJ2aWNlc1R5cGUgfSBmcm9tICd+L3R5cGVzL3R5cGVzJ1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSdcclxuXHJcbmNvbnN0IFNlcnZpY2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHtzZXJ2aWNlfSA9IHVzZUxvYWRlckRhdGE8e3NlcnZpY2U6IHNlcnZpY2VzVHlwZX0+KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGZsZXgtMSB3LWF1dG8gaC1hdXRvIGdhcC0yJz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC1bMzJweF0gZm9udC1zZW1pYm9sZCc+e3NlcnZpY2UubmFtZX08L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC10ZXh0IHRleHQtWzE2cHhdJz57c2VydmljZS5kZXRhaWxlZF9kZXNjfTwvcD5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTggbXQtNSc+XHJcbiAgICAgICAgICAgIHtzZXJ2aWNlLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDYXRlZ29yeSBrZXk9e2NhdGVnb3J5LmlkfSBjYXRlZ29yeT17Y2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZSIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNhdGVnb3J5VHlwZSwgaXRlbU9wZXJhdGlvbiB9IGZyb20gJ34vdHlwZXMvdHlwZXMnXHJcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSdcclxuXHJcbnR5cGUgY2F0ZWdvcnlQcm9wcyA9IHtcclxuICAgIGNhdGVnb3J5OiBjYXRlZ29yeVR5cGVcclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcnkgOiBSZWFjdC5GQzxjYXRlZ29yeVByb3BzPiA9ICh7Y2F0ZWdvcnl9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0zJz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtdGV4dCB0ZXh0LVsxOHB4XSB0ZXh0LXRleHQtZ3JheSB0ZXh0LWxlZnQgZm9udC1zZW1pYm9sZCc+e2NhdGVnb3J5Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMic+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gb3BlcmF0aW9uPXtpdGVtT3BlcmF0aW9uLkFERH0gLz5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtMSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICA8cD5ObyBTZXJ2aWNlIFNlbGVjdGVkPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZXMgZnJvbSBcIn4vY29tcG9uZW50cy9ob21lL2ZlYXR1cmVzTGlzdFwiO1xuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvaG9tZS9sYW5kaW5nUGFnZVwiO1xuaW1wb3J0IFByb2Nlc3MgZnJvbSBcIn4vY29tcG9uZW50cy9ob21lL3Byb2Nlc3NcIjtcbmltcG9ydCBSZXZpZXdzUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL2hvbWUvdGVzdGltb25pYWxzTGlzdFwiO1xuaW1wb3J0IHsgZmVhdHVyZXNEYXRhLCBwcm9jZXNzU3RlcERhdGEsIHRlc3RpbW9uaWFsRGF0YSB9IGZyb20gXCJ+L2RhdGEvZGF0YVwiO1xuaW1wb3J0IHsgaW5kZXhQYWdlRGF0YVR5cGUgfSBmcm9tIFwifi90eXBlcy90eXBlc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkgOiBQcm9taXNlPGluZGV4UGFnZURhdGFUeXBlPiB7XG4gICAgIGNvbnN0IGRhdGEgOiBpbmRleFBhZ2VEYXRhVHlwZSA9IHtcbiAgICAgICB0ZXN0aW1vbmlhbHM6IHtcbiAgICAgICAgIGhlYWRpbmc6IFwiVGVzdGltb25pYWxzXCIsXG4gICAgICAgICBzdWJfaGVhZGluZzogXCJQZW9wbGUgbG92ZSB3aGF0IHdlIGRvIGFuZCB3ZSB3YW50IHRvIGxldCB5b3VyIGtub3dcIixcbiAgICAgICAgIGRhdGE6IHRlc3RpbW9uaWFsRGF0YVxuICAgICAgIH0sXG4gICAgICAgcHJvY2Vzczoge1xuICAgICAgICAgaGVhZGluZzogXCJIb3cgaXQncyB3b3Jrc1wiLFxuICAgICAgICAgc3ViX2hlYWRpbmc6IFwiV293IHRoaXMgcHJvamVjdCBpcyBzbyBhd2Vzb21lISBMZXQgbWUgdGVsbCB5b3Ugd2h5IHJpZ2h0IGhlcmUsIHJpZ2h0IG5vdy5cIixcbiAgICAgICAgIGRhdGE6IHByb2Nlc3NTdGVwRGF0YVxuICAgICAgIH0sXG4gICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgIGRhdGE6IGZlYXR1cmVzRGF0YVxuICAgICAgIH1cbiAgICAgfVxuICAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1hdXRvIHJlbGF0aXZlIHotMjAgdy1zY3JlZW4gb3ZlcmZsb3cteC1oaWRkZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc2Nyb2xsLXNtb290aFwiPlxuICAgICAgPExhbmRpbmdQYWdlIC8+XG4gICAgICA8RmVhdHVyZXMgLz5cbiAgICAgIDxQcm9jZXNzIC8+XG4gICAgICA8UmV2aWV3c1BhZ2UgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgaW5kZXhQYWdlRGF0ZVR5cGUgfSBmcm9tIFwifi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tIFwiLi4vZmVhdHVyZXMvZmVhdHVyZVwiO1xyXG5cclxuY29uc3QgRmVhdHVyZXNMaXN0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7ZmVhdHVyZXN9ID0gdXNlTG9hZGVyRGF0YTxpbmRleFBhZ2VEYXRlVHlwZT4oKVxyXG5cclxuICBjb25zdCBwYXJlbnRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3BhcmVudFJlZn0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVs4MCVdIG1pbi1oLVsxMDB2aF0gaC1hdXRvIGdhcC00MCBteS0yMCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAge2ZlYXR1cmVzLmRhdGEubWFwKChmZWF0dXJlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmUga2V5PXtNYXRoLnJhbmRvbSgpKjEwMH0gZmVhdHVyZT17ZmVhdHVyZX0gb3B0aW9ucz17e3RocmVzaG9sZDogMC4yLHJvb3Q6IHBhcmVudFJlZj8uY3VycmVudH19IC8+XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVzTGlzdDtcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcclxuaW1wb3J0IHVzZUluVmlldyBmcm9tICd+L2hvb2tzL3VzZUluVmlldydcclxuaW1wb3J0IHsgZmVhdHVyZXNUeXBlIH0gZnJvbSAnfi90eXBlcy90eXBlcydcclxuXHJcbnR5cGUgZmVhdHVyZVByb3BzID0ge1xyXG4gIGZlYXR1cmU6IGZlYXR1cmVzVHlwZVxyXG4gIG9wdGlvbnM6IEludGVyc2VjdGlvbk9wdGlvbnNcclxufVxyXG5cclxuY29uc3QgRmVhdHVyZSA6IFJlYWN0LkZDPGZlYXR1cmVQcm9wcz4gPSAoe2ZlYXR1cmUsb3B0aW9uc30pID0+IHtcclxuXHJcbiAgY29uc3Qge3JlZixpblZpZXd9ID0gdXNlSW5WaWV3KG9wdGlvbnMpXHJcblxyXG4gIHJldHVybiAoIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17YHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGV2ZW46ZGVsYXktMTAwIG9kZDpkZWxheS0zMDAgZmxleCBmbGV4LWNvbC1yZXZlcnNlIHNtOmZsZXgtcm93IHNtOmV2ZW46ZmxleC1yb3ctcmV2ZXJzZSAke2luVmlldyA/ICcgb3BhY2l0eS0xMDAgc2NhbGUtMTAwJyA6ICdvcGFjaXR5LTAgc2NhbGUtMCd9IGB9PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBmbGV4LTEgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgZ2FwLTNgfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtdGV4dC1ncmF5IHRleHQtWzE0cHhdIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICBGQVNUIENVU1RPTUVSIFNVUFBPUlRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bMzJweF0gZm9udC1oZWFkaW5nIGxlYWRpbmctWzQ0cHhdIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICB7ZmVhdHVyZS50aXRsZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gZm9udC10ZXh0IGZvbnQtbm9ybWFsIGxlYWRpbmctNlwiPlxyXG4gICAgICAgICAgICAgIHtmZWF0dXJlLmRlc2N9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZGVsYXktMTAwIGhvdmVyOmJnLWhvdmVyLWJsYWNrIGJnLWJsYWNrIHJvdW5kZWQtbWQgZm9udC10ZXh0IHB4LTMgcHktMiB0ZXh0LXdoaXRlIG10LTJcIj5cclxuICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxwPkltYWdlIEhlcmU8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZSIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInXHJcblxyXG5cclxuY29uc3QgdXNlSW5WaWV3ID0gKG9wdGlvbnM6IEludGVyc2VjdGlvbk9wdGlvbnMsb25jZTogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuXHJcbiAgICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICAgICBjb25zdCBbaW5WaWV3LHNldEluVmlld10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgIGNvbnN0IGNhbGxiYWNrID0gYXN5bmMgKGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtlbnRyeV0gPSBlbnRyaWVzXHJcbiAgICAgICAgc2V0SW5WaWV3KChwcmV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByZXYgJiYgb25jZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeS5pc0ludGVyc2VjdGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICB9XHJcblxyXG4gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssb3B0aW9ucylcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIG9ic2VydmVyLm9ic2VydmUocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgaWYgKHJlZi5jdXJyZW50KSBvYnNlcnZlci51bm9ic2VydmUocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgIH0sW3JlZl0pXHJcblxyXG4gICAgIHJldHVybiB7aW5WaWV3LHJlZn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5WaWV3IiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGltYWdlIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2xwYmcucG5nXCI7XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1bMTAwJV0gbWluLWgtYXV0byBtaW4taC1bMTAwdmhdIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhbmltYXRlLWZhZGUtb3V0IG9wYWNpdHktMCBwLTQgZmxleCBmbGV4LWNvbCBzbTppdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC13aGl0ZSBzbTp3LVs2MCVdIHNtOnB0LTQgc206anVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVs0MnB4XSBtZDp0ZXh0LWNlbnRlciB0ZXh0LWJsdWUgZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgc206dGV4dC13aGl0ZSBteC1hdXRvIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgTW9zdCBUcnVzdGVkIGFuZCBSZWxpYWJsZSBEcnljbGVhbmVyIEluIEZhcmlkYWJhZFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtYmxhY2sgc206dGV4dC13aGl0ZSBmb250LXRleHRcIj5cclxuICAgICAgICAgIEhlcmUgeW91IGNhbiBwdXQgYSBzaG9ydCBkZXNjcmlwdGlvbiBhYm91dCB5b3VyIHByb2plY3QuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtMyBteS0yXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBiZy1ibHVlIHAtMyByb3VuZGVkLWxnIHRleHQtd2hpdGUgZm9udC10ZXh0XCI+XHJcbiAgICAgICAgICAgIEJvb2sgbm93XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1ibHVlIHAtMyByb3VuZGVkLWxnIHNtOnRleHQtYmx1ZSBmb250LXRleHRcIj5cclxuICAgICAgICAgICAgU2VlIGhvdyBpdCdzIHdvcmtcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhpZGRlbiBhYnNvbHV0ZSBzbTpibG9jayB3LWZ1bGwgaC1mdWxsIHotWy0xXSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgYWx0PVwicGljXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgc206bWluLWgtW2NhbGMoMTAwJS0yMDBweCldXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcclxuaW1wb3J0IHVzZUluVmlldyBmcm9tICd+L2hvb2tzL3VzZUluVmlldydcclxuaW1wb3J0IHsgaW5kZXhQYWdlRGF0ZVR5cGUgfSBmcm9tICd+L3R5cGVzL3R5cGVzJ1xyXG5pbXBvcnQgU3RlcCBmcm9tICcuLi9wcm9jZXNzL3N0ZXAnXHJcblxyXG5jb25zdCBQcm9jZXNzIDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3Byb2Nlc3N9ID0gdXNlTG9hZGVyRGF0YTxpbmRleFBhZ2VEYXRlVHlwZT4oKVxyXG5cclxuICAgIGNvbnN0IHBhcmVudFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IHtyZWYsaW5WaWV3fSA9IHVzZUluVmlldyh7dGhyZXNob2xkOiAwLjI1fSlcclxuICAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIG1pbi1oLVsxMDB2aF0gbWluLXctWzEwMCVdIGJnLWluaGVyaXQgZmxleCc+XHJcbiAgICAgICA8c2VjdGlvbiByZWY9e3JlZn0gY2xhc3NOYW1lPXtgdy1bODAlXSBtaW4taC1bODB2aF0gYmctd2hpdGUgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBtLWF1dG8gcC0xMCBnYXAtMTAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTUwMGB9ID5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBkZWxheS1bMTAwbXNdIGZsZXgtMSBmbGV4IGZsZXgtY29sICR7aW5WaWV3ID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteC0wXCIgOiBcIm9wYWNpdHktMCAtdHJhbnNsYXRlLXgtWzEwMCVdXCJ9YH0gID5cclxuICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICA8cD5JbWFnZSBIZXJlPC9wPlxyXG4gICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4LTEgZmxleCBmbGV4LWNvbCBnYXAtNCc+XHJcbiAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC1bNDJweF0gZm9udC1ib2xkJz57cHJvY2Vzcy5oZWFkaW5nfTwvaDE+XHJcbiAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LXRleHQgdGV4dC1bMTRweF0gZm9udC1ub3JtYWwnPntwcm9jZXNzLnN1Yl9oZWFkaW5nfTwvaDE+XHJcbiAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IHJlZj17cGFyZW50UmVmfSBjbGFzc05hbWU9e2B0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBkZWxheS1bMjAwbXNdIGZsZXgtMSBmbGV4IGZsZXgtY29sIGdhcC0xMCAke2luVmlldyA/IFwib3BhY2l0eS0xMDBcIiA6IFwib3BhY2l0eS0wXCJ9YH0+XHJcbiAgICAgICAgICAgIHtwcm9jZXNzLmRhdGEubWFwKChzdGVwKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiA8U3RlcCBzdGVwPXtzdGVwfSBrZXk9e3N0ZXAuaWR9IG9wdGlvbnM9e3t0aHJlc2hvbGQ6IDAuNSxyb290OiBwYXJlbnRSZWY/LmN1cnJlbnR9fSAvPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Fic29sdXRlIHctWzc1JV0gaC1bODB2aF0gbS1hdXRvIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIHRvcC0wIGJnLVsjRjJGMkYyXSB6LVstMV0gdHJhbnNsYXRlLXktMSBzaGFkb3ctbGcnPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvY2VzcyAiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCB1c2VJblZpZXcgZnJvbSAnfi9ob29rcy91c2VJblZpZXcnO1xyXG5pbXBvcnQgeyBwcm9jZXNzU3RlcERhdGFUeXBlIH0gZnJvbSAnfi90eXBlcy90eXBlcyc7XHJcblxyXG50eXBlIFN0ZXBQcm9wcyA9IHtcclxuICAgIHN0ZXA6IHByb2Nlc3NTdGVwRGF0YVR5cGUsXHJcbiAgICBvcHRpb25zOiBJbnRlcnNlY3Rpb25PcHRpb25zXHJcbn1cclxuXHJcbmNvbnN0IFN0ZXAgOiBSZWFjdC5GQzxTdGVwUHJvcHM+ID0gKHtzdGVwLG9wdGlvbnN9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3JlZixpblZpZXd9ID0gdXNlSW5WaWV3KG9wdGlvbnMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiByZWY9e3JlZn0ga2V5PXtzdGVwLmlkfSBjbGFzc05hbWU9e2Bob3ZlcjotdHJhbnNsYXRlLXktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBkZWxheS1bJHsoc3RlcC5pZCoxMDApKzIwMH1tc10gZmxleC0xIGJvcmRlci1iLTIgYm9yZGVyLXRleHQtZ3JheSBsYXN0OmJvcmRlci1ub25lICR7aW5WaWV3ID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteC0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteC0xMFwifWB9ID5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC1bMzJweF0gZm9udC1ib2xkJz5TdGVwIHtzdGVwLmlkfTwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LXRleHQgdGV4dC1bMTRweF0gZm9udC1ub3JtYWwnPntzdGVwLmRhdGF9PC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdGVwIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xyXG5pbXBvcnQgdXNlSW5WaWV3IGZyb20gJ34vaG9va3MvdXNlSW5WaWV3J1xyXG5pbXBvcnQgeyBpbmRleFBhZ2VEYXRhVHlwZSB9IGZyb20gJ34vdHlwZXMvdHlwZXMnXHJcbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tICcuLi9UZXN0aW1vbmlhbHMvdGVzdGltb25pYWwnXHJcblxyXG5jb25zdCBUZXN0aW1vbmlhbHNMaXN0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7dGVzdGltb25pYWxzfSA9IHVzZUxvYWRlckRhdGE8aW5kZXhQYWdlRGF0YVR5cGU+KClcclxuXHJcbiAgY29uc3QgcGFyZW50UmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIFxyXG4gIGNvbnN0IHtyZWYsaW5WaWV3fSA9IHVzZUluVmlldyh7dGhyZXNob2xkOiAwLjV9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctWzgwJV0gbXktWzUwcHhdJz5cclxuICAgICAgIDxoMSBjbGFzc05hbWU9e2B0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBkZWxheS0xMDAgdGV4dC1jZW50ZXIgZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LVs0OHB4XSAke2luVmlldyA/ICdvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wJyA6ICdvcGFjaXR5LTAgLXRyYW5zbGF0ZS15LTUnfSBgfT57dGVzdGltb25pYWxzLmhlYWRpbmd9PC9oMT5cclxuICAgICAgIDxwIGNsYXNzTmFtZT17YHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGRlbGF5LTMwMCB0ZXh0LWNlbnRlciBtdC0zIGZvbnQtdGV4dCB0ZXh0LVsxNnB4XSAke2luVmlldyA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ31gfT57dGVzdGltb25pYWxzLnN1Yl9oZWFkaW5nfTwvcD5cclxuICAgICAgIDxzZWN0aW9uIHJlZj17cGFyZW50UmVmfSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1heC1oLVsxMDB2aF0gc206ZmxleC1yb3cgcHktWzUwcHhdIGgtYXV0byBnYXAtMTAgb3ZlcmZsb3cteC1zY3JvbGwgbm8tc2Nyb2xsYmFyJz5cclxuICAgICAgIHt0ZXN0aW1vbmlhbHMuZGF0YS5tYXAoKHRlc3RpbW9uaWFsKSA9PiB7XHJcbiAgICAgICAgIHJldHVybiAgPFRlc3RpbW9uaWFsIG9wdGlvbnM9e3t0aHJlc2hvbGQ6IDAuMjUscm9vdDogcGFyZW50UmVmPy5jdXJyZW50fX0ga2V5PXtNYXRoLnJhbmRvbSgpKjEwMH0gdGVzdGltb25pYWw9e3Rlc3RpbW9uaWFsfSAvPlxyXG4gICAgICAgfSl9XHJcbiAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc0xpc3QiLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCJcclxuaW1wb3J0IHVzZUluVmlldyBmcm9tIFwifi9ob29rcy91c2VJblZpZXdcIlxyXG5pbXBvcnQgeyB0ZXN0aW1vbmlhbHNUeXBlIH0gZnJvbSBcIn4vdHlwZXMvdHlwZXNcIlxyXG5cclxudHlwZSB0ZXN0aW1vbmlhbHNQcm9wcyA9IHtcclxuICAgIHRlc3RpbW9uaWFsOiB0ZXN0aW1vbmlhbHNUeXBlLFxyXG4gICAgb3B0aW9uczogSW50ZXJzZWN0aW9uT3B0aW9uc1xyXG59XHJcblxyXG5jb25zdCBUZXN0aW1vbmlhbCA6IFJlYWN0LkZDPHRlc3RpbW9uaWFsc1Byb3BzPiA9ICh7dGVzdGltb25pYWwsb3B0aW9uc30pID0+IHtcclxuXHJcbiAgY29uc3Qge3JlZixpblZpZXd9ID0gdXNlSW5WaWV3KG9wdGlvbnMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e2Bob3ZlcjpzaGFkb3ctbGcgaG92ZXI6dHJhbnNsYXRlLXktMyB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBkZWxheS0xMDAgbWluLXctWzI1MHB4XSB3LVsyNTBweF0gbWluLWgtWzI1MHB4XSBoLVsyNTBweF0gYmctd2hpdGUgcm91bmRlZC1sZyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgJHtpblZpZXcgPyAnIG9wYWNpdHktMTAwIHNjYWxlLTEwMCcgOiAnb3BhY2l0eS0wIHNjYWxlLTAnfSBgfT5cclxuICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtWzE0cHhdIGZvbnQtdGV4dCBmb250LXNlbWlib2xkIG1iLTMgbWluLWgtWzEwMHB4XSBoLVsxMDBweF0nPlwie3Rlc3RpbW9uaWFsLnJldmlld31cIjwvcD5cclxuICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBmb250LXRleHQgZm9udC1leHRyYWJvbGRcIj57dGVzdGltb25pYWwubmFtZX08L3A+XHJcbiAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXRleHQtZ3JheSB0ZXh0LVsxNHB4XSBmb250LW5vcm1hbCc+e3Rlc3RpbW9uaWFsLnNvdXJjZX08L3A+XHJcbiAgICAgICAgICAgPGEgaHJlZj17YC9yZXZpZXdzLyR7dGVzdGltb25pYWwuaWR9YH0+UmVhZCBGdWxsIFJldmlldzwvYT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWwiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCdcclxuXHJcbmNvbnN0IEF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkF1dGg8L2gxPlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aCIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5SZWdpc3RlcjwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+TG9naW48L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2I0YjdkMTU2JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1UQkRMWkpYUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1JPWk9HU1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yVFBGUEpSQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1ZTUw0VlZRUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUFBJM1dTVzcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WQlhWQkpaRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aCc6eydpZCc6J3JvdXRlcy9hdXRoJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC1PSlpISlpIQy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvbG9naW4nOnsnaWQnOidyb3V0ZXMvYXV0aC9sb2dpbicsJ3BhcmVudElkJzoncm91dGVzL2F1dGgnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9sb2dpbi1QV1ZQQ0tGUi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvcmVnaXN0ZXInOnsnaWQnOidyb3V0ZXMvYXV0aC9yZWdpc3RlcicsJ3BhcmVudElkJzoncm91dGVzL2F1dGgnLCdwYXRoJzoncmVnaXN0ZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9yZWdpc3Rlci1VQjNaM05YVS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvbnRhY3QvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY29udGFjdC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb250YWN0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb250YWN0L2luZGV4LTYyR1VTT1VBLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtVUpKSFpBU0wuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByaWNpbmcnOnsnaWQnOidyb3V0ZXMvcHJpY2luZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcmljaW5nJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByaWNpbmctQ1ZZNVBXRjcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlOTkxDS0dZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMkdOSElHWUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BTjVCUVZKSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNQQUdHREJELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByaWNpbmcvJHNlcnZpY2UnOnsnaWQnOidyb3V0ZXMvcHJpY2luZy8kc2VydmljZScsJ3BhcmVudElkJzoncm91dGVzL3ByaWNpbmcnLCdwYXRoJzonOnNlcnZpY2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJpY2luZy8kc2VydmljZS03S0hLVkQ2TC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUFBJM1dTVzcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WQlhWQkpaRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcmljaW5nL2luZGV4Jzp7J2lkJzoncm91dGVzL3ByaWNpbmcvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9wcmljaW5nJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByaWNpbmcvaW5kZXgtRDJERjJVWTQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcyc6eydpZCc6J3JvdXRlcy9zZXJ2aWNlcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXJ2aWNlcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy1JMkUyQkpGUC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NlcnZpY2VzL2luZGV4Jzp7J2lkJzoncm91dGVzL3NlcnZpY2VzL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvc2VydmljZXMnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VydmljZXMvaW5kZXgtV0U3UzVaWVIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJHTkhJR1lHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdG9yZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc3RvcmVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3N0b3JlcycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3RvcmVzL2luZGV4LUNRSUJURkxZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JTk5MQ0tHWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNQQUdHREJELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1CNEI3RDE1Ni5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtB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
