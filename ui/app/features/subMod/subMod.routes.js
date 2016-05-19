export default function routes($stateProvider) {
    "ngInject";
    $stateProvider
        .state('subMod', {
            url: '/subMod',
            views: {
                'main': {
                    template: require('./subMod.template.html'),
                    controller: 'subModCtrl',
                    controllerAs: 'subModCtrl',
                },
            },
        })
}
