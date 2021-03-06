Ext.define('MyApp.view.login.Login',{
    extend:'Ext.window.Window',
    requires:[
        'MyApp.view.login.LoginController'
    ],
    xtype:'login',
    title:'用户登录',
    controller:'login',
    autoShow:true,
    defaultType:'textfield',
    bodyStyle:{
        padding:'15px'
    },
    items:[{
        allowBlank:false,
        fieldLabel:'用户名',
        name:'UserName',
        emptyText:'用户名'
    },{
        allowBlank:false,
        fieldLabel:'密码',
        emptyText:'密码',
        name:'PassWord',
        inputType:'password'
    },{
        xtype:'checkbox',
        fieldLabel: '记住我',
        name: 'Remember'
    }],
    // dockedItems: [{
    //     xtype: 'toolbar',
    //     dock: 'bottom',
    //     ui: 'footer',
    //     //cls:'toolBar-color',
    //     style:{
    //         backgroundColor: '#ececec'
    //     },
    //     items: [
    //         { xtype: 'component', flex: 1 },
    //         { 
    //             xtype: 'button', 
    //             text: '登录',
    //             listeners:{
    //                 click:'onLoginClick'
    //             }
    //         },
    //         { 
    //             xtype: 'button',
    //              text: '取消',
    //             listeners:{
    //                 click:'onCancelClick'
    //             } 
    //         }
    //     ]
    // }]
    buttons:[{
        text:'登录',
        listeners:{
            click:'onLoginClick'
        }
    },{
        text:'取消',
        listeners:{
            click:'onCancelClick'
        }
    }]
})