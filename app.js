const events = [
  {
    year:-722, depth:260, title:"Assyrian conquest of Samaria", location:"Samaria / Kingdom of Israel",
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
    year:1066, depth:3820, title:"Granada massacre", location:"Granada, al-Andalus",
    story:"A mob attacked Granada's Jewish community and killed the Jewish vizier Joseph ibn Naghrela; medieval sources describe extensive killing.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre",Evidence:"Established; medieval numerical estimates uncertain"},
    sourceStatus:"Established; medieval numerical estimates uncertain",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/anti-Semitism/Anti-Semitism-in-medieval-Europe"}]
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
    year:1298, depth:4420, title:"Rintfleisch massacres", location:"Franconia and Bavaria",
    story:"Anti-Jewish massacres spread through numerous German communities under the Rintfleisch movement.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Massacre wave",Evidence:"High; totals vary"},
    sourceStatus:"High; totals vary",
    sources:[{label:"Source / further reading",url:"https://www.cambridge.org/core/books/abs/cambridge-world-history-of-genocide/genocidal-massacres-of-jews-in-medieval-western-europe-10961392/00724C8FEFEDF90A56EE4CF62E2CB536"}]
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
    year:1941, depth:6280, title:"Holocaust mass shootings and extermination", location:"German-occupied Europe",
    story:"Nazi Germany and its allies and collaborators systematically murdered approximately six million European Jews through shootings, killing centers, ghettos, starvation, forced labor and other methods.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Genocide",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust"}]
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
    year:1947, depth:6420, title:"1947–1949 Palestine war / Arab–Israeli War", location:"Mandatory Palestine / Israel",
    story:"Fighting followed the UN partition vote; after Israel declared independence in May 1948, neighboring Arab armies entered the war. Jewish and Arab civilians and combatants suffered major losses and displacement.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Civil war / interstate war",Evidence:"Very high; narratives and some figures contested"},
    sourceStatus:"Very high; narratives and some figures contested",
    sources:[{label:"Source / further reading",url:"https://history.state.gov/milestones/1945-1952/arab-israeli-war"}]
  },
  {
    year:1956, depth:6500, title:"Suez Crisis / Sinai War", location:"Egypt / Sinai / Israel",
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
    year:1978, depth:6720, title:"Coastal Road massacre", location:"Israel",
    story:"Palestinian militants attacked civilians traveling on Israel's Coastal Road, killing dozens and triggering a major Israeli military response in Lebanon.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Terrorist attack",Evidence:"High"},
    sourceStatus:"High",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/place/Israel/War-in-Lebanon"}]
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
    year:1987, depth:6800, title:"First Intifada", location:"West Bank / Gaza / Israel",
    story:"A Palestinian uprising against Israeli occupation involved demonstrations, riots, attacks and Israeli military responses, causing deaths on both sides.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Uprising / conflict",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/intifada"}]
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
    year:2000, depth:6880, title:"Second Intifada", location:"Israel / West Bank / Gaza",
    story:"The Second Intifada brought suicide bombings and other attacks against Israelis alongside major Israeli military operations; thousands of Palestinians and Israelis were killed.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Uprising / terrorism / armed conflict",Evidence:"Very high; totals depend on definitions"},
    sourceStatus:"Very high; totals depend on definitions",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/topic/intifada"}]
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
    year:2019, depth:7040, title:"Halle synagogue attack", location:"Halle, Germany",
    story:"An armed extremist attempted to enter a synagogue on Yom Kippur; unable to enter, he murdered two people nearby.",
    context:"This entry is part of the site's chronological record of documented violence involving Jewish communities. Open the cited source for fuller historical context and competing interpretations where relevant.",
    aftermath:"Consequences are summarized conservatively; this database will be expanded with event-specific aftermath, casualty notes and additional primary/secondary sources.",
    stats:{Type:"Antisemitic terrorist attack",Evidence:"Very high"},
    sourceStatus:"Very high",
    sources:[{label:"Source / further reading",url:"https://www.britannica.com/event/Halle-synagogue-shooting"}]
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
  {name:"Ancient Israel & Judah",range:"c. 1200–586 BCE",start:0,end:1160},
  {name:"Second Temple Period",range:"586 BCE–70 CE",start:1160,end:1940},
  {name:"Roman & Byzantine Period",range:"70–622 CE",start:1940,end:3100},
  {name:"Early Islamic Period",range:"622–1096 CE",start:3100,end:3820},
  {name:"Crusades & Medieval Period",range:"1096–1492 CE",start:3820,end:4500},
  {name:"Early Modern Jewish Diaspora",range:"1492–1881 CE",start:4500,end:5120},
  {name:"Modern Europe & Pogroms",range:"1881–1933 CE",start:5120,end:5580},
  {name:"The Holocaust",range:"1933–1945 CE",start:5580,end:6060},
  {name:"Israel & Arab–Israeli Conflict",range:"1945–2000 CE",start:6060,end:6700},
  {name:"Contemporary Era",range:"2000–2026 CE",start:6700,end:7200}
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
  const points=[{depth:0,year:-800},...events,{depth:MAX_DEPTH,year:2026}];
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