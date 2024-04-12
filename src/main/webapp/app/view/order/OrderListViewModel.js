Ext.define('Study.view.login.OrderListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.orderList',

    stores : {
        orderList : {
            fields : ['productNm', 'price', 'amount', 'rgstrDt'],
            data : [{
                productNm : '지우개123',
                price : 500,
                amount : 100,
                rgstrDt : new Date(),
            }]
        }

    }

})