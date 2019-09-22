(function(){
    'use strict';

    angular
        .module('Module')
        .service('Service', Service)

    /** @ngInject */
    function Service(Dependencies){

        this.fn = fn;

        function fn(){
            
        }
    }

}());