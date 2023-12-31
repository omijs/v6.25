/*!
 *  rspa v0.0.1 by dntzhang
 *  Router for the web.
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
 */
export declare function hashChange(evt: any): void;
export declare function route(path: any, callback: any): void;
declare const router: {
    route: typeof route;
    hashChange: typeof hashChange;
};
export default router;
