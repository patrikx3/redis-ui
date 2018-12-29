global.p3xre.ng.factory('p3xToast', ($mdToast) => {

    const toast = (options) => {
        if (typeof options === 'string') {
            options = {
                message: options,
            }
        }
        $mdToast.show(
            $mdToast.simple()
                .textContent(options.message)
                .position('bottom right')
                .hideDelay(10000)
        );
    }

    return new function() {
        this.action = toast;

    }
})