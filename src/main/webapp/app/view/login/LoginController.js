Ext.define('Study.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.login',

    //로그인 버튼 클릭.
    loginBtn : function (btn) {
        console.log('로그인 클릭');
        btn.up('window').close();
        Ext.widget('main');
    }


})