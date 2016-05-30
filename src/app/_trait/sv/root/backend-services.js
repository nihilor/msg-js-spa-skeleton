cs.ns("___config.package___");
___config.package___.backendservices = cs.trait({
    dynamics: {
        userHeader: null,
        whoamiService: '%s/loginController/whoAmI',
        userReadService: '%s/user?active=%s',
        projectCRService: '%s/project/',
        projectRUDService: '%s/project/%d'
    },
    protos: {

        prepare () {
            this.base()
            // Todo: delete the examples, the examples are there to help you write services, but maybe you need other services,
            // so delete the existing ones and write your own

            // EXAMPLE - POST - with own CALLBACK function
            this.registerService("POST", "whoAmI", (callback) => {
                const serviceURL = sprintf(this.whoamiService, this.serviceRoot);
                return {serviceURL: serviceURL, callback: callback};
            }, (error, text, xhr, callback) => {
                if (error) {
                    this.handleTechnicalError(text, xhr, callback);
                } else {
                    let objs = text.length > 0 ? JSON.parse(text) : {};
                    if (this.hasError(objs)) {
                        this.handleFunctionalError(objs, callback);
                    } else {
                        this.userHeader = xhr.getResponseHeader('appuser');
                        callback(this.SUCCESS, objs);
                    }
                }
            })

            // EXAMPLE - GET - READ
            this.registerService("GET", "readProjects", callback => {
                return {serviceURL: sprintf(this.projectCRService, this.serviceRoot), callback: callback}
            })

            // EXAMPLE - POST - CREATE
            this.registerService("POST", "createProject", (project, callback) => {
                return {
                    data: project, options: {dataType: 'json'},
                    serviceURL: sprintf(this.projectCRService, this.serviceRoot), callback: callback
                }
            })

            // EXAMPLE - PUT - UPDATE
            this.registerService("PUT", "updateProject", (project, callback) => {
                return {
                    data: project, options: {dataType: 'json'},
                    serviceURL: sprintf(this.projectRUDService, this.serviceRoot, project.id), callback: callback
                }
            })

            // EXAMPLE - DELETE - DELETE
            this.registerService("DELETE", "deleteProject", (project, callback) => {
                return {serviceURL: sprintf(this.projectRUDService, this.serviceRoot, project.id), callback: callback};
            })
        }
    }
});
