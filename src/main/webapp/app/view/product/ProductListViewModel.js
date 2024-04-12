Ext.define('Study.view.login.ProductListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.productList',

    stores : {
        productList : {
            fields : ['productNm', 'price', 'amount', 'rgstrDt'],
            data : [{
                productNm : '지우개321',
                price : 500,
                amount : 100,
                rgstrDt : new Date(),
            }]
        }
    }
})