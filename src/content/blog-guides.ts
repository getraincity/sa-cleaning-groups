import { stock } from "@/content/stock-photos";
import type { Post } from "@/content/blog";

/**
 * Guides written for search (see docs/seo/blog-notes.md). Newest first; blog.ts puts these
 * ahead of the older posts. Copy was written by us, so it is flagged for client review.
 * Rules: prices only from src/content/pricing.ts, BC rules only where an official source
 * was read (each such post ends with a Sources block), and no numbers we cannot back up.
 */
export const guidePosts: Post[] = [
  {
    slug: "house-cleaning-cost-vancouver",
    title: "How Much Does House Cleaning Cost in Vancouver? (2026 Guide)",
    excerpt:
      "What decides the price of a house clean in Greater Vancouver, how monthly plans and hourly cleaning compare, our own prices, and the questions to ask before you book.",
    category: "Home Cleaning",
    date: "2026-11-03",
    image: stock.blogCost,
    imageAlt: stock.blogCost.alt,
    body: [
      {
        type: "p",
        text: "If you've searched for house cleaning prices in Vancouver, BC, you've probably noticed that most companies won't give a number until you've answered a list of questions. That's not a trick. The honest price of a clean depends on your home. This guide explains what moves the price, how the main pricing styles work, and what S&A Cleaning Group charges.",
      },
      { type: "h2", text: "How much does house cleaning cost in Vancouver?" },
      {
        type: "p",
        text: "With S&A Cleaning Group, monthly plans are Silver at $150, Gold at $235 and Diamond at $280 per month, and hourly cleaning starts from $130+ with a 3-hour minimum. Your final price depends on the size and condition of your home and how deep you want each visit to go, so we confirm it before you book.",
      },
      {
        type: "table",
        caption: "S&A home cleaning prices",
        columns: ["Option", "Price", "Best for"],
        rows: [
          [
            "Silver plan",
            "$150 per month",
            "Keeping a tidy home fresh: floors, kitchen, bathrooms, dusting",
          ],
          [
            "Gold plan",
            "$235 per month",
            "Everything in Silver, plus baseboards, doors, light switches and window ledges",
          ],
          [
            "Diamond plan",
            "$280 per month",
            "Everything in Gold, plus inside cabinets, walls, interior windows, oven, fridge and microwave",
          ],
          [
            "Hourly cleaning",
            "From $130+, 3-hour minimum",
            "Directing the work yourself, or a one-off clean",
          ],
        ],
      },
      {
        type: "p",
        text: "These are the same prices you'll see on our [home cleaning](/home-cleaning) page. If anything on that page and this one ever disagree, the page is the one to trust.",
      },
      { type: "h2", text: "What affects the price of a house clean?" },
      {
        type: "p",
        text: "Time is the main cost in cleaning, so anything that adds time adds to the price. The biggest factors are the size of the home, how many bathrooms and kitchens it has, its current condition, and how much you want done in one visit. Pets, clutter and hard-water build-up also take longer.",
      },
      {
        type: "list",
        items: [
          "Size: a one-bedroom condo and a four-bedroom house are very different jobs",
          "Bathrooms and kitchens: these take the most scrubbing, so more of them means more time",
          "Condition: a home cleaned last week is quicker than one that hasn't been cleaned in months",
          "Depth: inside the oven and cabinets takes far longer than a surface clean",
          "Clutter: tidy surfaces clean faster than surfaces covered in belongings",
        ],
      },
      { type: "h2", text: "Is it cheaper to pay by the hour or choose a plan?" },
      {
        type: "p",
        text: "It depends on how you use us. A monthly plan suits a home that needs the same tasks done regularly, because the scope is fixed and written down. Hourly cleaning suits one-off jobs and larger homes, because you choose where the time goes. Neither is always cheaper, so compare against your own home.",
      },
      {
        type: "tip",
        title: "Compare like with like",
        text: "Every hourly booking has a 3-hour minimum, so when you compare hourly cleaning with a plan or another company, work from at least three hours rather than a single hour.",
      },
      { type: "h2", text: "What is usually included, and what costs extra?" },
      {
        type: "p",
        text: "Standard cleaning covers the everyday rooms: floors, surfaces, kitchens, bathrooms and bedrooms. Deeper tasks such as inside the oven, fridge and cabinets, walls and interior windows sit in our Diamond plan or in a deep clean. Always ask any company for the task list in writing, because that list is what you're really buying.",
      },
      {
        type: "p",
        text: "If you're deciding between a maintenance clean and a reset, our guide to [deep cleaning versus regular cleaning](/blog/deep-clean-vs-regular-clean) explains the difference, and the [deep cleaning](/deep-cleaning) page lists what a deeper visit covers.",
      },
      { type: "h2", text: "What should you ask before you book a cleaner?" },
      {
        type: "p",
        text: "Ask what's included, who is doing the work and what happens if you're not happy. A trustworthy company can answer all three plainly. Then ask whether the quote is a total or an hourly rate with a minimum, because those two can look similar and end up very different.",
      },
      {
        type: "checklist",
        title: "Questions to ask any cleaner",
        items: [
          "Is the price a fixed total, or an hourly rate? Is there a minimum?",
          "Is there a written list of tasks for each visit?",
          "Are the cleaners licensed, insured and background checked?",
          "Which products do you use, and are they suitable for pets and children?",
          "What is your policy if something is missed or damaged?",
        ],
      },
      {
        type: "p",
        text: "S&A is fully licensed and insured, every team member completes a criminal and background check before they start, and our products are eco-friendly and pet-friendly. For a longer list, read [how to choose a cleaning company in Vancouver](/blog/how-to-choose-a-cleaning-company-vancouver).",
      },
      { type: "h2", text: "Are there extra charges to watch for in a quote?" },
      {
        type: "p",
        text: "Ask whether the quote has a minimum, a fee for extra tasks or a surcharge for homes that need heavy work. Ask about supplies and equipment too. Nothing should surprise you on the day. A written quote with a task list removes most of the guesswork, and any good company will be happy to provide one.",
      },
      {
        type: "list",
        items: [
          "Is there a minimum number of hours, and does the quote reflect it?",
          "Are supplies and equipment included, or billed separately?",
          "What happens if the job takes longer than expected?",
          "Is anything you care about, such as inside the fridge, excluded?",
        ],
      },
      { type: "h2", text: "How does a one-off clean compare with regular cleaning?" },
      {
        type: "p",
        text: "A one-off clean is a bigger job per visit, because the home starts from wherever it was left. Regular cleaning is a smaller job each time, because the team is maintaining rather than resetting. If you plan to keep the home clean, a plan or a repeat booking usually makes more sense than a string of one-offs.",
      },
      {
        type: "p",
        text: "One-off cleans still have their place: before guests arrive, after a party, or when you're moving. For those, hourly cleaning lets you decide what gets done, and the 3-hour minimum is enough for many homes to cover the priority rooms.",
      },
      { type: "h2", text: "How can you keep the cost down?" },
      {
        type: "p",
        text: "The cheapest clean is the one that stays on top of things. Regular visits stop build-up, so each one is quicker. Tidying surfaces beforehand helps too, since our team can spend their time cleaning rather than moving belongings. If the home needs a reset first, start with one deeper clean and then move to a plan.",
      },
      {
        type: "list",
        items: [
          "Choose the plan that matches how you live, not the biggest one",
          "Clear counters and floors before the team arrives",
          "Tell us up front about pets, hard-water stains or problem areas",
          "Book regular visits rather than letting a home go for months",
        ],
      },
      {
        type: "p",
        text: "Want a number for your own home? [Book home cleaning](/home-cleaning) online or call us, and we'll confirm the price before anything starts.",
      },
    ],
  },
  {
    slug: "move-out-cleaning-damage-deposit-bc",
    title: "Move-Out Cleaning and Your Damage Deposit in BC",
    excerpt:
      "What BC tenants are expected to clean at the end of a tenancy, how the move-out inspection works, and when it makes sense to hire a cleaner. General information, not legal advice.",
    category: "Home Cleaning",
    date: "2026-10-30",
    image: stock.blogDepositMoveOut,
    imageAlt: stock.blogDepositMoveOut.alt,
    body: [
      {
        type: "p",
        text: "Cleaning is one of the most common reasons a tenant and landlord disagree about a damage deposit. This guide explains, in plain language, what the province says about leaving a rental clean, how the move-out inspection works, and where a cleaner can help. It's general information, not legal advice, and the rules can change, so check the sources at the end.",
      },
      { type: "h2", text: "Do you have to clean your rental when you move out in BC?" },
      {
        type: "p",
        text: "Yes. Under BC's Residential Tenancy Act, a tenant must leave the rental unit reasonably clean and undamaged, apart from reasonable wear and tear, and return all the keys. The Act doesn't say you must hire a professional cleaner. It sets a standard, and how you meet it is up to you.",
      },
      {
        type: "p",
        text: "If the unit isn't clean when you leave, the province's guidance says the tenant is responsible for the cleaning costs. That is why the condition of the unit on your last day matters.",
      },
      { type: "h2", text: 'What does "reasonably clean" mean?' },
      {
        type: "p",
        text: "The Act uses the words \"reasonably clean\" without a checklist, so it's judged case by case. In practice it means the unit is free of garbage and grime, with kitchens and bathrooms wiped down. It isn't about spotless perfection, but it should look cared for rather than left behind.",
      },
      {
        type: "list",
        items: [
          "Kitchen: the oven, fridge, stovetop, sink and cabinets wiped out",
          "Bathrooms: toilet, tub, shower, sink and mirrors cleaned",
          "Floors: swept, vacuumed and mopped",
          "Walls and doors: marks gently wiped where possible",
          "Windows and tracks: sills and tracks free of dirt and dead bugs",
          "Cupboards and closets: emptied and wiped",
        ],
      },
      {
        type: "p",
        text: "For the full room-by-room list, use our [move-out cleaning checklist for Vancouver renters](/blog/move-out-cleaning-checklist-vancouver).",
      },
      { type: "h2", text: "How does the move-out condition inspection work?" },
      {
        type: "p",
        text: "At the end of a tenancy, the landlord and tenant are expected to inspect the unit together. The landlord offers times, you walk through the unit, and both of you record its condition on the inspection report. The landlord gives you a copy. Comparing it with the move-in report shows what has changed.",
      },
      {
        type: "p",
        text: "Skipping the inspection can affect each side's rights around the deposit, so don't let it slip. Read the province's page on moving out before the day, and attend the walk-through yourself rather than leaving it to chance.",
      },
      { type: "h2", text: "How can you protect your deposit when you leave?" },
      {
        type: "p",
        text: "Clean after the movers leave, attend the inspection, and keep your own record. Photos taken on your last day, with dates, show the unit's condition if there's a disagreement later. These are practical tips rather than legal requirements, but they make any conversation about the deposit easier.",
      },
      {
        type: "checklist",
        title: "Before you hand back the keys",
        items: [
          "Clean the whole unit once it is empty",
          "Take clear, dated photos of each room, including inside the oven and fridge",
          "Ask for the move-out inspection and attend it",
          "Read the report carefully before you sign it",
          "Keep a copy of the report and your photos",
        ],
      },
      { type: "h2", text: "What should you do on moving day, step by step?" },
      {
        type: "p",
        text: "Plan the order of the day so the cleaning happens at the right moment: after the movers, before the inspection. Leaving yourself a gap between the two avoids rushing. These steps are a practical suggestion, not a legal requirement, and you can adjust them to your own move.",
      },
      {
        type: "checklist",
        title: "A simple move-out order",
        items: [
          "Finish packing and let the movers take everything out",
          "Clean from the top down: lights and cupboards first, floors last",
          "Photograph every room once it is clean and empty",
          "Walk through the move-out inspection with your landlord or their agent",
          "Return all keys, fobs and access cards, and keep a record of when you did",
        ],
      },
      { type: "h2", text: "What do people forget to clean when they move out?" },
      {
        type: "p",
        text: "The small, awkward places catch most people out: inside the oven, the tracks of sliding doors and windows, the fridge drip tray, vents, light fixtures and the inside of cupboards. A walk through each room with a flashlight before the inspection shows what is left.",
      },
      {
        type: "list",
        items: [
          "Inside the oven, fridge, freezer and dishwasher",
          "Window and patio-door tracks, and blinds",
          "Bathroom exhaust fan covers and vents",
          "Inside closets, shelves and drawers",
          "Balcony, storage locker and parking stall, if you have them",
        ],
      },
      { type: "h2", text: "What if you disagree about cleaning costs?" },
      {
        type: "p",
        text: "If you and your landlord can't agree on a cleaning charge, start by asking for the reason in writing, along with any photos or receipts. If you still disagree, the Residential Tenancy Branch runs the province's dispute resolution process. Its website explains the steps and current deadlines, which we don't repeat here because they can change.",
      },
      { type: "h2", text: "How early should you book a move-out cleaner?" },
      {
        type: "p",
        text: "Book as soon as your move date is confirmed. Popular dates can fill up, and a booked cleaner takes one job off your list while everything else is moving around. Tell the company your move-out date, your inspection time and the size of the unit, so the visit fits between the movers and the walk-through.",
      },
      {
        type: "p",
        text: "If the unit is small and mostly clean, hourly cleaning from $130+ with a 3-hour minimum lets you choose which rooms get the attention. For larger or heavily used units, we'll talk through what's needed first.",
      },
      { type: "h2", text: "When is it worth hiring a move-out cleaner?" },
      {
        type: "p",
        text: "Hire a cleaner when you're short on time, the unit is large, or you simply don't want the stress. A team works through every room from top to bottom, including inside cabinets and appliances. Many renters find a single booking cheaper than a day of their own time plus a disagreement about what was missed.",
      },
      {
        type: "p",
        text: "S&A offers [move-out cleaning](/move-out-cleaning) across Greater Vancouver, and you can also book [hourly cleaning](/home-cleaning) from $130+ with a 3-hour minimum if you'd rather direct the work. Book it for after the movers leave and before your inspection.",
      },
      {
        type: "sources",
        title: "Read the official guidance",
        items: [
          {
            label: "Moving out of rental units (Province of BC)",
            href: "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/ending-a-tenancy/moving-out-of-rental-units",
          },
          {
            label: "Residential Tenancy Act (BC Laws)",
            href: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/02078_01",
          },
          {
            label: "Inspecting the rental unit (information sheet)",
            href: "https://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/information-sheets/inspecting_the_rental_unit.pdf",
          },
          {
            label: "Residential Tenancy Policy Guideline 1: Landlord and tenant responsibilities",
            href: "https://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/policy-guidelines/gl01.pdf",
          },
        ],
      },
    ],
  },
  {
    slug: "strata-cleaning-contract-bc",
    title: "Strata Common-Area Cleaning: What to Put in the Contract",
    excerpt:
      "A practical guide for BC strata councils and managers: how to define the scope, set a schedule, ask for the right paperwork and compare quotes fairly.",
    category: "Commercial",
    date: "2026-10-26",
    image: stock.blogStrata,
    imageAlt: stock.blogStrata.alt,
    body: [
      {
        type: "p",
        text: "Hiring a cleaner for a strata's lobbies, hallways and stairwells sounds simple until the quotes arrive and no two look alike. One company counts washrooms, another doesn't mention windows. A clear scope written into the contract fixes that. This guide helps strata councils and property managers across Greater Vancouver write one.",
      },
      { type: "h2", text: "Who is responsible for cleaning strata common areas in BC?" },
      {
        type: "p",
        text: "Under BC's Strata Property Act, the strata corporation must repair and maintain common property and common assets, subject to exceptions in the Act. Cleaning is part of looking after that property, so the council usually arranges it, often through a strata manager. Bylaws can differ for limited common property, so check yours.",
      },
      {
        type: "p",
        text: "This is general information, not legal advice. If you're unsure how your bylaws divide responsibilities, ask your strata manager or a lawyer who works with strata corporations.",
      },
      { type: "h2", text: "What should the scope of work include?" },
      {
        type: "p",
        text: 'The scope should list every area, every task and how often it is done. Vague wording like "general cleaning" is where disputes begin. Name the lobby, hallways, stairwells, elevators, amenity rooms and washrooms, and describe what "cleaned" means in each, so that anyone reading the contract understands the standard.',
      },
      {
        type: "table",
        caption: "A sample scope table for a mid-size strata building",
        columns: ["Area", "Typical tasks", "How often to discuss"],
        rows: [
          [
            "Lobby and entrance",
            "Sweep and mop, wipe glass doors, wipe high-touch points",
            "Frequent, to suit foot traffic",
          ],
          [
            "Hallways and stairwells",
            "Vacuum or mop floors, dust ledges, spot-clean walls",
            "Weekly or as agreed",
          ],
          ["Elevators", "Wipe walls, buttons and handrails, clean floors", "Frequent"],
          [
            "Amenity rooms and washrooms",
            "Clean and disinfect fixtures, restock supplies, empty bins",
            "Frequent",
          ],
          ["Garbage and recycling rooms", "Sweep, wipe bins, deal with spills", "As agreed"],
        ],
      },
      {
        type: "p",
        text: "These frequencies are starting points for a conversation, not rules. Your building's size, age and traffic decide what's right, and a good provider will suggest a schedule after seeing the building.",
      },
      { type: "h2", text: "How often should common areas be cleaned?" },
      {
        type: "p",
        text: "There's no fixed rule. Busy lobbies, elevators and washrooms need attention most often, while stairwells and amenity rooms can often be done less. Pick the schedule by how much the space is used, then test it for a month. If residents notice problems between visits, increase the frequency in that area only.",
      },
      { type: "h2", text: "What paperwork should you ask a cleaning company for?" },
      {
        type: "p",
        text: "Ask for proof of liability insurance, proof of workers' compensation coverage and a clear description of how staff are screened. A strata council is entitled to ask. A professional company will provide documents without fuss, and your strata's insurer or manager may require them anyway.",
      },
      {
        type: "checklist",
        title: "Questions for every bidder",
        items: [
          "Can you provide a certificate of liability insurance?",
          "Can you show your workers' compensation coverage?",
          "How are your staff screened before they work in our building?",
          "What products do you use, and are they safe around residents and pets?",
          "Who do we call if something is missed, and how quickly will it be fixed?",
        ],
      },
      { type: "h2", text: "How do you compare quotes fairly?" },
      {
        type: "p",
        text: "Give every company the same written scope and ask for the same format back: price per visit, visits per month and what is excluded. A quote that is much lower than the others usually leaves something out. Compare what each includes line by line before comparing totals.",
      },
      {
        type: "list",
        items: [
          "Same areas, same tasks and same frequency for every bidder",
          "A fixed price for the contract term, with any extras listed separately",
          "Who supplies equipment and consumables such as paper and soap",
          "How the term can be ended by either side, and with how much notice",
          "A named contact and a simple way to report a missed task",
        ],
      },
      {
        type: "tip",
        title: "Cleaner or caretaker?",
        text: "A cleaning company cleans on a schedule. A caretaker or building manager may also handle repairs, deliveries and resident requests. Decide which you need first, because mixing the two in one contract makes quotes hard to compare.",
      },
      { type: "h2", text: "What about one-off and extra cleans?" },
      {
        type: "p",
        text: "Agree up front how extra work is requested and priced. Buildings need occasional extras: a deep clean of the lobby, a clean after repairs or a move-in rush. Writing down how these are booked, and who can approve them, stops small requests from turning into arguments about the invoice.",
      },
      {
        type: "p",
        text: "A post-repair or renovation clean in a building is a different job from routine upkeep. See our guide to [post-construction cleaning](/blog/post-construction-cleaning-guide) for what that involves.",
      },
      { type: "h2", text: "What mistakes do strata councils make in cleaning contracts?" },
      {
        type: "p",
        text: 'The most common mistake is an unclear scope, followed by no way to report problems and no review date. A contract that says only "clean common areas weekly" gives neither side a standard. Spell out the tasks, name a contact, and agree a time to review how it is going.',
      },
      {
        type: "list",
        items: [
          'Vague wording that doesn\'t say what "cleaned" means',
          "No agreed way for residents or the manager to report a missed task",
          "No review point, so a poor fit continues for the full term",
          "Choosing on price alone without comparing what is included",
          "Not saying who supplies paper, soap and other consumables",
        ],
      },
      { type: "h2", text: "How do you keep a cleaning contract working after you sign it?" },
      {
        type: "p",
        text: "Check the work on a schedule and keep notes. A short walk-through by a council member or the manager each month, with a simple log of issues, gives you facts to raise with the provider. Most problems are small and fixable when they're reported early and specifically.",
      },
      { type: "h2", text: "Can S&A clean our strata's common areas?" },
      {
        type: "p",
        text: "S&A's [custodian services](/custodian-services) cover offices, retail stores, strata common areas and more across Greater Vancouver, and we're fully licensed and insured. See our [strata cleaning](/strata-cleaning) page, or request a quote and we'll build a checklist around your building and plan visits around your residents.",
      },
      {
        type: "p",
        text: "Looking for a comparison? Our [office cleaning checklist](/blog/office-cleaning-checklist) shows how we divide daily, weekly and monthly tasks, and the same approach works for shared building spaces.",
      },
      {
        type: "sources",
        title: "Read the official guidance",
        items: [
          {
            label: "Strata repairs and maintenance (Province of BC)",
            href: "https://www2.gov.bc.ca/gov/content/housing-tenancy/strata-housing/operating-a-strata/repairs-and-maintenance",
          },
          {
            label: "Strata Property Act (BC Laws)",
            href: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/98043_00_multi",
          },
        ],
      },
    ],
  },
  {
    slug: "airbnb-turnover-cleaning-checklist-vancouver",
    title: "Airbnb Turnover Cleaning Checklist for Vancouver Hosts",
    excerpt:
      "A room-by-room checklist for the gap between check-out and check-in, plus how to schedule cleans around bookings and what to check before you host.",
    category: "Home Cleaning",
    date: "2026-10-22",
    image: stock.blogAirbnb,
    imageAlt: stock.blogAirbnb.alt,
    body: [
      {
        type: "p",
        text: "A short-term rental lives and dies by its reviews, and reviews live and die by cleanliness. A turnover clean is different from a regular house clean because the clock is tight and the standard has to be the same every single time. This checklist is for hosts in Vancouver and the rest of Greater Vancouver.",
      },
      { type: "h2", text: "What is a turnover clean?" },
      {
        type: "p",
        text: "A turnover clean is the reset between one guest leaving and the next arriving. The goal is to return the space to the same guest-ready condition every time: surfaces wiped, bathrooms disinfected, bed made with fresh linen, floors clean and supplies restocked. Speed matters, but consistency matters more.",
      },
      { type: "h2", text: "What should a turnover checklist include?" },
      {
        type: "p",
        text: "Work in the same order every time so nothing is missed. Start by checking for damage or left-behind items, then strip beds, clean from top to bottom and finish with floors. Writing the checklist down lets anyone on your team, or a cleaner you hire, repeat the same standard.",
      },
      {
        type: "checklist",
        title: "Kitchen",
        items: [
          "Empty the fridge, freezer and cupboards of anything guests left",
          "Wipe counters, stovetop, sink and taps",
          "Wipe the outside of appliances and the inside of the microwave",
          "Run or unload the dishwasher and put everything away",
          "Empty bins and fit fresh bags",
        ],
      },
      {
        type: "checklist",
        title: "Bathrooms",
        items: [
          "Disinfect the toilet, sink, tub or shower and taps",
          "Wipe mirrors and chrome until streak-free",
          "Replace towels, bath mat and toilet paper",
          "Check drains for hair",
          "Mop the floor",
        ],
      },
      {
        type: "checklist",
        title: "Bedrooms and living areas",
        items: [
          "Strip the bed and remake it with fresh linen",
          "Check under beds, behind curtains and inside drawers for left-behind items",
          "Dust surfaces and wipe remotes, light switches and door handles",
          "Vacuum the floors and sofas, then mop hard floors",
          "Open the windows briefly to air the space",
        ],
      },
      { type: "h2", text: "How do you manage linen and restocking?" },
      {
        type: "p",
        text: "Keep at least two full sets of linen and towels per bed so a clean set is always ready, and keep consumables in one labelled place. Check stock at every turnover and make a note when something runs low. Reordering mid-week is much easier than discovering an empty shelf on check-in day.",
      },
      {
        type: "list",
        items: [
          "Two or more sets of sheets and towels per bed or guest",
          "Spare toilet paper, soap, dish soap and bin liners",
          "A place for guest supplies such as coffee and tea",
          "A short list of what to restock, kept in the unit",
        ],
      },
      { type: "h2", text: "Why take photos at every turnover?" },
      {
        type: "p",
        text: "Photos show the condition of the space at the end of a clean and before a guest arrives. If something is later reported as dirty or damaged, dated photos make the conversation with a guest or the platform quicker and calmer. A few seconds per room is enough.",
      },
      {
        type: "tip",
        title: "Note damage before you clean",
        text: "Check for breakages, stains and missing items before you start cleaning, and photograph anything you find. Cleaning over a problem can hide it, and the sooner you report it, the easier it is to resolve.",
      },
      { type: "h2", text: "How do you schedule cleans around bookings?" },
      {
        type: "p",
        text: "Match your cleaner's availability to your calendar, not the other way round. Block a cleaning window on every check-out day, allow extra time on same-day turnovers and agree how the cleaner learns about new bookings. A shared calendar and a short message at each check-out keep everyone on the same page.",
      },
      { type: "h2", text: "How long does a turnover clean take?" },
      {
        type: "p",
        text: "It depends on the size of the unit, the number of guests, how it was left and how much linen there is. Rather than guess, time a few turnovers and add a buffer. Same-day check-ins leave less margin, so give your cleaner as much notice as you can and allow extra time for the unexpected.",
      },
      { type: "h2", text: "Should you clean yourself or hire help?" },
      {
        type: "p",
        text: "Cleaning yourself saves money but costs time, and it's hard to keep up when bookings stack close together or you're away. Hiring help gives you a consistent standard and frees your calendar. Many hosts start themselves and hire once the number of bookings makes the schedule hard to manage.",
      },
      {
        type: "list",
        items: [
          "Hire if you often have same-day turnovers",
          "Hire if you live outside the city or travel a lot",
          "Hire if reviews are starting to mention cleanliness",
          "Clean yourself if bookings are few and your schedule is flexible",
        ],
      },
      { type: "h2", text: "What should a turnover supply kit hold?" },
      {
        type: "p",
        text: "Keep one kit in the unit so nothing depends on someone remembering to bring it. Store it out of guests' way, label it and check it at each turnover. A well-stocked kit speeds up every clean, because nobody has to hunt for a cloth or a bin bag halfway through.",
      },
      {
        type: "list",
        items: [
          "Microfibre cloths in separate colours for kitchen and bathroom",
          "A multi-surface cleaner and a bathroom disinfectant",
          "A vacuum, mop and broom, with spare mop heads",
          "Bin liners, toilet paper and hand soap",
          "A small bag for left-behind items, with a note of where each was found",
        ],
      },
      { type: "h2", text: "What mistakes do hosts make at turnover?" },
      {
        type: "p",
        text: "Rushing the bathroom, forgetting to check under beds and behind curtains, and leaving stock to run out are the usual ones. Hair in the shower drain and dust on the tops of surfaces are what guests notice first. A fixed order and a written checklist prevent most of them.",
      },
      { type: "h2", text: "What do hosts need to know before they start?" },
      {
        type: "p",
        text: "BC has a provincial short-term rental registry, and hosts are required to register. Cities can have their own licence rules as well. These rules change, so check the province's page and your municipality before you list, and don't rely on this article for the details. We clean; we don't advise on licensing.",
      },
      {
        type: "p",
        text: "Once the basics are in place, the cleaning is the part you can hand over. See our [Airbnb cleaning](/airbnb-cleaning) page, or if the property needs a one-time reset before you start hosting, a [deep clean](/deep-cleaning) gets it to a consistent standard first. Hourly cleaning starts from $130+ with a 3-hour minimum.",
      },
      {
        type: "sources",
        title: "Read the official guidance",
        items: [
          {
            label: "Register as a short-term rental host (Province of BC)",
            href: "https://www2.gov.bc.ca/gov/content/housing-tenancy/short-term-rentals/registry/host-registration",
          },
        ],
      },
    ],
  },
  {
    slug: "deep-cleaning-cost-vancouver",
    title: "How Much Does a Deep Clean Cost in Vancouver?",
    excerpt:
      "What a deep clean covers, what sets the price, how it compares with a regular clean and how to get a fair quote for your home.",
    category: "Home Cleaning",
    date: "2026-10-19",
    image: stock.blogDeepCost,
    imageAlt: stock.blogDeepCost.alt,
    body: [
      {
        type: "p",
        text: "A deep clean is the most variable job a cleaning company does. A tidy two-bedroom condo and a house that hasn't been scrubbed in years can both be \"a deep clean\" and take completely different amounts of time. That's why honest quotes depend on the home. Here's how the price is built, and how to get a fair one.",
      },
      { type: "h2", text: "How much does a deep clean cost in Vancouver?" },
      {
        type: "p",
        text: "There's no single honest price, because time is the cost. S&A's hourly cleaning starts from $130+ with a 3-hour minimum, and our Diamond plan at $280 per month includes the deeper tasks. A larger or dirtier home takes longer, so we confirm the price for your home before we start.",
      },
      {
        type: "p",
        text: "We don't publish a \"typical\" Vancouver deep-clean price, because we haven't been able to verify one, and made-up averages don't help you. Treat any figure that comes without a task list or a property size with caution.",
      },
      { type: "h2", text: "What does a deep clean include?" },
      {
        type: "p",
        text: "A deep clean goes beyond the surface into the places that collect grime slowly: baseboards, doors and light switches, inside cabinets and drawers, the oven, fridge and microwave, the range hood, walls and interior windows, plus detailed scrubbing of tubs, tiles and fixtures. It takes longer than a regular clean because every area gets more attention.",
      },
      {
        type: "table",
        caption: "Regular clean or deep clean?",
        columns: ["", "Regular clean", "Deep clean"],
        rows: [
          ["Goal", "Keep a clean home fresh", "Reset a home to a high standard"],
          ["Surfaces", "Wiped and dusted", "Wiped, dusted and detailed"],
          ["Appliances", "Outsides wiped", "Inside oven, fridge and microwave"],
          ["Cabinets", "Outsides wiped", "Insides cleaned as well"],
          ["Bathrooms", "Cleaned and disinfected", "Tubs, tiles and fixtures scrubbed in detail"],
          ["Time", "Shorter", "Longer"],
        ],
      },
      {
        type: "p",
        text: "For a longer comparison, read [deep clean vs. regular clean](/blog/deep-clean-vs-regular-clean), or see the [deep cleaning](/deep-cleaning) page for the full list of tasks.",
      },
      { type: "h2", text: "What makes a deep clean cost more or less?" },
      {
        type: "p",
        text: "Size, condition and access make the biggest difference. A bigger home has more to clean, a home that hasn't been cleaned in months has more build-up to remove, and tight access or heavy clutter slows the team down. Extra tasks like inside windows or walls also add time.",
      },
      {
        type: "list",
        items: [
          "Size and number of bathrooms and bedrooms",
          "How long since the last thorough clean",
          "Pets, grease in the kitchen and hard-water marks",
          "Whether the home is empty or furnished",
          "Extra areas, such as a balcony or a storage space",
        ],
      },
      { type: "h2", text: "Is it worth paying for a deep clean?" },
      {
        type: "p",
        text: "It's worth it when the home needs a reset. A deep clean makes later maintenance visits quicker and easier, because regular cleaning can then keep the home in shape rather than fight build-up. It's also a sensible starting point with a new cleaning company, and before or after a move, a party or the holidays.",
      },
      {
        type: "tip",
        title: "Start deep, then stay regular",
        text: "For most homes, one deep clean followed by regular visits is the most cost-effective approach. Doing deep cleans only occasionally keeps you in a cycle of big, expensive resets.",
      },
      { type: "h2", text: "What can a deep clean not fix?" },
      {
        type: "p",
        text: "A deep clean removes dirt and build-up. It can't repair damaged surfaces, remove permanent stains or fix problems that come from leaks. Worn grout, chipped tubs and etched stone may look better but won't look new. A good team tells you honestly what to expect, before the work starts.",
      },
      {
        type: "p",
        text: "If you have a particular worry, such as a stained surface or an old appliance, mention it when you book. We'll let you know what's realistic, so there are no surprises when the clean is done.",
      },
      { type: "h2", text: "How often do you need a deep clean?" },
      {
        type: "p",
        text: "Many households book a deep clean once or twice a year, plus when something changes: a move, a renovation, a new baby or a new cleaning company. If your home is on a regular plan that includes deeper tasks, you may need fewer. There's no rule, so use the state of your home as the guide.",
      },
      { type: "h2", text: "How do you prepare for a deep clean?" },
      {
        type: "p",
        text: "Preparing well lets the team spend their time cleaning. Clear surfaces, put away personal items and tell us about anything delicate. If you're booking the oven, fridge or cabinets, empty them first where you can. Mention pets so we can plan around them.",
      },
      {
        type: "checklist",
        title: "Before the team arrives",
        items: [
          "Clear counters, floors and bathroom surfaces",
          "Put away valuables and anything fragile",
          "Empty the fridge, freezer and cupboards if they are being cleaned",
          "Tell us about pets, allergies and surfaces that need special care",
          "Make sure the team can get into the home and any parking or building access is arranged",
        ],
      },
      { type: "h2", text: "Should you do it yourself?" },
      {
        type: "p",
        text: "You can, if you have the time and the tools. Plan a full weekend for a typical home, because ovens, fridges and bathrooms take longer than you expect. If you'd rather spend the time elsewhere, a team will be quicker, and our hourly option lets you decide which rooms get the most attention.",
      },
      { type: "h2", text: "How do you get a fair quote?" },
      {
        type: "p",
        text: "Tell the company your home's size, how long since it was last cleaned, and what matters most to you. Ask for a written task list and for the quote as a total or as an hourly rate with a minimum. Then compare quotes by what they include, not only by price.",
      },
      {
        type: "p",
        text: "For a rough idea of how our prices fit together, see [how much house cleaning costs in Vancouver](/blog/house-cleaning-cost-vancouver). When you're ready, [book home cleaning](/home-cleaning) or call us and we'll talk you through it.",
      },
    ],
  },
  {
    slug: "prevent-mould-damp-vancouver-winter",
    title: "Preventing Mould and Damp in a Vancouver Winter: A Cleaning Routine",
    excerpt:
      "Wet autumns and winters make Greater Vancouver homes damp. A simple weekly routine, based on Health Canada's guidance, helps stop moisture problems before they start.",
    category: "Home Cleaning",
    date: "2026-10-15",
    image: stock.blogDamp,
    imageAlt: stock.blogDamp.alt,
    body: [
      {
        type: "p",
        text: "Greater Vancouver's rainy season sends many people indoors with wet coats, damp laundry and closed windows, and that's when condensation and mould show up. Cleaning helps, but it's only half the answer. Health Canada's advice is to control moisture first. Here's a routine that follows it, plus where cleaning stops and a professional is needed.",
      },
      { type: "h2", text: "Why do Vancouver homes get damp in winter?" },
      {
        type: "p",
        text: "Cool, wet weather means windows stay shut, moisture from showers, cooking and drying laundry has nowhere to go, and it settles on cold surfaces like window glass and exterior walls. Mould grows where moisture lingers, so condensation on windows and in bathrooms is the warning sign to act on.",
      },
      { type: "h2", text: "What humidity level should you aim for?" },
      {
        type: "p",
        text: "Health Canada advises keeping indoor relative humidity roughly between 30% and 50%, and lower in cold weather to avoid condensation on windows and walls. A small humidity gauge costs little and tells you when to act. If it climbs, use a dehumidifier or ventilate more.",
      },
      { type: "h2", text: "What weekly routine helps prevent mould?" },
      {
        type: "p",
        text: "A short, regular routine beats an occasional big clean. Focus on the places where moisture collects: bathrooms, window sills and tracks, the kitchen, and the areas around entrances where wet shoes and coats sit. Wipe damp spots before they dry into stains.",
      },
      {
        type: "checklist",
        title: "A weekly damp-prevention routine",
        items: [
          "Wipe condensation from window glass and sills",
          "Clean window tracks so water can drain",
          "Wipe shower walls and the tub, and rinse the shower curtain",
          "Dry the bathroom floor and check around the toilet base",
          "Wash bath mats and towels regularly",
          "Check under the kitchen sink and around the fridge for leaks",
          "Wipe up wet boots and rain mats at the entrance",
        ],
      },
      { type: "h2", text: "How does ventilation help?" },
      {
        type: "p",
        text: "Ventilation removes moisture before it settles. Health Canada recommends running bathroom and kitchen exhaust fans during showers and cooking and for a while afterwards, with fans that vent to the outside. Avoid drying laundry indoors where you can, because it adds a lot of moisture to the air.",
      },
      {
        type: "tip",
        title: "Small habits, big difference",
        text: "Open a window briefly each day, even in winter, keep furniture a little way from exterior walls so air can move, and use the fan after every shower.",
      },
      { type: "h2", text: "Can you clean mould yourself?" },
      {
        type: "p",
        text: "Health Canada says small areas can be cleaned with soap and water, but mould returns unless the cause of the moisture is fixed, and painting over it doesn't kill it. Never mix cleaning products. If the area is large, keeps returning or follows a leak, speak to a professional.",
      },
      {
        type: "p",
        text: "We're a cleaning company, not a mould-remediation service, so we won't promise to remove mould that comes from a leak or building problem. We can keep the bathrooms, kitchens, windows and entrances clean so moisture and grime don't build up in the first place.",
      },
      { type: "h2", text: "Which rooms need the most attention?" },
      {
        type: "p",
        text: "Bathrooms come first, followed by the kitchen, bedrooms with windows that fog up, and the entrance where wet things come in. Basements and spaces that don't get much air deserve a regular look as well. Check these spots weekly, and you'll catch most problems while they are still small.",
      },
      {
        type: "list",
        items: [
          "Bathrooms: shower walls, grout lines, the ceiling and the fan",
          "Kitchen: under the sink, around the fridge and behind the dishwasher",
          "Bedrooms: window sills, window frames and the wall behind big furniture",
          "Entrances: mats, boot trays and the floor underneath",
          "Closets and storage: look for a musty smell or damp corners",
        ],
      },
      { type: "h2", text: "Are cleaning products safe to use in damp rooms?" },
      {
        type: "p",
        text: "Use products as the label says, ventilate while you clean and never mix products, because some combinations give off harmful fumes. Test a small hidden area first on painted or natural surfaces. If you have pets, children or sensitivities, choose gentler products. Soap and water is often enough for a small area.",
      },
      {
        type: "tip",
        title: "Dry as you go",
        text: "After you wipe a damp surface, dry it with a clean cloth. Leaving it wet gives moisture a chance to settle again, which defeats the point of cleaning.",
      },
      { type: "h2", text: "What should you do at the first sign of a damp problem?" },
      {
        type: "p",
        text: "Act quickly. Find where the moisture is coming from, dry the area, ventilate and then clean it. If you can't find the source, or the spot returns, the cause hasn't been fixed. Report leaks in a rental to your landlord promptly, and keep a note with photos of what you saw and when.",
      },
      {
        type: "checklist",
        title: "First steps",
        items: [
          "Find and stop the source of moisture if you can",
          "Dry the area, using a dehumidifier or fan if needed",
          "Clean a small area with soap and water, and dry it",
          "Photograph the problem and note the date",
          "Tell your landlord, strata or a professional if it returns",
        ],
      },
      { type: "h2", text: "When should you call a professional?" },
      {
        type: "p",
        text: "Call a professional when mould covers a large area, comes back after cleaning, smells musty with no visible cause, or follows water damage. A cleaner can't fix a leak or poor ventilation. A building professional can find the source, and then regular cleaning keeps the space in shape.",
      },
      {
        type: "list",
        items: [
          "A leak, burst pipe or flood has wet the home",
          "Mould covers a large area or keeps returning",
          "A musty smell has no obvious source",
          "Someone in the household has breathing problems and you're worried about air quality",
        ],
      },
      {
        type: "p",
        text: "For the regular cleaning that keeps the home fresh through the wet months, see our [home cleaning](/home-cleaning) plans, or book a [deep clean](/deep-cleaning) to reset the bathrooms, kitchen and window areas before winter sets in.",
      },
      {
        type: "sources",
        title: "Read the official guidance",
        items: [
          {
            label: "Mould (Health Canada)",
            href: "https://www.canada.ca/en/health-canada/services/air-quality/indoor-air-contaminants/reduce-humidity-moisture-mould.html",
          },
          {
            label: "Guide to addressing moisture and mould indoors (Health Canada)",
            href: "https://www.canada.ca/en/health-canada/services/publications/healthy-living/addressing-moisture-mould-your-home.html",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-a-cleaning-company-vancouver",
    title: "How to Choose a Cleaning Company in Vancouver: 10 Questions to Ask",
    excerpt:
      "Licensing, insurance, background checks, products, pricing and cancellations: the ten questions that separate a reliable cleaning company from a risky one, and our own answers.",
    category: "Home Cleaning",
    date: "2026-10-11",
    image: stock.blogChoose,
    imageAlt: stock.blogChoose.alt,
    body: [
      {
        type: "p",
        text: "Letting someone into your home or workplace takes trust, and trust is hard to judge from a website. The good news is that a handful of direct questions will tell you most of what you need to know. Here are ten to ask any cleaning company in Greater Vancouver, and how S&A answers them.",
      },
      { type: "h2", text: "Is the company licensed and insured?" },
      {
        type: "p",
        text: "Ask for proof, not just a promise. A licensed company with liability insurance protects you if something is damaged or someone is hurt. A reliable company will share its details readily. If it avoids the question, move on. S&A Cleaning Group is fully licensed and insured.",
      },
      { type: "h2", text: "Are staff background checked?" },
      {
        type: "p",
        text: "Whoever cleans your home has access to your belongings, so ask how staff are screened. Every S&A team member completes a criminal and background check before they start. Be wary of companies that send whoever is free that day, or can't tell you who is coming.",
      },
      { type: "h2", text: "What products do they use?" },
      {
        type: "p",
        text: "If you have children, pets or sensitivities, ask exactly what is used and whether it suits your home. We use eco-friendly, pet-friendly, hospital-grade products. You can read about the brands in our [products we trust](/products-we-trust) section, and you can tell us about any surface or allergy to avoid.",
      },
      { type: "h2", text: "How is the price set?" },
      {
        type: "p",
        text: "Ask whether the quote is a total or an hourly rate, whether there's a minimum, and what could change it. Our hourly cleaning starts from $130+ with a 3-hour minimum, and our monthly plans are listed in full. For a breakdown, read [how much house cleaning costs in Vancouver](/blog/house-cleaning-cost-vancouver).",
      },
      { type: "h2", text: "What exactly is included?" },
      {
        type: "p",
        text: "A written task list is the single best protection. It tells you what you're buying and gives you something to point to if a task is missed. Compare lists, not only prices. If a company can't send one, you can't tell what the quote covers.",
      },
      { type: "h2", text: "Who comes to your home, and will it be the same people?" },
      {
        type: "p",
        text: "Consistency matters, because familiar cleaners learn your home and your preferences. Ask how teams are assigned, whether the same people usually return and how you're told if that changes. It's a fair question, and the way a company answers shows how organised it is.",
      },
      { type: "h2", text: "What happens if something is missed or damaged?" },
      {
        type: "p",
        text: "Every company makes mistakes occasionally. What matters is the response. Ask how to report a problem, how quickly it's resolved and what the company does if something is damaged. Our service comes with a 100% satisfaction guarantee, and you can tell us straight away if something isn't right.",
      },
      { type: "h2", text: "What is the cancellation and rescheduling policy?" },
      {
        type: "p",
        text: "Life changes, so ask how much notice is needed to move or cancel a visit, and whether there's a fee. Get the answer in writing. Policies differ widely between companies, so don't assume. Ask us when you book and we'll tell you how it works for your booking.",
      },
      { type: "h2", text: "How long has the company been in business?" },
      {
        type: "p",
        text: "Experience isn't everything, but it suggests a company has weathered busy seasons, difficult jobs and plenty of different homes. S&A has been running for more than nine years, and was formerly known as Akumal Executive Cleaning. We're run by co-founders Alex and Shaida.",
      },
      { type: "h2", text: "What do other customers say?" },
      {
        type: "p",
        text: "Read reviews on independent sites such as Google, and look for how the company responds to criticism as well as praise. A few honest, specific comments are worth more than a perfect score. Be cautious of reviews that are vague, all posted on the same day or all identical.",
      },
      { type: "h2", text: "Does a bigger company mean better service?" },
      {
        type: "p",
        text: "Not necessarily. Size can bring systems and backup, but a smaller company can offer more personal attention and consistent teams. What matters is how a company answers the questions above, not how large it is. Judge each one on its answers, its paperwork and how it treats you before you've paid.",
      },
      { type: "h2", text: "What are the warning signs of a risky cleaning company?" },
      {
        type: "p",
        text: "Be cautious of a company that won't put the price or task list in writing, can't say who is coming, has no insurance to show or pressures you to decide on the spot. A price far below everyone else's is also a warning. Reliable companies are happy to answer questions and give you time.",
      },
      {
        type: "list",
        items: [
          "No written quote or task list",
          "Can't show a licence or insurance when asked",
          "Won't say how staff are screened",
          "A price far below every other quote",
          "Pressure to pay in full or decide immediately",
          "No clear way to report a problem",
        ],
      },
      {
        type: "table",
        caption: "What a good answer sounds like",
        columns: ["Question", "A good answer", "A warning sign"],
        rows: [
          [
            "Licensed and insured?",
            "Yes, and they can show proof",
            "Vague, or changes the subject",
          ],
          [
            "Staff screened?",
            "A clear process, such as a background check",
            '"Don\'t worry about it"',
          ],
          [
            "What's included?",
            "A written task list for every visit",
            '"Everything", with nothing written down',
          ],
          [
            "How is it priced?",
            "A total, or an hourly rate with the minimum stated",
            "A number with no explanation",
          ],
          ["If we're unhappy?", "A simple way to report it and a fix", "No process, or blame"],
        ],
      },
      {
        type: "checklist",
        title: "Quick checklist",
        items: [
          "Licensed and insured, with proof",
          "Staff background checked",
          "Products suited to your home",
          "Price type and minimum explained",
          "Written task list",
          "Clear process for problems",
          "Cancellation policy in writing",
        ],
      },
      {
        type: "p",
        text: "Take your time and keep the answers in writing, so you can compare companies side by side rather than from memory. A short conversation with two or three providers is usually enough to see which one is organised, open and easy to deal with. Ready to compare? See our [home cleaning](/home-cleaning) options, learn more [about S&A](/about-us), or if you're hiring for a workplace, read about our [custodian services](/custodian-services).",
      },
    ],
  },
  {
    slug: "commercial-cleaning-cost-vancouver",
    title: "Commercial Cleaning Cost in Vancouver: What Drives a Quote",
    excerpt:
      "Why two quotes for the same office can be so different, what a clear commercial cleaning quote should list, and how to compare providers fairly.",
    category: "Commercial",
    date: "2026-10-07",
    image: stock.blogCommercialCost,
    imageAlt: stock.blogCommercialCost.alt,
    body: [
      {
        type: "p",
        text: "Ask three commercial cleaners for a quote for the same office and you'll likely get three different numbers. The reason is rarely hidden fees. It's that each company has assumed a different scope. Understanding what drives the price makes quotes easier to compare. This guide covers offices, shops and shared spaces in Greater Vancouver.",
      },
      { type: "h2", text: "How much does commercial cleaning cost in Vancouver?" },
      {
        type: "p",
        text: "It depends on the space, so we don't publish a flat rate, and we haven't found a reliable local average. Price follows the size of the space, how often it's cleaned, the tasks involved and the hours worked. We provide a written quote for your space, built around a checklist you can read.",
      },
      { type: "h2", text: "What factors set the price?" },
      {
        type: "p",
        text: "Most commercial quotes come down to time, and time depends on a few things. Larger floor areas take longer, more washrooms take longer, and busy spaces need more frequent attention. Specialised work such as floor care or glass adds to the scope, and the hours you need can affect the price.",
      },
      {
        type: "table",
        caption: "What drives a commercial cleaning quote",
        columns: ["Factor", "Why it matters"],
        rows: [
          ["Floor area", "More space means more time to vacuum, mop and wipe"],
          [
            "Washrooms",
            "These need detailed disinfecting and restocking, so they take the most attention",
          ],
          [
            "Frequency",
            "Daily, several times a week or weekly: regular visits keep each one shorter",
          ],
          ["Type of space", "Offices, shops and shared building spaces have different needs"],
          ["Scope", "Floors, glass, kitchens and high-touch disinfecting each add tasks"],
          ["Supplies", "Who provides paper, soap and bin liners"],
          ["Timing", "Visits when the space is empty can affect scheduling"],
        ],
      },
      { type: "h2", text: "Should you choose a contract or a one-off clean?" },
      {
        type: "p",
        text: "Choose a regular schedule when the space needs to stay clean, and a one-off when you have a specific job such as a move or a post-renovation clean. A recurring schedule keeps each visit manageable. A one-off clean is a larger reset. Many businesses start with a reset and then move to regular visits.",
      },
      {
        type: "p",
        text: "If you've finished a renovation, read about [post-construction cleaning](/post-construction-cleaning), which is quoted differently from regular upkeep.",
      },
      { type: "h2", text: "What should a commercial cleaning quote list?" },
      {
        type: "p",
        text: "A good quote lists the areas, the tasks in each area, how often each is done, the days and times of visits, who supplies what and how the agreement can be changed or ended. If a quote is only a number, you have no way to tell what it covers or to hold anyone to it.",
      },
      {
        type: "checklist",
        title: "A clear quote includes",
        items: [
          "Every area covered, and any that are excluded",
          "Daily, weekly and monthly tasks in writing",
          "Visit days and times",
          "Who supplies paper, soap and bin liners",
          "Insurance details and how staff are screened",
          "How to report a problem, and how quickly it's fixed",
          "How either side can change or end the agreement",
        ],
      },
      { type: "h2", text: "How do you compare providers fairly?" },
      {
        type: "p",
        text: "Send each provider the same written brief: the address, floor area, number of washrooms, how often you need visits and any special areas. Then compare what each includes before comparing the totals. A quote that's far cheaper than the others has usually left something out.",
      },
      {
        type: "list",
        items: [
          "Walk through the space with each company that quotes",
          "Ask for the same format from every provider",
          "Check insurance and staff screening, not just the price",
          "Ask how problems are handled between visits",
          "Start with a trial period if you can",
        ],
      },
      {
        type: "tip",
        title: "Make your cleaners' time count",
        text: "Clear desks and tidy surfaces let the team spend their hours cleaning rather than moving things. It also keeps paperwork safe, and it's a simple way to get better results for the same price.",
      },
      { type: "h2", text: "What should you tell a provider on the first call?" },
      {
        type: "p",
        text: "Tell them the address, the floor area, the number of washrooms, how many people use the space and how often you want visits. Mention any areas that need special care and the hours the space is empty. The more you share, the closer the first quote will be to the final one.",
      },
      {
        type: "checklist",
        title: "Have this ready",
        items: [
          "Address and approximate floor area",
          "Number of washrooms and kitchens or break rooms",
          "How many people use the space each day",
          "Visits per week and preferred days and times",
          "Flooring types and anything delicate",
          "Whether you need supplies such as paper and soap included",
        ],
      },
      { type: "h2", text: "Does a longer contract mean a lower price?" },
      {
        type: "p",
        text: "It might, but not always, so ask. Some providers adjust terms for a longer commitment. Weigh any saving against flexibility: you want a way to change the scope or end the agreement if the service isn't right. A trial period is a good way to test a provider before you commit.",
      },
      { type: "h2", text: "How does commercial cleaning go wrong?" },
      {
        type: "p",
        text: "It usually goes wrong through unclear scope, not bad intent. The cleaner assumes one thing, the client expects another, and nobody wrote it down. A written checklist, a named contact and a short review after the first month fix most of it. Raise problems quickly and specifically so they can be solved.",
      },
      { type: "h2", text: "How does S&A quote commercial cleaning?" },
      {
        type: "p",
        text: "We look at your space and build a checklist around it, then plan visits around your business hours. S&A is fully licensed and insured, and every team member completes a criminal and background check. See [custodian services](/custodian-services) or [office cleaning](/office-cleaning), or read our [office cleaning checklist](/blog/office-cleaning-checklist) to see how we divide the work.",
      },
      {
        type: "p",
        text: "Every space is different, so treat any quote as a starting point for a conversation about your building and your needs rather than a final answer. Managing a strata building? Read what to put in a [strata cleaning contract](/blog/strata-cleaning-contract-bc), or visit our [strata cleaning](/strata-cleaning) page.",
      },
    ],
  },
];
