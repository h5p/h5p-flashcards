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
      },
      7: function (parameters, finished, extras) {

        if (parameters && Array.isArray(parameters.cards)) {
          for (var i = 0; i < parameters.cards.length; i++) {
            if (typeof parameters.cards[i].answer === 'string') {
              parameters.cards[i].answer = parameters.cards[i].answer
              .replace(/\\\|/g, '__TO_BE_AN_UNESCAPED_PIPE__') // Replace escaped pipe symbol with placeholder
              .replace(/\|/g, '__TO_BE_AN_UNESCAPED_FORWARD_SLASH__') // Replace pipe symbol with placeholder
              .replace(/\//g, '__TO_BE_AN_ESCAPED_FORWARD_SLASH__') // Replace slash placeholder
              .replace(/__TO_BE_AN_UNESCAPED_PIPE__/g, '|')
              .replace(/__TO_BE_AN_UNESCAPED_FORWARD_SLASH__/g, '/')
              .replace(/__TO_BE_AN_ESCAPED_FORWARD_SLASH__/g, '\\/');
            }
          }
        }
        finished(null, parameters, extras);
      },

      /**
       * Asynchronous content upgrade hook.
       * Capitalize question to keep existing behavior as is.
       * @params {object} parameters Parameters.
       * @params {function} Callback to pass new values to.
       * @params {object} extras Extras such as metadata.
       */
      8: function (parameters, finished, extras) {
        if (parameters && Array.isArray(parameters.cards)) {
          parameters.cards = parameters.cards.map((card) => {
            card.text = (typeof card.text === 'string' && card.text.length) ?
              card.text.charAt(0).toUpperCase() + card.text.slice(1) :
              card.text;

            return card;
          })
        }

        finished(null, parameters, extras);
      }
    }
  };
})();
