class Client {
    constructor(name, domain) {
        this.name = name;
        this.domain = domain;
    }
}


class API {
    constructor() {
        this._clients = [];
        this._clients.push(new Client("naaa","daaa")) ;
        this._clients.push(new Client("nbbb","dbbb")) ;

        console.log("API.new()") ;
    }

    addClient(name, domain) {
        this._clients.push(new Client(name, domain));
        this._clients = this._clients.slice() ;
    }

    get clients() {
        return this._clients ;
    }

}

export default API