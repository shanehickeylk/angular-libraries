export class BackendError {

    constructor(public response, public json?: any) {
        if (!json) {
            this.json = this.response.json();
        }
    }

    get isHtml() {
        const contentType = this.response.headers.get('content-type') || this.response.headers.get('Content-Type');

        if (contentType) {
            return contentType.indexOf('html') > -1;
        } else {
            return false;
        }
    }

    get is401() {
        return this.response.status === 401;
    }

    get is403() {
        return this.response.status === 403;
    }

    get is404() {
        return this.response.status === 404;
    }

    get is422() {
        return this.response.status === 422;
    }

    get is500() {
        return this.response.status === 500;
    }

    get is504() {
        return this.response.status === 504;
    }

    get is503() {
        return this.response.status === 503;
    }

    get is0() {
        return this.response.status === 0;
    }

    get errorMessages() {
        return this.json.errors;
    }

    toString() {
        return this.response.status;
    }
}
