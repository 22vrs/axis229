// Integracion con Supabase para guardar y renderizar el ranking.
// Si cambian tabla, columnas o proveedor externo, este es el primer sitio a revisar.

function getSupabaseClient() {
  const configured = SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !SUPABASE_URL.includes('PEGA_AQUI') &&
    !SUPABASE_ANON_KEY.includes('PEGA_AQUI');

  if (!configured || !window.supabase || !window.supabase.createClient) return null;
  if (!supabaseClient) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return supabaseClient;
}

function setStatus(element, message, kind = '') {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle('is-error', kind === 'error');
  element.classList.toggle('is-success', kind === 'success');
}

function prepareGameOverScore(scene) {
  pendingScoreSave = {
    score,
    level: playerLevel,
    streak: maxEnergyStreak,
  };
  lastScoreSaved = false;

  const overlay = scene.gameOverContainer;
  if (!overlay) return;
  if (overlay.scoreForm) overlay.scoreForm.hidden = false;
  if (overlay.rankingBlock) overlay.rankingBlock.hidden = false;
  if (overlay.playerNameInput) {
    overlay.playerNameInput.value = '';
    overlay.playerNameInput.disabled = false;
  }
  if (overlay.saveScoreButton) overlay.saveScoreButton.disabled = false;
  const hasClient = Boolean(getSupabaseClient());
  setStatus(overlay.scoreStatus, hasClient ? '' : 'Configura Supabase en game.js para guardar el ranking.', hasClient ? '' : 'error');
}

async function savePendingScore(scene) {
  const overlay = scene.gameOverContainer;
  const client = getSupabaseClient();
  const rawName = overlay && overlay.playerNameInput ? overlay.playerNameInput.value : '';
  const playerName = rawName.trim().replace(/\s+/g, ' ').slice(0, 18) || DEFAULT_PLAYER_NAME;

  if (!pendingScoreSave || lastScoreSaved) return;
  if (!client) {
    setStatus(overlay && overlay.scoreStatus, 'Faltan SUPABASE_URL y SUPABASE_ANON_KEY en game.js.', 'error');
    return;
  }

  if (overlay && overlay.saveScoreButton) overlay.saveScoreButton.disabled = true;
  setStatus(overlay && overlay.scoreStatus, 'Guardando...');

  const payload = {
    nombre: playerName,
    nivel: pendingScoreSave.level,
    [SUPABASE_SCORE_COLUMN]: pendingScoreSave.score,
    [SUPABASE_STREAK_COLUMN]: pendingScoreSave.streak,
  };
  const { error } = await client.from(SUPABASE_RANKING_TABLE).insert(payload);

  if (error) {
    if (overlay && overlay.saveScoreButton) overlay.saveScoreButton.disabled = false;
    setStatus(overlay && overlay.scoreStatus, 'No se pudo guardar: ' + error.message, 'error');
    return;
  }

  lastScoreSaved = true;
  pendingScoreSave = null;
  if (overlay && overlay.playerNameInput) overlay.playerNameInput.disabled = true;
  if (overlay && overlay.scoreForm) overlay.scoreForm.hidden = true;
  setStatus(overlay && overlay.scoreStatus, 'Puntuacion guardada.', 'success');
  loadRankingInto(overlay && overlay.topRankingList, null, 3);
}

async function loadRankingInto(listElement, statusElement, limit = null) {
  if (!listElement) return;
  const client = getSupabaseClient();
  renderRanking(listElement, []);

  if (!client) {
    setStatus(statusElement, 'Configura Supabase en game.js para ver el ranking.', 'error');
    return;
  }

  setStatus(statusElement, 'Cargando...');
  let query = client
    .from(SUPABASE_RANKING_TABLE)
    .select('*')
    .order(SUPABASE_SCORE_COLUMN, { ascending: false })
    .order('created_at', { ascending: true });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  if (error) {
    renderRanking(listElement, []);
    setStatus(statusElement, 'No se pudo cargar el ranking: ' + error.message, 'error');
    return;
  }

  renderRanking(listElement, data || []);
  setStatus(statusElement, data && data.length ? '' : 'Todavia no hay puntuaciones.');
}

function renderRanking(listElement, rows) {
  listElement.replaceChildren();

  if (!rows.length) {
    const empty = document.createElement('li');
    empty.className = 'ranking-empty';
    empty.textContent = 'Sin puntuaciones';
    listElement.append(empty);
    return;
  }

  rows.forEach((row, index) => {
    const item = document.createElement('li');
    const position = document.createElement('span');
    const player = document.createElement('span');
    const name = document.createElement('span');
    const meta = document.createElement('span');
    const points = document.createElement('span');
    const scoreValue = Number(row[SUPABASE_SCORE_COLUMN] || 0);
    const streakValue = Number(row[SUPABASE_STREAK_COLUMN] || 0);
    const levelValue = Number(row.nivel || 0);

    item.className = 'ranking-item';
    position.className = 'ranking-position';
    player.className = 'ranking-player';
    name.className = 'ranking-name';
    meta.className = 'ranking-meta';
    points.className = 'ranking-score';

    position.textContent = '#' + (index + 1);
    name.textContent = row.nombre || 'Jugador';
    meta.textContent = 'Nivel ' + levelValue + ' - Racha ' + streakValue;
    points.textContent = scoreValue;

    player.append(name, meta);
    item.append(position, player, points);
    listElement.append(item);
  });
}
