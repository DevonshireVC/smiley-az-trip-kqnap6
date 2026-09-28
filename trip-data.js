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
  subtitle: "Tucson + Scottsdale · Dec 2026",
  checked: "Prices checked Sep 27, 2026 — they will change. Nothing is booked yet.",
  family: ["Aaron", "Kristin"],          // add the girls' names here to show them as one-tap name buttons
  who: "Aaron, Kristin, and our four girls (18, 16, 14, 12)",

  overview: {
    dates: "Fri Dec 25 → Wed Dec 30, 2026 <i>(dates still flexible)</i>",
    route: "Indianapolis → Phoenix (nonstop) → drive ~2 hrs to Tucson (4 nights) → Scottsdale (1 night, stopping at Casa Grande Ruins) → Phoenix → Indianapolis (nonstop)",
    rule: "Must be home by <b>noon Dec 31</b>. Budget: <b>under $8,000 total</b>.",
    weather: "Tucson December average: high <b>65.5°F</b>, low <b>40.5°F</b>. Sunset about <b>5:25 pm</b>.",
    weatherSrc: "https://www.weather.gov/twc/TucsonMonthlyNormalExtremes",
    budget: [
      { item: "Return flight PHX→IND nonstop, 6 people", amount: "$1,554–$2,166", note: "$259–$361 per person (Dec 30 nonstops)", status: "pending" },
      { item: "Outbound flight IND→PHX nonstop, 6 people", amount: "Not priced yet", note: "Reference only: IND→TUS one-way with a stop was $213–$258 per person", status: "pending" },
      { item: "Tucson lodging, 4 nights", amount: "$864 to about $2,800+", note: "Lead rates before taxes and fees; vacation-rental prices not shown", status: "pending" },
      { item: "Scottsdale, 1 night", amount: "About $138–$330", note: "Based on September rates, NOT Dec 29", status: "pending" },
      { item: "Attractions", amount: "About $460–$950", note: "Leaner plan vs. doing everything", status: "pending" },
      { item: "Minivan / large SUV rental (PHX)", amount: "Not priced yet", note: "", status: "pending" },
      { item: "Food, lodging taxes, fees", amount: "Not estimated yet", note: "", status: "pending" }
    ]
  },

  days: [
    {
      id: "day-1", date: "Fri Dec 25", title: "Christmas Day · Fly to Phoenix, drive to Tucson",
      status: "pending",
      summary: "Travel day. Most places are closed on Christmas, but the Desert Museum is open and Saguaro NP is open (visitor centers closed).",
      items: [
        { time: "Morning", title: "Nonstop flight IND → PHX", text: "Flight not chosen yet. See Flights below.", status: "pending", map: "Phoenix Sky Harbor International Airport" },
        { time: "", title: "Pick up minivan / large SUV, drive about 2 hrs to Tucson", text: "Rental price not checked yet.", status: "pending" },
        { time: "If we land early", title: "Arizona-Sonora Desert Museum", text: "Open 365 days a year (a 2023 blog confirms Christmas; sit-down dining was closed). Hours Oct–May 8:30–5. Allow 2+ hours. $29.95 ages 13–64, $24.95 ages 3–12 → <b>$174.70</b> for us.", map: "Arizona-Sonora Desert Museum, Tucson AZ", src: "https://www.desertmuseum.org/visit/" },
        { time: "~4:45 pm", title: "Sunset at Valley View Overlook (Saguaro West)", text: "0.8 mi easy trail. Sunset about <b>5:25 pm</b>. West district roads close at sunset. Park entry $25 per car, good 7 days for both districts, <b>card only</b>. Red Hills Visitor Center is <b>closed</b> today.", map: "Valley View Overlook Trail, Saguaro National Park West", src: "https://www.nps.gov/sagu/planyourvisit/hours.htm" },
        { time: "Evening", title: "Check in to Tucson lodging", text: "Lodging not chosen yet. See Where we stay.", status: "pending" }
      ],
      closed: "Closed today: Saguaro visitor centers, Sabino Canyon tram, Kartchner Caverns, Pima Air & Space, Chiricahua visitor center, Casa Grande Ruins, Taliesin West."
    },
    {
      id: "day-2", date: "Sat Dec 26", title: "Saguaro East + pool time",
      summary: "Easy sightseeing morning, rest in the afternoon.",
      items: [
        { time: "Morning", title: "Rincon Mountain Visitor Center (Saguaro East)", text: "Open 9–5. Same $25 car pass from yesterday works here.", map: "Rincon Mountain Visitor Center, Saguaro National Park East", src: "https://www.nps.gov/sagu/planyourvisit/fees.htm" },
        { time: "", title: "Cactus Forest Loop Drive + Freeman Homestead trail", text: "8-mile paved loop drive. Freeman Homestead is an easy 1-mile loop. East loop gate open 5 am–8:30 pm.", map: "Freeman Homestead Trailhead, Saguaro National Park East", src: "https://friendsofsaguaro.org/hikestrails" },
        { time: "Afternoon", title: "Rest / pool", text: "Nights are around 40°F, so a heated pool or spa matters." },
        { time: "Sunset (optional)", title: "Javelina Rocks", text: "Good sunset spot on the Cactus Forest Loop.", map: "Javelina Rocks, Saguaro National Park East" }
      ]
    },
    {
      id: "day-3", date: "Sun Dec 27", title: "Sabino Canyon",
      summary: "Tram ride up the canyon, then a slow afternoon.",
      items: [
        { time: "Morning", title: "Sabino Canyon Crawler (tram)", text: "Hourly 9 am–4 pm. $15 ages 13+, $8 ages 3–12 → <b>$83</b>, plus $8 parking per car. <b>Book online ahead; it sells out.</b>", status: "pending", map: "Sabino Canyon Recreation Area, Tucson AZ", src: "https://sabinocanyoncrawler.com/faqs/" },
        { time: "Afternoon", title: "Rest / pool / games" },
        { time: "Optional", title: "Mount Lemmon drive", text: "Snow and ice can close the road or require 4WD/AWD/chains. Call the Pima County Sheriff road hotline <a href=\"tel:5203513351\">520-351-3351</a> that day.", map: "Summerhaven, Mount Lemmon AZ", src: "https://www.pima.gov/road-closure-updates" }
      ]
    },
    {
      id: "day-4", date: "Mon Dec 28", title: "Pick one: caves, planes, or a rest day",
      status: "pending",
      summary: "Vote in the comments. Each option is a half or full day.",
      items: [
        { time: "Option A", title: "Kartchner Caverns State Park (~1 hr SE)", text: "Big Room or Rotunda/Throne tour: $30 ages 14+, $15 ages 7–13 → <b>$165</b> per tour. <b>Reservations strongly advised.</b> Cafe and gift shop closed until further notice.", map: "Kartchner Caverns State Park, Benson AZ", src: "https://azstateparks.com/kartchner/cave-tours/tours" },
        { time: "Option B", title: "Pima Air & Space Museum", text: "Hours 9–5, last admission 3. $22.50 ages 13+, $16 ages 5–12 → <b>$128.50</b>.", map: "Pima Air & Space Museum, Tucson AZ", src: "https://pimaair.org/" },
        { time: "Option C", title: "Chiricahua National Monument (~2 hrs E)", text: "Free. Visitor center 8:30–4:30. Hiker shuttle not running. Long day.", map: "Chiricahua National Monument Visitor Center", src: "https://www.nps.gov/chir/planyourvisit/basicinfo.htm" },
        { time: "Option D", title: "Bisbee Queen Mine Tour", text: "$18 adults, $9 ages 6–12 → <b>$99</b>. Tours 9, 10:30, 12, 2, 3:30. Reservations required.", map: "Queen Mine Tour, Bisbee AZ", src: "https://www.copperqueenmine.com/services-1" },
        { time: "Option E", title: "Full rest day", text: "Pool, sleep in, pack for tomorrow." }
      ]
    },
    {
      id: "day-5", date: "Tue Dec 29", title: "Drive to Scottsdale · Casa Grande Ruins · Luminarias",
      status: "pending",
      summary: "Check out of Tucson, stop at Casa Grande Ruins on the way, evening luminarias in Phoenix.",
      items: [
        { time: "Morning", title: "Check out, drive north on I-10" },
        { time: "Optional", title: "Picacho Peak State Park (I-10 exit 219)", text: "$20 per car for 2–4 people (no rate listed for 6). Visitor center 8–5. Calloway Trail is moderate; Hunter Trail is strenuous.", map: "Picacho Peak State Park, AZ", src: "https://azstateparks.com/picacho" },
        { time: "Midday", title: "Casa Grande Ruins National Monument (Coolidge)", text: "<b>Free.</b> Open 9–4 (gate closes 15 min early). About 2 hours or less.", map: "Casa Grande Ruins National Monument, Coolidge AZ", src: "https://www.nps.gov/cagr/planyourvisit/hours.htm" },
        { time: "Afternoon", title: "Check in to Scottsdale hotel", text: "Not chosen yet. See Where we stay.", status: "pending" },
        { time: "5:30–9:30 pm", title: "Las Noches de las Luminarias, Desert Botanical Garden", text: "Running Dec 29. Adults $39.95–$44.95, children $18.95 (child age range not defined on the current page). <b>Tickets online only; on sale Oct 16.</b> Garden closes to daytime visitors at 4 pm.", status: "pending", map: "Desert Botanical Garden, Phoenix AZ", src: "https://dbg.org/events/las-noches-de-las-luminarias/2026-12-31/" }
      ]
    },
    {
      id: "day-6", date: "Wed Dec 30", title: "Fly home",
      status: "pending",
      summary: "Nonstop PHX → IND. Must be home by noon Dec 31.",
      items: [
        { time: "Optional (if afternoon flight)", title: "Taliesin West", text: "Audio tours 10 am–3:45 pm last entry. $44 adults, $22 ages 6–17 → about <b>$198</b>. Reserve ahead; tickets non-refundable.", map: "Taliesin West, Scottsdale AZ", src: "https://franklloydwright.org/taliesin-west-tours/" },
        { time: "", title: "Return car, nonstop flight PHX → IND", text: "Flight not chosen yet. See Flights.", status: "pending", map: "Phoenix Sky Harbor International Airport" }
      ]
    }
  ],

  flights: {
    note: "Google Flights, economy, price <b>per person</b>. Checked Sep 27, 2026 about 8:30 pm ET.",
    groups: [
      {
        id: "out", title: "Outbound · Fri Dec 25 · IND → PHX nonstop", status: "pending",
        empty: "Not checked yet. Nonstop IND → PHX prices for Dec 25 still need to be looked up.",
        options: []
      },
      {
        id: "ret", title: "Return · Wed Dec 30 · PHX → IND nonstops", vote: true,
        link: "https://www.google.com/travel/flights/search?tfs=EAAaHhIKMjAyNi0xMi0zMGoHCAESA1BIWHIHCAESA0lOREABSAGYAQI&curr=USD&hl=en",
        options: [
          { id: "ret-aa-515p", label: "American 5:15 pm → 10:36 pm", price: "$259", six: "$1,554" },
          { id: "ret-aa-1101a", label: "American 11:01 am → 4:28 pm", price: "$311", six: "$1,866" },
          { id: "ret-sw-700p", label: "Southwest 7:00 pm → 12:15 am (+1)", price: "$335", six: "$2,010" },
          { id: "ret-sw-715a", label: "Southwest 7:15 am → 12:30 pm", price: "$346", six: "$2,076" },
          { id: "ret-sw-1255p", label: "Southwest 12:55 pm → 6:10 pm", price: "$361", six: "$2,166" }
        ]
      },
      {
        id: "ref-tus", title: "For reference · Dec 25 IND → TUS one-way (no nonstops)", 
        link: "https://www.google.com/travel/flights/search?tfs=EAAaHhIKMjAyNi0xMi0yNWoHCAESA0lORHIHCAESA1RVUxoeEgoyMDI2LTEyLTMwagcIARIDVFVTcgcIARIDSU5EQAFIAZgBAQ&curr=USD&hl=en",
        options: [
          { id: "tus-dl", label: "Delta 6:00 am → 11:50 am, 1 stop ATL", price: "$213", six: "$1,278" },
          { id: "tus-ua", label: "United 3:49 pm → 9:24 pm, 1 stop DEN", price: "$243", six: "$1,458" },
          { id: "tus-sw", label: "Southwest 6:55 am → 10:50 am, 1 stop DEN", price: "$258", six: "$1,548" }
        ]
      }
    ],
    caveats: [
      "Southwest changed its bag policy in 2025 and now charges for checked bags. Verify current fees.",
      "Cheapest connecting return seen: United 3:45 pm → 11:59 pm via ORD, $179 per person (not nonstop)."
    ]
  },

  lodging: {
    note: "Google Hotels lead nightly rates tagged Dec 25–29. Room type and 6-person fit are <b>not confirmed</b>; taxes and fees are probably extra. Cancellation terms not shown for any option.",
    options: [
      {
        id: "lodge-embassy", name: "Embassy Suites Tucson East", tag: "Budget",
        price: "$108/night lead rate × 2 suites × 4 nights ≈ <b>$864</b>",
        beds: "Two-room suites: 2 queens + sofa bed each. Book 2 suites → 4 queens + 2 sofa beds.",
        pros: "Free made-to-order breakfast and evening reception. Outdoor pool and hot tub. East side, handy for Saguaro East and Sabino.",
        cons: "Parking costs extra. Pool heating not confirmed.",
        map: "Embassy Suites by Hilton Tucson East",
        link: "https://www.hilton.com/en/hotels/tuseees-embassy-suites-tucson-east/"
      },
      {
        id: "lodge-westin", name: "Westin La Paloma Resort & Spa", tag: "Resort",
        price: "$294/night lead rate × 2 rooms × 4 nights = $2,352, plus resort fee and parking ≈ <b>$2,600–2,800+</b>",
        beds: "2 connecting rooms (on request), 2 queens each.",
        pros: "3 outdoor pools, waterslide, hot tub. Catalina Foothills, within about 15 min of Sabino Canyon.",
        cons: "Resort fee conflicts ($29/day vs $50.42/night; confirm). Self-parking $21.29/night. Breakfast about $35 per person. Pool heating in December not confirmed.",
        map: "The Westin La Paloma Resort and Spa, 3800 E Sunrise Dr, Tucson AZ",
        link: "https://www.marriott.com/en-us/hotels/tuswi-the-westin-la-paloma-resort-and-spa/overview/"
      },
      {
        id: "lodge-breeze", name: "Catalina Breeze (vacation rental)", tag: "Whole house",
        price: "<b>Price not shown</b> for our dates. For reference only, similar 4-bedroom Tucson rentals averaged $323–$369/night on other dates.",
        beds: "4 bedrooms, 3.5 baths, sleeps 9: king suite, queen suite, queen room, room with 2 twins, plus an office lounger that becomes a full bed.",
        pros: "<b>“Fully heated” pool and spa</b> (no surcharge mentioned), fire pit, ping-pong. 2.6 mi to Sabino Canyon; about 30 min to Saguaro East.",
        cons: "Price, cleaning fee, taxes and cancellation all unknown until we request a quote.",
        status: "pending",
        map: "Catalina Breeze Tucson",
        link: "https://www.catalinabreezetucson.com/"
      }
    ],
    scottsdale: {
      note: "Night of Dec 29. Not chosen. Rates below are for <b>Sep 28–29, NOT Dec 29</b>.",
      options: [
        { name: "Home2 Suites Scottsdale Salt River", price: "$138 (Sep)", map: "Home2 Suites by Hilton Scottsdale Salt River" },
        { name: "Sonesta Suites Scottsdale Gainey Ranch", price: "$147 (Sep)", map: "Sonesta Suites Scottsdale Gainey Ranch" },
        { name: "Embassy Suites Scottsdale Resort", price: "$165 (Sep), likely 2 suites", map: "Embassy Suites by Hilton Scottsdale Resort" },
        { name: "Westin Kierland Villas", price: "$232 (Sep); a multi-bedroom villa might fit 6 (unverified)", map: "The Westin Kierland Villas Scottsdale" }
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
    { date: "Now", title: "Pick flight dates and flights", text: "Prices were checked Sep 27 and will change. Outbound nonstop IND → PHX still needs pricing.", status: "pending" },
    { date: "Now", title: "Pick Tucson lodging", text: "Confirm 6 people fit, pool heating, total with taxes/fees, and cancellation terms.", status: "pending" },
    { date: "Now", title: "Price a minivan / large SUV at PHX (Dec 25–30)", status: "pending" },
    { date: "ASAP", title: "Kartchner Caverns reservation (if Option A)", text: "Online or 877-MY-PARKS.", link: "https://azstateparks.com/kartchner" },
    { date: "Fri Oct 16", title: "Luminarias tickets go on sale", text: "Online only, Desert Botanical Garden, for Dec 29.", link: "https://dbg.org/events/las-noches-de-las-luminarias/2026-12-31/" },
    { date: "Days–weeks before", title: "Book Sabino Canyon tram (Dec 27)", text: "Sells out.", link: "https://sabinocanyoncrawler.com/faqs/" },
    { date: "Before trip", title: "Taliesin West tickets (if we go Dec 30)", text: "Non-refundable.", link: "https://franklloydwright.org/taliesin-west-tours/" },
    { date: "Day of", title: "Mount Lemmon road check", text: "Call 520-351-3351.", link: "tel:5203513351" },
    { date: "Dec 31 noon", title: "Must be home" }
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
    ["Taliesin West tours", "https://franklloydwright.org/taliesin-west-tours/"],
    ["Tucson December normals (NWS)", "https://www.weather.gov/twc/TucsonMonthlyNormalExtremes"],
    ["Tucson sunrise/sunset", "https://www.timeanddate.com/sun/usa/tucson?month=12&year=2026"],
    ["Google Hotels search used", "https://www.google.com/travel/search?q=Tucson%20resort%20suites%20Dec%2025%20to%20Dec%2029%202026%206%20adults"]
  ]
};
