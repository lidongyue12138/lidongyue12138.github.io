function addFoldable() {
    var foldables = document.querySelectorAll('.foldable');
    for (var i = 0; i < foldables.length; i++) {
      var foldable = foldables[i];
      var header = foldable.querySelector('h2, h3, h4, h5, h6, .foldable-header');
      if (header) {
        header.addEventListener('click', function() {
          var content = this.nextElementSibling;
          if (content.classList.contains('folded')) {
            content.classList.remove('folded');
          } else {
            content.classList.add('folded');
          }
        });
        // Add "folded" class to child elements that should be initially hidden
        var foldableContent = foldable.querySelector('.foldable-content');
        if (foldableContent) {
          var listElements = foldableContent.querySelectorAll('li, dd');
          for (var j = 0; j < listElements.length; j++) {
            listElements[j].classList.add('folded');
          }
        }
      }
    }
  }
  