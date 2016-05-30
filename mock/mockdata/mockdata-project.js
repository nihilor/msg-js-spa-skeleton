"use strict";
const _ = require('lodash');
const moment = require("moment");

module.exports = function (mockdata) {

    var objects = [
        {publicID: "project1", designation: "Project Nr. 1"},
        {publicID: "project2", designation: "Project Nr. 2"},
        {publicID: "project3", designation: "Project Nr. 3"},
        {publicID: "project4", designation: "Project Nr. 4"},
        {publicID: "project5", designation: "Project Nr. 5"}
    ];

    return _.map(objects, obj => {
        return mockdata.registry.addObject({
            mark: `WorkGroup.${ obj.publicID }`,   // add objects under their username into the object registry - reference them by {objectRef: "value"}
            id: mockdata.projectId++,
            version: 1,
            publicID: obj.publicID,
            designation: obj.designation,
            createdAt: obj.createdAt || moment().valueOf()
        });
    });
};