/** @namespace H5PUpgrades */
var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.Flashcards'] = (function () {
  return {
    1: {
      /**
       * Asynchronous content upgrade hook.
       * Upgrades parameters to support alternative answers separated by |.
       *
       * @params {object} parameters Parameters.
       * @params {function} Callback to pass new values to.
       * @params {object} extras Extras such as metadata.
       */
      6: function (parameters, finished, extras) {

        if (parameters && Array.isArray(parameters.cards)) {
          // Escape | in answers
          for (var i = 0; i < parameters.cards.length; i++) {
            if (typeof parameters.cards[i].answer === 'string') {
              parameters.cards[i].answer = parameters.cards[i].answer
                .replace(/\|/g, '\\|');
            }
          }
        }

        // Done
        finished(null, parameters, extras);
      }
    }
  };
})();
