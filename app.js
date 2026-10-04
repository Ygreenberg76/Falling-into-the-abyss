const events = [
  {
    year:-1800, depth:40, title:"Jacob is given the name Israel", location:"Canaan / Biblical tradition",
    story:"According to Genesis, Jacob (Yaakov), son of Isaac and grandson of Abraham, is given the name Israel (Yisrael). His descendants are subsequently known as Bnei Yisrael — the Children of Israel. The biblical text is the source for this account; there is no independently established historical date for Jacob, so the date shown here is an approximate traditional-era placement rather than an archaeological date.",
    context:"This is the narrative starting point of the website, not the first independently attested historical event. The site distinguishes biblical tradition from later extra-biblical and archaeological evidence.",
    aftermath:"The name Israel becomes central to the biblical identity of Jacob's descendants and the traditions of the Twelve Tribes of Israel.",
    stats:{Type:"Biblical tradition / origin narrative",Evidence:"Biblical text; date historically uncertain"},
    sourceStatus:"Traditional biblical account — not independently dated",
    sources:[{label:"Genesis 32 — Jacob renamed Israel",url:"https://www.sefaria.org/Genesis.32.29?lang=bi"}]
  },
  {
    year:-1750, depth:75, title:"Bnei Yisrael — the Children of Israel", location:"Biblical tradition",
    story:"In the biblical narrative, the descendants of Jacob/Israel become known as Bnei Yisrael, the Children of Israel. The Twelve Tribes are traditionally traced to Jacob's sons and family. This entry establishes the meaning of the name before the timeline reaches independently attested references to Israel.",
    context:"This is a traditional genealogical and identity framework preserved in the Hebrew Bible. It should not be confused with archaeological proof of a single historical family from which every later Israelite descended.",
    aftermath:"The term Children of Israel becomes a recurring collective designation throughout the Torah and later biblical literature.",
    stats:{Type:"Biblical tradition / peoplehood",Evidence:"Biblical text; historical reconstruction uncertain"},
    sourceStatus:"Traditional biblical account",
    sources:[{label:"Genesis — Jacob and the Children of Israel",url:"https://www.sefaria.org/Genesis.35.10?lang=bi"}]
  },
  {
    year:-1650, depth:92, title:"Israel's family goes down to Egypt", location:"Egypt / Biblical tradition",
    story:"Genesis describes Jacob/Israel and his household moving to Egypt during a famine, where Joseph had risen to authority. This is part of the biblical origin narrative of Bnei Yisrael; no independent Egyptian record has been securely identified as documenting Jacob or Joseph.",
    context:"This entry is included because it is fundamental to the traditional story that leads to the Exodus. Its placement is approximate and should not be read as an established archaeological date.",
    aftermath:"The biblical narrative later describes the descendants of Israel becoming numerous in Egypt and being subjected to forced labor.",
    stats:{Type:"Biblical tradition / migration",Evidence:"Biblical text; independently unverified"},
    sourceStatus:"Traditional biblical account — date historically uncertain",
    sources:[{label:"Genesis 46 — Israel goes to Egypt",url:"https://www.sefaria.org/Genesis.46?lang=bi"}]
  },
  {
    year:-1300, depth:108, title:"Enslavement of Bnei Yisrael in Egypt", location:"Egypt / Biblical tradition",
    story:"The book of Exodus describes a new pharaoh enslaving the Children of Israel and imposing forced labor upon them. The account is foundational to Jewish history and identity, but historians have not found independent evidence establishing the biblical enslavement on the scale or in the form described.",
    context:"The site presents this as biblical tradition rather than a securely dated Egyptian historical event. Ancient Egypt did use forced labor and enslaved populations, but that fact alone does not independently verify the Exodus narrative.",
    aftermath:"In the biblical account, oppression leads to Moses' leadership and the departure of Bnei Yisrael from Egypt.",
    stats:{Type:"Biblical tradition / persecution and forced labor",Evidence:"Biblical text; historical scale and chronology uncertain"},
    sourceStatus:"Traditional biblical account",
    sources:[{label:"Exodus 1 — oppression of the Children of Israel",url:"https://www.sefaria.org/Exodus.1?lang=bi"}]
  },
  {
    year:-1250, depth:120, title:"The Exodus from Egypt", location:"Egypt → Sinai / Biblical tradition",
    story:"According to the Torah, Moses leads Bnei Yisrael out of slavery in Egypt. The Exodus becomes one of the central narratives of Jewish identity and religious memory. Scholars continue to debate whether the story preserves memories of smaller historical movements or events, but the biblical Exodus as narrated has not been independently established archaeologically.",
    context:"This marker deliberately separates religious and cultural tradition from independently attested history. The date is an approximate traditional-era placement, not a proven date.",
    aftermath:"The biblical narrative continues with the wilderness journey, covenant at Sinai, and the development of Israel as a people bound by a shared law and tradition.",
    stats:{Type:"Biblical tradition / liberation narrative",Evidence:"Biblical text; historicity and chronology debated"},
    sourceStatus:"Traditional biblical account — not independently established at the narrated scale",
    sources:[{label:"Exodus — departure from Egypt",url:"https://www.sefaria.org/Exodus.12?lang=bi"}]
  },
  {
    year:-1240, depth:130, title:"Amalek attacks Bnei Yisrael", location:"Rephidim / Biblical tradition",
    story:"Exodus describes Amalek attacking the Israelites at Rephidim during the wilderness journey. Later biblical texts make Amalek a recurring enemy in Israelite memory. There is no independent contemporary evidence that securely identifies this particular battle.",
    context:"Because this is an account of armed conflict involving Bnei Yisrael, it belongs in the project's traditional-history section, but it is explicitly labeled as a biblical narrative rather than independently verified history.",
    aftermath:"The conflict becomes an enduring motif in biblical and later Jewish memory.",
    stats:{Type:"Biblical tradition / battle",Evidence:"Biblical text; independently unverified"},
    sourceStatus:"Traditional biblical account",
    sources:[{label:"Exodus 17 — battle with Amalek",url:"https://www.sefaria.org/Exodus.17?lang=bi"}]
  },
  {
    year:-1230, depth:140, title:"Joshua and warfare in Canaan", location:"Canaan / Biblical tradition",
    story:"The book of Joshua describes Israelite campaigns against Canaanite cities after the wilderness period. Archaeology shows that Canaan underwent major political and social changes around the end of the Late Bronze Age, but it does not support a simple reconstruction in which every city in Joshua fell in one unified conquest exactly as narrated.",
    context:"Some sites named in Joshua experienced destruction in the relevant broad period, while others present different archaeological histories. Hazor, for example, was destroyed in the 13th century BCE, but the identity of those responsible remains debated.",
    aftermath:"Biblical tradition presents the campaigns as leading into settlement by the tribes of Israel; historical reconstruction instead points to a complex emergence of early Israel within Canaan.",
    stats:{Type:"Biblical tradition / conquest narratives",Evidence:"Mixed: biblical narrative plus archaeological evidence for regional upheaval; specific campaigns disputed"},
    sourceStatus:"Traditional narrative with partial archaeological context — details debated",
    sources:[{label:"Joshua — Canaan campaigns",url:"https://www.sefaria.org/Joshua.11?lang=bi"},{label:"Hazor archaeological context",url:"https://www.bibleodyssey.org/map-gallery/hazor-map"}]
  },
  {
    year:-1208, depth:150, title:"Merneptah Stele: earliest extra-biblical reference to Israel", location:"Canaan",
    story:"An Egyptian royal victory inscription dating to about 1208 BCE contains the earliest widely accepted non-biblical reference to a people called Israel. Merneptah claims that this group was defeated during his campaign in Canaan. The Egyptian writing identifies Israel as a people rather than a city, territory, kingdom, or state.",
    context:"This marker is the site's transition from the traditional biblical narrative to independently attested evidence. It shows that a population known as Israel existed in Canaan by about 1208 BCE; it does not show that the later Kingdom of Israel already existed. The pharaoh's statement is an Egyptian royal victory claim, not proof that the people Israel were destroyed.",
    aftermath:"Later Iron Age evidence documents Israel and Judah as political kingdoms. Their precise development from earlier highland populations remains a subject of historical and archaeological research.",
    stats:{Type:"Egyptian campaign / earliest external Israel reference",Evidence:"Very high for inscription; interpretation of early Israel's organization remains debated"},
    sourceStatus:"Contemporary Egyptian inscription — earliest widely accepted extra-biblical Israel reference",
    sources:[{label:"Merneptah Stele — historical reference",url:"https://www.britannica.com/topic/Merneptah-Stele"}]
  },
  {
    year:-925, depth:230, title:"Shoshenq I campaign in the southern Levant", location:"Judah / Israel / southern Levant",
    story:"Egyptian Pharaoh Shoshenq I campaigned in the Levant in the 10th century BCE. Egyptian inscriptions provide an external anchor for warfare affecting settlements associated with early Israel and Judah; the relationship to the biblical Shishak narrative is debated in detail.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Egyptian military campaign",Evidence:"High for campaign; reconstruction of targets debated"},
    sourceStatus:"High for campaign; reconstruction of targets debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Sheshonk-I"}]
  },
  {
    year:-840, depth:300, title:"Mesha's revolt against Israel", location:"Moab / Kingdom of Israel",
    story:"The Moabite king Mesha recorded the recovery of territories from Israel in a royal inscription. The Mesha Stele is an unusually important contemporary non-biblical source for conflict between Moab and the Kingdom of Israel.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"War / revolt",Evidence:"Very high for core conflict"},
    sourceStatus:"Very high for core conflict",
    sources:[{label:"Source / further reading",url:"https://collections.louvre.fr/ark:/53355/cl010120339"}]
  },
  {
    year:-722, depth:370, title:"Assyrian conquest of Samaria", location:"Samaria / Kingdom of Israel",
    story:"Assyria conquered Samaria and ended the northern Kingdom of Israel; deportations and resettlement followed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Conquest / deportation",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.metmuseum.org/exhibitions/listings/2014/assyria-to-iberia/blog/posts/phoenicia-and-the-bible"}]
  },
  {
    year:-701, depth:520, title:"Assyrian invasion of Judah and fall of Lachish", location:"Kingdom of Judah",
    story:"Sennacherib's forces devastated Judah and captured Lachish; Jerusalem survived the campaign.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Invasion / siege",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.metmuseum.org/exhibitions/listings/2014/assyria-to-iberia/blog/posts/sennacherib-and-jerusalem"}]
  },
  {
    year:-587, depth:900, title:"Babylonian destruction of Jerusalem and First Temple", location:"Jerusalem / Judah",
    story:"Babylonian forces captured Jerusalem, destroyed the First Temple and ended the Kingdom of Judah.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Conquest / destruction / exile",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Babylonian-Captivity"}]
  },
  {
    year:-167, depth:1220, title:"Maccabean Revolt", location:"Judaea",
    story:"A Jewish revolt broke out against Seleucid rule amid Antiochus IV's coercive policies and conflict within Judaean society.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Revolt / religious persecution",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Maccabean-Revolt"}]
  },
  {
    year:-63, depth:1400, title:"Pompey's siege and capture of Jerusalem", location:"Jerusalem",
    story:"Roman general Pompey intervened in a Hasmonean civil war, besieged Jerusalem and brought Judaea into Rome's sphere.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Siege / Roman intervention",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Pompey-the-Great"}]
  },
  {
    year:66, depth:1600, title:"First Jewish–Roman War", location:"Roman Judaea",
    story:"A major Jewish revolt against Roman rule began in 66 CE and was crushed over several years.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"War / revolt",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/First-Jewish-Revolt"}]
  },
  {
    year:70, depth:1810, title:"Destruction of Jerusalem and Second Temple", location:"Jerusalem",
    story:"Roman forces under Titus captured Jerusalem and destroyed the Second Temple. Ancient casualty totals are disputed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Siege / destruction",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Siege-of-Jerusalem-70"}]
  },
  {
    year:115, depth:2050, title:"Kitos War / Diaspora Revolt", location:"Eastern Roman Empire",
    story:"Jewish revolts erupted in several eastern Roman provinces during Trajan's reign and were violently suppressed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Revolt / suppression",Evidence:"High; casualty totals uncertain"},
    sourceStatus:"High; casualty totals uncertain",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/Judaism/The-Roman-period-63-bce-135-ce"}]
  },
  {
    year:132, depth:2280, title:"Bar Kokhba Revolt", location:"Judaea",
    story:"Bar Kokhba led a major Jewish revolt against Rome. Roman suppression devastated Judaea; ancient casualty figures require caution.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"War / revolt / devastation",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Bar-Kokhba-Revolt"}]
  },
  {
    year:614, depth:2860, title:"Sasanian capture of Jerusalem", location:"Jerusalem, Byzantine Palestine",
    story:"Sasanian Persian forces captured Jerusalem during the Byzantine–Sasanian war. Jewish groups participated on the Persian side; Christian inhabitants suffered extensive violence. Later accounts differ substantially on casualty numbers and the roles of participants.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Siege / conquest / communal violence",Evidence:"Core conquest high; massacre details and numbers disputed"},
    sourceStatus:"Core conquest high; massacre details and numbers disputed",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Jerusalem/Roman-rule"}]
  },
  {
    year:624, depth:3120, title:"Banu Qaynuqa conflict", location:"Medina",
    story:"Early Islamic literary traditions describe a conflict between Muhammad's Medinan community and Banu Qaynuqa, followed by the group's expulsion.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Conflict / expulsion",Evidence:"Later literary sources; details debated"},
    sourceStatus:"Later literary sources; details debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Muhammad"}]
  },
  {
    year:625, depth:3250, title:"Banu Nadir conflict", location:"Medina",
    story:"Early Islamic sources describe Muhammad's conflict with Banu Nadir and their expulsion from Medina.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Conflict / expulsion",Evidence:"Later literary sources; details debated"},
    sourceStatus:"Later literary sources; details debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Muhammad"}]
  },
  {
    year:627, depth:3380, title:"Banu Qurayza episode", location:"Medina",
    story:"Islamic tradition describes the surrender of Banu Qurayza after the Battle of the Trench and the execution of many adult males; details and numbers are debated.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Siege / execution",Evidence:"Later literary sources; numbers disputed"},
    sourceStatus:"Later literary sources; numbers disputed",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Muhammad"}]
  },
  {
    year:628, depth:3500, title:"Khaybar campaign", location:"Khaybar, Arabia",
    story:"Muhammad's forces defeated the Jewish oasis communities of Khaybar; agreements allowed many inhabitants to remain under new political conditions.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Military campaign",Evidence:"Broad event established; narrative details derive from Islamic sources"},
    sourceStatus:"Broad event established; narrative details derive from Islamic sources",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Khaybar"}]
  },
  {
    year:1011, depth:3720, title:"Persecution under al-Hakim", location:"Fatimid Caliphate",
    story:"Under Fatimid caliph al-Hakim, discriminatory and coercive measures were imposed on Christians and Jews, including restrictions and destruction of houses of worship. The intensity and chronology of policies varied over his reign.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Religious persecution",Evidence:"High for persecution; not a single massacre"},
    sourceStatus:"High for persecution; not a single massacre",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/al-Hakim-Fatimid-caliph"}]
  },
  {
    year:1066, depth:3820, title:"Granada massacre", location:"Granada, al-Andalus",
    story:"A mob attacked Granada's Jewish community and killed the Jewish vizier Joseph ibn Naghrela; medieval sources describe extensive killing.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre",Evidence:"Established; medieval numerical estimates uncertain"},
    sourceStatus:"Established; medieval numerical estimates uncertain",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/anti-Semitism/Anti-Semitism-in-medieval-Europe"}]
  },
  {
    year:1096, depth:3910, title:"Speyer massacre", location:"Speyer, Holy Roman Empire",
    story:"As First Crusade violence spread through the Rhineland, attackers targeted the Jewish community of Speyer. The bishop protected many Jews, but a number were murdered.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Crusader-era massacre",Evidence:"High; medieval chronicles"},
    sourceStatus:"High; medieval chronicles",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1096, depth:3930, title:"Worms massacre", location:"Worms, Holy Roman Empire",
    story:"Crusaders and local participants attacked Jews in Worms during the First Crusade. Many Jews were killed despite attempts to shelter under episcopal protection.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Crusader-era massacre",Evidence:"High; medieval chronicles"},
    sourceStatus:"High; medieval chronicles",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1096, depth:3940, title:"Mainz massacre", location:"Mainz, Holy Roman Empire",
    story:"The Jewish community of Mainz was attacked during the First Crusade despite taking refuge with the archbishop. Medieval accounts describe mass killing and suicide under threat of forced conversion.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Crusader-era massacre",Evidence:"High; medieval chronicles; exact totals vary"},
    sourceStatus:"High; medieval chronicles; exact totals vary",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1096, depth:3950, title:"Rhineland massacres during the First Crusade", location:"Worms, Mainz, Cologne and Rhineland",
    story:"Crusading bands and local mobs attacked Jewish communities as the First Crusade moved east.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacres",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1099, depth:3990, title:"Crusader capture of Jerusalem", location:"Jerusalem",
    story:"First Crusade forces captured Jerusalem in July 1099 and massacred Muslim and Jewish inhabitants. Jewish residents were among those killed during the conquest.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Siege / massacre",Evidence:"Very high for conquest and massacre; exact numbers disputed"},
    sourceStatus:"Very high for conquest and massacre; exact numbers disputed",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Crusades/The-First-Crusade-and-the-establishment-of-the-Latin-states"}]
  },
  {
    year:1146, depth:4070, title:"Second Crusade violence and Almohad persecution", location:"Western Europe / North Africa / Iberia",
    story:"The mid-12th century brought anti-Jewish violence connected to crusading in Europe and coercive Almohad policies in North Africa and Iberia.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Persecution / massacre",Evidence:"High for broad pattern"},
    sourceStatus:"High for broad pattern",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1171, depth:4160, title:"Blois blood-libel executions", location:"Blois, France",
    story:"Dozens of Jews were burned after a false ritual-murder accusation, an early major blood-libel prosecution.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Execution / persecution",Evidence:"High; exact details from medieval sources"},
    sourceStatus:"High; exact details from medieval sources",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1189, depth:4220, title:"London coronation riots", location:"London, England",
    story:"Violence broke out against Jews around the coronation of Richard I in 1189. Attacks spread beyond London during the following months and helped set the stage for the York massacre.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Anti-Jewish riot",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.english-heritage.org.uk/visit/places-to-visit/cliffords-tower/history-and-stories/massacre-of-the-jews/"}]
  },
  {
    year:1189, depth:4240, title:"Anti-Jewish violence at Richard I's coronation", location:"London, England",
    story:"Violence against Jews erupted around Richard I's coronation and spread to other English towns.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Riot / massacre",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.ushmm.org/research/about-the-mandel-center/initiatives/religion-holocaust/resources/christian-persecution-of-jews-over-the-centuries"}]
  },
  {
    year:1190, depth:4310, title:"York massacre", location:"York, England",
    story:"Jews sheltering in York Castle faced a mob; many died by killing one another and suicide rather than forced conversion, while others were killed after leaving.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.english-heritage.org.uk/visit/places/cliffords-tower-york/history-and-stories/massacre-of-the-jews/"}]
  },
  {
    year:1190, depth:4320, title:"York massacre at Clifford's Tower", location:"York, England",
    story:"About 150 members of York's Jewish community were besieged in the royal castle. Many killed their families and themselves rather than face forced conversion or murder; survivors who emerged were killed by attackers.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Massacre / forced-conversion threat",Evidence:"Very high; multiple chronicles and administrative records"},
    sourceStatus:"Very high; multiple chronicles and administrative records",
    sources:[{label:"Source / further reading",url:"https://www.english-heritage.org.uk/visit/places-to-visit/cliffords-tower/history-and-stories/history/"}]
  },
  {
    year:1236, depth:4360, title:"Anjou and Poitou attacks on Jewish communities", location:"Western France",
    story:"Crusading violence in western France targeted Jewish communities in Anjou and Poitou. Medieval sources describe killings and forced conversion pressures.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Massacre / crusading violence",Evidence:"Documented in medieval scholarship; totals vary"},
    sourceStatus:"Documented in medieval scholarship; totals vary",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1255, depth:4380, title:"Lincoln blood-libel case", location:"Lincoln, England",
    story:"After the death of a Christian boy known as Little Saint Hugh, Jews were falsely accused of ritual murder. Eighteen Jews were executed following proceedings encouraged by the crown.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Blood libel / judicial persecution",Evidence:"High; accusation itself was false"},
    sourceStatus:"High; accusation itself was false",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1298, depth:4420, title:"Rintfleisch massacres", location:"Franconia and Bavaria",
    story:"Anti-Jewish massacres spread through numerous German communities under the Rintfleisch movement.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre wave",Evidence:"High; totals vary"},
    sourceStatus:"High; totals vary",
    sources:[{label:"Source / further reading",url:"https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/genocidal-massacres-of-jews-in-medieval-western-europe-10961392/00724C8FEFEDF90A56EE4CF62E2CB536"}]
  },
  {
    year:1290, depth:4440, title:"Expulsion of Jews from England", location:"England",
    story:"Edward I ordered the expulsion of Jews from England in 1290 after decades of discriminatory taxation, restrictions and violence. Jewish communal life in England was formally ended for centuries.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"State expulsion / persecution",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.english-heritage.org.uk/learn/story-of-england/medieval/religion/"}]
  },
  {
    year:1320, depth:4500, title:"Shepherds' Crusade attacks", location:"France and northern Iberia",
    story:"Bands associated with the Shepherds' Crusade attacked Jewish communities across parts of France and northern Iberia.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre wave",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/genocidal-massacres-of-jews-in-medieval-western-europe-10961392/00724C8FEFEDF90A56EE4CF62E2CB536"}]
  },
  {
    year:1336, depth:4570, title:"Armleder massacres", location:"German lands",
    story:"Armed bands attacked Jewish communities across parts of the German lands during the 1330s.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre wave",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/genocidal-massacres-of-jews-in-medieval-western-europe-10961392/00724C8FEFEDF90A56EE4CF62E2CB536"}]
  },
  {
    year:1348, depth:4650, title:"Black Death massacres", location:"Central and Western Europe",
    story:"Jews were falsely accused of causing the plague by poisoning wells, triggering massacres and destruction of communities across Europe.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre / persecution",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1349, depth:4680, title:"Strasbourg massacre during the Black Death", location:"Strasbourg, Holy Roman Empire",
    story:"During Black Death persecutions, Strasbourg authorities and citizens burned a large number of Jews after false accusations that Jews had poisoned wells and caused the plague.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Massacre / persecution",Evidence:"Very high for massacre; exact number varies"},
    sourceStatus:"Very high for massacre; exact number varies",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1391, depth:4740, title:"Anti-Jewish massacres in Iberia", location:"Castile and Aragon",
    story:"Urban violence swept Jewish communities in Spain, killing Jews and driving many others into forced conversion.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre / forced conversion",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/genocidal-massacres-of-jews-in-medieval-western-europe-10961392/00724C8FEFEDF90A56EE4CF62E2CB536"}]
  },
  {
    year:1421, depth:4820, title:"Vienna Gesera", location:"Duchy of Austria",
    story:"Austrian Jews were arrested, dispossessed, expelled or executed during the Vienna Gesera.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Persecution / executions / expulsion",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.jewishvirtuallibrary.org/the-vienna-gesera"}]
  },
  {
    year:1475, depth:4880, title:"Trent blood-libel persecution", location:"Trent, Prince-Bishopric of Trent",
    story:"After a Christian child disappeared, local Jews were accused of ritual murder, tortured and executed. The ritual-murder allegation was false and became one of Europe's most influential blood libels.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Blood libel / executions",Evidence:"High; ritual-murder claim false"},
    sourceStatus:"High; ritual-murder claim false",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1478, depth:4920, title:"Spanish Inquisition begins", location:"Spain",
    story:"The Spanish Inquisition targeted alleged heresy, including converted Jews accused of secretly practicing Judaism; torture and executions followed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"State persecution / executions",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism"}]
  },
  {
    year:1492, depth:5000, title:"Expulsion of Jews from Spain", location:"Spain",
    story:"The Alhambra Decree ordered practicing Jews to convert or leave Spain, producing mass displacement and severe hardship.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Expulsion / persecution",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Spanish-Inquisition"}]
  },
  {
    year:1648, depth:5220, title:"Khmelnytsky uprising massacres", location:"Polish–Lithuanian Commonwealth / Ukraine",
    story:"During the Khmelnytsky uprising, Jewish communities were among populations subjected to widespread killing and destruction. Historical death estimates vary greatly.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"War / massacre wave",Evidence:"High; totals disputed"},
    sourceStatus:"High; totals disputed",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Khmelnytsky-Insurrection"}]
  },
  {
    year:1821, depth:5400, title:"Odessa anti-Jewish riot", location:"Odessa, Russian Empire",
    story:"Anti-Jewish rioting in Odessa is commonly identified as the first incident to be labeled a pogrom.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom / riot",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1881, depth:5520, title:"Russian Empire pogrom wave", location:"Russian Empire",
    story:"After Tsar Alexander II's assassination, extensive anti-Jewish riots swept southern and western parts of the Russian Empire from 1881 to 1884.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom wave",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1903, depth:5610, title:"Kishinev pogrom", location:"Kishinev, Russian Empire",
    story:"Three days of anti-Jewish violence killed nearly 50 Jews, wounded hundreds, and destroyed or looted hundreds of homes and businesses.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1905, depth:5680, title:"Odessa pogrom", location:"Odessa, Russian Empire",
    story:"During revolutionary unrest, Odessa experienced one of the deadliest pogroms of 1905, with extensive killing, injury and destruction.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom",Evidence:"High; casualty estimates vary"},
    sourceStatus:"High; casualty estimates vary",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1918, depth:5750, title:"Civil War pogroms in Ukraine and neighboring regions", location:"Ukraine / Belarus / Galicia",
    story:"During the post-1917 civil wars, forces from several political and military camps carried out pogroms that killed tens of thousands of Jews.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom wave",Evidence:"Very high; aggregate totals vary"},
    sourceStatus:"Very high; aggregate totals vary",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1920, depth:5840, title:"Nebi Musa riots", location:"Jerusalem",
    story:"Violence during the Nebi Musa festival included attacks on Jerusalem's Jewish community amid escalating Arab–Jewish political tensions under the British Mandate.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Communal riot",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/World-War-I-and-after"}]
  },
  {
    year:1921, depth:5900, title:"Jaffa riots", location:"Jaffa and surrounding area",
    story:"Arab–Jewish violence in Jaffa and nearby areas killed and injured members of both communities and deepened Mandate-era tensions.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Communal violence",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/World-War-I-and-after"}]
  },
  {
    year:1929, depth:5980, title:"Hebron massacre and 1929 Palestine riots", location:"Hebron and Mandatory Palestine",
    story:"During widespread 1929 violence, Arab attackers killed 67 Jews in Hebron; Jews were also attacked elsewhere, while Arabs were killed in clashes and by British forces.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre / communal violence",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Hebron-city-West-Bank"}]
  },
  {
    year:1929, depth:6010, title:"Safed massacre during the 1929 riots", location:"Safed, Mandatory Palestine",
    story:"During the 1929 Palestine disturbances, Arab attackers killed Jewish residents of Safed and burned and looted Jewish homes.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Massacre / communal violence",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/World-War-I-and-after"}]
  },
  {
    year:1936, depth:6050, title:"1936–1939 Arab Revolt: attacks on Jewish civilians", location:"Mandatory Palestine",
    story:"The Arab Revolt against British rule and mass Jewish immigration included attacks on Jewish civilians and communities, alongside British counterinsurgency and Jewish armed responses.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Insurgency / communal violence",Evidence:"Very high; individual incidents require separate sourcing"},
    sourceStatus:"Very high; individual incidents require separate sourcing",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/The-Arab-Revolt"}]
  },
  {
    year:1938, depth:6120, title:"Kristallnacht / November Pogrom", location:"Germany and Austria",
    story:"Nazi leaders unleashed nationwide anti-Jewish violence: synagogues burned, businesses and homes were destroyed, Jews were killed and about 26,000 Jewish men were imprisoned in concentration camps.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"State-sponsored pogrom",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/kristallnacht"}]
  },
  {
    year:1941, depth:6200, title:"Farhud", location:"Baghdad, Iraq",
    story:"Anti-Jewish violence in Baghdad on June 1–2, 1941 killed and injured Jews and involved widespread looting and destruction.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom / massacre",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/the-farhud"}]
  },
  {
    year:1941, depth:6215, title:"Iași pogrom", location:"Iași, Romania",
    story:"Romanian authorities and military units, assisted at times by German soldiers, murdered at least 8,000 Jews during the June 1941 pogrom and related death transports.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Pogrom / mass murder",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1941, depth:6230, title:"Lviv pogrom", location:"Lviv, German-occupied Ukraine",
    story:"Following the German occupation of Lviv, German forces, Ukrainian nationalist activists, militia members and local civilians participated in anti-Jewish humiliation, beatings and killings.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Pogrom / mass violence",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/the-lwow-pogrom-of-july-1-1941"}]
  },
  {
    year:1941, depth:6245, title:"Jedwabne massacre", location:"Jedwabne, German-occupied Poland",
    story:"Hundreds of Jewish residents of Jedwabne were murdered by Polish neighbors in July 1941 in the presence of German police; aspects of German instigation remain historically examined.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Massacre / pogrom",Evidence:"Very high; aspects debated"},
    sourceStatus:"Very high; aspects debated",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1941, depth:6260, title:"Ponary mass killings begin", location:"Near Vilna (Vilnius), Lithuania",
    story:"German SS and police units with Lithuanian collaborators murdered Jews from Vilna and surrounding areas at Ponary. Tens of thousands of Jews were ultimately killed at the site.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Mass shooting / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://wwv.yadvashem.org/yv/en/exhibitions/music/vilna-ghetto.asp"}]
  },
  {
    year:1941, depth:6270, title:"Chełmno killing center begins mass murder", location:"Chełmno, German-occupied Poland",
    story:"Mass murder began at Chełmno in December 1941 using gas vans. Nazi Germany murdered at least 152,000 Jews there.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/chelmno"}]
  },
  {
    year:1941, depth:6280, title:"Holocaust mass shootings and extermination", location:"German-occupied Europe",
    story:"Nazi Germany and its allies and collaborators systematically murdered approximately six million European Jews through shootings, killing centers, ghettos, starvation, forced labor and other methods.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust"}]
  },
  {
    year:1941, depth:6290, title:"Rumbula massacre", location:"Near Riga, German-occupied Latvia",
    story:"German SS and police and Latvian auxiliaries murdered approximately 25,000 Jews from the Riga ghetto and about 1,000 German Jews in the Rumbula forest in late 1941.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Mass shooting / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/riga"}]
  },
  {
    year:1941, depth:6300, title:"Babi Yar massacre", location:"Kyiv, German-occupied Ukraine",
    story:"On September 29–30, 1941, Einsatzgruppe C personnel and collaborators murdered 33,771 Jewish men, women and children at the Babi Yar ravine.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Mass shooting / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://wwv.yadvashem.org/yv/en/exhibitions/communities/kiev/babi-yar.asp"}]
  },
  {
    year:1942, depth:6305, title:"Belzec killing center", location:"Bełżec, German-occupied Poland",
    story:"Belzec became an Operation Reinhard killing center. Approximately 435,000 Jews were murdered there, overwhelmingly in gas chambers.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/belzec"}]
  },
  {
    year:1942, depth:6310, title:"Sobibor killing center", location:"Sobibór, German-occupied Poland",
    story:"Sobibor was established as an Operation Reinhard killing center. At least 167,000 Jews were murdered there.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/sobibor"}]
  },
  {
    year:1942, depth:6315, title:"Treblinka II killing center", location:"Treblinka, German-occupied Poland",
    story:"Treblinka II operated as an Operation Reinhard killing center. Nazi personnel murdered an estimated 925,000 Jews there.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/treblinka"}]
  },
  {
    year:1942, depth:6320, title:"Auschwitz-Birkenau mass murder of Jews", location:"Auschwitz-Birkenau, German-occupied Poland",
    story:"Auschwitz-Birkenau became the largest Nazi concentration and killing complex. Approximately one million Jews were murdered in the Auschwitz camp complex.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/auschwitz"}]
  },
  {
    year:1942, depth:6325, title:"Great Action: deportation of Warsaw Jews to Treblinka", location:"Warsaw, German-occupied Poland",
    story:"From July to September 1942, German authorities deported about 265,000 Jews from the Warsaw ghetto to Treblinka and killed approximately 35,000 Jews in the ghetto during the operation.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Deportation / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/warsaw-ghetto-uprising"}]
  },
  {
    year:1943, depth:6330, title:"Warsaw Ghetto Uprising", location:"Warsaw, German-occupied Poland",
    story:"Jewish fighters resisted the final German deportation operation beginning April 19, 1943. At least 7,000 Jews died fighting or in hiding as German forces destroyed the ghetto.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Jewish armed resistance / suppression",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/warsaw-ghetto-uprising"}]
  },
  {
    year:1943, depth:6335, title:"Operation Harvest Festival", location:"Lublin district, German-occupied Poland",
    story:"German SS and police murdered tens of thousands of Jewish forced laborers in the Lublin district during Operation Harvest Festival in November 1943.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Mass shooting / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/warsaw-ghetto-uprising"}]
  },
  {
    year:1946, depth:6350, title:"Kielce pogrom", location:"Kielce, Poland",
    story:"A mob, joined by some police and soldiers, killed Jewish Holocaust survivors and other Jews in Kielce; at least 42 Jews were murdered.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Postwar pogrom",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1947, depth:6390, title:"Fajja bus attacks", location:"Near Petah Tikva, Mandatory Palestine",
    story:"On November 30, 1947, the day after the UN partition vote, Arab gunmen attacked Jewish buses, among the opening incidents of the civil-war phase of the 1947–49 conflict.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Attack on civilian buses",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/The-1948-war"}]
  },
  {
    year:1947, depth:6405, title:"1947–1949 Palestine war / Arab–Israeli War", location:"Mandatory Palestine / Israel",
    story:"Fighting followed the UN partition vote; after Israel declared independence in May 1948, neighboring Arab armies entered the war. Jewish and Arab civilians and combatants suffered major losses and displacement.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Civil war / interstate war",Evidence:"Very high; narratives and some figures contested"},
    sourceStatus:"Very high; narratives and some figures contested",
    sources:[{label:"Source / further reading",url:"https://history.state.gov/milestones/1945-1952/arab-israeli-war"}]
  },
  {
    year:1948, depth:6435, title:"Hadassah medical convoy massacre", location:"Jerusalem",
    story:"An Arab force ambushed a convoy carrying medical personnel and supplies to Hadassah Hospital and Hebrew University on Mount Scopus in April 1948; 78 Jews were killed.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Convoy ambush / massacre",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Jerusalem"}]
  },
  {
    year:1954, depth:6490, title:"Ma'ale Akrabim bus massacre", location:"Negev, Israel",
    story:"Gunmen ambushed an Israeli passenger bus at Ma'ale Akrabim in March 1954, killing passengers and leaving only a few survivors.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Attack on civilian bus",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/en/pages/terrorism-deaths-in-israel-1920-1999"}]
  },
  {
    year:1955, depth:6510, title:"Patish wedding attack", location:"Patish, Israel",
    story:"Attackers threw grenades and opened fire on a crowded wedding celebration in March 1955, killing a young woman and wounding 18 people.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/israel_in_maps/en/English_SiteTransfer_DOCUMENTS_mapstorypart3.pdf"}]
  },
  {
    year:1956, depth:6530, title:"Kfar Chabad synagogue attack", location:"Kfar Chabad, Israel",
    story:"Gunmen opened fire on a synagogue containing children and teenagers in April 1956, killing three children and a youth worker and injuring others.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Terrorist attack on children",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/israel_in_maps/en/English_SiteTransfer_DOCUMENTS_mapstorypart3.pdf"}]
  },
  {
    year:1956, depth:6540, title:"Ramat Rachel shooting", location:"Ramat Rachel, Israel",
    story:"Gunfire from a Jordanian position killed four archaeologists and wounded sixteen people at Ramat Rachel in September 1956.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Cross-border shooting",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/israel_in_maps/en/English_SiteTransfer_DOCUMENTS_mapstorypart3.pdf"}]
  },
  {
    year:1956, depth:6550, title:"Suez Crisis / Sinai War", location:"Egypt / Sinai / Israel",
    story:"Israel invaded Egypt's Sinai Peninsula in coordination with the Anglo-French intervention after Egypt nationalized the Suez Canal.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Interstate war",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://history.state.gov/milestones/1953-1960/suez"}]
  },
  {
    year:1967, depth:6570, title:"Six-Day War", location:"Israel / Egypt / Jordan / Syria",
    story:"Israel fought Egypt, Jordan and Syria in June 1967 and captured the Sinai, Gaza Strip, West Bank, East Jerusalem and Golan Heights.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Interstate war",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://history.state.gov/historicaldocuments/frus1964-68v14/d217"}]
  },
  {
    year:1968, depth:6590, title:"El Al Flight 253 attack in Athens", location:"Athens, Greece",
    story:"Palestinian militants attacked an El Al aircraft at Athens airport in December 1968, killing an Israeli passenger and injuring others.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Terrorist attack on aircraft",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/en/pages/terrorism-deaths-in-israel-1920-1999"}]
  },
  {
    year:1970, depth:6600, title:"Avivim school bus massacre", location:"Avivim, Israel",
    story:"Militants fired on an Israeli school bus near the Lebanese border in May 1970, killing children and adults and wounding others.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Attack on school bus",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/en/pages/terrorism-deaths-in-israel-1920-1999"}]
  },
  {
    year:1972, depth:6615, title:"Lod Airport massacre", location:"Lod Airport, Israel",
    story:"Gunmen from the Japanese Red Army, acting with a Palestinian militant organization, attacked passengers at Lod Airport in May 1972.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://archives.mod.gov.il/sites/English/theTimeAxis/Pages/1972-%E2%80%93-1980.aspx"}]
  },
  {
    year:1972, depth:6630, title:"Munich Olympics attack", location:"Munich, West Germany",
    story:"Members of Black September took Israeli Olympic team members hostage; eleven Israeli athletes and coaches were killed during the attack and failed rescue.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Munich-Massacre"}]
  },
  {
    year:1973, depth:6680, title:"Yom Kippur / October War", location:"Israel / Egypt / Syria",
    story:"Egypt and Syria launched a surprise attack on Israeli positions on October 6, 1973, beginning a major regional war.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Interstate war",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://history.state.gov/historicaldocuments/frus1969-76v36/d209"}]
  },
  {
    year:1974, depth:6695, title:"Kiryat Shmona massacre", location:"Kiryat Shmona, Israel",
    story:"Palestinian militants infiltrated Kiryat Shmona in April 1974 and murdered civilians, including children.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/israel_in_maps/en/English_SiteTransfer_DOCUMENTS_mapstorypart3.pdf"}]
  },
  {
    year:1974, depth:6710, title:"Ma'alot massacre", location:"Ma'alot, Israel",
    story:"Three Palestinian militants seized schoolchildren and other hostages in May 1974. During the attempted rescue, the attackers fired on the children and threw grenades; many hostages were killed.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Hostage-taking / terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://archives.mod.gov.il/sites/English/theTimeAxis/Pages/1972-%E2%80%93-1980.aspx"}]
  },
  {
    year:1975, depth:6725, title:"Savoy Hotel attack", location:"Tel Aviv, Israel",
    story:"Fatah militants seized the Savoy Hotel in March 1975. Eight hostages and three Israeli soldiers were killed during the incident and rescue operation.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Hostage-taking / terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://archives.mod.gov.il/Exhib/malons/Pages/default.aspx"}]
  },
  {
    year:1976, depth:6738, title:"Entebbe hijacking and hostage crisis", location:"Entebbe, Uganda",
    story:"PFLP-linked and German militants hijacked an Air France flight and diverted it to Entebbe. Israeli and Jewish passengers were separated from many other hostages before an Israeli commando rescue.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Aircraft hijacking / hostage-taking",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://archives.mod.gov.il/sites/English/theTimeAxis/Pages/1972-%E2%80%93-1980.aspx"}]
  },
  {
    year:1978, depth:6750, title:"Coastal Road massacre", location:"Israel",
    story:"Palestinian militants attacked civilians traveling on Israel's Coastal Road, killing dozens and triggering a major Israeli military response in Lebanon.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Israel/War-in-Lebanon"}]
  },
  {
    year:1980, depth:6755, title:"Paris synagogue bombing", location:"Paris, France",
    story:"A bomb exploded outside the Rue Copernic synagogue in Paris in October 1980, killing four people and injuring dozens.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Antisemitic terrorist bombing",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/anti-Semitism"}]
  },
  {
    year:1982, depth:6760, title:"1982 Lebanon War", location:"Lebanon / Israel",
    story:"Israel invaded Lebanon amid conflict with the PLO and cross-border attacks. The war involved Israeli, Palestinian, Lebanese and Syrian forces and caused extensive civilian suffering.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"War",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Lebanon-War"}]
  },
  {
    year:1982, depth:6770, title:"Great Synagogue of Rome attack", location:"Rome, Italy",
    story:"Gunmen attacked worshippers leaving the Great Synagogue of Rome in October 1982, killing a two-year-old child and wounding dozens.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Antisemitic terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/anti-Semitism"}]
  },
  {
    year:1985, depth:6785, title:"Rome and Vienna airport attacks", location:"Rome, Italy / Vienna, Austria",
    story:"Gunmen attacked El Al ticket counters at airports in Rome and Vienna in December 1985, killing and wounding travelers.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Terrorist attacks",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/terrorism"}]
  },
  {
    year:1987, depth:6800, title:"First Intifada", location:"West Bank / Gaza / Israel",
    story:"A Palestinian uprising against Israeli occupation involved demonstrations, riots, attacks and Israeli military responses, causing deaths on both sides.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Uprising / conflict",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/intifada"}]
  },
  {
    year:1992, depth:6820, title:"Israeli embassy bombing in Buenos Aires", location:"Buenos Aires, Argentina",
    story:"A suicide bombing destroyed the Israeli embassy in Buenos Aires in March 1992, killing 29 people and injuring hundreds.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Terrorist bombing",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/1992-Buenos-Aires-embassy-bombing"}]
  },
  {
    year:1994, depth:6840, title:"AMIA bombing", location:"Buenos Aires, Argentina",
    story:"A bombing destroyed the AMIA Jewish community center, killing 85 people and injuring hundreds.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist bombing",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/AMIA-bombing"}]
  },
  {
    year:1994, depth:6850, title:"Tel Aviv bus 5 bombing", location:"Tel Aviv, Israel",
    story:"A Hamas suicide bomber attacked a city bus in Tel Aviv in October 1994, killing 22 people.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/news/cabinet-communique-29-jan-2006/en/English_SiteTransfer_DOCUMENTS_Profile-of-the-Hamas-movement_ITIC.pdf"}]
  },
  {
    year:1996, depth:6860, title:"Jerusalem bus 18 bombings", location:"Jerusalem, Israel",
    story:"Two suicide bombings on Jerusalem bus route 18 in 1996 killed dozens of civilians during a wave of Hamas attacks.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombings",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/news/cabinet-communique-29-jan-2006/en/English_SiteTransfer_DOCUMENTS_Profile-of-the-Hamas-movement_ITIC.pdf"}]
  },
  {
    year:2000, depth:6880, title:"Second Intifada", location:"Israel / West Bank / Gaza",
    story:"The Second Intifada brought suicide bombings and other attacks against Israelis alongside major Israeli military operations; thousands of Palestinians and Israelis were killed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Uprising / terrorism / armed conflict",Evidence:"Very high; totals depend on definitions"},
    sourceStatus:"Very high; totals depend on definitions",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/intifada"}]
  },
  {
    year:2001, depth:6890, title:"Dolphinarium discotheque bombing", location:"Tel Aviv, Israel",
    story:"A suicide bomber attacked young people waiting outside the Dolphinarium nightclub in June 2001; 21 Israeli civilians were killed, most of them teenagers.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/palestinian-violence-and-terrorism-since-september-2000/en/English_SiteTransfer_DOCUMENTS_Leading-Palestinian-Terrorist-Organizations-Aug-2004.pdf"}]
  },
  {
    year:2001, depth:6895, title:"Sbarro restaurant bombing", location:"Jerusalem, Israel",
    story:"A suicide bomber attacked the crowded Sbarro restaurant in Jerusalem in August 2001, killing 15 civilians.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/palestinian-violence-and-terrorism-since-september-2000/en/English_SiteTransfer_DOCUMENTS_Leading-Palestinian-Terrorist-Organizations-Aug-2004.pdf"}]
  },
  {
    year:2002, depth:6900, title:"Passover massacre", location:"Netanya, Israel",
    story:"A suicide bomber attacked a Passover seder at the Park Hotel in Netanya during the Second Intifada, killing civilians and injuring many others.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/intifada"}]
  },
  {
    year:2003, depth:6910, title:"Maxim restaurant bombing", location:"Haifa, Israel",
    story:"A suicide bomber attacked the Maxim restaurant in Haifa in October 2003, killing 21 people.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/saving-lives-israel-s-anti-terrorist-fence-answers-to-questions-jan-2004/en/English_SiteTransfer_DOCUMENTS_PDF_19279_2.pdf"}]
  },
  {
    year:2008, depth:6920, title:"Mumbai Chabad House attack", location:"Mumbai, India",
    story:"During the coordinated Mumbai attacks, terrorists seized the Chabad Jewish center at Nariman House and murdered hostages there.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Mumbai-terrorist-attacks-of-2008"}]
  },
  {
    year:2012, depth:6950, title:"Toulouse Jewish school attack", location:"Toulouse, France",
    story:"A gunman attacked the Ozar Hatorah Jewish school, murdering a teacher and three children.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Toulouse-and-Montauban-shootings"}]
  },
  {
    year:2014, depth:6965, title:"Jerusalem synagogue attack", location:"Jerusalem",
    story:"Two Palestinian attackers armed with guns, knives and axes attacked worshippers at a synagogue in Har Nof in November 2014, killing worshippers and a police officer.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Synagogue terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/en/pages/terrorism-deaths-in-israel-1920-1999"}]
  },
  {
    year:2015, depth:6980, title:"Hyper Cacher hostage attack", location:"Paris, France",
    story:"A gunman attacked a kosher supermarket in Paris, killing four Jewish hostages.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Antisemitic terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Charlie-Hebdo-shooting"}]
  },
  {
    year:2018, depth:7010, title:"Pittsburgh synagogue shooting", location:"Pittsburgh, United States",
    story:"A gunman attacked worshippers at the Tree of Life synagogue complex, murdering eleven people.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Antisemitic terrorist attack / mass shooting",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.justice.gov/opa/pr/pennsylvania-man-sentenced-death-2018-tree-life-synagogue-shooting"}]
  },
  {
    year:2019, depth:7025, title:"Poway synagogue shooting", location:"Poway, California, United States",
    story:"An antisemitic gunman opened fire inside Chabad of Poway on the final day of Passover, killing one worshipper and injuring three others, including a child.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Antisemitic mass shooting",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.justice.gov/usao-sdca/pr/john-earnest-pleads-guilty-113-count-federal-hate-crime-indictment-connection-poway"}]
  },
  {
    year:2019, depth:7040, title:"Halle synagogue attack", location:"Halle, Germany",
    story:"An armed extremist attempted to enter a synagogue on Yom Kippur; unable to enter, he murdered two people nearby.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Antisemitic terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Halle-synagogue-shooting"}]
  },
  {
    year:2020, depth:7050, title:"Monsey Hanukkah stabbing", location:"Monsey, New York, United States",
    story:"During a Hanukkah gathering at a rabbi's home, an attacker stabbed multiple people; one victim later died from his injuries.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Antisemitic stabbing attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.justice.gov/opa/pr/monsey-man-charged-federal-hate-crimes-december-2019-stabbing"}]
  },
  {
    year:2022, depth:7060, title:"Colleyville synagogue hostage crisis", location:"Colleyville, Texas, United States",
    story:"An armed man took worshippers hostage at Congregation Beth Israel in January 2022. The hostages ultimately escaped or were rescued; the attacker was killed.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Synagogue hostage-taking",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.justice.gov/usao-ndtx/press-release/file/1465966/dl"}]
  },
  {
    year:2023, depth:7100, title:"October 7 Hamas-led attack and Israel–Hamas war", location:"Israel / Gaza",
    story:"Hamas and other armed groups attacked southern Israel on October 7, killing civilians and security personnel and taking hostages. Israel then launched a major war in Gaza with very large Palestinian civilian and combatant casualties and destruction.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Mass attack / hostage-taking / war",Evidence:"Very high for core events; evolving and contested details require dated sourcing"},
    sourceStatus:"Very high for core events; evolving and contested details require dated sourcing",
    sources:[{label:"Source / further reading",url:"https://www.un.org/unispal/document/coi-report-a-hrc-56-26-27may24/"}]
  }
]

const eras = [
  {name:"Biblical Origins & Ancient Israel",range:"Jacob/Israel tradition → 586 BCE",start:0,end:1160},
  {name:"Second Temple Period",range:"586 BCE–70 CE",start:1160,end:1940},
  {name:"Roman & Byzantine Period",range:"70–622 CE",start:1940,end:3100},
  {name:"Early Islamic Period",range:"622–1096 CE",start:3100,end:3820},
  {name:"Crusades & Medieval Period",range:"1096–1492 CE",start:3820,end:4500},
  {name:"Early Modern Jewish Diaspora",range:"1492–1881 CE",start:4500,end:5120},
  {name:"Modern Europe & Pogroms",range:"1881–1933 CE",start:5520,end:6100},
  {name:"The Holocaust",range:"1933–1945 CE",start:6100,end:6340},
  {name:"Israel & Arab–Israeli Conflict",range:"1945–2000 CE",start:6340,end:6870},
  {name:"Contemporary Era",range:"2000–2026 CE",start:6870,end:7200}
];

const MAX_DEPTH=7200;
let depth=0, velocity=0, paused=false, rafId=0;
const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const abyss=document.getElementById("abyss");
const person=document.getElementById("fallingPerson");
const eventsLayer=document.getElementById("eventsLayer");
const yearReadout=document.getElementById("yearReadout");
const eraReadout=document.getElementById("eraReadout");
const eraRange=document.getElementById("eraRange");
const eraLayer=document.getElementById("eraLayer");
const depthReadout=document.getElementById("depthReadout");
const progressFill=document.getElementById("progressFill");
const speedLines=document.getElementById("speedLines");
const fallTrail=document.getElementById("fallTrail");
const rockLeft=document.querySelector(".rock-left");
const rockRight=document.querySelector(".rock-right");
const rockFarLeft=document.querySelector(".rock-far-left");
const rockFarRight=document.querySelector(".rock-far-right");
const rockMidLeft=document.querySelector(".rock-mid-left");
const rockMidRight=document.querySelector(".rock-mid-right");
const bottomMarker=document.getElementById("bottomMarker");
const skyOpening=document.querySelector(".sky-opening");
const lightShaft=document.querySelector(".light-shaft");
const mist1=document.querySelector(".mist-1");
const mist2=document.querySelector(".mist-2");
const panel=document.getElementById("eventPanel");
const aboutPanel=document.getElementById("aboutPanel");

function makeParticles(){
  const wrap=document.getElementById("particles");
  for(let i=0;i<46;i++){
    const s=document.createElement("span");
    s.style.left=(8+Math.random()*84)+"%";
    s.style.top=(Math.random()*100)+"%";
    s.style.opacity=(.08+Math.random()*.25).toFixed(2);
    s.style.transform="scale("+(0.6+Math.random()*1.5)+")";
    wrap.appendChild(s);
  }
}
function yearAt(d){
  const points=[{depth:0,year:-1800},...events,{depth:MAX_DEPTH,year:2026}];
  let a=points[0],b=points[1];
  for(let i=1;i<points.length;i++){
    if(d<=points[i].depth){b=points[i];a=points[i-1];break}
  }
  const span=Math.max(1,b.depth-a.depth);
  const t=Math.max(0,Math.min(1,(d-a.depth)/span));
  return Math.round(a.year+(b.year-a.year)*t);
}
function currentEraAt(d){
  return eras.find(era=>d>=era.start&&d<era.end)||eras[eras.length-1];
}
const eraEls=eras.map((era,index)=>{
  const el=document.createElement("div");
  el.className="era-transition";
  el.innerHTML='<span class="era-kicker">Entering historical era</span><strong>'+era.name+'</strong><small>'+era.range+'</small>';
  eraLayer.appendChild(el);
  return el;
});
function renderEras(){
  const center=abyss.clientHeight/2;
  const active=currentEraAt(depth);
  eraReadout.textContent=active.name;
  eraRange.textContent=active.range;
  eras.forEach((era,index)=>{
    const boundary=index===0?0:era.start;
    const y=center+(boundary-depth);
    const el=eraEls[index];
    el.style.top=y+"px";
    const distance=Math.abs(y-center);
    el.style.opacity=(y>-100&&y<abyss.clientHeight+100)?Math.max(.12,1-distance/(abyss.clientHeight*.7)):0;
  });
}
const markerEls=events.map((event,index)=>{
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="event-marker";
  btn.setAttribute("aria-label",event.year+" — "+event.title+". Open event details.");
  if(index%2===0) btn.style.left="7%"; else btn.style.right="7%";
  btn.innerHTML='<span class="dot"></span><span><small>'+event.year+'</small><strong>'+event.title+'</strong></span>';
  btn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();openEvent(event)});
  eventsLayer.appendChild(btn);
  return btn;
});
function renderEvents(){
  const center=abyss.clientHeight/2;
  events.forEach((event,index)=>{
    const y=center+(event.depth-depth);
    const btn=markerEls[index];
    btn.style.top=(y-30)+"px";
    btn.style.display=(y<-120||y>abyss.clientHeight+120)?"none":"grid";
  });
}
function render(){
  const pct=Math.round((depth/MAX_DEPTH)*100);
  const currentYear=yearAt(depth);
  yearReadout.textContent=currentYear<0?Math.abs(currentYear)+" BCE":currentYear+" CE";
  depthReadout.textContent=pct+"%";
  progressFill.style.height=pct+"%";

  const speed=Math.min(1,Math.abs(velocity)/105);
  speedLines.style.opacity=(speed*.85).toFixed(2);
  fallTrail.style.opacity=(.12+speed*.5).toFixed(2);

  const direction=velocity>=0?1:-1;
  const rotate=Math.sin(depth/360)*8+(direction*speed*5);
  const bob=Math.sin(depth/105)*5;
  const depthT=pct/100;
  const perspectiveScale=(1.02-depthT*.28)+speed*.025;
  person.style.transform='translate(-50%,calc(-50% + '+bob+'px)) rotate('+rotate+'deg) scale('+perspectiveScale+')';
  person.style.opacity=Math.max(.72,1-depthT*.18);

  const wallSway=Math.sin(depth/420)*5;
  rockLeft.style.transform='translate3d('+(-wallSway)+'px,'+((depth%760)*-.24)+'px,35px) scale(1.035)';
  rockRight.style.transform='translate3d('+wallSway+'px,'+((depth%820)*-.22)+'px,35px) scale(1.035)';
  rockMidLeft.style.transform='translate3d('+(-wallSway*.55)+'px,'+((depth%980)*-.13)+'px,0) scale(1.015)';
  rockMidRight.style.transform='translate3d('+(wallSway*.55)+'px,'+((depth%1040)*-.12)+'px,0) scale(1.015)';
  rockFarLeft.style.transform='translate3d(0,'+((depth%1300)*-.07)+'px,-50px)';
  rockFarRight.style.transform='translate3d(0,'+((depth%1380)*-.065)+'px,-50px)';
  mist1.style.transform='translateY('+((depth%900)*-.23)+'px)';
  mist2.style.transform='translateY('+((depth%1100)*-.18)+'px)';

  const openingScale=Math.max(.16,1-depthT*.82);
  const openingOpacity=Math.max(.08,.9-depthT*.82);
  skyOpening.style.transform='translateX(-50%) scale('+openingScale+')';
  skyOpening.style.opacity=openingOpacity;
  skyOpening.style.filter='blur('+(5+depthT*8)+'px)';
  lightShaft.style.transform='translateX(-50%) scaleX('+(1-depthT*.45)+') scaleY('+(1-depthT*.6)+')';
  lightShaft.style.opacity=Math.max(.03,.58-depthT*.52);
  abyss.style.background=
    'radial-gradient(ellipse at 50% 0%,rgba(150,190,210,'+(0.17*(1-depthT))+'),transparent '+(25-depthT*13)+'%),'+
    'linear-gradient(180deg,#'+(depthT<.45?'17191d':'0c0d10')+' 0%,#08090b 30%,#030405 64%,#000 100%)';

  bottomMarker.classList.toggle("visible",pct>=94);
  document.querySelectorAll(".particles span").forEach((p,i)=>{
    const drift=((depth*(.04+(i%5)*.009))%(abyss.clientHeight+80));
    p.style.transform='translateY('+(-drift)+'px) translateX('+(Math.sin((depth+i*31)/130)*8)+'px)';
  });
  renderEras();
  renderEvents();
}
function tick(){
  if(!paused&&!reduced){
    depth=Math.max(0,Math.min(MAX_DEPTH,depth+velocity));
    velocity*=.84;
    if(Math.abs(velocity)<.05)velocity=0;
  }
  render();
  rafId=requestAnimationFrame(tick);
}
function descend(delta){
  if(paused)return;
  const scaled=Math.max(-260,Math.min(260,delta));
  depth=Math.max(0,Math.min(MAX_DEPTH,depth+scaled*.72));
  velocity=Math.max(-115,Math.min(115,velocity+scaled*.037));
}
function openEvent(event){
  paused=true;velocity=0;
  document.getElementById("eventDate").textContent=event.year;
  document.getElementById("eventTitle").textContent=event.title;
  document.getElementById("eventLocation").textContent=event.location;
  document.getElementById("eventStory").textContent=event.story;
  document.getElementById("eventContext").textContent=event.context;
  document.getElementById("eventAftermath").textContent=event.aftermath;
  document.getElementById("eventSourceStatus").textContent=event.sourceStatus;
  const sourceWrap=document.getElementById("eventSources");
  sourceWrap.innerHTML="";
  (event.sources||[]).forEach(source=>{
    const a=document.createElement("a");
    a.href=source.url;a.target="_blank";a.rel="noopener noreferrer";a.textContent=source.label;
    sourceWrap.appendChild(a);
  });
  if(!(event.sources||[]).length){
    const note=document.createElement("span");
    note.textContent="Source review still in progress.";
    sourceWrap.appendChild(note);
  }
  const dl=document.getElementById("eventStats");
  dl.innerHTML="";
  Object.entries(event.stats).forEach(([k,v])=>{
    const row=document.createElement("div");
    const dt=document.createElement("dt");
    const dd=document.createElement("dd");
    dt.textContent=k.replaceAll("_"," ");
    dd.textContent=v;
    row.append(dt,dd);dl.appendChild(row);
  });
  panel.classList.remove("hidden");
  document.body.classList.add("event-open");
  document.getElementById("closeEventBtn").focus();
}
function restart(){
  depth=0;velocity=0;paused=false;
  panel.classList.add("hidden");
  document.body.classList.remove("event-open");
  aboutPanel.classList.add("hidden");
  document.getElementById("intro").scrollIntoView({behavior:reduced?"auto":"smooth"});
}
abyss.addEventListener("wheel",e=>{
  const goingDown=e.deltaY>0, goingUp=e.deltaY<0;
  const atBottom=depth>=MAX_DEPTH-1, atTop=depth<=1;
  if((goingDown&&atBottom)||(goingUp&&atTop)) return;
  e.preventDefault();
  descend(e.deltaY);
},{passive:false});
let touchY=null;
abyss.addEventListener("touchstart",e=>{touchY=e.touches[0].clientY},{passive:true});
abyss.addEventListener("touchmove",e=>{if(touchY===null)return;const y=e.touches[0].clientY;descend((touchY-y)*2.2);touchY=y},{passive:true});
abyss.addEventListener("touchend",()=>touchY=null,{passive:true});
abyss.addEventListener("keydown",e=>{
  if(["ArrowDown","PageDown"," "].includes(e.key)){e.preventDefault();descend(230)}
  if(["ArrowUp","PageUp"].includes(e.key)){e.preventDefault();descend(-230)}
});
document.getElementById("beginBtn").addEventListener("click",()=>{abyss.scrollIntoView({behavior:reduced?"auto":"smooth"});abyss.focus()});
document.getElementById("restartBtn").addEventListener("click",restart);
document.getElementById("closeEventBtn").addEventListener("click",()=>{panel.classList.add("hidden");document.body.classList.remove("event-open");paused=false;abyss.focus()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!panel.classList.contains("hidden")){panel.classList.add("hidden");document.body.classList.remove("event-open");paused=false;abyss.focus()}});
document.getElementById("aboutBtn").addEventListener("click",()=>{aboutPanel.classList.remove("hidden");aboutPanel.scrollIntoView({behavior:reduced?"auto":"smooth"})});
document.getElementById("closeAboutBtn").addEventListener("click",()=>aboutPanel.classList.add("hidden"));
makeParticles();render();rafId=requestAnimationFrame(tick);