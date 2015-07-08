(function() {
  'use strict';

  angular
    .module('argile')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
