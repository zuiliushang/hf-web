(function (global,$,undefined) {
    'use strict';
    var request = function(options){
        var url = options.url;
        var data = options.data;
        var type = options.type || 'get';
        var token = sessionStorage.getItem('token') || '';
        var contentType = options.contentType || 'application/x-www-form-urlencoded';
        return $.ajax({
            url: url,
            data: data,
            type: type,
            headers: {
                token: token
            },
            contentType: contentType,
            success: function (data) {
                options.callBack(data);
            }
        })
    }
    var $_ajax = {
        get : function (options) {
            options.type='get';
            return request(options);
        },
        post : function (options) {
            options.type='post';
            return request(options);
        }
    }
    window.$_ajax = $_ajax;
})(window,jQuery);