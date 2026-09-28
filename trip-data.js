/* =====================================================================
   TRIP DATA: edit this file to update the site. No build step needed.
   - Text fields may contain simple trusted HTML (<b>, <i>, <br>).
   - status: "pending" shows an amber PENDING tag; "booked" shows a green tag.
   - map: a Google Maps search string (opens the Maps app on phones).
   Every price/hour here comes from research.md / flights.md (checked Sep 27, 2026).
   ===================================================================== */

/* ---- COMMENTS BACKEND (pluggable) ----------------------------------
   type: "local"      -> saved only on this phone (demo / offline)
         "appsscript" -> Google Apps Script web app + Google Sheet
                         (paste the /exec URL; see apps-script/Code.gs)
         "rest"       -> any endpoint with the same API (e.g. dev-server.js)
   ------------------------------------------------------------------- */
window.COMMENTS_CONFIG = {
  type: "local",
  url: ""   // e.g. "https://script.google.com/macros/s/XXXX/exec"
};

window.TRIP = {
  title: "Smiley Family Arizona Christmas",
  subtitle: "Tucson + Scottsdale · Dec 24–29, 2026",
  checked: "Prices checked Sep 27, 2026 — they will change. Nothing is booked yet.",
  family: ["Aaron", "Kristin"],          // add the girls' names here to show them as one-tap name buttons
  who: "Aaron, Kristin, and our four girls (18, 16, 14, 12)",

  overview: {
    dates: "Thu Dec 24 → Tue Dec 29, 2026 <i>(dates picked, not booked)</i>",
    route: "Indianapolis → Phoenix (Southwest nonstop) → drive ~2 hrs to Tucson (4 nights, Dec 24–28) → Scottsdale (1 night, Dec 28, stopping at Casa Grande Ruins) → Phoenix → Indianapolis (Southwest nonstop)",
    rule: "Must be home by <b>noon Dec 31</b> (we land 12:30 pm Dec 29). Budget: <b>under $8,000 total</b>.",
    weather: "Tucson December average: high <b>65.5°F</b>, low <b>40.5°F</b>. Sunset about <b>5:25 pm</b>.",
    weatherSrc: "https://www.weather.gov/twc/TucsonMonthlyNormalExtremes",
    budget: [
      { item: "Flights, 6 people (Southwest nonstops)", amount: "≈ $2,394", note: "$185 out + $214 back per person, before bag fees", status: "pending" },
      { item: "Southwest checked bags", amount: "$270–$540", note: "$45 first bag, $55 second, each way. 3–6 first bags × 2 flights", status: "pending" },
      { item: "Tucson home, 4 nights (VRBO, pick one)", amount: "$1,155–$2,542", note: "Homes A–D incl. fees (D includes $636 pool heat); no tax line shown. Checked Sep 27, 2026", status: "pending" },
      { item: "Scottsdale, Dec 28", amount: "≈ $142–$249", note: "Google Hotels, Dec 28 with 6 travelers; room count unverified", status: "pending" },
      { item: "Attractions", amount: "≈ $460–$752", note: "Lean plan vs. everything except Taliesin West", status: "pending" },
      { item: "Minivan, 7 seats (PHX, Dec 24–29)", amount: "$619", note: "KAYAK live total, National Chrysler Pacifica or similar, free cancellation (checked Sep 27). Other majors $745–$818; gas ≈ $60 (estimate)", status: "pending" },
      { item: "Food & other (estimate)", amount: "≈ $1,200", note: "$120/day groceries × 6 days + ~4 meals out", status: "pending" },
      { item: "PACKAGE TOTALS (see Where we stay)", amount: "$6,126–$7,513", note: "A $6,126 · B $6,473 · C $6,994 · D $7,513. All under $8,000; optional extras (tram, caves, luminarias) not included" }
    ]
  },

  days: [
    {
      id: "day-1", date: "Thu Dec 24", title: "Christmas Eve · Fly to Phoenix, drive to Tucson",
      status: "pending",
      summary: "Early flight, then an easy afternoon. Some places close early on Christmas Eve.",
      items: [
        { time: "6:15 → 8:20 am", title: "Southwest nonstop IND → PHX", text: "$185 per person on Google Flights. Not booked.", status: "pending", map: "Phoenix Sky Harbor International Airport" },
        { time: "Morning", title: "Pick up 7–8 seat vehicle, drive about 2 hrs to Tucson", text: "Minivan ≈ <b>$619</b> for 5 days (National, Chrysler Pacifica or similar, via KAYAK Sep 27). Not booked. Rental Car Center is a Sky Train ride from the terminal.", status: "pending" },
        { time: "Optional", title: "Pima Air & Space Museum (Christmas Eve 9–3)", text: "$22.50 ages 13+, $16 ages 5–12 → <b>$128.50</b>. Closed Christmas Day.", map: "Pima Air & Space Museum, Tucson AZ", src: "https://pimaair.org/" },
        { time: "Afternoon", title: "Check in, pool, rest", text: "Home not chosen yet: vote on A–D in Where we stay.", status: "pending" }
      ],
      closed: "Christmas Eve short hours: Kartchner Caverns 8–2, Pima Air & Space 9–3. Luminarias is NOT running Dec 24."
    },
    {
      id: "day-2", date: "Fri Dec 25", title: "Christmas Day · Desert Museum, Saguaro West, sunset",
      summary: "Most places are closed today, but the Desert Museum is open and Saguaro NP is open (visitor centers closed).",
      items: [
        { time: "Morning", title: "Arizona-Sonora Desert Museum", text: "Open 365 days a year (a 2023 blog confirms Christmas; sit-down dining was closed). Hours Oct–May 8:30–5. Allow 2+ hours. $29.95 ages 13–64, $24.95 ages 3–12 → <b>$174.70</b>.", map: "Arizona-Sonora Desert Museum, Tucson AZ", src: "https://www.desertmuseum.org/visit/" },
        { time: "Afternoon", title: "Saguaro West drive + Signal Hill petroglyphs", text: "Petroglyphs are a short walk (about 300 yards). Park entry $25 per car, good 7 days for both districts, <b>card only</b>. Red Hills Visitor Center <b>closed</b> today. The Bajada Loop Drive is unpaved.", map: "Signal Hill Picnic Area, Saguaro National Park West", src: "https://www.nps.gov/sagu/planyourvisit/hours.htm" },
        { time: "~4:45 pm", title: "Sunset at Valley View Overlook", text: "0.8 mi easy trail. Sunset about <b>5:25 pm</b>. West district roads close at sunset.", map: "Valley View Overlook Trail, Saguaro National Park West", src: "https://friendsofsaguaro.org/hikestrails" }
      ],
      closed: "Closed today: Saguaro visitor centers, Sabino Canyon tram, Kartchner Caverns, Pima Air & Space, Chiricahua visitor center, Casa Grande Ruins, Taliesin West."
    },
    {
      id: "day-3", date: "Sat Dec 26", title: "Rest day",
      summary: "Sleep in, pool, games. Optional outing if people want one. Vote in the comments.",
      items: [
        { time: "All day", title: "Pool / spa / downtime", text: "Nights are around 40°F, so a heated pool or spa matters." },
        { time: "Option A", title: "Kartchner Caverns (~1 hr SE)", text: "Tour $30 ages 14+, $15 ages 7–13 → <b>$165</b>. <b>Reservations strongly advised.</b> Cafe and gift shop closed until further notice.", map: "Kartchner Caverns State Park, Benson AZ", src: "https://azstateparks.com/kartchner/cave-tours/tours" },
        { time: "Option B", title: "Pima Air & Space Museum", text: "Hours 9–5, last admission 3. <b>$128.50</b> for us.", map: "Pima Air & Space Museum, Tucson AZ", src: "https://pimaair.org/" },
        { time: "Option C", title: "Just rest", text: "No driving." }
      ]
    },
    {
      id: "day-4", date: "Sun Dec 27", title: "Saguaro East + Sabino Canyon",
      summary: "Both are on the east side of Tucson.",
      items: [
        { time: "Morning", title: "Sabino Canyon Crawler (tram)", text: "Hourly 9 am–4 pm. $15 ages 13+, $8 ages 3–12 → <b>$83</b>, plus $8 parking per car. <b>Book online ahead; it sells out.</b>", status: "pending", map: "Sabino Canyon Recreation Area, Tucson AZ", src: "https://sabinocanyoncrawler.com/faqs/" },
        { time: "Afternoon", title: "Saguaro East: Rincon Mountain Visitor Center, Cactus Forest Loop, Freeman Homestead", text: "Visitor center 9–5. 8-mile paved loop drive; Freeman Homestead is an easy 1-mile loop. Same $25 car pass from Christmas Day.", map: "Rincon Mountain Visitor Center, Saguaro National Park East", src: "https://www.nps.gov/sagu/planyourvisit/fees.htm" },
        { time: "Sunset (optional)", title: "Javelina Rocks", map: "Javelina Rocks, Saguaro National Park East" },
        { time: "Optional", title: "Mount Lemmon drive instead", text: "Snow/ice can close the road. Call <a href=\"tel:5203513351\">520-351-3351</a> that day.", map: "Summerhaven, Mount Lemmon AZ", src: "https://www.pima.gov/road-closure-updates" }
      ]
    },
    {
      id: "day-5", date: "Mon Dec 28", title: "Drive to Scottsdale · Casa Grande Ruins · Luminarias",
      status: "pending",
      summary: "Check out of Tucson, stop at Casa Grande Ruins, evening luminarias in Phoenix.",
      items: [
        { time: "Morning", title: "Check out, drive north on I-10" },
        { time: "Optional", title: "Picacho Peak State Park (I-10 exit 219)", text: "$20 per car for 2–4 people (no rate listed for 6). Visitor center 8–5.", map: "Picacho Peak State Park, AZ", src: "https://azstateparks.com/picacho" },
        { time: "Midday", title: "Casa Grande Ruins National Monument (Coolidge)", text: "<b>Free.</b> Open 9–4 (gate closes 15 min early). About 2 hours or less.", map: "Casa Grande Ruins National Monument, Coolidge AZ", src: "https://www.nps.gov/cagr/planyourvisit/hours.htm" },
        { time: "Afternoon", title: "Check in to Scottsdale hotel", text: "Not chosen yet. See Where we stay.", status: "pending" },
        { time: "5:30–9:30 pm", title: "Las Noches de las Luminarias, Desert Botanical Garden", text: "<b>Runs Dec 28</b> (dates include Dec 26–31). Adults $39.95–$44.95, children $18.95. <b>Tickets online only; on sale Oct 16.</b>", status: "pending", map: "Desert Botanical Garden, Phoenix AZ", src: "https://dbg.org/events/las-noches-de-las-luminarias/2026-12-31/" }
      ]
    },
    {
      id: "day-6", date: "Tue Dec 29", title: "Early flight home",
      status: "pending",
      summary: "Leave the hotel by about 5:15 am. Return the car, then fly.",
      items: [
        { time: "~5:15 am", title: "Leave for PHX, return the vehicle", map: "Phoenix Sky Harbor International Airport" },
        { time: "7:15 am → 12:30 pm", title: "Southwest nonstop PHX → IND", text: "$214 per person on Google Flights. Not booked.", status: "pending" }
      ]
    }
  ],

  flights: {
    note: "Google Flights, price <b>per person</b>. Checked Sep 27, 2026 9:14 pm ET. <b>Not booked.</b>",
    groups: [
      { id: "out", title: "Outbound · Thu Dec 24 · IND → PHX", status: "pending",
        options: [ { id: "out-sw-615a", label: "Southwest nonstop 6:15 am → 8:20 am", price: "$185", six: "$1,110" } ] },
      { id: "ret", title: "Return · Tue Dec 29 · PHX → IND", status: "pending",
        options: [ { id: "ret-sw-715a", label: "Southwest nonstop 7:15 am → 12:30 pm", price: "$214", six: "$1,284" } ] }
    ],
    caveats: [
      "Flights for 6 ≈ $2,394 before bag fees.",
      "Southwest checked bags (booked on or after Apr 9, 2026; Basic/Choice/Choice Preferred fares): $45 first bag, $55 second bag, each way. Carry-on + personal item free. Choice Extra fares include 2 free bags; a Southwest Rapid Rewards credit card gives the first bag free for the cardholder + up to 8 companions on the same reservation (source: southwest.com Optional Travel Charges).",
      "Example: 3 checked bags each way = $270; 1 bag per person each way = $540."
    ],
    bagSrc: "https://www.southwest.com/html/customer-service/travel-fees.html"
  },

  lodging: {
    note: "Four whole-home VRBO options, Dec 24–28 (4 nights), 6 guests. Totals <b>include VRBO fees; no tax line was shown</b>. <b>Prices checked Sep 27, 2026 (~9:40 pm ET).</b> Nothing booked. Vote for your favorite. (Hotel fallbacks from earlier research: Embassy Suites Tucson East ≈ $936 for 2 suites × 4 nights; Westin La Paloma ≈ $2,670–$2,840.)",
    pkgNote: "Package = everything except optional extras. Checked Sep 27, 2026. Vehicle is a live KAYAK quote (not booked); gas and food are estimates.",
    pkgCommon: [
      ["Flights, 6 people (Southwest nonstops)", 2394, "$185 out + $214 back per person"],
      ["Southwest checked bags", 270, "Assumes 3 checked bags each way ($270). A Southwest Rapid Rewards card = free first bag for cardholder + up to 8 companions"],
      ["Scottsdale night, Dec 28 (Embassy Suites)", 228, "Planning figure; 1 suite vs 2 rooms for 6 unverified; before tax"],
      ["Minivan, PHX Dec 24–29 (National, Chrysler Pacifica or similar)", 619, "KAYAK total for 5 days, free cancellation, checked Sep 27 ~9:45 pm ET. Not booked"],
      ["Gas, ~350 miles (estimate)", 60, "≈ 16 gal at ~22 mpg × ~$3.60/gal"],
      ["Saguaro NP ($25/car) + Desert Museum (~$175)", 200, ""],
      ["Food & other (estimate)", 1200, "≈ $120/day groceries × 6 days ($720) + ~4 meals out at ~$120 ($480)"]
    ],
    options: [
      {
        id: "home-a", pkgHome: 1155, name: "A · Downtown Historic 4BR, Barrio Viejo", tag: "Best price",
        price: "<b>$1,155 total</b> for 4 nights (incl. fees). Rating 9.8 (6 reviews).",
        beds: "4 bedrooms, sleeps 8: two queen rooms + two rooms with 2 extra-long twins each (everyone gets a bed). 2 full + 2 half baths.",
        cancel: "Full refund only if cancelled <b>before Oct 25, 2026</b>.",
        pros: "Cheapest by far. Walk to downtown restaurants and the streetcar. Parking for 3 cars. Lots of bathrooms.",
        cons: "Only 6 reviews. No pool/hot tub listed. City setting, not desert views. Short free-cancel window.",
        map: "Barrio Viejo, Tucson AZ",
        link: "https://www.vrbo.com/4419370?chkin=2026-12-24&chkout=2026-12-28&adults=6"
      },
      {
        id: "home-b", pkgHome: 1502, name: "B · Experience Tucson, near University of Arizona (Jefferson Park)", tag: "Top rated",
        price: "<b>$1,502 total</b> for 4 nights (incl. fees). Rating 10 (38 reviews).",
        beds: "Sleeps exactly 6: king (en suite bath), queen, and two twins. 2 baths.",
        cancel: "Full refund <b>before Nov 24, 2026</b>; partial refund before Dec 10.",
        pros: "Perfect 10 from 38 reviews. Most flexible cancellation. Garage. Central location.",
        cons: "Two girls share a room with twins and two share a queen (tight at exactly 6). No pool/hot tub listed.",
        map: "Jefferson Park, Tucson AZ",
        link: "https://www.vrbo.com/2604636?chkin=2026-12-24&chkout=2026-12-28&adults=6"
      },
      {
        id: "home-c", pkgHome: 2023, name: "C · Tucson Game House with Hot Tub, Fire Pit & Games (Catalina Foothills)", tag: "Hot tub + games",
        price: "<b>$2,023 total</b> ($506/night, all fees included). Rating 10 (19 reviews).",
        beds: "Sleeps 8: bedroom 1 king, bedroom 2 queen, bedroom 3 three twins, plus a fold-out twin ottoman and two 9-foot sofas. 2 baths.",
        cancel: "Full refund <b>before Dec 10, 2026</b>; 50% refund before Dec 17 (minus service fee); no refund after.",
        pros: "Private hot tub for 4 (nights ~40°F), fire pit, cornhole, grill, fenced yard. Game room: air hockey, foosball, classic NES console. Catalina mountain views, 2-car garage, big stocked kitchen, washer/dryer, electric fireplace. Across from a park with a weekend farmers market; near Tucson Mall, ~5 mi to downtown. Flexible cancellation.",
        cons: "No pool. 3 bedrooms, so the girls share (one room has 3 twins). Only 2 baths. ~27 min to Saguaro National Park. About $870 more than A.",
        map: "Catalina Foothills, Tucson AZ",
        link: "https://www.vrbo.com/3085995?chkin=2026-12-24&chkout=2026-12-28&adults=6"
      },
      {
        id: "home-d", pkgHome: 2542, name: "D · The Saguaro Sanctuary (east side, near Saguaro East & Sabino)", tag: "Splurge · pool",
        price: "$1,906 (incl. fees) + December heated pool $636 ($249 first day + $129 × 3 days) = <b>≈ $2,542 total</b>. Rating 9.4 (49 reviews).",
        beds: "5 bedrooms: five kings + two twins, so everyone can have a room. 3 baths.",
        cancel: "<b>NON-REFUNDABLE.</b>",
        pros: "Private heated pool, pool table, fire pit, fireplace, mountain views. Closest to Saguaro East and Sabino Canyon (Dec 27).",
        cons: "Most expensive. No refund if plans change. Farther from Saguaro West / Desert Museum (Dec 25).",
        map: "Saguaro National Park East, Tucson AZ",
        link: "https://www.vrbo.com/4411090?chkin=2026-12-24&chkout=2026-12-28&adults=6"
      }
    ],
    scottsdale: {
      note: "Night of <b>Dec 28</b>. Google Hotels with Dec 28–29 and 6 travelers set (rate shown per night; whether that's 1 or 2 rooms is unverified). 2-traveler rates in brackets.",
      options: [
        { name: "Home2 Suites Scottsdale Salt River", price: "$142 ($96 for 2). Free breakfast, pool, hot tub.", map: "Home2 Suites by Hilton Scottsdale Salt River" },
        { name: "Embassy Suites Scottsdale Resort", price: "$228 ($174 for 2). Two-room suites, free breakfast, free parking. Planning figure used in the totals.", map: "Embassy Suites by Hilton Scottsdale Resort" },
        { name: "Sonesta Suites Scottsdale Gainey Ranch", price: "$249 ($148 for 2).", map: "Sonesta Suites Scottsdale Gainey Ranch" }
      ]
    }
  },
  packing: [
    { group: "Clothes (highs mid 60s, lows around 40°F)", items: ["Layers: T-shirts + long sleeves", "Fleece or warm jacket for mornings and evenings", "Beanie/gloves for the evening luminarias", "Comfortable walking/hiking shoes", "Swimsuits (heated pool/spa)", "Pajamas + a Christmas outfit"] },
    { group: "Sun + desert", items: ["Sunscreen", "Sunglasses", "Hats", "Refillable water bottles", "Lip balm", "Small daypack", "Headlamp or phone light (sunset hikes)"] },
    { group: "Documents + money", items: ["Photo IDs for flying", "Credit card (Saguaro NP is card only)", "Booking confirmations (tram, caves, luminarias)", "Driver's license for the rental"] },
    { group: "Tech", items: ["Phone chargers + cords", "Portable battery", "Car phone mount / charger"] },
    { group: "Christmas", items: ["Small gifts / stocking stuffers", "Snacks for the drive and flight"] }
  ],

  keyDates: [
    { date: "Now", title: "Book Southwest flights (Dec 24 out, Dec 29 back)", text: "$185 + $214 per person seen Sep 27; prices change.", status: "pending" },
    { date: "Now", title: "Pick Tucson home (Dec 24–28)", text: "Vote A–D. Home A free cancel ends Oct 25; Home B full refund ends Nov 24; Home C full refund ends Dec 10; Home D is non-refundable.", status: "pending" },
    { date: "Now", title: "Pick Scottsdale hotel (Dec 28)", status: "pending" },
    { date: "Now", title: "Book a 7-seat minivan at PHX (Dec 24–29)", text: "$617–$818 on KAYAK Sep 27 (free cancellation on most). December is peak van demand.", status: "pending" },
    { date: "ASAP", title: "Kartchner Caverns reservation (if Dec 26 Option A)", text: "Online or 877-MY-PARKS.", link: "https://azstateparks.com/kartchner" },
    { date: "Fri Oct 16", title: "Luminarias tickets go on sale", text: "Online only, for Mon Dec 28.", link: "https://dbg.org/events/las-noches-de-las-luminarias/2026-12-31/" },
    { date: "Days–weeks before", title: "Book Sabino Canyon tram (Dec 27)", text: "Sells out.", link: "https://sabinocanyoncrawler.com/faqs/" },
    { date: "Dec 23", title: "Check in for flight (24 hrs ahead) and pay bag fees" },
    { date: "Day of", title: "Mount Lemmon road check", text: "Call 520-351-3351.", link: "tel:5203513351" },
    { date: "Dec 29", title: "Leave Scottsdale by ~5:15 am", text: "7:15 am flight, home 12:30 pm." }
  ],

  sources: [
    ["Saguaro NP hours", "https://www.nps.gov/sagu/planyourvisit/hours.htm"],
    ["Saguaro NP fees", "https://www.nps.gov/sagu/planyourvisit/fees.htm"],
    ["Arizona-Sonora Desert Museum", "https://www.desertmuseum.org/visit/"],
    ["Sabino Canyon Crawler FAQ", "https://sabinocanyoncrawler.com/faqs/"],
    ["Kartchner Caverns", "https://azstateparks.com/kartchner"],
    ["Pima Air & Space", "https://pimaair.org/"],
    ["Casa Grande Ruins hours", "https://www.nps.gov/cagr/planyourvisit/hours.htm"],
    ["Luminarias (Desert Botanical Garden)", "https://dbg.org/events/las-noches-de-las-luminarias/2026-12-31/"],
    ["Southwest bag fees (Optional Travel Charges)", "https://www.southwest.com/html/customer-service/travel-fees.html"],
    ["Tucson December normals (NWS)", "https://www.weather.gov/twc/TucsonMonthlyNormalExtremes"],
    ["Tucson sunrise/sunset", "https://www.timeanddate.com/sun/usa/tucson?month=12&year=2026"],
    ["KAYAK minivans PHX Dec 24–29", "https://www.kayak.com/cars/PHX/2026-12-24-9h/2026-12-29-5h?fs=carclass=van"],
    ["Google Hotels search used", "https://www.google.com/travel/search?q=Tucson%20resort%20suites%20Dec%2024%20to%20Dec%2028%202026"]
  ]
};
