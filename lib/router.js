Router.configure({
    //layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('welcome', {
        path: '/',
        action:function(){
            console.log('redirecting welcome...');
        }
    });
    this.route('home', {
        path: '/home',
        action:function(){
            console.log('redirecting home...');
        }
    });
});