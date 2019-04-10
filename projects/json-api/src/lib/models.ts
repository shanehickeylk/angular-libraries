import { ModuleWithProviders, NgModule, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

import { asArray, isFunction } from '../lang';
import { getModelsMetadata } from './models/decorator';
import { ResourceBuilder } from './resource_builder';

const REGISTRY = {};

export interface Interceptor {
    request?(request: Request): Request;
    response?(response: Response): Response;
    error?(error: any): any;
}

export class Interceptors extends Array<Interceptor> {}

export class ModelInitializer implements Interceptor {
    response(response: Response) {

        if (response.text()) {
            const parsed = response.json();

            const results = new ResourceBuilder(parsed, REGISTRY).results;

            if (parsed.meta) {
                results.meta = parsed.meta;
            }

            if (parsed.links) {
                results.links = parsed.links;
            }

            if (response.headers) {
                results.headers = response.headers;
            }

            return results;
        } else {
            return response;
        }
    }
}

@NgModule({})
export class ModelsModule implements OnDestroy {
    static register(newModels, ...more): ModuleWithProviders {
        next(asArray(newModels).concat(more).filter(isFunction));

        return {
            ngModule: ModelsModule,
            providers: []
        };
    }

    static forRoot(newModels?, ...more): ModuleWithProviders {
        if (newModels) {
            next(asArray(newModels).concat(more).filter(isFunction));
        }

        return {
            ngModule: ModelsModule,
            providers: [
                { provide: Interceptors, useClass: ModelInitializer, multi: true }
            ]
        };
    }

    ngOnDestroy() {
        // for (let key in REGISTRY) delete REGISTRY[key];
    }
}

export function next(values) {
    values.forEach(item => {
        const keys = getModelsMetadata(item);

        keys.forEach(key => REGISTRY[key] = item);
    });

}
