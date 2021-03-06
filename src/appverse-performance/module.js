(function() {
    'use strict';

    /**
     * @ngdoc module
     * @name appverse.performance
     *
     * @description
     * The AppPerformance provides services to handle usage of several performance elements:
     * 1. Webworkers. Multithreaded-parallelized execution of tasks separated of the main JavaScript thread.
     * 2. High Performance UI directives support.
     *
     * @requires appverse.configuration
     */
    angular.module('appverse.performance', ['appverse.configuration'])
        .run(run);

    function run ($log) {
        $log.info('appverse.performance run');
    }

})();