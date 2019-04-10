import { DataStore } from './data_store';
import { camelize } from '../lang/string';

export class ResourceBuilder {
    dataStore: DataStore;
    results: any | any[];

    constructor(response: any, models: { [key: string]: any }) {
        this.dataStore = new DataStore(models);
        this.saveInStore(response);
        this.linkRelationships(response);
    }

    saveInStore(response: any) {
        if (response.included) {
            this.dataStore.store(response.included);
        }

        this.results = this.dataStore.store(response.data);
    }

    linkRelationships(response: any) {
        if (response.included) {
            response.included.forEach(item => this.findAndAssignRelationship(item));
        }

        if (Array.isArray(response.data)) {
            response.data.forEach(item => this.findAndAssignRelationship(item));
        } else {
            this.findAndAssignRelationship(response.data);
        }
    }

    findAndAssignRelationship(item: any) {
        if (!item) { return item; }

        const instance = this.dataStore.find(item.type, item.id);

        if (!instance) {
            return;
        }

        for (let key in item.relationships) {
            let relationship = item.relationships[key].data;

            if (relationship) {
                let relationshipInstance = this.findRelationshipInStore(relationship);

                instance[camelize(key)] = relationshipInstance;

                if (relationship.relationships) {
                    this.findAndAssignRelationship(relationship);
                }
            } else {
                instance[camelize(key)] = null;
            }
        }
    }

    findRelationshipInStore(data: any) {
        if (Array.isArray(data)) {
            return data.map(item => this.dataStore.find(item.type, item.id));
        } else {
            return this.dataStore.find(data.type, data.id);
        }
    }

}
