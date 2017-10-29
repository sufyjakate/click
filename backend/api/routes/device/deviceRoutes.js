'use strict';
module.exports = function(app) {
    var device = require('../../controllers/device/deviceController');

    // todoList Routes
    app.route('/devices')
        .get(device.list_all_devices)
        .post(device.create_a_device);


    app.route('/devices/:deviceId')
        .get(device.read_a_device)
        .put(device.update_a_device)
        .delete(device.delete_a_device);
};