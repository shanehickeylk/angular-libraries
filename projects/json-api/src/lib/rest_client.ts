import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Headers as AngularHeaders, Request, RequestOptions,
        RequestMethod as RequestMethods, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { Interceptor } from './models';

import { param } from './params';

@Injectable()
export class RESTClient {

    constructor(private http: Http,
                private interceptors: Interceptor[],
                private endPoint: string) {}

    raw<T>(url, method = RequestMethods.Get, headers?, body?, search?) {

        const options = new RequestOptions({
            method,
            url: url,
            headers,
            body,
            search,
            withCredentials: true
        });

        const request = this.applyRequestInterceptorss(new Request(options));

        const response = this.applyResponseInterceptorss(this.http.request(request));

        return response as Observable<T>;
    }

    //
    // Request Interceptors
    //
    // @method requestInterceptors
    // @param {Request} req - request object
    //
    protected applyRequestInterceptorss(request: Request) {
        return this.interceptors.reduce((prev, curr) => {
            if (curr.request) {
                return curr.request(prev);
            } else {
                return prev;
            }
        }, request);
    }

    //
    // Response Interceptors
    //
    // @method responseInterceptors
    // @param {Response} res - response object
    // @returns {Response} res - transformed response object
    //
    protected applyResponseInterceptorss($response: Observable<Response>): Observable<any> {
        return this.interceptors.reduce((prev, curr) => {
            let $newResponse: Observable<any> = prev;

            if (curr.response) {
                $newResponse = prev.pipe(map(curr.response.bind(curr)));
            }

            if (curr.error) {
                $newResponse = prev.pipe(catchError(curr.error.bind(curr)));
            }

            return $newResponse;
        }, $response);
    }

}

function paramBuilder(paramName: string) {
    return (key: string) => {
        return (target: RESTClient, propertyKey: string, parameterIndex: number) => {
            const metadataKey = `${propertyKey}_${paramName}_parameters`;
            const paramObj: any = {
                key: key,
                parameterIndex: parameterIndex
            };

            if (Array.isArray(target[metadataKey])) {
                target[metadataKey].push(paramObj);
            } else {
                target[metadataKey] = [paramObj];
            }

        };
    };
}

//
// Path variable of a method's url, type: string
// @param {string} key - path key to bind value
//
export const Path = paramBuilder('Path');

//
// Query value of a method's url, type: string
// @param {string} key - query key to bind value
//
export const Query = paramBuilder('Query')('Query');

//
// Body of a REST method, type: key-value pair object
// Only one body per method!
//
export const Body = paramBuilder('Body');

//
// Custom header of a REST method, type: string
// @param {string} key - header key to bind value
//
export const Header = paramBuilder('Header');


//
// Set custom headers for a REST method
// @param {Object} headersDef - custom headers in a key-value pair
//
export function Headers(headersDef: any) {
    return (target: RESTClient, propertyKey: string, descriptor: any) => {
        descriptor.headers = headersDef;
        return descriptor;
    };
}

function methodBuilder(method: number) {
    return (url: string) => {
        return (target: RESTClient, propertyKey: string, descriptor: any) => {

            const pPath = target[`${propertyKey}_Path_parameters`];
            const pQuery = target[`${propertyKey}_Query_parameters`];
            const pBody = target[`${propertyKey}_Body_parameters`];
            const pHeader = target[`${propertyKey}_Header_parameters`];

            descriptor.value = function(...args: any[]) {

                // Body
                let body = null;
                if (pBody) {
                    body = {};

                    for (let k in pBody) {
                        if (pBody.hasOwnProperty(k)) {
                            body[pBody[k].key] = args[pBody[k].parameterIndex];
                        }
                    }

                    body = JSON.stringify(body);
                }

                // Path
                let resUrl: string = url;
                if (pPath) {

                    for (let k in pPath) {
                        if (pPath.hasOwnProperty(k)) {
                            resUrl = resUrl.replace('{' + pPath[k].key + '}', args[pPath[k].parameterIndex]);
                        }
                    }
                }

                // Query
                let search = '';

                if (pQuery) {
                    search = param(args[pQuery[0].parameterIndex]);
                }

                // Headers
                // set class default headers
                const headers = new AngularHeaders();
                // set method specific headers
                for (let k in descriptor.headers) {
                    if (descriptor.headers.hasOwnProperty(k)) {
                        headers.append(k, descriptor.headers[k]);
                    }
                }
                // set parameter specific headers
                if (pHeader) {
                    for (let k in pHeader) {
                        if (pHeader.hasOwnProperty(k)) {
                            headers.append(pHeader[k].key, args[pHeader[k].parameterIndex]);
                        }
                    }
                }

                return this.raw(
                    `${this.endPoint}${resUrl}`,
                    method,
                    headers,
                    body,
                    search
                );
            };

            return descriptor;
        };
    };
}

//
// GET method
// @param {string} url - resource url of the method
//
export const GET = methodBuilder(RequestMethods.Get);

//
// POST method
// @param {string} url - resource url of the method
//
export const POST = methodBuilder(RequestMethods.Post);

//
// PUT method
// @param {string} url - resource url of the method
//
export const PUT = methodBuilder(RequestMethods.Put);

//
// PUT method
// @param {string} url - resource url of the method
//
export const PATCH = methodBuilder(RequestMethods.Patch);

//
// DELETE method
// @param {string} url - resource url of the method
//
export const DELETE = methodBuilder(RequestMethods.Delete);

//
// HEAD method
// @param {string} url - resource url of the method
//
export const HEAD = methodBuilder(RequestMethods.Head);

export const REST_PROVIDERS = [
    RESTClient,
    Path,
    Query,
    Body,
    Header,
    GET,
    POST,
    PUT,
    DELETE,
    HEAD,
    PATCH
];
