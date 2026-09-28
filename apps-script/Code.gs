/**
 * Trip comments backend: Google Apps Script web app + Google Sheet.
 * Setup (about 5 minutes, one time, signed in to Google):
 *  1. Go to https://script.google.com -> New project. Paste this file over Code.gs. Save.
 *  2. Deploy -> New deployment -> type "Web app".
 *     Execute as: Me.   Who has access: Anyone.   -> Deploy -> Authorize.
 *  3. Copy the Web app URL (ends in /exec) into trip-data.js:
 *        window.COMMENTS_CONFIG = { type: "appsscript", url: "<that URL>" };
 * On first use it creates a Google Sheet named "Smiley Trip Comments" in your Drive.
 */
const SHEET_NAME = 'Smiley Trip Comments';
const HEAD = ['id', 'section', 'name', 'text', 'vote', 'ts'];

function sheet_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('SHEET_ID'), ss;
  if (id) { try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; } }
  if (!ss) {
    ss = SpreadsheetApp.create(SHEET_NAME);
    ss.getSheets()[0].appendRow(HEAD);
    props.setProperty('SHEET_ID', ss.getId());
  }
  return ss.getSheets()[0];
}
function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function list_() {
  const rows = sheet_().getDataRange().getValues().slice(1);
  return rows.filter(r => r[0]).map(r => ({ id: String(r[0]), section: r[1], name: r[2], text: r[3], vote: r[4] || undefined, ts: Number(r[5]) }));
}
function clean_(s, n) { return String(s == null ? '' : s).slice(0, n); }

function doGet(e) {
  return out_({ ok: true, comments: list_() });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const sh = sheet_();
    if (body.action === 'add') {
      const c = body.comment || {};
      if (!c.name || (!c.text && !c.vote)) return out_({ ok: false, error: 'missing fields' });
      const row = [clean_(c.id, 40) || Utilities.getUuid(), clean_(c.section, 40), clean_(c.name, 30),
                   // prefix "'" so text starting with = + - @ is never treated as a formula
                   c.text ? "'" + clean_(c.text, 1000) : '', clean_(c.vote, 60), Number(c.ts) || Date.now()];
      sh.appendRow(row);
      return out_({ ok: true, comment: c });
    }
    if (body.action === 'delete') {
      const vals = sh.getDataRange().getValues();
      for (let i = vals.length - 1; i >= 1; i--) {
        if (String(vals[i][0]) === String(body.id) &&
            String(vals[i][2]).toLowerCase() === String(body.name || '').toLowerCase()) {
          sh.deleteRow(i + 1);
        }
      }
      return out_({ ok: true });
    }
    return out_({ ok: false, error: 'unknown action' });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}
