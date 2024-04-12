Ext.define('Study.view.login.OrderListController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.orderList',

    deliveryInfoBtn : function (btn) {
        console.log("==============");
        var record = btn.getWidgetRecord();
        console.log(record);
        console.log("==============");
    }
})