/** Class representing a sound playing button. */
(function (Flashcards) {
  'use strict';

  /**
   * @constructor
   * @param {number} id Content Id.
   * @param {object} params More params.
   * @param {object} params.a11y Readspeaker texts.
   * @param {string} params.a11y.play Readspeaker text for "Play".
   * @param {string} params.a11y.pause Readspeaker text for "Pause".
   * @param {string} params.audioNotSupported Text to show if audio not supported.
   * @param {string} params.sample Audio sample.
   * @param {object} params.callbacks Callbacks.
   * @param {function} params.callbacks.playAudio PlayAudio callback.
   * @param {object} [previousState] PreviousState.
   */
  Flashcards.AudioButton = function (id, params, previousState) {
    this.params = params || {};
    this.previousState = previousState || {};

    this.params.audioNotSupported = this.params.audioNotSupported || "Your browser does not support this audio.";
    this.params.a11y = params.a11y || {};
    this.params.a11y.play = this.params.a11y.play || 'Play';
    this.params.a11y.pause = this.params.a11y.pause || 'Pause';
    this.params.callbacks = this.params.callbacks || {};

    this.params.callbacks.playAudio = this.params.callbacks.playAudio || function () {};

    this.dom = this.createAudioDOM(id, this.params); // Placeholder if Audio could not be created

    if (this.dom.firstChild === null) {
      this.dom.appendChild(this.getDummyButtonDOM());
    }

    this.status = Flashcards.AudioButton.STATUS_ENDED;
  };

  /**
   * Create H5P.Audio.
   * @param {number} id ContentID.
   * @param {object} params Parameters.
   * @return {object} DOM element for the sample.
   */
  Flashcards.AudioButton.prototype.createAudioDOM = function (id, params) {
    var that = this;

    var $audioWrapper = H5P.jQuery('<div>', {
      'class': Flashcards.AudioButton.AUDIO_WRAPPER
    });

    if (params.sample !== undefined) {
      // H5P.Audio
      var audioDefaults = {
        files: params.sample,
        audioNotSupported: params.audioNotSupported
      };

      var audio = new H5P.Audio(audioDefaults, id, {
        previousState: this.previousState.audio
      });
      audio.attach($audioWrapper);
      this.button = audio.$audioButton.get(0);
      this.audio = audio;

      this.setLabel(params.a11y.play);

      // Set from previous state
      if (this.previousState.audio && this.previousState.audio.currentTime !== 0) {
        this.status = Flashcards.AudioButton.STATUS_PAUSE;
        audio.$audioButton.addClass(Flashcards.AudioButton.BUTTON_PLAY_PAUSED);
      }

      // Event Listener Play
      audio.audio.addEventListener('play', function () {
        that.status = Flashcards.AudioButton.STATUS_PLAYING;
        that.setLabel(that.params.a11y.pause);

        that.params.callbacks.playAudio(that);
      });

      // Event Listener Pause
      audio.audio.addEventListener('pause', function () {
        that.status = Flashcards.AudioButton.STATUS_PAUSE;
        that.setLabel(that.params.a11y.play);
      });

      // Event Listener Ended
      audio.audio.addEventListener('ended', function () {
        that.handlePlayed();
        that.setLabel(that.params.a11y.play);

        that.status = Flashcards.AudioButton.STATUS_ENDED;
      });

      // Have to stop, else audio will take up socket pending forever in chrome.
      if (audio.audio && audio.audio.preload) {
        audio.audio.preload = 'none';
      }
    }

    return $audioWrapper.get(0);
  };

  /**
   * Get Button DOM.
   * @return {object} Button DOM.
   */
  Flashcards.AudioButton.prototype.getDOM = function () {
    return this.dom;
  };

  /**
   * Get DOM for dummy button.
   * @return {object} DOM for dummy button.
   */
  Flashcards.AudioButton.prototype.getDummyButtonDOM = function () {
    var button = document.createElement('div');
    button.classList.add(Flashcards.AudioButton.BUTTON);
    button.classList.add(Flashcards.AudioButton.BUTTON_NONE);
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add(Flashcards.AudioButton.INNER_CONTAINER);
    buttonContainer.appendChild(button);
    return buttonContainer;
  };

  /**
   * Play.
   */
  Flashcards.AudioButton.prototype.play = function () {
    if (this.status !== Flashcards.AudioButton.STATUS_PLAYING) {
      this.button.click();
    }
  };

  /**
   * Pause.
   */
  Flashcards.AudioButton.prototype.pause = function () {
    if (this.status === Flashcards.AudioButton.STATUS_PLAYING) {
      this.button.click();
    }
  };

  /**
   * Handle played
   */
  Flashcards.AudioButton.prototype.handlePlayed = function () {
  }

  /**
   * Set the title label and the aria label.
   * @param {string} label Label to set.
   */
  Flashcards.AudioButton.prototype.setLabel = function (label) {
    if (this.button) {
      this.button.setAttribute('aria-label', label);
      this.button.setAttribute('title', label);
    }
  };

  /**
   * Reset button.
   */
  Flashcards.AudioButton.prototype.reset = function () {
    if (this.audio) {
      this.audio.seekTo(0);
    }

    this.status = Flashcards.AudioButton.STATUS_ENDED;
    this.enable();

    this.setLabel(this.params.a11y.play);
  };

  /**
   * Enable button.
   */
  Flashcards.AudioButton.prototype.enable = function () {
    if (this.button) {
      this.audio.enableToggleButton();
    }
  };

  /**
   * Remove button from tabindex.
   */
  Flashcards.AudioButton.prototype.setUntabbable = function () {
    if (this.button) {
      this.button.setAttribute('tabindex', '-1');
    }
  };

  /**
   * Add button to tabindex.
   */
  Flashcards.AudioButton.prototype.setTabbable = function () {
    if (this.button) {
      this.button.setAttribute('tabindex', '0');
    }
  };

  /**
   * Disable button.
   */
  Flashcards.AudioButton.prototype.disable = function () {
    if (this.button) {
      this.audio.disableToggleButton();
    }
  }

  /**
   * Check if button is enabled.
   * @return {boolean} True, if enabled.
   */
  Flashcards.AudioButton.prototype.isEnabled = function () {
    if (!this.button) {
      return false;
    }

    return this.audio.isEnabled();
  };

  /**
   * Reset audio.
   */
  Flashcards.AudioButton.prototype.resetAudio = function () {
    if (this.audio && this.audio.audio && this.audio.audio.load) {
      this.audio.audio.load();
    } // Reset button DOM

    if (!this.button) {
      return; // No sample for this button
    }

    this.button.classList.remove(Flashcards.AudioButton.BUTTON_PAUSE);
    this.button.classList.remove(Flashcards.AudioButton.BUTTON_PLAY_PAUSED);
    this.button.classList.add(Flashcards.AudioButton.BUTTON_PLAY);
  };

  /**
   * Get current state.
   * @return {object} Current state.
   */
  Flashcards.AudioButton.prototype.getCurrentState = function () {
    return {
      audio: this.audio ? this.audio.getCurrentState() : undefined
    };
  }

  /**
   * Focus button.
   */
  Flashcards.AudioButton.prototype.focus = function focus() {
    if (this.button) {
      this.button.focus();
    }
  };

})(H5P.Flashcards);

// Button state

/** @constant {number} */
H5P.Flashcards.AudioButton.STATUS_PAUSE = 0;

/** @constant {number} */
H5P.Flashcards.AudioButton.STATUS_PLAYING = 1;

/** @constant {number} */
H5P.Flashcards.AudioButton.STATUS_ENDED = 2;

// Class names

/** @constant {string} */
H5P.Flashcards.AudioButton.AUDIO_WRAPPER = 'h5p-flashcards-audio-button-wrapper';

/** @constant {string} */
H5P.Flashcards.AudioButton.BUTTON = 'h5p-audio-minimal-button';

/** @constant {string} */
H5P.Flashcards.AudioButton.BUTTON_PLAY = 'h5p-audio-minimal-play';

/** @constant {string} */
H5P.Flashcards.AudioButton.BUTTON_PLAY_PAUSED = 'h5p-audio-minimal-play-paused';

/** @constant {string} */
H5P.Flashcards.AudioButton.BUTTON_PAUSE = 'h5p-audio-minimal-pause';

/** @constant {string} */
H5P.Flashcards.AudioButton.BUTTON_NONE = 'h5p-audio-minimal-none';

/** @constant {string} */
H5P.Flashcards.AudioButton.INNER_CONTAINER = 'h5p-audio-inner';
