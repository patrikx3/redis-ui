global.p3xre.ng.factory('p3xToast', ($mdToast) => {

    const toast = (options) => {
        if (typeof options === 'string') {
            options = {
                message: options,
            }
        }
        const template = '<md-toast class="md-toast p3xre-toast-default" style="cursor: pointer;" ng-click="closeToast()">' + options.message + '</md-toast>'

        $mdToast.show({
            controller: function ($scope, $mdToast) {
                $scope.closeToast = function() {
                    $mdToast.hide();
                };
            },
            template: template,
            hideDelay: options.hideDelay || 5000,
            position: 'bottom right'
        });

    }

    return new function () {
        this.action = toast;

    }
})
