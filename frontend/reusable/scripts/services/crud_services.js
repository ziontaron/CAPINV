'use strict';

/**
 * @ngdoc service
 * @name appApp.userService
 * @description
 * # userService
 * Service in the appApp.
 */

angular.module('CRUDServices', [])

.service('utilsService', function($filter) {

    var service = {};

    service.toJavascriptDate = function(sISO_8601_Date) {
        return sISO_8601_Date ? moment(sISO_8601_Date, moment.ISO_8601).toDate() : null;
    };

    service.toServerDate = function(oDate) {
        var momentDate = moment(oDate);
        if (momentDate.isValid()) {
            momentDate.local();
            return momentDate.format();
        }
        return null;
    };

    return service;
})

.service('userService', function(crudFactory) {
    var crudInstance = new crudFactory({
        //Entity Name = WebService/API to call:
        entityName: 'User',

        catalogs: [],

        adapter: function(theEntity) {
            return theEntity;
        },

        adapterIn: function(theEntity) {},

        adapterOut: function(theEntity, self) {
            theEntity.Identicon = "";
            theEntity.Identicon64 = "";
        },

        dependencies: [

        ]
    });

    crudInstance.getByUserName = function(sUserName) {
        var _arrAllRecords = crudInstance.getAll();
        for (var i = 0; i < _arrAllRecords.length; i++) {
            if (_arrAllRecords[i].UserName == sUserName) {
                return _arrAllRecords[i];
            }
        }
        return {
            id: -1,
            Value: ''
        };
    };

    crudInstance.getUsersInRoles = function(arrRoles) {
        var _arrAllRecords = crudInstance.getAll();
        var result = [];
        for (var i = 0; i < _arrAllRecords.length; i++) {
            if (arrRoles.indexOf(_arrAllRecords[i].Role) > -1) {
                result.push(_arrAllRecords[i]);
            }
        }
        result.push(_arrAllRecords[0]);
        return result;
    };


    crudInstance.sendTestEmail = function(oUser) {
        return crudInstance.customPost('SendTestEmail', oUser);
    };

    return crudInstance;
}).service('TicketService', function(crudFactory) {
    var crudInstance = new crudFactory({
        //Entity Name = WebService/API to call:
        entityName: 'Ticket',

        catalogs: [],

        adapter: function(theEntity) {
            //theEntity.ConvertedNotificationDate = theEntity.NotificationDate ? moment(theEntity.NotificationDate, moment.ISO_8601).toDate() : null;
            return theEntity;
        },

        adapterIn: function(theEntity) {},

        adapterOut: function(theEntity, self) {
            //theEntity.NotificationDate = theEntity.ConvertedNotificationDate ? moment(theEntity.ConvertedNotificationDate).format() : null;
        },

        dependencies: [

        ]
    });

    crudInstance.setRawAll([{
        id: 1,
        folio: 1234,
        item: 'test',
        QTY: 123
    }, {
        id: 2,
        folio: 1234,
        item: 'test',
        QTY: 123
    }, {
        id: 2,
        folio: 1234,
        item: 'test',
        QTY: 123
    }, {
        id: 3,
        folio: 1234,
        item: 'test',
        QTY: 123
    }, {
        id: 4,
        folio: 1234,
        item: 'test',
        QTY: 123
    }, {
        id: 5,
        folio: 1234,
        item: 'test',
        QTY: 123
    }, {
        id: 6,
        folio: 1234,
        item: 'test',
        QTY: 123
    }, {
        id: 7,
        folio: 1234,
        item: 'test',
        QTY: 123
    }]);

    return crudInstance;

}).service('CQALineService', function(crudFactory, utilsService) {
    var crudInstance = new crudFactory({
        entityName: 'CQALine',

        catalogs: [],

        adapter: function(theEntity) {
            theEntity.ConvertedDueDate = utilsService.toJavascriptDate(theEntity.DueDate);
            theEntity.ConvertedClosedDate = utilsService.toJavascriptDate(theEntity.ClosedDate);
            return theEntity;
        },

        adapterOut: function(theEntity, self) {
            theEntity.DueDate = utilsService.toServerDate(theEntity.ConvertedDueDate);
            theEntity.ClosedDate = utilsService.toServerDate(theEntity.ConvertedClosedDate);
        },

        dependencies: []
    });

    return crudInstance;

}).service('CustomerService', function(crudFactory) {
    var crudInstance = new crudFactory({
        //Entity Name = WebService/API to call:
        entityName: 'FSCustomer',

        catalogs: [],

        adapter: function(theEntity) {
            return theEntity;
        },

        adapterIn: function(theEntity) {},

        adapterOut: function(theEntity, self) {},

        dependencies: []
    });

    return crudInstance;
}).service('catConcernTypeService', function(crudFactory) {
    var crudInstance = new crudFactory({
        //Entity Name = WebService/API to call:
        entityName: 'catConcernType',

        catalogs: [],

        adapter: function(theEntity) {
            return theEntity;
        },

        adapterIn: function(theEntity) {},

        adapterOut: function(theEntity, self) {},

        dependencies: []
    });

    return crudInstance;
}).service('catResultService', function(crudFactory) {
    var crudInstance = new crudFactory({
        //Entity Name = WebService/API to call:
        entityName: 'catResult',

        catalogs: [],

        adapter: function(theEntity) {
            return theEntity;
        },

        adapterIn: function(theEntity) {},

        adapterOut: function(theEntity, self) {},

        dependencies: []
    });

    return crudInstance;
}).service('catStatusService', function(crudFactory) {
    var crudInstance = new crudFactory({
        //Entity Name = WebService/API to call:
        entityName: 'catStatus',

        catalogs: [],

        adapter: function(theEntity) {
            return theEntity;
        },

        adapterIn: function(theEntity) {},

        adapterOut: function(theEntity, self) {},

        dependencies: []
    });

    return crudInstance;
}).service('FSItemService', function(crudFactory) {
    var crudInstance = new crudFactory({
        //Entity Name = WebService/API to call:
        entityName: 'FSItem',

        catalogs: [],

        adapter: function(theEntity) {
            return theEntity;
        },

        adapterIn: function(theEntity) {},

        adapterOut: function(theEntity, self) {},

        dependencies: []
    });

    return crudInstance;
});
