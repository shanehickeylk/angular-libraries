import { NgModule } from '@angular/core';

export { ResourceBuilder } from './resource_builder';
export { AbstractFactory } from './abstract_factory';
export { decodeToken } from './jwt';
export { param, deparam } from './params';
export { extractPageNumber } from './pagination';
export { BackendError } from './backend_error';
export * from './rest_client';

@NgModule({})
export class JsonApiModule {}
