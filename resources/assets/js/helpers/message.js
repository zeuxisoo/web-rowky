var MessageHelper = (function() {

    function constructor() {
        var toast = {};

        ['info', 'error', 'success', 'warning'].forEach(function(method) {
            toast[method] = function(message, title) {
                toastr[method](message, title);
            };
        });

        toastr.options = jQuery.extend(toastr.options, {
            positionClass: 'toast-bottom-full-width'
        });

        toast.clear = toastr.clear;

        return toast;
    }

    return constructor;

})();

module.exports = new MessageHelper();
