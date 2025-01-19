const menuHeader = document.querySelector('.CcNe6e');

menuHeader.addEventListener('click', function() {
  const secondMenu = Array.from(document.querySelectorAll('.cF4V5c')).find(menu => 
    (menu.querySelector('g-menu-item div div') && menu.querySelector('g-menu-item div div').textContent.includes('Date indifférente')) ||
    (menu.querySelector('g-menu-item div a') && menu.querySelector('g-menu-item div a').textContent.includes('Date indifférente'))
  );
  
  const newMenuItem1 = document.createElement('g-menu-item');
  newMenuItem1.setAttribute('jsname', 'NNJLud');
  newMenuItem1.setAttribute('jscontroller', 'CnSW2d');
  newMenuItem1.setAttribute('class', 'EpPYLd GZnQqe');
  newMenuItem1.setAttribute('role', 'none');
  newMenuItem1.setAttribute('data-short-label', '');
  
  const newItemContent1 = `
  <div jsname="ibnC6b" class="YpcDnf OSrXXb HG1dvd" role="none">
    <a href="${window.location.href}&tbs=qdr:s60" aria-checked="false" role="menuitemradio">Moins de 60 secondes</a>
  </div>
  `;
  newMenuItem1.innerHTML = newItemContent1;


  const firstExistingItem = secondMenu.querySelector('g-menu-item');
  if (firstExistingItem) {
    secondMenu.insertBefore(newMenuItem1, firstExistingItem.nextSibling);
  } else {
    secondMenu.appendChild(newMenuItem1);
  }

  const newMenuItems = [
    {
      label: 'Il y a moins de 30 minutes',
      duration: 'qdr:n30'
    },
    {
      label: 'Il y a moins de 10 minutes',
      duration: 'qdr:n10'
    },
    {
      label: 'Il y a moins de 5 minutes',
      duration: 'qdr:n5'
    }
   
  ];

  newMenuItems.forEach(item => {
    const newMenuItem = document.createElement('g-menu-item');
    newMenuItem.setAttribute('jsname', 'NNJLud');
    newMenuItem.setAttribute('jscontroller', 'CnSW2d');
    newMenuItem.setAttribute('class', 'EpPYLd GZnQqe');
    newMenuItem.setAttribute('role', 'none');
    newMenuItem.setAttribute('data-short-label', '');
    
    const newItemContent = `
    <div jsname="ibnC6b" class="YpcDnf OSrXXb HG1dvd" role="none">
      <a href="${window.location.href}&tbs=${item.duration}" aria-checked="false" role="menuitemradio">${item.label}</a>
    </div>
    `;
    newMenuItem.innerHTML = newItemContent;
    
    secondMenu.insertBefore(newMenuItem, newMenuItem1.nextSibling);
  });
});

menuHeader.click();