if (window.innerWidth > 1000) {
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: '92E8EFF2-9C2F42B6-BFE3BF13-F6713325',
        sectionsColor: ['#f8f8f8', 'white', '#f8f8f8', 'white', '#f8f8f8', 'white', '#f8f8f8', 'white',
            '#f8f8f8', 'white'
        ],
        onLeave: function(origin, destination, direction){
            myFullpage.moveTo(destination, 0);
        },
    });
}