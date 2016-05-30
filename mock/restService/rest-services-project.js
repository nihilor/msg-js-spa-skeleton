"use strict"
const utils = require('../utils/rest-services-utils.js')
const mockdata = require('../mockdata.js')
const _ = require('lodash')
const moment = require("moment")

module.exports = ( function () {
    // TODO this file ist just for an example, if it is not needed it can be deleted

    //
    //   S E R V I C E   F U N C T I O N S
    //
    var services = {};

    services.projectReadService = function (request, content, callback) {
        let result = mockdata.projects;
        callback(null, result);
    };

    services.projectDeleteService = function (request, content, callback) {
        let id = _.parseInt(request.params.id);
        let result = '';
        let project = utils.findProjectWithId(id);
        if (!_.isEmpty(project)) {
            _.remove(mockdata.projects, {'id': id});
        } else {
            // todo
            // result is an error because the project to delete was not found
        }
        callback(null, result);
    };

    services.projectCreateService = function (request, content, callback) {
        let result;
        let parsedContent = utils.parseContent(content);
        result = {
            "id": mockdata.projectId++,
            "version": 0,
            "publicID": parsedContent.publicID,
            "designation": parsedContent.designation,
            "createdAt": moment().valueOf()
        };
        mockdata.projects.push(result);

        callback(null, result);
    };

    services.projectUpdateService = function (request, content, callback) {
        let id = request.params.id;
        let parsedContent = utils.parseContent(content);
        let result;
        let project = utils.findProjectWithId(id);
        if (!_.isEmpty(project)) {
            project.publicID = parsedContent.publicID;
            project.designation = parsedContent.designation;
            project.version++;
            result = project;
        } else {
            // todo
            // result is an error because the project to update was not found
        }
        callback(null, result);
    };

    return services;

}());
