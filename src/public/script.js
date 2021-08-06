function toggleSection(section) {
  document.getElementById('section-list-' + section).classList.toggle('expanded')
  document.getElementById('section-arrow-' + section)?.classList.toggle('down')
}

function collapseSections() {
  const sectionLists = document.getElementsByClassName('expandable')
  const sectionArrows = document.getElementsByClassName('sidebar-section-title-arrow')
  for (let i = 0, len = sectionLists.length; i < len; i++) {
    sectionLists[i].classList.remove('expanded')
    sectionArrows[i]?.classList.remove('down')
  }
}

function attachClickListeners() {
  const sectionTitles = document.getElementsByClassName('sidebar-section-title-row')

  for (const sectionTitle of sectionTitles) {
    sectionTitle.addEventListener('click', () => {
      toggleSection(sectionTitle.firstElementChild.getAttribute('data-section-title'))
    })
  }
}

function expandCorrectSectionOnPageLoad() {
  const pathname = window.location.pathname.substr(1)
  if (pathname === '') {
    toggleSection('general')
  } else {
    toggleSection(pathname.includes('/') ? pathname.substr(0, pathname.indexOf('/')) : pathname)
  }
}

function highlightActiveSection() {
  const pathname = window.location.pathname.substr(1)
  const activeSection =
    pathname === '' ? 'general' : pathname.includes('/') ? pathname.substr(0, pathname.indexOf('/')) : pathname

  const currentActiveSections = document.getElementsByClassName('sidebar-section-title-active')
  if (currentActiveSections.length) {
    currentActiveSections[0].remove('sidebar-section-title-active')
  }

  document.getElementById('section-title-' + activeSection).classList.toggle('sidebar-section-title-active')
}

function highlightActiveArticle() {
  const activeArticles = document.getElementsByClassName('sidebar-link-active')
  if (activeArticles.length) {
    activeArticles[0].classList.remove('sidebar-link-active')
  }
  document.getElementById(window.location.pathname.substr(1)).classList.toggle('sidebar-link-active')
}

attachClickListeners()
expandCorrectSectionOnPageLoad()
highlightActiveSection()
highlightActiveArticle()
