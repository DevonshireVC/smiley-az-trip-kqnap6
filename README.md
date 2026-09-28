# Smiley Family Arizona Christmas: trip site

- `index.html`: the whole site (inline CSS/JS, no build step).
- `trip-data.js`: **all trip content + comments config**. Edit this to update days, flights, lodging, packing, dates.
- `apps-script/Code.gs`: comments backend (Google Apps Script + Google Sheet). Setup steps are at the top of the file.
- `dev-server.js`: local test server with the same comments API (`node dev-server.js`, then set `COMMENTS_CONFIG = {type:"rest", url:"/api"}`).

Comments: pick or type a name (saved per phone), comment per section, 👍 vote on flights, lodging and Dec 28 options (the latest vote per person per section counts).
Until `COMMENTS_CONFIG` points to a backend, comments are saved on each phone only, and a "Demo mode" note shows on the page.

Marking progress: set `status: "booked"` (green) or `"pending"` (amber) on any item in trip-data.js.
