cs.ns('___config.package___')
___config.package___.ctrl = cs.trait({
    protos: {

        setup () {
            this.base()
            // Todo: delete the examples, the examples are there to help you write services, but maybe you need other services,
            // so delete the existing ones and write your own

            this.subscribeDataService("readProjects", result => {
                // IMPORT the loaded data in the datamanager
                // app.util.EntityDestroyUtil.destroyProjects();
                // return app.util.EntityCreateUtil.importWorkGroups(result);
                return result
            })

            this.subscribeDataService("createProject", (project, result) => {
                // IMPORT the loaded data in the datamanager
                /*if (project.id) {
                    var oldProject = app.dm.findById("WorkGroup", project.id);
                    if (app.dm.isTransient("WorkGroup", oldProject)) {
                        app.util.EntityDestroyUtil.destroyWorkGroups(oldProject);
                    }
                }
                return app.util.EntityCreateUtil.importWorkGroup(result.id, result);*/
                return result
            })

            this.subscribeDataService("updateProject", (project, result) => {
                // (RE-) IMPORT the loaded data in the datamanager
                //return app.util.EntityCreateUtil.importWorkGroup(project.id, result);
                return result;
            })

            this.subscribeDataService("deleteProject", (/*project*/) => {
                // DELETE the deleted data from the datamanager
                //nvar deletableWorkGroup = app.dm.findById('WorkGroup', project.id);
                //napp.util.EntityDestroyUtil.destroyParentWorkGroupAndAllChildren(deletableWorkGroup);
            })
        }
    }
})