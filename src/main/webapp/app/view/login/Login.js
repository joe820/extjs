Ext.define('Study.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype : 'login',
    controller : 'login',
    layout: 'center',
    closable : false,
    maximized : true,
    autoShow : true,
    onEsc : function (){
        return false;
    },

    items : [
        {
            xtype : 'form',
            layout: {
                xtype : 'vbox',
                align : 'center',
                pack : 'center',
            },
            items: [{
                xtype : 'textfield',
            },{
                xtype : 'textfield',
                inputType : 'password',
            },{
                xtype: 'button',
                width : 165,
                text : 'login',
                handler : 'loginBtn',
            }]
        }
    ]


})