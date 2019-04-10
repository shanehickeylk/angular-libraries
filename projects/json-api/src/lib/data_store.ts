import { AbstractFactory } from './abstract_factory';

export interface Storable {
    id: number;
    type: string;
    attributes: any[];
}

export class DataStore {
    graph: { [key: string]: { [id: string]: any } };

    constructor(public models: { [key: string]: any }) {
        this.graph = Object.create({});
    }

    find(type, id) {
        if (!this.graph[type] || !this.graph[type][id]) {
            return null;
        }

        return this.graph[type][id];
    }

    store(objectOrCollection: Storable | Storable[]) {
        if (Array.isArray(objectOrCollection)) {
            return objectOrCollection.map(item => this.create(item));
        } else {
            return this.create(objectOrCollection);
        }
    }

    create(object: Storable) {
        return this.push(object.type, object.id, new AbstractFactory(object).create(this.models[object.type]));
    }

    push(type, id, obj) {
        this.graph[type] = this.graph[type] || {};

        if (this.graph[type][id]) {
            throw new Error(`Object already in datastore: ${type} ${id}`);
        }

        this.graph[type][id] = obj;

        return this.graph[type][id];
    }

}
