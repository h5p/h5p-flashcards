var H5PPresave = H5PPresave || {};

H5PPresave['H5P.Flashcards'] = function (content, finished) {
  var presave = H5PEditor.Presave;

  if (isContentInValid()) {
    throw new presave.exceptions.InvalidContentSemanticsException('Invalid Flashcard Error')
  }

  var score = content.cards.length;

  presave.validateScore(score);

  if (finished) {
    finished({maxScore: score});
  }

  function isContentInValid() {
    return !presave.checkNestedRequirements(content, 'content.cards') || !Array.isArray(content.cards);
  }
};
