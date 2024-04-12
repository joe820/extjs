Ext.define('Study.view.login.MainController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.main',

    updatePasswordBtn : function (btn) {
        Ext.widget('updatePassword');
    },

    logoutBtn : function (btn) {
        //1. 뷰포트 삭제
        btn.up('viewport').destroy();
        //2. 로그인윈도우 출력
        Ext.widget('login');
    },

    menuChange : function (obj, record) {
        console.log(record.get('page'));
        var centerPage = obj.up('viewport').down('component[region=center]');
        centerPage.removeAll(true);
        centerPage.add({
            xtype : record.get('page')
        })
    }

})