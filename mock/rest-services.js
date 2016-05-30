"use strict"
let rest = require('connect-rest')

//
//   S E R V I C E   F U N C T I O N S
//

const projectSV = require('./restService/rest-services-project')
const loginSV = require('./restService/rest-services-login')

//
//   C O N T E X T   D E F I N I T I O N
//
rest.context(global.restContext)

//
//   S E R V I C E   R E G I S T R A T I O N
//

// Login und Anmeldeprüfung
rest.post('/loginController/whoAmI', loginSV.whoamiService)

// Projects
// EXAMPLE  Services - can be deleted if not needed
rest.post('/project/', projectSV.projectCreateService);
rest.get('/project/?id', projectSV.projectReadService,
    {
        validator: function (req) {
            return req.query.id === undefined || !isNaN(parseInt(req.query.id, 10));
        }
    });
rest.put('/project/:id', projectSV.projectUpdateService);
rest.del('/project/:id', projectSV.projectDeleteService);


module.exports.rest = rest