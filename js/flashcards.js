/**
 * Flashcards module.
 *
 * @param {H5P.jQuery} $
 */
H5P.Flashcards = (function ($, XapiGenerator) {
  C.counter = 0;

  /**
   * Initialize module.
   *
   * @param {Object} options Run parameters
   * @param {Number} id Content identification
   */
  function C(options, id) {
    H5P.EventDispatcher.call(this);
    this.answers = [];
    this.numAnswered = 0;
    this.contentId = this.id = id;
    this.options = $.extend({}, {
      description: 'What does the card mean?',
      progressText: 'Card @card of @total',
      next: 'Next',
      previous: 'Previous',
      checkAnswerText: 'Check answer',
      showSolutionsRequiresInput: true,
      defaultAnswerText: 'Your answer',
      correctAnswerText: 'Correct',
      incorrectAnswerText: 'Incorrect',
      showSolutionText: 'Correct answer(s)',
      answerShortText: 'A:',
      informationText: 'Information',
      caseSensitive: false,
      randomCards: false,
      results: 'Results',
      cardsHeader: 'Cards',
      scoreHeader: 'Score',
      ofCorrect: '@score of @total correct',
      showResults: 'Show results',
      retry: 'Retry',
      cardAnnouncement: 'Incorrect answer. Correct answer was @answer',
      pageAnnouncement: 'Page @current of @total',
      correctAnswerAnnouncement: '@answer is correct!',
    }, options);
    this.$images = [];
    this.hasBeenReset = false;

    this.on('resize', this.resize, this);

    if (this.options.randomCards === true) {
      this.options.cards = this.shuffle(this.options.cards);
    }
  }

  C.prototype = Object.create(H5P.EventDispatcher.prototype);
  C.prototype.constructor = C;

  /**
   * Process HTML escaped string for use as attribute value,
   * e.g. for alt text or title attributes.
   *
   * @param {string} value
   * @return {string} WARNING! Do NOT use for innerHTML.
   */
  const massageAttributeOutput = (value) => {
    const dparser = new DOMParser().parseFromString(value, 'text/html');
    const div = document.createElement('div');
    div.innerHTML = dparser.documentElement.textContent;
    return div.textContent || div.innerText || '';
  };

  /**
   * Append field to wrapper.
   *
   * @param {H5P.jQuery} $container
   */
  C.prototype.attach = function ($container) {
    const that = this;

    if (this.isRoot()) {
      this.setActivityStarted();
    }

    this.$container = $container
      .addClass('h5p-flashcards h5p-theme')
      .html('<div class="h5p-loading">Loading, please wait...</div>');

    // Load card images. (we need their size before we can create the task)
    let loaded = 0;
    const load = function () {
      loaded++;
      if (loaded === that.options.cards.length) {
        that.cardsLoaded();
      }
    };

    for (let i = 0; i < this.options.cards.length; i++) {
      const card = this.options.cards[i];

      if (card.image !== undefined) {
        const $image = $('<img>', {
          class: 'h5p-clue',
          src: H5P.getPath(card.image.path, this.id),
        });
        if (card.imageAltText) {
          $image.attr('alt', massageAttributeOutput(card.imageAltText));
        }

        if ($image.get().complete) {
          load();
        }
        else {
          $image.on('load', load);
        }

        this.$images[i] = $image;
      }
      else {
        this.$images[i] = $(H5P.Components.PlaceholderImg('h5pImageDefault'));
        load();
      }
    }

    $('body').on('keydown', (event) => {
      // The user should be able to use the arrow keys when writing his answer
      if (event.target.tagName === 'INPUT') {
        return;
      }

      // Left
      if (event.keyCode === 37) {
        that.previous();
      }

      // Right
      else if (event.keyCode === 39) {
        that.next();
      }
    });
  };

  /**
   * Checks if the user anwer matches an answer on the card
   * @private
   *
   * @param card The card
   * @param userAnswer The user input
   * @return {Boolean} If the answer is found on the card
   */
  function isCorrectAnswer(card, userAnswer, caseSensitive) {
    let answer = C.$converter.html(card.answer || '').text();

    if (!caseSensitive) {
      answer = (answer ? answer.toLowerCase() : answer);
      userAnswer = (userAnswer ? userAnswer.toLowerCase() : userAnswer);
    }

    return C.splitAlternatives(answer).indexOf(userAnswer, '') !== -1;
  }

  /**
   * Shuffle the cards.
   * @param {object} card Cards.
   */
  C.prototype.shuffle = function (cards) {
    let currentIndex = cards.length;
    let tmp;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tmp = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = tmp;
    }

    return cards;
  };

  /**
   * Get Score
   * @return {number}
   */
  C.prototype.getScore = function () {
    const that = this;

    return that.options.cards.reduce((sum, card, i) => sum + (isCorrectAnswer(card, that.answers[i], that.options.caseSensitive) ? 1 : 0), 0);
  };

  /**
   * Get Score
   * @return {number}
   */
  C.prototype.getMaxScore = function () {
    return this.options.cards.length;
  };

  /**
   * Called when all cards has been loaded.
   */
  C.prototype.cardsLoaded = function () {
    const descId = ++C.counter;

    const $inner = this.$container.html(
      `<div class="h5p-flashcards-heading">
        <div class="h5p-description h5p-theme-question-description"
          id="flashcards-description-${descId}" title="${this.options.description}"`
        + `>${
          this.options.description
        }</div>`
        + '<div class="h5p-theme-progress"></div>'
      + '</div>'
      + '<div class="h5p-inner" role="region" aria-labelledby="flashcards-description' + `-${descId}" aria-roledescription="carousel"></div>`,
    ).children('.h5p-inner');

    this.nav = H5P.Components.Navigation({
      progressType: 'bar',
      handlePrevious: this.previous.bind(this),
      handleNext: this.next.bind(this),
      handleLast: this.createResultScreen.bind(this),
      index: 0,
      navigationLength: this.options.cards.length,
      texts: {
        previousButton: this.options.previous,
        nextButton: this.options.next,
        lastButton: this.options.showResults,
      },
    });

    this.nextButton = this.nav.querySelector('.h5p-theme-next');
    this.resultsButton = this.nav.querySelector('.h5p-theme-show-results');

    this.$progress = this.$container.find('.h5p-theme-progress');
    this.$container[0].append(this.nav);
    // Add cards
    for (let i = 0; i < this.options.cards.length; i++) {
      this.addCard(i, $inner);
    }

    // Set current:
    this.setCurrent($inner.find('>:first-child'));

    // Find highest image and set task height.
    let height = 0;
    for (let i = 0; i < this.$images.length; i++) {
      const $image = this.$images[i];

      if ($image === undefined) {
        continue;
      }

      const imageHeight = $image.height();
      if (imageHeight > height) {
        height = imageHeight;
      }
    }

    if (this.options.cards.length < 2) {
      this.$nextButton?.hide();
    }

    this.$current.next().addClass('h5p-next');

    $inner.initialImageContainerWidth = $inner.find('.h5p-imageholder').outerWidth();

    this.$inner = $inner;
    this.setProgress();
    this.trigger('resize');

    // Attach aria announcer
    this.$ariaAnnouncer = $('<div>', {
      class: 'hidden-but-read',
      'aria-live': 'assertive',
      appendTo: this.$container,
    });
    this.$pageAnnouncer = $('<div>', {
      class: 'hidden-but-read',
      'aria-live': 'assertive',
      appendTo: this.$container,
    });

    // Announce first page if task was reset
    if (this.hasBeenReset) {
      // Read-speaker needs a small timeout to be able to read the announcement
      setTimeout(() => {
        this.announceCurrentPage();
      }, 100);
    }
  };

  /**
   * Add show results
   * @param {H5P.jQuery} $inner
   */
  C.prototype.addShowResults = function ($inner) {
    const that = this;

    const $showResults = $('<div class="h5p-show-results h5p-hidden"></div>');

    $showResults[0].appendChild(H5P.Components.Button({
      label: that.options.showResults,
      icon: 'show-results',
    }));

    $showResults
      .on('click', () => {
        that.createResultScreen();
      })
      .appendTo($inner.parent().find('.h5p-navigation'));
  };

  /**
   * Add card
   * @param {number} index
   * @param {H5P.jQuery} $inner
   */
  C.prototype.addCard = function (index, $inner) {
    const that = this;
    const card = this.options.cards[index];
    const cardId = ++C.counter;

    // Generate a new flashcards html and add it to h5p-inner
    const $card = $(
      `<div role="group" aria-roledescription="slide" aria-labelledby="h5p-flashcard-card-${cardId}" class="h5p-card h5p-animate${index === 0 ? ' h5p-current' : ''}"> `
        + '<div class="h5p-cardholder">'
          + '<div class="h5p-imageholder">'
            + '<div class="h5p-flashcard-overlay" tabindex="-1">'
            + '</div>'
          + '</div>'
          + '<div class="h5p-foot">'
            + `<div class="h5p-imagetext" id="h5p-flashcard-card-${cardId}">${
              card.text !== undefined ? card.text : ''
            }</div>`
            + '<div class="h5p-answer">'
              + '<div class="h5p-input h5p-theme-input">'
                + `<input type="text" class="h5p-textinput" tabindex="-1" placeholder="${this.options.defaultAnswerText}" aria-describedby="h5p-flashcard-card-${cardId}" autocomplete="off" spellcheck="false"/>`
              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
      + '</div>',
    )
      .appendTo($inner);

    const checkButton = H5P.Components.Button({
      label: this.options.checkAnswerText,
      icon: 'check',
    });

    checkButton.tabIndex = '-1';

    $card.find('.h5p-theme-input')[0].appendChild(checkButton);

    $card.find('.h5p-imageholder').prepend(this.$images[index]);

    $card.prepend($('<div class="h5p-flashcard-overlay" tabindex="-1"></div>').on('click', function () {
      // Set temporary focus
      $card.find('.h5p-flashcard-overlay').focus();

      if ($(this).parent().hasClass('h5p-previous')) {
        that.nav.previous();
        that.previous();
      }
      else {
        that.nav.next();
        that.next();
      }
    }));

    // Add tip
    const $tip = H5P.JoubelUI.createTip(card.tip);
    if ($tip && $tip.length) { // Check for a jQuery object
      $tip.attr({
        tabindex: -1,
        title: this.options.informationText,
      });
      $('.h5p-imagetext', $card).append($tip);
    }

    const $input = $card.find('.h5p-textinput');

    const handleClick = function () {
      const userAnswer = $input.val().trim();
      const userCorrect = isCorrectAnswer(card, userAnswer, that.options.caseSensitive);
      let done = false;

      if (userAnswer === '') {
        $input.focus();
      }

      if (!that.options.showSolutionsRequiresInput || userAnswer !== '' || userCorrect) {
        that.numAnswered++;

        // Set temporary focus
        $card.find('.h5p-flashcard-overlay').focus();

        $input.add(this).attr('disabled', true);

        that.answers[index] = userAnswer;
        that.triggerXAPI('interacted');

        if (userCorrect) {
          $input.parent()
            .addClass('h5p-correct')
            .append('<div class="h5p-feedback-label"></div>');
          $card.addClass('h5p-correct');

          $('<div class="h5p-solution">'
            + '<span class="solution-icon h5p-rotate-in"></span>'
          + '</div>').appendTo($card.find('.h5p-imageholder'));

          that.$ariaAnnouncer.html(that.options.correctAnswerAnnouncement.replace('@answer', userAnswer));
        }
        else {
          $input.parent()
            .addClass('h5p-wrong')
            .append('<span class="h5p-feedback-label"></span>');
          $card.addClass('h5p-wrong');

          const { answer } = that.options.cards[index];
          let correctText;
          let shortened;
          if (answer) {
            correctText = C.splitAlternatives(that.options.cards[index].answer).join(', ');
            shortened = C.shortFormat(correctText);
          }

          const solution = $('<div class="h5p-solution">'
            + '<span class="solution-icon h5p-rotate-in"></span>'
            + `<span class="solution-text"><span class="solution-label">${
              answer
                ? `${that.options.showSolutionText}: </span><span">${
                  shortened}`
                : ''}</span></span>`
          + '</div>').appendTo($card.find('.h5p-imageholder'));

          if (answer && shortened !== correctText) {
            H5P.Tooltip(solution.find('.solution-text')[0].lastChild, {
              text: correctText,
              position: 'bottom',
            });
          }

          const ariaText = that.options.cardAnnouncement.replace(
            '@answer',
            answer,
          );
          that.$ariaAnnouncer.html(ariaText);
        }

        done = (that.numAnswered >= that.options.cards.length);

        if (!done) {
          that.nextTimer = setTimeout(() => {
            that.nav.next();
            that.next();
          }, 3500);
        }
        else {
          that.last();
        }
      }

      if (done) {
        that.trigger(XapiGenerator.getXapiEvent(that));
        that.trigger('resize');
      }
    };

    $card.find('.h5p-theme-check').click(handleClick);

    $input.keypress((event) => {
      if (event.keyCode === 13) {
        handleClick();
        return false;
      }
    });

    return $card;
  };

  /**
   * Create result screen
   */
  C.prototype.createResultScreen = function () {
    const that = this;

    this.$resultScreen = $('<div/>', {
      class: 'h5p-flashcards-results',
    });

    this.$resultScreen[0].appendChild(H5P.Components.ResultScreen({
      header: this.options.results,
      scoreHeader: this.options.ofCorrect
        .replace(/@score/g, `<span>${this.getScore()}</span>`)
        .replace(/@total/g, `<span>${this.getMaxScore()}</span>`),
      questionGroups: [{
        listHeaders: [this.options.cardsHeader, this.options.scoreHeader],
        questions: this.options.cards.map((card, i) => {
          const isCorrect = isCorrectAnswer(card, this.answers[i], this.options.caseSensitive);
          const question = {
            title: card.text,
            points: isCorrect ? '1' : '0',
            isCorrect,
            userAnswer: this.answers[i],
            correctAnswer: C.splitAlternatives(card.answer).join(', '),
            correctAnswerPrepend: `${this.options.showSolutionText}: `,
          };

          if (card.image !== undefined) {
            question.imgUrl = H5P.getPath(card.image.path, this.id);
          }
          else {
            question.useDefaultImg = true;
          }

          return question;
        }),
      }],
    }));

    this.retryButton = H5P.Components.Button({
      label: this.options.retry,
      styleType: 'secondary',
      icon: 'retry',
      classes: 'h5p-invisible',
      onClick: () => {
        that.resetTask();
      },
    });

    this.$resultScreen[0].appendChild(this.retryButton);

    if (this.getScore() < this.getMaxScore()) {
      this.retryButton.classList.remove('h5p-invisible');
    }

    this.$inner.addClass('h5p-invisible');
    this.$inner.siblings().addClass('h5p-invisible');
    this.$resultScreen.appendTo(this.$container).addClass('show');
  };

  /**
   * Set Progress
   */
  C.prototype.setProgress = function () {
    const index = this.$current.index();
    this.$progress.html(`Card ${index + 1} <span class="progress-separator">/</span> ${this.options.cards.length}`);
  };

  /**
   * Set card as current card.
   *
   * Adjusts classes and tabindexes for existing current card and new
   * card.
   *
   * @param {H5P.jQuery} $card
   *   Class to add to existing current card.
   */
  C.prototype.setCurrent = function ($card) {
    // Remove from existing card.
    if (this.$current) {
      this.$current.find('.h5p-textinput').attr('tabindex', '-1');
      this.$current.find('.joubel-tip-container').attr('tabindex', '-1');
      this.$current.find('.h5p-theme-check').attr('tabindex', '-1');
    }

    // Set new card
    this.$current = $card;

    // Keep navigation component in sync with the current card index
    if (this.nav && typeof this.nav.setCurrentIndex === 'function') {
      try {
        this.nav.setCurrentIndex(this.$current.index());
      }
      catch (e) {
        // Defensive: do not break if nav has changed API in other contexts
      }
    }

    /* We can't set focus on anything until the transition is finished.
       If we do, iPad will try to center the focused element while the transition
       is running, and the card will be misplaced */
    $card.one('transitionend', () => {
      if ($card.hasClass('h5p-current') && !$card.find('.h5p-textinput')[0].disabled) {
        $card.attr('aria-hidden', 'false');
        $card.siblings().attr('aria-hidden', 'true');
      }
      setTimeout(() => {
        this.announceCurrentPage();
      }, 500);
    });

    // Update card classes
    $card.removeClass('h5p-previous h5p-next');
    $card.addClass('h5p-current');

    $card.siblings()
      .removeClass('h5p-current h5p-previous h5p-next left right')
      .find('.h5p-rotate-in').removeClass('h5p-rotate-in');

    $card.prev().addClass('h5p-previous');
    $card.next('.h5p-card').addClass('h5p-next');

    $card.prev().prevAll().addClass('left');
    $card.next().nextAll().addClass('right');

    // Update tab indexes
    $card.find('.h5p-textinput').attr('tabindex', '0');
    $card.find('.h5p-theme-check').attr('tabindex', '0');
    $card.find('.joubel-tip-container').attr('tabindex', '0');
  };

  /**
   * Announces current page to assistive technologies
   */
  C.prototype.announceCurrentPage = function () {
    const pageText = this.options.pageAnnouncement
      .replace('@current', this.$current.index() + 1)
      .replace('@total', this.options.cards.length.toString());
    this.$pageAnnouncer.text(pageText);
  };

  /**
   * Display next card.
   */
  C.prototype.next = function (event) {
    const that = this;
    const $next = this.$current.next();

    clearTimeout(this.prevTimer);
    clearTimeout(this.nextTimer);

    if (!$next.length) {
      return;
    }

    that.setCurrent($next);
    that.setProgress();

    if ($next.is(':last-child') && that.numAnswered === that.options.cards.length) {
      that.nav.setCanShowLast(true);
    }

    // If invoked from the navigation click handler (nav passes the click event
    // to our handler), return false so the navigation component won't also
    // call its internal next(), which would advance the navigation index a
    // second time and cause an overshoot.
    if (event) {
      return false;
    }
  };

  /**
   * Display previous card.
   */
  C.prototype.previous = function (event) {
    const that = this;
    const $prev = this.$current.prev();

    clearTimeout(this.prevTimer);
    clearTimeout(this.nextTimer);

    if (!$prev.length) {
      return;
    }

    that.setCurrent($prev);
    that.setProgress();
    that.nav.setCanShowLast(false);

    // Prevent navigation component from also running its internal previous()
    // (which would decrement the nav index a second time) when this was
    // triggered from the nav click handler.
    if (event) {
      return false;
    }
  };

  /**
   * Display last card.
   */
  C.prototype.last = function () {
    const $last = this.$inner.children().last();
    this.setCurrent($last);
    this.setProgress();
    this.nav.setCanShowLast(true);
    this.trigger('resize');
  };

  /**
   * Resets the whole task.
   * Used in contracts with integrated content.
   * @private
   */
  C.prototype.resetTask = function () {
    this.numAnswered = 0;
    this.hasBeenReset = true;
    this.cardsLoaded();
    this.trigger('resize');
  };

  /**
   * Gather copyright information from cards.
   *
   * @returns {H5P.ContentCopyrights}
   */
  C.prototype.getCopyrights = function () {
    const info = new H5P.ContentCopyrights();

    // Go through cards
    for (let i = 0; i < this.options.cards.length; i++) {
      const { image } = this.options.cards[i];
      if (image !== undefined && image.copyright !== undefined) {
        const rights = new H5P.MediaCopyright(image.copyright);
        rights.setThumbnail(new H5P.Thumbnail(H5P.getPath(image.path, this.id), image.width, image.height));
        info.addMedia(rights);
      }
    }

    return info;
  };

  /**
   * Update the dimensions and imagesizes of the task.
   */
  C.prototype.resize = function () {
    const self = this;
    if (self.$inner === undefined) {
      return;
    }
    let maxHeight = 0;
    const maxHeightImage = 0;

    // Find container dimensions needed to encapsule image and text.
    self.$inner.children('.h5p-card').each(function () {
      const cardholderHeight = maxHeightImage + $(this).find('.h5p-foot').outerHeight();
      maxHeight = cardholderHeight > maxHeight ? cardholderHeight : maxHeight;
    });

    if (this.numAnswered < this.options.cards.length) {
      // Resize cards holder
      let innerHeight = 0;
      this.$inner.children('.h5p-card').each(function () {
        if ($(this).height() > innerHeight) {
          innerHeight = $(this).height();
        }
      });

      this.$inner.height(innerHeight);
    }
  };

  /**
   * Makes a string into a shorter version, and adds ellipsis
   *
   * @param {string} text Text to shorten
   * @param {int} characters Optional amount of wanted characters
   *                         (including the ellipsis)
   */
  C.shortFormat = (text, characters = 100) => {
    let shortFormat = text;
    if (shortFormat.length > characters) {
      shortFormat = `${shortFormat.slice(0, characters - 3)}...`;
    }

    return shortFormat;
  };

  /**
   * Helps convert html to text
   * @type {H5P.jQuery}
   */
  C.$converter = $('<div/>');

  /**
   * Split text by / while respecting \/ as escaped /.
   * @param {string} text Text to split.
   * @param {string} [delimiter='/'] Delimiter.
   * @param {string} [escaper='\\'] Escape sequence, default: single backslash.
   * @return {string[]} Split text.
   */
  C.splitAlternatives = function (text, delimiter, escaper) {
    text = text || '';
    delimiter = delimiter || '/';
    escaper = escaper || '\\';

    while (text.indexOf(escaper + delimiter) !== -1) {
      text = text.replace(escaper + delimiter, '\u001a');
    }

    return text
      .split(delimiter)
      .map((element) => element.replace(/\u001a/g, delimiter).trim());
  };

  /**
   * Get xAPI data.
   * Contract used by report rendering engine.
   *
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   */
  C.prototype.getXAPIData = function () {
    const xAPIEvent = XapiGenerator.getXapiEvent(this);
    return {
      statement: xAPIEvent.data.statement,
    };
  };

  return C;
}(H5P.jQuery, H5P.Flashcards.xapiGenerator));
