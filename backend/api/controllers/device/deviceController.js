'use strict';





var mongoose = require('mongoose'),
    Device = mongoose.model('Device');



exports.list_all_devices = function(req, res) {
    Device.find({}, function(err, new_device) {
        if (err)
            res.send(err);
        res.json(new_device);
    });
};




exports.create_a_device = function(req, res) {

    var new_device = new Device();
    console.log("I am called");

    new_device.name = req.body.name;
    new_device.DeviceID = req.body.DeviceID;
    new_device.Device_type = req.body.DeviceType;
    new_device.status = req.body.DeviceStatus;

    console.log(req.body.DeviceID);
    console.log(req.body.DeviceStatus);
    console.log(req.body.name);
    console.log(req.body.DeviceType);
    new_device.save();
};


exports.read_a_device = function(req, res) {
    Device.findById(req.params.deviceId, function(err, device) {
        if (err)
            res.send(err);
        res.json(device);
    });
};


exports.update_a_device = function(req, res) {
    Device.findOneAndUpdate({_id: req.params.deviceId}, req.body, {new: true}, function(err, device) {
        if (err)
            res.send(err);
        res.json(device);
    });
};


exports.delete_a_device = function(req, res) {


    Device.remove({
        _id: req.params.deviceId
    }, function(err, device) {
        if (err)
            res.send(err);
        res.json({ message: 'Device successfully Removed' });
    });
};

