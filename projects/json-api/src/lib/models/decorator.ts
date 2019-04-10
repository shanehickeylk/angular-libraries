const METADATA_KEY = '____models____';

export type ModelMetadata = string;

/**
 * Decorator responsible to map a class with some json content from response.
 * It must be used in conjunction with ModelsModule.register()
 *
 * @param values - String list of type that's going to match with backend type
 */
export function ApiModelType(...values: string[]): ClassDecorator {
    return (target: any) => {
        (Reflect as any).defineMetadata(METADATA_KEY, values, target);
    };
}

export function getModelsMetadata(instance: any): ModelMetadata[] {

    if (!(Reflect as any).hasOwnMetadata(METADATA_KEY, instance)) {
        return [];
    }

    return (Reflect as any).getOwnMetadata(METADATA_KEY, instance);
}
