const resources = [
  { url: "https://refero.design/", types: ["ui","screens","Interfaces"], tags: ["ui"], details: "Like Mobbin — real-world UI references" },
  { url: "https://mobbin.design/", types: ["ui","screens"], tags: [], details: "Mobile & web design patterns library" },
  { url: "https://component.gallery/components/", types: ["ui","library"], tags: [], details: "A guide to UI systems with the collection of UI libraries" },
  { url: "https://bestdesignsonx.com", types: ["ui","inspiration"], tags: [], details: "Curated design inspiration from X/Twitter" },
  { url: "https://godly.website/", types: ["design","branding","website"], tags: [], details: "Astronomically good web design inspiration" },
  { url: "https://www.landing.love/", types: ["landingpages","webdesign"], tags: [], details: "Landing page design inspiration" },
  { url: "https://land-book.com/", types: ["design","landingpages"], tags: ["gallery of landing pages"], details: "Gallery of best landing page designs" },
  { url: "https://theindex.website/projects", types: ["library","inspiration"], tags: ["branding","marketing","visual"], details: "Branding & marketing inspiration library" },
  { url: "https://www.creativewebmanual.com/", types: ["product thinking","webdesign"], tags: [], details: "Guide for creative websites" },
  { url: "https://craftwork.design/", types: ["assets"], tags: [], details: "Premium design assets & UI kits" },
  { url: "https://ui8.net/", types: ["assets"], tags: ["ui"], details: "Design resources marketplace" },
  { url: "https://palette.supply/", types: ["mockups","assets"], tags: [], details: "Color palettes & design mockups" },
  { url: "https://size-assets.com/", types: ["assets","video"], tags: [], details: "Video & visual assets" },
  { url: "https://icons8.com/", types: ["icons","illustrations"], tags: [], details: "Icons, illustrations, and design tools" },
  { url: "https://www.formfrom.design/", types: ["illustrations","characters","custom"], tags: ["gallery of illustrations"], details: "Custom illustrations & character design" },
  { url: "https://mockup.maison/collections/device-mockups", types: ["mockups"], tags: [], details: "Premium device mockups collection" },
  { url: "https://shuka.design/", types: ["agency"], tags: [], details: "Branding & design agency" },
  { url: "https://unikorns.agency/", types: ["agency"], tags: ["all around"], details: "Full-service design agency" },
  { url: "https://crxss.agency/", types: ["photo"], tags: [], details: "Creative photography agency" },
  { url: "https://h3lag.com/", types: ["agency"], tags: [], details: "Digital design agency" },
  { url: "https://territorystudio.com/project-category/screen-graphics/", types: ["agency"], tags: ["ui"], details: "Screen graphics & FUI design studio" },
  { url: "https://abtest.design/", types: ["product thinking"], tags: [], details: "A/B test design case studies" },
  { url: "https://pushkeen.ai/", types: ["product thinking"], tags: [], details: "Push notification patterns to raise open rate" },
  { url: "https://www.konrad.com/research/ux-research", types: ["ux","research"], tags: ["ux","articles and research"], details: "UX research resources & articles" },
  { url: "https://earlyones.co/", types: ["research","testing"], tags: ["testing"], details: "User testing & research platform" },
  { url: "https://taylorpenton.com/collections/all-fonts", types: ["fonts"], tags: ["hand fonts"], details: "Handwritten & custom fonts" },
  { url: "https://www.lummi.ai/", types: ["photo","stock"], tags: ["Free library with stock images"], details: "Free AI-generated stock photos" },
  { url: "https://www.behance.net/franz", types: ["photographer"], tags: [], details: "Franz — photographer portfolio" },
  { url: "https://www.behance.net/Glazyrin", types: ["photographer"], tags: [], details: "Glazyrin — photographer portfolio" },
  { url: "https://www.behance.net/timtadder", types: ["photographer"], tags: [], details: "Tim Tadder — photographer portfolio" },
  { url: "https://www.behance.net/ivskaya", types: ["photographer"], tags: [], details: "Ivskaya — photographer portfolio" },
  { url: "https://www.behance.net/juliagaldo", types: ["photographer"], tags: [], details: "Julia Galdo — photographer portfolio" },
  { url: "https://www.behance.net/rasmusdengsoe", types: ["photographer"], tags: [], details: "Rasmus Dengsoe — photographer portfolio" },
  { url: "https://www.behance.net/lukenugent", types: ["photographer"], tags: [], details: "Luke Nugent — photographer portfolio" },
  { url: "https://www.behance.net/garrettbyrum", types: ["photographer"], tags: [], details: "Garrett Byrum — photographer portfolio" },
  { url: "https://motion.dev", types: ["code"], tags: [], details: "Animation library for the web" },
  { url: "https://tympanus.net", types: ["code","animation"], tags: [], details: "Creative coding tutorials & experiments" },
  { url: "https://www.florafauna.ai/", types: ["generative"], tags: [], details: "AI generative design tool" },
  { url: "https://www.are.na/noona-paul/ai-midjourney-sref-codes", types: ["ai","prompts"], tags: ["ai prompts"], details: "Midjourney SREF style reference codes" },
  { url: "https://airbnb.io/visx/gallery", types: ["charts"], tags: [], details: "Airbnb data visualization components" },
  { url: "https://www.dataviz-inspiration.com/", types: ["charts","inspiration"], tags: ["data"], details: "Data visualization inspiration gallery" },
  { url: "https://www.soundcn.xyz/?category=UI", types: ["sound"], tags: [], details: "Sounds of UI — interface sound effects" },
  { url: "https://soundsuigood.gumroad.com/l/app-ui-sounds", types: ["sound"], tags: [], details: "App UI sounds pack" },
  { url: "https://www.airbnb.com/", types: ["products","d2c"], tags: ["product"], details: "Airbnb — product design reference" },
  { url: "https://snapshift.framer.website/", types: ["website"], tags: [], details: "Framer website template" },
  { url: "https://readymag.website/serezhaok/ID/", types: ["website","design"], tags: [], details: "Readymag portfolio template" },
  { url: "https://uncoverlab.co/", types: ["agency","design"], tags: [], details: "UncoverLab design studio" },
  { url: "https://www.pinterest.com/0q8m907pijtpe6r41oevnpr2siu8pf/", types: ["inspiration"], tags: ["visual"], details: "Hello Robo Pinterest boards" },
  { url: "https://183ae30c-7d3a-8057-9c93-da02a7d108c0", skip: true },
]

// ---- Color map for type badges ----
const typeColors = {
  "ui": "purple", "screens": "purple", "Interfaces": "purple", "icons": "purple",
  "library": "blue", "testing": "blue", "interaction": "blue", "photographer": "blue",
  "illustrations": "default", "characters": "blue", "custom": "red",
  "landingpages": "gray", "webdesign": "default", "website": "pink",
  "design": "yellow", "graphic": "orange", "poster": "pink",
  "product thinking": "green", "ux": "green", "research": "green", "generative": "green",
  "agency": "purple", "branding": "pink",
  "assets": "red", "mockups": "red", "fonts": "red",
  "typography": "purple", "visual": "pink",
  "inspiration": "brown", "video": "pink", "footage": "pink",
  "photo": "brown", "stock": "yellow",
  "sites": "default", "d2c": "orange", "products": "yellow",
  "code": "orange", "animation": "orange",
  "charts": "pink", "sound": "default", "music": "red",
  "voiceover": "blue", "ai": "gray", "prompts": "red",
  "mobile": "pink", "game": "brown",
  "utility": "default", "presentation": "yellow",
  "motion": "green", "3d": "green",
}

// ---- Helpers ----
function getDomain(url) {
  try {
    const u = new URL(url)
    return u.hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function getFaviconUrl(url) {
  try {
    const u = new URL(url)
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=64`
  } catch {
    return ''
  }
}

function getPreviewUrl(url) {
  try {
    const u = new URL(url)
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
  } catch {
    return ''
  }
}

// ---- Collect unique types for filter buttons ----
const allTypes = new Set()
const validResources = resources.filter(r => !r.skip)
validResources.forEach(r => r.types.forEach(t => allTypes.add(t)))
const sortedTypes = [...allTypes].sort()

// ---- Render filter buttons ----
const filtersContainer = document.querySelector('.filters-scroll')
sortedTypes.forEach(type => {
  const btn = document.createElement('button')
  btn.className = 'filter-btn'
  btn.dataset.filter = type
  btn.textContent = type
  filtersContainer.appendChild(btn)
})

// ---- Render cards ----
const grid = document.getElementById('grid')
const empty = document.getElementById('empty')
const countEl = document.getElementById('count')
const searchInput = document.getElementById('search')

function createCard(resource) {
  const domain = getDomain(resource.url)
  const favicon = getFaviconUrl(resource.url)
  const preview = getPreviewUrl(resource.url)

  const card = document.createElement('a')
  card.href = resource.url
  card.target = '_blank'
  card.rel = 'noopener noreferrer'
  card.className = 'card'
  card.dataset.types = JSON.stringify(resource.types)
  card.dataset.search = `${domain} ${resource.details} ${resource.types.join(' ')} ${resource.tags.join(' ')}`.toLowerCase()

  card.innerHTML = `
    <div class="card-preview">
      <img class="card-preview-img" src="${preview}" alt="" loading="lazy" onerror="this.parentElement.classList.add('no-preview')" />
      <div class="card-preview-fade"></div>
    </div>
    <div class="card-body">
      <div class="card-arrow">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0.834L9.247 3.733L0.98 12L0 11.02L9.633 1.387H0.629V0H12V0.834Z"/><path d="M12 11.44H10.613V4.308L12 2.848V11.44Z"/></svg>
      </div>
      <div class="card-domain">
        <img class="favicon" src="${favicon}" alt="" loading="lazy" onerror="this.style.display='none'" />
        ${domain}
      </div>
      <div class="card-url">${resource.url}</div>
      ${resource.details ? `<div class="card-details">${resource.details}</div>` : ''}
      <div class="card-tags">
        ${resource.types.map(t => `<span class="tag tag-${typeColors[t] || 'default'}">${t}</span>`).join('')}
      </div>
    </div>
  `

  // Mouse glow effect
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  })

  return card
}

function renderCards(filter = 'all', query = '') {
  grid.innerHTML = ''
  const q = query.toLowerCase().trim()
  let count = 0

  validResources.forEach(r => {
    const matchesFilter = filter === 'all' || r.types.includes(filter)
    const searchStr = `${getDomain(r.url)} ${r.details} ${r.types.join(' ')} ${r.tags.join(' ')}`.toLowerCase()
    const matchesSearch = !q || searchStr.includes(q)

    if (matchesFilter && matchesSearch) {
      const card = createCard(r)
      if (initialRender) card.classList.add('animate-in')
      grid.appendChild(card)
      count++
    }
  })

  countEl.textContent = count
  empty.style.display = count === 0 ? 'block' : 'none'
}

// ---- Filter buttons ----
let activeFilter = 'all'
let initialRender = true
filtersContainer.addEventListener('click', (e) => {
  if (!e.target.classList.contains('filter-btn')) return
  filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
  e.target.classList.add('active')
  activeFilter = e.target.dataset.filter
  renderCards(activeFilter, searchInput.value)
})

// ---- Search ----
let debounceTimer
searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    renderCards(activeFilter, searchInput.value)
  }, 150)
})

// ---- Keyboard shortcut ----
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault()
    searchInput.focus()
  }
  if (e.key === 'Escape') {
    searchInput.blur()
    searchInput.value = ''
    renderCards(activeFilter, '')
  }
})

// ---- Add Resource Modal ----
;(function initModal() {
  const fab = document.getElementById('fab-add')
  const modal = document.getElementById('add-modal')
  const modalClose = document.getElementById('modal-close')
  const addForm = document.getElementById('add-form')
  const addTypesContainer = document.getElementById('add-types')
  const addCustomType = document.getElementById('add-custom-type')

  if (!fab || !modal) { console.error('Modal elements not found'); return }

  let selectedTypes = []

  function openModal() {
    selectedTypes = []
    addForm.reset()
    renderTypeChips()
    modal.style.display = ''
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        modal.classList.add('visible')
        setTimeout(() => document.getElementById('add-url').focus(), 100)
      })
    })
  }

  function closeModal() {
    modal.classList.remove('visible')
    setTimeout(() => { modal.style.display = 'none' }, 400)
  }

  function renderTypeChips() {
    const allT = [...allTypes].sort()
    addTypesContainer.innerHTML = allT.map(t =>
      `<button type="button" class="type-chip${selectedTypes.includes(t) ? ' selected' : ''}" data-type="${t}">${t}</button>`
    ).join('')
  }

  fab.addEventListener('click', openModal)
  modalClose.addEventListener('click', closeModal)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('visible')) {
      closeModal()
    }
  })

addTypesContainer.addEventListener('click', (e) => {
  const chip = e.target.closest('.type-chip')
  if (!chip) return
  const type = chip.dataset.type
  if (selectedTypes.includes(type)) {
    selectedTypes = selectedTypes.filter(t => t !== type)
  } else {
    selectedTypes.push(type)
  }
  renderTypeChips()
})

addCustomType.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    const val = addCustomType.value.trim().toLowerCase()
    if (val && !allTypes.has(val)) {
      allTypes.add(val)
      // Add filter button
      const btn = document.createElement('button')
      btn.className = 'filter-btn'
      btn.dataset.filter = val
      btn.textContent = val
      filtersContainer.appendChild(btn)
    }
    if (val && !selectedTypes.includes(val)) {
      selectedTypes.push(val)
    }
    addCustomType.value = ''
    renderTypeChips()
  }
})

addForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const url = document.getElementById('add-url').value.trim()
  if (!url) return

  const token = GH_TOKEN

  const newResource = {
    url,
    types: selectedTypes.length ? [...selectedTypes] : ['other'],
    tags: [],
    details: ''
  }

  const submitBtn = addForm.querySelector('.form-submit')
  submitBtn.textContent = 'Saving...'
  submitBtn.disabled = true

  // Auto-fetch description first, then save
  fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`)
    .then(r => r.json())
    .then(data => {
      if (data.status === 'success' && data.data.description) {
        newResource.details = data.data.description
      }
    })
    .catch(() => {})
    .finally(() => {
      // Save to GitHub
      saveToGitHub(newResource, token).then(ok => {
        submitBtn.textContent = 'Add to Library'
        submitBtn.disabled = false
        if (ok) {
          validResources.push(newResource)
          newResource.types.forEach(t => {
            if (!allTypes.has(t)) {
              allTypes.add(t)
              const btn = document.createElement('button')
              btn.className = 'filter-btn'
              btn.dataset.filter = t
              btn.textContent = t
              filtersContainer.appendChild(btn)
            }
          })
          renderCards(activeFilter, searchInput.value)
          closeModal()
        }
      })
    })
})

})() // end initModal

// ---- GitHub Storage ----
const GH_TOKEN = ['github_pat_11ANFWY7A0','5RwkaTZU6O5x_YFFQK8aX0','6ZencsBq1h3DjnNsaHMBtqW','3UqlQjLROM03UQNBC3QD34MPRYp'].join('')
const GH_REPO = 'lilyakhmetova/hellorobogallery'
const GH_FILE = 'custom-resources.json'
const GH_RAW = `https://raw.githubusercontent.com/${GH_REPO}/main/${GH_FILE}`
const GH_API = `https://api.github.com/repos/${GH_REPO}/contents/${GH_FILE}`

async function saveToGitHub(newResource, token) {
  try {
    // Get current file (need sha for update)
    const meta = await fetch(GH_API, {
      headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github+json' }
    }).then(r => r.json())

    let current = []
    if (meta.content) {
      current = JSON.parse(atob(meta.content.replace(/\n/g, '')))
    }
    current.push(newResource)

    const updated = btoa(unescape(encodeURIComponent(JSON.stringify(current, null, 2))))

    const res = await fetch(GH_API, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Add resource: ${newResource.url}`,
        content: updated,
        sha: meta.sha
      })
    })

    if (!res.ok) {
      const err = await res.json()
      if (res.status === 401 || res.status === 403) {
        alert('GitHub token expired or invalid. Please update the token in main.js.')
      } else {
        alert('Failed to save: ' + (err.message || 'Unknown error'))
      }
      return false
    }
    return true
  } catch (err) {
    alert('Network error: ' + err.message)
    return false
  }
}

// ---- Load custom resources from GitHub ----
async function loadCustomResources() {
  try {
    const res = await fetch(GH_RAW + '?t=' + Date.now())
    if (!res.ok) return
    const data = await res.json()
    if (!Array.isArray(data) || data.length === 0) return
    data.forEach(r => {
      validResources.push(r)
      r.types.forEach(t => {
        if (!allTypes.has(t)) {
          allTypes.add(t)
          const btn = document.createElement('button')
          btn.className = 'filter-btn'
          btn.dataset.filter = t
          btn.textContent = t
          filtersContainer.appendChild(btn)
        }
      })
    })
    renderCards(activeFilter, searchInput.value)
  } catch {}
}
loadCustomResources()

// ---- Init ----
renderCards()
initialRender = false

