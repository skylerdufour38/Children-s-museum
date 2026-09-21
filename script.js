const apps = [
  { name: 'Animal Sounds', bundleId: 'com.smartbabyapps.animalsounds', version: '2.0', platform: 'iOS', minOs: '3.1', ipaFile: 'Animal Sounds 2.0.ipa', fileSize: 19.8 },
  { name: 'SoundTouch', bundleId: 'com.yourcompany.SoundTouch', version: '1.4', platform: 'iOS', minOs: '3.0', ipaFile: 'SoundTouch 1.4.ipa', fileSize: 155.5 },
  { name: 'Tozzle', bundleId: 'com.nodeflexion.Tozzle', version: '3.7', platform: 'iOS', minOs: '3.1.3', ipaFile: 'Tozzle 3.7.ipa', fileSize: 112.6 },
  { name: 'AutismXpress', bundleId: 'X7WS995LSR.com.StudioEmotion.AutismXpress', version: '1.0', platform: 'iOS', minOs: '3.1.2', ipaFile: 'AutismXpress 1.0.ipa', fileSize: 7.4 },
  { name: 'Lunchbox', bundleId: 'com.thup.MonkeyPreschool', version: '1.4', platform: 'iOS', minOs: '3.0', ipaFile: 'Lunchbox 1.4.ipa', fileSize: 13.7 },
  { name: 'Peek-a-Zoo', bundleId: 'com.duckduckmoosedesign.peekazoo', version: '1.1.1', platform: 'iOS', minOs: '3.0', ipaFile: 'Peek-a-Zoo 1.1.1.ipa', fileSize: 19.1 },
  { name: 'Michigan Nature Sounds', bundleId: 'com.yourcompany.MichiganNatureSounds', version: '1.0', platform: 'iOS', minOs: '3.0', ipaFile: 'Michigan Nature Sounds 1.0.ipa', fileSize: 24.6 },
  { name: 'Peek-a-Zoo', bundleId: 'com.tbd.pazCLL', version: '1.0', platform: 'iOS', minOs: '3.0', ipaFile: 'Peek-a-Zoo 1.0.ipa', fileSize: 24.6 },
  { name: 'Artsee', bundleId: 'com.britejar.artsee', version: '1.1', platform: 'iOS', minOs: '2.2', ipaFile: 'Artsee 1.1.ipa', fileSize: 12.4 },
  { name: 'Angry Birds', bundleId: 'com.rovio.AngryBirdsHalloween', version: '1.5.3', platform: 'iOS', minOs: '3.0', ipaFile: 'Angry Birds 1.5.3.ipa', fileSize: 16.8 },
  { name: 'Farm Flip Fun', bundleId: 'lv.yapp.farmflipfun', version: '1.0', platform: 'iOS', minOs: '3.0', ipaFile: 'Farm Flip Fun 1.0.ipa', fileSize: 10.6 },
  { name: 'Farm Story', bundleId: 'com.teamlava.farmstory', version: '1.2', platform: 'iOS', minOs: '3.0', ipaFile: 'Farm Story 1.2.ipa', fileSize: 19.9 },
  { name: 'Stickers', bundleId: 'com.nightanddaystudios.ericcarlestickers', version: '1.0', platform: 'iOS', minOs: '5.0', ipaFile: 'Stickers 1.0.ipa', fileSize: 206.1 },
  { name: 'Forest', bundleId: 'com.nightanddaystudios.peekabooforest', version: '1.1.0', platform: 'iOS', minOs: '3.1.3', ipaFile: 'Forest 1.1.0.ipa', fileSize: 25.6 },
  { name: 'Virtuoso', bundleId: 'com.peterb.virtuosopianofree', version: '3.1.2', platform: 'iOS', minOs: '4.0', ipaFile: 'Virtuoso 3.1.2.ipa', fileSize: 19.9 },
  { name: 'ABC Tracer', bundleId: 'com.appzoo.ABCTracer', version: '1.8', platform: 'iOS', minOs: '2.2.1', ipaFile: 'ABC Tracer 1.8.ipa', fileSize: 20.9 },
  { name: 'Peek Wild', bundleId: 'com.nightanddaystudios.peekaboowild', version: '2.0.1', platform: 'iOS', minOs: '3.1.3', ipaFile: 'Peek Wild 2.0.1.ipa', fileSize: 9.8 },
  { name: 'Peekaboo', bundleId: 'com.nightanddaystudios.peekaboobarn', version: '2.0', platform: 'iOS', minOs: '2.2', ipaFile: 'Peekaboo 2.0.ipa', fileSize: 3.6 },
  { name: 'Finding Sight', bundleId: 'my.finding3', version: '2.1', platform: 'iOS', minOs: '3.2', ipaFile: 'Finding Sight 2.1.ipa', fileSize: 34 },
  { name: 'ArtikPix', bundleId: 'com.rinnapps.artikpix.iap', version: '1.2.4', platform: 'iOS', minOs: '3.1', ipaFile: 'ArtikPix 1.2.4.ipa', fileSize: 41.4 }
];

const searchInput = document.getElementById('searchInput');
const resetButton = document.getElementById('resetButton');
const appTableBody = document.getElementById('appTableBody');
const totalAppsEl = document.getElementById('totalApps');
const platformCountEl = document.getElementById('platformCount');
const sizeTotalEl = document.getElementById('sizeTotal');

function formatSize(size) {
  return `${size.toFixed(1)} MB`;
}

function getFilteredApps(query) {
  const term = query.trim().toLowerCase();

  if (!term) {
    return apps;
  }

  return apps.filter((app) =>
    [
      app.name,
      app.bundleId,
      app.version,
      app.platform,
      app.minOs,
      app.ipaFile,
      formatSize(app.fileSize)
    ]
      .join(' ')
      .toLowerCase()
      .includes(term)
  );
}

function renderApps() {
  const filteredApps = getFilteredApps(searchInput.value);

  if (filteredApps.length === 0) {
    appTableBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-state">No apps matched your search.</td>
      </tr>
    `;
  } else {
    appTableBody.innerHTML = filteredApps
      .map(
        (app) => `
          <tr>
            <td><span class="app-name">${app.name}</span></td>
            <td><span class="bundle-id">${app.bundleId}</span></td>
            <td><span class="version-pill">${app.version}</span></td>
            <td><span class="platform-pill">${app.platform}</span></td>
            <td>${app.minOs}</td>
            <td><span class="ipa-file">${app.ipaFile}</span></td>
            <td class="size-cell">${formatSize(app.fileSize)}</td>
          </tr>
        `
      )
      .join('');
  }

  const totalSize = filteredApps.reduce((sum, app) => sum + app.fileSize, 0);
  totalAppsEl.textContent = String(filteredApps.length);
  platformCountEl.textContent = String(filteredApps.filter((app) => app.platform === 'iOS').length);
  sizeTotalEl.textContent = `${totalSize.toFixed(1)} MB`;
}

searchInput.addEventListener('input', renderApps);
resetButton.addEventListener('click', () => {
  searchInput.value = '';
  renderApps();
  searchInput.focus();
});

renderApps();
