Ext.define('Study.view.member.MemberList', {
    extend: 'Ext.grid.Panel',
    xtype : 'memberList',
    title: '회원목록',
    columnLines : true,
    requires : ['Ext.ux.ProgressBarPager'],
    controller : 'memberList',
    viewModel : 'memberList',
    tbar :  [
        {
            xtype : 'combo',
            displayField: 'a',
            valueField: 'b',
            store : {
                fields : ['a','b'],
                data : [
                    {
                        a : 'a',
                        b : 'b',
                    }
                ]
            }
        },
        {
            xtype: 'textfield',
            emptyText : '검색어를 입력하세요.'
        },{
            xtype: 'button',
            text : '검색',
        }
    ],
    columns : [
        {
            xtype : 'rownumberer'
        },
        {
            text : '상품명',
            flex :1,
            dataIndex : 'productNm'
        },{
            text : '가격',
            flex :1,
            dataIndex: 'price'
        },{
            text : '재고량',
            flex :1,
            dataIndex: 'amount'
        },{
            text : '등록일',
            flex :1,
            dataIndex: 'rgstrDt'
        },
    ],
    bind : {
        store : '{memberList}'
    },
    bbar : {
        xtype : 'pagingtoolbar',
        // plugins : 'ux-slidingpager',
        plugins : 'ux-progressbarpager',
        displayInfo : true,
    }
});