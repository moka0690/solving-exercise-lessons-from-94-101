const paragraph = document.querySelector('p');
    paragraph.remove();

 const divElement = document.querySelector('.our-element');
 const divStart = document.createElement('div');
 divStart.className = 'start';
 divStart.title = 'Start Element';
 divStart.textContent = 'Start';
 divStart.setAttribute  ('data-value', 'Start')
 divElement.before(divStart);

 const divEnd = document.createElement('div');
 divEnd.className = 'end';
 divEnd.title = 'End Element';
 divEnd.textContent = 'End';
 divEnd.setAttribute  ('data-value', 'End')
  divElement.after(divEnd);
 

