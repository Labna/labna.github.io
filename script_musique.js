function changeSection(args) {
  //console.log(args);
  caller = args[0];
  name = args[1];
  section = document.getElementsByClassName('section');
  for (var i = section.length - 1; i >= 0; i--) {
    section[i].classList.remove("section_active");
  }
  elem = document.getElementsByClassName(name)[0];
  //console.log(elem);
  elem.classList.add('section_active');
  actif = document.getElementById('sectionactive');
  if(actif != null){actif.id = '';}
  caller.id = 'sectionactive';
}

function changeOnglet(args) {
  //console.log(args);
  caller = args[0];
  name = args[1];
  onglets = document.getElementsByClassName('onglet');
  for (var i = onglets.length - 1; i >= 0; i--) {
    onglets[i].classList.remove("onglet_actif");
  }
  section = document.getElementsByClassName('section');
  for (var i = section.length - 1; i >= 0; i--) {
    section[i].classList.remove("section_active");
  }
  elem = document.getElementsByClassName(name)[0];
  //console.log(elem);
  elem.classList.add('onglet_actif');
  actif = document.getElementById('ongletactif');
  if(actif != null){actif.id = '';}
  actif = document.getElementById('sectionactive');
  if(actif != null){actif.id = '';}
  caller.id = 'ongletactif';
}

function changeEcole(args) {
  //console.log(args);
  caller = args[0];
  name = args[1];
  ecole = document.getElementsByClassName('ecole');
  for (var i = ecole.length - 1; i >= 0; i--) {
    ecole[i].classList.remove("ecole_active");
  }
  onglets = document.getElementsByClassName('onglet');
  for (var i = onglets.length - 1; i >= 0; i--) {
    onglets[i].classList.remove("onglet_actif");
  }
  section = document.getElementsByClassName('section');
  for (var i = section.length - 1; i >= 0; i--) {
    section[i].classList.remove("section_active");
  }
  elem = document.getElementsByClassName(name)[0];
  //console.log(elem);
  elem.classList.add('ecole_active');
  active = document.getElementById('ecoleactive');
  if (active != null) {active.id = '';}
  actif = document.getElementById('ongletactif');
  if(actif != null){actif.id = '';}
  active = document.getElementById('sectionactive');
  if(active != null){active.id = '';}
  caller.id = 'ecoleactive';
}

iframeStart = '<iframe width="560" height="315" src="https://www.youtube.com/embed/';
iframEnd = '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

function openVideoPlayer(args) {
  button = args[0];
  link = args[1];
  //place = args=[2];
  place = button.parentNode.querySelector('.placeHolder');
  button.parentNode.removeChild(button);
  place.innerHTML = "" + iframeStart + link + iframEnd;
}