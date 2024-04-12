Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype : 'main',
    layout : 'border',
    controller : 'main',
    viewModel : 'main',
    items : [{
        xtype: 'panel',
        region : 'north',
        // title : 'Market Admin'
        title : '',
        header : false,
        items: [
    {
        xtype: 'toolbar',
        items: [{
                xtype : 'label',
                html : '<h2>Market Admin</h2>'
            },
            '->'
            ,{
                xtype: 'button',
                text : 'xxx님',
                menu : [{
                    text:'비밀번호 변경',
                    handler: 'updatePasswordBtn',
                },{
                    text:'로그아웃',
                    handler: 'logoutBtn',
                }]
            }]
            }
        ]
    },{
        xtype: 'panel',
        split: true,
        width : 200,
        region: 'west',
        border: true,
        layout: 'fit',
        items : [
            {
                xtype : 'treelist',
                listeners : {
                    selectionchange : 'menuChange'
                },
                store : {
                    root : {
                        expanded : true,
                        children :[
                            {
                                text: '상품관리',
                                expanded : true,
                                selectable : false,
                                iconCls : 'x-fa fa-gift',
                                children : [{
                                    text: '상품목록',
                                    page: 'productList',
                                    leaf: true,
                                }]
                            },
                            {
                                text: '주문관리',
                                expanded : true,
                                selectable : false,
                                iconCls : 'x-fa fa-shopping-cart',
                                children : [{
                                    text: '주문목록',
                                    page: 'orderList',
                                    leaf: true,
                                }]
                            },
                            {
                                text: '회원관리',
                                expanded : true,
                                selectable : false,
                                iconCls : 'x-fa fa-users',
                                children : [{
                                    text: '회원목록',
                                    page: 'memberList',
                                    leaf: true,
                                }]
                            }
                        ]
                    }
                }
            }
        ]
    },
    {
        xtype: 'panel',
        border : true,
        flex:1,
        region: 'center',
        layout : 'fit',
        items : {
            xtype: 'panel',
            html : '<h2>Main DashBoard</h2>'
        }
    }
    ]
})