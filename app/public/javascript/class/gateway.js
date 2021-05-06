class Gateway {
    constructor() {
        console.log('gateway_constructor');
        this.backend = "http://localhost:3000";
    }
    //--------------------------------------------------------------------------------
    insertClient(data) {
        console.log('gateway_insert_client', data);
        let self = this;
        return new Promise(function (resolve, reject) {
            let xmlhttp = getXmlHttp();
            xmlhttp.open('POST', "http://localhost:3000/users", true);
            xmlhttp.setRequestHeader('Content-Type', "application/json");
            xmlhttp.timeout = 5000;
            xmlhttp.onload = function () {
                if (this.status == 200) {
                    resolve(JSON.parse(xmlhttp.response));
                } else {
                    reject({
                        status: this.status,
                        statusText: xmlhttp.statusText
                    });
                }
            };
            xmlhttp.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xmlhttp.statusText
                });
            };
            xmlhttp.send(JSON.stringify(data));
        });
    }
}