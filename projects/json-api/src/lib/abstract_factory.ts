import { camelizeKeys } from '../../../typescript-helpers/src/lib/object';

import { environment } from '../../../environments/environment';

const failHard = true;
const reservedWords = ['__zone_symbol__unconfigurables', 'then', 'schedule', 'toJSON', '__expired__'];
const handler = {
    get(target, propertyKey) {
        if (propertyKey in target) {
            return target[propertyKey];
        } else {
            if (typeof propertyKey === 'symbol' || reservedWords.indexOf(propertyKey) > -1) {
                return target[propertyKey];
            } else {
                const message = `Used attribute "${propertyKey}" on "${target.constructor.name}" that was never set`;

                if (failHard) {
                    throw new Error(message);
                } else {
                    console.error(message);

                    return target[propertyKey];
                }
            }
        }

    }
};

export class AbstractFactory {
    id: number;
    type: string;
    attributes: object;

    constructor({id, type, attributes}: { id: number, type: string, attributes?: any }) {
        this.id = id;
        this.type = type;
        this.attributes = attributes;
    }

    create(klazz) {
        if (!klazz) { throw new Error(`Model mapping is not provided for type ${this.type}`); }

        let instance;

        if (environment.enableApiDebugging) {
            instance = new Proxy(new klazz(), handler);
        } else {
            instance = new klazz();
        }

        instance.id = this.id;

        Object.assign(instance, camelizeKeys(this.attributes));

        return instance;
    }

}
