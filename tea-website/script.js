const imageSelect = document.getElementById('image-select');
    const selectedImage = document.getElementById('selected-image');
    const selectedInfo = document.getElementById('selected-info');
    const selectedText1 = document.getElementById('selected-text1');
    const selectedText2 = document.getElementById('selected-text2');
    const selectedText3 = document.getElementById('selected-text3');
    const pictureContainer = document.getElementById('picture-container');

    imageSelect.addEventListener('change', function() {
      const selectedOption = this.options[this.selectedIndex];
      const selectedOptionValue = selectedOption.value;
      const selectedOptionInfo = selectedOption.getAttribute('plant-info');
      const selectedOptionText1 = selectedOption.getAttribute('benefits');
      const selectedOptionText2 = selectedOption.getAttribute('contraindications');
      const selectedOptionText3 = selectedOption.getAttribute('prep-mode');

      selectedImage.src = selectedOptionValue;
      selectedImage.style.display = selectedOptionValue ? 'block' : 'none';

      selectedInfo.textContent = selectedOptionInfo;
      selectedInfo.style.display = selectedOptionInfo ? 'block' : 'none';

      selectedText1.textContent = selectedOptionText1;
      selectedText1.style.display = selectedOptionText1 ? 'block' : 'none';

      selectedText2.textContent = selectedOptionText2;
      selectedText2.style.display = selectedOptionText2 ? 'block' : 'none';

      selectedText3.textContent = selectedOptionText3;
      selectedText3.style.display = selectedOptionText3 ? 'block' : 'none';

      if (selectedOptionValue !== '') {
        pictureContainer.style.display = 'block';
      } else {
        pictureContainer.style.display = 'none';
      }
    });