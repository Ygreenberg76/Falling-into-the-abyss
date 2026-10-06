const TIMELINE_KIND="jewish";
function stableEventId(event,index){const slug=String(event.title||"event").toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,72)||"event";return TIMELINE_KIND+"-"+String(event.year).replace("-","bce-")+"-"+slug+(index!==undefined?"-"+index:"");}
const events = [
  {
    year:-1800, depth:180, title:"Jacob is given the name Israel", location:"Canaan / Biblical tradition",
    story:"According to Genesis, Jacob (Yaakov), son of Isaac and grandson of Abraham, is given the name Israel (Yisrael). His descendants are subsequently known as Bnei Yisrael — the Children of Israel. The biblical text is the source for this account; there is no independently established historical date for Jacob, so the date shown here is an approximate traditional-era placement rather than an archaeological date.",
    context:"This is the narrative starting point of the website, not the first independently attested historical event. The site distinguishes biblical tradition from later extra-biblical and archaeological evidence.",
    aftermath:"The name Israel becomes central to the biblical identity of Jacob's descendants and the traditions of the Twelve Tribes of Israel.",
    stats:{Type:"Biblical tradition / origin narrative",Evidence:"Biblical text; date historically uncertain"},
    sourceStatus:"Traditional biblical account — not independently dated",
    sources:[{label:"Genesis 32 — Jacob renamed Israel",url:"https://www.sefaria.org/Genesis.32.29?lang=bi"}]
  },
  {
    year:-1750, depth:350, title:"Bnei Yisrael — the Children of Israel", location:"Biblical tradition",
    story:"In the biblical narrative, the descendants of Jacob/Israel become known as Bnei Yisrael, the Children of Israel. The Twelve Tribes are traditionally traced to Jacob's sons and family. This entry establishes the meaning of the name before the timeline reaches independently attested references to Israel.",
    context:"This is a traditional genealogical and identity framework preserved in the Hebrew Bible. It should not be confused with archaeological proof of a single historical family from which every later Israelite descended.",
    aftermath:"The term Children of Israel becomes a recurring collective designation throughout the Torah and later biblical literature.",
    stats:{Type:"Biblical tradition / peoplehood",Evidence:"Biblical text; historical reconstruction uncertain"},
    sourceStatus:"Traditional biblical account",
    sources:[{label:"Genesis — Jacob and the Children of Israel",url:"https://www.sefaria.org/Genesis.35.10?lang=bi"}]
  },
  {
    year:-1650, depth:520, title:"Israel's family goes down to Egypt", location:"Egypt / Biblical tradition",
    story:"Genesis describes Jacob/Israel and his household moving to Egypt during a famine, where Joseph had risen to authority. This is part of the biblical origin narrative of Bnei Yisrael; no independent Egyptian record has been securely identified as documenting Jacob or Joseph.",
    context:"This entry is included because it is fundamental to the traditional story that leads to the Exodus. Its placement is approximate and should not be read as an established archaeological date.",
    aftermath:"The biblical narrative later describes the descendants of Israel becoming numerous in Egypt and being subjected to forced labor.",
    stats:{Type:"Biblical tradition / migration",Evidence:"Biblical text; independently unverified"},
    sourceStatus:"Traditional biblical account — date historically uncertain",
    sources:[{label:"Genesis 46 — Israel goes to Egypt",url:"https://www.sefaria.org/Genesis.46?lang=bi"}]
  },
  {
    year:-1300, depth:690, title:"Enslavement of Bnei Yisrael in Egypt", location:"Egypt / Biblical tradition",
    story:"The book of Exodus describes a new pharaoh enslaving the Children of Israel and imposing forced labor upon them. The account is foundational to Jewish history and identity, but historians have not found independent evidence establishing the biblical enslavement on the scale or in the form described.",
    context:"The site presents this as biblical tradition rather than a securely dated Egyptian historical event. Ancient Egypt did use forced labor and enslaved populations, but that fact alone does not independently verify the Exodus narrative.",
    aftermath:"In the biblical account, oppression leads to Moses' leadership and the departure of Bnei Yisrael from Egypt.",
    stats:{Type:"Biblical tradition / persecution and forced labor",Evidence:"Biblical text; historical scale and chronology uncertain"},
    sourceStatus:"Traditional biblical account",
    sources:[{label:"Exodus 1 — oppression of the Children of Israel",url:"https://www.sefaria.org/Exodus.1?lang=bi"}]
  },
  {
    year:-1250, depth:860, title:"The Exodus from Egypt", location:"Egypt → Sinai / Biblical tradition",
    story:"According to the Torah, Moses leads Bnei Yisrael out of slavery in Egypt. The Exodus becomes one of the central narratives of Jewish identity and religious memory. Scholars continue to debate whether the story preserves memories of smaller historical movements or events, but the biblical Exodus as narrated has not been independently established archaeologically.",
    context:"This marker deliberately separates religious and cultural tradition from independently attested history. The date is an approximate traditional-era placement, not a proven date.",
    aftermath:"The biblical narrative continues with the wilderness journey, covenant at Sinai, and the development of Israel as a people bound by a shared law and tradition.",
    stats:{Type:"Biblical tradition / liberation narrative",Evidence:"Biblical text; historicity and chronology debated"},
    sourceStatus:"Traditional biblical account — not independently established at the narrated scale",
    sources:[{label:"Exodus — departure from Egypt",url:"https://www.sefaria.org/Exodus.12?lang=bi"}]
  },
  {
    year:-1240, depth:1030, title:"Amalek attacks Bnei Yisrael", location:"Rephidim / Biblical tradition",
    story:"Exodus describes Amalek attacking the Israelites at Rephidim during the wilderness journey. Later biblical texts make Amalek a recurring enemy in Israelite memory. There is no independent contemporary evidence that securely identifies this particular battle.",
    context:"Because this is an account of armed conflict involving Bnei Yisrael, it belongs in the project's traditional-history section, but it is explicitly labeled as a biblical narrative rather than independently verified history.",
    aftermath:"The conflict becomes an enduring motif in biblical and later Jewish memory.",
    stats:{Type:"Biblical tradition / battle",Evidence:"Biblical text; independently unverified"},
    sourceStatus:"Traditional biblical account",
    sources:[{label:"Exodus 17 — battle with Amalek",url:"https://www.sefaria.org/Exodus.17?lang=bi"}]
  },
  {
    year:-1230, depth:1200, title:"Joshua and warfare in Canaan", location:"Canaan / Biblical tradition",
    story:"The book of Joshua describes Israelite campaigns against Canaanite cities after the wilderness period. Archaeology shows that Canaan underwent major political and social changes around the end of the Late Bronze Age, but it does not support a simple reconstruction in which every city in Joshua fell in one unified conquest exactly as narrated.",
    context:"Some sites named in Joshua experienced destruction in the relevant broad period, while others present different archaeological histories. Hazor, for example, was destroyed in the 13th century BCE, but the identity of those responsible remains debated.",
    aftermath:"Biblical tradition presents the campaigns as leading into settlement by the tribes of Israel; historical reconstruction instead points to a complex emergence of early Israel within Canaan.",
    stats:{Type:"Biblical tradition / conquest narratives",Evidence:"Mixed: biblical narrative plus archaeological evidence for regional upheaval; specific campaigns disputed"},
    sourceStatus:"Traditional narrative with partial archaeological context — details debated",
    sources:[{label:"Joshua — Canaan campaigns",url:"https://www.sefaria.org/Joshua.11?lang=bi"},{label:"Hazor archaeological context",url:"https://www.bibleodyssey.org/map-gallery/hazor-map"}]
  },
  {
    year:-1208, depth:1370, title:"Merneptah Stele: earliest extra-biblical reference to Israel", location:"Canaan",
    story:"An Egyptian royal victory inscription dating to about 1208 BCE contains the earliest widely accepted non-biblical reference to a people called Israel. Merneptah claims that this group was defeated during his campaign in Canaan. The Egyptian writing identifies Israel as a people rather than a city, territory, kingdom, or state.",
    context:"This marker is the site's transition from the traditional biblical narrative to independently attested evidence. It shows that a population known as Israel existed in Canaan by about 1208 BCE; it does not show that the later Kingdom of Israel already existed. The pharaoh's statement is an Egyptian royal victory claim, not proof that the people Israel were destroyed.",
    aftermath:"Later Iron Age evidence documents Israel and Judah as political kingdoms. Their precise development from earlier highland populations remains a subject of historical and archaeological research.",
    stats:{Type:"Egyptian campaign / earliest external Israel reference",Evidence:"Very high for inscription; interpretation of early Israel's organization remains debated"},
    sourceStatus:"Contemporary Egyptian inscription — earliest widely accepted extra-biblical Israel reference",
    sources:[{label:"Merneptah Stele — historical reference",url:"https://www.britannica.com/topic/Merneptah-Stele"}]
  },
  {
    year:-1150, depth:1540, title:"Philistine expansion and conflict with early Israel", location:"Southern Canaan / Philistia",
    story:"The Philistines established a distinctive material culture in the southern coastal plain as Egyptian control receded. Archaeological evidence supports the existence and expansion of Philistine centers and makes conflict with emerging Israelite groups historically plausible, although individual stories in Judges and Samuel cannot all be independently verified.",
    context:"This entry distinguishes the biblical narrative from archaeological and extra-biblical evidence where those sources differ.",
    aftermath:"Its place in the timeline is based on the best-supported broad chronology; ancient dates and campaign details may remain debated.",
    stats:{Type:"Ancient conflict / political transition",Evidence:"Archaeology supports Philistine settlement and regional conflict; biblical details vary in evidentiary strength"},
    sourceStatus:"Archaeology supports Philistine settlement and regional conflict; biblical details vary in evidentiary strength",
    sources:[{label:"Source / further reading",url:"https://resources.metmuseum.org/resources/metpublications/pdf/Assyria_to_Iberia_at_the_Dawn_of_the_Classical_Age.pdf"}]
  },
  {
    year:-1050, depth:1710, title:"Saul and the Philistine wars", location:"Israel / Philistia — biblical narrative",
    story:"The books of Samuel describe Saul as Israel's first king and portray his reign as dominated by warfare with the Philistines. Philistine-Israelite conflict fits the broader Iron Age setting supported by archaeology, but Saul's individual campaigns and chronology are known principally from the biblical narrative.",
    context:"This entry distinguishes the biblical narrative from archaeological and extra-biblical evidence where those sources differ.",
    aftermath:"Its place in the timeline is based on the best-supported broad chronology; ancient dates and campaign details may remain debated.",
    stats:{Type:"Ancient conflict / political transition",Evidence:"Biblical narrative within a historically plausible Iron Age conflict setting"},
    sourceStatus:"Biblical narrative within a historically plausible Iron Age conflict setting",
    sources:[{label:"Source / further reading",url:"https://www.sefaria.org/I_Samuel.13?lang=bi"}]
  },
  {
    year:-1010, depth:1880, title:"Battle of Mount Gilboa and death of Saul", location:"Mount Gilboa — biblical narrative",
    story:"According to 1 Samuel, Philistine forces defeated Israel at Mount Gilboa. Saul and his sons, including Jonathan, died during the battle. The event is important to the biblical transition from Saul's dynasty to David, but no contemporary external inscription securely documents the battle.",
    context:"This entry distinguishes the biblical narrative from archaeological and extra-biblical evidence where those sources differ.",
    aftermath:"Its place in the timeline is based on the best-supported broad chronology; ancient dates and campaign details may remain debated.",
    stats:{Type:"Ancient conflict / political transition",Evidence:"Biblical narrative; not independently attested"},
    sourceStatus:"Biblical narrative; not independently attested",
    sources:[{label:"Source / further reading",url:"https://www.sefaria.org/I_Samuel.31?lang=bi"}]
  },
  {
    year:-1000, depth:2050, title:"David's wars and rise of the Israelite monarchy", location:"Israel / Judah / Philistia",
    story:"Biblical tradition portrays David defeating Philistine forces and establishing rule from Jerusalem. Archaeology and inscriptions support the existence of Iron Age Judah and Israel, while the scale and political reach of David's kingdom remain debated. The later Tel Dan Stele contains the widely discussed phrase 'House of David,' providing external evidence for a Davidic dynasty.",
    context:"This entry distinguishes the biblical narrative from archaeological and extra-biblical evidence where those sources differ.",
    aftermath:"Its place in the timeline is based on the best-supported broad chronology; ancient dates and campaign details may remain debated.",
    stats:{Type:"Ancient conflict / political transition",Evidence:"Davidic dynasty has extra-biblical support; individual campaigns mainly biblical"},
    sourceStatus:"Davidic dynasty has extra-biblical support; individual campaigns mainly biblical",
    sources:[{label:"Source / further reading",url:"https://isac.uchicago.edu/sites/default/files/uploads/shared/docs/ois8.pdf"}]
  },
  {
    year:-930, depth:2220, title:"Division into the kingdoms of Israel and Judah", location:"Israel and Judah",
    story:"After Solomon, the biblical narrative describes the monarchy dividing into a northern Kingdom of Israel and a southern Kingdom of Judah. By the ninth century BCE, both kingdoms are visible in external inscriptions and the archaeological record.",
    context:"This entry distinguishes the biblical narrative from archaeological and extra-biblical evidence where those sources differ.",
    aftermath:"Its place in the timeline is based on the best-supported broad chronology; ancient dates and campaign details may remain debated.",
    stats:{Type:"Ancient conflict / political transition",Evidence:"Strong for existence of separate Iron Age kingdoms; precise biblical chronology debated"},
    sourceStatus:"Strong for existence of separate Iron Age kingdoms; precise biblical chronology debated",
    sources:[{label:"Source / further reading",url:"https://www.metmuseum.org/exhibitions/listings/2014/assyria-to-iberia/blog/posts/phoenicia-and-the-bible"}]
  },
  {
    year:-925, depth:2390, title:"Shoshenq I campaign in the southern Levant", location:"Judah / Israel / southern Levant",
    story:"Egyptian Pharaoh Shoshenq I campaigned in the Levant in the 10th century BCE. Egyptian inscriptions provide an external anchor for warfare affecting settlements associated with early Israel and Judah; the relationship to the biblical Shishak narrative is debated in detail.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Egyptian military campaign",Evidence:"High for campaign; reconstruction of targets debated"},
    sourceStatus:"High for campaign; reconstruction of targets debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Sheshonk-I"}]
  },
  {
    year:-853, depth:2560, title:"Battle of Qarqar: Ahab of Israel against Assyria", location:"Qarqar, Syria",
    story:"The Assyrian king Shalmaneser III recorded a major battle at Qarqar against a coalition of Levantine rulers. His inscription names Ahab the Israelite among the coalition and credits him with a substantial chariot and infantry force. This is important external evidence for the northern Kingdom of Israel as a regional power.",
    context:"This entry distinguishes the biblical narrative from archaeological and extra-biblical evidence where those sources differ.",
    aftermath:"Its place in the timeline is based on the best-supported broad chronology; ancient dates and campaign details may remain debated.",
    stats:{Type:"Ancient conflict / political transition",Evidence:"Contemporary Assyrian royal inscription; military numbers may be propagandistic"},
    sourceStatus:"Contemporary Assyrian royal inscription; military numbers may be propagandistic",
    sources:[{label:"Source / further reading",url:"https://www.britishmuseum.org/collection/object/W_1848-1104-1"}]
  },
  {
    year:-840, depth:2730, title:"Mesha's revolt against Israel", location:"Moab / Kingdom of Israel",
    story:"The Moabite king Mesha recorded the recovery of territories from Israel in a royal inscription. The Mesha Stele is an unusually important contemporary non-biblical source for conflict between Moab and the Kingdom of Israel.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"War / revolt",Evidence:"Very high for core conflict"},
    sourceStatus:"Very high for core conflict",
    sources:[{label:"Source / further reading",url:"https://collections.louvre.fr/ark:/53355/cl010120339"}]
  },
  {
    year:-840, depth:2900, title:"Aramean wars and the Tel Dan Stele", location:"Northern Israel / Aram-Damascus",
    story:"An Aramaic victory inscription discovered at Tel Dan commemorates victories over kings associated with Israel and the 'House of David.' The inscription provides direct evidence for warfare between Aram-Damascus and the Israelite/Judahite kingdoms in the ninth century BCE.",
    context:"This entry distinguishes the biblical narrative from archaeological and extra-biblical evidence where those sources differ.",
    aftermath:"Its place in the timeline is based on the best-supported broad chronology; ancient dates and campaign details may remain debated.",
    stats:{Type:"Ancient conflict / political transition",Evidence:"Contemporary/near-contemporary monumental inscription; reconstruction has damaged portions"},
    sourceStatus:"Contemporary/near-contemporary monumental inscription; reconstruction has damaged portions",
    sources:[{label:"Source / further reading",url:"https://isac.uchicago.edu/sites/default/files/uploads/shared/docs/ois8.pdf"}]
  },
  {
    year:-734, depth:3070, title:"Tiglath-pileser III invades Israel and the Levant", location:"Kingdom of Israel / Galilee / Levant",
    story:"Assyrian expansion under Tiglath-pileser III transformed the region. Campaigns in the 730s BCE reduced the northern Kingdom of Israel, annexed territory and led to deportations, setting the stage for the final Assyrian conquest of Samaria a decade later.",
    context:"This entry distinguishes the biblical narrative from archaeological and extra-biblical evidence where those sources differ.",
    aftermath:"Its place in the timeline is based on the best-supported broad chronology; ancient dates and campaign details may remain debated.",
    stats:{Type:"Ancient conflict / political transition",Evidence:"Strong Assyrian and biblical evidence"},
    sourceStatus:"Strong Assyrian and biblical evidence",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Tiglath-pileser-III"}]
  },
  {
    year:-722, depth:3240, title:"Assyrian conquest of Samaria", location:"Samaria / Kingdom of Israel",
    story:"Assyria conquered Samaria and ended the northern Kingdom of Israel; deportations and resettlement followed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Conquest / deportation",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.metmuseum.org/exhibitions/listings/2014/assyria-to-iberia/blog/posts/phoenicia-and-the-bible"}]
  },
  {
    year:-701, depth:3410, title:"Assyrian invasion of Judah and fall of Lachish", location:"Kingdom of Judah",
    story:"Sennacherib's forces devastated Judah and captured Lachish; Jerusalem survived the campaign.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Invasion / siege",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.metmuseum.org/exhibitions/listings/2014/assyria-to-iberia/blog/posts/sennacherib-and-jerusalem"}]
  },
  {
    year:-597, depth:3580, title:"First Babylonian capture of Jerusalem", location:"Jerusalem / Kingdom of Judah",
    story:"Nebuchadnezzar II captured Jerusalem after a revolt by Judah. King Jehoiachin, members of the royal court, soldiers, craftsmen and other elites were deported to Babylonia. This first major deportation preceded the later destruction of Jerusalem and the First Temple.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Strong Babylonian chronicle and biblical evidence"},
    sourceStatus:"Strong Babylonian chronicle and biblical evidence",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Jerusalem/The-Babylonian-Exile"}]
  },
  {
    year:-587, depth:3750, title:"Babylonian destruction of Jerusalem and First Temple", location:"Jerusalem / Judah",
    story:"Babylonian forces captured Jerusalem, destroyed the First Temple and ended the Kingdom of Judah.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Conquest / destruction / exile",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Babylonian-Captivity"}]
  },
  {
    year:-539, depth:3920, title:"Cyrus conquers Babylon and permits return", location:"Babylonia / Persian Empire / Judah",
    story:"Cyrus II of Persia conquered Babylon in 539 BCE. Persian policy permitted displaced peoples, including Judeans, to restore sanctuaries and communities. Biblical texts connect this policy to the return from Babylonian exile and rebuilding in Jerusalem.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Strong for Persian conquest and restoration policy; details of Judean return rely partly on biblical sources"},
    sourceStatus:"Strong for Persian conquest and restoration policy; details of Judean return rely partly on biblical sources",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Cyrus-the-Great"}]
  },
  {
    year:-332, depth:4090, title:"Alexander the Great conquers the Levant", location:"Levant / Judea",
    story:"Alexander's conquest ended Persian control of the Levant and brought Judea into the Hellenistic political world. Jerusalem itself was not the scene of a securely documented major battle in Alexander's campaign, but the conquest transformed the political environment in which later Jewish conflicts developed.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Very high for regional conquest; later stories about Alexander and Jerusalem are less secure"},
    sourceStatus:"Very high for regional conquest; later stories about Alexander and Jerusalem are less secure",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Alexander-the-Great"}]
  },
  {
    year:-200, depth:4260, title:"Seleucid control of Judea after the Battle of Panium", location:"Judea / Coele-Syria",
    story:"Following decades of Ptolemaic-Seleucid warfare, Antiochus III's victory brought Judea under Seleucid rule. Initially Jewish institutions received protections, but later Seleucid political and fiscal crises contributed to the confrontation under Antiochus IV.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Strong Hellenistic historical evidence"},
    sourceStatus:"Strong Hellenistic historical evidence",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/The-Hellenistic-age"}]
  },
  {
    year:-168, depth:4430, title:"Antiochus IV captures Jerusalem and suppresses Jewish practices", location:"Jerusalem / Judea",
    story:"During political turmoil in Judea, forces of Antiochus IV Epiphanes intervened in Jerusalem. Ancient Jewish sources describe killings, plunder of the Temple, restrictions on Jewish religious practices and the installation of a pagan cult in the sanctuary. These measures helped trigger armed revolt.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Strong ancient literary evidence; exact sequence and motives debated"},
    sourceStatus:"Strong ancient literary evidence; exact sequence and motives debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Antiochus-IV-Epiphanes"}]
  },
  {
    year:-167, depth:4600, title:"Maccabean Revolt", location:"Judaea",
    story:"A Jewish revolt broke out against Seleucid rule amid Antiochus IV's coercive policies and conflict within Judaean society.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Revolt / religious persecution",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Maccabean-Revolt"}]
  },
  {
    year:-164, depth:4770, title:"Maccabees recapture and rededicate the Temple", location:"Jerusalem / Judea",
    story:"Forces led by Judas Maccabeus gained control of Jerusalem's Temple precinct and rededicated the sanctuary after its desecration under Seleucid rule. The event became the basis for Hanukkah, while warfare against Seleucid forces continued.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Strong ancient literary evidence"},
    sourceStatus:"Strong ancient literary evidence",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Hanukkah"}]
  },
  {
    year:-142, depth:4940, title:"Hasmonean independence emerges", location:"Judea",
    story:"Under Simon, the Hasmonean leadership achieved effective political independence from Seleucid control. The dynasty that emerged from the revolt later expanded beyond Judea through warfare and conquest.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Strong ancient literary and historical evidence"},
    sourceStatus:"Strong ancient literary and historical evidence",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/Hasmonean-dynasty"}]
  },
  {
    year:-125, depth:5110, title:"Hasmonean conquest of Idumea", location:"Idumea / southern Judea",
    story:"John Hyrcanus expanded the Hasmonean state into Idumea. Ancient sources report that Idumeans were incorporated into the Judean polity and required to adopt Jewish practices including circumcision. Modern historians debate how best to characterize the process and its degree of coercion.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Ancient literary evidence; nature and degree of forced conversion debated"},
    sourceStatus:"Ancient literary evidence; nature and degree of forced conversion debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/John-Hyrcanus-I"}]
  },
  {
    year:-103, depth:5280, title:"Hasmonean expansion under Alexander Jannaeus", location:"Judea and neighboring territories",
    story:"Alexander Jannaeus expanded Hasmonean territory through repeated wars against neighboring cities and peoples. His reign also saw severe internal Jewish conflict between the monarchy and opponents associated in later sources with the Pharisees.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Ancient literary evidence; casualty figures and factional descriptions require caution"},
    sourceStatus:"Ancient literary evidence; casualty figures and factional descriptions require caution",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Alexander-Jannaeus"}]
  },
  {
    year:-88, depth:5450, title:"Hasmonean civil conflict and repression", location:"Judea",
    story:"Ancient accounts describe bitter internal conflict during Alexander Jannaeus's reign, including rebellion against the king and brutal reprisals. Josephus reports mass executions, though his dramatic numbers and details must be treated cautiously.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Ancient literary evidence, principally Josephus; exact numbers uncertain"},
    sourceStatus:"Ancient literary evidence, principally Josephus; exact numbers uncertain",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Alexander-Jannaeus"}]
  },
  {
    year:-67, depth:5620, title:"Hasmonean civil war: Hyrcanus II and Aristobulus II", location:"Judea / Jerusalem",
    story:"A succession dispute between Hyrcanus II and Aristobulus II escalated into civil war. Both sides sought outside support, creating the conditions for Roman general Pompey to intervene in Judea.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Strong ancient literary evidence"},
    sourceStatus:"Strong ancient literary evidence",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Hyrcanus-II"}]
  },
  {
    year:-63, depth:5790, title:"Pompey's siege and capture of Jerusalem", location:"Jerusalem",
    story:"Roman general Pompey intervened in a Hasmonean civil war, besieged Jerusalem and brought Judaea into Rome's sphere.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Siege / Roman intervention",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Pompey-the-Great"}]
  },
  {
    year:-37, depth:5960, title:"Herod and Roman forces capture Jerusalem", location:"Jerusalem",
    story:"Herod, backed by Roman forces, besieged and captured Jerusalem from Antigonus II Mattathias, the last Hasmonean king. The conquest ended the independent Hasmonean monarchy and established Herod as Rome's client king of Judea.",
    context:"This entry is included to show both violence directed at Jewish/Judean communities and conflicts in which Jewish rulers or factions were themselves participants.",
    aftermath:"The consequences are placed in the broader political development of Judea and the surrounding empires.",
    stats:{Type:"Ancient war / conquest / political conflict",Evidence:"Strong ancient literary and Roman-period historical evidence"},
    sourceStatus:"Strong ancient literary and Roman-period historical evidence",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Herod-king-of-Judaea"}]
  },
  {
    year:6, depth:6130, title:"Judea becomes a Roman province and census resistance", location:"Judea",
    story:"Rome removed Herod Archelaus and incorporated Judea under direct Roman administration. The census associated with Quirinius provoked resistance remembered in ancient sources and helped shape later anti-Roman movements.",
    context:"This event is presented with attention to the limits and biases of surviving ancient sources, especially where later literary accounts supply casualty figures or motives.",
    aftermath:"Its consequences affected Jewish political autonomy, settlement, communal relations, or the wider Roman and Byzantine environment.",
    stats:{Type:"Roman/Byzantine conflict",Evidence:"Ancient literary evidence; political context well established"},
    sourceStatus:"Ancient literary evidence; political context well established",
    sources:[{label:"Academic / reference source",url:"https://www.cambridge.org/core/books/ruling-class-of-judaea/introduction/479D7B62CB7776BBBBF8D79755A1A25D"}]
  },
  {
    year:38, depth:6300, title:"Alexandria anti-Jewish violence", location:"Alexandria, Roman Egypt",
    story:"Severe communal violence erupted in Alexandria between Greek and Jewish inhabitants amid a political dispute under the Roman prefect Aulus Avilius Flaccus. Philo describes Jews being driven into a restricted quarter, homes and shops looted, and people assaulted and killed. Modern historians often describe the episode as one of antiquity's clearest large-scale anti-Jewish outbreaks.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Strong contemporary literary evidence from Philo; exact casualty totals unknown"},
    sourceStatus:"Strong contemporary literary evidence from Philo; exact casualty totals unknown",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Alexandria-Egypt"}]
  },
  {
    year:46, depth:6470, title:"Roman crucifixion of Jacob and Simon, sons of Judas the Galilean", location:"Judea",
    story:"Josephus records that the Roman procurator Tiberius Julius Alexander ordered the crucifixion of Jacob and Simon, sons of Judas the Galilean, whose movement had resisted Roman taxation. The episode illustrates continuing armed resistance and Roman repression before the great revolt of 66 CE.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Ancient literary evidence, principally Josephus"},
    sourceStatus:"Ancient literary evidence, principally Josephus",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/Roman-Palestine"}]
  },
  {
    year:50, depth:6640, title:"Jewish–Samaritan violence under Roman rule", location:"Judea / Samaria",
    story:"After Galilean pilgrims were killed while traveling through Samaria, Jewish groups retaliated against Samaritan villages. Roman intervention followed. The episode shows that violence in Roman Palestine was not simply Jews against Rome but also included serious intercommunal conflict.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Ancient literary evidence; details primarily Josephus"},
    sourceStatus:"Ancient literary evidence; details primarily Josephus",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Samaria-historical-region-Palestine"}]
  },
  {
    year:64, depth:6810, title:"Gessius Florus and escalating violence in Judea", location:"Jerusalem / Judea",
    story:"Roman procurator Gessius Florus became notorious in Jewish sources for harsh taxation and violence. His seizure of funds from the Temple treasury and brutal suppression of protests in Jerusalem helped turn long-standing tensions into open revolt.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Strong ancient literary evidence; motives and details filtered through hostile sources"},
    sourceStatus:"Strong ancient literary evidence; motives and details filtered through hostile sources",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/First-Jewish-Revolt"}]
  },
  {
    year:66, depth:6980, title:"First Jewish–Roman War", location:"Roman Judaea",
    story:"A major Jewish revolt against Roman rule began in 66 CE and was crushed over several years.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"War / revolt",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/First-Jewish-Revolt"}]
  },
  {
    year:66, depth:7150, title:"Defeat of Cestius Gallus at Beth Horon", location:"Judea",
    story:"Early in the revolt against Rome, the Syrian governor Cestius Gallus advanced on Jerusalem and then withdrew. Judaean forces attacked the retreat near Beth Horon and inflicted a serious Roman defeat, greatly strengthening the rebellion and ensuring a major imperial response.",
    context:"This event is presented with attention to the limits and biases of surviving ancient sources, especially where later literary accounts supply casualty figures or motives.",
    aftermath:"Its consequences affected Jewish political autonomy, settlement, communal relations, or the wider Roman and Byzantine environment.",
    stats:{Type:"Roman/Byzantine conflict",Evidence:"Strong ancient literary evidence; exact casualty totals uncertain"},
    sourceStatus:"Strong ancient literary evidence; exact casualty totals uncertain",
    sources:[{label:"Academic / reference source",url:"https://www.cambridge.org/core/books/history-of-the-jewish-war/neros-war-i-the-blunder-of-cestius-gallus/96D313480094F1FE648A41266B60CCA4"}]
  },
  {
    year:67, depth:7320, title:"Roman campaign in Galilee", location:"Galilee",
    story:"Roman forces under Vespasian and Titus systematically retook Galilee during the First Jewish–Roman War. Major centers including Jotapata fell after sieges, with large-scale deaths, enslavement and displacement reported by Josephus.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Strong ancient literary and archaeological evidence; casualty numbers in Josephus may be inflated"},
    sourceStatus:"Strong ancient literary and archaeological evidence; casualty numbers in Josephus may be inflated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/First-Jewish-Revolt"}]
  },
  {
    year:68, depth:7490, title:"Jewish factional fighting inside Jerusalem", location:"Jerusalem",
    story:"As Roman pressure increased, rival Jewish factions fought violently for control of Jerusalem. Ancient accounts describe killings and destruction within the city before and during the Roman siege. This internal conflict weakened the defense and demonstrates that the war was also a Jewish civil struggle, not simply Romans against Jews.",
    context:"This event is presented with attention to the limits and biases of surviving ancient sources, especially where later literary accounts supply casualty figures or motives.",
    aftermath:"Its consequences affected Jewish political autonomy, settlement, communal relations, or the wider Roman and Byzantine environment.",
    stats:{Type:"Roman/Byzantine conflict",Evidence:"Strong ancient literary evidence, especially Josephus; interpretation shaped by his political perspective"},
    sourceStatus:"Strong ancient literary evidence, especially Josephus; interpretation shaped by his political perspective",
    sources:[{label:"Academic / reference source",url:"https://www.cambridge.org/core/books/ruling-class-of-judaea/independent-jewish-state-ad-6770/44967201B40388C31963DCEEC72C9029"}]
  },
  {
    year:70, depth:7660, title:"Destruction of Jerusalem and Second Temple", location:"Jerusalem",
    story:"Roman forces under Titus captured Jerusalem and destroyed the Second Temple. Ancient casualty totals are disputed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Siege / destruction",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Siege-of-Jerusalem-70"}]
  },
  {
    year:73, depth:7830, title:"Siege and fall of Masada", location:"Masada, Judean Desert",
    story:"Roman forces besieged the fortress of Masada, held by Jewish rebels after the fall of Jerusalem. Josephus reports that the defenders chose mass suicide rather than capture. Archaeology confirms the Roman siege works and destruction, while historians debate aspects of Josephus's account of the final deaths.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Very strong archaeological evidence for siege; final suicide narrative depends on Josephus"},
    sourceStatus:"Very strong archaeological evidence for siege; final suicide narrative depends on Josephus",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Masada"}]
  },
  {
    year:115, depth:8000, title:"Kitos War / Diaspora Revolt", location:"Eastern Roman Empire",
    story:"Jewish revolts erupted in several eastern Roman provinces during Trajan's reign and were violently suppressed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Revolt / suppression",Evidence:"High; casualty totals uncertain"},
    sourceStatus:"High; casualty totals uncertain",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/Judaism/The-Roman-period-63-bce-135-ce"}]
  },
  {
    year:116, depth:8170, title:"Trajanic revolt spreads through Jewish diaspora", location:"Egypt, Cyrenaica, Cyprus and Mesopotamia",
    story:"During Trajan's eastern wars, major Jewish uprisings and intercommunal violence erupted across several regions of the Roman world. Jewish rebels, Roman forces and local populations suffered heavily. Ancient casualty numbers are extremely large and generally regarded with caution.",
    context:"This event is presented with attention to the limits and biases of surviving ancient sources, especially where later literary accounts supply casualty figures or motives.",
    aftermath:"Its consequences affected Jewish political autonomy, settlement, communal relations, or the wider Roman and Byzantine environment.",
    stats:{Type:"Roman/Byzantine conflict",Evidence:"Multiple ancient sources; scale clear but casualty totals unreliable"},
    sourceStatus:"Multiple ancient sources; scale clear but casualty totals unreliable",
    sources:[{label:"Academic / reference source",url:"https://www.cambridge.org/core/books/cambridge-history-of-judaism/political-social-and-economic-life-in-the-land-of-israel-66c-235/9B8F740CD3C91D2600B977B8A5EA2A09"}]
  },
  {
    year:117, depth:8340, title:"Roman suppression of the Diaspora Revolt", location:"Cyrenaica / Egypt / Cyprus / Mesopotamia",
    story:"The Kitos War or Diaspora Revolt spread through several eastern Roman provinces. Ancient sources describe extensive killing by both Jewish rebels and their opponents. Roman forces eventually suppressed the revolts with devastating consequences for several Jewish communities.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Well-attested revolt; ancient casualty figures highly unreliable"},
    sourceStatus:"Well-attested revolt; ancient casualty figures highly unreliable",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/Judaism/The-Roman-period-63-bce-135-ce"}]
  },
  {
    year:132, depth:8510, title:"Bar Kokhba Revolt", location:"Judaea",
    story:"Bar Kokhba led a major Jewish revolt against Rome. Roman suppression devastated Judaea; ancient casualty figures require caution.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"War / revolt / devastation",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Bar-Kokhba-Revolt"}]
  },
  {
    year:135, depth:8680, title:"Roman suppression after the Bar Kokhba Revolt", location:"Judea",
    story:"After defeating Bar Kokhba's revolt, Rome devastated much of Judea. Ancient sources describe enormous losses, enslavement and destruction. Jerusalem was refounded as the Roman colony Aelia Capitolina, and Jewish access to the city was heavily restricted.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Strong literary, epigraphic and archaeological evidence; ancient casualty totals debated"},
    sourceStatus:"Strong literary, epigraphic and archaeological evidence; ancient casualty totals debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Bar-Kokhba-Revolt"}]
  },
  {
    year:351, depth:8850, title:"Jewish revolt against Constantius Gallus", location:"Galilee / Sepphoris",
    story:"A Jewish revolt broke out in Roman Palestine during the reign of Constantius II and his cousin Gallus. Rebels seized or attacked several centers, including Sepphoris. Roman forces suppressed the uprising, and ancient accounts report significant destruction.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Historically attested but surviving literary accounts are brief and sometimes contradictory"},
    sourceStatus:"Historically attested but surviving literary accounts are brief and sometimes contradictory",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/Roman-Palestine"}]
  },
  {
    year:415, depth:9020, title:"Expulsion of Jews from Alexandria under Cyril", location:"Alexandria, Byzantine Egypt",
    story:"During violent conflict among Christian, Jewish and imperial factions in Alexandria, Patriarch Cyril led action against the city's Jewish community after an outbreak of communal violence. Socrates Scholasticus reports that synagogues were seized and many Jews were expelled. The scale and permanence of the expulsion are debated.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Late-antique literary evidence; scale and sequence debated"},
    sourceStatus:"Late-antique literary evidence; scale and sequence debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Saint-Cyril-of-Alexandria"}]
  },
  {
    year:529, depth:9190, title:"Samaritan revolts and Jewish communities in Byzantine Palestine", location:"Palestine",
    story:"Repeated Samaritan revolts against Byzantine rule brought severe warfare to Palestine in the sixth century. Jewish communities lived within the same contested landscape and appear in some accounts as participants or victims depending on locality and episode. The conflicts devastated parts of the region.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Revolts well attested; specific Jewish participation varies by source and episode"},
    sourceStatus:"Revolts well attested; specific Jewish participation varies by source and episode",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/Roman-Palestine"}]
  },
  {
    year:614, depth:9360, title:"Sasanian capture of Jerusalem", location:"Jerusalem, Byzantine Palestine",
    story:"Sasanian Persian forces captured Jerusalem during the Byzantine–Sasanian war. Jewish groups participated on the Persian side; Christian inhabitants suffered extensive violence. Later accounts differ substantially on casualty numbers and the roles of participants.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Siege / conquest / communal violence",Evidence:"Core conquest high; massacre details and numbers disputed"},
    sourceStatus:"Core conquest high; massacre details and numbers disputed",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Jerusalem/Roman-rule"}]
  },
  {
    year:622, depth:9530, title:"Muhammad's Hijra to Medina", location:"Medina, Arabia",
    story:"Muhammad (c. 570–632 CE) migrated from Mecca to Medina in 622. Medina included Jewish tribes as well as Arab groups. This event establishes the political setting for later conflicts already documented in the timeline.",
    context:"This marker separates political change and legal status from direct episodes of violence.",
    aftermath:"Jewish life varied substantially across regions and rulers; the timeline records both coexistence and conflict.",
    stats:{Type:"Political / communal transition",Evidence:"The Hijra is securely historical; many details of community agreements survive in later Islamic literary sources."},
    sourceStatus:"The Hijra is securely historical; many details of community agreements survive in later Islamic literary sources.",
    sources:[{label:"Encyclopaedia Britannica — Muhammad",url:"https://www.britannica.com/biography/Muhammad"}]
  },
  {
    year:624, depth:9700, title:"Banu Qaynuqa conflict", location:"Medina",
    story:"Early Islamic literary traditions describe a conflict between Muhammad's Medinan community and Banu Qaynuqa, followed by the group's expulsion.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Conflict / expulsion",Evidence:"Later literary sources; details debated"},
    sourceStatus:"Later literary sources; details debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Muhammad"}]
  },
  {
    year:625, depth:9870, title:"Banu Nadir conflict", location:"Medina",
    story:"Early Islamic sources describe Muhammad's conflict with Banu Nadir and their expulsion from Medina.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Conflict / expulsion",Evidence:"Later literary sources; details debated"},
    sourceStatus:"Later literary sources; details debated",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Muhammad"}]
  },
  {
    year:627, depth:10040, title:"Banu Qurayza episode", location:"Medina",
    story:"Islamic tradition describes the surrender of Banu Qurayza after the Battle of the Trench and the execution of many adult males; details and numbers are debated.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Siege / execution",Evidence:"Later literary sources; numbers disputed"},
    sourceStatus:"Later literary sources; numbers disputed",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/Muhammad"}]
  },
  {
    year:628, depth:10210, title:"Khaybar campaign", location:"Khaybar, Arabia",
    story:"Muhammad's forces defeated the Jewish oasis communities of Khaybar; agreements allowed many inhabitants to remain under new political conditions.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Military campaign",Evidence:"Broad event established; narrative details derive from Islamic sources"},
    sourceStatus:"Broad event established; narrative details derive from Islamic sources",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Khaybar"}]
  },
  {
    year:629, depth:10380, title:"Byzantine restoration and reported anti-Jewish reprisals", location:"Jerusalem / Byzantine Palestine",
    story:"After Emperor Heraclius restored Byzantine control, later traditions describe persecution and killings of Jews accused of collaborating with the Persians. The existence of renewed restrictions is credible, but accounts of a systematic empire-wide massacre or a specific Heraclean oath are late and disputed.",
    context:"Roman and Byzantine Palestine contained imperial repression, Jewish resistance, and intercommunal violence. This entry identifies the participants rather than treating every conflict as a single continuous ethnic war.",
    aftermath:"The consequences are described conservatively where ancient authors give dramatic or conflicting casualty claims.",
    stats:{Type:"Roman/Byzantine conflict or persecution",Evidence:"Evidence for restrictions stronger than later massacre narratives"},
    sourceStatus:"Evidence for restrictions stronger than later massacre narratives",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/Roman-Palestine"}]
  },
  {
    year:638, depth:10550, title:"Muslim conquest of Jerusalem", location:"Jerusalem",
    story:"Jerusalem passed from Byzantine to early Muslim rule during the Arab conquests. Later traditions connect the new administration with renewed Jewish access or settlement after Byzantine restrictions, although details differ among sources.",
    context:"This marker separates political change and legal status from direct episodes of violence.",
    aftermath:"Jewish life varied substantially across regions and rulers; the timeline records both coexistence and conflict.",
    stats:{Type:"Political / communal transition",Evidence:"The conquest is securely historical; detailed surrender narratives and early communal policies vary among later sources."},
    sourceStatus:"The conquest is securely historical; detailed surrender narratives and early communal policies vary among later sources.",
    sources:[{label:"Encyclopaedia Britannica — Jerusalem history",url:"https://www.britannica.com/place/Jerusalem/Roman-rule"}]
  },
  {
    year:717, depth:10720, title:"Jewish life under early Islamic rule and dhimmi status", location:"Early Islamic territories",
    story:"Across the early Islamic centuries, Jewish and Christian communities generally lived as protected but legally subordinate non-Muslim populations. Taxes, restrictions and local practice varied greatly across rulers, places and periods.",
    context:"This marker separates political change and legal status from direct episodes of violence.",
    aftermath:"Jewish life varied substantially across regions and rulers; the timeline records both coexistence and conflict.",
    stats:{Type:"Political / communal transition",Evidence:"Broad legal-historical framework is established; enforcement and specific rules varied considerably."},
    sourceStatus:"Broad legal-historical framework is established; enforcement and specific rules varied considerably.",
    sources:[{label:"Encyclopaedia Britannica — Dhimmi",url:"https://www.britannica.com/topic/dhimmi"}]
  },
  {
    year:1011, depth:10890, title:"Persecution under al-Hakim", location:"Fatimid Caliphate",
    story:"Under Fatimid caliph al-Hakim, discriminatory and coercive measures were imposed on Christians and Jews, including restrictions and destruction of houses of worship. The intensity and chronology of policies varied over his reign.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Religious persecution",Evidence:"High for persecution; not a single massacre"},
    sourceStatus:"High for persecution; not a single massacre",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/biography/al-Hakim-Fatimid-caliph"}]
  },
  {
    year:1066, depth:11060, title:"Granada massacre", location:"Granada, al-Andalus",
    story:"A mob attacked Granada's Jewish community and killed the Jewish vizier Joseph ibn Naghrela; medieval sources describe extensive killing.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre",Evidence:"Established; medieval numerical estimates uncertain"},
    sourceStatus:"Established; medieval numerical estimates uncertain",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/anti-Semitism/Anti-Semitism-in-medieval-Europe"}]
  },
  {
    year:1095, depth:11230, title:"Pope Urban II calls the First Crusade", location:"Clermont, France",
    story:"Pope Urban II called for an armed expedition toward the eastern Mediterranean. The call was not formally directed against European Jews, but crusading mobilization was followed by severe anti-Jewish attacks in the Rhineland in 1096.",
    context:"This marker separates political change and legal status from direct episodes of violence.",
    aftermath:"Jewish life varied substantially across regions and rulers; the timeline records both coexistence and conflict.",
    stats:{Type:"Political / communal transition",Evidence:"The crusading call is well documented; surviving versions of Urban's speech were written after the event."},
    sourceStatus:"The crusading call is well documented; surviving versions of Urban's speech were written after the event.",
    sources:[{label:"Encyclopaedia Britannica — Council of Clermont",url:"https://www.britannica.com/event/Council-of-Clermont"}]
  },
  {
    year:1096, depth:11400, title:"Speyer massacre", location:"Speyer, Holy Roman Empire",
    story:"As First Crusade violence spread through the Rhineland, attackers targeted the Jewish community of Speyer. The bishop protected many Jews, but a number were murdered.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Crusader-era massacre",Evidence:"High; medieval chronicles"},
    sourceStatus:"High; medieval chronicles",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1096, depth:11570, title:"Worms massacre", location:"Worms, Holy Roman Empire",
    story:"Crusaders and local participants attacked Jews in Worms during the First Crusade. Many Jews were killed despite attempts to shelter under episcopal protection.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Crusader-era massacre",Evidence:"High; medieval chronicles"},
    sourceStatus:"High; medieval chronicles",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1096, depth:11740, title:"Mainz massacre", location:"Mainz, Holy Roman Empire",
    story:"The Jewish community of Mainz was attacked during the First Crusade despite taking refuge with the archbishop. Medieval accounts describe mass killing and suicide under threat of forced conversion.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Crusader-era massacre",Evidence:"High; medieval chronicles; exact totals vary"},
    sourceStatus:"High; medieval chronicles; exact totals vary",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1096, depth:11910, title:"Rhineland massacres during the First Crusade", location:"Worms, Mainz, Cologne and Rhineland",
    story:"Crusading bands and local mobs attacked Jewish communities as the First Crusade moved east.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacres",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1099, depth:12080, title:"Crusader capture of Jerusalem", location:"Jerusalem",
    story:"First Crusade forces captured Jerusalem in July 1099 and massacred Muslim and Jewish inhabitants. Jewish residents were among those killed during the conquest.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Siege / massacre",Evidence:"Very high for conquest and massacre; exact numbers disputed"},
    sourceStatus:"Very high for conquest and massacre; exact numbers disputed",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Crusades/The-First-Crusade-and-the-establishment-of-the-Latin-states"}]
  },
  {
    year:1144, depth:12250, title:"Norwich accusation and the emergence of the blood libel", location:"Norwich, England",
    story:"After the death of William of Norwich, Jews were falsely accused of ritual murder. The accusation became an influential model for the medieval blood libel: the fabricated claim that Jews murdered Christian children for religious purposes. Similar accusations later triggered persecution and violence across Europe.",
    context:"This marker distinguishes documented persecution from the false accusations used to justify it.",
    aftermath:"The event contributed to the wider development of anti-Jewish restrictions, expulsions or recurring conspiracy myths in medieval Europe.",
    stats:{Type:"Medieval persecution",Evidence:"Well documented as the emergence of a medieval accusation; the ritual-murder claim itself was false."},
    sourceStatus:"Well documented as the emergence of a medieval accusation; the ritual-murder claim itself was false.",
    sources:[{label:"USHMM — Blood Libel",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1146, depth:12420, title:"Second Crusade violence and Almohad persecution", location:"Western Europe / North Africa / Iberia",
    story:"The mid-12th century brought anti-Jewish violence connected to crusading in Europe and coercive Almohad policies in North Africa and Iberia.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Persecution / massacre",Evidence:"High for broad pattern"},
    sourceStatus:"High for broad pattern",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1171, depth:12590, title:"Blois blood-libel executions", location:"Blois, France",
    story:"Dozens of Jews were burned after a false ritual-murder accusation, an early major blood-libel prosecution.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Execution / persecution",Evidence:"High; exact details from medieval sources"},
    sourceStatus:"High; exact details from medieval sources",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1189, depth:12760, title:"London coronation riots", location:"London, England",
    story:"Violence broke out against Jews around the coronation of Richard I in 1189. Attacks spread beyond London during the following months and helped set the stage for the York massacre.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Anti-Jewish riot",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.english-heritage.org.uk/visit/places-to-visit/cliffords-tower/history-and-stories/massacre-of-the-jews/"}]
  },
  {
    year:1190, depth:12930, title:"York massacre at Clifford's Tower", location:"York, England",
    story:"About 150 members of York's Jewish community were besieged in the royal castle. Many killed their families and themselves rather than face forced conversion or murder; survivors who emerged were killed by attackers.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Massacre / forced-conversion threat",Evidence:"Very high; multiple chronicles and administrative records"},
    sourceStatus:"Very high; multiple chronicles and administrative records",
    sources:[{label:"Source / further reading",url:"https://www.english-heritage.org.uk/visit/places-to-visit/cliffords-tower/history-and-stories/history/"}]
  },
  {
    year:1235, depth:13100, title:"Fulda blood-libel accusations", location:"Fulda, Holy Roman Empire",
    story:"After the deaths of Christian children at Fulda, local Jews were accused of ritual murder. The accusation contributed to violence and became one of the prominent medieval blood-libel cases later repeated across Europe.",
    context:"This marker distinguishes documented persecution from the false accusations used to justify it.",
    aftermath:"The event contributed to the wider development of anti-Jewish restrictions, expulsions or recurring conspiracy myths in medieval Europe.",
    stats:{Type:"Medieval persecution",Evidence:"The accusation and persecution are historically documented; the ritual-murder allegation was false."},
    sourceStatus:"The accusation and persecution are historically documented; the ritual-murder allegation was false.",
    sources:[{label:"USHMM — Blood Libel",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1236, depth:13270, title:"Anjou and Poitou attacks on Jewish communities", location:"Western France",
    story:"Crusading violence in western France targeted Jewish communities in Anjou and Poitou. Medieval sources describe killings and forced conversion pressures.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Massacre / crusading violence",Evidence:"Documented in medieval scholarship; totals vary"},
    sourceStatus:"Documented in medieval scholarship; totals vary",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1255, depth:13440, title:"Lincoln blood-libel case", location:"Lincoln, England",
    story:"After the death of a Christian boy known as Little Saint Hugh, Jews were falsely accused of ritual murder. Eighteen Jews were executed following proceedings encouraged by the crown.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Blood libel / judicial persecution",Evidence:"High; accusation itself was false"},
    sourceStatus:"High; accusation itself was false",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1286, depth:13610, title:"Munich blood-libel persecution", location:"Munich, Bavaria",
    story:"A blood-libel accusation in Munich became part of the expanding medieval pattern in which false ritual-murder claims exposed Jewish communities to persecution and violence.",
    context:"This marker distinguishes documented persecution from the false accusations used to justify it.",
    aftermath:"The event contributed to the wider development of anti-Jewish restrictions, expulsions or recurring conspiracy myths in medieval Europe.",
    stats:{Type:"Medieval persecution",Evidence:"The medieval accusation is documented; the ritual-murder allegation was false."},
    sourceStatus:"The medieval accusation is documented; the ritual-murder allegation was false.",
    sources:[{label:"USHMM — Blood Libel",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1290, depth:13780, title:"Expulsion of Jews from England", location:"England",
    story:"Edward I ordered the expulsion of Jews from England in 1290 after decades of discriminatory taxation, restrictions and violence. Jewish communal life in England was formally ended for centuries.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"State expulsion / persecution",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.english-heritage.org.uk/learn/story-of-england/medieval/religion/"}]
  },
  {
    year:1298, depth:13950, title:"Rintfleisch massacres", location:"Franconia and Bavaria",
    story:"Anti-Jewish massacres spread through numerous German communities under the Rintfleisch movement.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre wave",Evidence:"High; totals vary"},
    sourceStatus:"High; totals vary",
    sources:[{label:"Source / further reading",url:"https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/genocidal-massacres-of-jews-in-medieval-western-europe-10961392/00724C8FEFEDF90A56EE4CF62E2CB536"}]
  },
  {
    year:1320, depth:14120, title:"Shepherds' Crusade attacks", location:"France and northern Iberia",
    story:"Bands associated with the Shepherds' Crusade attacked Jewish communities across parts of France and northern Iberia.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre wave",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/genocidal-massacres-of-jews-in-medieval-western-europe-10961392/00724C8FEFEDF90A56EE4CF62E2CB536"}]
  },
  {
    year:1336, depth:14290, title:"Armleder massacres", location:"German lands",
    story:"Armed bands attacked Jewish communities across parts of the German lands during the 1330s.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre wave",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/genocidal-massacres-of-jews-in-medieval-western-europe-10961392/00724C8FEFEDF90A56EE4CF62E2CB536"}]
  },
  {
    year:1348, depth:14460, title:"Black Death massacres", location:"Central and Western Europe",
    story:"Jews were falsely accused of causing the plague by poisoning wells, triggering massacres and destruction of communities across Europe.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre / persecution",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1349, depth:14630, title:"Strasbourg massacre during the Black Death", location:"Strasbourg, Holy Roman Empire",
    story:"During Black Death persecutions, Strasbourg authorities and citizens burned a large number of Jews after false accusations that Jews had poisoned wells and caused the plague.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Massacre / persecution",Evidence:"Very high for massacre; exact number varies"},
    sourceStatus:"Very high for massacre; exact number varies",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1391, depth:14800, title:"Anti-Jewish massacres in Iberia", location:"Castile and Aragon",
    story:"Urban violence swept Jewish communities in Spain, killing Jews and driving many others into forced conversion.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre / forced conversion",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/genocidal-massacres-of-jews-in-medieval-western-europe-10961392/00724C8FEFEDF90A56EE4CF62E2CB536"}]
  },
  {
    year:1421, depth:14970, title:"Vienna Gesera", location:"Duchy of Austria",
    story:"Austrian Jews were arrested, dispossessed, expelled or executed during the Vienna Gesera.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Persecution / executions / expulsion",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.jewishvirtuallibrary.org/the-vienna-gesera"}]
  },
  {
    year:1475, depth:15140, title:"Trent blood-libel persecution", location:"Trent, Prince-Bishopric of Trent",
    story:"After a Christian child disappeared, local Jews were accused of ritual murder, tortured and executed. The ritual-murder allegation was false and became one of Europe's most influential blood libels.",
    context:"This entry distinguishes the securely attested core event from later narrative details where the evidence requires caution.",
    aftermath:"Consequences and casualty figures are presented conservatively; exact totals are omitted where surviving sources do not support confidence.",
    stats:{Type:"Blood libel / executions",Evidence:"High; ritual-murder claim false"},
    sourceStatus:"High; ritual-murder claim false",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1478, depth:15310, title:"Spanish Inquisition begins", location:"Spain",
    story:"The Spanish Inquisition targeted alleged heresy, including converted Jews accused of secretly practicing Judaism; torture and executions followed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"State persecution / executions",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism"}]
  },
  {
    year:1492, depth:15480, title:"Expulsion of Jews from Spain", location:"Spain",
    story:"The Alhambra Decree ordered practicing Jews to convert or leave Spain, producing mass displacement and severe hardship.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Expulsion / persecution",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Spanish-Inquisition"}]
  },
  {
    year:1497, depth:15650, title:"Forced conversion of Jews in Portugal", location:"Kingdom of Portugal",
    story:"After many Jews expelled from Spain entered Portugal, King Manuel I ordered Jews to leave his kingdom. In practice, authorities prevented most from departing and coerced mass baptism in 1497, creating a large population of New Christians.",
    context:"This event is presented within its political and social setting and distinguishes documented violence from disputed casualty figures or false accusations.",
    aftermath:"Its consequences affected Jewish security, migration, legal status or communal organization in the early modern period.",
    stats:{Type:"Early modern persecution / communal violence",Evidence:"State policy and forced conversion are well documented; estimates of the affected population vary."},
    sourceStatus:"State policy and forced conversion are well documented; estimates of the affected population vary.",
    sources:[{label:"National Library of Israel — Spanish expulsion and Portugal",url:"https://www.nli.org.il/en/discover/judaism/jewish-history/spain-jews-expulsion"}]
  },
  {
    year:1510, depth:15820, title:"Brandenburg host-desecration persecution", location:"Brandenburg, Holy Roman Empire",
    story:"Jews in Brandenburg were accused in a host-desecration case, leading to executions and expulsion. Such accusations falsely alleged that Jews abused consecrated Christian communion wafers and repeatedly served as triggers for persecution.",
    context:"This event is presented within its political and social setting and distinguishes documented violence from disputed casualty figures or false accusations.",
    aftermath:"Its consequences affected Jewish security, migration, legal status or communal organization in the early modern period.",
    stats:{Type:"Early modern persecution / communal violence",Evidence:"The prosecution and executions are historical; the supernatural host-desecration accusation was a religious libel."},
    sourceStatus:"The prosecution and executions are historical; the supernatural host-desecration accusation was a religious libel.",
    sources:[{label:"USHMM — Antisemitism in history",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400?series=30"}]
  },
  {
    year:1648, depth:15990, title:"Khmelnytsky uprising massacres", location:"Polish–Lithuanian Commonwealth / Ukraine",
    story:"During the Khmelnytsky uprising, Jewish communities were among populations subjected to widespread killing and destruction. Historical death estimates vary greatly.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"War / massacre wave",Evidence:"High; totals disputed"},
    sourceStatus:"High; totals disputed",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Khmelnytsky-Insurrection"}]
  },
  {
    year:1648, depth:16160, title:"Nemyriv massacre during the Khmelnytsky uprising", location:"Nemyriv, Polish-Lithuanian Commonwealth",
    story:"During the Khmelnytsky uprising, Cossack and allied forces captured Nemyriv and killed many Jewish inhabitants as well as other opponents. Jewish chronicles remembered the event as one of the great catastrophes of 1648.",
    context:"This event is presented within its political and social setting and distinguishes documented violence from disputed casualty figures or false accusations.",
    aftermath:"Its consequences affected Jewish security, migration, legal status or communal organization in the early modern period.",
    stats:{Type:"Early modern persecution / communal violence",Evidence:"The massacre is well attested in contemporary and near-contemporary chronicles; exact casualty totals are disputed."},
    sourceStatus:"The massacre is well attested in contemporary and near-contemporary chronicles; exact casualty totals are disputed.",
    sources:[{label:"YIVO Encyclopedia — Khmelnytsky uprising",url:"https://yivoencyclopedia.org/article.aspx/Khmelnytsky_Uprising"}]
  },
  {
    year:1648, depth:16330, title:"Tulchyn massacre during the Khmelnytsky uprising", location:"Tulchyn, Polish-Lithuanian Commonwealth",
    story:"At Tulchyn, Jews and Polish defenders initially resisted besieging forces. Contemporary Jewish accounts describe a betrayal followed by mass killing. The episode forms part of the wider 1648–49 devastation of Jewish communities.",
    context:"This event is presented within its political and social setting and distinguishes documented violence from disputed casualty figures or false accusations.",
    aftermath:"Its consequences affected Jewish security, migration, legal status or communal organization in the early modern period.",
    stats:{Type:"Early modern persecution / communal violence",Evidence:"The event is documented in Jewish chronicles; precise numbers and some narrative details remain uncertain."},
    sourceStatus:"The event is documented in Jewish chronicles; precise numbers and some narrative details remain uncertain.",
    sources:[{label:"YIVO Encyclopedia — Khmelnytsky uprising",url:"https://yivoencyclopedia.org/article.aspx/Khmelnytsky_Uprising"}]
  },
  {
    year:1768, depth:16500, title:"Uman massacre during the Koliivshchyna uprising", location:"Uman, Polish-Lithuanian Commonwealth",
    story:"Haidamak rebels captured Uman during the Koliivshchyna uprising and killed large numbers of Jews, Polish nobles, clergy and other inhabitants. Later accounts give widely varying casualty figures, so the scale should be described without treating one traditional number as certain.",
    context:"This event is presented within its political and social setting and distinguishes documented violence from disputed casualty figures or false accusations.",
    aftermath:"Its consequences affected Jewish security, migration, legal status or communal organization in the early modern period.",
    stats:{Type:"Early modern persecution / communal violence",Evidence:"The massacre is historical; casualty estimates vary widely in later sources."},
    sourceStatus:"The massacre is historical; casualty estimates vary widely in later sources.",
    sources:[{label:"Encyclopaedia Britannica — Uman",url:"https://www.britannica.com/place/Uman"}]
  },
  {
    year:1819, depth:16670, title:"Hep-Hep riots", location:"German states",
    story:"Anti-Jewish riots beginning in Würzburg spread through several German cities during a period of debate over Jewish emancipation. Crowds attacked Jewish homes, businesses and individuals while shouting the cry from which the riots took their name.",
    context:"This event is presented within its political and social setting and distinguishes documented violence from disputed casualty figures or false accusations.",
    aftermath:"Its consequences affected Jewish security, migration, legal status or communal organization in the early modern period.",
    stats:{Type:"Early modern persecution / communal violence",Evidence:"Well documented through contemporary records; motives combined anti-Jewish prejudice with political and economic tensions."},
    sourceStatus:"Well documented through contemporary records; motives combined anti-Jewish prejudice with political and economic tensions.",
    sources:[{label:"Encyclopaedia Britannica — antisemitism",url:"https://www.britannica.com/topic/antisemitism"}]
  },
  {
    year:1821, depth:16840, title:"Odessa anti-Jewish riot", location:"Odessa, Russian Empire",
    story:"Anti-Jewish rioting in Odessa is commonly identified as the first incident to be labeled a pogrom.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom / riot",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1834, depth:17010, title:"Safed looting and attacks on the Jewish community", location:"Safed, Ottoman Palestine",
    story:"During regional upheaval associated with the 1834 revolt in Palestine, Safed's Jewish community was attacked and extensively looted. Homes and synagogues were damaged and residents were assaulted and displaced.",
    context:"This event is presented within its political and social setting and distinguishes documented violence from disputed casualty figures or false accusations.",
    aftermath:"Its consequences affected Jewish security, migration, legal status or communal organization in the early modern period.",
    stats:{Type:"Early modern persecution / communal violence",Evidence:"The attacks and looting are documented; accounts differ on details and casualty totals."},
    sourceStatus:"The attacks and looting are documented; accounts differ on details and casualty totals.",
    sources:[{label:"National Library of Israel — Safed history",url:"https://www.nli.org.il/en/discover/israel/cities/safed"}]
  },
  {
    year:1840, depth:17180, title:"Damascus Affair", location:"Damascus, Ottoman Syria",
    story:"After a Catholic friar and his servant disappeared, members of Damascus's Jewish community were falsely accused of ritual murder. Several were imprisoned and tortured. International Jewish advocacy helped secure their release and made the affair a major turning point in modern Jewish political organization.",
    context:"This event is presented within its political and social setting and distinguishes documented violence from disputed casualty figures or false accusations.",
    aftermath:"Its consequences affected Jewish security, migration, legal status or communal organization in the early modern period.",
    stats:{Type:"Early modern persecution / communal violence",Evidence:"The arrests and torture are well documented; the ritual-murder accusation was false."},
    sourceStatus:"The arrests and torture are well documented; the ritual-murder accusation was false.",
    sources:[{label:"Encyclopaedia Britannica — Damascus Affair",url:"https://www.britannica.com/event/Damascus-Affair"}]
  },
  {
    year:1859, depth:17350, title:"Odessa anti-Jewish riot of 1859", location:"Odessa, Russian Empire",
    story:"Anti-Jewish violence broke out in Odessa around Easter. Greek sailors and local Greeks were prominent among the attackers. Religious hostility mixed with growing economic rivalry in the Black Sea port.",
    context:"This marker distinguishes the specific local or political setting from other episodes of anti-Jewish violence and avoids assuming that all pogroms had the same perpetrators, causes or government role.",
    aftermath:"The violence contributed to Jewish self-defense, political organization, migration and changing attitudes toward security and emancipation.",
    stats:{Type:"Pogrom / persecution",Evidence:"Well documented; historians emphasize local Greek-Jewish tensions and economic competition rather than treating it as identical to the later imperial pogrom waves."},
    sourceStatus:"Well documented; historians emphasize local Greek-Jewish tensions and economic competition rather than treating it as identical to the later imperial pogrom waves.",
    sources:[{label:"YIVO Encyclopedia — Odessa",url:"https://encyclopedia.yivo.org/article.aspx/odessa"}]
  },
  {
    year:1871, depth:17520, title:"Odessa pogrom of 1871", location:"Odessa, Russian Empire",
    story:"Several days of anti-Jewish violence in Odessa damaged Jewish homes and businesses. Greeks participated prominently, but Russians also joined the attacks. Historians regard 1871 as an important precursor to the broader pogrom era that followed.",
    context:"This marker distinguishes the specific local or political setting from other episodes of anti-Jewish violence and avoids assuming that all pogroms had the same perpetrators, causes or government role.",
    aftermath:"The violence contributed to Jewish self-defense, political organization, migration and changing attitudes toward security and emancipation.",
    stats:{Type:"Pogrom / persecution",Evidence:"Well documented in official reports and historical scholarship; motivations included religious, ethnic and economic tensions."},
    sourceStatus:"Well documented in official reports and historical scholarship; motivations included religious, ethnic and economic tensions.",
    sources:[{label:"YIVO Encyclopedia — Pogroms",url:"https://encyclopedia.yivo.org/article.aspx/pogroms"}]
  },
  {
    year:1881, depth:17690, title:"Russian Empire pogrom wave", location:"Russian Empire",
    story:"After Tsar Alexander II's assassination, extensive anti-Jewish riots swept southern and western parts of the Russian Empire from 1881 to 1884.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom wave",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1882, depth:17860, title:"May Laws intensify restrictions on Russian Jews", location:"Russian Empire",
    story:"In the aftermath of the 1881 pogrom wave, the imperial government imposed temporary regulations known as the May Laws, restricting where many Jews could settle and conduct business. They were discriminatory state measures rather than a violent attack, but they form part of the political aftermath of the pogroms.",
    context:"This marker distinguishes the specific local or political setting from other episodes of anti-Jewish violence and avoids assuming that all pogroms had the same perpetrators, causes or government role.",
    aftermath:"The violence contributed to Jewish self-defense, political organization, migration and changing attitudes toward security and emancipation.",
    stats:{Type:"Pogrom / persecution",Evidence:"Imperial legislation is securely documented."},
    sourceStatus:"Imperial legislation is securely documented.",
    sources:[{label:"YIVO Encyclopedia — Pogroms",url:"https://encyclopedia.yivo.org/article.aspx/pogroms"}]
  },
  {
    year:1903, depth:18030, title:"Kishinev pogrom", location:"Kishinev, Russian Empire",
    story:"Three days of anti-Jewish violence killed nearly 50 Jews, wounded hundreds, and destroyed or looted hundreds of homes and businesses.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/blood-libel"}]
  },
  {
    year:1905, depth:18200, title:"Odessa pogrom", location:"Odessa, Russian Empire",
    story:"During revolutionary unrest, Odessa experienced one of the deadliest pogroms of 1905, with extensive killing, injury and destruction.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom",Evidence:"High; casualty estimates vary"},
    sourceStatus:"High; casualty estimates vary",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1918, depth:18370, title:"Civil War pogroms in Ukraine and neighboring regions", location:"Ukraine / Belarus / Galicia",
    story:"During the post-1917 civil wars, forces from several political and military camps carried out pogroms that killed tens of thousands of Jews.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom wave",Evidence:"Very high; aggregate totals vary"},
    sourceStatus:"Very high; aggregate totals vary",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1919, depth:18540, title:"Proskurov pogrom", location:"Proskurov, Ukraine",
    story:"During the Ukrainian revolutionary and civil-war period, troops killed Jewish civilians in Proskurov in one of the most notorious pogroms of 1919. It occurred amid a much larger wave of anti-Jewish mass violence involving multiple armed forces and political factions.",
    context:"This marker distinguishes the specific local or political setting from other episodes of anti-Jewish violence and avoids assuming that all pogroms had the same perpetrators, causes or government role.",
    aftermath:"The violence contributed to Jewish self-defense, political organization, migration and changing attitudes toward security and emancipation.",
    stats:{Type:"Pogrom / persecution",Evidence:"The massacre is well documented; casualty estimates differ among sources."},
    sourceStatus:"The massacre is well documented; casualty estimates differ among sources.",
    sources:[{label:"YIVO Encyclopedia — Pogroms",url:"https://encyclopedia.yivo.org/article.aspx/pogroms"}]
  },
  {
    year:1920, depth:18710, title:"Nebi Musa riots", location:"Jerusalem",
    story:"Violence during the Nebi Musa festival included attacks on Jerusalem's Jewish community amid escalating Arab–Jewish political tensions under the British Mandate.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Communal riot",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/World-War-I-and-after"}]
  },
  {
    year:1921, depth:18880, title:"Jaffa riots", location:"Jaffa and surrounding area",
    story:"Arab–Jewish violence in Jaffa and nearby areas killed and injured members of both communities and deepened Mandate-era tensions.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Communal violence",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/World-War-I-and-after"}]
  },
  {
    year:1929, depth:19050, title:"Hebron massacre and 1929 Palestine riots", location:"Hebron and Mandatory Palestine",
    story:"During widespread 1929 violence, Arab attackers killed 67 Jews in Hebron; Jews were also attacked elsewhere, while Arabs were killed in clashes and by British forces.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre / communal violence",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Hebron-city-West-Bank"}]
  },
  {
    year:1929, depth:19220, title:"Safed massacre during the 1929 riots", location:"Safed, Mandatory Palestine",
    story:"During the 1929 Palestine disturbances, Arab attackers killed Jewish residents of Safed and burned and looted Jewish homes.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Massacre / communal violence",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/World-War-I-and-after"}]
  },
  {
    year:1933, depth:19390, title:"Nazi seizure of power begins systematic persecution of German Jews", location:"Germany",
    story:"After Adolf Hitler became chancellor on January 30, 1933, the Nazi regime rapidly transformed antisemitic ideology into government policy. Jews faced intimidation, assaults, exclusion from public institutions and an expanding system of discriminatory laws.",
    context:"This marker traces the escalation from antisemitic ideology to state policy, legal exclusion, economic dispossession and increasingly open violence. It is separated from later mass murder so visitors can see how persecution developed step by step.",
    aftermath:"These measures progressively isolated, impoverished and endangered Jewish communities and helped create the institutional framework for the more radical persecution and mass murder that followed during World War II.",
    stats:{Type:"State persecution",Evidence:"Extensively documented in German records, contemporary reporting and Holocaust archives."},
    sourceStatus:"Extensively documented in German records, contemporary reporting and Holocaust archives.",
    sources:[{label:"USHMM — Prewar Nazi Germany, 1933–1938",url:"https://encyclopedia.ushmm.org/content/en/timeline-group/holocaust/1933-1938"}]
  },
  {
    year:1933, depth:19560, title:"Nationwide Nazi boycott of Jewish businesses", location:"Germany",
    story:"On April 1, 1933, the Nazi Party organized a nationwide boycott of Jewish-owned businesses and Jewish professionals. SA members stood outside shops and offices to intimidate customers. Although the formal boycott lasted one day, it marked the beginning of a national campaign to remove Jews from German economic life.",
    context:"This marker traces the escalation from antisemitic ideology to state policy, legal exclusion, economic dispossession and increasingly open violence. It is separated from later mass murder so visitors can see how persecution developed step by step.",
    aftermath:"These measures progressively isolated, impoverished and endangered Jewish communities and helped create the institutional framework for the more radical persecution and mass murder that followed during World War II.",
    stats:{Type:"State-organized persecution",Evidence:"Extensively documented; the boycott was organized by Nazi Party authorities."},
    sourceStatus:"Extensively documented; the boycott was organized by Nazi Party authorities.",
    sources:[{label:"USHMM — Boycott of Jewish Businesses",url:"https://encyclopedia.ushmm.org/content/en/article/boycott-of-jewish-businesses"}]
  },
  {
    year:1933, depth:19730, title:"Civil Service Law excludes Jews from government employment", location:"Germany",
    story:"The April 7 Law for the Restoration of the Professional Civil Service removed many Jews and political opponents from government employment. It was one of the first major legal steps by the Nazi regime to exclude Jews systematically from German public life.",
    context:"This marker traces the escalation from antisemitic ideology to state policy, legal exclusion, economic dispossession and increasingly open violence. It is separated from later mass murder so visitors can see how persecution developed step by step.",
    aftermath:"These measures progressively isolated, impoverished and endangered Jewish communities and helped create the institutional framework for the more radical persecution and mass murder that followed during World War II.",
    stats:{Type:"Discriminatory state law",Evidence:"The legislation and its implementation are directly documented."},
    sourceStatus:"The legislation and its implementation are directly documented.",
    sources:[{label:"USHMM — Prewar Nazi Germany, 1933–1938",url:"https://encyclopedia.ushmm.org/content/en/timeline-group/holocaust/1933-1938"}]
  },
  {
    year:1935, depth:19900, title:"Nuremberg Laws strip Jews of rights and impose racial definitions", location:"Nuremberg / Nazi Germany",
    story:"The Nuremberg Laws deprived German Jews of full citizenship and prohibited marriage and sexual relations between Jews and people classified as German or related blood. Nazi authorities defined Jewish identity through racialized ancestry rather than personal religious belief.",
    context:"This marker traces the escalation from antisemitic ideology to state policy, legal exclusion, economic dispossession and increasingly open violence. It is separated from later mass murder so visitors can see how persecution developed step by step.",
    aftermath:"These measures progressively isolated, impoverished and endangered Jewish communities and helped create the institutional framework for the more radical persecution and mass murder that followed during World War II.",
    stats:{Type:"Racial legislation / persecution",Evidence:"Extensively documented Nazi legislation and administrative practice."},
    sourceStatus:"Extensively documented Nazi legislation and administrative practice.",
    sources:[{label:"USHMM — Nazi Antisemitism",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-nazi-antisemitism?series=30"}]
  },
  {
    year:1936, depth:20070, title:"1936–1939 Arab Revolt: attacks on Jewish civilians", location:"Mandatory Palestine",
    story:"The Arab Revolt against British rule and mass Jewish immigration included attacks on Jewish civilians and communities, alongside British counterinsurgency and Jewish armed responses.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Insurgency / communal violence",Evidence:"Very high; individual incidents require separate sourcing"},
    sourceStatus:"Very high; individual incidents require separate sourcing",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/The-Arab-Revolt"}]
  },
  {
    year:1937, depth:20240, title:"Escalating exclusion and Aryanization of Jewish economic life", location:"Germany",
    story:"From 1937 into 1939, Nazi policy increasingly forced Jews out of professions and businesses and transferred Jewish-owned property to non-Jewish ownership under coercive conditions. This process, commonly called Aryanization, impoverished Jewish families and further isolated them from German society.",
    context:"This marker traces the escalation from antisemitic ideology to state policy, legal exclusion, economic dispossession and increasingly open violence. It is separated from later mass murder so visitors can see how persecution developed step by step.",
    aftermath:"These measures progressively isolated, impoverished and endangered Jewish communities and helped create the institutional framework for the more radical persecution and mass murder that followed during World War II.",
    stats:{Type:"Economic persecution / dispossession",Evidence:"Extensively documented through Nazi decrees, property records and Holocaust scholarship."},
    sourceStatus:"Extensively documented through Nazi decrees, property records and Holocaust scholarship.",
    sources:[{label:"USHMM — From Citizens to Outcasts",url:"https://www.ushmm.org/learn/holocaust/from-citizens-to-outcasts-1933-1938"}]
  },
  {
    year:1938, depth:20410, title:"Kristallnacht / November Pogrom", location:"Germany and Austria",
    story:"Nazi leaders unleashed nationwide anti-Jewish violence: synagogues burned, businesses and homes were destroyed, Jews were killed and about 26,000 Jewish men were imprisoned in concentration camps.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"State-sponsored pogrom",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/kristallnacht"}]
  },
  {
    year:1939, depth:20580, title:"German invasion of Poland and persecution of Polish Jews", location:"Occupied Poland",
    story:"Germany invaded Poland on September 1, 1939. German forces and occupation authorities immediately subjected Jews to humiliation, forced labor, robbery, displacement and violence. Poland's very large Jewish population was brought under Nazi rule, marking a major expansion of the persecution begun in Germany.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"War / occupation / persecution",Evidence:"Extensively documented in German records, eyewitness testimony and Holocaust archives."},
    sourceStatus:"Extensively documented in German records, eyewitness testimony and Holocaust archives.",
    sources:[{label:"USHMM — Invasion of Poland, Fall 1939",url:"https://encyclopedia.ushmm.org/content/en/article/invasion-of-poland-fall-1939"}]
  },
  {
    year:1940, depth:20750, title:"Nazi ghettos isolate Jewish communities in occupied Poland", location:"German-occupied Poland",
    story:"German authorities forced Jews into sealed or restricted urban districts known as ghettos. Ghettos such as Łódź and Warsaw became sites of extreme overcrowding, hunger, disease and forced labor. They later served as collection points for deportation to killing centers.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Forced confinement / persecution",Evidence:"Extensively documented through German administrative records, photographs, diaries and survivor testimony."},
    sourceStatus:"Extensively documented through German administrative records, photographs, diaries and survivor testimony.",
    sources:[{label:"USHMM — Ghettos",url:"https://encyclopedia.ushmm.org/content/en/article/ghettos"}]
  },
  {
    year:1941, depth:20920, title:"Farhud", location:"Baghdad, Iraq",
    story:"Anti-Jewish violence in Baghdad on June 1–2, 1941 killed and injured Jews and involved widespread looting and destruction.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Pogrom / massacre",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/the-farhud"}]
  },
  {
    year:1941, depth:21090, title:"Iași pogrom", location:"Iași, Romania",
    story:"Romanian authorities and military units, assisted at times by German soldiers, murdered at least 8,000 Jews during the June 1941 pogrom and related death transports.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Pogrom / mass murder",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1941, depth:21260, title:"Lviv pogrom", location:"Lviv, German-occupied Ukraine",
    story:"Following the German occupation of Lviv, German forces, Ukrainian nationalist activists, militia members and local civilians participated in anti-Jewish humiliation, beatings and killings.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Pogrom / mass violence",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/the-lwow-pogrom-of-july-1-1941"}]
  },
  {
    year:1941, depth:21430, title:"Jedwabne massacre", location:"Jedwabne, German-occupied Poland",
    story:"Hundreds of Jewish residents of Jedwabne were murdered by Polish neighbors in July 1941 in the presence of German police; aspects of German instigation remain historically examined.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Massacre / pogrom",Evidence:"Very high; aspects debated"},
    sourceStatus:"Very high; aspects debated",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1941, depth:21600, title:"Ponary mass killings begin", location:"Near Vilna (Vilnius), Lithuania",
    story:"German SS and police units with Lithuanian collaborators murdered Jews from Vilna and surrounding areas at Ponary. Tens of thousands of Jews were ultimately killed at the site.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Mass shooting / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://wwv.yadvashem.org/yv/en/exhibitions/music/vilna-ghetto.asp"}]
  },
  {
    year:1941, depth:21770, title:"Chełmno killing center begins mass murder", location:"Chełmno, German-occupied Poland",
    story:"Mass murder began at Chełmno in December 1941 using gas vans. Nazi Germany murdered at least 152,000 Jews there.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/chelmno"}]
  },
  {
    year:1941, depth:21940, title:"Holocaust mass shootings and extermination", location:"German-occupied Europe",
    story:"Nazi Germany and its allies and collaborators systematically murdered approximately six million European Jews through shootings, killing centers, ghettos, starvation, forced labor and other methods.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust"}]
  },
  {
    year:1941, depth:22110, title:"Rumbula massacre", location:"Near Riga, German-occupied Latvia",
    story:"German SS and police and Latvian auxiliaries murdered approximately 25,000 Jews from the Riga ghetto and about 1,000 German Jews in the Rumbula forest in late 1941.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Mass shooting / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/riga"}]
  },
  {
    year:1941, depth:22280, title:"Babi Yar massacre", location:"Kyiv, German-occupied Ukraine",
    story:"On September 29–30, 1941, Einsatzgruppe C personnel and collaborators murdered 33,771 Jewish men, women and children at the Babi Yar ravine.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Mass shooting / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://wwv.yadvashem.org/yv/en/exhibitions/communities/kiev/babi-yar.asp"}]
  },
  {
    year:1941, depth:22450, title:"Operation Barbarossa and Einsatzgruppen mass shootings", location:"German-occupied Soviet territories",
    story:"After Germany invaded the Soviet Union in June 1941, mobile killing units known as Einsatzgruppen, supported by other German forces and local auxiliaries in various locations, carried out mass shootings of Jews and other targeted groups. Entire Jewish communities were murdered near their homes.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Genocide / mass shootings",Evidence:"Extensively documented by German operational reports, wartime records, mass graves and survivor and witness testimony."},
    sourceStatus:"Extensively documented by German operational reports, wartime records, mass graves and survivor and witness testimony.",
    sources:[{label:"USHMM — Einsatzgruppen",url:"https://encyclopedia.ushmm.org/content/en/article/einsatzgruppen"}]
  },
  {
    year:1941, depth:22620, title:"Kamianets-Podilskyi massacre", location:"Kamianets-Podilskyi, occupied Soviet Ukraine",
    story:"In late August 1941, German SS and police forces, with participation by forces under German command, murdered tens of thousands of Jews near Kamianets-Podilskyi. Many victims had previously been deported from Hungarian-controlled territory; local Ukrainian Jews were also killed.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Genocide / mass shooting",Evidence:"Extensively documented; approximately 23,600 Jews were reported murdered in the action."},
    sourceStatus:"Extensively documented; approximately 23,600 Jews were reported murdered in the action.",
    sources:[{label:"USHMM — Kamianets-Podilskyi",url:"https://encyclopedia.ushmm.org/content/en/article/kamenets-podolsk"}]
  },
  {
    year:1941, depth:22790, title:"Odessa massacre under Romanian occupation", location:"Odessa and surrounding region, occupied Ukraine",
    story:"After Romanian and German forces captured Odessa, Romanian authorities carried out mass reprisals against Jews following an explosion at Romanian military headquarters. Jews were shot, hanged, burned in buildings and deported into killing sites and camps in Romanian-controlled Transnistria.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Genocide / massacre",Evidence:"The Romanian role and mass murder are extensively documented; casualty totals vary depending on the geographic and chronological scope counted."},
    sourceStatus:"The Romanian role and mass murder are extensively documented; casualty totals vary depending on the geographic and chronological scope counted.",
    sources:[{label:"USHMM — Odessa",url:"https://encyclopedia.ushmm.org/content/en/article/odessa"}]
  },
  {
    year:1942, depth:22960, title:"Belzec killing center", location:"Bełżec, German-occupied Poland",
    story:"Belzec became an Operation Reinhard killing center. Approximately 435,000 Jews were murdered there, overwhelmingly in gas chambers.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/belzec"}]
  },
  {
    year:1942, depth:23130, title:"Sobibor killing center", location:"Sobibór, German-occupied Poland",
    story:"Sobibor was established as an Operation Reinhard killing center. At least 167,000 Jews were murdered there.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/sobibor"}]
  },
  {
    year:1942, depth:23300, title:"Treblinka II killing center", location:"Treblinka, German-occupied Poland",
    story:"Treblinka II operated as an Operation Reinhard killing center. Nazi personnel murdered an estimated 925,000 Jews there.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/treblinka"}]
  },
  {
    year:1942, depth:23470, title:"Auschwitz-Birkenau mass murder of Jews", location:"Auschwitz-Birkenau, German-occupied Poland",
    story:"Auschwitz-Birkenau became the largest Nazi concentration and killing complex. Approximately one million Jews were murdered in the Auschwitz camp complex.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Killing center / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/auschwitz"}]
  },
  {
    year:1942, depth:23640, title:"Great Action: deportation of Warsaw Jews to Treblinka", location:"Warsaw, German-occupied Poland",
    story:"From July to September 1942, German authorities deported about 265,000 Jews from the Warsaw ghetto to Treblinka and killed approximately 35,000 Jews in the ghetto during the operation.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Deportation / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/warsaw-ghetto-uprising"}]
  },
  {
    year:1942, depth:23810, title:"Operation Reinhard", location:"German-occupied Poland",
    story:"Operation Reinhard was the Nazi program to murder the Jews of the General Government in occupied Poland. Its principal killing centers were Belzec, Sobibor and Treblinka. Deportations and mass shootings accompanied the destruction of Jewish communities throughout the region.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Genocide / extermination program",Evidence:"Extensively documented. Individual killing-center markers elsewhere in this timeline provide more specific victim estimates."},
    sourceStatus:"Extensively documented. Individual killing-center markers elsewhere in this timeline provide more specific victim estimates.",
    sources:[{label:"USHMM — Operation Reinhard",url:"https://encyclopedia.ushmm.org/content/en/article/operation-reinhard-einsatz-reinhard"}]
  },
  {
    year:1943, depth:23980, title:"Warsaw Ghetto Uprising", location:"Warsaw, German-occupied Poland",
    story:"Jewish fighters resisted the final German deportation operation beginning April 19, 1943. At least 7,000 Jews died fighting or in hiding as German forces destroyed the ghetto.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Jewish armed resistance / suppression",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/warsaw-ghetto-uprising"}]
  },
  {
    year:1943, depth:24150, title:"Operation Harvest Festival", location:"Lublin district, German-occupied Poland",
    story:"German SS and police murdered tens of thousands of Jewish forced laborers in the Lublin district during Operation Harvest Festival in November 1943.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Mass shooting / genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/warsaw-ghetto-uprising"}]
  },
  {
    year:1943, depth:24320, title:"Białystok Ghetto Uprising", location:"Białystok, occupied Poland",
    story:"When German forces began the final liquidation of the Białystok ghetto in August 1943, Jewish underground fighters launched an armed uprising. The resistance was overwhelmed, and most remaining Jews were deported to killing centers and camps.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Jewish resistance / ghetto liquidation",Evidence:"Well documented through German records, underground accounts and survivor testimony."},
    sourceStatus:"Well documented through German records, underground accounts and survivor testimony.",
    sources:[{label:"USHMM — Białystok",url:"https://encyclopedia.ushmm.org/content/en/article/bialystok"}]
  },
  {
    year:1943, depth:24490, title:"Sobibor uprising and mass escape", location:"Sobibor killing center, occupied Poland",
    story:"On October 14, 1943, Jewish prisoners at Sobibor organized an uprising, killed several SS personnel and guards, and attempted a mass escape. Hundreds broke out of the camp; a smaller number survived the war. The revolt contributed to the German decision to dismantle the killing center.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Jewish resistance / killing-center uprising",Evidence:"Extensively documented through survivor testimony, German records and postwar investigations."},
    sourceStatus:"Extensively documented through survivor testimony, German records and postwar investigations.",
    sources:[{label:"USHMM — Sobibor Uprising",url:"https://encyclopedia.ushmm.org/content/en/article/sobibor-uprising"}]
  },
  {
    year:1943, depth:24660, title:"Treblinka prisoner uprising", location:"Treblinka II, occupied Poland",
    story:"On August 2, 1943, prisoners at the Treblinka killing center seized weapons, set parts of the camp on fire and attempted a mass escape. Hundreds escaped the camp perimeter, although many were hunted down and killed; a smaller number survived the war.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"Jewish resistance / killing-center uprising",Evidence:"The uprising is extensively documented through survivor testimony, German records and postwar research."},
    sourceStatus:"The uprising is extensively documented through survivor testimony, German records and postwar research.",
    sources:[{label:"USHMM — Treblinka uprising",url:"https://encyclopedia.ushmm.org/content/en/article/treblinka"}]
  },
  {
    year:1944, depth:24830, title:"Deportation of Hungarian Jews to Auschwitz-Birkenau", location:"Hungary → Auschwitz-Birkenau",
    story:"After Germany occupied Hungary in March 1944, Hungarian authorities working with German SS officials rapidly concentrated and deported Jews. Between May and July, approximately 440,000 Jews were deported, most to Auschwitz-Birkenau, where the majority were murdered.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Genocide / deportation",Evidence:"Extensively documented through deportation records, German and Hungarian documentation, photographs and survivor testimony."},
    sourceStatus:"Extensively documented through deportation records, German and Hungarian documentation, photographs and survivor testimony.",
    sources:[{label:"USHMM — Hungary after German Occupation",url:"https://encyclopedia.ushmm.org/content/en/article/hungary-after-the-german-occupation"}]
  },
  {
    year:1944, depth:25000, title:"Auschwitz Sonderkommando revolt", location:"Auschwitz-Birkenau, occupied Poland",
    story:"On October 7, 1944, Jewish Sonderkommando prisoners at Auschwitz-Birkenau revolted. They attacked SS guards and damaged Crematorium IV using explosives smuggled into the camp by female Jewish prisoners working in a nearby factory. The revolt was suppressed and participants were executed.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Jewish resistance / camp uprising",Evidence:"Extensively documented through camp records and survivor testimony."},
    sourceStatus:"Extensively documented through camp records and survivor testimony.",
    sources:[{label:"USHMM — Jewish Resistance",url:"https://encyclopedia.ushmm.org/content/en/article/jewish-resistance"}]
  },
  {
    year:1944, depth:25170, title:"Liquidation of the Łódź ghetto", location:"Łódź, occupied Poland",
    story:"In 1944 German authorities liquidated the Łódź ghetto, one of the largest and longest-lasting ghettos in occupied Poland. Most remaining Jews were deported to Auschwitz-Birkenau, while earlier deportations had sent tens of thousands to Chełmno.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"Ghetto liquidation / deportation / genocide",Evidence:"The liquidation and deportations are extensively documented in German records, ghetto documentation and survivor testimony."},
    sourceStatus:"The liquidation and deportations are extensively documented in German records, ghetto documentation and survivor testimony.",
    sources:[{label:"USHMM — Łódź",url:"https://encyclopedia.ushmm.org/content/en/article/lodz"}]
  },
  {
    year:1945, depth:25340, title:"Death marches during the collapse of Nazi Germany", location:"Central and Eastern Europe",
    story:"As Allied armies approached concentration camps, SS authorities evacuated prisoners into the German interior. Prisoners, including large numbers of Jews, were forced on marches and transports in brutal winter conditions; guards murdered those unable to continue and many others died from exposure, starvation and exhaustion.",
    context:"This marker is part of the Holocaust chronology. It distinguishes the specific policy, massacre, deportation or act of resistance from broader umbrella events elsewhere in the timeline.",
    aftermath:"Together, these events show the progression from occupation and forced confinement to systematic mass shooting, deportation, extermination, resistance and the lethal evacuation of camps as Nazi Germany collapsed.",
    stats:{Type:"Forced evacuation / mass death",Evidence:"Extensively documented across numerous concentration-camp evacuations; totals vary because many separate marches occurred."},
    sourceStatus:"Extensively documented across numerous concentration-camp evacuations; totals vary because many separate marches occurred.",
    sources:[{label:"USHMM — Death Marches",url:"https://encyclopedia.ushmm.org/content/en/article/death-marches-1"}]
  },
  {
    year:1946, depth:25510, title:"Kielce pogrom", location:"Kielce, Poland",
    story:"A mob, joined by some police and soldiers, killed Jewish Holocaust survivors and other Jews in Kielce; at least 42 Jews were murdered.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Postwar pogrom",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/pogroms"}]
  },
  {
    year:1946, depth:25680, title:"King David Hotel bombing", location:"Jerusalem, British Mandate Palestine",
    story:"On July 22, 1946, the Irgun Jewish underground organization bombed the southern wing of Jerusalem's King David Hotel, which housed British administrative and military offices. Ninety-one people were killed, including Arabs, Britons, Jews and others.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Underground bombing / Mandate conflict",Evidence:"The attack, perpetrators and casualty total are extensively documented. Disputes persist over warnings and British response before the explosion."},
    sourceStatus:"The attack, perpetrators and casualty total are extensively documented. Disputes persist over warnings and British response before the explosion.",
    sources:[{label:"Encyclopaedia Britannica — Irgun",url:"https://www.britannica.com/topic/Irgun-Zvai-Leumi"}]
  },
  {
    year:1947, depth:25850, title:"Fajja bus attacks", location:"Near Petah Tikva, Mandatory Palestine",
    story:"On November 30, 1947, the day after the UN partition vote, Arab gunmen attacked Jewish buses, among the opening incidents of the civil-war phase of the 1947–49 conflict.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Attack on civilian buses",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Palestine/The-1948-war"}]
  },
  {
    year:1947, depth:26020, title:"1947–1949 Palestine war / Arab–Israeli War", location:"Mandatory Palestine / Israel",
    story:"Fighting followed the UN partition vote; after Israel declared independence in May 1948, neighboring Arab armies entered the war. Jewish and Arab civilians and combatants suffered major losses and displacement.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Civil war / interstate war",Evidence:"Very high; narratives and some figures contested"},
    sourceStatus:"Very high; narratives and some figures contested",
    sources:[{label:"Source / further reading",url:"https://history.state.gov/milestones/1945-1952/arab-israeli-war"}]
  },
  {
    year:1947, depth:26190, title:"UN Partition Plan and outbreak of civil war in Mandatory Palestine", location:"British Mandate Palestine",
    story:"On November 29, 1947, the UN General Assembly recommended partitioning Palestine into Arab and Jewish states with an international regime for Jerusalem. Jewish Agency leaders accepted partition as a basis for statehood; Arab leaders rejected it. Fighting between Palestinian Arab and Jewish forces escalated almost immediately.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Political partition / civil war",Evidence:"UN Resolution 181 and the subsequent escalation are extensively documented; interpretations of responsibility, intentions and the plan's fairness remain contested."},
    sourceStatus:"UN Resolution 181 and the subsequent escalation are extensively documented; interpretations of responsibility, intentions and the plan's fairness remain contested.",
    sources:[{label:"United Nations — Resolution 181 (II)",url:"https://www.un.org/unispal/document/auto-insert-185393/"}]
  },
  {
    year:1948, depth:26360, title:"Hadassah medical convoy massacre", location:"Jerusalem",
    story:"An Arab force ambushed a convoy carrying medical personnel and supplies to Hadassah Hospital and Hebrew University on Mount Scopus in April 1948; 78 Jews were killed.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Convoy ambush / massacre",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Jerusalem"}]
  },
  {
    year:1948, depth:26530, title:"Deir Yassin massacre", location:"Deir Yassin, near Jerusalem",
    story:"On April 9, 1948, fighters from the Irgun and Lehi attacked the Palestinian Arab village of Deir Yassin. More than one hundred villagers, including civilians, were killed. The massacre became a major symbol of Palestinian suffering and contributed to fear during the wider 1948 war.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Massacre / civil war",Evidence:"The attack and killing of civilians are firmly documented. Exact casualty totals and some details of the battle have been debated; modern scholarship generally places the dead at roughly 100 to 110."},
    sourceStatus:"The attack and killing of civilians are firmly documented. Exact casualty totals and some details of the battle have been debated; modern scholarship generally places the dead at roughly 100 to 110.",
    sources:[{label:"Encyclopaedia Britannica — Deir Yassin",url:"https://www.britannica.com/place/Deir-Yassin"}]
  },
  {
    year:1948, depth:26700, title:"Kfar Etzion massacre", location:"Kfar Etzion, south of Jerusalem",
    story:"On May 13, 1948, Kfar Etzion fell to Arab Legion and local Arab forces after prolonged fighting. A large number of Jewish defenders and residents were killed after the settlement's defenses collapsed; only a few survived. The remaining Etzion Bloc settlements surrendered the following day.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Battle / massacre",Evidence:"The fall of Kfar Etzion and mass killing are well documented; accounts differ over the precise circumstances of individual deaths after surrender."},
    sourceStatus:"The fall of Kfar Etzion and mass killing are well documented; accounts differ over the precise circumstances of individual deaths after surrender.",
    sources:[{label:"National Library of Israel — Kfar Etzion",url:"https://www.nli.org.il/en/discover/israel/settlements/kfar-etzion"}]
  },
  {
    year:1948, depth:26870, title:"Declaration of the State of Israel", location:"Tel Aviv",
    story:"On May 14, 1948, David Ben-Gurion proclaimed the establishment of the State of Israel as the British Mandate ended. The declaration transformed the ongoing civil war into an interstate conflict when neighboring Arab armies entered the former Mandate territory.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Statehood / war transition",Evidence:"The declaration and immediate military transition are directly documented."},
    sourceStatus:"The declaration and immediate military transition are directly documented.",
    sources:[{label:"Israel State Archives — Declaration of Independence",url:"https://catalog.archives.gov.il/en/chapter/the-declaration-of-independence/"}]
  },
  {
    year:1948, depth:27040, title:"Arab armies enter Palestine and the first Arab–Israeli war expands", location:"Israel / former Mandatory Palestine",
    story:"Beginning on May 15, armies from Egypt, Transjordan, Syria, Iraq and Lebanon entered the conflict following Israel's declaration of independence. The war now involved the new Israeli state, Palestinian Arab forces and multiple neighboring Arab states.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Interstate war",Evidence:"The intervention by neighboring Arab armies is extensively documented. Military aims and political calculations differed among the Arab governments."},
    sourceStatus:"The intervention by neighboring Arab armies is extensively documented. Military aims and political calculations differed among the Arab governments.",
    sources:[{label:"U.S. Office of the Historian — Arab-Israeli War of 1948",url:"https://history.state.gov/milestones/1945-1952/arab-israeli-war"}]
  },
  {
    year:1948, depth:27210, title:"Fall of the Jewish Quarter of Jerusalem's Old City", location:"Jerusalem",
    story:"After siege and fighting, the Jewish Quarter of Jerusalem's Old City surrendered to the Transjordanian Arab Legion on May 28, 1948. Jewish residents were evacuated from the quarter, while surviving defenders became prisoners of war. Synagogues and other Jewish sites were subsequently damaged or destroyed during Jordanian control.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Battle / displacement",Evidence:"The surrender and evacuation are well documented; descriptions of later destruction vary by site and source."},
    sourceStatus:"The surrender and evacuation are well documented; descriptions of later destruction vary by site and source.",
    sources:[{label:"Encyclopaedia Britannica — Jerusalem, 1948 war",url:"https://www.britannica.com/place/Jerusalem/Capital-of-Israel"}]
  },
  {
    year:1948, depth:27380, title:"Lydda and Ramle: fighting, killings and Palestinian expulsion", location:"Lydda (Lod) and Ramle",
    story:"Israeli forces captured Lydda and Ramle in July 1948 during Operation Dani. Civilians were killed during fighting in Lydda, and most of the Palestinian Arab population of the two towns was then expelled or forced to flee eastward. The episode remains central to historical debate over the Palestinian refugee crisis.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Battle / civilian deaths / forced displacement",Evidence:"The capture and mass displacement are firmly documented. Historians debate aspects of orders, casualty totals and the precise mechanisms of expulsion."},
    sourceStatus:"The capture and mass displacement are firmly documented. Historians debate aspects of orders, casualty totals and the precise mechanisms of expulsion.",
    sources:[{label:"Encyclopaedia Britannica — Lod",url:"https://www.britannica.com/place/Lod"}]
  },
  {
    year:1948, depth:27550, title:"Palestinian refugee and displacement crisis", location:"Palestine / neighboring Arab countries",
    story:"During the 1947–49 war, hundreds of thousands of Palestinian Arabs fled or were expelled from homes in territory that became Israel. Causes varied by place and phase of the war and included direct expulsions, flight from fighting, fear of attack and collapse of Palestinian society. Israel generally prevented most refugees from returning after the war.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Mass displacement / refugee crisis",Evidence:"The large-scale displacement is undisputed. The balance of causes and responsibility in particular localities remains one of the most contested subjects in the history of the conflict."},
    sourceStatus:"The large-scale displacement is undisputed. The balance of causes and responsibility in particular localities remains one of the most contested subjects in the history of the conflict.",
    sources:[{label:"United Nations — Palestinian refugees",url:"https://www.un.org/unispal/history/"}]
  },
  {
    year:1948, depth:27720, title:"Assassination of UN mediator Folke Bernadotte", location:"Jerusalem",
    story:"On September 17, 1948, UN mediator Count Folke Bernadotte was assassinated in Jerusalem by members of Lehi, a Jewish militant organization. Bernadotte had been appointed to mediate the Arab–Israeli war and had proposed arrangements addressing borders, Jerusalem and refugees.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"Political assassination / Jewish militant violence",Evidence:"The assassination and Lehi responsibility are firmly documented in UN and historical records."},
    sourceStatus:"The assassination and Lehi responsibility are firmly documented in UN and historical records.",
    sources:[{label:"United Nations — Palestine historical timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:1949, depth:27890, title:"1949 Armistice Agreements end major fighting", location:"Israel and neighboring Arab states",
    story:"Israel signed separate armistice agreements with Egypt, Lebanon, Jordan and Syria in 1949. The agreements ended the major interstate fighting but did not create comprehensive peace treaties. The armistice lines became the practical boundaries until the 1967 war.",
    context:"This marker is part of the 1947–49 Palestine war and the creation of Israel. The timeline includes violence, military actions and displacement affecting both Jewish and Palestinian Arab communities rather than presenting only one side of the conflict.",
    aftermath:"The war created the State of Israel, reshaped Jerusalem and the region's borders, displaced large populations and left unresolved refugee, territorial and political disputes that continued into later Arab–Israeli and Israeli–Palestinian conflicts.",
    stats:{Type:"Armistice / conflict transition",Evidence:"The agreements and armistice lines are directly documented in UN records."},
    sourceStatus:"The agreements and armistice lines are directly documented in UN records.",
    sources:[{label:"United Nations Peacemaker — 1949 Armistice Agreements",url:"https://peacemaker.un.org/israel-jordan-generalarmistice49"}]
  },
  {
    year:1951, depth:28060, title:"Post-armistice infiltration and border violence", location:"Israel and neighboring armistice lines",
    story:"After the 1949 armistices, Israel's borders remained unstable. Palestinian refugees and other infiltrators crossed armistice lines for varied reasons including return to former homes, recovery of property, smuggling and armed attacks. Israeli civilians and soldiers were killed in some incursions, while Israeli border enforcement and retaliatory actions also killed Palestinians.",
    context:"This marker is part of the post-1949 Arab–Israeli border conflict. It distinguishes Palestinian infiltration and armed attacks, Israeli military reprisals, violence against civilians and broader interstate tensions rather than assigning every incident to a single cause.",
    aftermath:"Repeated attacks and reprisals hardened borders, increased regional military competition and contributed to the escalation that culminated in the 1956 Sinai/Suez War and, after further tensions, the 1967 Six-Day War.",
    stats:{Type:"Border conflict / infiltration",Evidence:"The pattern of infiltration and border violence is well documented. Motives and the proportion of armed versus non-armed crossings varied greatly and should not be treated as one category."},
    sourceStatus:"The pattern of infiltration and border violence is well documented. Motives and the proportion of armed versus non-armed crossings varied greatly and should not be treated as one category.",
    sources:[{label:"U.S. Office of the Historian — Arab-Israeli dispute",url:"https://history.state.gov/historicaldocuments/frus1952-54v09p1"}]
  },
  {
    year:1953, depth:28230, title:"Qibya raid", location:"Qibya, Jordanian West Bank",
    story:"On October 14–15, 1953, Israeli forces carried out a retaliatory raid on the West Bank village of Qibya after earlier attacks inside Israel. Houses were demolished and dozens of Palestinian Arab civilians were killed. The United Nations Security Council strongly censured the action.",
    context:"This marker is part of the post-1949 Arab–Israeli border conflict. It distinguishes Palestinian infiltration and armed attacks, Israeli military reprisals, violence against civilians and broader interstate tensions rather than assigning every incident to a single cause.",
    aftermath:"Repeated attacks and reprisals hardened borders, increased regional military competition and contributed to the escalation that culminated in the 1956 Sinai/Suez War and, after further tensions, the 1967 Six-Day War.",
    stats:{Type:"Israeli reprisal / civilian deaths",Evidence:"The Israeli raid and civilian deaths are firmly documented. UN Security Council Resolution 101 identified it as retaliatory action by armed forces of Israel and found it inconsistent with the armistice obligations."},
    sourceStatus:"The Israeli raid and civilian deaths are firmly documented. UN Security Council Resolution 101 identified it as retaliatory action by armed forces of Israel and found it inconsistent with the armistice obligations.",
    sources:[{label:"United Nations — Security Council Resolution 101",url:"https://www.un.org/unispal/document/auto-insert-179237/"}]
  },
  {
    year:1954, depth:28400, title:"Ma'ale Akrabim bus massacre", location:"Negev, Israel",
    story:"Gunmen ambushed an Israeli passenger bus at Ma'ale Akrabim in March 1954, killing passengers and leaving only a few survivors.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Attack on civilian bus",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/en/pages/terrorism-deaths-in-israel-1920-1999"}]
  },
  {
    year:1955, depth:28570, title:"Patish wedding attack", location:"Patish, Israel",
    story:"Attackers threw grenades and opened fire on a crowded wedding celebration in March 1955, killing a young woman and wounding 18 people.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/israel_in_maps/en/English_SiteTransfer_DOCUMENTS_mapstorypart3.pdf"}]
  },
  {
    year:1955, depth:28740, title:"Gaza raid and escalation of Israel–Egypt border conflict", location:"Gaza Strip",
    story:"In February 1955, Israeli forces raided an Egyptian military installation in Gaza after continuing border incidents. The operation killed Egyptian soldiers and helped accelerate a cycle of confrontation between Egypt and Israel. Egypt subsequently expanded organization and sponsorship of Palestinian fedayeen raids.",
    context:"This marker is part of the post-1949 Arab–Israeli border conflict. It distinguishes Palestinian infiltration and armed attacks, Israeli military reprisals, violence against civilians and broader interstate tensions rather than assigning every incident to a single cause.",
    aftermath:"Repeated attacks and reprisals hardened borders, increased regional military competition and contributed to the escalation that culminated in the 1956 Sinai/Suez War and, after further tensions, the 1967 Six-Day War.",
    stats:{Type:"Military reprisal / border escalation",Evidence:"The raid and subsequent escalation are well documented; historians differ over how much weight to assign the raid among the causes of Egypt's changing military policy."},
    sourceStatus:"The raid and subsequent escalation are well documented; historians differ over how much weight to assign the raid among the causes of Egypt's changing military policy.",
    sources:[{label:"U.S. Office of the Historian — Arab-Israeli dispute",url:"https://history.state.gov/historicaldocuments/frus1955-57v14"}]
  },
  {
    year:1956, depth:28910, title:"Kfar Chabad synagogue attack", location:"Kfar Chabad, Israel",
    story:"Gunmen opened fire on a synagogue containing children and teenagers in April 1956, killing three children and a youth worker and injuring others.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Terrorist attack on children",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/israel_in_maps/en/English_SiteTransfer_DOCUMENTS_mapstorypart3.pdf"}]
  },
  {
    year:1956, depth:29080, title:"Ramat Rachel shooting", location:"Ramat Rachel, Israel",
    story:"Gunfire from a Jordanian position killed four archaeologists and wounded sixteen people at Ramat Rachel in September 1956.",
    context:"This event is represented separately because it is an identifiable episode within a broader historical period of violence.",
    aftermath:"The database uses conservative figures from institutional historical sources; additional source notes can be added as research continues.",
    stats:{Type:"Cross-border shooting",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/israel_in_maps/en/English_SiteTransfer_DOCUMENTS_mapstorypart3.pdf"}]
  },
  {
    year:1956, depth:29250, title:"Suez Crisis / Sinai War", location:"Egypt / Sinai / Israel",
    story:"Israel invaded Egypt's Sinai Peninsula in coordination with the Anglo-French intervention after Egypt nationalized the Suez Canal.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Interstate war",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://history.state.gov/milestones/1953-1960/suez"}]
  },
  {
    year:1956, depth:29420, title:"Fedayeen raids and Israeli reprisals before the Sinai War", location:"Israel, Gaza Strip and neighboring borders",
    story:"During the mid-1950s, Palestinian fedayeen operating especially from Egyptian-controlled Gaza carried out raids and attacks inside Israel. Israel responded with increasingly large military reprisal operations. The cycle killed civilians and soldiers on both sides and contributed to the security crisis preceding the 1956 war.",
    context:"This marker is part of the post-1949 Arab–Israeli border conflict. It distinguishes Palestinian infiltration and armed attacks, Israeli military reprisals, violence against civilians and broader interstate tensions rather than assigning every incident to a single cause.",
    aftermath:"Repeated attacks and reprisals hardened borders, increased regional military competition and contributed to the escalation that culminated in the 1956 Sinai/Suez War and, after further tensions, the 1967 Six-Day War.",
    stats:{Type:"Cross-border attacks / military reprisals",Evidence:"The cycle of fedayeen attacks and Israeli reprisals is extensively documented; individual incidents differed in perpetrators, targets and casualties."},
    sourceStatus:"The cycle of fedayeen attacks and Israeli reprisals is extensively documented; individual incidents differed in perpetrators, targets and casualties.",
    sources:[{label:"U.S. Office of the Historian — Suez Crisis",url:"https://history.state.gov/milestones/1953-1960/suez"}]
  },
  {
    year:1956, depth:29590, title:"Kafr Qasim massacre", location:"Kafr Qasim, Israel",
    story:"On October 29, 1956, Israeli Border Police killed 48 Arab citizens of Israel and one unborn child after villagers returned home unaware that a wartime curfew had been moved earlier. Israeli courts later convicted several members of the unit, and the case became a landmark in Israeli law concerning manifestly illegal orders.",
    context:"This marker is part of the post-1949 Arab–Israeli border conflict. It distinguishes Palestinian infiltration and armed attacks, Israeli military reprisals, violence against civilians and broader interstate tensions rather than assigning every incident to a single cause.",
    aftermath:"Repeated attacks and reprisals hardened borders, increased regional military competition and contributed to the escalation that culminated in the 1956 Sinai/Suez War and, after further tensions, the 1967 Six-Day War.",
    stats:{Type:"Massacre / state security forces",Evidence:"The killings, victims and subsequent Israeli trials are firmly documented."},
    sourceStatus:"The killings, victims and subsequent Israeli trials are firmly documented.",
    sources:[{label:"Israel State Archives — Kafr Qasim",url:"https://catalog.archives.gov.il/en/chapter/kafr-qasim-massacre/"}]
  },
  {
    year:1956, depth:29760, title:"Coordinated Israeli, British and French attack on Egypt", location:"Sinai Peninsula and Suez Canal",
    story:"On October 29, 1956, Israel invaded Egypt's Sinai Peninsula under a secret plan coordinated with Britain and France. Britain and France then intervened around the Suez Canal. International pressure, particularly from the United States and United Nations, ultimately forced the attacking powers to withdraw.",
    context:"This marker is part of the post-1949 Arab–Israeli border conflict. It distinguishes Palestinian infiltration and armed attacks, Israeli military reprisals, violence against civilians and broader interstate tensions rather than assigning every incident to a single cause.",
    aftermath:"Repeated attacks and reprisals hardened borders, increased regional military competition and contributed to the escalation that culminated in the 1956 Sinai/Suez War and, after further tensions, the 1967 Six-Day War.",
    stats:{Type:"Interstate war / coordinated intervention",Evidence:"The secret Sèvres coordination and military sequence are extensively documented in diplomatic archives."},
    sourceStatus:"The secret Sèvres coordination and military sequence are extensively documented in diplomatic archives.",
    sources:[{label:"U.S. Office of the Historian — Suez Crisis",url:"https://history.state.gov/milestones/1953-1960/suez"}]
  },
  {
    year:1964, depth:29930, title:"Creation of the Palestine Liberation Organization", location:"Jerusalem / Arab League context",
    story:"The Palestine Liberation Organization was established in 1964 as an umbrella political organization claiming to represent the Palestinian people. Its creation reflected the growing institutionalization of Palestinian nationalism; armed organizations such as Fatah developed separately and later became dominant within the PLO.",
    context:"This marker is part of the post-1949 Arab–Israeli border conflict. It distinguishes Palestinian infiltration and armed attacks, Israeli military reprisals, violence against civilians and broader interstate tensions rather than assigning every incident to a single cause.",
    aftermath:"Repeated attacks and reprisals hardened borders, increased regional military competition and contributed to the escalation that culminated in the 1956 Sinai/Suez War and, after further tensions, the 1967 Six-Day War.",
    stats:{Type:"Political organization / conflict development",Evidence:"The PLO's establishment in 1964 is firmly documented; its political program and relationship to different Arab governments changed over time."},
    sourceStatus:"The PLO's establishment in 1964 is firmly documented; its political program and relationship to different Arab governments changed over time.",
    sources:[{label:"Encyclopaedia Britannica — PLO",url:"https://www.britannica.com/topic/Palestine-Liberation-Organization"}]
  },
  {
    year:1965, depth:30100, title:"Fatah begins armed operations against Israel", location:"Israel and neighboring states",
    story:"Fatah announced the beginning of its armed struggle at the start of 1965 and carried out sabotage and infiltration attempts against Israel. The organization later became the dominant faction of the PLO.",
    context:"This marker is part of the post-1949 Arab–Israeli border conflict. It distinguishes Palestinian infiltration and armed attacks, Israeli military reprisals, violence against civilians and broader interstate tensions rather than assigning every incident to a single cause.",
    aftermath:"Repeated attacks and reprisals hardened borders, increased regional military competition and contributed to the escalation that culminated in the 1956 Sinai/Suez War and, after further tensions, the 1967 Six-Day War.",
    stats:{Type:"Guerrilla campaign / armed conflict",Evidence:"Fatah's public launch of armed operations in 1965 is well documented; accounts differ on the operational success of the earliest attacks."},
    sourceStatus:"Fatah's public launch of armed operations in 1965 is well documented; accounts differ on the operational success of the earliest attacks.",
    sources:[{label:"Encyclopaedia Britannica — Fatah",url:"https://www.britannica.com/topic/Fatah"}]
  },
  {
    year:1966, depth:30270, title:"Samu raid", location:"Samu, Jordanian West Bank",
    story:"In November 1966, Israeli forces launched a large retaliatory raid against the West Bank village of Samu after a land-mine incident killed Israeli soldiers. The raid led to fighting with Jordanian forces and significant destruction in the village, sharply worsening Israeli-Jordanian tensions before the Six-Day War.",
    context:"This marker is part of the post-1949 Arab–Israeli border conflict. It distinguishes Palestinian infiltration and armed attacks, Israeli military reprisals, violence against civilians and broader interstate tensions rather than assigning every incident to a single cause.",
    aftermath:"Repeated attacks and reprisals hardened borders, increased regional military competition and contributed to the escalation that culminated in the 1956 Sinai/Suez War and, after further tensions, the 1967 Six-Day War.",
    stats:{Type:"Israeli reprisal / border battle",Evidence:"The operation and battle are well documented in diplomatic and military records; assessments of its strategic effect differ."},
    sourceStatus:"The operation and battle are well documented in diplomatic and military records; assessments of its strategic effect differ.",
    sources:[{label:"U.S. Foreign Relations — Arab-Israeli dispute",url:"https://history.state.gov/historicaldocuments/frus1964-68v18"}]
  },
  {
    year:1967, depth:30440, title:"Six-Day War", location:"Israel / Egypt / Jordan / Syria",
    story:"Israel fought Egypt, Jordan and Syria in June 1967 and captured the Sinai, Gaza Strip, West Bank, East Jerusalem and Golan Heights.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Interstate war",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://history.state.gov/historicaldocuments/frus1964-68v14/d217"}]
  },
  {
    year:1967, depth:30610, title:"Israeli occupation begins in the West Bank, East Jerusalem and Gaza", location:"West Bank, East Jerusalem and Gaza Strip",
    story:"Israel's victory in the Six-Day War brought the West Bank, East Jerusalem and Gaza Strip under Israeli control, along with the Sinai Peninsula and Golan Heights. The status of these territories and the Palestinians living in them became central to the conflict. Israel later annexed East Jerusalem, a move not internationally recognized by most states.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Military occupation / territorial conflict",Evidence:"Israel's capture and subsequent control of the territories are firmly documented. Legal and political claims over particular territories remain disputed."},
    sourceStatus:"Israel's capture and subsequent control of the territories are firmly documented. Legal and political claims over particular territories remain disputed.",
    sources:[{label:"U.S. Office of the Historian — 1967 Arab-Israeli War",url:"https://history.state.gov/milestones/1961-1968/arab-israeli-war-1967"}]
  },
  {
    year:1967, depth:30780, title:"UN Security Council Resolution 242 establishes land-for-peace framework", location:"United Nations",
    story:"On November 22, 1967, the UN Security Council unanimously adopted Resolution 242. It called for Israeli withdrawal from territories occupied in the recent conflict and for termination of belligerency, recognition of every state's sovereignty and the right to live within secure and recognized boundaries.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Diplomatic framework",Evidence:"The resolution text is directly documented. Differences over interpretation of its withdrawal language became a lasting diplomatic dispute."},
    sourceStatus:"The resolution text is directly documented. Differences over interpretation of its withdrawal language became a lasting diplomatic dispute.",
    sources:[{label:"United Nations — Security Council Resolution 242",url:"https://www.un.org/unispal/document/auto-insert-184858/"}]
  },
  {
    year:1968, depth:30950, title:"El Al Flight 253 attack in Athens", location:"Athens, Greece",
    story:"Palestinian militants attacked an El Al aircraft at Athens airport in December 1968, killing an Israeli passenger and injuring others.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Terrorist attack on aircraft",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/en/pages/terrorism-deaths-in-israel-1920-1999"}]
  },
  {
    year:1968, depth:31120, title:"Battle of Karameh", location:"Karameh, Jordan",
    story:"Israeli forces attacked Palestinian guerrilla bases around Karameh in Jordan after a series of Fatah attacks, including a mine explosion that killed Israelis. Jordanian forces and Palestinian fighters resisted the raid. Israel inflicted losses but also suffered significant casualties, while Fatah presented the battle as a political and symbolic victory.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Cross-border battle / guerrilla conflict",Evidence:"The battle is well documented; competing Israeli, Jordanian and Palestinian narratives emphasize different military and political outcomes."},
    sourceStatus:"The battle is well documented; competing Israeli, Jordanian and Palestinian narratives emphasize different military and political outcomes.",
    sources:[{label:"Encyclopaedia Britannica — Fatah",url:"https://www.britannica.com/topic/Fatah"}]
  },
  {
    year:1969, depth:31290, title:"War of Attrition along the Suez Canal", location:"Suez Canal / Sinai front",
    story:"Egypt and Israel fought an increasingly intense War of Attrition after the Six-Day War. Artillery exchanges, air raids and commando operations caused military and civilian casualties. Soviet personnel and equipment became increasingly involved on Egypt's side before a U.S.-backed ceasefire took effect in 1970.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Interstate war / attrition",Evidence:"The conflict and superpower involvement are extensively documented in diplomatic and military records."},
    sourceStatus:"The conflict and superpower involvement are extensively documented in diplomatic and military records.",
    sources:[{label:"U.S. Office of the Historian — 1973 Arab-Israeli War background",url:"https://history.state.gov/milestones/1969-1976/arab-israeli-war-1973"}]
  },
  {
    year:1970, depth:31460, title:"Avivim school bus massacre", location:"Avivim, Israel",
    story:"Militants fired on an Israeli school bus near the Lebanese border in May 1970, killing children and adults and wounding others.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Attack on school bus",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/en/pages/terrorism-deaths-in-israel-1920-1999"}]
  },
  {
    year:1970, depth:31630, title:"Black September conflict in Jordan", location:"Jordan",
    story:"Tensions between the Jordanian monarchy and armed Palestinian organizations erupted into major fighting in September 1970. Jordanian forces moved against PLO organizations, producing heavy casualties and eventually driving the PLO's main armed presence from Jordan into Lebanon.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Jordanian-Palestinian civil conflict",Evidence:"The conflict and expulsion of the PLO from Jordan are well documented; casualty estimates vary substantially."},
    sourceStatus:"The conflict and expulsion of the PLO from Jordan are well documented; casualty estimates vary substantially.",
    sources:[{label:"Encyclopaedia Britannica — Black September",url:"https://www.britannica.com/topic/Black-September-political-organization-Palestine"}]
  },
  {
    year:1972, depth:31800, title:"Lod Airport massacre", location:"Lod Airport, Israel",
    story:"Gunmen from the Japanese Red Army, acting with a Palestinian militant organization, attacked passengers at Lod Airport in May 1972.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://archives.mod.gov.il/sites/English/theTimeAxis/Pages/1972-%E2%80%93-1980.aspx"}]
  },
  {
    year:1972, depth:31970, title:"Munich Olympics attack", location:"Munich, West Germany",
    story:"Members of Black September took Israeli Olympic team members hostage; eleven Israeli athletes and coaches were killed during the attack and failed rescue.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Munich-Massacre"}]
  },
  {
    year:1973, depth:32140, title:"Yom Kippur / October War", location:"Israel / Egypt / Syria",
    story:"Egypt and Syria launched a surprise attack on Israeli positions on October 6, 1973, beginning a major regional war.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Interstate war",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://history.state.gov/historicaldocuments/frus1969-76v36/d209"}]
  },
  {
    year:1973, depth:32310, title:"Israel crosses the Suez Canal and encircles Egypt's Third Army", location:"Egypt / Suez Canal",
    story:"During the later phase of the October 1973 war, Israeli forces crossed to the west bank of the Suez Canal and encircled Egypt's Third Army. The battlefield reversal intensified U.S.-Soviet diplomacy and helped drive the push for a ceasefire.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Interstate war / counteroffensive",Evidence:"The crossing and encirclement are firmly documented in military and diplomatic records."},
    sourceStatus:"The crossing and encirclement are firmly documented in military and diplomatic records.",
    sources:[{label:"U.S. Office of the Historian — 1973 Arab-Israeli War",url:"https://history.state.gov/milestones/1969-1976/arab-israeli-war-1973"}]
  },
  {
    year:1974, depth:32480, title:"Kiryat Shmona massacre", location:"Kiryat Shmona, Israel",
    story:"Palestinian militants infiltrated Kiryat Shmona in April 1974 and murdered civilians, including children.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/israel_in_maps/en/English_SiteTransfer_DOCUMENTS_mapstorypart3.pdf"}]
  },
  {
    year:1974, depth:32650, title:"Ma'alot massacre", location:"Ma'alot, Israel",
    story:"Three Palestinian militants seized schoolchildren and other hostages in May 1974. During the attempted rescue, the attackers fired on the children and threw grenades; many hostages were killed.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Hostage-taking / terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://archives.mod.gov.il/sites/English/theTimeAxis/Pages/1972-%E2%80%93-1980.aspx"}]
  },
  {
    year:1975, depth:32820, title:"Savoy Hotel attack", location:"Tel Aviv, Israel",
    story:"Fatah militants seized the Savoy Hotel in March 1975. Eight hostages and three Israeli soldiers were killed during the incident and rescue operation.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Hostage-taking / terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://archives.mod.gov.il/Exhib/malons/Pages/default.aspx"}]
  },
  {
    year:1976, depth:32990, title:"Entebbe hijacking and hostage crisis", location:"Entebbe, Uganda",
    story:"PFLP-linked and German militants hijacked an Air France flight and diverted it to Entebbe. Israeli and Jewish passengers were separated from many other hostages before an Israeli commando rescue.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Aircraft hijacking / hostage-taking",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://archives.mod.gov.il/sites/English/theTimeAxis/Pages/1972-%E2%80%93-1980.aspx"}]
  },
  {
    year:1978, depth:33160, title:"Coastal Road massacre", location:"Israel",
    story:"Palestinian militants attacked civilians traveling on Israel's Coastal Road, killing dozens and triggering a major Israeli military response in Lebanon.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Israel/War-in-Lebanon"}]
  },
  {
    year:1978, depth:33330, title:"Camp David Accords", location:"Camp David, Maryland, United States",
    story:"Egyptian President Anwar Sadat and Israeli Prime Minister Menachem Begin, mediated by U.S. President Jimmy Carter, reached the Camp David Accords in September 1978. The agreements created frameworks for an Egyptian-Israeli peace treaty and for negotiations concerning Palestinian self-government.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Peace diplomacy",Evidence:"The agreements are directly documented. Their Palestinian-autonomy provisions were never implemented as originally envisioned."},
    sourceStatus:"The agreements are directly documented. Their Palestinian-autonomy provisions were never implemented as originally envisioned.",
    sources:[{label:"U.S. Office of the Historian — Camp David Accords",url:"https://history.state.gov/milestones/1977-1980/camp-david"}]
  },
  {
    year:1979, depth:33500, title:"Egypt–Israel Peace Treaty", location:"Washington, D.C. / Egypt and Israel",
    story:"Egypt and Israel signed a peace treaty on March 26, 1979. Israel agreed to withdraw from the Sinai Peninsula, and Egypt became the first Arab state to formally recognize Israel. The treaty fundamentally changed the strategic balance of the Arab–Israeli conflict.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Peace treaty",Evidence:"The treaty and phased Israeli withdrawal from Sinai are directly documented."},
    sourceStatus:"The treaty and phased Israeli withdrawal from Sinai are directly documented.",
    sources:[{label:"U.S. Office of the Historian — Camp David and Egyptian-Israeli Peace",url:"https://history.state.gov/milestones/1977-1980/camp-david"}]
  },
  {
    year:1980, depth:33670, title:"Paris synagogue bombing", location:"Paris, France",
    story:"A bomb exploded outside the Rue Copernic synagogue in Paris in October 1980, killing four people and injuring dozens.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Antisemitic terrorist bombing",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/anti-Semitism"}]
  },
  {
    year:1982, depth:33840, title:"1982 Lebanon War", location:"Lebanon / Israel",
    story:"Israel invaded Lebanon amid conflict with the PLO and cross-border attacks. The war involved Israeli, Palestinian, Lebanese and Syrian forces and caused extensive civilian suffering.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"War",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Lebanon-War"}]
  },
  {
    year:1982, depth:34010, title:"Great Synagogue of Rome attack", location:"Rome, Italy",
    story:"Gunmen attacked worshippers leaving the Great Synagogue of Rome in October 1982, killing a two-year-old child and wounding dozens.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Antisemitic terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/anti-Semitism"}]
  },
  {
    year:1982, depth:34180, title:"Siege of Beirut and PLO evacuation", location:"Beirut, Lebanon",
    story:"During Israel's 1982 invasion of Lebanon, Israeli forces surrounded West Beirut, where the PLO was based. Heavy bombardment and fighting caused military and civilian casualties. A U.S.-brokered arrangement eventually led to the evacuation of PLO fighters from Beirut to several Arab countries.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Urban siege / war",Evidence:"The siege and PLO evacuation are extensively documented; casualty estimates and assessments of proportionality remain contested."},
    sourceStatus:"The siege and PLO evacuation are extensively documented; casualty estimates and assessments of proportionality remain contested.",
    sources:[{label:"U.S. Office of the Historian — Lebanon, 1982–1984",url:"https://history.state.gov/milestones/1981-1988/lebanon"}]
  },
  {
    year:1982, depth:34350, title:"Sabra and Shatila massacre", location:"Beirut, Lebanon",
    story:"In September 1982, Lebanese Christian Phalangist militiamen entered the Sabra and Shatila refugee camps and massacred Palestinian and Lebanese civilians while Israeli forces controlled the surrounding area. Israel's Kahan Commission later found that Israeli officials bore indirect responsibility for failing to foresee and prevent the danger of a massacre.",
    context:"This marker places attacks on Israelis, Palestinian armed activity, Israeli military actions, Arab-state warfare and diplomatic efforts in the same chronology so the period is not reduced to a single side's experience.",
    aftermath:"Events in this period reshaped territorial control, Palestinian armed organizations, Arab–Israeli diplomacy and the regional balance of power, setting conditions for the Lebanon War and the later Israeli–Palestinian conflict.",
    stats:{Type:"Massacre / Lebanon War",Evidence:"The massacre by Lebanese Phalangist forces is firmly documented. Victim estimates vary. Israel's own Kahan Commission found indirect, not direct perpetrator, responsibility on the part of Israeli officials."},
    sourceStatus:"The massacre by Lebanese Phalangist forces is firmly documented. Victim estimates vary. Israel's own Kahan Commission found indirect, not direct perpetrator, responsibility on the part of Israeli officials.",
    sources:[{label:"U.S. Office of the Historian — Lebanon, 1982–1984",url:"https://history.state.gov/milestones/1981-1988/lebanon"}]
  },
  {
    year:1985, depth:34520, title:"Rome and Vienna airport attacks", location:"Rome, Italy / Vienna, Austria",
    story:"Gunmen attacked El Al ticket counters at airports in Rome and Vienna in December 1985, killing and wounding travelers.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Terrorist attacks",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/terrorism"}]
  },
  {
    year:1985, depth:34690, title:"Israel withdraws from most of Lebanon and establishes a security zone", location:"Southern Lebanon",
    story:"By 1985 Israel withdrew from most of Lebanon but retained forces in a self-declared security zone in the south, working with the South Lebanon Army. Fighting with Lebanese armed groups, increasingly including Hezbollah, continued for years.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Occupation / insurgency",Evidence:"The withdrawal and security-zone period are well documented; assessments of military necessity and the occupation's effects remain contested."},
    sourceStatus:"The withdrawal and security-zone period are well documented; assessments of military necessity and the occupation's effects remain contested.",
    sources:[{label:"U.S. Office of the Historian — Lebanon, 1982–1984",url:"https://history.state.gov/milestones/1981-1988/lebanon"}]
  },
  {
    year:1987, depth:34860, title:"First Intifada", location:"West Bank / Gaza / Israel",
    story:"A Palestinian uprising against Israeli occupation involved demonstrations, riots, attacks and Israeli military responses, causing deaths on both sides.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Uprising / conflict",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/intifada"}]
  },
  {
    year:1987, depth:35030, title:"Hamas emerges during the First Intifada", location:"Gaza Strip and West Bank",
    story:"Hamas emerged in 1987 during the First Intifada from networks associated with the Palestinian Muslim Brotherhood. It combined social and religious organization with armed opposition to Israel and later became a major rival to the secular nationalist Fatah movement.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Islamist organization / armed conflict",Evidence:"Hamas's emergence during the First Intifada is firmly documented. Its organization, tactics and political role changed substantially over subsequent decades."},
    sourceStatus:"Hamas's emergence during the First Intifada is firmly documented. Its organization, tactics and political role changed substantially over subsequent decades.",
    sources:[{label:"Encyclopaedia Britannica — Hamas",url:"https://www.britannica.com/topic/Hamas"}]
  },
  {
    year:1991, depth:35200, title:"Madrid Peace Conference", location:"Madrid, Spain",
    story:"Israel, neighboring Arab states and a joint Jordanian-Palestinian delegation met at the Madrid Peace Conference in October 1991. The conference did not itself produce a final settlement, but it opened direct bilateral and multilateral negotiations and helped establish the diplomatic track that preceded Oslo.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Peace diplomacy",Evidence:"The conference and participating delegations are directly documented in diplomatic records."},
    sourceStatus:"The conference and participating delegations are directly documented in diplomatic records.",
    sources:[{label:"U.S. Office of the Historian — Madrid Conference",url:"https://history.state.gov/milestones/1989-1992/madrid-conference"}]
  },
  {
    year:1992, depth:35370, title:"Israeli embassy bombing in Buenos Aires", location:"Buenos Aires, Argentina",
    story:"A suicide bombing destroyed the Israeli embassy in Buenos Aires in March 1992, killing 29 people and injuring hundreds.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Terrorist bombing",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/1992-Buenos-Aires-embassy-bombing"}]
  },
  {
    year:1993, depth:35540, title:"Oslo Accord and mutual Israel–PLO recognition", location:"Oslo / Washington, D.C.",
    story:"Secret Israeli-PLO negotiations produced the 1993 Declaration of Principles. Israel recognized the PLO as the representative of the Palestinian people, while the PLO recognized Israel's right to exist in peace and renounced terrorism. The agreement envisioned Palestinian self-government and later negotiations over permanent-status issues.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Peace agreement / Palestinian self-government",Evidence:"The agreement and mutual recognition are directly documented. Oslo left borders, Jerusalem, refugees, settlements and other final-status questions unresolved."},
    sourceStatus:"The agreement and mutual recognition are directly documented. Oslo left borders, Jerusalem, refugees, settlements and other final-status questions unresolved.",
    sources:[{label:"U.S. Office of the Historian — Oslo Accords",url:"https://history.state.gov/milestones/1993-2000/oslo"}]
  },
  {
    year:1994, depth:35710, title:"AMIA bombing", location:"Buenos Aires, Argentina",
    story:"A bombing destroyed the AMIA Jewish community center, killing 85 people and injuring hundreds.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist bombing",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/AMIA-bombing"}]
  },
  {
    year:1994, depth:35880, title:"Tel Aviv bus 5 bombing", location:"Tel Aviv, Israel",
    story:"A Hamas suicide bomber attacked a city bus in Tel Aviv in October 1994, killing 22 people.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/news/cabinet-communique-29-jan-2006/en/English_SiteTransfer_DOCUMENTS_Profile-of-the-Hamas-movement_ITIC.pdf"}]
  },
  {
    year:1994, depth:36050, title:"Cave of the Patriarchs massacre", location:"Hebron, West Bank",
    story:"On February 25, 1994, Baruch Goldstein, an Israeli Jewish extremist, opened fire on Muslim worshippers at the Ibrahimi Mosque/Cave of the Patriarchs in Hebron, killing 29 Palestinians and wounding many others before he was killed. The massacre intensified Israeli-Palestinian tensions during the Oslo process.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Jewish extremist mass shooting",Evidence:"The perpetrator, location and killing of 29 Palestinian worshippers are firmly documented."},
    sourceStatus:"The perpetrator, location and killing of 29 Palestinian worshippers are firmly documented.",
    sources:[{label:"Encyclopaedia Britannica — Hebron",url:"https://www.britannica.com/place/Hebron-city-West-Bank"}]
  },
  {
    year:1994, depth:36220, title:"Israel–Jordan Peace Treaty", location:"Arava/Wadi Araba border",
    story:"Israel and Jordan signed a peace treaty in October 1994, formally ending the state of war between them and establishing diplomatic relations. Jordan became the second Arab country, after Egypt, to sign a peace treaty with Israel.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Peace treaty",Evidence:"The treaty and diplomatic recognition are directly documented."},
    sourceStatus:"The treaty and diplomatic recognition are directly documented.",
    sources:[{label:"U.S. Office of the Historian — Oslo peace process",url:"https://history.state.gov/milestones/1993-2000/oslo"}]
  },
  {
    year:1995, depth:36390, title:"Oslo II divides West Bank administrative control", location:"West Bank",
    story:"The 1995 Israeli-Palestinian Interim Agreement, commonly called Oslo II, divided the West Bank into Areas A, B and C with different arrangements for Palestinian civil authority and Israeli security or administrative control. The framework was intended to be interim pending final-status negotiations.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Interim agreement / territorial administration",Evidence:"The agreement and administrative divisions are directly documented; their later political and legal consequences remain deeply contested."},
    sourceStatus:"The agreement and administrative divisions are directly documented; their later political and legal consequences remain deeply contested.",
    sources:[{label:"U.S. Office of the Historian — Oslo Accords",url:"https://history.state.gov/milestones/1993-2000/oslo"}]
  },
  {
    year:1995, depth:36560, title:"Assassination of Yitzhak Rabin", location:"Tel Aviv, Israel",
    story:"On November 4, 1995, Israeli Prime Minister Yitzhak Rabin was assassinated after a peace rally by Yigal Amir, an Israeli Jewish extremist who opposed the Oslo Accords. Rabin's murder shocked Israeli society and damaged the political momentum behind the peace process.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Political assassination / Jewish extremism",Evidence:"The assassination, perpetrator and anti-Oslo motive are firmly documented."},
    sourceStatus:"The assassination, perpetrator and anti-Oslo motive are firmly documented.",
    sources:[{label:"U.S. Office of the Historian — Oslo Accords",url:"https://history.state.gov/milestones/1993-2000/oslo"}]
  },
  {
    year:1996, depth:36730, title:"Jerusalem bus 18 bombings", location:"Jerusalem, Israel",
    story:"Two suicide bombings on Jerusalem bus route 18 in 1996 killed dozens of civilians during a wave of Hamas attacks.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombings",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/news/cabinet-communique-29-jan-2006/en/English_SiteTransfer_DOCUMENTS_Profile-of-the-Hamas-movement_ITIC.pdf"}]
  },
  {
    year:1996, depth:36900, title:"Hamas suicide-bombing campaign undermines Oslo process", location:"Jerusalem, Tel Aviv and other Israeli cities",
    story:"A series of Hamas suicide bombings in 1996 killed Israeli civilians and intensified fear and political opposition to the Oslo process. The attacks followed earlier Hamas bombings and came amid a wider cycle of Israeli-Palestinian violence.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Terrorism / suicide bombings",Evidence:"The attacks and Hamas responsibility for major bombings are extensively documented. Individual attacks are represented separately elsewhere in the timeline where appropriate."},
    sourceStatus:"The attacks and Hamas responsibility for major bombings are extensively documented. Individual attacks are represented separately elsewhere in the timeline where appropriate.",
    sources:[{label:"U.S. Office of the Historian — Oslo Accords",url:"https://history.state.gov/milestones/1993-2000/oslo"}]
  },
  {
    year:1998, depth:37070, title:"Wye River Memorandum", location:"Maryland, United States",
    story:"Israeli Prime Minister Benjamin Netanyahu and PLO Chairman Yasser Arafat negotiated the Wye River Memorandum under U.S. mediation. It called for further Israeli redeployments from parts of the West Bank and Palestinian security commitments, but implementation disputes soon stalled the process.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Peace diplomacy / interim agreement",Evidence:"The agreement and subsequent implementation disputes are directly documented."},
    sourceStatus:"The agreement and subsequent implementation disputes are directly documented.",
    sources:[{label:"U.S. Office of the Historian — Oslo Accords",url:"https://history.state.gov/milestones/1993-2000/oslo"}]
  },
  {
    year:2000, depth:37240, title:"Second Intifada", location:"Israel / West Bank / Gaza",
    story:"The Second Intifada brought suicide bombings and other attacks against Israelis alongside major Israeli military operations; thousands of Palestinians and Israelis were killed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Uprising / terrorism / armed conflict",Evidence:"Very high; totals depend on definitions"},
    sourceStatus:"Very high; totals depend on definitions",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/intifada"}]
  },
  {
    year:2000, depth:37410, title:"Israel withdraws from southern Lebanon", location:"Southern Lebanon",
    story:"In May 2000, Israel withdrew its forces from southern Lebanon, ending the security-zone presence maintained since the 1980s. Hezbollah portrayed the withdrawal as a victory, while disputes over the border area and subsequent attacks continued.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Military withdrawal / Lebanon conflict",Evidence:"The withdrawal is firmly documented; disputes over Shebaa Farms and the meaning of the withdrawal persisted."},
    sourceStatus:"The withdrawal is firmly documented; disputes over Shebaa Farms and the meaning of the withdrawal persisted.",
    sources:[{label:"U.S. Office of the Historian — Oslo era",url:"https://history.state.gov/milestones/1993-2000/oslo"}]
  },
  {
    year:2000, depth:37580, title:"Camp David summit fails to reach final Israeli–Palestinian agreement", location:"Camp David, Maryland, United States",
    story:"U.S. President Bill Clinton convened Israeli Prime Minister Ehud Barak and PLO Chairman Yasser Arafat in July 2000 for final-status negotiations. The summit ended without agreement over major issues including borders, Jerusalem and Palestinian refugees.",
    context:"This marker is part of the period linking the Lebanon conflict, the First Intifada and the Oslo peace process. The timeline includes Palestinian attacks, Israeli military policy, Jewish extremist violence and diplomatic efforts in the same chronology.",
    aftermath:"The period produced both unprecedented Israeli–Palestinian recognition and continuing violence. Unresolved final-status issues, extremist attacks and political breakdown contributed to the collapse of the peace process and renewed large-scale violence in 2000.",
    stats:{Type:"Failed peace negotiation",Evidence:"The summit and unresolved issues are firmly documented. Accounts differ substantially over why negotiations failed and how responsibility should be apportioned."},
    sourceStatus:"The summit and unresolved issues are firmly documented. Accounts differ substantially over why negotiations failed and how responsibility should be apportioned.",
    sources:[{label:"U.S. Office of the Historian — Oslo Accords",url:"https://history.state.gov/milestones/1993-2000/oslo"}]
  },
  {
    year:2001, depth:37750, title:"Dolphinarium discotheque bombing", location:"Tel Aviv, Israel",
    story:"A suicide bomber attacked young people waiting outside the Dolphinarium nightclub in June 2001; 21 Israeli civilians were killed, most of them teenagers.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/palestinian-violence-and-terrorism-since-september-2000/en/English_SiteTransfer_DOCUMENTS_Leading-Palestinian-Terrorist-Organizations-Aug-2004.pdf"}]
  },
  {
    year:2001, depth:37920, title:"Sbarro restaurant bombing", location:"Jerusalem, Israel",
    story:"A suicide bomber attacked the crowded Sbarro restaurant in Jerusalem in August 2001, killing 15 civilians.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/palestinian-violence-and-terrorism-since-september-2000/en/English_SiteTransfer_DOCUMENTS_Leading-Palestinian-Terrorist-Organizations-Aug-2004.pdf"}]
  },
  {
    year:2001, depth:38090, title:"Taba Summit continues final-status negotiations", location:"Taba, Egypt",
    story:"Israeli and Palestinian negotiators met at Taba in January 2001 after the failed Camp David summit and amid the Second Intifada. The sides reported narrowing some differences but did not reach a final agreement before negotiations ended.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"Peace diplomacy",Evidence:"The summit and failure to reach a final settlement are well documented; assessments differ over how close the parties were to agreement."},
    sourceStatus:"The summit and failure to reach a final settlement are well documented; assessments differ over how close the parties were to agreement.",
    sources:[{label:"United Nations — Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2002, depth:38260, title:"Passover massacre", location:"Netanya, Israel",
    story:"A suicide bomber attacked a Passover seder at the Park Hotel in Netanya during the Second Intifada, killing civilians and injuring many others.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/intifada"}]
  },
  {
    year:2002, depth:38430, title:"Operation Defensive Shield", location:"West Bank",
    story:"Following a wave of Palestinian suicide bombings, including the Passover massacre, Israel launched Operation Defensive Shield in March 2002 and re-entered major Palestinian cities in the West Bank. Fighting, arrests and extensive damage occurred, with especially intense combat in Jenin and Nablus.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Israeli military operation / Second Intifada",Evidence:"The operation and reoccupation of major West Bank population centers are firmly documented. Casualty narratives around particular battles, especially Jenin, were intensely disputed."},
    sourceStatus:"The operation and reoccupation of major West Bank population centers are firmly documented. Casualty narratives around particular battles, especially Jenin, were intensely disputed.",
    sources:[{label:"United Nations — Jenin report",url:"https://www.un.org/unispal/document/auto-insert-185675/"}]
  },
  {
    year:2002, depth:38600, title:"Construction of the West Bank barrier begins", location:"West Bank and East Jerusalem area",
    story:"Israel began constructing a system of fences and walls during the Second Intifada, citing the need to prevent suicide bombers and other attackers from reaching Israeli population centers. Much of the route runs inside the West Bank rather than along the 1949 armistice line, generating Palestinian displacement and access concerns and major international legal controversy.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Security barrier / territorial dispute",Evidence:"Construction, route and security rationale are documented. Israel credits the barrier as one factor in reducing attacks; Palestinians and international bodies have challenged portions of its route and humanitarian effects."},
    sourceStatus:"Construction, route and security rationale are documented. Israel credits the barrier as one factor in reducing attacks; Palestinians and international bodies have challenged portions of its route and humanitarian effects.",
    sources:[{label:"International Court of Justice — Wall advisory proceedings",url:"https://www.icj-cij.org/case/131"}]
  },
  {
    year:2002, depth:38770, title:"Arab Peace Initiative", location:"Beirut, Lebanon",
    story:"At the 2002 Arab League summit in Beirut, Arab states endorsed an initiative offering normalized relations with Israel in exchange for Israeli withdrawal from territories occupied in 1967, a negotiated solution to the Palestinian refugee issue and establishment of a Palestinian state with East Jerusalem as its capital.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"Regional peace initiative",Evidence:"The initiative and its core terms are directly documented and were reaffirmed by Arab states in later years."},
    sourceStatus:"The initiative and its core terms are directly documented and were reaffirmed by Arab states in later years.",
    sources:[{label:"United Nations — Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2003, depth:38940, title:"Maxim restaurant bombing", location:"Haifa, Israel",
    story:"A suicide bomber attacked the Maxim restaurant in Haifa in October 2003, killing 21 people.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Suicide bombing / terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/BlobFolder/generalpage/saving-lives-israel-s-anti-terrorist-fence-answers-to-questions-jan-2004/en/English_SiteTransfer_DOCUMENTS_PDF_19279_2.pdf"}]
  },
  {
    year:2003, depth:39110, title:"Quartet Roadmap for Peace", location:"Israel and Palestinian territories",
    story:"The United States, European Union, United Nations and Russia presented a performance-based Roadmap intended to lead through reciprocal security and political steps toward a permanent two-state settlement. The UN Security Council endorsed the Roadmap in Resolution 1515.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"Peace framework",Evidence:"The Roadmap and Security Council endorsement are directly documented; implementation stalled amid continued violence and political disputes."},
    sourceStatus:"The Roadmap and Security Council endorsement are directly documented; implementation stalled amid continued violence and political disputes.",
    sources:[{label:"United Nations — Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2005, depth:39280, title:"Israel disengages from the Gaza Strip", location:"Gaza Strip and northern West Bank",
    story:"In August and September 2005, Israel evacuated all Israeli settlements in Gaza and four in the northern West Bank and withdrew its permanent military presence from inside Gaza. Palestinian Authority security forces entered the former settlement areas. Israel continued to control important aspects of Gaza's external access, while Egypt controlled its side of the Rafah border under later arrangements.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Unilateral withdrawal / territorial change",Evidence:"The evacuation of settlers and withdrawal of the permanent IDF presence are directly documented. The legal question of Gaza's occupation status after disengagement remained disputed."},
    sourceStatus:"The evacuation of settlers and withdrawal of the permanent IDF presence are directly documented. The legal question of Gaza's occupation status after disengagement remained disputed.",
    sources:[{label:"United Nations OCHA — Gaza disengagement",url:"https://www.un.org/unispal/document/auto-insert-203265/"}]
  },
  {
    year:2006, depth:39450, title:"Hamas wins Palestinian legislative election", location:"Palestinian territories",
    story:"Hamas won a majority of seats in the January 2006 Palestinian Legislative Council election. The result produced a major political confrontation because Hamas did not accept the Quartet's conditions to renounce violence, recognize Israel and accept previous Israeli-Palestinian agreements.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Election / political rupture",Evidence:"The election result and subsequent international political crisis are firmly documented."},
    sourceStatus:"The election result and subsequent international political crisis are firmly documented.",
    sources:[{label:"United Nations — History of the Question of Palestine",url:"https://www.un.org/unispal/history/"}]
  },
  {
    year:2006, depth:39620, title:"Gilad Shalit captured in Gaza border attack", location:"Kerem Shalom / Gaza border",
    story:"On June 25, 2006, Palestinian militants tunneled across the Gaza border and attacked an Israeli military post, killing two Israeli soldiers and capturing Corporal Gilad Shalit. Israel launched major military operations in Gaza. Shalit remained captive until a 2011 prisoner exchange.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Cross-border attack / hostage capture",Evidence:"The attack, deaths, capture and subsequent captivity are firmly documented."},
    sourceStatus:"The attack, deaths, capture and subsequent captivity are firmly documented.",
    sources:[{label:"Encyclopaedia Britannica — Gilad Shalit",url:"https://www.britannica.com/biography/Gilad-Shalit"}]
  },
  {
    year:2006, depth:39790, title:"Second Lebanon War", location:"Israel and Lebanon",
    story:"On July 12, 2006, Hezbollah fighters crossed the border, killed Israeli soldiers and captured two. Israel responded with a major air and ground campaign in Lebanon, while Hezbollah fired thousands of rockets into northern Israel. The war caused substantial civilian casualties and displacement in Lebanon and Israel.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Israel–Hezbollah war",Evidence:"The initiating cross-border attack, rocket campaign and Israeli military response are extensively documented. Assessments of conduct, proportionality and strategic outcome remain contested."},
    sourceStatus:"The initiating cross-border attack, rocket campaign and Israeli military response are extensively documented. Assessments of conduct, proportionality and strategic outcome remain contested.",
    sources:[{label:"United Nations — Security Council Resolution 1701",url:"https://www.un.org/press/en/2006/sc8808.doc.htm"}]
  },
  {
    year:2007, depth:39960, title:"Hamas–Fatah fighting and Hamas takeover of Gaza", location:"Gaza Strip",
    story:"After months of escalating conflict between Palestinian factions, Hamas forces defeated Fatah-aligned security forces and took control of the Gaza Strip in June 2007. The Palestinian political system split, with Hamas controlling Gaza and the Palestinian Authority under Mahmoud Abbas governing parts of the West Bank.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Palestinian internal armed conflict",Evidence:"The violent takeover and political division are firmly documented. Accounts differ over responsibility for the breakdown of earlier power-sharing arrangements."},
    sourceStatus:"The violent takeover and political division are firmly documented. Accounts differ over responsibility for the breakdown of earlier power-sharing arrangements.",
    sources:[{label:"United Nations — Gaza ten years later",url:"https://www.un.org/unispal/wp-content/uploads/2017/10/GAZARPT_110717.pdf"}]
  },
  {
    year:2007, depth:40130, title:"Israel tightens blockade of the Gaza Strip after Hamas takeover", location:"Gaza Strip",
    story:"Following Hamas's takeover of Gaza, Israel imposed increasingly severe restrictions on movement of people and goods, while Egypt also restricted the Rafah crossing. Israel cited security concerns and attacks from Gaza; humanitarian organizations documented major effects on Gaza's economy and civilian population.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Blockade / security policy",Evidence:"The restrictions following Hamas's takeover are extensively documented. Their legality, scope, humanitarian impact and security justification remain heavily contested."},
    sourceStatus:"The restrictions following Hamas's takeover are extensively documented. Their legality, scope, humanitarian impact and security justification remain heavily contested.",
    sources:[{label:"United Nations — History of the Question of Palestine",url:"https://www.un.org/unispal/history/"}]
  },
  {
    year:2007, depth:40300, title:"Annapolis Conference attempts to restart final-status negotiations", location:"Annapolis, Maryland, United States",
    story:"Israeli Prime Minister Ehud Olmert and Palestinian Authority President Mahmoud Abbas met under U.S. sponsorship at Annapolis and committed to renewed negotiations aimed at a peace agreement and implementation of the Roadmap.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"Peace diplomacy",Evidence:"The conference and joint understanding are directly documented. Negotiations continued afterward but did not produce a final agreement."},
    sourceStatus:"The conference and joint understanding are directly documented. Negotiations continued afterward but did not produce a final agreement.",
    sources:[{label:"United Nations — Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2008, depth:40470, title:"Mumbai Chabad House attack", location:"Mumbai, India",
    story:"During the coordinated Mumbai attacks, terrorists seized the Chabad Jewish center at Nariman House and murdered hostages there.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Mumbai-terrorist-attacks-of-2008"}]
  },
  {
    year:2008, depth:40640, title:"Escalating rocket fire and Israeli strikes around Gaza", location:"Gaza Strip and southern Israel",
    story:"Palestinian armed groups fired rockets and mortars from Gaza toward Israeli communities, while Israel conducted air strikes, raids and other military actions in Gaza. A six-month truce reduced violence for a period in 2008, but it unraveled amid renewed attacks and military action.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Rocket attacks / military strikes",Evidence:"Rocket fire, Israeli strikes and the 2008 truce are well documented. The sequence of violations and responsibility for the truce's collapse is disputed."},
    sourceStatus:"Rocket fire, Israeli strikes and the 2008 truce are well documented. The sequence of violations and responsibility for the truce's collapse is disputed.",
    sources:[{label:"United Nations — Gaza conflict background",url:"https://www.un.org/unispal/document/auto-insert-186806/"}]
  },
  {
    year:2008, depth:40810, title:"Operation Cast Lead / 2008–09 Gaza War", location:"Gaza Strip and southern Israel",
    story:"Israel began Operation Cast Lead on December 27, 2008 after renewed escalation in rocket fire and hostilities. The campaign included intensive air strikes followed by a ground offensive. Palestinian armed groups continued firing rockets into Israel. Large numbers of Palestinians, including civilians, were killed, as were Israeli soldiers and civilians.",
    context:"This marker is part of the contemporary Israeli–Palestinian and regional conflict. The timeline distinguishes attacks on civilians, armed-group activity, Israeli military operations, Palestinian internal conflict and political or territorial changes rather than treating them as equivalent events.",
    aftermath:"The Second Intifada and its aftermath transformed Israeli and Palestinian security policy, weakened the peace process and contributed to the political and geographic division between Hamas-controlled Gaza and the Palestinian Authority in the West Bank.",
    stats:{Type:"Gaza war / rockets / Israeli military operation",Evidence:"The war and major military actions are extensively documented. Casualty classifications, proportionality and alleged violations of international law were and remain disputed."},
    sourceStatus:"The war and major military actions are extensively documented. Casualty classifications, proportionality and alleged violations of international law were and remain disputed.",
    sources:[{label:"United Nations — Gaza conflict report",url:"https://digitallibrary.un.org/record/681797/files/S_2009_537-EN.pdf"}]
  },
  {
    year:2011, depth:40980, title:"Gilad Shalit prisoner exchange", location:"Israel / Gaza",
    story:"After more than five years in captivity in Gaza, Israeli soldier Gilad Shalit was released in October 2011 in exchange for more than one thousand Palestinian prisoners held by Israel. The exchange demonstrated the political importance of captives and prisoners to both Israeli and Palestinian societies.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Prisoner exchange / conflict diplomacy",Evidence:"The captivity, negotiated exchange and release are firmly documented."},
    sourceStatus:"The captivity, negotiated exchange and release are firmly documented.",
    sources:[{label:"Encyclopaedia Britannica — Gilad Shalit",url:"https://www.britannica.com/biography/Gilad-Shalit"}]
  },
  {
    year:2012, depth:41150, title:"Toulouse Jewish school attack", location:"Toulouse, France",
    story:"A gunman attacked the Ozar Hatorah Jewish school, murdering a teacher and three children.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Toulouse-and-Montauban-shootings"}]
  },
  {
    year:2012, depth:41320, title:"Operation Pillar of Defense / November Gaza conflict", location:"Gaza Strip and Israel",
    story:"Eight days of intense fighting began on November 14, 2012 when Israel killed Hamas military commander Ahmed Jabari. Israel carried out extensive air strikes while Hamas and other Palestinian armed groups fired rockets toward Israeli population centers, including the Tel Aviv and Jerusalem areas. An Egyptian-mediated ceasefire ended the escalation.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Gaza conflict / rockets / air strikes",Evidence:"The military actions and civilian casualties on both sides are extensively documented. UN reporting criticized indiscriminate Palestinian rocket attacks and examined civilian harm from Israeli strikes."},
    sourceStatus:"The military actions and civilian casualties on both sides are extensively documented. UN reporting criticized indiscriminate Palestinian rocket attacks and examined civilian harm from Israeli strikes.",
    sources:[{label:"United Nations OCHA — November 2012 hostilities",url:"https://www.un.org/unispal/document/auto-insert-201184/"}]
  },
  {
    year:2012, depth:41490, title:"Palestine becomes a UN non-member observer State", location:"United Nations, New York",
    story:"On November 29, 2012, the UN General Assembly adopted Resolution 67/19, granting Palestine non-member observer State status at the United Nations. The move did not resolve questions of sovereignty, borders or recognition but strengthened Palestine's ability to participate in international institutions.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Diplomatic status change",Evidence:"The General Assembly vote and status change are directly documented."},
    sourceStatus:"The General Assembly vote and status change are directly documented.",
    sources:[{label:"United Nations — Question of Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2014, depth:41660, title:"Jerusalem synagogue attack", location:"Jerusalem",
    story:"Two Palestinian attackers armed with guns, knives and axes attacked worshippers at a synagogue in Har Nof in November 2014, killing worshippers and a police officer.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Synagogue terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.gov.il/en/pages/terrorism-deaths-in-israel-1920-1999"}]
  },
  {
    year:2014, depth:41830, title:"Kidnapping and murder of three Israeli teenagers", location:"West Bank",
    story:"In June 2014, Israeli teenagers Eyal Yifrah, Gilad Shaar and Naftali Fraenkel were abducted and murdered in the West Bank. Israel launched a large search and arrest operation against Hamas networks. The killings and ensuing operations sharply increased Israeli-Palestinian tensions.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Kidnapping / murder / escalation",Evidence:"The abduction and murder are firmly documented. Israel attributed the attack to Hamas members; Hamas leadership initially disputed direct organizational responsibility while later praising those responsible."},
    sourceStatus:"The abduction and murder are firmly documented. Israel attributed the attack to Hamas members; Hamas leadership initially disputed direct organizational responsibility while later praising those responsible.",
    sources:[{label:"United Nations — Israeli letter on kidnapped teenagers",url:"https://www.un.org/unispal/document/auto-insert-186162/"}]
  },
  {
    year:2014, depth:42000, title:"Murder of Palestinian teenager Mohammed Abu Khdeir", location:"East Jerusalem",
    story:"In July 2014, Palestinian teenager Mohammed Abu Khdeir was abducted and murdered by Jewish Israelis in a revenge attack following the murder of three Israeli teenagers. His killing triggered widespread Palestinian protests and clashes with Israeli security forces.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Jewish extremist kidnapping / murder",Evidence:"The abduction, murder and revenge motive were established in Israeli criminal proceedings and are widely documented."},
    sourceStatus:"The abduction, murder and revenge motive were established in Israeli criminal proceedings and are widely documented.",
    sources:[{label:"UNICEF — East Jerusalem and Gaza, 2014",url:"https://www.un.org/unispal/document/auto-insert-194480/"}]
  },
  {
    year:2014, depth:42170, title:"Operation Protective Edge / 2014 Gaza War", location:"Gaza Strip and Israel",
    story:"After weeks of escalating violence, Israel launched Operation Protective Edge in July 2014 against Hamas and other armed groups in Gaza. Israel conducted air strikes and a ground offensive, while Palestinian armed groups fired thousands of rockets and mortars toward Israel and used cross-border tunnels. The war caused extensive destruction and very high Palestinian casualties, including many civilians, as well as Israeli military and civilian deaths.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Gaza war / rockets / ground operation",Evidence:"The war and major actions are extensively documented. Exact combatant-versus-civilian classifications, proportionality and allegations of violations of international humanitarian law remain contested."},
    sourceStatus:"The war and major actions are extensively documented. Exact combatant-versus-civilian classifications, proportionality and allegations of violations of international humanitarian law remain contested.",
    sources:[{label:"United Nations — Question of Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2015, depth:42340, title:"Hyper Cacher hostage attack", location:"Paris, France",
    story:"A gunman attacked a kosher supermarket in Paris, killing four Jewish hostages.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Antisemitic terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Charlie-Hebdo-shooting"}]
  },
  {
    year:2015, depth:42510, title:"Duma arson attack kills Palestinian Dawabsheh family", location:"Duma, West Bank",
    story:"In July 2015, attackers set fire to two Palestinian homes in the village of Duma and left Hebrew extremist graffiti. Eighteen-month-old Ali Dawabsheh and his parents later died from their injuries; his young brother survived. Israeli authorities prosecuted Jewish extremists in connection with the attack.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Jewish extremist terrorism / arson",Evidence:"The attack, deaths and extremist motive are firmly documented; Israeli courts later convicted a principal defendant."},
    sourceStatus:"The attack, deaths and extremist motive are firmly documented; Israeli courts later convicted a principal defendant.",
    sources:[{label:"U.S. State Department — Country Reports on Terrorism 2015",url:"https://2009-2017.state.gov/j/ct/rls/crt/2015/257517.htm"}]
  },
  {
    year:2015, depth:42680, title:"2015–2016 Palestinian stabbing, shooting and vehicle-ramming wave", location:"Israel, Jerusalem and West Bank",
    story:"Beginning in late 2015, numerous Palestinians carried out stabbing, shooting and vehicle-ramming attacks against Israeli civilians and security personnel. Israeli forces and civilians killed many attackers, and Palestinians were also killed during clashes and security operations. The violence was sometimes called the 'Knife Intifada,' though it lacked the centralized structure of earlier uprisings.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Terror attacks / individual violence / security response",Evidence:"The wave of attacks and fatalities is extensively documented. Motives varied and many perpetrators acted individually rather than under direct organizational command."},
    sourceStatus:"The wave of attacks and fatalities is extensively documented. Motives varied and many perpetrators acted individually rather than under direct organizational command.",
    sources:[{label:"U.S. State Department — Country Reports on Terrorism 2015",url:"https://2009-2017.state.gov/j/ct/rls/crt/2015/257517.htm"}]
  },
  {
    year:2016, depth:42850, title:"UN Security Council Resolution 2334 on Israeli settlements", location:"United Nations",
    story:"In December 2016, the UN Security Council adopted Resolution 2334, stating that Israeli settlements in territory occupied since 1967, including East Jerusalem, have no legal validity and constitute a major obstacle to a two-state solution. Israel rejected the resolution's position.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Diplomatic / settlement dispute",Evidence:"The Security Council resolution and Israel's rejection are directly documented."},
    sourceStatus:"The Security Council resolution and Israel's rejection are directly documented.",
    sources:[{label:"United Nations — Question of Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2017, depth:43020, title:"United States recognizes Jerusalem as Israel's capital", location:"Jerusalem / Washington, D.C.",
    story:"In December 2017, the United States recognized Jerusalem as the capital of Israel and announced plans to move its embassy there. Israel welcomed the decision, while Palestinian leaders and many governments opposed it because Jerusalem's final status remained unresolved.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"Diplomatic status / Jerusalem dispute",Evidence:"The U.S. recognition is directly documented. Its legal and diplomatic implications remain disputed internationally."},
    sourceStatus:"The U.S. recognition is directly documented. Its legal and diplomatic implications remain disputed internationally.",
    sources:[{label:"United Nations — Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2018, depth:43190, title:"Pittsburgh synagogue shooting", location:"Pittsburgh, United States",
    story:"A gunman attacked worshippers at the Tree of Life synagogue complex, murdering eleven people.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Antisemitic terrorist attack / mass shooting",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.justice.gov/opa/pr/pennsylvania-man-sentenced-death-2018-tree-life-synagogue-shooting"}]
  },
  {
    year:2018, depth:43360, title:"Gaza border protests and clashes", location:"Gaza–Israel border",
    story:"Beginning in March 2018, Palestinians held large demonstrations near the Gaza perimeter fence known as the Great March of Return. Some protesters approached or damaged the fence, threw incendiary devices or explosives, while Israeli forces used live fire, tear gas and other measures. Large numbers of Palestinians were killed and wounded, including civilians.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Mass protest / border violence",Evidence:"The protests, attempted border breaches and large Palestinian casualty toll are extensively documented. The necessity and proportionality of Israeli live fire became the subject of major international legal dispute."},
    sourceStatus:"The protests, attempted border breaches and large Palestinian casualty toll are extensively documented. The necessity and proportionality of Israeli live fire became the subject of major international legal dispute.",
    sources:[{label:"United Nations — Question of Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2018, depth:43530, title:"United States opens embassy in Jerusalem", location:"Jerusalem",
    story:"The United States formally opened its embassy in Jerusalem in May 2018, implementing the recognition announced the previous year. The move coincided with intense Gaza border protests and was rejected by Palestinian leadership.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"Diplomatic change / Jerusalem dispute",Evidence:"The embassy move and international responses are directly documented."},
    sourceStatus:"The embassy move and international responses are directly documented.",
    sources:[{label:"United Nations — Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2019, depth:43700, title:"Poway synagogue shooting", location:"Poway, California, United States",
    story:"An antisemitic gunman opened fire inside Chabad of Poway on the final day of Passover, killing one worshipper and injuring three others, including a child.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Antisemitic mass shooting",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.justice.gov/usao-sdca/pr/john-earnest-pleads-guilty-113-count-federal-hate-crime-indictment-connection-poway"}]
  },
  {
    year:2019, depth:43870, title:"Halle synagogue attack", location:"Halle, Germany",
    story:"An armed extremist attempted to enter a synagogue on Yom Kippur; unable to enter, he murdered two people nearby.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Antisemitic terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Halle-synagogue-shooting"}]
  },
  {
    year:2020, depth:44040, title:"Monsey Hanukkah stabbing", location:"Monsey, New York, United States",
    story:"During a Hanukkah gathering at a rabbi's home, an attacker stabbed multiple people; one victim later died from his injuries.",
    context:"This is an individually identifiable episode within the broader history of violence involving Jewish or Israeli targets. The surrounding conflict is represented separately where appropriate.",
    aftermath:"Additional casualty, perpetrator and aftermath fields will be expanded as the research database grows.",
    stats:{Type:"Antisemitic stabbing attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.justice.gov/opa/pr/monsey-man-charged-federal-hate-crimes-december-2019-stabbing"}]
  },
  {
    year:2020, depth:44210, title:"Abraham Accords normalize Israel's relations with Arab states", location:"Israel, United Arab Emirates, Bahrain and region",
    story:"In 2020, U.S.-brokered agreements established or advanced normalization between Israel and the United Arab Emirates, Bahrain, Morocco and Sudan. The agreements represented a major shift in Arab-Israeli diplomacy because normalization proceeded without a prior Israeli-Palestinian peace settlement.",
    context:"This marker is part of the contemporary conflict chronology. It distinguishes attacks on civilians, armed-group actions, Israeli military operations, Jewish extremist violence, mass protest and diplomatic developments rather than presenting them as morally or legally identical.",
    aftermath:"These events deepened the political division between Gaza and the West Bank, produced repeated rounds of Gaza–Israel warfare and violence in Jerusalem and the West Bank, while regional diplomacy increasingly developed on a separate track from the unresolved Israeli–Palestinian conflict.",
    stats:{Type:"Regional normalization / diplomacy",Evidence:"The agreements and normalization steps are directly documented; implementation and the status of individual bilateral arrangements have varied."},
    sourceStatus:"The agreements and normalization steps are directly documented; implementation and the status of individual bilateral arrangements have varied.",
    sources:[{label:"United Nations — Question of Palestine timeline",url:"https://www.un.org/unispal/timeline/"}]
  },
  {
    year:2021, depth:44380, title:"May 2021 Jerusalem crisis and Israel–Hamas war", location:"Jerusalem, Gaza Strip and Israel",
    story:"Tensions over Sheikh Jarrah, Ramadan restrictions and clashes at Jerusalem holy sites escalated sharply in May 2021. Hamas fired rockets toward Jerusalem and other Israeli cities; Israel responded with an intensive air campaign in Gaza. During eleven days of fighting, thousands of rockets were fired from Gaza and hundreds of Israeli strikes hit Gaza.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Gaza–Israel war / rockets / air strikes",Evidence:"The escalation, rocket fire, Israeli strikes and casualties are extensively documented. UN reporting recorded 253 Palestinians killed during the hostilities and 13 people killed in Israel, while casualty classifications and individual strike legality were disputed."},
    sourceStatus:"The escalation, rocket fire, Israeli strikes and casualties are extensively documented. UN reporting recorded 253 Palestinians killed during the hostilities and 13 people killed in Israel, while casualty classifications and individual strike legality were disputed.",
    sources:[{label:"United Nations — May 2021 hostilities",url:"https://www.un.org/unispal/document/action-by-un-system-and-intergovernmental-organizations-relevant-to-the-question-of-palestine-may-2021-monthly-bulletin/"}]
  },
  {
    year:2021, depth:44550, title:"Jewish–Arab communal violence in mixed Israeli cities", location:"Lod, Acre, Jaffa and other Israeli cities",
    story:"As the May 2021 Gaza conflict unfolded, serious communal violence erupted inside Israel. Jewish and Arab mobs attacked people, homes, businesses, vehicles and religious sites in several mixed cities. The violence included killings and assaults and exposed deep tensions between Jewish and Arab citizens.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Communal violence / riots",Evidence:"Violence by both Jewish and Arab groups is extensively documented. Individual incidents had different perpetrators and circumstances and should not be collapsed into one-sided attribution."},
    sourceStatus:"Violence by both Jewish and Arab groups is extensively documented. Individual incidents had different perpetrators and circumstances and should not be collapsed into one-sided attribution.",
    sources:[{label:"United Nations — May 2021 bulletin",url:"https://www.un.org/unispal/document/action-by-un-system-and-intergovernmental-organizations-relevant-to-the-question-of-palestine-may-2021-monthly-bulletin/"}]
  },
  {
    year:2022, depth:44720, title:"Colleyville synagogue hostage crisis", location:"Colleyville, Texas, United States",
    story:"An armed man took worshippers hostage at Congregation Beth Israel in January 2022. The hostages ultimately escaped or were rescued; the attacker was killed.",
    context:"This event is shown separately because it is an identifiable episode within a broader period of violence.",
    aftermath:"Event-specific consequences and additional primary and secondary sources will continue to be expanded.",
    stats:{Type:"Synagogue hostage-taking",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.justice.gov/usao-ndtx/press-release/file/1465966/dl"}]
  },
  {
    year:2022, depth:44890, title:"West Bank violence reaches highest Palestinian death toll in years", location:"West Bank and Israel",
    story:"Violence intensified sharply during 2022. Palestinian attacks killed Israelis, while Israeli arrest raids and armed clashes, especially around Jenin and Nablus, killed growing numbers of Palestinians. Settler attacks against Palestinians also increased. The UN described 2022 as on course to be the deadliest year for Palestinians in the West Bank since systematic UN tracking began in 2005.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Armed attacks / raids / settler violence",Evidence:"The escalation and casualty trend are extensively documented by UN monitoring. Individual incidents involved civilians, militants, security forces and settlers in different circumstances."},
    sourceStatus:"The escalation and casualty trend are extensively documented by UN monitoring. Individual incidents involved civilians, militants, security forces and settlers in different circumstances.",
    sources:[{label:"United Nations Security Council — 2022 violence",url:"https://press.un.org/en/2022/sc15086.doc.htm"}]
  },
  {
    year:2023, depth:45060, title:"Huwara attack and settler rampage", location:"Huwara and surrounding West Bank villages",
    story:"On February 26, 2023, a Palestinian gunman killed two Israeli brothers near Huwara. Hours later, hundreds of Israeli settlers attacked Huwara and nearby Palestinian communities, burning homes, shops and vehicles. A Palestinian man was killed and many people were injured.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Terror attack / settler mob violence",Evidence:"Both the killing of the Israeli brothers and the subsequent settler rampage are extensively documented. Israeli leaders, including the president, condemned the settler violence."},
    sourceStatus:"Both the killing of the Israeli brothers and the subsequent settler rampage are extensively documented. Israeli leaders, including the president, condemned the settler violence.",
    sources:[{label:"UN Human Rights — Huwara violence",url:"https://www.un.org/unispal/document/ohchr-statement-opt-3mar2023/"}]
  },
  {
    year:2023, depth:45230, title:"Large-scale Israeli operation in Jenin refugee camp", location:"Jenin, West Bank",
    story:"On July 3–4, 2023, Israeli forces launched a large air-and-ground operation in and around Jenin refugee camp targeting armed groups and weapons infrastructure. Palestinian militants exchanged fire with Israeli forces. Palestinians, including children, were killed, many people were injured and infrastructure in the camp was damaged.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Israeli military raid / armed clashes",Evidence:"The operation, air strikes, armed exchanges and casualties are extensively documented. Israeli authorities said forces targeted militant infrastructure; humanitarian organizations documented civilian harm and access problems."},
    sourceStatus:"The operation, air strikes, armed exchanges and casualties are extensively documented. Israeli authorities said forces targeted militant infrastructure; humanitarian organizations documented civilian harm and access problems.",
    sources:[{label:"United Nations OCHA — Jenin operation",url:"https://www.un.org/unispal/document/israeli-operation-jenin-ocha-3july2023/"}]
  },
  {
    year:2023, depth:45400, title:"October 7 Hamas-led attack on southern Israel", location:"Southern Israel near the Gaza Strip",
    story:"On October 7, 2023, Hamas and other Palestinian armed groups launched a coordinated assault into southern Israel under heavy rocket fire. Attackers entered communities, a music festival and military sites, deliberately killed civilians and soldiers, and abducted hostages into Gaza. About 1,200 Israelis and foreign nationals were killed and 251 people were taken hostage according to current Israeli figures.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Massacre / terrorism / hostage-taking",Evidence:"The coordinated attack, deliberate killing of civilians and hostage-taking are extensively documented. A UN Commission of Inquiry concluded that Hamas and other armed groups committed war crimes, including murder and hostage-taking, and found evidence of sexual and gender-based violence."},
    sourceStatus:"The coordinated attack, deliberate killing of civilians and hostage-taking are extensively documented. A UN Commission of Inquiry concluded that Hamas and other armed groups committed war crimes, including murder and hostage-taking, and found evidence of sexual and gender-based violence.",
    sources:[{label:"United Nations Commission of Inquiry — October 7",url:"https://www.un.org/unispal/document/coi-report-a-hrc-56-26-27may24/"}]
  },
  {
    year:2023, depth:45570, title:"Israel launches large-scale Gaza war after October 7", location:"Gaza Strip",
    story:"Israel responded to the October 7 attack with a large-scale air campaign and ground invasion of Gaza, stating that its objectives were to dismantle Hamas and return the hostages. The campaign caused enormous destruction, mass displacement and a very high Palestinian death toll, including civilians, while Israeli soldiers were also killed in combat and Palestinian armed groups continued attacks.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"War / ground invasion / humanitarian catastrophe",Evidence:"The scale of military operations, destruction and displacement is extensively documented. Palestinian casualty totals are reported by Gaza health authorities and widely used by UN agencies, while combatant classifications and allegations concerning proportionality, starvation, genocide and other violations remain subjects of legal proceedings and intense dispute."},
    sourceStatus:"The scale of military operations, destruction and displacement is extensively documented. Palestinian casualty totals are reported by Gaza health authorities and widely used by UN agencies, while combatant classifications and allegations concerning proportionality, starvation, genocide and other violations remain subjects of legal proceedings and intense dispute.",
    sources:[{label:"United Nations OCHA — one year since October 7",url:"https://www.un.org/unispal/document/ocha-statement-07oct24/"}]
  },
  {
    year:2023, depth:45740, title:"Israel–Hezbollah border conflict expands after October 7", location:"Israel–Lebanon border",
    story:"Beginning shortly after October 7, Hezbollah and Israel exchanged near-daily fire across the Lebanon border. Hezbollah said it was acting in support of Gaza; Israel struck Hezbollah positions and commanders. Tens of thousands of civilians on both sides of the border were displaced as the confrontation intensified.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Cross-border war / rockets / air strikes",Evidence:"The sustained exchanges and mass displacement are extensively documented. The conflict escalated significantly during 2024 and again later in the regional war."},
    sourceStatus:"The sustained exchanges and mass displacement are extensively documented. The conflict escalated significantly during 2024 and again later in the regional war.",
    sources:[{label:"United Nations — Lebanon and Israel",url:"https://news.un.org/en/tags/lebanon"}]
  },
  {
    year:2024, depth:45910, title:"Iran and Israel exchange direct attacks", location:"Israel and Iran",
    story:"In April 2024, Iran launched hundreds of drones and missiles toward Israel after an Israeli strike on an Iranian diplomatic compound in Damascus killed senior Iranian commanders. Israel and partners intercepted most incoming weapons, and Israel subsequently carried out a limited strike in Iran. The exchange marked an unprecedented move from the long-running shadow conflict into direct state-to-state attacks.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Iran–Israel direct conflict",Evidence:"The attacks and interceptions are extensively documented. Attribution for the Damascus strike was widely reported as Israeli although Israel did not publicly claim it at the time."},
    sourceStatus:"The attacks and interceptions are extensively documented. Attribution for the Damascus strike was widely reported as Israeli although Israel did not publicly claim it at the time.",
    sources:[{label:"United Nations — Security Council on Iran-Israel escalation",url:"https://press.un.org/en/2024/sc15660.doc.htm"}]
  },
  {
    year:2024, depth:46080, title:"Israel–Hezbollah war escalates in Lebanon", location:"Lebanon and northern Israel",
    story:"The Israel–Hezbollah confrontation escalated dramatically in 2024, including Israeli strikes across Lebanon, Hezbollah rocket and missile fire into Israel, the killing of senior Hezbollah leaders and Israeli ground operations in southern Lebanon. Large civilian populations were displaced and casualties rose sharply.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Israel–Hezbollah war",Evidence:"The escalation, strikes, ground fighting and displacement are extensively documented. Assessments of individual attacks and compliance with international humanitarian law remain contested."},
    sourceStatus:"The escalation, strikes, ground fighting and displacement are extensively documented. Assessments of individual attacks and compliance with international humanitarian law remain contested.",
    sources:[{label:"United Nations — Lebanon crisis",url:"https://news.un.org/en/tags/lebanon"}]
  },
  {
    year:2024, depth:46250, title:"ICJ advisory opinion on Israel's occupation and settlement policies", location:"International Court of Justice, The Hague",
    story:"In July 2024, the International Court of Justice issued an advisory opinion concluding that Israel's continued presence in the Occupied Palestinian Territory is unlawful and addressing consequences arising from settlement and annexation policies. Israel rejected the opinion's conclusions and criticized the proceedings.",
    context:"This marker was added during the full timeline audit to fill a significant historical gap while maintaining the site's distinction between violence, political developments, diplomacy and legal context.",
    aftermath:"Its significance is best understood together with the surrounding events in the same period rather than as an isolated episode.",
    stats:{Type:"International legal ruling / occupation",Evidence:"The advisory opinion is an authoritative court document, but it is advisory rather than a judgment resolving a contentious case between consenting states."},
    sourceStatus:"The advisory opinion is an authoritative court document, but it is advisory rather than a judgment resolving a contentious case between consenting states.",
    sources:[{label:"International Court of Justice — Advisory Opinion",url:"https://www.icj-cij.org/case/186"}]
  },
  {
    year:2025, depth:46420, title:"Gaza ceasefire and hostage-prisoner exchanges", location:"Gaza Strip and Israel",
    story:"Ceasefire arrangements during the post-October 7 war produced exchanges in which Israeli hostages held in Gaza were released in return for Palestinian prisoners and detainees. A later U.S.-brokered ceasefire agreed in October 2025 ended full-scale fighting, though Israeli attacks continued and major political, humanitarian and security issues remained unresolved.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Ceasefire / hostage and prisoner exchange",Evidence:"The ceasefire and exchanges are documented. Implementation remained incomplete and the agreement did not produce a comprehensive political settlement or fully end violence."},
    sourceStatus:"The ceasefire and exchanges are documented. Implementation remained incomplete and the agreement did not produce a comprehensive political settlement or fully end violence.",
    sources:[{label:"Reuters — Gaza ceasefire context, 2026",url:"https://www.reuters.com/world/middle-east/evacuated-an-incubator-now-back-gaza-getting-know-mama-2026-10-02/"}]
  },
  {
    year:2026, depth:46590, title:"Gaza after the 2025 ceasefire: continuing strikes and humanitarian crisis", location:"Gaza Strip",
    story:"By 2026, the October 2025 ceasefire had ended full-scale warfare but had not produced a stable peace. Israeli strikes continued, Hamas had not been disarmed, and Gaza remained devastated by years of war. Severe shortages, damaged infrastructure and displacement continued to affect civilians.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Post-ceasefire conflict / humanitarian crisis",Evidence:"Current as of October 2026. Reuters reports that strikes continued despite the ceasefire and that Gaza's humanitarian and energy crises remained severe. Because conditions continue to change, this marker should be treated as an evolving record."},
    sourceStatus:"Current as of October 2026. Reuters reports that strikes continued despite the ceasefire and that Gaza's humanitarian and energy crises remained severe. Because conditions continue to change, this marker should be treated as an evolving record.",
    sources:[{label:"Reuters — Gaza conditions, September 2026",url:"https://www.reuters.com/business/energy/gazas-hospitals-homes-struggle-keep-generators-running-oil-shortages-bite-2026-09-10/"}]
  },
  {
    year:2026, depth:46760, title:"U.S.–Israel campaign against Iran", location:"Iran and wider Middle East",
    story:"In 2026, the regional conflict expanded into a direct U.S.–Israeli military campaign against Iran, described by U.S. officials as Operation Epic Fury. The war produced major regional repercussions and affected diplomacy, energy security and neighboring states.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Regional interstate war",Evidence:"Current as of October 2026. Reuters reporting confirms the U.S.–Israel campaign against Iran. Operational details and consequences remain developing and should be updated as stronger official and archival records become available."},
    sourceStatus:"Current as of October 2026. Reuters reporting confirms the U.S.–Israel campaign against Iran. Operational details and consequences remain developing and should be updated as stronger official and archival records become available.",
    sources:[{label:"Reuters — U.S.–Israel campaign against Iran",url:"https://www.reuters.com/world/africa/us-waives-rights-conditions-320-million-military-aid-egypt-letter-shows-2026-10-01/"}]
  },
  {
    year:2026, depth:46930, title:"Israel–Hezbollah ceasefire after renewed Lebanon escalation", location:"Israel and Lebanon",
    story:"After renewed fighting linked to the wider regional conflict, Israel and Hezbollah agreed to a U.S.-announced ceasefire in June 2026. Israeli forces remained in southern Lebanon, and early strikes occurred around the ceasefire's start, underscoring the fragility of the arrangement.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Ceasefire / Israel–Hezbollah conflict",Evidence:"Current as of October 2026. Reuters reported confirmation of the ceasefire by a U.S. official, an Israeli official and Hezbollah sources. Its durability remains an evolving question."},
    sourceStatus:"Current as of October 2026. Reuters reported confirmation of the ceasefire by a U.S. official, an Israeli official and Hezbollah sources. Its durability remains an evolving question.",
    sources:[{label:"Reuters — Israel–Hezbollah ceasefire, June 2026",url:"https://www.investing.com/news/world-news/israeli-hezbollah-agree-to-ceasefire-starting-on-friday-us-official-4751504"}]
  },
  {
    year:2026, depth:47100, title:"2026 — YOU ARE HERE", location:"Present day",
    story:"The timeline reaches the present in October 2026. The historical record remains open: Gaza is under a fragile post-war ceasefire environment, Israeli-Palestinian violence and displacement remain unresolved, and the wider regional confrontation involving Israel, Iran and Hezbollah has produced new wars and ceasefires.",
    context:"This marker belongs to the contemporary phase of the conflict. Events after 2021 are presented with explicit perpetrator attribution, separate markers for attacks and military responses, and caution around evolving casualty figures and unresolved legal claims.",
    aftermath:"The consequences remain ongoing. This section is intentionally treated as a living historical record and should be updated as ceasefires, wars, investigations, hostage issues and regional political arrangements develop.",
    stats:{Type:"Present-day marker",Evidence:"This is a live endpoint, not a settled historical conclusion. Contemporary facts, casualty figures, legal findings and political arrangements may change as new evidence and authoritative records emerge."},
    sourceStatus:"This is a live endpoint, not a settled historical conclusion. Contemporary facts, casualty figures, legal findings and political arrangements may change as new evidence and authoritative records emerge.",
    sources:[{label:"Reuters — Middle East developments, October 2026",url:"https://www.reuters.com/world/middle-east/"}]
  }
];
events.forEach((event,index)=>{if(!event.id)event.id=stableEventId(event,index);});


const eras = [
  {name:"Biblical Origins & Ancient Israel",range:"Jacob/Israel tradition → 586 BCE",start:0,end:3920},
  {name:"Second Temple Period",range:"586 BCE–70 CE",start:3920,end:7660},
  {name:"Roman & Byzantine Period",range:"70–622 CE",start:7660,end:9530},
  {name:"Early Islamic Period",range:"622–1096 CE",start:9530,end:11400},
  {name:"Crusades & Medieval Period",range:"1096–1492 CE",start:11400,end:15480},
  {name:"Early Modern Jewish Diaspora",range:"1492–1881 CE",start:15480,end:17690},
  {name:"Modern Europe & Pogroms",range:"1881–1933 CE",start:17690,end:19390},
  {name:"The Holocaust",range:"1933–1945 CE",start:19390,end:25340},
  {name:"Israel & Arab–Israeli Conflict",range:"1945–2000 CE",start:25340,end:37240},
  {name:"Contemporary Era",range:"2000–2026 CE",start:37240,end:47620}
];

const MAX_DEPTH=47620;
let depth=0, velocity=0, paused=false, rafId=0;
const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const abyss=document.getElementById("abyss");
const person=document.getElementById("fallingPerson");
const personLight=document.getElementById("personLight");
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
function historyOverlap(event){
  const text=[event.title,event.location,event.story,event.context,event.aftermath].filter(Boolean).join(" ").toLowerCase();
  const christian=/christian|christianity|church|pope|crusad|byzantine|jesus|christ|patriarch|blood libel|ritual murder|inquisition/.test(text);
  const islamic=/islam|muslim|muhammad|caliph|caliphate|ottoman|dhimmi|medina|mecca|banu |khaybar|arab conquest|fatimid|mamluk/.test(text);
  return christian&&islamic?"both":christian?"christian":islamic?"islamic":"";
}
function overlapBadge(kind){
  if(kind==="christian")return '<em class="overlap-badge christian-overlap-badge">Christian history overlap</em>';
  if(kind==="islamic")return '<em class="overlap-badge islam-overlap-badge">Islamic history overlap</em>';
  if(kind==="both")return '<em class="overlap-badge christian-overlap-badge">Christian history overlap</em><em class="overlap-badge islam-overlap-badge">Islamic history overlap</em>';
  return "";
}
const markerEls=events.map((event,index)=>{
  const displayEvent=(window.FALLING_I18N&&window.FALLING_I18N.localizeEvent)?window.FALLING_I18N.localizeEvent(TIMELINE_KIND,event):event;
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="event-marker";
  const overlap=historyOverlap(event);
  if(overlap==="christian") btn.classList.add("christian-overlap");
  if(overlap==="islamic") btn.classList.add("islam-overlap");
  if(overlap==="both") btn.classList.add("christian-overlap","islam-overlap");
  btn.setAttribute("aria-label",event.year+" — "+displayEvent.title+". Open event details.");
  if(index%2===0) btn.style.left="7%"; else btn.style.right="7%";
  btn.innerHTML='<span class="dot"></span><span><small>'+event.year+'</small><strong>'+displayEvent.title+'</strong>'+overlapBadge(overlap)+'</span>';
  btn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();openEvent(event)});
  wireOverlapLinks(btn,event);
  eventsLayer.appendChild(btn);
  return btn;
});
function wireOverlapLinks(btn,event){
  const links=[["christian-overlap-badge","christianity.html"],["islam-overlap-badge","islam.html"]];
  links.forEach(([cls,page])=>btn.querySelectorAll("."+cls).forEach(badge=>{
    badge.dataset.historyLink="true";
    badge.title="Open this year in the related history timeline";
    badge.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();window.location.href=page+"?year="+encodeURIComponent(event.year)+"&from=jewish"});
  }));
}
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
  if(personLight){
    const lightStrength=Math.max(0,1-depthT);
    const lightFade=Math.pow(lightStrength,2.15);
    const lightScale=.18+lightFade*.98;
    personLight.style.opacity=(lightFade*.92).toFixed(3);
    personLight.style.transform='translate(-50%,-50%) scale('+lightScale.toFixed(3)+')';
    personLight.style.filter='blur('+(10+depthT*30).toFixed(1)+'px)';
  }

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
function compareWords(text){
  return new Set((text||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(w=>w.length>3&&!["history","event","during","after","before","against","under","from","into","this","that","with","were","their","which","where"].includes(w)));
}
function compareScore(source,candidate){
  let score=0;
  const gap=Math.abs((source.year||0)-(candidate.year||0));
  if(gap===0)score+=90;else if(gap<=2)score+=55;else if(gap<=10)score+=25;else if(gap<=25)score+=8;else score-=Math.min(40,gap/10);
  const a=compareWords([source.title,source.location,source.context].join(" "));
  const b=compareWords([candidate.title,candidate.location,candidate.context].join(" "));
  a.forEach(w=>{if(b.has(w))score+=7;});
  const st=(source.title||"").toLowerCase(),ct=(candidate.title||"").toLowerCase();
  if(st&&ct&&(st.includes(ct)||ct.includes(st)))score+=60;
  return score;
}
function bestComparedEvent(source,kind){
  const pool=(window.HISTORY_COMPARE_DATA&&window.HISTORY_COMPARE_DATA[kind])||[];
  if(!pool.length)return null;
  let best=pool[0],bestScore=-Infinity;
  pool.forEach(candidate=>{const s=compareScore(source,candidate);if(s>bestScore){best=candidate;bestScore=s;}});
  return bestScore>=20?best:null;
}
function renderCompareCard(kind,label,event,page,fromKind){
  const card=document.createElement("article");card.className="compare-history-card "+kind+"-compare";
  if(!event){
    card.innerHTML="<small>"+label+"</small><h3>No confident matching event</h3><p>The timelines do not yet contain a sufficiently close corresponding entry for this comparison.</p>";
    return card;
  }
  card.innerHTML="<small>"+label+"</small><h3></h3><p class=\"compare-location\"></p><h4>What happened</h4><p class=\"compare-story\"></p><h4>Historical context</h4><p class=\"compare-context\"></p><h4>Aftermath</h4><p class=\"compare-aftermath\"></p><div class=\"compare-source-status\"><strong>Sources & certainty</strong><p></p></div>";
  card.querySelector("h3").textContent=event.year+" — "+event.title;
  card.querySelector(".compare-location").textContent=event.location||"";
  card.querySelector(".compare-story").textContent=event.story||"";
  card.querySelector(".compare-context").textContent=event.context||"";
  card.querySelector(".compare-aftermath").textContent=event.aftermath||"";
  card.querySelector(".compare-source-status p").textContent=event.sourceStatus||"Source review still in progress.";
  const a=document.createElement("a");a.className="btn compare-open";a.href=page+"?year="+encodeURIComponent(event.year)+"&from="+fromKind+"&match="+eventKey(event);a.textContent="Open in "+label+" →";card.appendChild(a);
  return card;
}
function historyConnectionType(a,b){
  const text=[a.title,a.story,a.context,a.aftermath,b.title,b.story,b.context,b.aftermath].filter(Boolean).join(" ").toLowerCase();
  const sameYear=Math.abs((a.year||0)-(b.year||0))<=2;
  const words=s=>new Set((s||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(w=>w.length>4));
  const aw=words(a.title),bw=words(b.title);let shared=0;aw.forEach(w=>{if(bw.has(w))shared++;});
  if(sameYear&&shared>=1)return["Shared Event","These entries describe the same or closely connected historical moment from different historical traditions."];
  if(/war|battle|conquest|crusad|massacre|persecution|revolt|expulsion|siege|conflict/.test(text))return["Conflict","The histories intersect through conflict, political violence, persecution, conquest, or competing control of people and territory."];
  if(/empire|emperor|caliph|sultan|kingdom|roman|byzantine|ottoman|rule|dynasty|province/.test(text))return["Empire & Rule","The connection is political: both histories were shaped by the same empire, ruler, government, or change in territorial control."];
  if(/diaspora|migration|migrat|exile|expel|refugee|settle|dispers|immigra/.test(text))return["Migration & Diaspora","The connection involves the movement or displacement of communities, linking religious history across different regions."];
  if(/church|rabbi|synagogue|mosque|theology|doctrine|scripture|council|reform|religious|faith|conversion|prophet/.test(text))return["Religious Development","The events connect through the development of religious belief, institutions, scripture, leadership, or practice."];
  if(/trade|culture|translation|learning|philosoph|science|language|exchange|scholar/.test(text))return["Cultural Exchange","The histories intersect through ideas, scholarship, language, commerce, or cultural contact between communities."];
  return["Different Perspectives","These events are historically close enough to compare, showing how different communities experienced or interpreted the same broader period."];
}
function renderHistoryConnection(items){
 const box=document.getElementById("compareHistoryConnection");if(!box)return;box.innerHTML="";
 if(items.length<2){box.classList.add("hidden");return;}box.classList.remove("hidden");
 const base=items[0],parts=[];
 const clean=s=>(s||"").replace(/\s+/g," ").trim();
 const esc=s=>clean(s).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const yearLabel=y=>Number(y)<0?Math.abs(Number(y))+" BCE":Number(y)===0?"1 BCE / 1 CE":Number(y)+" CE";
 const keywords=s=>new Set(clean(s).toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(w=>w.length>4&&!["history","event","people","during","after","before","their","these","which","through","between","under","against","became"].includes(w)));
 items.slice(1).forEach(other=>{
   const a=base.event,b=other.event,[type,desc]=historyConnectionType(a,b),diff=Math.abs(Number(a.year)-Number(b.year));
   const at=keywords([a.title,a.location,a.context].join(" ")),bt=keywords([b.title,b.location,b.context].join(" ")),shared=[];at.forEach(w=>{if(bt.has(w)&&shared.length<4)shared.push(w);});
   const samePlace=clean(a.location).toLowerCase()===clean(b.location).toLowerCase()&&clean(a.location);
   let timing=diff<=2?"They occur at essentially the same historical moment":diff<=25?"They occur within "+diff+" years of one another":(Number(a.year)<Number(b.year)?base.label+" event comes about "+diff+" years earlier":other.label+" event comes about "+diff+" years earlier");
   let specific=timing+". ";
   if(samePlace)specific+="Both are centered on "+a.location+", so the overlap is geographic as well as historical. ";
   else if(shared.length)specific+="Their descriptions share historical context around "+shared.map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(", ")+". ";
   specific+=desc+" ";
   specific+="In "+base.label+", this appears as “"+a.title+"” ("+yearLabel(a.year)+"); in "+other.label+", the related entry is “"+b.title+"” ("+yearLabel(b.year)+").";
   parts.push('<div class="history-connection-item '+other.kind+'-connection"><span class="history-connection-type">'+esc(type)+'</span><strong>'+esc(base.label)+' ↔ '+esc(other.label)+'</strong><p>'+esc(specific)+'</p></div>');
 });
 box.innerHTML='<div class="history-connection-heading"><small>Historical connection</small><strong>Why these histories are connected</strong><p>Compare the same period through the events, places and communities recorded in each timeline.</p></div>'+parts.join("");
}
function showComparisonMap(items){
  const dots=document.getElementById("compareAtlasDots"),land=document.getElementById("compareAtlasLand"),legend=document.getElementById("compareAtlasLegend"),insight=document.getElementById("compareAtlasInsight");
  if(!dots||!land||!legend||!insight||!window.findHistoryMapPlace)return;
  dots.replaceChildren();legend.replaceChildren();insight.innerHTML="";
  const mainLand=document.getElementById("mapLand");
  if(mainLand&&mainLand.childNodes.length)land.innerHTML=mainLand.innerHTML;
  else fetch("data/ne_110m_land.geojson").then(r=>r.json()).then(data=>{
    const ns="http://www.w3.org/2000/svg";
    const point=(lat,lon)=>({x:lon+180,y:90-lat});
    const ringPath=r=>r.map((v,i)=>{const q=point(v[1],v[0]);return(i?"L":"M")+q.x.toFixed(2)+" "+q.y.toFixed(2)}).join(" ")+" Z";
    const geometryPath=g=>g.type==="Polygon"?g.coordinates.map(ringPath).join(" "):g.type==="MultiPolygon"?g.coordinates.flatMap(p=>p.map(ringPath)).join(" "):"";
    data.features.forEach(feature=>{const d=geometryPath(feature.geometry);if(!d)return;const path=document.createElementNS(ns,"path");path.setAttribute("d",d);path.setAttribute("fill-rule","evenodd");land.appendChild(path);});
  }).catch(()=>{});
  const ns="http://www.w3.org/2000/svg",plotted=[];
  items.forEach(item=>{const place=window.findHistoryMapPlace(item.event);if(place)plotted.push({...item,place});});
  const geoDistanceKm=(a,b)=>{const R=6371,rad=n=>n*Math.PI/180,dLat=rad(b.lat-a.lat),dLon=rad(b.lon-a.lon),la1=rad(a.lat),la2=rad(b.lat);const h=Math.sin(dLat/2)**2+Math.cos(la1)*Math.cos(la2)*Math.sin(dLon/2)**2;return Math.round(2*R*Math.asin(Math.sqrt(h)));};
  const geoDirection=(a,b)=>{const dy=b.lat-a.lat,dx=b.lon-a.lon;if(Math.abs(dx)<2&&Math.abs(dy)<2)return"same area";const ns=dy>2?"north":dy<-2?"south":"",ew=dx>2?"east":dx<-2?"west":"";return ns&&ew?ns+"-"+ew:ns||ew;};
  if(plotted.length>1){
    const relations=[];
    for(let i=1;i<plotted.length;i++){
      const a=plotted[0],b=plotted[i],km=geoDistanceKm(a.place,b.place),direction=geoDirection(a.place,b.place);
      if(km<80)relations.push("<strong>Shared geography:</strong> "+a.label+" and "+b.label+" events occur in the same historical area around "+a.event.location+".");
      else relations.push("<strong>"+a.label+" ↔ "+b.label+":</strong> approximately "+km.toLocaleString()+" km apart; the "+b.label+" event is "+direction+" of the "+a.label+" event.");
    }
    insight.innerHTML=relations.join("<br>");
  }else if(plotted.length===1){insight.innerHTML="<strong>Geographic context:</strong> only one of the compared events has a precise mapped location, so no distance relationship can be calculated.";}
  else{insight.innerHTML="<strong>Geographic context:</strong> these events do not yet have precise enough location data for a meaningful map comparison.";}
  if(plotted.length>1){
    const lines=document.createElementNS(ns,"g");lines.setAttribute("class","compare-map-connections");
    for(let i=1;i<plotted.length;i++){const a=plotted[0].place,b=plotted[i].place,line=document.createElementNS(ns,"line");line.setAttribute("x1",a.lon+180);line.setAttribute("y1",90-a.lat);line.setAttribute("x2",b.lon+180);line.setAttribute("y2",90-b.lat);line.setAttribute("class","compare-map-connection");lines.appendChild(line);}dots.appendChild(lines);
  }
  plotted.forEach(({kind,label,event,place})=>{
    const x=place.lon+180,y=90-place.lat,g=document.createElementNS(ns,"g"),halo=document.createElementNS(ns,"circle"),core=document.createElementNS(ns,"circle"),title=document.createElementNS(ns,"title");
    g.setAttribute("class","compare-map-marker "+kind+"-map-marker");halo.setAttribute("cx",x);halo.setAttribute("cy",y);halo.setAttribute("r","7");halo.setAttribute("class","compare-map-halo");core.setAttribute("cx",x);core.setAttribute("cy",y);core.setAttribute("r","2.8");core.setAttribute("class","compare-map-core");title.textContent=label+" — "+event.title+" • "+event.location;g.append(title,halo,core);dots.appendChild(g);
    const tag=document.createElement("span");tag.className="compare-map-legend "+kind+"-map-legend";tag.textContent=label+": "+event.location;legend.appendChild(tag);
  });
  if(!plotted.length){const tag=document.createElement("span");tag.textContent="No precise map location is available for these events.";legend.appendChild(tag);}
}
function restoreTimelineMap(){}
function comparisonTargets(event){const targets=[];const overlap=historyOverlap(event);if(overlap==="christian"||overlap==="both")targets.push(["christian","Christian history","christianity.html"]);if(overlap==="islamic"||overlap==="both")targets.push(["islamic","Islamic history","islam.html"]);return targets;}
function eventKey(event){return encodeURIComponent(event.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""));}
function openComparison(event){
  const compare=document.getElementById("comparePanel"),grid=document.getElementById("compareGrid");
  document.getElementById("compareSubtitle").textContent=event.year+" • "+event.location;
  grid.innerHTML="";
  const current=renderCompareCard("jewish","Jewish history",event,location.pathname.split("/").pop()||"index.html","jewish");
  current.classList.add("current-history");grid.appendChild(current);
  const mapItems=[{kind:"jewish",label:"Jewish",event}];
  comparisonTargets(event).forEach(([kind,label,page])=>{
    const matched=bestComparedEvent(event,kind);
    grid.appendChild(renderCompareCard(kind,label,matched,page,"jewish"));
    if(matched)mapItems.push({kind,label,event:matched});
  });
  renderHistoryConnection(mapItems);showComparisonMap(mapItems);panel.classList.add("hidden");compare.classList.remove("hidden");document.body.classList.add("event-open");
}
function closeComparison(){document.getElementById("comparePanel").classList.add("hidden");document.body.classList.remove("event-open");restoreTimelineMap();paused=false;}
function sameTimeYearLabel(year){const y=Number(year);if(!Number.isFinite(y))return String(year||"");return y<0?Math.abs(y)+" BCE":y===0?"1 BCE / 1 CE":y+" CE";}
function renderSameTimeHistory(currentEvent){
  let box=document.getElementById("sameTimeHistoryBox");
  if(!box){box=document.createElement("section");box.id="sameTimeHistoryBox";box.className="same-time-history";const sourceCard=document.querySelector(".sources-card");if(sourceCard)sourceCard.before(box);}
  const data=window.HISTORY_COMPARE_DATA||{},currentYear=Number(currentEvent.year);
  const timelines=[{kind:"jewish",label:"Jewish",page:"index.html"},{kind:"christian",label:"Christian",page:"christianity.html"},{kind:"islamic",label:"Islamic",page:"islam.html"}],candidates=[];
  timelines.forEach(t=>(data[t.kind]||[]).forEach(e=>{const y=Number(e.year),diff=Math.abs(y-currentYear);if(!Number.isFinite(y)||diff>35)return;if(t.kind==="jewish"&&e.title===currentEvent.title&&y===currentYear)return;candidates.push({event:e,timeline:t,diff});}));
  candidates.sort((a,b)=>a.diff-b.diff||(a.timeline.kind==="jewish")-(b.timeline.kind==="jewish"));
  const chosen=[],usedKinds=new Set(),used=new Set();
  for(const item of candidates){const key=item.timeline.kind+":"+item.event.title+":"+item.event.year;if(used.has(key))continue;if(!usedKinds.has(item.timeline.kind)){chosen.push(item);used.add(key);usedKinds.add(item.timeline.kind);}if(chosen.length===3)break;}
  for(const item of candidates){if(chosen.length===3)break;const key=item.timeline.kind+":"+item.event.title+":"+item.event.year;if(used.has(key))continue;chosen.push(item);used.add(key);}
  box.innerHTML='<div class="same-time-heading"><small>World at this time</small><h3>What was happening around '+sameTimeYearLabel(currentYear)+'?</h3><p>A snapshot of nearby events already documented across the site, within about 35 years of this event.</p></div>';
  if(!chosen.length){box.innerHTML+='<p class="same-time-empty">No other documented timeline events are currently close enough to this date.</p>';return;}
  const grid=document.createElement("div");grid.className="same-time-grid world-snapshot-grid";
  chosen.forEach(item=>{const a=document.createElement("a");a.className="same-time-card "+item.timeline.kind+"-same-time";a.href=item.timeline.page+"?year="+encodeURIComponent(item.event.year)+"&match="+encodeURIComponent(eventKey(item.event))+"&from=jewish";const relation=item.timeline.kind==="jewish"?"Same timeline":"Another tradition";a.innerHTML='<span class="same-time-timeline">'+relation+' · '+item.timeline.label+' history</span><strong>'+sameTimeYearLabel(item.event.year)+' · '+item.event.title+'</strong><small>'+(item.event.location||"Location not specified")+'</small><em>Explore this event →</em>';grid.appendChild(a);});
  box.appendChild(grid);
}
const HISTORY_PATH_KEY="fallingHistoryPathV1";
function recordHistoryPath(event){
  let path=[];try{path=JSON.parse(sessionStorage.getItem(HISTORY_PATH_KEY)||"[]");if(!Array.isArray(path))path=[];}catch{}
  const stop={kind:"jewish",title:event.title,year:event.year,location:event.location||"",key:eventKey(event)};
  const last=path[path.length-1];if(!last||last.kind!==stop.kind||last.key!==stop.key)path.push(stop);
  if(path.length>12)path=path.slice(-12);try{sessionStorage.setItem(HISTORY_PATH_KEY,JSON.stringify(path));}catch{}return path;
}
function renderHistoricalPath(event){
  const path=recordHistoryPath(event);let box=document.getElementById("historicalPathBox");
  if(!box){box=document.createElement("div");box.id="historicalPathBox";box.className="historical-path";const trail=document.getElementById("historyTrailBox");(trail||document.querySelector(".sources-card")).before(box);}
  box.innerHTML='<div class="historical-path-heading"><small>Your historical path</small><strong>Where your journey has taken you</strong></div>';
  const rail=document.createElement("div");rail.className="historical-path-rail";
  path.forEach((stop,i)=>{if(i){const arrow=document.createElement("span");arrow.className="historical-path-arrow";arrow.textContent="→";rail.appendChild(arrow);}const chip=document.createElement("span");chip.className="historical-path-stop "+stop.kind+"-path-stop"+(i===path.length-1?" active":"");chip.title=stop.location||stop.title;chip.innerHTML="<small>"+sameTimeYearLabel(stop.year)+"</small><strong>"+stop.title+"</strong>";rail.appendChild(chip);});
  box.appendChild(rail);
  if(path.length>1){const clear=document.createElement("button");clear.type="button";clear.className="historical-path-clear";clear.textContent="Start a new path";clear.addEventListener("click",()=>{try{sessionStorage.removeItem(HISTORY_PATH_KEY);}catch{}renderHistoricalPath(event);});box.appendChild(clear);}
}
const CONFLICT_CHAINS={
  "October 7 Hamas-led attack on southern Israel":{note:"This chain separates long-term background, escalation, the attack itself and the response. It does not claim that any earlier event made the attack inevitable or justified attacks on civilians.",steps:[
{title:"Israel disengages from the Gaza Strip",role:"Broader background",detail:"Israel withdrew its permanent military presence and settlements from inside Gaza in 2005."},
{title:"Hamas–Fatah fighting and Hamas takeover of Gaza",role:"Broader background",detail:"Hamas took control of Gaza in 2007, creating a separate political and security reality from the Palestinian Authority in the West Bank."},
{title:"Israel tightens blockade of the Gaza Strip after Hamas takeover",role:"Broader background",detail:"Israel tightened restrictions around Gaza after the Hamas takeover; Egypt also restricted its border. The blockade became a major part of the continuing conflict."},
{title:"May 2021 Jerusalem crisis and Israel–Hamas war",role:"Earlier escalation",detail:"A major round of fighting followed tensions in Jerusalem. Hamas and other groups fired rockets at Israel and Israel carried out extensive strikes in Gaza."},
{title:"West Bank violence reaches highest Palestinian death toll in years",role:"Escalating context",detail:"Violence increased sharply in the West Bank during 2022, involving Israeli raids, Palestinian attacks and armed clashes."},
{title:"Large-scale Israeli operation in Jenin refugee camp",role:"Recent escalation",detail:"In July 2023 Israeli forces carried out a major operation in Jenin amid growing armed-group activity and West Bank violence."},
{title:"October 7 Hamas-led attack on southern Israel",role:"This attack",detail:"Hamas and other armed groups launched the October 7 assault. Hamas leaders publicly framed the operation in terms of occupation, Al-Aqsa/Jerusalem and Palestinian prisoners; those stated motives are not the same as an independently proven single trigger."},
{title:"Israel launches large-scale Gaza war after October 7",role:"Immediate response",detail:"Israel declared war and launched a large-scale air and ground campaign in Gaza, saying its goals included dismantling Hamas and returning the hostages."}]},
  "Dolphinarium discotheque bombing":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Second Intifada",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Dolphinarium discotheque bombing",role:"This attack",detail:"This is the event currently open in the timeline."},{title:"Sbarro restaurant bombing",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Passover massacre",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Sbarro restaurant bombing":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Second Intifada",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Dolphinarium discotheque bombing",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Sbarro restaurant bombing",role:"This attack",detail:"This is the event currently open in the timeline."},{title:"Passover massacre",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Passover massacre":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Second Intifada",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Sbarro restaurant bombing",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Passover massacre",role:"This attack",detail:"This is the event currently open in the timeline."},{title:"Operation Defensive Shield",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Construction of the West Bank barrier begins",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Operation Defensive Shield":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Second Intifada",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Passover massacre",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Operation Defensive Shield",role:"This operation",detail:"This is the event currently open in the timeline."},{title:"Construction of the West Bank barrier begins",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Construction of the West Bank barrier begins":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Second Intifada",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Passover massacre",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Operation Defensive Shield",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Construction of the West Bank barrier begins",role:"This policy response",detail:"This is the event currently open in the timeline."}]},
  "Gilad Shalit captured in Gaza border attack":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Israel disengages from the Gaza Strip",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Hamas wins Palestinian legislative election",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Gilad Shalit captured in Gaza border attack",role:"This attack",detail:"This is the event currently open in the timeline."},{title:"Hamas–Fatah fighting and Hamas takeover of Gaza",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Hamas–Fatah fighting and Hamas takeover of Gaza":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Israel disengages from the Gaza Strip",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Hamas wins Palestinian legislative election",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Hamas–Fatah fighting and Hamas takeover of Gaza",role:"This event",detail:"This is the event currently open in the timeline."},{title:"Israel tightens blockade of the Gaza Strip after Hamas takeover",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Escalating rocket fire and Israeli strikes around Gaza",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Israel tightens blockade of the Gaza Strip after Hamas takeover":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Hamas wins Palestinian legislative election",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Hamas–Fatah fighting and Hamas takeover of Gaza",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Israel tightens blockade of the Gaza Strip after Hamas takeover",role:"This policy",detail:"This is the event currently open in the timeline."},{title:"Escalating rocket fire and Israeli strikes around Gaza",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Operation Cast Lead / 2008–09 Gaza War",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Escalating rocket fire and Israeli strikes around Gaza":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Israel tightens blockade of the Gaza Strip after Hamas takeover",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Escalating rocket fire and Israeli strikes around Gaza",role:"This escalation",detail:"This is the event currently open in the timeline."},{title:"Operation Cast Lead / 2008–09 Gaza War",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Operation Cast Lead / 2008–09 Gaza War":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Israel disengages from the Gaza Strip",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Hamas–Fatah fighting and Hamas takeover of Gaza",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Israel tightens blockade of the Gaza Strip after Hamas takeover",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Escalating rocket fire and Israeli strikes around Gaza",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Operation Cast Lead / 2008–09 Gaza War",role:"This war",detail:"This is the event currently open in the timeline."}]},
  "Operation Pillar of Defense / November Gaza conflict":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Israel tightens blockade of the Gaza Strip after Hamas takeover",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Operation Pillar of Defense / November Gaza conflict",role:"This conflict",detail:"This is the event currently open in the timeline."},{title:"Operation Protective Edge / 2014 Gaza War",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Kidnapping and murder of three Israeli teenagers":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Kidnapping and murder of three Israeli teenagers",role:"This attack",detail:"This is the event currently open in the timeline."},{title:"Murder of Palestinian teenager Mohammed Abu Khdeir",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Operation Protective Edge / 2014 Gaza War",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Murder of Palestinian teenager Mohammed Abu Khdeir":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Kidnapping and murder of three Israeli teenagers",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Murder of Palestinian teenager Mohammed Abu Khdeir",role:"This retaliatory murder",detail:"This is the event currently open in the timeline."},{title:"Operation Protective Edge / 2014 Gaza War",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Operation Protective Edge / 2014 Gaza War":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Kidnapping and murder of three Israeli teenagers",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Murder of Palestinian teenager Mohammed Abu Khdeir",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Operation Protective Edge / 2014 Gaza War",role:"This war",detail:"This is the event currently open in the timeline."}]},
  "May 2021 Jerusalem crisis and Israel–Hamas war":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Construction of the West Bank barrier begins",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Gaza border protests and clashes",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"May 2021 Jerusalem crisis and Israel–Hamas war",role:"This crisis and war",detail:"This is the event currently open in the timeline."},{title:"West Bank violence reaches highest Palestinian death toll in years",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Huwara attack and settler rampage":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"West Bank violence reaches highest Palestinian death toll in years",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Huwara attack and settler rampage",role:"This attack and retaliatory rampage",detail:"This is the event currently open in the timeline."},{title:"Large-scale Israeli operation in Jenin refugee camp",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Large-scale Israeli operation in Jenin refugee camp":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"West Bank violence reaches highest Palestinian death toll in years",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Huwara attack and settler rampage",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Large-scale Israeli operation in Jenin refugee camp",role:"This operation",detail:"This is the event currently open in the timeline."},{title:"October 7 Hamas-led attack on southern Israel",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Israel launches large-scale Gaza war after October 7":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"October 7 Hamas-led attack on southern Israel",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Israel launches large-scale Gaza war after October 7",role:"This military response",detail:"This is the event currently open in the timeline."},{title:"Gaza ceasefire and hostage-prisoner exchanges",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Israel–Hezbollah border conflict expands after October 7":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"October 7 Hamas-led attack on southern Israel",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Israel–Hezbollah border conflict expands after October 7",role:"This regional front",detail:"This is the event currently open in the timeline."},{title:"Israel–Hezbollah war escalates in Lebanon",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Israel–Hezbollah war escalates in Lebanon":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Israel–Hezbollah border conflict expands after October 7",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Israel–Hezbollah war escalates in Lebanon",role:"This escalation",detail:"This is the event currently open in the timeline."},{title:"Israel–Hezbollah ceasefire after renewed Lebanon escalation",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Gaza ceasefire and hostage-prisoner exchanges":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"October 7 Hamas-led attack on southern Israel",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Israel launches large-scale Gaza war after October 7",role:"Escalation / context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Gaza ceasefire and hostage-prisoner exchanges",role:"This ceasefire / exchange",detail:"This is the event currently open in the timeline."},{title:"Gaza after the 2025 ceasefire: continuing strikes and humanitarian crisis",role:"What followed",detail:"Open this timeline event to see its evidence, context, aftermath and sources."}]},
  "Gaza after the 2025 ceasefire: continuing strikes and humanitarian crisis":{note:"This chain shows chronology and documented conflict context. An earlier event is not presented as justification, and chronological connection does not by itself prove a single cause.",steps:[{title:"Gaza ceasefire and hostage-prisoner exchanges",role:"Earlier context",detail:"Open this timeline event to see its evidence, context, aftermath and sources."},{title:"Gaza after the 2025 ceasefire: continuing strikes and humanitarian crisis",role:"This aftermath",detail:"This is the event currently open in the timeline."}]}
};
function renderConflictChain(event){
  let box=document.getElementById("conflictChainBox");
  if(!box){box=document.createElement("section");box.id="conflictChainBox";box.className="conflict-chain";const sourceCard=document.querySelector(".sources-card");if(sourceCard)sourceCard.before(box);}
  const chain=CONFLICT_CHAINS[event.title];
  box.classList.toggle("hidden",!chain);box.innerHTML="";if(!chain)return;
  box.innerHTML='<div class="conflict-chain-heading"><small>Conflict chain</small><h3>What led to this?</h3><p>'+chain.note+'</p></div>';
  const rail=document.createElement("div");rail.className="conflict-chain-rail";
  chain.steps.forEach((step,i)=>{
    const linked=events.find(e=>e.title===step.title),el=document.createElement(linked?"button":"div");if(linked)el.type="button";
    el.className="conflict-chain-step"+(step.title===event.title?" current":"")+(linked?" clickable":"");
    const num=document.createElement("span");num.className="conflict-chain-number";num.textContent=String(i+1).padStart(2,"0");
    const body=document.createElement("div");body.className="conflict-chain-body";
    const role=document.createElement("small");role.textContent=step.role+(linked?" · "+sameTimeYearLabel(linked.year):"");
    const title=document.createElement("strong");title.textContent=step.title;
    const detail=document.createElement("p");detail.textContent=step.detail;
    body.append(role,title,detail);el.append(num,body);if(linked&&linked!==event)el.addEventListener("click",()=>openEvent(linked));rail.appendChild(el);
  });
  box.appendChild(rail);
  const key=document.createElement("p");key.className="conflict-chain-key";key.textContent="Earlier event ≠ justification. The labels describe chronology and documented context; where motives are disputed, the timeline identifies them as claims rather than established causes.";box.appendChild(key);
}
function renderHistoryTrail(event,connected){
  let box=document.getElementById("historyTrailBox");
  if(!box){box=document.createElement("div");box.id="historyTrailBox";box.className="history-trail";document.querySelector(".sources-card").before(box);}
  box.innerHTML='<div class="history-trail-heading"><small>Follow the history</small><strong>What came before and what happened next</strong></div>';
  const index=events.indexOf(event),row=document.createElement("div");row.className="history-trail-row";
  const add=(label,item,state)=>{
    const el=document.createElement(item?"button":"div");if(item)el.type="button";el.className="history-trail-step "+state+(item?"":" unavailable");
    const small=document.createElement("small");small.textContent=label;const strong=document.createElement("strong");const localizedItem=item&&window.FALLING_I18N&&window.FALLING_I18N.localizeEvent?window.FALLING_I18N.localizeEvent(TIMELINE_KIND,item):item;strong.textContent=item?(localizedItem.title||item.title):"No event";
    const date=document.createElement("span");date.textContent=item?sameTimeYearLabel(item.year):"";
    el.append(small,strong,date);if(item)el.addEventListener("click",()=>openEvent(item));row.appendChild(el);
  };
  add("Previous",index>0?events[index-1]:null,"previous");add("This event",event,"current");add("Next",index>=0&&index<events.length-1?events[index+1]:null,"next");box.appendChild(row);
  if(connected&&connected.length){
    const branches=document.createElement("div");branches.className="history-trail-branches";
    connected.forEach(([label,page,from])=>{const matched=bestComparedEvent(event,from);if(!matched)return;const a=document.createElement("a");a.className="history-trail-branch "+from+"-trail-branch";a.href=page+"?year="+encodeURIComponent(matched.year)+"&from="+from+"&match="+encodeURIComponent(eventKey(matched));a.innerHTML="<small>Continue into "+label+"</small><strong>"+matched.title+"</strong><span>"+sameTimeYearLabel(matched.year)+" →</span>";branches.appendChild(a);});
    if(branches.childNodes.length)box.appendChild(branches);
  }
}
function eventShareUrl(event){
  const url=new URL(window.location.href);
  url.search="";
  url.hash="";
  url.searchParams.set("year",event.year);
  url.searchParams.set("match",eventKey(event));
  return url.toString();
}
let activeEvent=null;
async function shareActiveEvent(){
  if(!activeEvent)return;
  const displayEvent=(window.FALLING_I18N&&window.FALLING_I18N.localizeEvent)?window.FALLING_I18N.localizeEvent(TIMELINE_KIND,activeEvent):activeEvent;
  const url=eventShareUrl(activeEvent);
  const data={title:displayEvent.title||activeEvent.title,text:(displayEvent.title||activeEvent.title)+" — Falling Into the Abyss",url};
  try{
    if(navigator.share){await navigator.share(data);}
    else if(navigator.clipboard){await navigator.clipboard.writeText(url);const btn=document.getElementById("shareEventBtn");if(btn){const old=btn.textContent;btn.textContent="Link copied";setTimeout(()=>btn.textContent=old,1800);}}
  }catch(err){if(err&&err.name!=="AbortError")console.warn("Unable to share event",err);}
}
function openEvent(event){
  paused=true;velocity=0;
  activeEvent=event;
  const directUrl=eventShareUrl(event);
  if(window.location.href!==directUrl) history.replaceState({event:eventKey(event)},"",directUrl);
  const displayEvent=(window.FALLING_I18N&&window.FALLING_I18N.localizeEvent)?window.FALLING_I18N.localizeEvent(TIMELINE_KIND,event):event;
  document.getElementById("eventDate").textContent=event.year;
  document.getElementById("eventTitle").textContent=displayEvent.title||event.title;
  document.getElementById("eventLocation").textContent=displayEvent.location||event.location;
  document.getElementById("eventStory").textContent=displayEvent.story||event.story;
  document.getElementById("eventContext").textContent=displayEvent.context||event.context;
  document.getElementById("eventAftermath").textContent=displayEvent.aftermath||event.aftermath;
  document.getElementById("eventSourceStatus").textContent=displayEvent.sourceStatus||event.sourceStatus;
  if(window.FALLING_I18N&&window.FALLING_I18N.applyEventDirection)window.FALLING_I18N.applyEventDirection(displayEvent);
  const connected=[];
  const overlap=historyOverlap(event);
  if(overlap==="christian"||overlap==="both")connected.push(["Christianity timeline","christianity.html","christian"]);
  if(overlap==="islamic"||overlap==="both")connected.push(["Islam timeline","islam.html","islamic"]);
  let connectedBox=document.getElementById("connectedHistoryBox");
  if(!connectedBox){
    connectedBox=document.createElement("div");
    connectedBox.id="connectedHistoryBox";
    connectedBox.className="connected-history";
    document.querySelector(".sources-card").before(connectedBox);
  }
  connectedBox.innerHTML="";
  connectedBox.classList.toggle("hidden",!connected.length);
  if(connected.length){
    connectedBox.innerHTML="<h3>Connected history</h3><p>See how this event intersects with another historical tradition.</p>";
    const why=document.createElement("div");why.className="overlap-explanations";
    connected.forEach(([label,page,from])=>{
      const kind=from==="christian"?"Christian":from==="islamic"?"Islamic":"Jewish";
      const matched=bestComparedEvent(event,from);
      const item=document.createElement("div");item.className="overlap-explanation "+from+"-overlap-explanation";
      const heading=document.createElement("strong");heading.textContent="Why this overlaps "+kind+" history";
      const p=document.createElement("p");
      if(matched){const [type,desc]=historyConnectionType(event,matched);p.textContent=type+": "+desc+" Related event: "+matched.title+" ("+sameTimeYearLabel(matched.year)+")"+(matched.location?" in "+matched.location:"")+".";}
      else p.textContent="This event directly intersects "+kind+" history through the people, places, institutions, or political changes described in this event.";
      item.append(heading,p);why.appendChild(item);
    });
    connectedBox.appendChild(why);
    const nav=document.createElement("div");nav.className="connected-history-links";
    connected.forEach(([label,page,from])=>{
      const a=document.createElement("a");
      a.href=page+"?year="+encodeURIComponent(event.year)+"&from="+from;
      a.textContent="Open "+label+" →";nav.appendChild(a);
    });
    const compareBtn=document.createElement("button");compareBtn.type="button";compareBtn.className="btn compare-history-btn";compareBtn.textContent="Compare histories";compareBtn.addEventListener("click",()=>openComparison(event));connectedBox.appendChild(compareBtn);
    connectedBox.appendChild(nav);
  }
  const sourceWrap=document.getElementById("eventSources");
  sourceWrap.innerHTML="";
  (event.sources||[]).forEach(source=>{
    const a=document.createElement("a");
    a.href=source.url;a.target="_blank";a.rel="noopener noreferrer";
    let domain="";try{domain=new URL(source.url).hostname.replace(/^www\\./,"")}catch{}
    a.textContent=source.label+(domain&&!source.label.toLowerCase().includes(domain.toLowerCase())?" — "+domain:"");
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
  renderConflictChain(event);
  renderSameTimeHistory(event);
  renderHistoryTrail(event,connected);
  renderHistoricalPath(event);
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
document.getElementById("shareEventBtn").addEventListener("click",shareActiveEvent);
document.getElementById("closeEventBtn").addEventListener("click",()=>{panel.classList.add("hidden");document.body.classList.remove("event-open");paused=false;activeEvent=null;const clean=new URL(window.location.href);clean.search="";clean.hash="";history.replaceState({},"",clean.toString());abyss.focus()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!panel.classList.contains("hidden")){panel.classList.add("hidden");document.body.classList.remove("event-open");paused=false;abyss.focus()}});
document.getElementById("aboutBtn").addEventListener("click",()=>{aboutPanel.classList.remove("hidden");aboutPanel.scrollIntoView({behavior:reduced?"auto":"smooth"})});
document.getElementById("closeAboutBtn").addEventListener("click",()=>aboutPanel.classList.add("hidden"));

/* Explore timeline: search, filters and year jump */
const exploreToggle=document.getElementById("exploreToggle");
const explorePanel=document.getElementById("explorePanel");
const eventSearch=document.getElementById("eventSearch");
const eraFilter=document.getElementById("eraFilter");
const typeFilter=document.getElementById("typeFilter");
const filterResults=document.getElementById("filterResults");
const filterCount=document.getElementById("filterCount");
const yearJump=document.getElementById("yearJump");
const yearEra=document.getElementById("yearEra");

function eraForEvent(event){return eras.find(era=>event.depth>=era.start&&event.depth<era.end)||eras[eras.length-1]}
function eventType(event){return (event.stats&&event.stats.Type)||"Other"}
eras.forEach(era=>{const o=document.createElement("option");o.value=era.name;o.textContent=era.name;eraFilter.appendChild(o)});
[...new Set(events.map(eventType))].sort((a,b)=>a.localeCompare(b)).forEach(type=>{const o=document.createElement("option");o.value=type;o.textContent=type;typeFilter.appendChild(o)});

function jumpToDepth(target){
  paused=false;velocity=0;depth=Math.max(0,Math.min(MAX_DEPTH,target));render();
  abyss.scrollIntoView({behavior:reduced?"auto":"smooth",block:"center"});abyss.focus({preventScroll:true});
}
function jumpToEvent(event){jumpToDepth(event.depth)}
function applyFilters(){
  const q=eventSearch.value.trim().toLowerCase(), era=eraFilter.value, type=typeFilter.value;
  const matches=events.filter((event,index)=>{
    const hay=[event.title,event.location,event.story,eventType(event),event.year].join(" ").toLowerCase();
    const ok=(!q||hay.includes(q))&&(!era||eraForEvent(event).name===era)&&(!type||eventType(event)===type);
    markerEls[index].classList.toggle("filtered-out",!ok);
    return ok;
  });
  filterCount.textContent=matches.length+" event"+(matches.length===1?"":"s");
  filterResults.innerHTML="";
  const show=(q||era||type)?matches.slice(0,18):[];
  show.forEach(event=>{
    const b=document.createElement("button");b.type="button";b.className="filter-result";
    const y=event.year<0?Math.abs(event.year)+" BCE":event.year+" CE";
    const displayEvent=(window.FALLING_I18N&&window.FALLING_I18N.localizeEvent)?window.FALLING_I18N.localizeEvent(TIMELINE_KIND,event):event;
    b.innerHTML="<small>"+y+" · "+(displayEvent.location||event.location)+"</small><strong>"+(displayEvent.title||event.title)+"</strong>";
    b.addEventListener("click",()=>jumpToEvent(event));filterResults.appendChild(b);
  });
  if((q||era||type)&&!matches.length){const n=document.createElement("span");n.className="source-links";n.textContent="No matching events.";filterResults.appendChild(n)}
}
function depthForYear(year){
  const sorted=events.slice().sort((a,b)=>a.year-b.year);
  if(year<=sorted[0].year)return sorted[0].depth;
  if(year>=sorted[sorted.length-1].year)return sorted[sorted.length-1].depth;
  for(let i=1;i<sorted.length;i++){
    if(year<=sorted[i].year){
      const a=sorted[i-1],b=sorted[i],span=Math.max(1,b.year-a.year),t=(year-a.year)/span;
      return a.depth+(b.depth-a.depth)*t;
    }
  }
  return 0;
}
function doYearJump(){
  const raw=parseInt(yearJump.value,10);if(!Number.isFinite(raw)||raw<1)return;
  const y=yearEra.value==="BCE"?-raw:raw;
  jumpToDepth(depthForYear(Math.max(-1800,Math.min(2026,y))));
}
exploreToggle.addEventListener("click",()=>{
  const open=explorePanel.classList.contains("hidden");explorePanel.classList.toggle("hidden",!open);exploreToggle.setAttribute("aria-expanded",String(open));
  if(open)eventSearch.focus();
});
[eventSearch,eraFilter,typeFilter].forEach(el=>el.addEventListener(el.tagName==="INPUT"?"input":"change",applyFilters));
document.getElementById("yearJumpBtn").addEventListener("click",doYearJump);
yearJump.addEventListener("keydown",e=>{if(e.key==="Enter")doYearJump()});
document.getElementById("clearFilters").addEventListener("click",()=>{
  eventSearch.value="";eraFilter.value="";typeFilter.value="";yearJump.value="";yearEra.value="CE";applyFilters();
});
applyFilters();
const linkedYear=parseInt(new URLSearchParams(window.location.search).get("year"),10);
if(Number.isFinite(linkedYear)){
  const minYear=Math.min(...events.map(e=>e.year)),maxYear=Math.max(...events.map(e=>e.year));
  jumpToDepth(depthForYear(Math.max(minYear,Math.min(maxYear,linkedYear))));
  const linkedMatch=new URLSearchParams(window.location.search).get("match");
  const exactIndex=linkedMatch?events.findIndex(e=>eventKey(e)===linkedMatch):-1;
  const nearestIndex=exactIndex>=0?exactIndex:events.reduce((best,e,i)=>Math.abs(e.year-linkedYear)<Math.abs(events[best].year-linkedYear)?i:best,0);
  requestAnimationFrame(()=>{
    const marker=document.querySelectorAll(".event-marker")[nearestIndex];
    if(marker){
      marker.classList.add("linked-history-target");
      marker.scrollIntoView({block:"center",behavior:"smooth"});
      setTimeout(()=>marker.classList.remove("linked-history-target"),4200);
    }
    if(events[nearestIndex]) openEvent(events[nearestIndex]);
  });
}

const linkedFrom=new URLSearchParams(window.location.search).get("from");
if(linkedFrom&&Number.isFinite(linkedYear)){
  const names={jewish:"Jewish timeline",christian:"Christianity timeline",islamic:"Islam timeline"};
  const pages={jewish:"index.html",christian:"christianity.html",islamic:"islam.html"};
  if(names[linkedFrom]&&pages[linkedFrom]){
    const cue=document.createElement("a");
    cue.className="history-return-cue";
    cue.href=pages[linkedFrom]+"?year="+encodeURIComponent(linkedYear);
    cue.innerHTML='<small>History overlap</small><strong>← Back to '+names[linkedFrom]+'</strong>';
    document.getElementById("abyss").appendChild(cue);
  }
}

document.getElementById("closeCompareBtn").addEventListener("click",closeComparison);
makeParticles();render();rafId=requestAnimationFrame(tick);