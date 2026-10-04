const events = [
  {
    year:-5, depth:180, title:"Birth of Jesus (Yeshua)", location:"Judea, Roman client kingdom",
    story:"Jesus, known in his Jewish setting as Yeshua, was born into a Jewish family in Roman-era Judea. The Gospels of Matthew and Luke place his birth in Bethlehem, while he was raised in Nazareth. Christianity later developed around his life, teachings, crucifixion and the belief of his followers in his resurrection.",
    context:"Jesus was Jewish, and the movement that became Christianity began within first-century Judaism. The English name Jesus comes through Greek and Latin forms of the Hebrew/Aramaic name Yeshua. The exact year and circumstances of his birth cannot be established with certainty.",
    aftermath:"Jesus's followers initially formed a Jewish movement in the land of Israel/Judea. Over subsequent decades, the movement spread among non-Jews throughout the Roman world and gradually developed into Christianity as a distinct religion.",
    stats:{Type:"Origins / Jewish-Christian history",Evidence:"Historical existence of Jesus is widely accepted; exact birth year and Gospel infancy details are debated. A conventional scholarly estimate places his birth around 6–4 BCE."},
    sourceStatus:"Jesus's historical existence is accepted by the overwhelming majority of scholars, but no contemporary birth record survives. The birth narratives appear in Matthew and Luke and differ in chronology and detail.",
    sources:[{label:"Encyclopaedia Britannica — Jesus",url:"https://www.britannica.com/biography/Jesus"}]
  },
  {
    year:30, depth:350, title:"Crucifixion of Jesus", location:"Jerusalem",
    story:"Jesus (Yeshua), a Jewish teacher from Galilee, was crucified in Judea under the Roman prefect Pontius Pilate. His followers came to believe that he had risen from the dead, a conviction at the center of the movement that became Christianity.",
    context:"Jewish origins of Christianity / Roman execution",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Origins / Roman execution",Evidence:"The crucifixion under Pontius Pilate is accepted by the overwhelming majority of historians; theological claims about resurrection belong to religious belief."},
    sourceStatus:"Jesus's crucifixion under Pontius Pilate is accepted by the overwhelming majority of historians. Christian Gospel narratives are theological as well as historical sources. Collective blame against Jews is historically and theologically improper; Roman authority carried out the execution.",
    sources:[{label:"Encyclopaedia Britannica — Jesus",url:"https://www.britannica.com/biography/Jesus"}]
  },
  {
    year:34, depth:520, title:"Martyrdom of Stephen in the New Testament tradition", location:"Jerusalem",
    story:"Acts describes Stephen, a member of the earliest Jesus movement, being stoned after a confrontation with religious authorities. The account presents his death as the first Christian martyrdom and connects it with an early persecution that scattered some believers from Jerusalem.",
    context:"Early Christian persecution / Jewish-Christian conflict",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Early Christian persecution / Jewish-Christian conflict",Evidence:"Stephen is known from Acts rather than independent contemporary records. The episode belongs to the history of the earliest Jewish Jesus movement and should not be generalized into collective Jewish responsibility."},
    sourceStatus:"Stephen is known from Acts rather than independent contemporary records. The episode belongs to the history of the earliest Jewish Jesus movement and should not be generalized into collective Jewish responsibility.",
    sources:[{label:"Britannica — Saint Stephen",url:"https://www.britannica.com/biography/Saint-Stephen"}]
  },
  {
    year:35, depth:690, title:"Emergence of the early Christian movement", location:"Jerusalem and eastern Mediterranean",
    story:"The earliest followers of Jesus formed communities in Judea and then across the eastern Mediterranean. Missionary activity associated especially with Paul helped open the movement to non-Jews.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Religious movement / origins",Evidence:"The growth of early Christian communities is documented through first-century Christian writings and later Roman references; exact dates for individual episodes are debated."},
    sourceStatus:"The growth of early Christian communities is documented through first-century Christian writings and later Roman references; exact dates for individual episodes are debated.",
    sources:[{label:"Encyclopaedia Britannica — Christianity",url:"https://www.britannica.com/topic/Christianity"}]
  },
  {
    year:44, depth:860, title:"Execution of James son of Zebedee in Acts", location:"Jerusalem",
    story:"Acts reports that Herod Agrippa I executed James son of Zebedee and imprisoned Peter. It is one of the earliest traditions of political suppression directed at leaders of the Jesus movement.",
    context:"Political persecution / early Christianity",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Political persecution / early Christianity",Evidence:"The execution is recorded in Acts; independent confirmation of the individual episode is limited."},
    sourceStatus:"The execution is recorded in Acts; independent confirmation of the individual episode is limited.",
    sources:[{label:"Britannica — Saint James",url:"https://www.britannica.com/biography/Saint-James-apostle-son-of-Zebedee"}]
  },
  {
    year:49, depth:1030, title:"Council of Jerusalem and the Jewish–Gentile question", location:"Jerusalem",
    story:"The earliest Christian movement debated whether non-Jewish converts needed to observe Jewish law. Acts and Paul's letters preserve different windows into these disputes as Christianity began expanding beyond its Jewish origins.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Origins / Jewish-Christian relationship",Evidence:"The debate is attested in first-century Christian texts; reconstructing the exact meeting and chronology requires comparing sources."},
    sourceStatus:"The debate is attested in first-century Christian texts; reconstructing the exact meeting and chronology requires comparing sources.",
    sources:[{label:"Britannica — Council of Jerusalem",url:"https://www.britannica.com/event/Council-of-Jerusalem"}]
  },
  {
    year:62, depth:1200, title:"Death of James, brother of Jesus", location:"Jerusalem",
    story:"The Jewish historian Josephus reports that James, identified as the brother of Jesus called Christ, was executed after the death of the Roman governor Festus. The passage provides important non-Christian evidence for Jesus's early movement.",
    context:"Execution / Jewish-Christian origins",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Execution / Jewish-Christian origins",Evidence:"Josephus is an important first-century non-Christian source. Later Christian traditions add details not found in Josephus."},
    sourceStatus:"Josephus is an important first-century non-Christian source. Later Christian traditions add details not found in Josephus.",
    sources:[{label:"Britannica — Saint James",url:"https://www.britannica.com/biography/Saint-James-the-Lords-brother"}]
  },
  {
    year:64, depth:1370, title:"Neronian persecution after the Great Fire of Rome", location:"Rome",
    story:"After the Great Fire of Rome, Nero blamed and brutally punished a group identified as Christians. Tacitus, writing decades later, is the principal non-Christian source for the episode.",
    context:"Local Roman persecution / scapegoating",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Persecution / Roman state violence",Evidence:"Tacitus is the principal non-Christian literary source. The persecution appears to have been localized in Rome rather than an empire-wide policy."},
    sourceStatus:"Tacitus provides important Roman evidence for Nero's punishment of Christians. It should be treated as a specific persecution at Rome, not the beginning of an uninterrupted empire-wide policy.",
    sources:[{label:"Encyclopaedia Britannica — Nero",url:"https://www.britannica.com/biography/Nero-Roman-emperor"}]
  },
  {
    year:64, depth:1540, title:"Traditions of Peter and Paul's deaths at Rome", location:"Rome",
    story:"Early Christian tradition places the deaths of the apostles Peter and Paul in Rome during Nero's reign, commonly associated with the persecution following the Great Fire.",
    context:"Martyrdom tradition / Roman persecution",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Martyrdom tradition / Roman persecution",Evidence:"Their deaths in Rome are early and influential Christian traditions, but the exact circumstances and dates are not independently documented by contemporary Roman records."},
    sourceStatus:"Their deaths in Rome are early and influential Christian traditions, but the exact circumstances and dates are not independently documented by contemporary Roman records.",
    sources:[{label:"Britannica — Saint Peter",url:"https://www.britannica.com/biography/Saint-Peter-the-Apostle"}]
  },
  {
    year:70, depth:1710, title:"Destruction of Jerusalem reshapes Jewish and Christian communities", location:"Jerusalem",
    story:"Roman forces destroyed Jerusalem and the Second Temple during the First Jewish–Roman War. The catastrophe transformed Jewish life and also affected the developing Jesus movement, whose later traditions increasingly differentiated Christians from other Jewish groups.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"War / Jewish-Christian historical intersection",Evidence:"The Roman destruction is firmly documented. Claims about precisely when or how Christians separated from Judaism remain debated."},
    sourceStatus:"The Roman destruction is firmly documented. Claims about precisely when or how Christians separated from Judaism remain debated.",
    sources:[{label:"Britannica — Siege of Jerusalem",url:"https://www.britannica.com/event/Siege-of-Jerusalem-70"}]
  },
  {
    year:112, depth:1880, title:"Pliny and Trajan define policy toward Christians", location:"Bithynia-Pontus",
    story:"Governor Pliny the Younger asked Emperor Trajan how to handle people accused of Christianity. Trajan instructed that Christians should not be actively hunted, but those formally accused and refusing to recant could be punished.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Roman legal persecution",Evidence:"The Pliny–Trajan correspondence is a contemporary primary source and one of the clearest early Roman records concerning Christians."},
    sourceStatus:"The Pliny–Trajan correspondence is a contemporary primary source and one of the clearest early Roman records concerning Christians.",
    sources:[{label:"Perseus — Pliny Letters 10.96–97",url:"https://www.perseus.tufts.edu/hopper/text?doc=Plin.+Ep.+10.96"}]
  },
  {
    year:117, depth:2050, title:"Ignatius of Antioch and early Christian martyr identity", location:"Rome / Antioch",
    story:"Ignatius, bishop of Antioch, was taken to Rome and executed. Letters attributed to him are among the earliest Christian writings to emphasize church unity, bishops and a distinct Christian identity in relation to Judaism and the Roman world.",
    context:"Martyrdom / early church development",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Martyrdom / early church development",Evidence:"Ignatius's letters are early Christian sources generally regarded as authentic in their middle recension; details of his arrest and execution are less certain."},
    sourceStatus:"Ignatius's letters are early Christian sources generally regarded as authentic in their middle recension; details of his arrest and execution are less certain.",
    sources:[{label:"Britannica — Saint Ignatius of Antioch",url:"https://www.britannica.com/biography/Saint-Ignatius-of-Antioch"}]
  },
  {
    year:132, depth:2220, title:"Bar Kokhba revolt accelerates Jewish–Christian separation", location:"Judea",
    story:"The Bar Kokhba revolt against Rome devastated Judea. Followers of Jesus who did not accept Bar Kokhba's messianic claim stood apart from the revolt, contributing to—but not single-handedly causing—the long process by which Christianity and rabbinic Judaism became increasingly distinct.",
    context:"Jewish-Christian divergence / Roman war context",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Jewish-Christian divergence / Roman war context",Evidence:"The revolt is firmly historical. Historians caution against treating any single event as the moment Christianity and Judaism definitively separated."},
    sourceStatus:"The revolt is firmly historical. Historians increasingly describe the 'parting of the ways' between Judaism and Christianity as a prolonged, regionally varied process rather than a single break in 132–135.",
    sources:[{label:"Britannica — Bar Kokhba Revolt",url:"https://www.britannica.com/event/Bar-Kokhba-Revolt"}]
  },
  {
    year:155, depth:2390, title:"Martyrdom of Polycarp", location:"Smyrna, Roman Asia Minor",
    story:"Polycarp, bishop of Smyrna, was executed after refusing to renounce Christianity. The Martyrdom of Polycarp became one of the earliest surviving Christian martyr narratives outside the New Testament.",
    context:"Roman persecution / martyrdom",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Roman persecution / martyrdom",Evidence:"Polycarp's death is supported by an early Christian text, though the exact date is debated, commonly placed around 155–156 CE."},
    sourceStatus:"Polycarp's death is supported by an early Christian text, though the exact date is debated, commonly placed around 155–156 CE.",
    sources:[{label:"Britannica — Saint Polycarp",url:"https://www.britannica.com/biography/Saint-Polycarp"}]
  },
  {
    year:177, depth:2560, title:"Persecution of Christians at Lyon and Vienne", location:"Roman Gaul",
    story:"Christians in Lyon and Vienne suffered mob hostility, imprisonment, torture and execution. A Christian letter describing the martyrs circulated among churches.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Persecution / martyrdom",Evidence:"The event is well attested through an early Christian account preserved by Eusebius, though details come from confessional literature."},
    sourceStatus:"The event is well attested through an early Christian account preserved by Eusebius, though details come from confessional literature.",
    sources:[{label:"Encyclopaedia Britannica — martyr",url:"https://www.britannica.com/topic/martyr"}]
  },
  {
    year:202, depth:2730, title:"Persecution under Septimius Severus affects Christian communities", location:"Roman Empire",
    story:"Christian tradition associates the reign of Septimius Severus with intensified local persecution, including famous martyrdoms in North Africa and Alexandria.",
    context:"Roman persecution / local repression",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Roman persecution / local repression",Evidence:"Modern historians debate whether Severus issued a universal anti-Christian edict; evidence more securely supports regional episodes rather than empire-wide systematic persecution."},
    sourceStatus:"Modern historians debate whether Severus issued a universal anti-Christian edict; evidence more securely supports regional episodes rather than empire-wide systematic persecution.",
    sources:[{label:"Britannica — Septimius Severus",url:"https://www.britannica.com/biography/Septimius-Severus"}]
  },
  {
    year:203, depth:2900, title:"Perpetua and Felicity martyred at Carthage", location:"Carthage, Roman North Africa",
    story:"Perpetua, Felicity and companions were executed after refusing to abandon their Christian commitment. The Passion of Perpetua and Felicity became one of early Christianity's most influential martyr narratives.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Persecution / martyrdom",Evidence:"The martyrdom is widely accepted as historical, while the surviving narrative includes edited literary and theological elements."},
    sourceStatus:"The martyrdom is widely accepted as historical, while the surviving narrative includes edited literary and theological elements.",
    sources:[{label:"Britannica — Perpetua",url:"https://www.britannica.com/biography/Perpetua-Christian-martyr"}]
  },
  {
    year:249, depth:3070, title:"Alexandrian anti-Christian riot", location:"Alexandria, Roman Egypt",
    story:"A violent crowd attacked Christians in Alexandria during the reign of Philip the Arab, killing believers and plundering homes shortly before the empire-wide Decian persecution.",
    context:"Mob violence / anti-Christian persecution",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Mob violence / anti-Christian persecution",Evidence:"The episode is principally known through a letter of Dionysius of Alexandria preserved by Eusebius, making it an early Christian literary source rather than independent civic documentation."},
    sourceStatus:"The episode is principally known through a letter of Dionysius of Alexandria preserved by Eusebius, making it an early Christian literary source rather than independent civic documentation.",
    sources:[{label:"Britannica — persecution of Christians",url:"https://www.britannica.com/topic/Christianity/Relations-between-Christianity-and-the-Roman-government-and-the-Hellenistic-culture"}]
  },
  {
    year:250, depth:3240, title:"Decian persecution", location:"Roman Empire",
    story:"Emperor Decius ordered inhabitants of the empire to perform sacrifice for the welfare of the state and obtain certificates proving compliance. Christians who refused could face imprisonment, torture or execution.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Empire-wide religious persecution",Evidence:"The edict and its enforcement are documented by surviving sacrifice certificates and Christian sources. Application varied by province."},
    sourceStatus:"The edict and its enforcement are documented by surviving sacrifice certificates and Christian sources. Application varied by province.",
    sources:[{label:"Encyclopaedia Britannica — Decius",url:"https://www.britannica.com/biography/Decius"}]
  },
  {
    year:257, depth:3410, title:"Valerian persecution", location:"Roman Empire",
    story:"Emperor Valerian issued measures targeting Christian clergy, assemblies and property. A second edict imposed severe penalties, including execution for some church leaders.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Persecution / imperial policy",Evidence:"The persecution is documented in contemporary Christian correspondence and later historical sources."},
    sourceStatus:"The persecution is documented in contemporary Christian correspondence and later historical sources.",
    sources:[{label:"Encyclopaedia Britannica — Valerian",url:"https://www.britannica.com/biography/Valerian-Roman-emperor"}]
  },
  {
    year:303, depth:3580, title:"Great Persecution under Diocletian and Galerius", location:"Roman Empire",
    story:"A series of imperial edicts ordered destruction of churches and scriptures, removal of Christians from official positions, imprisonment of clergy and eventually compulsory sacrifice. Enforcement was especially severe in the eastern empire.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Empire-wide persecution",Evidence:"The Great Persecution is extensively documented, although martyr numbers in later traditions can be exaggerated."},
    sourceStatus:"The Great Persecution is extensively documented, although martyr numbers in later traditions can be exaggerated.",
    sources:[{label:"Encyclopaedia Britannica — Diocletian",url:"https://www.britannica.com/biography/Diocletian"}]
  },
  {
    year:306, depth:3750, title:"Martyrdom of Demetrius and other late Roman martyr traditions", location:"Thessalonica and Roman East",
    story:"Traditions of saints such as Demetrius reflect the memory of Christians killed during the final era of Roman persecution before imperial toleration.",
    context:"Persecution / martyr tradition",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Persecution / martyr tradition",Evidence:"Many late-antique martyr cults preserve genuine memories of persecution, but individual biographies often survive in much later legendary forms and require careful source labeling."},
    sourceStatus:"Many late-antique martyr cults preserve genuine memories of persecution, but individual biographies often survive in much later legendary forms and require careful source labeling.",
    sources:[{label:"Britannica — martyr",url:"https://www.britannica.com/topic/martyr"}]
  },
  {
    year:311, depth:3920, title:"Edict of Serdica ends the Great Persecution", location:"Roman Empire",
    story:"Emperor Galerius issued an edict tolerating Christianity and asking Christians to pray for the empire, effectively ending the Great Persecution in much of the Roman world.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Religious toleration",Evidence:"The edict survives in ancient literary sources and marks a major change in imperial policy."},
    sourceStatus:"The edict survives in ancient literary sources and marks a major change in imperial policy.",
    sources:[{label:"Encyclopaedia Britannica — Galerius",url:"https://www.britannica.com/biography/Galerius"}]
  },
  {
    year:313, depth:4090, title:"Edict of Milan and legalization of Christianity", location:"Roman Empire",
    story:"Constantine and Licinius agreed on a policy of religious toleration that restored confiscated Christian property and allowed Christians to worship openly.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Legalization / imperial policy",Evidence:"The agreement and restoration policy are well documented; 'Edict of Milan' is a conventional name for the policy communicated in 313."},
    sourceStatus:"The agreement and restoration policy are well documented; 'Edict of Milan' is a conventional name for the policy communicated in 313.",
    sources:[{label:"Encyclopaedia Britannica — Edict of Milan",url:"https://www.britannica.com/topic/Edict-of-Milan"}]
  },
  {
    year:325, depth:4260, title:"Council of Nicaea and the Arian controversy", location:"Nicaea",
    story:"Constantine convened bishops to address divisions including the Arian controversy. The council produced the Nicene Creed and condemned Arius's teaching, but theological and political conflict continued for decades.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Church council / doctrinal conflict",Evidence:"The council is extensively documented through ecclesiastical histories, letters and creedal texts."},
    sourceStatus:"The council is extensively documented through ecclesiastical histories, letters and creedal texts.",
    sources:[{label:"Encyclopaedia Britannica — Council of Nicaea",url:"https://www.britannica.com/event/First-Council-of-Nicaea-325"}]
  },
  {
    year:325, depth:4430, title:"Imperial church councils begin defining orthodoxy with state backing", location:"Nicaea and Roman Empire",
    story:"The Council of Nicaea did more than settle a theological dispute: it demonstrated a new relationship in which a Roman emperor convened bishops and imperial power became increasingly involved in Christian doctrinal unity.",
    context:"Church-state transformation",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Church-state transformation",Evidence:"The council is extensively documented. Imperial involvement did not eliminate theological diversity, and disputes over Arian and Nicene Christianity continued for decades."},
    sourceStatus:"The council is extensively documented. Imperial involvement did not eliminate theological diversity, and disputes over Arian and Nicene Christianity continued for decades.",
    sources:[{label:"Britannica — Council of Nicaea",url:"https://www.britannica.com/event/First-Council-of-Nicaea-325"}]
  },
  {
    year:341, depth:4600, title:"Sasanian persecution under Shapur II begins", location:"Sasanian Empire",
    story:"During wars with the Christian Roman Empire, Shapur II's government imposed heavy taxation and persecution on some Christian communities, especially clergy, amid suspicions of political loyalty to Rome.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"State persecution / Christian minority",Evidence:"Syriac martyr traditions and ecclesiastical histories document severe persecution, though precise numbers are uncertain."},
    sourceStatus:"Syriac martyr traditions and ecclesiastical histories document severe persecution, though precise numbers are uncertain.",
    sources:[{label:"Britannica — Christianity in Iran",url:"https://www.britannica.com/topic/Christianity"}]
  },
  {
    year:361, depth:4770, title:"Julian attempts to reverse Christian imperial dominance", location:"Roman Empire",
    story:"Emperor Julian ended privileges enjoyed by the Christian church and promoted traditional Greco-Roman religion. He generally did not restore the systematic executions of earlier persecutions, but Christian influence at court and in education was deliberately curtailed.",
    context:"Religious policy / imperial reaction",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Religious policy / imperial reaction",Evidence:"Julian's policies are well documented in his own writings and contemporary Christian sources. Calling his reign a general persecution of Christians would overstate the evidence."},
    sourceStatus:"Julian's policies are well documented in his own writings and contemporary Christian sources. Calling his reign a general persecution of Christians would overstate the evidence.",
    sources:[{label:"Britannica — Julian",url:"https://www.britannica.com/biography/Julian-Roman-emperor"}]
  },
  {
    year:380, depth:4940, title:"Nicene Christianity becomes imperial orthodoxy", location:"Roman Empire",
    story:"The Edict of Thessalonica under Theodosius I endorsed Nicene Christianity as the imperial norm. Imperial law increasingly penalized heresy and non-Christian religious practice.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Christianization / coercive religious policy",Evidence:"The imperial legislation is directly documented. Enforcement varied greatly across time and place."},
    sourceStatus:"The imperial legislation is directly documented. Enforcement varied greatly across time and place.",
    sources:[{label:"Encyclopaedia Britannica — Theodosius I",url:"https://www.britannica.com/biography/Theodosius-I"}]
  },
  {
    year:391, depth:5110, title:"Imperial suppression of pagan cults intensifies", location:"Roman Empire",
    story:"Under Theodosius I, laws increasingly prohibited public pagan sacrifice and cult practice. Christianization of the empire combined persuasion, social change, political advantage and episodes of coercion and destruction of temples.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Religious suppression / Christian imperial power",Evidence:"Imperial laws are documented; the extent and local enforcement of temple destruction varied and remains a subject of scholarship."},
    sourceStatus:"Imperial laws are documented; the extent and local enforcement of temple destruction varied and remains a subject of scholarship.",
    sources:[{label:"Encyclopaedia Britannica — Theodosius I",url:"https://www.britannica.com/biography/Theodosius-I"}]
  },
  {
    year:411, depth:5280, title:"Donatist conflict and imperial coercion in North Africa", location:"Roman North Africa",
    story:"The Donatist schism divided North African Christians over the legitimacy of clergy associated with surrender during persecution. Imperial authorities increasingly used legal penalties and coercion against Donatists, while violent rural groups associated with the conflict also attacked opponents.",
    context:"Intra-Christian schism / imperial coercion",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Intra-Christian schism / imperial coercion",Evidence:"The conflict is extensively documented by Augustine and imperial law, but partisan sources complicate reconstruction of violence and responsibility."},
    sourceStatus:"The conflict is extensively documented by Augustine and imperial law, but partisan sources complicate reconstruction of violence and responsibility.",
    sources:[{label:"Britannica — Donatist",url:"https://www.britannica.com/topic/Donatist"}]
  },
  {
    year:415, depth:5450, title:"Killing of Hypatia amid Alexandrian Christian factional conflict", location:"Alexandria, Egypt",
    story:"Hypatia, a prominent Neoplatonist philosopher, was murdered by a Christian mob amid political conflict involving Bishop Cyril and imperial officials. Her death became an enduring symbol of religious and political violence in late antiquity.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Mob killing / Christian factional violence",Evidence:"Her murder by a Christian crowd is well attested in late-antique sources; the degree of Cyril's direct responsibility is disputed."},
    sourceStatus:"Her murder by a Christian crowd is well attested in late-antique sources; the degree of Cyril's direct responsibility is disputed.",
    sources:[{label:"Encyclopaedia Britannica — Hypatia",url:"https://www.britannica.com/biography/Hypatia"}]
  },
  {
    year:429, depth:5620, title:"Vandal conquest brings conflict among Christian confessions in North Africa", location:"North Africa",
    story:"Vandal forces established a kingdom in Roman North Africa. Its Arian Christian rulers at times pressured Nicene clergy and confiscated churches, especially under Huneric.",
    context:"Intra-Christian persecution / conquest",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Intra-Christian persecution / conquest",Evidence:"Vandal religious policy varied by ruler and period; the kingdom should not be portrayed as continuously persecuting Nicene Christians."},
    sourceStatus:"Vandal religious policy varied by ruler and period; the kingdom should not be portrayed as continuously persecuting Nicene Christians.",
    sources:[{label:"Britannica — Vandal",url:"https://www.britannica.com/topic/Vandal-Germanic-people"}]
  },
  {
    year:431, depth:5790, title:"Council of Ephesus deepens Christological division", location:"Ephesus",
    story:"The council condemned Nestorius and affirmed Mary as Theotokos. Imperial enforcement, rival councils and depositions intensified divisions among Christian communities.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Church conflict / imperial enforcement",Evidence:"The council and political struggle are extensively documented; later church traditions interpret its theology differently."},
    sourceStatus:"The council and political struggle are extensively documented; later church traditions interpret its theology differently.",
    sources:[{label:"Encyclopaedia Britannica — Council of Ephesus",url:"https://www.britannica.com/event/Council-of-Ephesus-431"}]
  },
  {
    year:451, depth:5960, title:"Council of Chalcedon and lasting Christian schisms", location:"Chalcedon",
    story:"The council defined Christ as one person in two natures. Churches rejecting Chalcedon developed enduring traditions now associated with Oriental Orthodoxy, while imperial attempts to enforce doctrinal unity produced recurring unrest.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Schism / doctrinal conflict",Evidence:"The council is exceptionally well documented. Labels such as Monophysite can misrepresent the theology of non-Chalcedonian churches and are used cautiously."},
    sourceStatus:"The council is exceptionally well documented. Labels such as Monophysite can misrepresent the theology of non-Chalcedonian churches and are used cautiously.",
    sources:[{label:"Encyclopaedia Britannica — Council of Chalcedon",url:"https://www.britannica.com/event/Council-of-Chalcedon"}]
  },
  {
    year:451, depth:6130, title:"Oriental Orthodox churches diverge after Chalcedon", location:"Eastern Roman Empire and Near East",
    story:"The Council of Chalcedon's definition of Christ's nature was rejected by churches that became the Armenian Apostolic, Coptic, Syriac, Ethiopian and other Oriental Orthodox traditions. Imperial attempts to enforce doctrinal unity produced recurring conflict and repression.",
    context:"Intra-Christian schism / imperial coercion",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Intra-Christian schism / imperial coercion",Evidence:"The theological division is extensively documented. Modern dialogue has shown that historical terminology sometimes exaggerated differences between traditions."},
    sourceStatus:"The theological division is extensively documented. Modern dialogue has shown that historical terminology sometimes exaggerated differences between traditions.",
    sources:[{label:"Britannica — Council of Chalcedon",url:"https://www.britannica.com/event/Council-of-Chalcedon"}]
  },
  {
    year:484, depth:6300, title:"Huneric persecutes Nicene Christians", location:"Vandal North Africa",
    story:"King Huneric summoned Catholic bishops to Carthage and then exiled many clergy, closed churches and imposed restrictions while promoting Arian Christianity.",
    context:"Intra-Christian persecution",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Intra-Christian persecution",Evidence:"The repression is documented largely through Nicene Christian authors, whose polemical perspective requires caution, but coercive measures are historical."},
    sourceStatus:"The repression is documented largely through Nicene Christian authors, whose polemical perspective requires caution, but coercive measures are historical.",
    sources:[{label:"Britannica — Vandal",url:"https://www.britannica.com/topic/Vandal-Germanic-people"}]
  },
  {
    year:529, depth:6470, title:"Justinian closes the Athenian philosophical schools", location:"Athens, Byzantine Empire",
    story:"Emperor Justinian's policies restricted non-Christian teaching and are traditionally associated with the closure of the Neoplatonic philosophical school at Athens, symbolizing the shrinking institutional space for traditional pagan intellectual life in the Christian empire.",
    context:"Christian imperial policy / religious restriction",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Christian imperial policy / religious restriction",Evidence:"The precise nature of the 529 closure is debated, but Justinian's legislation strongly favored Christian orthodoxy and restricted pagan practice."},
    sourceStatus:"The precise nature of the 529 closure is debated, but Justinian's legislation strongly favored Christian orthodoxy and restricted pagan practice.",
    sources:[{label:"Britannica — Justinian I",url:"https://www.britannica.com/biography/Justinian-I"}]
  },
  {
    year:532, depth:6640, title:"Nika revolt and massacre in Constantinople", location:"Constantinople",
    story:"Factional unrest erupted into a major revolt against Emperor Justinian I. Imperial troops crushed the uprising in the Hippodrome, killing thousands in the capital of the Christian Byzantine Empire.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Imperial violence / civil revolt",Evidence:"The revolt is well documented by Procopius and other Byzantine sources; ancient casualty totals are approximate."},
    sourceStatus:"The revolt is well documented by Procopius and other Byzantine sources; ancient casualty totals are approximate.",
    sources:[{label:"Britannica — Nika riots",url:"https://www.britannica.com/event/Nika-riots"}]
  },
  {
    year:554, depth:6810, title:"Justinian's wars reshape Christian Mediterranean", location:"Italy and Mediterranean",
    story:"Emperor Justinian's armies reconquered large parts of the former western Roman Empire. The wars devastated Italy and other regions even as Justinian promoted imperial Christian orthodoxy and monumental church building.",
    context:"Imperial war / Christian empire",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Imperial war / Christian empire",Evidence:"The wars are extensively documented by Procopius. They were geopolitical reconquests by a Christian empire, not primarily religious wars."},
    sourceStatus:"The wars are extensively documented by Procopius. They were geopolitical reconquests by a Christian empire, not primarily religious wars.",
    sources:[{label:"Britannica — Justinian I",url:"https://www.britannica.com/biography/Justinian-I"}]
  },
  {
    year:589, depth:6980, title:"Visigothic monarchy adopts Catholic Christianity", location:"Visigothic Spain",
    story:"King Reccared converted from Arian Christianity to Catholic Christianity. The resulting Catholic monarchy increasingly linked political unity to religious conformity, with serious consequences later for Jews and dissenters.",
    context:"Christianization / coercive religious state",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Christianization / coercive religious state",Evidence:"The conversion and councils are well documented. Later anti-Jewish legislation intensified under subsequent Visigothic kings."},
    sourceStatus:"The conversion and councils are well documented. Later anti-Jewish legislation intensified under subsequent Visigothic kings.",
    sources:[{label:"Britannica — Reccared",url:"https://www.britannica.com/biography/Reccared"}]
  },
  {
    year:589, depth:7150, title:"Third Council of Toledo links Visigothic monarchy and Catholic Church", location:"Toledo, Visigothic Spain",
    story:"After King Reccared's conversion, the council formalized Catholic Christianity as central to Visigothic political unity. Later councils and kings enacted increasingly coercive measures against Jews.",
    context:"Church-state consolidation / Jewish-Christian overlap",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Church-state consolidation / Jewish-Christian overlap",Evidence:"The council is directly documented. Anti-Jewish coercion intensified especially under later seventh-century rulers rather than resulting from a single decree in 589."},
    sourceStatus:"The council is directly documented. Anti-Jewish coercion intensified especially under later seventh-century rulers rather than resulting from a single decree in 589.",
    sources:[{label:"Britannica — councils of Toledo",url:"https://www.britannica.com/place/Spain/Visigothic-Spain-to-c-500-711"}]
  },
  {
    year:613, depth:7320, title:"Visigothic forced-baptism policy against Jews", location:"Visigothic Spain",
    story:"King Sisebut ordered Jews to accept baptism or leave his kingdom. Many were forcibly converted, creating communities of baptized Jews whose religious practice became the target of later church councils and royal legislation.",
    context:"Forced conversion / Christian state persecution",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Forced conversion / Christian state persecution",Evidence:"Forced conversion under Sisebut is well documented. Pope Gregory the Great had earlier criticized forced baptism, illustrating that Christian authorities did not hold a single position on coercion."},
    sourceStatus:"Forced conversion under Sisebut is well documented. Pope Gregory the Great had earlier criticized forced baptism, illustrating that Christian authorities did not hold a single position on coercion.",
    sources:[{label:"USHMM — Christian persecution of Jews",url:"https://www.ushmm.org/research/about-the-mandel-center/initiatives/religion-holocaust/resources/christian-persecution-of-jews-over-the-centuries"}]
  },
  {
    year:614, depth:7490, title:"Sasanian capture of Jerusalem", location:"Jerusalem",
    story:"Sasanian Persian forces captured Jerusalem from the Byzantine Empire during a wider war. Churches were damaged, Christian inhabitants were killed or deported, and Jewish participation on the Persian side is reported in several sources.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"War / conquest / anti-Christian violence",Evidence:"The conquest is historical, but casualty numbers and the scale and nature of Jewish participation are disputed in later sources."},
    sourceStatus:"The conquest is historical, but casualty numbers and the scale and nature of Jewish participation are disputed in later sources.",
    sources:[{label:"Encyclopaedia Britannica — Jerusalem history",url:"https://www.britannica.com/place/Jerusalem/History"}]
  },
  {
    year:636, depth:7660, title:"Arab-Muslim conquest transforms Christian Byzantine provinces", location:"Syria and Palestine",
    story:"Muslim armies defeated Byzantine forces at the Battle of Yarmouk, accelerating the loss of Syria and Palestine. Large Christian populations remained and gradually adapted to rule under the new Islamic states.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Conquest / political transformation",Evidence:"The conquest is well documented; conversion and demographic change occurred gradually over centuries rather than immediately."},
    sourceStatus:"The conquest is well documented; conversion and demographic change occurred gradually over centuries rather than immediately.",
    sources:[{label:"Encyclopaedia Britannica — Battle of Yarmouk",url:"https://www.britannica.com/event/Battle-of-Yarmouk-636"}]
  },
  {
    year:638, depth:7830, title:"Jerusalem surrenders to Caliph Umar", location:"Jerusalem",
    story:"Jerusalem passed from Byzantine Christian to Muslim rule during the Arab conquests. Christian holy places and communities continued under the new political order, while later traditions associated Caliph Umar with arrangements governing Christian worship and status.",
    context:"Conquest / Christian minority transition",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Conquest / Christian minority transition",Evidence:"The conquest is historical; details of the so-called Pact of Umar survive in later versions and should not all be projected directly onto 638."},
    sourceStatus:"The conquest is historical; details of the so-called Pact of Umar survive in later versions and should not all be projected directly onto 638.",
    sources:[{label:"Britannica — Jerusalem history",url:"https://www.britannica.com/place/Jerusalem/History"}]
  },
  {
    year:640, depth:8000, title:"Coptic Christians transition from Byzantine to Muslim rule", location:"Egypt",
    story:"Arab armies conquered Byzantine Egypt, ending imperial Christian rule. Egypt's large Coptic Christian population continued under Muslim government with protected but subordinate legal status that varied greatly across rulers and periods.",
    context:"Conquest / Christian minority transition",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Conquest / Christian minority transition",Evidence:"The conquest is firmly historical. Conditions for Christians varied over centuries and should not be portrayed as uniformly tolerant or uniformly persecutory."},
    sourceStatus:"The conquest is firmly historical. Conditions for Christians varied over centuries and should not be portrayed as uniformly tolerant or uniformly persecutory.",
    sources:[{label:"Britannica — Egypt Arab conquest",url:"https://www.britannica.com/place/Egypt/From-the-Islamic-conquest-to-1250"}]
  },
  {
    year:694, depth:8170, title:"Seventeenth Council of Toledo imposes extreme measures on Jews", location:"Toledo, Visigothic Spain",
    story:"Visigothic authorities accused Jews of conspiracy and ordered severe collective measures including loss of property and enslavement, one of the harshest episodes of anti-Jewish policy in the Christian Visigothic kingdom.",
    context:"Christian state persecution / Jewish-Christian overlap",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Christian state persecution / Jewish-Christian overlap",Evidence:"The council's legislation is historical; conspiracy accusations should not be accepted at face value. USHMM notes that Jews in Spain were eventually forced to choose between baptism and slavery."},
    sourceStatus:"The council's legislation is historical; conspiracy accusations should not be accepted at face value. USHMM notes that Jews in Spain were eventually forced to choose between baptism and slavery.",
    sources:[{label:"USHMM — Christian persecution of Jews",url:"https://www.ushmm.org/research/about-the-mandel-center/initiatives/religion-holocaust/resources/christian-persecution-of-jews-over-the-centuries"}]
  },
  {
    year:722, depth:8340, title:"Boniface begins major missionary work among Germanic peoples", location:"German lands",
    story:"Anglo-Saxon missionary Boniface worked to organize churches and convert pagan communities in central Europe, closely linking missionary expansion with Frankish political power.",
    context:"Mission / Christianization",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Mission / Christianization",Evidence:"Boniface's mission is extensively documented through letters and later biographies. Conversion involved persuasion, elite sponsorship and the destruction or replacement of some pagan sacred sites."},
    sourceStatus:"Boniface's mission is extensively documented through letters and later biographies. Conversion involved persuasion, elite sponsorship and the destruction or replacement of some pagan sacred sites.",
    sources:[{label:"Britannica — Saint Boniface",url:"https://www.britannica.com/biography/Saint-Boniface"}]
  },
  {
    year:726, depth:8510, title:"Byzantine Iconoclasm begins", location:"Byzantine Empire",
    story:"Imperial opposition to religious images triggered prolonged conflict between iconoclasts and defenders of icons. Monks and other opponents faced varying degrees of exile, confiscation and persecution.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Intra-Christian persecution / doctrinal conflict",Evidence:"Iconoclasm is extensively documented, but later iconophile sources can exaggerate the scale of persecution."},
    sourceStatus:"Iconoclasm is extensively documented, but later iconophile sources can exaggerate the scale of persecution.",
    sources:[{label:"Britannica — Iconoclastic Controversy",url:"https://www.britannica.com/event/Iconoclastic-Controversy"}]
  },
  {
    year:772, depth:8680, title:"Saxon Wars combine Frankish conquest and forced Christianization", location:"Saxony",
    story:"Charlemagne's long wars against the Saxons combined territorial conquest with compulsory Christianization. Rebellion was met with harsh penalties, deportation and episodes such as the reported execution of Saxon captives at Verden.",
    context:"Conquest / forced Christianization",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Conquest / forced Christianization",Evidence:"The wars are extensively documented, but numbers associated with the Massacre of Verden and interpretation of the sources remain debated."},
    sourceStatus:"The wars are extensively documented, but numbers associated with the Massacre of Verden and interpretation of the sources remain debated.",
    sources:[{label:"Britannica — Saxon Wars",url:"https://www.britannica.com/biography/Charlemagne/King-of-the-Franks"}]
  },
  {
    year:782, depth:8850, title:"Massacre of Verden during Saxon Wars", location:"Verden, Saxony",
    story:"Frankish sources report that Charlemagne ordered the execution of thousands of Saxons after a rebellion during wars that combined conquest with compulsory Christianization.",
    context:"Conquest / forced Christianization / mass execution",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Conquest / forced Christianization / mass execution",Evidence:"The Royal Frankish Annals report 4,500 executions, but historians debate the number, wording and nature of the event. The broader coercive Christianization of Saxony is not disputed."},
    sourceStatus:"The Royal Frankish Annals report 4,500 executions, but historians debate the number, wording and nature of the event. The broader coercive Christianization of Saxony is not disputed.",
    sources:[{label:"Britannica — Charlemagne",url:"https://www.britannica.com/biography/Charlemagne/King-of-the-Franks"}]
  },
  {
    year:800, depth:9020, title:"Charlemagne crowned emperor", location:"Rome / Western Europe",
    story:"Pope Leo III crowned Charlemagne emperor, strengthening a model of Christian kingship that linked Latin church authority and western political power. Charlemagne's expansion also included coercive conversion during the Saxon Wars.",
    context:"Christian empire / forced conversion context",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Christian empire / forced conversion context",Evidence:"The coronation and Saxon campaigns are well documented. Political consolidation and Christianization were deeply intertwined."},
    sourceStatus:"The coronation and Saxon campaigns are well documented. Political consolidation and Christianization were deeply intertwined.",
    sources:[{label:"Britannica — Charlemagne",url:"https://www.britannica.com/biography/Charlemagne"}]
  },
  {
    year:843, depth:9190, title:"Restoration of icons ends major Byzantine Iconoclasm", location:"Constantinople",
    story:"The restoration of icon veneration, celebrated in Eastern Orthodoxy as the Triumph of Orthodoxy, ended the second major period of Byzantine Iconoclasm.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Doctrinal settlement",Evidence:"The restoration is well documented in Byzantine ecclesiastical and imperial sources."},
    sourceStatus:"The restoration is well documented in Byzantine ecclesiastical and imperial sources.",
    sources:[{label:"Britannica — Iconoclastic Controversy",url:"https://www.britannica.com/event/Iconoclastic-Controversy"}]
  },
  {
    year:955, depth:9360, title:"Battle of Lechfeld strengthens Christian Ottonian power", location:"Near Augsburg",
    story:"Otto I defeated Magyar raiders at Lechfeld, strengthening the East Frankish kingdom and the political order that would become the medieval Holy Roman Empire.",
    context:"War / Christian political order",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"War / Christian political order",Evidence:"The battle was geopolitical rather than a simple Christian-pagan religious war, although medieval sources framed victory in religious terms."},
    sourceStatus:"The battle was geopolitical rather than a simple Christian-pagan religious war, although medieval sources framed victory in religious terms.",
    sources:[{label:"Britannica — Battle of Lechfeld",url:"https://www.britannica.com/event/Battle-of-Lechfeld"}]
  },
  {
    year:988, depth:9530, title:"Christianization of Kievan Rus'", location:"Kyiv and eastern Europe",
    story:"Prince Vladimir adopted Byzantine Christianity and promoted the baptism of his realm. The conversion linked Rus' politically and culturally with the Byzantine Christian world and transformed the religious landscape of eastern Europe.",
    context:"Christianization / state conversion",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Christianization / state conversion",Evidence:"The broad conversion is historical, while dramatic details in later chronicles contain literary and legendary elements."},
    sourceStatus:"The broad conversion is historical, while dramatic details in later chronicles contain literary and legendary elements.",
    sources:[{label:"Britannica — Vladimir I",url:"https://www.britannica.com/biography/Vladimir-I"}]
  },
  {
    year:988, depth:9700, title:"Conversion of Vladimir reshapes eastern Christianity", location:"Kievan Rus'",
    story:"Vladimir of Kyiv adopted Byzantine Christianity, traditionally dated to 988, helping establish the religious tradition from which Russian, Ukrainian and Belarusian Orthodox Christianity later developed.",
    context:"State conversion / Eastern Christianity",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"State conversion / Eastern Christianity",Evidence:"The conversion is historical, while details in the Primary Chronicle combine history with literary tradition."},
    sourceStatus:"The conversion is historical, while details in the Primary Chronicle combine history with literary tradition.",
    sources:[{label:"Britannica — Vladimir I",url:"https://www.britannica.com/biography/Vladimir-I"}]
  },
  {
    year:1009, depth:9870, title:"Destruction of the Church of the Holy Sepulchre", location:"Jerusalem",
    story:"Fatimid caliph al-Hakim ordered destruction of the Church of the Holy Sepulchre and imposed measures against Christian institutions. The church was later rebuilt under agreements with Byzantium.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Religious persecution / destruction",Evidence:"The destruction is well attested in Christian and Muslim historical sources; interpretations of al-Hakim's policies vary."},
    sourceStatus:"The destruction is well attested in Christian and Muslim historical sources; interpretations of al-Hakim's policies vary.",
    sources:[{label:"Encyclopaedia Britannica — Holy Sepulchre",url:"https://www.britannica.com/place/Holy-Sepulchre"}]
  },
  {
    year:1054, depth:10040, title:"East–West Schism", location:"Rome and Constantinople",
    story:"Mutual excommunications in 1054 became a symbolic milestone in the widening separation between the Latin Catholic and Greek Orthodox churches. The schism developed over centuries and was not created by a single event.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Schism / church division",Evidence:"The 1054 excommunications are documented, but historians emphasize the gradual character of the separation."},
    sourceStatus:"The 1054 excommunications are documented, but historians emphasize the gradual character of the separation.",
    sources:[{label:"Encyclopaedia Britannica — East-West Schism",url:"https://www.britannica.com/event/East-West-Schism-1054"}]
  },
  {
    year:1077, depth:10210, title:"Investiture Controversy reaches Canossa", location:"Canossa, Italy",
    story:"Emperor Henry IV sought absolution from Pope Gregory VII after excommunication during a struggle over who could appoint bishops. The conflict became a defining confrontation between papal and secular authority.",
    context:"Church-state conflict",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Church-state conflict",Evidence:"Canossa and the Investiture Controversy are extensively documented. The dispute was institutional and political as well as religious."},
    sourceStatus:"Canossa and the Investiture Controversy are extensively documented. The dispute was institutional and political as well as religious.",
    sources:[{label:"Britannica — Investiture Controversy",url:"https://www.britannica.com/event/Investiture-Controversy"}]
  },
  {
    year:1095, depth:10380, title:"Pope Urban II calls the First Crusade", location:"Clermont, France",
    story:"Pope Urban II called western Christians to an armed expedition to aid eastern Christians and recover Jerusalem. The crusading movement fused pilgrimage, warfare, penitential religion and political ambitions.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Crusade / religious war",Evidence:"The call is well documented through several later accounts of Urban's speech; the exact words he used are not recoverable."},
    sourceStatus:"The call is well documented through several later accounts of Urban's speech; the exact words he used are not recoverable.",
    sources:[{label:"Encyclopaedia Britannica — Council of Clermont",url:"https://www.britannica.com/event/Council-of-Clermont"}]
  },
  {
    year:1096, depth:10550, title:"First Crusade massacres of Jewish communities", location:"Rhineland",
    story:"Crusading groups attacked Jewish communities in cities including Speyer, Worms and Mainz before departing for the eastern Mediterranean, killing Jews and forcing conversions.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Crusader violence / anti-Jewish massacre",Evidence:"The massacres are extensively documented in Jewish chronicles and Christian sources, though exact casualty totals vary."},
    sourceStatus:"The massacres are extensively documented in Jewish chronicles and Christian sources, though exact casualty totals vary.",
    sources:[{label:"Encyclopaedia Britannica — First Crusade",url:"https://www.britannica.com/event/First-Crusade"}]
  },
  {
    year:1097, depth:10720, title:"Siege of Antioch during the First Crusade", location:"Antioch",
    story:"Crusader armies besieged and captured Antioch after months of hunger, disease and combat, then themselves endured a counter-siege. The campaign became a defining episode of the First Crusade.",
    context:"Crusade / siege",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Crusade / siege",Evidence:"The siege is extensively documented in Latin, Greek, Armenian and Muslim sources, though individual narratives differ."},
    sourceStatus:"The siege is extensively documented in Latin, Greek, Armenian and Muslim sources, though individual narratives differ.",
    sources:[{label:"Britannica — First Crusade",url:"https://www.britannica.com/event/First-Crusade"}]
  },
  {
    year:1099, depth:10890, title:"Crusaders capture Jerusalem", location:"Jerusalem",
    story:"First Crusade armies captured Jerusalem and killed many Muslim and Jewish inhabitants. Medieval accounts describe extensive slaughter, though rhetorical exaggeration makes precise casualty numbers uncertain.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Crusade / conquest / massacre",Evidence:"The conquest and mass killing are firmly established; exact numbers in medieval chronicles are unreliable."},
    sourceStatus:"The conquest and mass killing are firmly established; exact numbers in medieval chronicles are unreliable.",
    sources:[{label:"Encyclopaedia Britannica — Siege of Jerusalem",url:"https://www.britannica.com/event/Siege-of-Jerusalem-1099"}]
  },
  {
    year:1122, depth:11060, title:"Concordat of Worms settles major phase of Investiture Controversy", location:"Worms, Holy Roman Empire",
    story:"The papacy and Emperor Henry V reached a compromise over episcopal appointments, ending a major phase of the struggle between church and imperial authority.",
    context:"Church-state settlement",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Church-state settlement",Evidence:"The concordat is directly documented and did not end all later conflicts between popes and rulers."},
    sourceStatus:"The concordat is directly documented and did not end all later conflicts between popes and rulers.",
    sources:[{label:"Britannica — Concordat of Worms",url:"https://www.britannica.com/event/Concordat-of-Worms"}]
  },
  {
    year:1144, depth:11230, title:"Norwich blood-libel accusation", location:"Norwich, England",
    story:"After the death of William of Norwich, Jews were falsely accused of ritual murder. The story became an influential model for the blood libel, a Christian antisemitic myth that repeatedly fueled persecution in medieval Europe.",
    context:"Christian antisemitism / blood libel",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Christian antisemitism / blood libel",Evidence:"There is no evidence Jews practiced ritual murder. The accusation was a fabricated antisemitic myth with major later consequences."},
    sourceStatus:"There is no evidence Jews practiced ritual murder. The accusation was a fabricated antisemitic myth with major later consequences.",
    sources:[{label:"USHMM — Antisemitism",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism"}]
  },
  {
    year:1147, depth:11400, title:"Second Crusade and Northern Crusading campaigns", location:"Europe and eastern Mediterranean",
    story:"A new crusade followed the fall of Edessa. At the same time, crusading ideology was applied in northern Europe against non-Christian Slavic peoples, demonstrating how crusade warfare expanded beyond the Holy Land.",
    context:"Crusade / religious war",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Crusade / religious war",Evidence:"The campaigns are extensively documented; motives combined religion, territorial expansion and dynastic politics."},
    sourceStatus:"The campaigns are extensively documented; motives combined religion, territorial expansion and dynastic politics.",
    sources:[{label:"Britannica — Second Crusade",url:"https://www.britannica.com/event/Second-Crusade"}]
  },
  {
    year:1182, depth:11570, title:"Massacre of the Latins in Constantinople", location:"Constantinople",
    story:"An anti-Latin uprising targeted western European Catholic residents of Constantinople. Large numbers were killed, displaced or enslaved, intensifying Catholic–Orthodox hostility before the Fourth Crusade.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Inter-Christian massacre",Evidence:"The massacre is well attested in Byzantine and Latin sources; medieval casualty estimates vary widely."},
    sourceStatus:"The massacre is well attested in Byzantine and Latin sources; medieval casualty estimates vary widely.",
    sources:[{label:"Britannica — Byzantine Empire",url:"https://www.britannica.com/place/Byzantine-Empire"}]
  },
  {
    year:1187, depth:11740, title:"Saladin captures Jerusalem", location:"Jerusalem",
    story:"After defeating the Crusader army at Hattin, Saladin captured Jerusalem. Unlike the mass killing associated with the Crusader conquest of 1099, many inhabitants were ransomed or released, although enslavement occurred when ransoms could not be paid.",
    context:"Conquest / Christian-Muslim war",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Conquest / Christian-Muslim war",Evidence:"The conquest is well documented in Muslim and Christian sources. Later traditions sometimes idealize or demonize the event beyond the evidence."},
    sourceStatus:"The conquest is well documented in Muslim and Christian sources. Later traditions sometimes idealize or demonize the event beyond the evidence.",
    sources:[{label:"Britannica — Saladin",url:"https://www.britannica.com/biography/Saladin"}]
  },
  {
    year:1189, depth:11910, title:"Anti-Jewish violence erupts at Richard I's coronation", location:"London and England",
    story:"Violence against Jews broke out around Richard I's coronation and spread to other English towns during the crusading atmosphere that preceded the Third Crusade.",
    context:"Anti-Jewish violence / Christian-Jewish overlap",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Anti-Jewish violence / Christian-Jewish overlap",Evidence:"The attacks are well documented in medieval chronicles and form part of the chain of violence culminating in the York massacre of 1190."},
    sourceStatus:"The attacks are well documented in medieval chronicles and form part of the chain of violence culminating in the York massacre of 1190.",
    sources:[{label:"Historic Royal Palaces — medieval Jews",url:"https://www.hrp.org.uk/tower-of-london/history-and-stories/jewish-medieval-history/"}]
  },
  {
    year:1190, depth:12080, title:"York massacre of Jews", location:"York, England",
    story:"During crusading fervor and political disorder, members of York's Jewish community took refuge in Clifford's Tower. Many died by suicide or were killed after leaving the tower, and attackers destroyed debt records.",
    context:"Anti-Jewish massacre / Christian society",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Anti-Jewish massacre / Christian society",Evidence:"The massacre is well documented and belongs to the wider pattern of anti-Jewish violence accompanying crusading culture in medieval Christian Europe."},
    sourceStatus:"The massacre is well documented and belongs to the wider pattern of anti-Jewish violence accompanying crusading culture in medieval Christian Europe.",
    sources:[{label:"English Heritage — York massacre",url:"https://www.english-heritage.org.uk/visit/places/cliffords-tower-york/history-and-stories/massacre-of-the-jews/"}]
  },
  {
    year:1204, depth:12250, title:"Fourth Crusade sacks Constantinople", location:"Constantinople",
    story:"Latin crusaders captured and looted Constantinople, a Christian city and capital of the Byzantine Empire. Churches, monasteries and homes were plundered, deepening hostility between Catholic and Orthodox Christians.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Crusader violence / inter-Christian war",Evidence:"The sack is extensively documented by Latin and Byzantine eyewitnesses and chroniclers."},
    sourceStatus:"The sack is extensively documented by Latin and Byzantine eyewitnesses and chroniclers.",
    sources:[{label:"Encyclopaedia Britannica — Sack of Constantinople",url:"https://www.britannica.com/event/Sack-of-Constantinople-1204"}]
  },
  {
    year:1204, depth:12420, title:"Latin rule follows the sack of Orthodox Constantinople", location:"Constantinople",
    story:"After the Fourth Crusade captured Constantinople, Latin rulers established an empire and displaced much of the Byzantine political and ecclesiastical hierarchy. The episode deepened hostility between Latin Catholic and Greek Orthodox Christians.",
    context:"Intra-Christian conquest / occupation",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Intra-Christian conquest / occupation",Evidence:"The conquest and Latin Empire are extensively documented. The sack became a lasting symbol of Catholic-Orthodox estrangement."},
    sourceStatus:"The conquest and Latin Empire are extensively documented. The sack became a lasting symbol of Catholic-Orthodox estrangement.",
    sources:[{label:"Britannica — Fourth Crusade",url:"https://www.britannica.com/event/Fourth-Crusade"}]
  },
  {
    year:1209, depth:12590, title:"Albigensian Crusade begins", location:"Southern France",
    story:"Pope Innocent III backed a crusade against Cathar heresy in southern France. Campaigns involved sieges, massacres and political conquest and lasted for decades.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Crusade / intra-Christian persecution",Evidence:"The crusade is extensively documented. Medieval casualty figures for particular massacres are often uncertain."},
    sourceStatus:"The crusade is extensively documented. Medieval casualty figures for particular massacres are often uncertain.",
    sources:[{label:"Encyclopaedia Britannica — Albigensian Crusade",url:"https://www.britannica.com/event/Albigensian-Crusade"}]
  },
  {
    year:1212, depth:12760, title:"Children's Crusade movements", location:"France and German lands",
    story:"Large popular movements of young people and poor adults set out amid crusading enthusiasm, believing divine intervention could recover the Holy Land. Most never reached the eastern Mediterranean and many suffered exploitation or dispersal.",
    context:"Popular religious movement / crusading culture",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Popular religious movement / crusading culture",Evidence:"The movements are historical but later legend greatly exaggerated the role of very young children and stories of mass enslavement."},
    sourceStatus:"The movements are historical but later legend greatly exaggerated the role of very young children and stories of mass enslavement.",
    sources:[{label:"Britannica — Children's Crusade",url:"https://www.britannica.com/event/Childrens-Crusade"}]
  },
  {
    year:1215, depth:12930, title:"Fourth Lateran Council regulates Christian society and minorities", location:"Rome",
    story:"The Fourth Lateran Council enacted major church reforms and measures concerning heresy, crusading, Jews and Muslims. Its canons became highly influential in medieval Latin Christianity.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Church law / coercive religious policy",Evidence:"The council's canons survive directly. Their enforcement and local consequences varied across medieval Europe."},
    sourceStatus:"The council's canons survive directly. Their enforcement and local consequences varied across medieval Europe.",
    sources:[{label:"Britannica — Fourth Lateran Council",url:"https://www.britannica.com/event/Fourth-Lateran-Council"}]
  },
  {
    year:1217, depth:13100, title:"Fifth Crusade attacks Egypt", location:"Egypt",
    story:"Crusader forces attempted to conquer Egypt as a route to recovering Jerusalem, capturing Damietta before the campaign collapsed.",
    context:"Crusade / Christian-Muslim war",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Crusade / Christian-Muslim war",Evidence:"The campaign is extensively documented in Christian and Muslim sources. Strategic and political motives accompanied crusading religion."},
    sourceStatus:"The campaign is extensively documented in Christian and Muslim sources. Strategic and political motives accompanied crusading religion.",
    sources:[{label:"Britannica — Crusades",url:"https://www.britannica.com/event/Crusades"}]
  },
  {
    year:1231, depth:13270, title:"Papal Inquisition develops", location:"Western Europe",
    story:"Pope Gregory IX established papal mechanisms for investigating and prosecuting heresy. Inquisitorial practice varied by region and period and included imprisonment, confiscation and, through secular authorities, execution.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Inquisition / religious persecution",Evidence:"Institutional records are extensive. Popular portrayals often collapse distinct inquisitions and centuries into a single system."},
    sourceStatus:"Institutional records are extensive. Popular portrayals often collapse distinct inquisitions and centuries into a single system.",
    sources:[{label:"Encyclopaedia Britannica — Inquisition",url:"https://www.britannica.com/topic/inquisition"}]
  },
  {
    year:1235, depth:13440, title:"Fulda blood-libel accusations and killings", location:"Fulda, Holy Roman Empire",
    story:"Jews were accused of murdering Christian children for ritual purposes after a fire killed children in Fulda. Dozens of Jews were killed before Emperor Frederick II convened an inquiry that rejected the ritual-murder accusation.",
    context:"Christian antisemitism / massacre / blood libel",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Christian antisemitism / massacre / blood libel",Evidence:"The accusation was false. Medieval rulers and church authorities sometimes rejected blood-libel claims even while broader discriminatory systems persisted."},
    sourceStatus:"The accusation was false. Medieval rulers and church authorities sometimes rejected blood-libel claims even while broader discriminatory systems persisted.",
    sources:[{label:"USHMM — Antisemitism in history",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1244, depth:13610, title:"Fall of Jerusalem to Khwarazmian forces", location:"Jerusalem",
    story:"Khwarazmian forces allied with Egypt captured Jerusalem from Christian control, killing inhabitants and destroying religious sites amid wider Ayyubid and Crusader warfare.",
    context:"Conquest / Christian-Muslim conflict",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Conquest / Christian-Muslim conflict",Evidence:"The capture is well documented in medieval sources; casualty figures vary."},
    sourceStatus:"The capture is well documented in medieval sources; casualty figures vary.",
    sources:[{label:"Britannica — Crusades",url:"https://www.britannica.com/event/Crusades"}]
  },
  {
    year:1248, depth:13780, title:"Seventh Crusade invades Egypt", location:"Egypt",
    story:"Louis IX of France led a crusade into Egypt, captured Damietta and was later defeated and captured with much of his army.",
    context:"Crusade / Christian-Muslim war",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Crusade / Christian-Muslim war",Evidence:"The expedition is extensively documented, including by Jean de Joinville and Arabic chroniclers."},
    sourceStatus:"The expedition is extensively documented, including by Jean de Joinville and Arabic chroniclers.",
    sources:[{label:"Britannica — Crusades",url:"https://www.britannica.com/event/Crusades"}]
  },
  {
    year:1285, depth:13950, title:"Aragonese Crusade brings papal crusading into European dynastic war", location:"Aragon and Catalonia",
    story:"Pope Martin IV declared a crusade against King Peter III of Aragon amid Mediterranean dynastic conflict, demonstrating how crusading privileges could be directed against fellow Christians.",
    context:"Intra-Christian crusade / dynastic war",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Intra-Christian crusade / dynastic war",Evidence:"The campaign is firmly documented and illustrates the political expansion of crusading ideology."},
    sourceStatus:"The campaign is firmly documented and illustrates the political expansion of crusading ideology.",
    sources:[{label:"Britannica — Peter III",url:"https://www.britannica.com/biography/Peter-III-king-of-Aragon"}]
  },
  {
    year:1290, depth:14120, title:"Expulsion of Jews from Christian England", location:"England",
    story:"Edward I ordered Jews expelled from England after decades of discriminatory taxation, legal restrictions and anti-Jewish violence within a Christian monarchy.",
    context:"Christian state persecution / Jewish expulsion",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Christian state persecution / Jewish expulsion",Evidence:"The expulsion is directly documented and is a major intersection between medieval Christian political history and Jewish history."},
    sourceStatus:"The expulsion is directly documented and is a major intersection between medieval Christian political history and Jewish history.",
    sources:[{label:"Britannica — Judaism in England",url:"https://www.britannica.com/topic/Judaism"}]
  },
  {
    year:1291, depth:14290, title:"Fall of Acre ends major Crusader rule in the Holy Land", location:"Acre",
    story:"Mamluk forces captured Acre, the principal remaining Crusader stronghold in the Levant. The defeat effectively ended large-scale Latin Christian territorial rule in the Holy Land.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"War / conquest",Evidence:"The siege and fall of Acre are well documented in Latin and Arabic chronicles."},
    sourceStatus:"The siege and fall of Acre are well documented in Latin and Arabic chronicles.",
    sources:[{label:"Encyclopaedia Britannica — Acre",url:"https://www.britannica.com/place/Akko"}]
  },
  {
    year:1306, depth:14460, title:"French crown expels Jews", location:"France",
    story:"King Philip IV ordered Jews expelled from France and confiscated their property. The action took place within a Christian monarchy where fiscal motives, royal consolidation and religious prejudice intersected.",
    context:"Christian state expulsion / Jewish-Christian overlap",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Christian state expulsion / Jewish-Christian overlap",Evidence:"The expulsion is firmly documented. Political and financial motives operated alongside longstanding religious discrimination."},
    sourceStatus:"The expulsion is firmly documented. Political and financial motives operated alongside longstanding religious discrimination.",
    sources:[{label:"Britannica — France Jewish history",url:"https://www.britannica.com/topic/Judaism"}]
  },
  {
    year:1348, depth:14630, title:"Black Death persecutions of Jews in Christian Europe", location:"Europe",
    story:"As plague devastated Europe, false accusations that Jews had poisoned wells helped trigger massacres and expulsions. Church authorities sometimes condemned the accusations, but local Christian mobs and authorities nevertheless carried out widespread violence.",
    context:"Anti-Jewish persecution / Christian Europe",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Anti-Jewish persecution / Christian Europe",Evidence:"The persecutions are extensively documented. Jews did not cause the plague; the accusations were conspiracy theories arising amid catastrophe."},
    sourceStatus:"The persecutions are extensively documented. Jews did not cause the plague; the accusations were conspiracy theories arising amid catastrophe.",
    sources:[{label:"USHMM — antisemitism history",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism"}]
  },
  {
    year:1349, depth:14800, title:"Strasbourg massacre during Black Death persecutions", location:"Strasbourg",
    story:"Hundreds of Jews were burned or otherwise killed after false accusations associated with the Black Death, despite earlier attempts by some officials to protect the community.",
    context:"Anti-Jewish massacre / Christian-Jewish overlap",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Anti-Jewish massacre / Christian-Jewish overlap",Evidence:"The massacre is well documented. Claims that Jews poisoned wells were false conspiracy accusations."},
    sourceStatus:"The massacre is well documented. Claims that Jews poisoned wells were false conspiracy accusations.",
    sources:[{label:"USHMM — Antisemitism in history",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-from-the-early-church-to-1400"}]
  },
  {
    year:1391, depth:14970, title:"Anti-Jewish massacres and forced conversions in Iberia", location:"Castile and Aragon",
    story:"Violence beginning in Seville spread across Iberia, killing Jews and driving many others into conversion. The resulting large converso population became central to later inquisitorial suspicion.",
    context:"Massacre / forced conversion",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Massacre / forced conversion",Evidence:"The violence and mass conversions are extensively documented in Jewish and Christian records."},
    sourceStatus:"The violence and mass conversions are extensively documented in Jewish and Christian records.",
    sources:[{label:"Britannica — Spain Jewish history",url:"https://www.britannica.com/place/Spain"}]
  },
  {
    year:1415, depth:15140, title:"Jan Hus executed for heresy", location:"Constance",
    story:"The Czech reformer Jan Hus was condemned by the Council of Constance and burned at the stake. His execution helped inspire the Hussite movement and subsequent wars in Bohemia.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Heresy prosecution / execution",Evidence:"Hus's trial and execution are extensively documented in conciliar and contemporary records."},
    sourceStatus:"Hus's trial and execution are extensively documented in conciliar and contemporary records.",
    sources:[{label:"Britannica — Jan Hus",url:"https://www.britannica.com/biography/Jan-Hus"}]
  },
  {
    year:1419, depth:15310, title:"Hussite Wars begin", location:"Bohemia",
    story:"After the death of Jan Hus and mounting religious-political conflict, Hussite forces fought crusading armies and rival Christian factions in a series of wars that devastated parts of Central Europe.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Intra-Christian war / crusade",Evidence:"The Hussite Wars are extensively documented and combined theology, Czech political identity and social conflict."},
    sourceStatus:"The Hussite Wars are extensively documented and combined theology, Czech political identity and social conflict.",
    sources:[{label:"Britannica — Hussite Wars",url:"https://www.britannica.com/event/Hussite-Wars"}]
  },
  {
    year:1421, depth:15480, title:"Vienna Gesera destroys Austrian Jewish communities", location:"Vienna and Austria",
    story:"Duke Albert V's government arrested Jews, confiscated property, expelled many and executed others after accusations including host desecration. The persecution culminated in the burning of more than 200 Jews in Vienna.",
    context:"Christian state persecution / Jewish-Christian overlap",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Christian state persecution / Jewish-Christian overlap",Evidence:"The Vienna Gesera is well documented; host-desecration accusations were part of medieval Christian anti-Jewish mythology."},
    sourceStatus:"The Vienna Gesera is well documented; host-desecration accusations were part of medieval Christian anti-Jewish mythology.",
    sources:[{label:"Jewish Museum Vienna — Vienna Gesera",url:"https://www.jmw.at/en"}]
  },
  {
    year:1453, depth:15650, title:"Ottoman conquest of Constantinople", location:"Constantinople",
    story:"Ottoman forces under Mehmed II captured Constantinople, ending the Byzantine Empire. The conquest involved heavy fighting, enslavement and looting, while the city's Orthodox Christian institutions were later incorporated into the Ottoman system.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Conquest / Christian-Muslim war",Evidence:"The conquest is extensively documented by Ottoman, Byzantine and western sources; casualty estimates vary."},
    sourceStatus:"The conquest is extensively documented by Ottoman, Byzantine and western sources; casualty estimates vary.",
    sources:[{label:"Encyclopaedia Britannica — Fall of Constantinople",url:"https://www.britannica.com/event/Fall-of-Constantinople-1453"}]
  },
  {
    year:1478, depth:15820, title:"Spanish Inquisition established", location:"Spain",
    story:"The Spanish monarchy established an inquisition initially focused heavily on converts from Judaism suspected of secretly practicing Judaism, later extending to other perceived religious offenses.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Inquisition / coercive religious policy",Evidence:"The institution left extensive archival records. Execution totals are far lower than some later polemical estimates but still represent systematic coercion and persecution."},
    sourceStatus:"The institution left extensive archival records. Execution totals are far lower than some later polemical estimates but still represent systematic coercion and persecution.",
    sources:[{label:"Encyclopaedia Britannica — Spanish Inquisition",url:"https://www.britannica.com/topic/Spanish-Inquisition"}]
  },
  {
    year:1480, depth:15990, title:"Spanish Inquisition begins operating against suspected crypto-Judaism", location:"Seville and Spain",
    story:"The newly established Spanish Inquisition began tribunals focused heavily on conversos—baptized Christians of Jewish ancestry—suspected of secretly practicing Judaism. Imprisonment, confiscation and executions followed.",
    context:"Inquisition / Jewish-Christian overlap",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Inquisition / Jewish-Christian overlap",Evidence:"Inquisitorial records are extensive. The institution targeted baptized Christians under church jurisdiction, not Jews as Jews, while creating intense pressure around Jewish ancestry and conversion."},
    sourceStatus:"Inquisitorial records are extensive. The institution targeted baptized Christians under church jurisdiction, not Jews as Jews, while creating intense pressure around Jewish ancestry and conversion.",
    sources:[{label:"Britannica — Spanish Inquisition",url:"https://www.britannica.com/topic/Spanish-Inquisition"}]
  },
  {
    year:1492, depth:16160, title:"Expulsion of Jews from Spain under Catholic monarchs", location:"Spain",
    story:"Ferdinand and Isabella ordered practicing Jews to convert or leave Spain. The decree followed the conquest of Granada and operated alongside the Inquisition's scrutiny of converts suspected of maintaining Jewish practices.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Christian state persecution / expulsion",Evidence:"The Alhambra Decree is directly documented. It is a central intersection of Spanish Christian state-building and Jewish history."},
    sourceStatus:"The Alhambra Decree is directly documented. It is a central intersection of Spanish Christian state-building and Jewish history.",
    sources:[{label:"Britannica — Spanish Inquisition",url:"https://www.britannica.com/topic/Spanish-Inquisition"}]
  },
  {
    year:1494, depth:16330, title:"French invasion begins Italian Wars involving papacy and Christian states", location:"Italy",
    story:"Charles VIII of France invaded Italy, beginning decades of warfare among Catholic European powers in which the Papal States, France, Spain and the Holy Roman Empire fought for political dominance.",
    context:"War among Christian states",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"War among Christian states",Evidence:"The Italian Wars were dynastic and geopolitical, demonstrating that shared Christianity did not prevent prolonged interstate warfare."},
    sourceStatus:"The Italian Wars were dynastic and geopolitical, demonstrating that shared Christianity did not prevent prolonged interstate warfare.",
    sources:[{label:"Britannica — Italian Wars",url:"https://www.britannica.com/event/Italian-Wars"}]
  },
  {
    year:1497, depth:16500, title:"Forced conversion of Jews in Portugal", location:"Portugal",
    story:"King Manuel I's policies led to the forced conversion of Portugal's Jewish population, creating a large community of New Christians later vulnerable to inquisitorial persecution.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Christian state coercion / forced conversion",Evidence:"The forced conversion policy is well documented in Portuguese and Jewish historical records."},
    sourceStatus:"The forced conversion policy is well documented in Portuguese and Jewish historical records.",
    sources:[{label:"Britannica — Portugal history",url:"https://www.britannica.com/place/Portugal"}]
  },
  {
    year:1517, depth:16670, title:"Luther's challenge begins the Protestant Reformation", location:"Holy Roman Empire",
    story:"Martin Luther's dispute over indulgences developed into a wider challenge to papal authority and church doctrine. The Reformation fragmented western Christianity and became intertwined with political and military conflict.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Reformation / church division",Evidence:"Luther's writings and the political-religious conflict are extensively documented."},
    sourceStatus:"Luther's writings and the political-religious conflict are extensively documented.",
    sources:[{label:"Encyclopaedia Britannica — Reformation",url:"https://www.britannica.com/event/Reformation"}]
  },
  {
    year:1524, depth:16840, title:"German Peasants' War and Reformation-era violence", location:"German lands",
    story:"Economic grievances, local politics and religious ideas contributed to a massive uprising. Princes suppressed the revolt with extreme violence; Luther condemned the rebels in harsh terms after initially criticizing elite abuses.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Civil war / Reformation-era conflict",Evidence:"The war is extensively documented. It cannot be reduced to a purely religious conflict."},
    sourceStatus:"The war is extensively documented. It cannot be reduced to a purely religious conflict.",
    sources:[{label:"Encyclopaedia Britannica — Peasants' War",url:"https://www.britannica.com/event/Peasants-War"}]
  },
  {
    year:1527, depth:17010, title:"Sack of Rome by imperial troops", location:"Rome",
    story:"Mutinous troops of Emperor Charles V, many of them Lutheran Germans alongside Catholic soldiers, stormed and looted Rome. Thousands were killed and churches and religious sites were pillaged.",
    context:"Intra-Christian war / sack",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Intra-Christian war / sack",Evidence:"The sack is extensively documented. Religious hostility, unpaid troops and imperial-papal politics all contributed."},
    sourceStatus:"The sack is extensively documented. Religious hostility, unpaid troops and imperial-papal politics all contributed.",
    sources:[{label:"Britannica — Sack of Rome",url:"https://www.britannica.com/event/Sack-of-Rome-1527"}]
  },
  {
    year:1531, depth:17180, title:"Second War of Kappel kills Swiss reformer Huldrych Zwingli", location:"Swiss Confederacy",
    story:"Catholic and Protestant Swiss cantons fought at Kappel, where Protestant reformer Huldrych Zwingli was killed. The settlement preserved a confessional division among cantons.",
    context:"Catholic-Protestant war",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Catholic-Protestant war",Evidence:"The conflict is firmly documented and was both religious and cantonal-political."},
    sourceStatus:"The conflict is firmly documented and was both religious and cantonal-political.",
    sources:[{label:"Britannica — Huldrych Zwingli",url:"https://www.britannica.com/biography/Huldrych-Zwingli"}]
  },
  {
    year:1534, depth:17350, title:"Anabaptist rule and siege of Münster", location:"Münster",
    story:"Radical Anabaptists seized control of Münster and established a theocratic regime. Catholic and Protestant-aligned forces besieged the city, which fell in 1535 amid severe violence and executions.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Sectarian conflict / siege",Evidence:"The episode is well documented, but it was an extreme movement not representative of Anabaptists generally."},
    sourceStatus:"The episode is well documented, but it was an extreme movement not representative of Anabaptists generally.",
    sources:[{label:"Encyclopaedia Britannica — Münster",url:"https://www.britannica.com/place/Munster-Germany"}]
  },
  {
    year:1536, depth:17520, title:"Dissolution of the Monasteries transforms English Christianity", location:"England",
    story:"Henry VIII's government dissolved monasteries and confiscated their property after the break with Rome. Resistance such as the Pilgrimage of Grace was suppressed, and England entered decades of religious upheaval.",
    context:"Reformation / church-state coercion",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Reformation / church-state coercion",Evidence:"The dissolution is extensively documented. Economic and political motives accompanied theological change."},
    sourceStatus:"The dissolution is extensively documented. Economic and political motives accompanied theological change.",
    sources:[{label:"Britannica — Dissolution of the Monasteries",url:"https://www.britannica.com/event/Dissolution-of-the-Monasteries"}]
  },
  {
    year:1543, depth:17690, title:"Martin Luther publishes On the Jews and Their Lies", location:"German lands",
    story:"Late in his life, Martin Luther published a violently anti-Jewish treatise advocating the destruction of synagogues and homes and severe restrictions on Jews. His writings became part of the long history of Christian antisemitism and were later exploited by antisemites.",
    context:"Christian antisemitism / religious polemic",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Christian antisemitism / religious polemic",Evidence:"Luther's text is directly preserved. It should be distinguished from Nazi racial ideology while recognizing its destructive anti-Jewish language and later influence."},
    sourceStatus:"Luther's text is directly preserved. It should be distinguished from Nazi racial ideology while recognizing its destructive anti-Jewish language and later influence.",
    sources:[{label:"USHMM — History of Antisemitism",url:"https://main.ushmm.org/antisemitism/what-is-antisemitism/why-the-jews-history-of-antisemitism"}]
  },
  {
    year:1545, depth:17860, title:"Council of Trent launches Catholic reform and Counter-Reformation", location:"Trent",
    story:"The Council of Trent clarified Catholic doctrine and reformed church discipline in response to the Protestant Reformation. Its decisions shaped Catholic identity during an era of confessional conflict.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Counter-Reformation / church reform",Evidence:"The council's decrees are directly preserved and extensively studied."},
    sourceStatus:"The council's decrees are directly preserved and extensively studied.",
    sources:[{label:"Britannica — Council of Trent",url:"https://www.britannica.com/event/Council-of-Trent"}]
  },
  {
    year:1546, depth:18030, title:"Schmalkaldic War pits emperor against Protestant princes", location:"Holy Roman Empire",
    story:"Emperor Charles V fought the Protestant Schmalkaldic League, defeating it militarily at Mühlberg before Protestant power later recovered.",
    context:"Catholic-Protestant war / imperial politics",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Catholic-Protestant war / imperial politics",Evidence:"The conflict combined confessional division with constitutional struggles over imperial authority."},
    sourceStatus:"The conflict combined confessional division with constitutional struggles over imperial authority.",
    sources:[{label:"Britannica — Schmalkaldic War",url:"https://www.britannica.com/event/Schmalkaldic-War"}]
  },
  {
    year:1553, depth:18200, title:"Mary I restores Catholicism and executes Protestant heretics", location:"England",
    story:"Queen Mary I restored papal authority and revived heresy laws. Nearly 300 Protestants were burned during her reign, becoming central to later English Protestant memory.",
    context:"Confessional persecution / executions",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Confessional persecution / executions",Evidence:"The Marian persecutions are extensively documented. Later Protestant polemic shaped popular memory and the epithet 'Bloody Mary.'"},
    sourceStatus:"The Marian persecutions are extensively documented. Later Protestant polemic shaped popular memory and the epithet 'Bloody Mary.'",
    sources:[{label:"Britannica — Mary I",url:"https://www.britannica.com/biography/Mary-I"}]
  },
  {
    year:1555, depth:18370, title:"Peace of Augsburg", location:"Holy Roman Empire",
    story:"The settlement temporarily reduced Catholic–Lutheran conflict by allowing territorial rulers to choose between Catholicism and Lutheranism, while excluding other confessions.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Religious settlement",Evidence:"The treaty is directly documented and represents an important attempt to manage Christian confessional division politically."},
    sourceStatus:"The treaty is directly documented and represents an important attempt to manage Christian confessional division politically.",
    sources:[{label:"Encyclopaedia Britannica — Peace of Augsburg",url:"https://www.britannica.com/event/Peace-of-Augsburg"}]
  },
  {
    year:1559, depth:18540, title:"Elizabethan religious settlement reestablishes Protestant Church of England", location:"England",
    story:"Elizabeth I restored royal supremacy and a Protestant religious settlement. Catholics later faced fines, restrictions and executions amid fears of rebellion, foreign invasion and plots.",
    context:"Confessional state / Catholic repression",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Confessional state / Catholic repression",Evidence:"The settlement is directly documented. Religious policy became increasingly entangled with national security and international conflict."},
    sourceStatus:"The settlement is directly documented. Religious policy became increasingly entangled with national security and international conflict.",
    sources:[{label:"Britannica — Elizabeth I",url:"https://www.britannica.com/biography/Elizabeth-I"}]
  },
  {
    year:1562, depth:18710, title:"French Wars of Religion begin", location:"France",
    story:"A massacre of Huguenot worshippers at Vassy helped ignite decades of civil war between Catholic and Protestant factions, intertwined with dynastic and political struggles.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Sectarian civil war",Evidence:"The wars and Vassy massacre are extensively documented; motives combined religion, politics, patronage and regional power."},
    sourceStatus:"The wars and Vassy massacre are extensively documented; motives combined religion, politics, patronage and regional power.",
    sources:[{label:"Encyclopaedia Britannica — Wars of Religion",url:"https://www.britannica.com/event/Wars-of-Religion"}]
  },
  {
    year:1567, depth:18880, title:"Dutch iconoclasm and repression deepen confessional conflict", location:"Low Countries",
    story:"Calvinist iconoclasts attacked Catholic images and churches during the Beeldenstorm. Habsburg repression that followed helped intensify revolt against Spanish rule.",
    context:"Iconoclasm / confessional conflict",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Iconoclasm / confessional conflict",Evidence:"The iconoclasm is extensively documented. Religious, political and economic grievances interacted."},
    sourceStatus:"The iconoclasm is extensively documented. Religious, political and economic grievances interacted.",
    sources:[{label:"Britannica — Netherlands revolt",url:"https://www.britannica.com/place/Netherlands/The-revolt-of-the-Netherlands"}]
  },
  {
    year:1568, depth:19050, title:"Dutch Revolt becomes intertwined with Catholic–Protestant conflict", location:"Low Countries",
    story:"Resistance to Habsburg rule developed into a long war in which Calvinist and Catholic identities became deeply entangled with political independence, repression and international rivalry.",
    context:"Confessional war / revolution",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Confessional war / revolution",Evidence:"The revolt is extensively documented. Religion was a major factor but not the sole cause."},
    sourceStatus:"The revolt is extensively documented. Religion was a major factor but not the sole cause.",
    sources:[{label:"Britannica — Eighty Years' War",url:"https://www.britannica.com/event/Eighty-Years-War"}]
  },
  {
    year:1572, depth:19220, title:"St. Bartholomew's Day massacre", location:"France",
    story:"Thousands of Huguenot Protestants were killed in Paris and other French cities after an attempted assassination and royal decision to eliminate Protestant leaders triggered broader mob violence.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Sectarian massacre",Evidence:"The massacre is extensively documented; total deaths remain debated, commonly estimated in the thousands."},
    sourceStatus:"The massacre is extensively documented; total deaths remain debated, commonly estimated in the thousands.",
    sources:[{label:"Encyclopaedia Britannica — St. Bartholomew's Day massacre",url:"https://www.britannica.com/event/Massacre-of-Saint-Bartholomews-Day"}]
  },
  {
    year:1597, depth:19390, title:"Twenty-Six Martyrs of Japan executed at Nagasaki", location:"Nagasaki, Japan",
    story:"Toyotomi Hideyoshi ordered the execution by crucifixion of 26 Catholics—missionaries and Japanese believers—amid growing suspicion of foreign missionary activity and European colonial expansion.",
    context:"Anti-Christian persecution",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Anti-Christian persecution",Evidence:"The executions are firmly documented. Japanese authorities connected missionary expansion with concerns about foreign political influence."},
    sourceStatus:"The executions are firmly documented. Japanese authorities connected missionary expansion with concerns about foreign political influence.",
    sources:[{label:"Britannica — Twenty-six Martyrs of Japan",url:"https://www.britannica.com/topic/Twenty-six-Martyrs-of-Japan"}]
  },
  {
    year:1598, depth:19560, title:"Edict of Nantes grants limited toleration to French Protestants", location:"France",
    story:"Henry IV granted Huguenots substantial civil and religious protections after decades of religious war. The settlement reduced confessional violence without creating modern religious equality.",
    context:"Religious toleration / peace settlement",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Religious toleration / peace settlement",Evidence:"The edict is directly documented and remained vulnerable to later royal restriction before its revocation in 1685."},
    sourceStatus:"The edict is directly documented and remained vulnerable to later royal restriction before its revocation in 1685.",
    sources:[{label:"Britannica — Edict of Nantes",url:"https://www.britannica.com/event/Edict-of-Nantes"}]
  },
  {
    year:1605, depth:19730, title:"Gunpowder Plot intensifies anti-Catholic restrictions", location:"London",
    story:"A group of English Catholics attempted to blow up Parliament and kill King James I. The failed plot reinforced suspicion of Catholics and was followed by harsher legal restrictions.",
    context:"Religious conspiracy / political violence",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Religious conspiracy / political violence",Evidence:"The plot is firmly documented. Responsibility belonged to the conspirators and should not be generalized to English Catholics as a whole."},
    sourceStatus:"The plot is firmly documented. Responsibility belonged to the conspirators and should not be generalized to English Catholics as a whole.",
    sources:[{label:"Britannica — Gunpowder Plot",url:"https://www.britannica.com/event/Gunpowder-Plot"}]
  },
  {
    year:1614, depth:19900, title:"Tokugawa shogunate bans Christianity in Japan", location:"Japan",
    story:"Tokugawa Ieyasu ordered missionaries expelled and Christianity prohibited. Churches were destroyed, believers pressured to renounce the faith, and subsequent governments used interrogation, torture and execution to eradicate public Christianity.",
    context:"State persecution / anti-Christian repression",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"State persecution / anti-Christian repression",Evidence:"Japanese records and missionary sources extensively document the prohibition and persecution. Christianity survived underground in some communities. Government cultural-heritage documentation describes the 1614 nationwide ban and later suppression."},
    sourceStatus:"Japanese records and missionary sources extensively document the prohibition and persecution. Christianity survived underground in some communities. Government cultural-heritage documentation describes the 1614 nationwide ban and later suppression.",
    sources:[{label:"Japan Agency for Cultural Affairs — Hidden Christian Sites",url:"https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/pdf/suisensho_02.pdf"}]
  },
  {
    year:1618, depth:20070, title:"Thirty Years' War begins", location:"Central Europe",
    story:"A revolt in Bohemia triggered a vast war involving Catholic and Protestant states and dynastic rivalries. Fighting, famine and disease devastated parts of Central Europe.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Religious and geopolitical war",Evidence:"The war is exceptionally well documented. Religion was crucial but cannot explain the conflict without dynastic and strategic politics."},
    sourceStatus:"The war is exceptionally well documented. Religion was crucial but cannot explain the conflict without dynastic and strategic politics.",
    sources:[{label:"Encyclopaedia Britannica — Thirty Years' War",url:"https://www.britannica.com/event/Thirty-Years-War"}]
  },
  {
    year:1618, depth:20240, title:"Defenestration of Prague triggers Bohemian revolt", location:"Prague",
    story:"Protestant nobles threw imperial officials from a castle window during a confrontation over religious rights, helping trigger the Bohemian Revolt and the Thirty Years' War.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Sectarian political revolt",Evidence:"The event is well documented and symbolically marks the outbreak of a conflict driven by both confessional and dynastic politics."},
    sourceStatus:"The event is well documented and symbolically marks the outbreak of a conflict driven by both confessional and dynastic politics.",
    sources:[{label:"Britannica — Defenestration of Prague",url:"https://www.britannica.com/event/Defenestration-of-Prague-1618"}]
  },
  {
    year:1620, depth:20410, title:"Pilgrims establish Plymouth Colony", location:"Plymouth, North America",
    story:"English Separatists founded Plymouth Colony seeking greater control over their religious community. Their settlement became part of the wider English colonization that profoundly disrupted Indigenous societies.",
    context:"Religious migration / colonization",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Religious migration / colonization",Evidence:"Religious freedom for the settlers coexisted with colonial expansion; later mythology often simplifies both their motives and Indigenous relations."},
    sourceStatus:"Religious freedom for the settlers coexisted with colonial expansion; later mythology often simplifies both their motives and Indigenous relations.",
    sources:[{label:"Britannica — Plymouth Colony",url:"https://www.britannica.com/place/Plymouth-colony"}]
  },
  {
    year:1630, depth:20580, title:"Puritan Great Migration reshapes New England", location:"New England",
    story:"Thousands of English Puritans migrated to New England and built colonies organized around Reformed Protestant institutions. Religious dissenters within those colonies could face punishment or expulsion.",
    context:"Religious migration / confessional colony",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Religious migration / confessional colony",Evidence:"Puritans sought freedom to establish their own religious order rather than modern universal religious liberty."},
    sourceStatus:"Puritans sought freedom to establish their own religious order rather than modern universal religious liberty.",
    sources:[{label:"Britannica — Puritanism",url:"https://www.britannica.com/topic/Puritanism"}]
  },
  {
    year:1631, depth:20750, title:"Sack of Protestant Magdeburg", location:"Magdeburg, Holy Roman Empire",
    story:"Imperial and Catholic League troops stormed the Protestant city of Magdeburg during the Thirty Years' War. Soldiers looted, killed civilians and burned much of the city; contemporary estimates placed the dead in the tens of thousands.",
    context:"Sectarian war / massacre",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Sectarian war / massacre",Evidence:"The sack is exceptionally well documented, including an account by Magdeburg mayor Otto von Guericke. German History in Documents and Images notes that perhaps two-thirds of roughly 30,000 inhabitants died through killing, fire, starvation or exposure."},
    sourceStatus:"The sack is exceptionally well documented, including an account by Magdeburg mayor Otto von Guericke. German History in Documents and Images notes that perhaps two-thirds of roughly 30,000 inhabitants died through killing, fire, starvation or exposure.",
    sources:[{label:"German History in Documents and Images — Sack of Magdeburg",url:"https://germanhistorydocs.org/en/from-the-reformations-to-the-thirty-years-war-1500-1648/a-local-apocalypse-the-sack-of-magdeburg-1631"}]
  },
  {
    year:1637, depth:20920, title:"Shimabara-Amakusa Rebellion and destruction of Christian rebels", location:"Kyushu, Japan",
    story:"More than twenty thousand rebels, many of them Christians, resisted the Tokugawa shogunate amid severe taxation, local grievances and religious repression. Government armies crushed the rebellion at Hara Castle and killed almost all remaining rebels.",
    context:"Rebellion / anti-Christian repression",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Rebellion / anti-Christian repression",Evidence:"Japan's Agency for Cultural Affairs describes the rebellion as involving more than twenty thousand people, most remaining Catholics, and states that almost all rebels were slaughtered after the siege. Economic and political grievances were also fundamental."},
    sourceStatus:"Japan's Agency for Cultural Affairs describes the rebellion as involving more than twenty thousand people, most remaining Catholics, and states that almost all rebels were slaughtered after the siege. Economic and political grievances were also fundamental.",
    sources:[{label:"Japan Agency for Cultural Affairs — Hidden Christian Sites",url:"https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/pdf/suisensho_02.pdf"}]
  },
  {
    year:1641, depth:21090, title:"Irish Rebellion and sectarian massacres", location:"Ireland",
    story:"The Irish rebellion triggered killings of Protestant settlers and a brutal cycle of warfare and reprisal involving Catholic Irish forces, Protestant settlers and armies from England and Scotland.",
    context:"Sectarian rebellion / massacre",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Sectarian rebellion / massacre",Evidence:"The violence is historical, but contemporary atrocity propaganda exaggerated some casualty claims and helped fuel subsequent retaliation."},
    sourceStatus:"The violence is historical, but contemporary atrocity propaganda exaggerated some casualty claims and helped fuel subsequent retaliation.",
    sources:[{label:"Britannica — Irish Rebellion",url:"https://www.britannica.com/event/Irish-Rebellion-1641"}]
  },
  {
    year:1648, depth:21260, title:"Peace of Westphalia ends the Thirty Years' War", location:"Europe",
    story:"The Westphalian settlements ended the Thirty Years' War and reshaped political and confessional arrangements in the Holy Roman Empire and Europe.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Peace settlement",Evidence:"The treaties are directly documented; claims that Westphalia single-handedly invented modern sovereignty are oversimplified."},
    sourceStatus:"The treaties are directly documented; claims that Westphalia single-handedly invented modern sovereignty are oversimplified.",
    sources:[{label:"Encyclopaedia Britannica — Peace of Westphalia",url:"https://www.britannica.com/event/Peace-of-Westphalia"}]
  },
  {
    year:1649, depth:21430, title:"Cromwellian conquest of Ireland and massacres at Drogheda and Wexford", location:"Ireland",
    story:"Oliver Cromwell's parliamentary army conquered much of Ireland. The storming of Drogheda and Wexford involved mass killing, while the wider conquest brought confiscation, displacement, famine and disease to a predominantly Catholic population.",
    context:"Conquest / sectarian political violence",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Conquest / sectarian political violence",Evidence:"The campaign is extensively documented. Historians debate terminology and intent, but the scale of devastation and confessional dimension are clear."},
    sourceStatus:"The campaign is extensively documented. Historians debate terminology and intent, but the scale of devastation and confessional dimension are clear.",
    sources:[{label:"Britannica — Oliver Cromwell",url:"https://www.britannica.com/biography/Oliver-Cromwell"}]
  },
  {
    year:1685, depth:21600, title:"Revocation of the Edict of Nantes", location:"France",
    story:"Louis XIV revoked protections previously granted to French Protestants. Protestant churches were closed, worship restricted and many Huguenots fled despite restrictions on emigration.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Religious persecution / state coercion",Evidence:"The revocation and persecution are extensively documented in royal law, diplomatic records and refugee histories."},
    sourceStatus:"The revocation and persecution are extensively documented in royal law, diplomatic records and refugee histories.",
    sources:[{label:"Encyclopaedia Britannica — Edict of Nantes",url:"https://www.britannica.com/event/Edict-of-Nantes"}]
  },
  {
    year:1685, depth:21770, title:"Dragonnades and Huguenot flight", location:"France",
    story:"Before and after the revocation of the Edict of Nantes, French authorities quartered soldiers in Protestant homes and used coercion to pressure Huguenots to convert. Large numbers fled France despite restrictions on emigration.",
    context:"Catholic state persecution / forced conversion",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Catholic state persecution / forced conversion",Evidence:"The dragonnades and refugee exodus are extensively documented."},
    sourceStatus:"The dragonnades and refugee exodus are extensively documented.",
    sources:[{label:"Britannica — Huguenot",url:"https://www.britannica.com/topic/Huguenot"}]
  },
  {
    year:1688, depth:21940, title:"Glorious Revolution reshapes Protestant–Catholic power in Britain", location:"England, Scotland and Ireland",
    story:"The removal of the Catholic James II and accession of Protestant William and Mary transformed the constitutional and religious settlement. Conflict extended into Ireland and Scotland and reinforced restrictions on Catholics.",
    context:"Confessional political revolution",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Confessional political revolution",Evidence:"The revolution is extensively documented. It combined constitutional, dynastic, geopolitical and religious causes."},
    sourceStatus:"The revolution is extensively documented. It combined constitutional, dynastic, geopolitical and religious causes.",
    sources:[{label:"Britannica — Glorious Revolution",url:"https://www.britannica.com/event/Glorious-Revolution"}]
  },
  {
    year:1692, depth:22110, title:"Salem witch trials", location:"Massachusetts Bay",
    story:"Colonial courts prosecuted people accused of witchcraft, executing 20 and imprisoning many others amid fear, local conflict and Puritan religious culture.",
    context:"Religious judicial persecution / social panic",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Religious judicial persecution / social panic",Evidence:"The trials are extensively documented. Historians emphasize multiple social and political causes rather than attributing them solely to theology."},
    sourceStatus:"The trials are extensively documented. Historians emphasize multiple social and political causes rather than attributing them solely to theology.",
    sources:[{label:"Britannica — Salem witch trials",url:"https://www.britannica.com/event/Salem-witch-trials"}]
  },
  {
    year:1707, depth:22280, title:"Suppression of Christianity intensifies under Tokugawa registration system", location:"Japan",
    story:"Tokugawa authorities maintained temple-registration and anti-Christian surveillance systems designed to prevent the reemergence of Christianity. Hidden Christian communities survived privately for generations.",
    context:"State religious repression",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"State religious repression",Evidence:"The suppression is well documented in Japanese administrative history and the later rediscovery of Hidden Christians."},
    sourceStatus:"The suppression is well documented in Japanese administrative history and the later rediscovery of Hidden Christians.",
    sources:[{label:"UNESCO — Hidden Christian Sites in Nagasaki",url:"https://whc.unesco.org/en/list/1495/"}]
  },
  {
    year:1740, depth:22450, title:"First Great Awakening transforms Protestant Christianity", location:"British North America",
    story:"Evangelical revivals associated with preachers such as George Whitefield reshaped Protestant life, encouraged new denominations and challenged established churches.",
    context:"Religious revival / social change",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Religious revival / social change",Evidence:"The movement was not primarily violent but is a major contextual milestone in the development of modern evangelical Christianity."},
    sourceStatus:"The movement was not primarily violent but is a major contextual milestone in the development of modern evangelical Christianity.",
    sources:[{label:"Britannica — Great Awakening",url:"https://www.britannica.com/event/Great-Awakening"}]
  },
  {
    year:1781, depth:22620, title:"Joseph II issues Patent of Toleration", location:"Habsburg Monarchy",
    story:"Emperor Joseph II granted limited religious toleration to Protestants and Orthodox Christians and subsequently relaxed some restrictions affecting Jews, reflecting Enlightenment-era changes in confessional government.",
    context:"Religious toleration / reform",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Religious toleration / reform",Evidence:"The reforms are directly documented, though full civic equality remained far away."},
    sourceStatus:"The reforms are directly documented, though full civic equality remained far away.",
    sources:[{label:"Britannica — Joseph II",url:"https://www.britannica.com/biography/Joseph-II"}]
  },
  {
    year:1789, depth:22790, title:"French Revolution nationalizes church property", location:"France",
    story:"The revolutionary state confiscated church property and reorganized relations between Catholic institutions and government, setting the stage for deeper conflict over clergy and revolutionary authority.",
    context:"Revolution / church-state conflict",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Revolution / church-state conflict",Evidence:"The measures are extensively documented and preceded the more radical de-Christianization campaigns of the Terror."},
    sourceStatus:"The measures are extensively documented and preceded the more radical de-Christianization campaigns of the Terror.",
    sources:[{label:"Britannica — French Revolution",url:"https://www.britannica.com/event/French-Revolution"}]
  },
  {
    year:1790, depth:22960, title:"Civil Constitution of the Clergy divides French Catholicism", location:"France",
    story:"The revolutionary government required clergy to accept a new state-controlled church structure. The oath split priests and believers and became a major fault line in revolutionary violence.",
    context:"Church-state coercion / revolutionary conflict",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Church-state coercion / revolutionary conflict",Evidence:"The constitutional church and refractory-clergy conflict are extensively documented."},
    sourceStatus:"The constitutional church and refractory-clergy conflict are extensively documented.",
    sources:[{label:"Britannica — Civil Constitution of the Clergy",url:"https://www.britannica.com/event/Civil-Constitution-of-the-Clergy"}]
  },
  {
    year:1791, depth:23130, title:"Haitian Revolution transforms Christianity and slavery in the Atlantic", location:"Saint-Domingue / Haiti",
    story:"Enslaved people launched the revolution that destroyed French colonial slavery and created Haiti. Catholicism, African religious traditions and revolutionary politics interacted in a conflict marked by mass violence on multiple sides.",
    context:"Revolution / slavery / religion",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Revolution / slavery / religion",Evidence:"The revolution is extensively documented. It was fundamentally an antislavery and anticolonial revolution rather than a Christian religious war."},
    sourceStatus:"The revolution is extensively documented. It was fundamentally an antislavery and anticolonial revolution rather than a Christian religious war.",
    sources:[{label:"Britannica — Haitian Revolution",url:"https://www.britannica.com/topic/Haitian-Revolution"}]
  },
  {
    year:1793, depth:23300, title:"De-Christianization during the French Revolution", location:"France",
    story:"During the radical phase of the French Revolution, churches were closed or repurposed, clergy were pressured to renounce their roles, religious symbols were destroyed and revolutionary cults promoted.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Anti-Christian state/revolutionary repression",Evidence:"The campaign is well documented, but policy and intensity varied regionally and among revolutionary factions."},
    sourceStatus:"The campaign is well documented, but policy and intensity varied regionally and among revolutionary factions.",
    sources:[{label:"Encyclopaedia Britannica — dechristianization",url:"https://www.britannica.com/event/French-Revolution"}]
  },
  {
    year:1793, depth:23470, title:"War in the Vendée combines Catholic resistance and counterrevolution", location:"Western France",
    story:"A mass uprising against the revolutionary government drew strength from opposition to conscription and defense of local Catholic religious life. Republican forces brutally suppressed the revolt.",
    context:"Civil war / anti-clerical conflict",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Civil war / anti-clerical conflict",Evidence:"The Vendée was a political, social and religious civil war. Historians debate how to characterize the scale and intent of Republican atrocities."},
    sourceStatus:"The Vendée was a political, social and religious civil war. Historians debate how to characterize the scale and intent of Republican atrocities.",
    sources:[{label:"Britannica — Wars of the Vendée",url:"https://www.britannica.com/event/Wars-of-the-Vendee"}]
  },
  {
    year:1794, depth:23640, title:"Reign of Terror executes clergy and religious opponents", location:"France",
    story:"During the radical French Revolution, refractory clergy and other perceived enemies of the revolutionary state were imprisoned, deported or executed amid a much broader political Terror.",
    context:"Revolutionary repression / anti-clerical violence",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Revolutionary repression / anti-clerical violence",Evidence:"The Terror is extensively documented. Clergy were one category among many political and social groups targeted."},
    sourceStatus:"The Terror is extensively documented. Clergy were one category among many political and social groups targeted.",
    sources:[{label:"Britannica — Reign of Terror",url:"https://www.britannica.com/event/Reign-of-Terror"}]
  },
  {
    year:1821, depth:23810, title:"Greek War of Independence brings Christian-Muslim communal violence", location:"Ottoman Greece",
    story:"The Greek revolt against Ottoman rule mobilized Orthodox Christian identity alongside nationalism. Massacres and reprisals targeted Muslim, Christian and Jewish civilians in different places during the war.",
    context:"National revolution / communal violence",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"National revolution / communal violence",Evidence:"The war is extensively documented. Religious identity overlapped with nationalism, imperial rule and local conflict; atrocities were committed by multiple sides."},
    sourceStatus:"The war is extensively documented. Religious identity overlapped with nationalism, imperial rule and local conflict; atrocities were committed by multiple sides.",
    sources:[{label:"Britannica — Greek Independence",url:"https://www.britannica.com/event/War-of-Greek-Independence"}]
  },
  {
    year:1830, depth:23980, title:"French conquest of Algeria transforms Christian-Muslim colonial relations", location:"Algeria",
    story:"France invaded Algeria and established a settler-colonial regime. Catholic institutions expanded under colonial protection while the Muslim majority experienced conquest, land loss and political subordination.",
    context:"Colonial conquest / religion and empire",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Colonial conquest / religion and empire",Evidence:"The conquest was imperial rather than a Christian holy war, but Christian institutions became entangled with colonial power."},
    sourceStatus:"The conquest was imperial rather than a Christian holy war, but Christian institutions became entangled with colonial power.",
    sources:[{label:"Britannica — Algeria French conquest",url:"https://www.britannica.com/place/Algeria/French-conquest"}]
  },
  {
    year:1844, depth:24150, title:"Edict of Toleration eases Ottoman penalties around conversion", location:"Ottoman Empire",
    story:"Under European diplomatic pressure and Tanzimat reforms, Ottoman policy moved toward greater formal protection for Christian subjects and away from capital punishment associated with apostasy, though equality remained incomplete.",
    context:"Religious reform / minority rights",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Religious reform / minority rights",Evidence:"Reforms developed through multiple decrees and diplomatic commitments; implementation varied across the empire."},
    sourceStatus:"Reforms developed through multiple decrees and diplomatic commitments; implementation varied across the empire.",
    sources:[{label:"Britannica — Tanzimat",url:"https://www.britannica.com/event/Tanzimat"}]
  },
  {
    year:1850, depth:24320, title:"Taiping movement creates heterodox Christian-inspired civil war", location:"China",
    story:"Hong Xiuquan's Taiping movement combined idiosyncratic interpretations of Christianity with Chinese religious and political ideas. The resulting civil war became one of the deadliest conflicts of the nineteenth century.",
    context:"Christian-inspired millenarian war",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Christian-inspired millenarian war",Evidence:"The Taiping movement used Christian concepts but differed radically from mainstream Christian churches. The war's causes were political, social and economic as well as religious."},
    sourceStatus:"The Taiping movement used Christian concepts but differed radically from mainstream Christian churches. The war's causes were political, social and economic as well as religious.",
    sources:[{label:"Britannica — Taiping Rebellion",url:"https://www.britannica.com/event/Taiping-Rebellion"}]
  },
  {
    year:1857, depth:24490, title:"Indian Rebellion includes attacks on missionaries and Christians", location:"North India",
    story:"During the uprising against East India Company rule, European missionaries and some Indian Christians were killed, while British reprisals devastated Indian communities. Christian missionary expansion was sometimes associated with colonial interference.",
    context:"Colonial rebellion / religious tension",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Colonial rebellion / religious tension",Evidence:"The rebellion had military, political, economic and religious causes. It should not be reduced to Hindu-Muslim violence against Christianity."},
    sourceStatus:"The rebellion had military, political, economic and religious causes. It should not be reduced to Hindu-Muslim violence against Christianity.",
    sources:[{label:"Britannica — Indian Mutiny",url:"https://www.britannica.com/event/Indian-Mutiny"}]
  },
  {
    year:1860, depth:24660, title:"Damascus massacres target Christians", location:"Damascus and Mount Lebanon",
    story:"Sectarian conflict in Mount Lebanon spread to Damascus, where thousands of Christians were killed and churches destroyed. Muslim notable Abd al-Qadir and others protected many Christians during the violence.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Sectarian massacre / rescue",Evidence:"The massacres are extensively documented by Ottoman, European and local sources; casualty estimates vary."},
    sourceStatus:"The massacres are extensively documented by Ottoman, European and local sources; casualty estimates vary.",
    sources:[{label:"Britannica — Lebanon history",url:"https://www.britannica.com/place/Lebanon"}]
  },
  {
    year:1864, depth:24830, title:"Taiping Rebellion ends after catastrophic civil war", location:"China",
    story:"Qing forces captured Nanjing, ending the Taiping Heavenly Kingdom. The Christian-inspired movement and the war had caused immense destruction and deaths from combat, famine and disease.",
    context:"Christian-inspired movement / civil war",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Christian-inspired movement / civil war",Evidence:"Death estimates vary widely into the tens of millions. Taiping theology was highly heterodox and cannot be treated as representative Christianity."},
    sourceStatus:"Death estimates vary widely into the tens of millions. Taiping theology was highly heterodox and cannot be treated as representative Christianity.",
    sources:[{label:"Britannica — Taiping Rebellion",url:"https://www.britannica.com/event/Taiping-Rebellion"}]
  },
  {
    year:1870, depth:25000, title:"Papal States fall as Italian unification reaches Rome", location:"Rome",
    story:"Italian forces captured Rome and ended the temporal rule of the popes over the Papal States. The event transformed the Catholic Church's relationship to modern nationalism and secular state power.",
    context:"Church-state conflict / political transformation",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Church-state conflict / political transformation",Evidence:"The capture is firmly documented and was largely political rather than an anti-Christian persecution."},
    sourceStatus:"The capture is firmly documented and was largely political rather than an anti-Christian persecution.",
    sources:[{label:"Britannica — Capture of Rome",url:"https://www.britannica.com/place/Italy/Unification"}]
  },
  {
    year:1871, depth:25170, title:"Kulturkampf begins in the German Empire", location:"German Empire",
    story:"Bismarck's government imposed measures restricting Catholic institutions, education and clergy during the Kulturkampf, fearing political Catholicism and papal influence in the newly unified empire.",
    context:"Church-state conflict / legal repression",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Church-state conflict / legal repression",Evidence:"The Kulturkampf is extensively documented. It was a political campaign against Catholic institutional influence, not an attempt to eliminate Christianity."},
    sourceStatus:"The Kulturkampf is extensively documented. It was a political campaign against Catholic institutional influence, not an attempt to eliminate Christianity.",
    sources:[{label:"Britannica — Kulturkampf",url:"https://www.britannica.com/event/Kulturkampf"}]
  },
  {
    year:1876, depth:25340, title:"Bulgarian April Uprising and Ottoman massacres", location:"Ottoman Bulgaria",
    story:"Ottoman forces and irregulars crushed the Bulgarian April Uprising. Mass killing of predominantly Orthodox Christian civilians, especially at Batak, caused international outrage and became a major European political issue.",
    context:"Massacre / imperial repression",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Massacre / imperial repression",Evidence:"The suppression and large civilian death toll are well documented, although contemporary reports and later nationalist narratives differ on exact numbers."},
    sourceStatus:"The suppression and large civilian death toll are well documented, although contemporary reports and later nationalist narratives differ on exact numbers.",
    sources:[{label:"Britannica — April Uprising",url:"https://www.britannica.com/event/April-Uprising"}]
  },
  {
    year:1876, depth:25510, title:"Bulgarian massacres provoke Christian humanitarian outrage in Europe", location:"Ottoman Bulgaria",
    story:"Reports of atrocities against Bulgarian Orthodox civilians during suppression of the April Uprising generated intense humanitarian and political campaigning in Europe.",
    context:"Massacre / humanitarian politics",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Massacre / humanitarian politics",Evidence:"The killings are historical; contemporary atrocity reporting sometimes contained disputed numerical claims, but mass civilian violence is well established."},
    sourceStatus:"The killings are historical; contemporary atrocity reporting sometimes contained disputed numerical claims, but mass civilian violence is well established.",
    sources:[{label:"Britannica — April Uprising",url:"https://www.britannica.com/event/April-Uprising"}]
  },
  {
    year:1881, depth:25680, title:"Russian pogrom wave unfolds in predominantly Christian empire", location:"Russian Empire",
    story:"Following the assassination of Alexander II, pogroms struck Jewish communities across parts of the Russian Empire. Religious anti-Judaism mixed with economic resentment, rumor, nationalism and modern antisemitism.",
    context:"Pogrom / Jewish-Christian historical overlap",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Pogrom / Jewish-Christian historical overlap",Evidence:"The pogroms are extensively documented. Responsibility belongs to perpetrators, local authorities and political conditions rather than Orthodox Christians collectively."},
    sourceStatus:"The pogroms are extensively documented. Responsibility belongs to perpetrators, local authorities and political conditions rather than Orthodox Christians collectively.",
    sources:[{label:"USHMM — Antisemitism",url:"https://encyclopedia.ushmm.org/content/en/article/antisemitism"}]
  },
  {
    year:1885, depth:25850, title:"Mahdist capture of Khartoum changes Christian mission presence in Sudan", location:"Sudan",
    story:"Mahdist forces captured Khartoum and overthrew the Turco-Egyptian regime. Christian missionaries were expelled or restricted during the Mahdist state, within a wider anti-imperial and Islamic revolutionary movement.",
    context:"Religious-political revolution / mission suppression",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Religious-political revolution / mission suppression",Evidence:"The Mahdist revolt was primarily a political and religious movement against foreign-backed rule; Christian missions were one part of the wider conflict."},
    sourceStatus:"The Mahdist revolt was primarily a political and religious movement against foreign-backed rule; Christian missions were one part of the wider conflict.",
    sources:[{label:"Britannica — Mahdist state",url:"https://www.britannica.com/place/Sudan/The-Mahdiyah"}]
  },
  {
    year:1894, depth:26020, title:"Hamidian massacres devastate Armenian Christian communities", location:"Ottoman Empire",
    story:"Mass killings of Armenians occurred across the Ottoman Empire during the reign of Sultan Abdülhamid II. The violence killed large numbers and foreshadowed later destruction of Ottoman Armenian communities.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Massacre / anti-Armenian persecution",Evidence:"The massacres are extensively documented by diplomatic, missionary, Ottoman and Armenian sources; estimates vary."},
    sourceStatus:"The massacres are extensively documented by diplomatic, missionary, Ottoman and Armenian sources; estimates vary.",
    sources:[{label:"Britannica — Hamidian massacres",url:"https://www.britannica.com/topic/Hamidian-massacres"}]
  },
  {
    year:1895, depth:26190, title:"Anti-Armenian massacres spread across Ottoman provinces", location:"Ottoman Empire",
    story:"The Hamidian massacres expanded across Anatolia, killing large numbers of Armenians and devastating Christian communities amid political crisis and Armenian reform demands.",
    context:"Massacre / anti-Christian and ethnic persecution",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Massacre / anti-Christian and ethnic persecution",Evidence:"The massacres are extensively documented. Armenian Christian identity, ethnicity and imperial politics were intertwined."},
    sourceStatus:"The massacres are extensively documented. Armenian Christian identity, ethnicity and imperial politics were intertwined.",
    sources:[{label:"Britannica — Armenian massacres",url:"https://www.britannica.com/topic/Armenian-massacres"}]
  },
  {
    year:1899, depth:26360, title:"Boxer movement turns against Chinese Christians", location:"Northern China",
    story:"Before the siege of foreign legations in 1900, Boxer groups increasingly targeted Chinese converts to Christianity as agents of foreign influence, destroying churches and killing believers.",
    context:"Anti-Christian violence / anti-foreign uprising",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Anti-Christian violence / anti-foreign uprising",Evidence:"The violence is well documented. Christian missionary ties to imperial powers complicated local perceptions and helped make converts targets."},
    sourceStatus:"The violence is well documented. Christian missionary ties to imperial powers complicated local perceptions and helped make converts targets.",
    sources:[{label:"Britannica — Boxer Rebellion",url:"https://www.britannica.com/event/Boxer-Rebellion"}]
  },
  {
    year:1899, depth:26530, title:"Philippine-American War affects Catholic communities", location:"Philippines",
    story:"War between Filipino independence forces and the United States unfolded in a predominantly Catholic society emerging from Spanish colonial rule. Church property, clergy and political influence became contested within a broader colonial war.",
    context:"Colonial war / church-state transition",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Colonial war / church-state transition",Evidence:"The war was primarily about sovereignty and empire rather than theology, but it transformed the political position of the Catholic Church in the Philippines."},
    sourceStatus:"The war was primarily about sovereignty and empire rather than theology, but it transformed the political position of the Catholic Church in the Philippines.",
    sources:[{label:"Britannica — Philippine-American War",url:"https://www.britannica.com/event/Philippine-American-War"}]
  },
  {
    year:1900, depth:26700, title:"Boxer Rebellion killings of Chinese Christians and missionaries", location:"Northern China",
    story:"Boxer fighters and some Qing officials attacked Chinese Christians and foreign missionaries during the anti-foreign uprising. Catholic, Protestant and Orthodox communities suffered killings, while the subsequent foreign intervention inflicted major violence on Chinese civilians.",
    context:"Anti-Christian violence / rebellion / imperial intervention",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Anti-Christian violence / rebellion / imperial intervention",Evidence:"The killing of Christians is extensively documented, but early missionary accounts can be polemical and casualty estimates vary. A contemporary 1900 volume is preserved by the Library of Congress."},
    sourceStatus:"The killing of Christians is extensively documented, but early missionary accounts can be polemical and casualty estimates vary. A contemporary 1900 volume is preserved by the Library of Congress.",
    sources:[{label:"Library of Congress — Boxer Rebellion contemporary volume",url:"https://www.loc.gov/item/01030713/"}]
  },
  {
    year:1909, depth:26870, title:"Adana massacres", location:"Adana region, Ottoman Empire",
    story:"Violence in and around Adana killed large numbers of Armenians, most of them Christians, amid political instability following the Young Turk Revolution.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Massacre / communal violence",Evidence:"The massacres are extensively documented; casualty estimates commonly reach into the tens of thousands but remain debated."},
    sourceStatus:"The massacres are extensively documented; casualty estimates commonly reach into the tens of thousands but remain debated.",
    sources:[{label:"Britannica — Adana",url:"https://www.britannica.com/place/Adana-Turkey"}]
  },
  {
    year:1910, depth:27040, title:"World Missionary Conference signals modern ecumenical movement", location:"Edinburgh",
    story:"Protestant missionary leaders met in Edinburgh to discuss cooperation across denominations. Although not a conflict event, the conference became an important precursor to the modern ecumenical movement after centuries of Christian division.",
    context:"Ecumenism / institutional change",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Ecumenism / institutional change",Evidence:"The conference is extensively documented. Participation was largely Protestant and western, limiting its representativeness."},
    sourceStatus:"The conference is extensively documented. Participation was largely Protestant and western, limiting its representativeness.",
    sources:[{label:"Britannica — ecumenism",url:"https://www.britannica.com/topic/ecumenism"}]
  },
  {
    year:1914, depth:27210, title:"World War I mobilizes Christian nations against one another", location:"Europe and global theaters",
    story:"Predominantly Christian empires and nations entered a catastrophic industrial war. Churches often supported their own states, while Christian pacifists and dissenters challenged wartime nationalism.",
    context:"Interstate war / Christianity and nationalism",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Interstate war / Christianity and nationalism",Evidence:"World War I was not a religious war, but it exposed the power of nationalism over transnational Christian identity."},
    sourceStatus:"World War I was not a religious war, but it exposed the power of nationalism over transnational Christian identity.",
    sources:[{label:"Britannica — World War I",url:"https://www.britannica.com/event/World-War-I"}]
  },
  {
    year:1915, depth:27380, title:"Armenian genocide and destruction of ancient Christian communities", location:"Ottoman Empire",
    story:"Ottoman authorities deported and killed Armenians on a massive scale during World War I. Assyrian/Syriac and other Christian communities also suffered mass killing and displacement in overlapping campaigns.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Genocide / mass persecution",Evidence:"The Armenian genocide is recognized by a broad scholarly consensus. Ottoman/Turkish state narratives have disputed the genocide designation."},
    sourceStatus:"The Armenian genocide is recognized by a broad scholarly consensus. Ottoman/Turkish state narratives have disputed the genocide designation.",
    sources:[{label:"United States Holocaust Memorial Museum — Armenian genocide",url:"https://encyclopedia.ushmm.org/content/en/article/the-armenian-genocide-1915-16-overview"}]
  },
  {
    year:1915, depth:27550, title:"Assyrian genocide / Sayfo", location:"Ottoman Empire and Persia",
    story:"Assyrian and Syriac Christian communities suffered mass killing, deportation and displacement during World War I, particularly in southeastern Anatolia and adjacent regions.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Genocide / mass persecution",Evidence:"The mass atrocities are well documented; terminology and estimates vary across scholarship and national narratives."},
    sourceStatus:"The mass atrocities are well documented; terminology and estimates vary across scholarship and national narratives.",
    sources:[{label:"Britannica — Assyrian",url:"https://www.britannica.com/topic/Assyrian"}]
  },
  {
    year:1917, depth:27720, title:"Russian Revolution begins decades of Soviet anti-religious repression", location:"Russian Empire / Soviet Union",
    story:"The Bolshevik revolution was followed by state campaigns against organized religion. Churches were confiscated or destroyed, clergy and believers were arrested or executed, and religious education was heavily restricted.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"State persecution / anti-religious repression",Evidence:"Soviet anti-religious policies are extensively documented; intensity varied dramatically across periods and republics."},
    sourceStatus:"Soviet anti-religious policies are extensively documented; intensity varied dramatically across periods and republics.",
    sources:[{label:"Encyclopaedia Britannica — Russian Orthodox Church",url:"https://www.britannica.com/topic/Russian-Orthodox-church"}]
  },
  {
    year:1917, depth:27890, title:"Bolshevik government begins confiscation and restriction of church property", location:"Russia",
    story:"After the Russian Revolution, the Bolshevik state separated church and state, confiscated property and increasingly targeted clergy and religious institutions. The Russian Orthodox Church became a major focus of repression.",
    context:"Communist anti-religious repression",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Communist anti-religious repression",Evidence:"Soviet religious repression is extensively documented. Intensity changed over time and affected Orthodox, Catholic, Protestant, Jewish, Muslim and other religious communities."},
    sourceStatus:"Soviet religious repression is extensively documented. Intensity changed over time and affected Orthodox, Catholic, Protestant, Jewish, Muslim and other religious communities.",
    sources:[{label:"Britannica — Russian Orthodox Church",url:"https://www.britannica.com/topic/Russian-Orthodox-Church"}]
  },
  {
    year:1917, depth:28060, title:"Balfour Declaration creates new Christian-Jewish political intersection", location:"United Kingdom / Palestine",
    story:"The British government declared support for a national home for the Jewish people in Palestine. Christian political ideas, imperial strategy and Zionism intersected in British policy, with major consequences for Jews, Palestinian Arabs and local Christian communities.",
    context:"Christian political context / Jewish-Christian overlap",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Christian political context / Jewish-Christian overlap",Evidence:"The declaration is a primary historical document. Historians debate the relative influence of strategic, imperial, humanitarian, antisemitic and Christian Zionist ideas on British policymakers."},
    sourceStatus:"The declaration is a primary historical document. Historians debate the relative influence of strategic, imperial, humanitarian, antisemitic and Christian Zionist ideas on British policymakers.",
    sources:[{label:"UK National Archives — Balfour Declaration",url:"https://www.nationalarchives.gov.uk/education/resources/balfour-declaration/"}]
  },
  {
    year:1922, depth:28230, title:"Destruction and flight of Greek Orthodox communities in Asia Minor", location:"Anatolia and Smyrna",
    story:"The Greco-Turkish War culminated in catastrophic population displacement and the burning of Smyrna. Greek Orthodox and Armenian Christian populations were killed or expelled amid the collapse of centuries-old communities.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"War / massacre / forced displacement",Evidence:"The destruction and population exchange are extensively documented; responsibility for particular fires and atrocities remains contested in some accounts."},
    sourceStatus:"The destruction and population exchange are extensively documented; responsibility for particular fires and atrocities remains contested in some accounts.",
    sources:[{label:"Britannica — Greco-Turkish wars",url:"https://www.britannica.com/event/Greco-Turkish-wars"}]
  },
  {
    year:1922, depth:28400, title:"Soviet campaign seizes church valuables", location:"Soviet Russia",
    story:"The Soviet government confiscated church valuables during famine relief campaigns. Resistance led to arrests, trials and executions of clergy and believers, deepening the confrontation between the communist state and religious institutions.",
    context:"Communist repression / church-state conflict",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Communist repression / church-state conflict",Evidence:"The confiscation campaign and trials are well documented. Famine relief, political control and anti-religious ideology all shaped policy."},
    sourceStatus:"The confiscation campaign and trials are well documented. Famine relief, political control and anti-religious ideology all shaped policy.",
    sources:[{label:"Britannica — Russian Orthodox Church",url:"https://www.britannica.com/topic/Russian-Orthodox-Church"}]
  },
  {
    year:1926, depth:28570, title:"Cristero War begins in Mexico", location:"Mexico",
    story:"Armed Catholic rebels fought the Mexican government after enforcement of anticlerical provisions sharply restricted church activity. Both government forces and rebels committed abuses during the conflict.",
    context:"Church-state war / anticlerical repression",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Church-state war / anticlerical repression",Evidence:"The war is extensively documented. It combined religious freedom, political authority, land and regional grievances."},
    sourceStatus:"The war is extensively documented. It combined religious freedom, political authority, land and regional grievances.",
    sources:[{label:"Britannica — Cristero Rebellion",url:"https://www.britannica.com/event/Cristero-Rebellion"}]
  },
  {
    year:1927, depth:28740, title:"Soviet League of Militant Atheists expands anti-religious campaign", location:"Soviet Union",
    story:"The Soviet state intensified organized atheist propaganda and campaigns against churches, clergy and religious practice. The late 1920s and 1930s brought closures, arrests and destruction of religious institutions.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"State anti-religious persecution",Evidence:"Soviet policy and repression are extensively documented in state and church archives."},
    sourceStatus:"Soviet policy and repression are extensively documented in state and church archives.",
    sources:[{label:"Britannica — Soviet Union religion",url:"https://www.britannica.com/place/Soviet-Union"}]
  },
  {
    year:1929, depth:28910, title:"Lateran Treaty creates Vatican City", location:"Rome / Vatican City",
    story:"The Holy See and Fascist Italy settled the Roman Question, creating Vatican City as a sovereign state and regulating Catholic Church relations with Italy.",
    context:"Church-state settlement",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Church-state settlement",Evidence:"The treaty is directly documented. Its relationship to the Fascist regime remains important to understanding interwar Catholic political history."},
    sourceStatus:"The treaty is directly documented. Its relationship to the Fascist regime remains important to understanding interwar Catholic political history.",
    sources:[{label:"Britannica — Lateran Treaty",url:"https://www.britannica.com/event/Lateran-Treaty"}]
  },
  {
    year:1931, depth:29080, title:"Soviet destruction of Cathedral of Christ the Saviour", location:"Moscow",
    story:"Soviet authorities demolished Moscow's Cathedral of Christ the Saviour during Stalin's anti-religious campaign, intending the site for the Palace of the Soviets.",
    context:"State atheism / destruction of religious heritage",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"State atheism / destruction of religious heritage",Evidence:"The demolition is directly documented and became a prominent symbol of Soviet anti-religious policy."},
    sourceStatus:"The demolition is directly documented and became a prominent symbol of Soviet anti-religious policy.",
    sources:[{label:"Britannica — Cathedral of Christ the Saviour",url:"https://www.britannica.com/topic/Cathedral-of-Christ-the-Saviour"}]
  },
  {
    year:1933, depth:29250, title:"Simele massacre of Assyrian Christians", location:"Northern Iraq",
    story:"Iraqi army units and allied tribal forces killed Assyrians in Simele and surrounding villages after tensions over citizenship, arms and the position of the Assyrian minority in the new Iraqi state.",
    context:"Massacre / minority persecution",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Massacre / minority persecution",Evidence:"The massacre is historical; casualty estimates vary substantially between British contemporary estimates and Assyrian accounts. Religious identity intersected with ethnicity, state-building and post-Ottoman politics."},
    sourceStatus:"The massacre is historical; casualty estimates vary substantially between British contemporary estimates and Assyrian accounts. Religious identity intersected with ethnicity, state-building and post-Ottoman politics.",
    sources:[{label:"Britannica — Assyrians",url:"https://www.britannica.com/topic/Assyrian"}]
  },
  {
    year:1933, depth:29420, title:"German churches confront accommodation and resistance under Nazism", location:"Germany",
    story:"After the Nazi seizure of power, most Protestant and Catholic church leaders sought accommodation or institutional self-protection. The pro-Nazi German Christian movement embraced racial nationalism, while the Confessing Church resisted state interference in parts of Protestant life. Public institutional opposition to the persecution of Jews remained extremely limited.",
    context:"Churches / Nazism / antisemitism",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Churches / Nazism / antisemitism",Evidence:"USHMM documents both conflict between churches and the Nazi state and the broader failure of church leadership to publicly oppose antisemitic persecution, alongside individual Christian rescuers and dissenters."},
    sourceStatus:"USHMM documents widespread accommodation and silence alongside a minority of Christian dissenters and rescuers. Church behavior varied, but most German church leaders did not publicly oppose the regime's persecution of Jews.",
    sources:[{label:"USHMM — German Churches and Nazi State",url:"https://encyclopedia.ushmm.org/content/en/article/the-german-churches-and-the-nazi-state"}]
  },
  {
    year:1933, depth:29590, title:"Reich Concordat formalizes Vatican relations with Nazi Germany", location:"Germany / Vatican",
    story:"The Holy See and Nazi Germany signed a concordat guaranteeing certain church rights while regulating Catholic institutional life. The Nazi regime repeatedly violated the agreement.",
    context:"Church-state diplomacy / Nazism",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Church-state diplomacy / Nazism",Evidence:"The concordat is a primary document. Historians debate its political effects, but signing it did not constitute Catholic endorsement of Nazi racial ideology."},
    sourceStatus:"The concordat is a primary document. Historians debate its political effects, but signing it did not constitute Catholic endorsement of Nazi racial ideology.",
    sources:[{label:"USHMM — German Churches and Nazi State",url:"https://encyclopedia.ushmm.org/content/en/article/the-german-churches-and-the-nazi-state"}]
  },
  {
    year:1934, depth:29760, title:"Barmen Declaration challenges Nazi control of Protestant churches", location:"Barmen, Germany",
    story:"Confessing Church leaders issued the Barmen Theological Declaration rejecting state domination of the church and theological distortions associated with the pro-Nazi German Christian movement.",
    context:"Church resistance / theological declaration",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Church resistance / theological declaration",Evidence:"Barmen was important resistance to Nazi interference in church doctrine, but it did not constitute a broad church condemnation of Nazi antisemitism or persecution of Jews."},
    sourceStatus:"Barmen was important resistance to Nazi interference in church doctrine, but it did not constitute a broad church condemnation of Nazi antisemitism or persecution of Jews.",
    sources:[{label:"Britannica — Confessing Church",url:"https://www.britannica.com/topic/Confessing-Church"}]
  },
  {
    year:1936, depth:29930, title:"Spanish Civil War includes mass anti-clerical and religious violence", location:"Spain",
    story:"During the Spanish Civil War, thousands of Catholic clergy and religious personnel were killed in Republican-held areas, while Nationalist forces carried out mass repression and later aligned the regime closely with Catholic institutions.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Civil war / anti-clerical violence / political repression",Evidence:"The killings are extensively documented. The wider war involved atrocities by multiple political factions and cannot be described solely as religious persecution."},
    sourceStatus:"The killings are extensively documented. The wider war involved atrocities by multiple political factions and cannot be described solely as religious persecution.",
    sources:[{label:"Encyclopaedia Britannica — Spanish Civil War",url:"https://www.britannica.com/event/Spanish-Civil-War"}]
  },
  {
    year:1937, depth:30100, title:"Mit brennender Sorge condemns Nazi violations affecting the Catholic Church", location:"Germany",
    story:"Pope Pius XI's encyclical, secretly distributed and read from German pulpits, condemned breaches of the concordat and aspects of Nazi racial and state ideology. Nazi authorities retaliated against church institutions.",
    context:"Church-state resistance / Nazism",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Church-state resistance / Nazism",Evidence:"The encyclical is a primary source. It challenged Nazi ideology and church repression but was not a comprehensive public condemnation of the persecution of Jews."},
    sourceStatus:"The encyclical is a primary source. It challenged Nazi ideology and church repression but was not a comprehensive public condemnation of the persecution of Jews.",
    sources:[{label:"USHMM — German Churches and Nazi State",url:"https://encyclopedia.ushmm.org/content/en/article/the-german-churches-and-the-nazi-state"}]
  },
  {
    year:1939, depth:30270, title:"Nazi persecution of churches and Christian opponents during World War II", location:"Europe",
    story:"Nazi policy toward Christianity varied, but the regime imprisoned clergy, suppressed church organizations and murdered Christian opponents, especially in occupied Poland and within resistance networks. Some Christians and churches also collaborated with or accommodated the regime.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Totalitarian repression / church-state conflict",Evidence:"Persecution of particular clergy and institutions is well documented; Christianity as a whole was not targeted for extermination in the manner of Jews and Roma."},
    sourceStatus:"Persecution of particular clergy and institutions is well documented; Christianity as a whole was not targeted for extermination in the manner of Jews and Roma.",
    sources:[{label:"USHMM — German churches and Nazi state",url:"https://encyclopedia.ushmm.org/content/en/article/the-german-churches-and-the-nazi-state"}]
  },
  {
    year:1941, depth:30440, title:"Nazi invasion changes Soviet policy toward churches", location:"Soviet Union",
    story:"Germany's invasion devastated religious communities along with the wider population. Stalin later relaxed some restrictions on the Russian Orthodox Church to mobilize patriotism, while Nazi occupation policies varied and included persecution and mass murder.",
    context:"World war / church-state shift",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"World war / church-state shift",Evidence:"The wartime revival of limited Orthodox institutional activity is well documented. Nazi racial occupation policy, not religious liberation, defined the broader context."},
    sourceStatus:"The wartime revival of limited Orthodox institutional activity is well documented. Nazi racial occupation policy, not religious liberation, defined the broader context.",
    sources:[{label:"Britannica — Russian Orthodox Church",url:"https://www.britannica.com/topic/Russian-Orthodox-Church"}]
  },
  {
    year:1942, depth:30610, title:"Christian rescuers and church networks aid Jews during the Holocaust", location:"Occupied Europe",
    story:"Individual priests, pastors, nuns, lay Christians and some church-linked networks hid Jews, provided false documents and assisted escape. Their actions existed alongside widespread Christian passivity, accommodation and collaboration across occupied Europe.",
    context:"Rescue / Holocaust / Jewish-Christian history",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Rescue / Holocaust / Jewish-Christian history",Evidence:"Rescue efforts are documented case by case. They should neither erase institutional failures nor be generalized to entire denominations or national churches."},
    sourceStatus:"Rescue efforts are documented case by case. They should neither erase institutional failures nor be generalized to entire denominations or national churches.",
    sources:[{label:"USHMM — clergy and church leaders",url:"https://encyclopedia.ushmm.org/content/en/article/the-role-of-clergy-and-church-leaders"}]
  },
  {
    year:1942, depth:30780, title:"Dutch churches publicly protest deportation of Jews", location:"Netherlands",
    story:"Catholic and Protestant church leaders publicly condemned deportations of Jews. Nazi authorities retaliated after the Catholic protest by deporting certain baptized Jews, including Edith Stein.",
    context:"Christian resistance / Holocaust / Jewish-Christian overlap",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Christian resistance / Holocaust / Jewish-Christian overlap",Evidence:"The protests and retaliation are well documented. They represent significant institutional protest but did not halt the deportation process."},
    sourceStatus:"The protests and retaliation are well documented. They represent significant institutional protest but did not halt the deportation process.",
    sources:[{label:"USHMM — Netherlands Holocaust",url:"https://encyclopedia.ushmm.org/content/en/article/the-netherlands"}]
  },
  {
    year:1943, depth:30950, title:"Bulgarian Orthodox leaders oppose deportation of Bulgarian Jews", location:"Bulgaria",
    story:"Orthodox clergy, politicians and civic figures protested plans to deport Jews from Bulgaria's prewar territory, contributing to the cancellation of deportations there. Jews from occupied Thrace and Macedonia were nevertheless deported and murdered.",
    context:"Christian intervention / Holocaust / Jewish-Christian overlap",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Christian intervention / Holocaust / Jewish-Christian overlap",Evidence:"The rescue of most Jews in Bulgaria's prewar borders and the deportation of Jews from Bulgarian-occupied territories must be presented together."},
    sourceStatus:"The rescue of most Jews in Bulgaria's prewar borders and the deportation of Jews from Bulgarian-occupied territories must be presented together.",
    sources:[{label:"USHMM — Bulgaria",url:"https://encyclopedia.ushmm.org/content/en/article/bulgaria"}]
  },
  {
    year:1945, depth:31120, title:"Ustaša persecution and Jasenovac camp end with World War II", location:"Independent State of Croatia",
    story:"The Ustaša regime, which identified strongly with Croatian nationalism and Catholic cultural identity, murdered Serbs, Jews, Roma and political opponents. Some clergy participated while other Catholics opposed or rescued victims; the church's institutional role remains historically contested.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Genocide / fascist persecution / Christian institutional controversy",Evidence:"Ustaša mass murder is firmly documented. Responsibility should be attributed to the fascist state and individual collaborators, not Catholics collectively."},
    sourceStatus:"Ustaša mass murder is firmly documented. Responsibility should be attributed to the fascist state and individual collaborators, not Catholics collectively.",
    sources:[{label:"USHMM — Jasenovac",url:"https://encyclopedia.ushmm.org/content/en/article/jasenovac"}]
  },
  {
    year:1945, depth:31290, title:"Dietrich Bonhoeffer executed by Nazi regime", location:"Flossenbürg, Germany",
    story:"German Lutheran pastor and theologian Dietrich Bonhoeffer was executed for involvement in resistance circles connected to plots against Hitler.",
    context:"Christian resistance / political execution",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Christian resistance / political execution",Evidence:"Bonhoeffer opposed Nazi control of the church and became involved in political resistance. His record regarding Jews developed over time and should not be simplified into later heroic mythology."},
    sourceStatus:"Bonhoeffer opposed Nazi control of the church and became involved in political resistance. His record regarding Jews developed over time and should not be simplified into later heroic mythology.",
    sources:[{label:"Britannica — Dietrich Bonhoeffer",url:"https://www.britannica.com/biography/Dietrich-Bonhoeffer"}]
  },
  {
    year:1947, depth:31460, title:"Seelisberg conference confronts Christian antisemitism after Holocaust", location:"Seelisberg, Switzerland",
    story:"Jewish and Christian participants met to address antisemitism and Christian teaching after the Holocaust. The resulting Ten Points urged churches to reject collective Jewish guilt for Jesus's death and rethink hostile portrayals of Judaism.",
    context:"Jewish-Christian reconciliation / post-Holocaust reform",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Jewish-Christian reconciliation / post-Holocaust reform",Evidence:"The conference was an early milestone in postwar Christian reassessment, preceding later official church declarations."},
    sourceStatus:"The conference was an early milestone in postwar Christian reassessment, preceding later official church declarations.",
    sources:[{label:"USHMM — Jewish-Christian relationship",url:"https://www.ushmm.org/research/about-the-mandel-center/initiatives/religion-holocaust/resources/jews-and-christians-the-unfolding-interfaith-relationship"}]
  },
  {
    year:1948, depth:31630, title:"Communist regimes intensify church repression in Eastern Europe", location:"Eastern Europe",
    story:"Postwar communist governments brought churches under state control, confiscated property, restricted religious education and imprisoned clergy. Policies differed among countries and changed over time.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"State persecution / communist repression",Evidence:"Government records and church archives extensively document repression; severity varied substantially by state and period."},
    sourceStatus:"Government records and church archives extensively document repression; severity varied substantially by state and period.",
    sources:[{label:"Encyclopaedia Britannica — Christianity",url:"https://www.britannica.com/topic/Christianity"}]
  },
  {
    year:1948, depth:31800, title:"World Council of Churches founded", location:"Amsterdam",
    story:"Protestant and Orthodox churches established the World Council of Churches to promote Christian unity and cooperation after the devastation of two world wars.",
    context:"Ecumenism / postwar institutional change",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Ecumenism / postwar institutional change",Evidence:"The WCC's founding is directly documented. The Roman Catholic Church is not a member, though it later developed extensive cooperation with the organization."},
    sourceStatus:"The WCC's founding is directly documented. The Roman Catholic Church is not a member, though it later developed extensive cooperation with the organization.",
    sources:[{label:"World Council of Churches — history",url:"https://www.oikoumene.org/about-the-wcc/history"}]
  },
  {
    year:1948, depth:31970, title:"Creation of Israel transforms ancient Christian communities in the Holy Land", location:"Israel and Palestinian territories",
    story:"The 1948 war and creation of Israel transformed Christian communities alongside Jewish and Muslim populations. Palestinian Christians experienced displacement and refugeehood in some areas, while Christian citizens remained within Israel and churches continued to administer major holy sites.",
    context:"War / Christian communities / Jewish-Christian overlap",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"War / Christian communities / Jewish-Christian overlap",Evidence:"Experiences differed sharply by location. This marker connects Christian history to the same 1948 conflict represented in the Jewish timeline without reducing the war to a religious conflict."},
    sourceStatus:"Experiences differed sharply by location. This marker connects Christian history to the same 1948 conflict represented in the Jewish timeline without reducing the war to a religious conflict.",
    sources:[{label:"Britannica — Palestine 1948",url:"https://www.britannica.com/place/Palestine/World-War-I-and-after"}]
  },
  {
    year:1949, depth:32140, title:"Communist show trial of Cardinal Mindszenty", location:"Hungary",
    story:"Hungarian communist authorities arrested and convicted Catholic Cardinal József Mindszenty after a show trial, part of a wider campaign to subordinate churches to the state.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Communist persecution / show trial",Evidence:"The prosecution and coercive character of the trial are extensively documented."},
    sourceStatus:"The prosecution and coercive character of the trial are extensively documented.",
    sources:[{label:"Britannica — József Mindszenty",url:"https://www.britannica.com/biography/Jozsef-Mindszenty"}]
  },
  {
    year:1950, depth:32310, title:"Korean War devastates Christian communities alongside wider civilian population", location:"Korean Peninsula",
    story:"War and ideological repression affected Korean Christians as churches and civilians were caught between communist and anti-communist forces. North Korea subsequently developed one of the world's most restrictive systems toward independent religious practice.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"War / ideological persecution",Evidence:"Wartime suffering is extensively documented, but victimization was not limited to Christians and claims about precise religious casualty totals require caution."},
    sourceStatus:"Wartime suffering is extensively documented, but victimization was not limited to Christians and claims about precise religious casualty totals require caution.",
    sources:[{label:"Encyclopaedia Britannica — Korean War",url:"https://www.britannica.com/event/Korean-War"}]
  },
  {
    year:1956, depth:32480, title:"Hungarian Revolution and renewed church-state confrontation", location:"Hungary",
    story:"The Hungarian uprising briefly loosened communist controls, allowing Cardinal Mindszenty to leave confinement. Soviet forces crushed the revolution and the communist state subsequently reasserted restrictions over religious institutions.",
    context:"Communist repression / revolution",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Communist repression / revolution",Evidence:"The revolution and Soviet intervention are extensively documented. Religious freedom was one component of a much broader struggle against communist rule."},
    sourceStatus:"The revolution and Soviet intervention are extensively documented. Religious freedom was one component of a much broader struggle against communist rule.",
    sources:[{label:"Britannica — Hungarian Revolution",url:"https://www.britannica.com/event/Hungarian-Revolution-1956"}]
  },
  {
    year:1959, depth:32650, title:"Cuban Revolution begins decades of church-state tension", location:"Cuba",
    story:"The revolutionary government nationalized church schools and restricted religious institutions as Cuba became a communist state. Relations with Catholic and Protestant communities later changed substantially over time.",
    context:"Communist state / church restriction",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Communist state / church restriction",Evidence:"Early revolutionary policy was strongly secular and restrictive, but conditions evolved and Cuba later eased some limitations on religious practice."},
    sourceStatus:"Early revolutionary policy was strongly secular and restrictive, but conditions evolved and Cuba later eased some limitations on religious practice.",
    sources:[{label:"Britannica — Cuba religion",url:"https://www.britannica.com/place/Cuba/Religion"}]
  },
  {
    year:1960, depth:32820, title:"Congo Crisis brings killing of missionaries and clergy", location:"Congo",
    story:"Independence and state collapse produced widespread violence in which missionaries, clergy and Christian civilians were among many victims. The conflict mixed decolonization, secession, Cold War intervention and local struggles.",
    context:"Postcolonial conflict / attacks on clergy",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Postcolonial conflict / attacks on clergy",Evidence:"Religious workers were targeted in some episodes, but the Congo Crisis was not fundamentally a religious war."},
    sourceStatus:"Religious workers were targeted in some episodes, but the Congo Crisis was not fundamentally a religious war.",
    sources:[{label:"Britannica — Congo Crisis",url:"https://www.britannica.com/place/Democratic-Republic-of-the-Congo/The-Congo-crisis"}]
  },
  {
    year:1962, depth:32990, title:"Second Vatican Council begins", location:"Vatican City",
    story:"The Roman Catholic Church opened the Second Vatican Council, a global council that reexamined Catholic relations with the modern world and other religions. Its deliberations led to a major change in official Catholic teaching about Jews and Judaism.",
    context:"Church reform / interfaith relations",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Church reform / interfaith relations",Evidence:"The council's documents are primary institutional sources and had worldwide influence, though implementation varied."},
    sourceStatus:"The council's documents are primary institutional sources and had worldwide influence, though implementation varied.",
    sources:[{label:"Britannica — Second Vatican Council",url:"https://www.britannica.com/event/Second-Vatican-Council"}]
  },
  {
    year:1964, depth:33160, title:"Paul VI meets Patriarch Athenagoras in Jerusalem", location:"Jerusalem",
    story:"Pope Paul VI and Ecumenical Patriarch Athenagoras met in Jerusalem, the first such encounter in centuries and a major step toward Catholic-Orthodox reconciliation.",
    context:"Ecumenical reconciliation",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Ecumenical reconciliation",Evidence:"The meeting is directly documented and helped lead to the mutual lifting of the 1054 excommunications the following year."},
    sourceStatus:"The meeting is directly documented and helped lead to the mutual lifting of the 1054 excommunications the following year.",
    sources:[{label:"Britannica — Paul VI",url:"https://www.britannica.com/biography/Paul-VI"}]
  },
  {
    year:1965, depth:33330, title:"Nostra Aetate rejects collective Jewish guilt", location:"Vatican City",
    story:"The Second Vatican Council promulgated Nostra Aetate, declaring that responsibility for Jesus's death could not be charged against all Jews then living or Jews today and deploring antisemitism. It became a landmark change in Catholic teaching and Catholic–Jewish relations.",
    context:"Jewish-Christian reconciliation / doctrinal change",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Jewish-Christian reconciliation / doctrinal change",Evidence:"Nostra Aetate is an official Catholic conciliar declaration. It marked a major break with centuries of Christian teaching that had helped sustain anti-Jewish prejudice."},
    sourceStatus:"Nostra Aetate is an official Catholic conciliar declaration. USHMM identifies it as one of the most influential post-Holocaust Christian statements rethinking relations with Jews and Judaism.",
    sources:[{label:"Vatican — Nostra Aetate",url:"https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651028_nostra-aetate_en.html"}]
  },
  {
    year:1965, depth:33500, title:"Catholic and Orthodox leaders lift mutual excommunications of 1054", location:"Rome and Constantinople",
    story:"Pope Paul VI and Patriarch Athenagoras mutually lifted the historic excommunications associated with the East-West Schism, although the Catholic and Orthodox churches did not reunify.",
    context:"Ecumenical reconciliation",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Ecumenical reconciliation",Evidence:"The declarations are primary institutional acts. Major theological and jurisdictional divisions remain."},
    sourceStatus:"The declarations are primary institutional acts. Major theological and jurisdictional divisions remain.",
    sources:[{label:"Britannica — East-West Schism",url:"https://www.britannica.com/event/East-West-Schism-1054"}]
  },
  {
    year:1966, depth:33670, title:"Chinese Cultural Revolution attacks Christian institutions", location:"China",
    story:"During the Cultural Revolution, churches were closed, religious objects destroyed and clergy and believers persecuted alongside adherents of other religions and people targeted as representatives of the old order.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"State anti-religious persecution",Evidence:"The destruction of religious institutions is extensively documented; Christians were one of several religious groups targeted."},
    sourceStatus:"The destruction of religious institutions is extensively documented; Christians were one of several religious groups targeted.",
    sources:[{label:"Britannica — Cultural Revolution",url:"https://www.britannica.com/event/Cultural-Revolution"}]
  },
  {
    year:1967, depth:33840, title:"Biafran War creates mass suffering among predominantly Christian Igbo", location:"Nigeria / Biafra",
    story:"The attempted secession of Biafra led to war, blockade and catastrophic famine. Many Biafrans were Christian Igbo, but the conflict was fundamentally political, ethnic and regional rather than a simple religious war.",
    context:"Civil war / humanitarian catastrophe",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Civil war / humanitarian catastrophe",Evidence:"The war and famine are extensively documented. Religious identity intersected with ethnicity but should not replace the conflict's political history."},
    sourceStatus:"The war and famine are extensively documented. Religious identity intersected with ethnicity but should not replace the conflict's political history.",
    sources:[{label:"Britannica — Nigerian Civil War",url:"https://www.britannica.com/topic/Nigerian-civil-war"}]
  },
  {
    year:1972, depth:34010, title:"Bloody Sunday deepens Northern Ireland conflict", location:"Derry, Northern Ireland",
    story:"British soldiers shot civil-rights marchers in Derry during the Troubles. Catholic and Protestant identities structured much of Northern Ireland's communal divide, but the conflict also centered on constitutional status, nationalism, unionism and civil rights.",
    context:"Sectarian political conflict",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Sectarian political conflict",Evidence:"The killings were investigated by the Saville Inquiry, which found those shot were not posing a threat that justified the firing."},
    sourceStatus:"The killings were investigated by the Saville Inquiry, which found those shot were not posing a threat that justified the firing.",
    sources:[{label:"Britannica — Bloody Sunday",url:"https://www.britannica.com/event/Bloody-Sunday-Northern-Ireland-1972"}]
  },
  {
    year:1975, depth:34180, title:"Lebanese Civil War begins", location:"Lebanon",
    story:"Lebanon's civil war involved Maronite Christian militias, Palestinian organizations, Muslim and Druze factions, Syrian forces, Israel and others. Sectarian identity interacted with political, social and regional struggles, producing massacres and displacement across communities.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Sectarian and regional civil war",Evidence:"The war is extensively documented. No single religious group can be treated simply as perpetrator or victim across the entire conflict."},
    sourceStatus:"The war is extensively documented. No single religious group can be treated simply as perpetrator or victim across the entire conflict.",
    sources:[{label:"Encyclopaedia Britannica — Lebanese Civil War",url:"https://www.britannica.com/event/Lebanese-Civil-War"}]
  },
  {
    year:1975, depth:34350, title:"Khmer Rouge persecution destroys Cambodian Christian communities", location:"Cambodia",
    story:"The Khmer Rouge abolished organized religion and targeted clergy and believers alongside the broader mass killing of Cambodia's population. Most visible Christian institutions were destroyed and many Christians died.",
    context:"Communist repression / genocide context",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Communist repression / genocide context",Evidence:"Christians were persecuted as part of a wider revolutionary assault on religion and society that also devastated Buddhist and Muslim communities."},
    sourceStatus:"Christians were persecuted as part of a wider revolutionary assault on religion and society that also devastated Buddhist and Muslim communities.",
    sources:[{label:"USHMM — Cambodia",url:"https://encyclopedia.ushmm.org/content/en/article/cambodia-1975-1979"}]
  },
  {
    year:1976, depth:34520, title:"Dirty War targets clergy and Christian human-rights activists in Argentina", location:"Argentina",
    story:"Argentina's military dictatorship abducted and killed political opponents, including priests, seminarians and church-linked activists, while other church figures maintained relationships with the regime.",
    context:"State repression / church and human rights",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"State repression / church and human rights",Evidence:"Christian institutions responded unevenly: some clergy resisted repression, others were silent or supportive."},
    sourceStatus:"Christian institutions responded unevenly: some clergy resisted repression, others were silent or supportive.",
    sources:[{label:"Britannica — Dirty War",url:"https://www.britannica.com/event/Dirty-War"}]
  },
  {
    year:1979, depth:34690, title:"Iranian Revolution transforms conditions for Christian minorities", location:"Iran",
    story:"The Islamic Republic formally recognized some historic Christian minorities while imposing a religious legal order that sharply constrained conversion from Islam and evangelical activity. Armenian and Assyrian churches continued under regulated conditions.",
    context:"Religious restriction / minority status",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Religious restriction / minority status",Evidence:"Conditions differ greatly among historic ethnic churches, converts and foreign-linked congregations. This is a legal and political context marker rather than a massacre event."},
    sourceStatus:"Conditions differ greatly among historic ethnic churches, converts and foreign-linked congregations. This is a legal and political context marker rather than a massacre event.",
    sources:[{label:"U.S. State Department — Iran religious freedom",url:"https://www.state.gov/reports/2023-report-on-international-religious-freedom/iran/"}]
  },
  {
    year:1979, depth:34860, title:"Archbishop Óscar Romero confronts political violence in El Salvador", location:"El Salvador",
    story:"Archbishop Óscar Romero publicly denounced killings, disappearances and repression as El Salvador moved toward civil war, making him a leading Christian voice for human rights.",
    context:"Church and human rights / political conflict",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Church and human rights / political conflict",Evidence:"Romero's sermons and public advocacy are extensively documented. He was assassinated the following year while celebrating Mass."},
    sourceStatus:"Romero's sermons and public advocacy are extensively documented. He was assassinated the following year while celebrating Mass.",
    sources:[{label:"Britannica — Oscar Romero",url:"https://www.britannica.com/biography/Oscar-Arnulfo-Romero"}]
  },
  {
    year:1980, depth:35030, title:"Assassination of Archbishop Óscar Romero", location:"San Salvador, El Salvador",
    story:"Romero was shot and killed while celebrating Mass. A UN-backed truth commission later attributed the assassination order to Major Roberto D'Aubuisson, linking the killing to right-wing death-squad violence.",
    context:"Political assassination / church persecution",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Political assassination / church persecution",Evidence:"The assassination and attribution are extensively documented. Romero was targeted for his opposition to state-linked repression and political violence."},
    sourceStatus:"The assassination and attribution are extensively documented. Romero was targeted for his opposition to state-linked repression and political violence.",
    sources:[{label:"Britannica — Oscar Romero",url:"https://www.britannica.com/biography/Oscar-Arnulfo-Romero"}]
  },
  {
    year:1981, depth:35200, title:"Pope John Paul II assassination attempt", location:"Vatican City",
    story:"Mehmet Ali Ağca shot and seriously wounded Pope John Paul II in St. Peter's Square. The pope survived and later publicly forgave Ağca.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Political violence / assassination attempt",Evidence:"The attack is firmly documented; theories about outside sponsorship remain disputed."},
    sourceStatus:"The attack is firmly documented; theories about outside sponsorship remain disputed.",
    sources:[{label:"Britannica — John Paul II",url:"https://www.britannica.com/biography/Saint-John-Paul-II"}]
  },
  {
    year:1983, depth:35370, title:"Beirut barracks bombings", location:"Beirut, Lebanon",
    story:"Suicide bombers attacked U.S. Marine and French military barracks, killing hundreds of service members. The attacks occurred amid the Lebanese Civil War and are widely attributed to militants linked to what became Hezbollah, with Iranian support.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / regional conflict",Evidence:"The attacks and casualties are firmly documented; organizational attribution has been reconstructed through intelligence, judicial and historical investigations."},
    sourceStatus:"The attacks and casualties are firmly documented; organizational attribution has been reconstructed through intelligence, judicial and historical investigations.",
    sources:[{label:"FBI — Beirut Marine barracks bombing",url:"https://www.fbi.gov/history/famous-cases/beirut-barracks-bombing"}]
  },
  {
    year:1983, depth:35540, title:"Black July and Sri Lankan civil war affect Christian minorities", location:"Sri Lanka",
    story:"Anti-Tamil pogroms helped accelerate civil war. Christian clergy and communities existed among both Tamil and Sinhalese populations and later became victims, mediators and critics of abuses.",
    context:"Ethnic civil war / Christian minority context",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Ethnic civil war / Christian minority context",Evidence:"The Sri Lankan conflict was primarily ethnic and nationalist, not a Christian religious war."},
    sourceStatus:"The Sri Lankan conflict was primarily ethnic and nationalist, not a Christian religious war.",
    sources:[{label:"Britannica — Sri Lanka civil war",url:"https://www.britannica.com/place/Sri-Lanka/Civil-war"}]
  },
  {
    year:1989, depth:35710, title:"Jesuit priests murdered at Central American University", location:"San Salvador, El Salvador",
    story:"Salvadoran soldiers murdered six Jesuit priests, their housekeeper and her daughter at the University of Central America during the civil war. The priests were prominent critics of violence and advocates for negotiated peace.",
    context:"Political massacre / clergy targeted",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Political massacre / clergy targeted",Evidence:"The massacre was investigated by the UN Truth Commission and became emblematic of attacks on church-linked human-rights advocates."},
    sourceStatus:"The massacre was investigated by the UN Truth Commission and became emblematic of attacks on church-linked human-rights advocates.",
    sources:[{label:"Britannica — El Salvador civil war",url:"https://www.britannica.com/place/El-Salvador/Civil-war"}]
  },
  {
    year:1990, depth:35880, title:"Lebanese Civil War ends after devastating sectarian conflict", location:"Lebanon",
    story:"The Lebanese Civil War ended after fifteen years of warfare involving Christian, Muslim, Palestinian, Syrian, Israeli and other forces. Christian militias fought Muslim and Palestinian forces and also other Christian factions.",
    context:"Sectarian civil war / regional intervention",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Sectarian civil war / regional intervention",Evidence:"Religious identity was important but interacted with class, ideology, Palestinian armed presence, foreign intervention and political power-sharing."},
    sourceStatus:"Religious identity was important but interacted with class, ideology, Palestinian armed presence, foreign intervention and political power-sharing.",
    sources:[{label:"Britannica — Lebanese Civil War",url:"https://www.britannica.com/event/Lebanese-Civil-War"}]
  },
  {
    year:1992, depth:36050, title:"Bosnian War targets Christian and Muslim communities", location:"Bosnia and Herzegovina",
    story:"The breakup of Yugoslavia produced war among Bosniak, Serb and Croat forces associated largely with Muslim, Orthodox and Catholic populations. Ethnic cleansing, camps, sieges and massacres affected civilians across communities, with Bosniaks suffering genocide at Srebrenica.",
    context:"Ethno-national war / religious identity",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Ethno-national war / religious identity",Evidence:"Religious identity overlapped strongly with ethnicity and nationalism, but the conflict should not be reduced to a theological war."},
    sourceStatus:"Religious identity overlapped strongly with ethnicity and nationalism, but the conflict should not be reduced to a theological war.",
    sources:[{label:"Britannica — Bosnian War",url:"https://www.britannica.com/event/Bosnian-War"}]
  },
  {
    year:1994, depth:36220, title:"Rwandan genocide and the role of Christian institutions", location:"Rwanda",
    story:"During the genocide against the Tutsi, churches became sites both of refuge and massacre. Some clergy and lay Christians protected victims, while others participated in or facilitated killings. The genocide exposed the complex relationship between Christian institutions, ethnicity and political power.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Genocide / institutional complicity and rescue",Evidence:"The genocide and participation of individual clergy are extensively documented in court records and scholarship; responsibility must be assigned to individuals and institutions rather than Christianity generally."},
    sourceStatus:"The genocide and participation of individual clergy are extensively documented in court records and scholarship; responsibility must be assigned to individuals and institutions rather than Christianity generally.",
    sources:[{label:"United Nations — Rwanda genocide",url:"https://www.un.org/en/preventgenocide/rwanda/"}]
  },
  {
    year:1996, depth:36390, title:"Monks of Tibhirine kidnapped and killed in Algeria", location:"Algeria",
    story:"Seven Trappist monks were kidnapped from the monastery of Tibhirine during Algeria's civil war and later found dead. The Armed Islamic Group claimed responsibility, though aspects of the case remain disputed.",
    context:"Islamist insurgency / clergy targeted",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Islamist insurgency / clergy targeted",Evidence:"The monks' deaths are historical, but responsibility and circumstances have been the subject of continuing investigation and dispute."},
    sourceStatus:"The monks' deaths are historical, but responsibility and circumstances have been the subject of continuing investigation and dispute.",
    sources:[{label:"Britannica — Algeria civil war",url:"https://www.britannica.com/place/Algeria/Civil-war-the-Islamists-versus-the-army"}]
  },
  {
    year:1997, depth:36560, title:"Luxor massacre includes Christian and other foreign tourists", location:"Luxor, Egypt",
    story:"Islamist militants attacked tourists at the Temple of Hatshepsut, killing dozens. The attack was part of an insurgency against the Egyptian state and tourism industry rather than an exclusively anti-Christian attack.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / Islamist insurgency",Evidence:"The massacre and militant attribution are firmly documented; victims were targeted primarily as tourists and foreigners."},
    sourceStatus:"The massacre and militant attribution are firmly documented; victims were targeted primarily as tourists and foreigners.",
    sources:[{label:"Britannica — Egypt history",url:"https://www.britannica.com/place/Egypt"}]
  },
  {
    year:1998, depth:36730, title:"Vatican publishes We Remember: A Reflection on the Shoah", location:"Vatican City",
    story:"The Vatican Commission for Religious Relations with the Jews issued a reflection on the Holocaust, condemning genocide and examining the history of Christian anti-Jewish attitudes while distinguishing modern racial antisemitism from Christian anti-Judaism.",
    context:"Holocaust remembrance / Jewish-Christian relations",
    aftermath:"This marker shows a major development in Christian history and its wider social consequences. Where Christianity intersects with Jewish history, the overlap badge indicates a substantive historical connection rather than a coincidental date.",
    stats:{Type:"Holocaust remembrance / Jewish-Christian relations",Evidence:"The document is an official Vatican statement and part of a wider post-Holocaust process of Christian institutional reckoning."},
    sourceStatus:"The document is an official Vatican statement and part of a wider post-Holocaust process of Christian institutional reckoning.",
    sources:[{label:"Vatican — We Remember",url:"https://www.vatican.va/roman_curia/pontifical_councils/chrstuni/documents/rc_pc_chrstuni_doc_16031998_shoah_en.html"}]
  },
  {
    year:1998, depth:36900, title:"Good Friday Agreement reduces Northern Ireland sectarian conflict", location:"Northern Ireland",
    story:"The agreement created a new political framework after decades of conflict involving predominantly Catholic nationalists and Protestant unionists. It sharply reduced, though did not entirely end, sectarian violence.",
    context:"Peace settlement / sectarian conflict",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Peace settlement / sectarian conflict",Evidence:"The agreement is directly documented and illustrates how a conflict with strong religious identities was fundamentally also constitutional and national."},
    sourceStatus:"The agreement is directly documented and illustrates how a conflict with strong religious identities was fundamentally also constitutional and national.",
    sources:[{label:"Britannica — Good Friday Agreement",url:"https://www.britannica.com/topic/Good-Friday-Agreement"}]
  },
  {
    year:1999, depth:37070, title:"East Timor church attacks amid independence violence", location:"East Timor",
    story:"Pro-integration militias attacked civilians, churches and clergy during violence surrounding East Timor's independence referendum. Catholic institutions often sheltered displaced people and became targets.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Political violence / attacks on Christians and civilians",Evidence:"The violence is documented by UN investigations; victims were targeted primarily in the political conflict over independence, though churches were prominent refuge sites."},
    sourceStatus:"The violence is documented by UN investigations; victims were targeted primarily in the political conflict over independence, though churches were prominent refuge sites.",
    sources:[{label:"United Nations — East Timor",url:"https://peacekeeping.un.org/mission/past/etimor/etimor.htm"}]
  },
  {
    year:1999, depth:37240, title:"Maluku sectarian conflict erupts between Muslim and Christian communities", location:"Maluku Islands, Indonesia",
    story:"Communal violence escalated between Muslim and Christian communities, killing thousands and displacing large populations. Militias, local grievances, political transition and outside fighters intensified the conflict.",
    context:"Communal Christian-Muslim violence",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Communal Christian-Muslim violence",Evidence:"The conflict is extensively documented. Both Christian and Muslim civilians were victims and perpetrators, and political and ethnic factors accompanied religion."},
    sourceStatus:"The conflict is extensively documented. Both Christian and Muslim civilians were victims and perpetrators, and political and ethnic factors accompanied religion.",
    sources:[{label:"Britannica — Maluku",url:"https://www.britannica.com/place/Moluccas"}]
  },
  {
    year:2000, depth:37410, title:"Kaduna sharia riots kill Christians and Muslims", location:"Kaduna, Nigeria",
    story:"Protests and counter-protests over implementation of Islamic sharia law erupted into communal violence between Christian and Muslim residents, killing large numbers and deepening sectarian division.",
    context:"Christian-Muslim communal violence",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Christian-Muslim communal violence",Evidence:"Casualty estimates vary. The violence involved organized and spontaneous attacks by members of both communities."},
    sourceStatus:"Casualty estimates vary. The violence involved organized and spontaneous attacks by members of both communities.",
    sources:[{label:"U.S. State Department — Nigeria religious freedom",url:"https://www.state.gov/reports/2000-report-on-international-religious-freedom/nigeria/"}]
  },
  {
    year:2001, depth:37580, title:"Jos communal riots kill Christians and Muslims", location:"Jos, Nigeria",
    story:"Large-scale violence erupted between Christian and Muslim communities in Jos amid disputes over political status, land, ethnicity and local power.",
    context:"Communal religious violence",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Communal religious violence",Evidence:"Religious labels overlapped with ethnic and political divisions; both Christian and Muslim civilians were killed."},
    sourceStatus:"Religious labels overlapped with ethnic and political divisions; both Christian and Muslim civilians were killed.",
    sources:[{label:"U.S. State Department — Nigeria religious freedom",url:"https://www.state.gov/reports/2001-report-on-international-religious-freedom/nigeria/"}]
  },
  {
    year:2002, depth:37750, title:"Bali bombings kill Christians, Muslims and foreign tourists", location:"Bali, Indonesia",
    story:"Jemaah Islamiyah bombers attacked nightlife venues in Bali, killing more than 200 people from many countries and religious backgrounds. The attack was jihadist terrorism but was not an exclusively anti-Christian attack.",
    context:"Terrorism / jihadist attack",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Terrorism / jihadist attack",Evidence:"The attack and perpetrators are firmly documented. Including it requires clarity that victims were diverse and the primary targets were tourist venues."},
    sourceStatus:"The attack and perpetrators are firmly documented. Including it requires clarity that victims were diverse and the primary targets were tourist venues.",
    sources:[{label:"Britannica — Bali bombings",url:"https://www.britannica.com/event/Bali-Bombings-of-2002"}]
  },
  {
    year:2002, depth:37920, title:"Miss World riots in Kaduna", location:"Kaduna, Nigeria",
    story:"Religious controversy surrounding the Miss World pageant contributed to riots in which Christian and Muslim neighborhoods and places of worship were attacked and more than 200 people were reported killed.",
    context:"Communal religious violence",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Communal religious violence",Evidence:"The riots are well documented; responsibility and victims crossed communal lines."},
    sourceStatus:"The riots are well documented; responsibility and victims crossed communal lines.",
    sources:[{label:"Britannica — Nigeria religion",url:"https://www.britannica.com/place/Nigeria/Religious-freedom"}]
  },
  {
    year:2003, depth:38090, title:"Iraq War and collapse of security accelerate Christian displacement", location:"Iraq",
    story:"Following the U.S.-led invasion and collapse of Iraqi state security, ancient Christian communities faced bombings, kidnappings, killings and displacement amid a much wider insurgency and sectarian war.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"War / persecution / displacement",Evidence:"The decline and displacement of Iraqi Christian communities are extensively documented; violence came from multiple armed actors and occurred within a broader catastrophe affecting many Iraqis."},
    sourceStatus:"The decline and displacement of Iraqi Christian communities are extensively documented; violence came from multiple armed actors and occurred within a broader catastrophe affecting many Iraqis.",
    sources:[{label:"U.S. State Department — International Religious Freedom",url:"https://www.state.gov/reports/2023-report-on-international-religious-freedom/iraq/"}]
  },
  {
    year:2004, depth:38260, title:"Beslan school siege includes Orthodox Christian community victims", location:"Beslan, Russia",
    story:"Militants seized a school in North Ossetia, killing more than 330 hostages, many of them children. The local population was predominantly Orthodox Christian, but the attack was part of the Chechen conflict rather than an attack on Christianity as a religion.",
    context:"Terrorism / ethno-political conflict",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Terrorism / ethno-political conflict",Evidence:"The siege is firmly documented. Religious identities existed in the background, but the attack should not be mislabeled as anti-Christian persecution."},
    sourceStatus:"The siege is firmly documented. Religious identities existed in the background, but the attack should not be mislabeled as anti-Christian persecution.",
    sources:[{label:"Britannica — Beslan school attack",url:"https://www.britannica.com/event/Beslan-school-attack"}]
  },
  {
    year:2004, depth:38430, title:"Iraq church bombings signal escalating attacks on Christians", location:"Baghdad and Mosul, Iraq",
    story:"Coordinated bombings struck several churches during Sunday worship, marking a major escalation in attacks on Iraq's ancient Christian communities after the 2003 invasion.",
    context:"Anti-Christian terrorism / insurgency",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Anti-Christian terrorism / insurgency",Evidence:"The bombings are well documented and formed part of the broader collapse of security and sectarian insurgency."},
    sourceStatus:"The bombings are well documented and formed part of the broader collapse of security and sectarian insurgency.",
    sources:[{label:"U.S. State Department — Iraq religious freedom",url:"https://www.state.gov/reports/2004-report-on-international-religious-freedom/iraq/"}]
  },
  {
    year:2008, depth:38600, title:"Orissa anti-Christian violence", location:"Odisha, India",
    story:"Following the killing of a Hindu nationalist leader, widespread communal violence struck Christian communities in Kandhamal district, killing people, burning churches and homes and displacing tens of thousands.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Communal violence / anti-Christian persecution",Evidence:"The violence and displacement are extensively documented; political, religious and caste factors overlapped."},
    sourceStatus:"The violence and displacement are extensively documented; political, religious and caste factors overlapped.",
    sources:[{label:"U.S. State Department — India religious freedom",url:"https://www.state.gov/reports/2008-report-on-international-religious-freedom/india/"}]
  },
  {
    year:2008, depth:38770, title:"Kandhamal violence displaces Christian communities", location:"Odisha, India",
    story:"Anti-Christian violence in Kandhamal killed residents, destroyed churches and homes and displaced tens of thousands after the assassination of a Hindu nationalist leader.",
    context:"Communal violence / anti-Christian persecution",
    aftermath:"This event is presented within its political, social and religious setting. The timeline distinguishes the actions of specific institutions, rulers, states and movements from Christianity or any other religion as a whole.",
    stats:{Type:"Communal violence / anti-Christian persecution",Evidence:"The violence is extensively documented. Religious identity, caste, indigenous status and political mobilization all contributed."},
    sourceStatus:"The violence is extensively documented. Religious identity, caste, indigenous status and political mobilization all contributed.",
    sources:[{label:"U.S. State Department — India religious freedom",url:"https://www.state.gov/reports/2008-report-on-international-religious-freedom/india/"}]
  },
  {
    year:2009, depth:38940, title:"Boko Haram insurgency begins large-scale violence in northeastern Nigeria", location:"Northeastern Nigeria",
    story:"Boko Haram's insurgency expanded into mass violence against government institutions, Muslim critics, Christians, churches and civilians. Christian communities were repeatedly targeted, while Muslims constituted a large share of the movement's victims as well.",
    context:"Jihadist insurgency / anti-Christian attacks",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Jihadist insurgency / anti-Christian attacks",Evidence:"The insurgency and deliberate attacks on Christians are extensively documented. The conflict also kills and displaces Muslim communities and should not be described as exclusively Christian-Muslim warfare."},
    sourceStatus:"The insurgency and deliberate attacks on Christians are extensively documented. The conflict also kills and displaces Muslim communities and should not be described as exclusively Christian-Muslim warfare.",
    sources:[{label:"Britannica — Boko Haram",url:"https://www.britannica.com/topic/Boko-Haram"}]
  },
  {
    year:2010, depth:39110, title:"Baghdad church massacre", location:"Baghdad, Iraq",
    story:"Militants affiliated with al-Qaeda in Iraq seized Our Lady of Salvation Syriac Catholic Church during Mass. The hostage crisis and assault killed dozens of worshippers, clergy and security personnel.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / anti-Christian attack",Evidence:"The attack and jihadist responsibility are firmly documented."},
    sourceStatus:"The attack and jihadist responsibility are firmly documented.",
    sources:[{label:"Encyclopaedia Britannica — Iraq War",url:"https://www.britannica.com/event/Iraq-War"}]
  },
  {
    year:2010, depth:39280, title:"Nag Hammadi shooting targets Coptic worshippers", location:"Nag Hammadi, Egypt",
    story:"Gunmen opened fire on Coptic Christians leaving Christmas Eve Mass, killing worshippers and a Muslim guard.",
    context:"Anti-Christian attack / sectarian violence",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Anti-Christian attack / sectarian violence",Evidence:"The attack is well documented and occurred amid recurring sectarian tensions affecting Egypt's Coptic minority."},
    sourceStatus:"The attack is well documented and occurred amid recurring sectarian tensions affecting Egypt's Coptic minority.",
    sources:[{label:"U.S. State Department — Egypt religious freedom",url:"https://www.state.gov/reports/2010-report-on-international-religious-freedom/egypt/"}]
  },
  {
    year:2011, depth:39450, title:"Alexandria church bombing", location:"Alexandria, Egypt",
    story:"A bombing outside a Coptic church after a New Year's service killed worshippers and intensified fears among Egyptian Christians amid rising sectarian tension.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / anti-Christian attack",Evidence:"The bombing is firmly documented; responsibility was investigated amid competing claims."},
    sourceStatus:"The bombing is firmly documented; responsibility was investigated amid competing claims.",
    sources:[{label:"U.S. State Department — Egypt religious freedom",url:"https://www.state.gov/reports/2011-report-on-international-religious-freedom/egypt/"}]
  },
  {
    year:2011, depth:39620, title:"Nigeria Christmas Day church bombings", location:"Nigeria",
    story:"Boko Haram claimed bombings including an attack on St. Theresa Catholic Church in Madalla on Christmas Day, killing worshippers and intensifying fears of sectarian war.",
    context:"Jihadist terrorism / anti-Christian attack",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Jihadist terrorism / anti-Christian attack",Evidence:"The church attacks deliberately targeted Christians, although Boko Haram also killed large numbers of Muslims in its wider insurgency."},
    sourceStatus:"The church attacks deliberately targeted Christians, although Boko Haram also killed large numbers of Muslims in its wider insurgency.",
    sources:[{label:"Britannica — Boko Haram",url:"https://www.britannica.com/topic/Boko-Haram"}]
  },
  {
    year:2012, depth:39790, title:"Boko Haram church bombings intensify in Nigeria", location:"Nigeria",
    story:"Boko Haram and associated militants carried out repeated bombings and shootings at churches and Christian worship services, while also attacking Muslim institutions and civilians who opposed the insurgency.",
    context:"Jihadist terrorism / anti-Christian attacks",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Jihadist terrorism / anti-Christian attacks",Evidence:"Individual attacks and the broader campaign are well documented. Christian targeting was deliberate in many incidents, but the insurgency's victims were religiously diverse."},
    sourceStatus:"Individual attacks and the broader campaign are well documented. Christian targeting was deliberate in many incidents, but the insurgency's victims were religiously diverse.",
    sources:[{label:"U.S. State Department — Nigeria religious freedom",url:"https://www.state.gov/reports/2012-report-on-international-religious-freedom/nigeria/"}]
  },
  {
    year:2013, depth:39960, title:"Egyptian churches attacked after political upheaval", location:"Egypt",
    story:"Following the removal of President Mohamed Morsi, dozens of Coptic churches and Christian institutions were attacked amid nationwide political violence. Christians also suffered killings and intimidation in subsequent extremist attacks.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Communal / extremist anti-Christian violence",Evidence:"The church attacks are extensively documented; Egypt's broader political violence affected multiple communities."},
    sourceStatus:"The church attacks are extensively documented; Egypt's broader political violence affected multiple communities.",
    sources:[{label:"U.S. State Department — Religious Freedom Egypt",url:"https://www.state.gov/reports/2023-report-on-international-religious-freedom/egypt/"}]
  },
  {
    year:2013, depth:40130, title:"Peshawar All Saints Church bombing", location:"Peshawar, Pakistan",
    story:"Suicide bombers attacked worshippers leaving All Saints Church after Sunday services, killing scores in one of Pakistan's deadliest attacks on Christians.",
    context:"Terrorism / anti-Christian attack",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Terrorism / anti-Christian attack",Evidence:"The attack and its Christian target are firmly documented. Militant factions claimed responsibility amid Pakistan's wider insurgency."},
    sourceStatus:"The attack and its Christian target are firmly documented. Militant factions claimed responsibility amid Pakistan's wider insurgency.",
    sources:[{label:"U.S. State Department — Pakistan religious freedom",url:"https://www.state.gov/reports/2013-report-on-international-religious-freedom/pakistan/"}]
  },
  {
    year:2013, depth:40300, title:"Maaloula battle threatens ancient Syrian Christian community", location:"Maaloula, Syria",
    story:"Fighting between Syrian government forces and rebel groups including jihadists reached Maaloula, an ancient Christian town known for Western Aramaic. Churches and monasteries were damaged and residents displaced.",
    context:"Civil war / Christian heritage at risk",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Civil war / Christian heritage at risk",Evidence:"The battle occurred within the wider Syrian civil war. Armed groups and front lines shifted, so responsibility for individual damage requires event-specific sourcing."},
    sourceStatus:"The battle occurred within the wider Syrian civil war. Armed groups and front lines shifted, so responsibility for individual damage requires event-specific sourcing.",
    sources:[{label:"Britannica — Syrian Civil War",url:"https://www.britannica.com/event/Syrian-Civil-War"}]
  },
  {
    year:2014, depth:40470, title:"ISIS conquest devastates Christian communities in Iraq and Syria", location:"Iraq and Syria",
    story:"ISIS seized Mosul and large territories, ordering Christians to convert, pay a tax, leave or face violence. Churches and monasteries were seized or destroyed and ancient Christian communities fled areas where they had lived for centuries.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Genocide / persecution / forced displacement",Evidence:"ISIS persecution of Christians, Yazidis and other minorities is extensively documented. The United States later recognized ISIS atrocities against Christians, Yazidis and Shi'a Muslims as genocide."},
    sourceStatus:"ISIS persecution of Christians, Yazidis and other minorities is extensively documented. The United States later recognized ISIS atrocities against Christians, Yazidis and Shi'a Muslims as genocide.",
    sources:[{label:"U.S. State Department — ISIS genocide statement",url:"https://2017-2021.state.gov/isis-genocide-declaration/"}]
  },
  {
    year:2014, depth:40640, title:"Chibok schoolgirls abducted in Boko Haram insurgency", location:"Chibok, Nigeria",
    story:"Boko Haram abducted 276 schoolgirls from Chibok. Many were Christian, and survivors described forced conversion, coercion and abuse during captivity.",
    context:"Kidnapping / jihadist insurgency / religious coercion",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Kidnapping / jihadist insurgency / religious coercion",Evidence:"The abduction is firmly documented. The girls' experiences varied, and Boko Haram's broader victims included both Christians and Muslims."},
    sourceStatus:"The abduction is firmly documented. The girls' experiences varied, and Boko Haram's broader victims included both Christians and Muslims.",
    sources:[{label:"Britannica — Chibok kidnapping",url:"https://www.britannica.com/event/Chibok-schoolgirl-kidnapping"}]
  },
  {
    year:2015, depth:40810, title:"ISIS murders 21 Coptic Christians in Libya", location:"Libya",
    story:"ISIS militants released a video showing the murder of 21 mostly Egyptian Coptic Christian migrant workers on a Mediterranean beach. Egypt responded with air strikes against ISIS targets in Libya.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / anti-Christian massacre",Evidence:"The killings and ISIS responsibility are firmly documented."},
    sourceStatus:"The killings and ISIS responsibility are firmly documented.",
    sources:[{label:"Encyclopaedia Britannica — Islamic State",url:"https://www.britannica.com/topic/Islamic-State-in-Iraq-and-the-Levant"}]
  },
  {
    year:2015, depth:40980, title:"Garissa University attack separates and kills Christian students", location:"Garissa, Kenya",
    story:"Al-Shabaab gunmen attacked Garissa University College, killing 148 people. Survivors reported that attackers separated some victims by religion and deliberately killed Christians.",
    context:"Jihadist terrorism / anti-Christian targeting",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Jihadist terrorism / anti-Christian targeting",Evidence:"The attack and deliberate religious targeting are extensively documented."},
    sourceStatus:"The attack and deliberate religious targeting are extensively documented.",
    sources:[{label:"Britannica — al-Shabaab",url:"https://www.britannica.com/topic/al-Shabaab"}]
  },
  {
    year:2016, depth:41150, title:"Easter bombing in Lahore targets Christians", location:"Lahore, Pakistan",
    story:"A suicide bomber attacked Gulshan-e-Iqbal Park on Easter Sunday, killing scores of people. A Taliban splinter group said Christians celebrating Easter were the intended target, although many Muslim victims were also killed.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / anti-Christian attack",Evidence:"The attack and claim of responsibility are well documented; victims included both Christians and Muslims."},
    sourceStatus:"The attack and claim of responsibility are well documented; victims included both Christians and Muslims.",
    sources:[{label:"U.S. State Department — Terrorism 2016 Pakistan",url:"https://www.state.gov/reports/country-reports-on-terrorism-2016/"}]
  },
  {
    year:2016, depth:41320, title:"Saint Peter and Saint Paul Church bombing in Cairo", location:"Cairo, Egypt",
    story:"A suicide bombing struck a chapel adjoining St. Mark's Coptic Orthodox Cathedral, killing worshippers. ISIS later claimed responsibility.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / anti-Christian attack",Evidence:"The attack and ISIS claim are firmly documented."},
    sourceStatus:"The attack and ISIS claim are firmly documented.",
    sources:[{label:"U.S. State Department — Egypt religious freedom",url:"https://www.state.gov/reports/2016-report-on-international-religious-freedom/egypt/"}]
  },
  {
    year:2016, depth:41490, title:"Father Jacques Hamel murdered during Mass", location:"Saint-Étienne-du-Rouvray, France",
    story:"Two attackers affiliated with ISIS entered a Catholic church during Mass, took hostages and murdered priest Jacques Hamel before police killed the attackers.",
    context:"Jihadist terrorism / church attack",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Jihadist terrorism / church attack",Evidence:"The attack and ISIS affiliation are firmly documented."},
    sourceStatus:"The attack and ISIS affiliation are firmly documented.",
    sources:[{label:"Britannica — Islamic State attacks",url:"https://www.britannica.com/topic/Islamic-State-in-Iraq-and-the-Levant"}]
  },
  {
    year:2017, depth:41660, title:"Palm Sunday church bombings in Egypt", location:"Tanta and Alexandria, Egypt",
    story:"ISIS suicide bombers attacked Coptic churches during Palm Sunday services, killing worshippers and security personnel. The attacks were part of a sustained extremist campaign against Egyptian Christians.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / anti-Christian attack",Evidence:"The bombings and ISIS responsibility are firmly documented."},
    sourceStatus:"The bombings and ISIS responsibility are firmly documented.",
    sources:[{label:"U.S. State Department — Religious Freedom Egypt",url:"https://www.state.gov/reports/2017-report-on-international-religious-freedom/egypt/"}]
  },
  {
    year:2017, depth:41830, title:"Minya attack on Coptic pilgrims", location:"Minya Governorate, Egypt",
    story:"Gunmen attacked buses carrying Coptic Christians traveling to a monastery, killing dozens. ISIS claimed responsibility.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / anti-Christian attack",Evidence:"The attack and ISIS claim are firmly documented."},
    sourceStatus:"The attack and ISIS claim are firmly documented.",
    sources:[{label:"U.S. State Department — Egypt religious freedom",url:"https://www.state.gov/reports/2017-report-on-international-religious-freedom/egypt/"}]
  },
  {
    year:2017, depth:42000, title:"Sutherland Springs church shooting", location:"Texas, United States",
    story:"A gunman opened fire during Sunday worship at First Baptist Church in Sutherland Springs, killing 26 people. Investigators found the attack arose principally from domestic and personal conflict rather than anti-Christian ideology.",
    context:"Mass shooting / church attack",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Mass shooting / church attack",Evidence:"The attack is firmly documented. It is included because a Christian congregation was attacked during worship, while motive should not be mislabeled as religious persecution."},
    sourceStatus:"The attack is firmly documented. It is included because a Christian congregation was attacked during worship, while motive should not be mislabeled as religious persecution.",
    sources:[{label:"FBI — active shooter resources",url:"https://www.fbi.gov/how-we-can-help-you/safety-resources/active-shooter-safety-resources"}]
  },
  {
    year:2017, depth:42170, title:"Marawi siege devastates Christian and Muslim communities", location:"Marawi, Philippines",
    story:"ISIS-aligned militants seized parts of Marawi, taking hostages and attacking churches as Philippine forces fought a five-month urban battle. The overwhelmingly Muslim city's civilians suffered massive displacement.",
    context:"Jihadist insurgency / church attacks / urban war",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Jihadist insurgency / church attacks / urban war",Evidence:"Christian symbols and clergy were deliberately targeted, but most displaced residents were Muslim and the siege devastated the entire city."},
    sourceStatus:"Christian symbols and clergy were deliberately targeted, but most displaced residents were Muslim and the siege devastated the entire city.",
    sources:[{label:"Britannica — Marawi",url:"https://www.britannica.com/place/Marawi"}]
  },
  {
    year:2018, depth:42340, title:"Surabaya church bombings", location:"Surabaya, Indonesia",
    story:"Members of one family carried out suicide bombings at three Christian churches on a Sunday morning. Indonesian authorities linked the attackers to an ISIS-inspired network.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / church bombings",Evidence:"The attacks and extremist network are firmly documented."},
    sourceStatus:"The attacks and extremist network are firmly documented.",
    sources:[{label:"U.S. State Department — Indonesia religious freedom",url:"https://www.state.gov/reports/2018-report-on-international-religious-freedom/indonesia/"}]
  },
  {
    year:2018, depth:42510, title:"Central African Republic church and mosque attacks deepen communal conflict", location:"Central African Republic",
    story:"Armed groups attacked churches, mosques and civilians as conflict continued between factions often identified with Christian or Muslim communities. Religious leaders repeatedly warned against portraying the war as simply Christian versus Muslim.",
    context:"Communal conflict / attacks on worship",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Communal conflict / attacks on worship",Evidence:"Religion overlapped with political, regional and militia identities. Christian and Muslim religious leaders also cooperated in peacebuilding."},
    sourceStatus:"Religion overlapped with political, regional and militia identities. Christian and Muslim religious leaders also cooperated in peacebuilding.",
    sources:[{label:"U.S. State Department — CAR religious freedom",url:"https://www.state.gov/reports/2018-report-on-international-religious-freedom/central-african-republic/"}]
  },
  {
    year:2019, depth:42680, title:"Easter Sunday bombings in Sri Lanka", location:"Sri Lanka",
    story:"Coordinated suicide bombings struck churches during Easter services and luxury hotels, killing more than 250 people. Authorities attributed the attacks to local Islamist extremists inspired by ISIS.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / attacks on churches and civilians",Evidence:"The attacks and targets are firmly documented; investigations examined local networks and intelligence failures."},
    sourceStatus:"The attacks and targets are firmly documented; investigations examined local networks and intelligence failures.",
    sources:[{label:"Encyclopaedia Britannica — Sri Lanka Easter bombings",url:"https://www.britannica.com/event/Sri-Lanka-Easter-bombings-of-2019"}]
  },
  {
    year:2019, depth:42850, title:"Burkina Faso church attacks intensify", location:"Burkina Faso",
    story:"Jihadist militants attacked churches, clergy and Christian worshippers as insurgent violence expanded across Burkina Faso. Muslim civilians and religious leaders opposing extremists were also killed in the broader conflict.",
    context:"Jihadist insurgency / anti-Christian attacks",
    aftermath:"This event is placed in its wider political and religious setting. The timeline distinguishes the actions of specific rulers, institutions, armies, movements and individuals from entire religious populations.",
    stats:{Type:"Jihadist insurgency / anti-Christian attacks",Evidence:"Targeted church attacks are well documented, but the Sahel insurgency affects communities across religious lines and should not be reduced to a binary religious war."},
    sourceStatus:"Targeted church attacks are well documented, but the Sahel insurgency affects communities across religious lines and should not be reduced to a binary religious war.",
    sources:[{label:"U.S. State Department — Burkina Faso religious freedom",url:"https://www.state.gov/reports/2019-report-on-international-religious-freedom/burkina-faso/"}]
  },
  {
    year:2019, depth:43020, title:"Jolo Cathedral bombing in the Philippines", location:"Jolo, Philippines",
    story:"Twin bombs exploded during Sunday Mass at Our Lady of Mount Carmel Cathedral, killing worshippers and security personnel. ISIS claimed responsibility amid the southern Philippines insurgency.",
    context:"Jihadist terrorism / church attack",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Jihadist terrorism / church attack",Evidence:"The bombing is firmly documented; investigations connected perpetrators to militant networks operating in the region."},
    sourceStatus:"The bombing is firmly documented; investigations connected perpetrators to militant networks operating in the region.",
    sources:[{label:"U.S. State Department — Philippines religious freedom",url:"https://www.state.gov/reports/2019-report-on-international-religious-freedom/philippines/"}]
  },
  {
    year:2020, depth:43190, title:"Mozambique insurgency attacks Christian and Muslim civilians", location:"Cabo Delgado, Mozambique",
    story:"An ISIS-linked insurgency in northern Mozambique carried out killings, kidnappings and attacks on villages. Christian communities were among the victims, while Muslim civilians who resisted extremists were also targeted and the conflict displaced huge numbers of people.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Insurgency / religious extremist violence",Evidence:"The insurgency and atrocities are extensively documented; framing it as a simple Muslim-versus-Christian war would be inaccurate."},
    sourceStatus:"The insurgency and atrocities are extensively documented; framing it as a simple Muslim-versus-Christian war would be inaccurate.",
    sources:[{label:"U.S. State Department — Mozambique religious freedom",url:"https://www.state.gov/reports/2023-report-on-international-religious-freedom/mozambique/"}]
  },
  {
    year:2020, depth:43360, title:"Nice basilica attack", location:"Nice, France",
    story:"An attacker killed three people inside the Notre-Dame Basilica in Nice. French authorities treated the killings as an Islamist terrorist attack.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, Judaism, Islam, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to surrounding religious, political and social history. Where evidence or attribution is disputed, uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / church attack",Evidence:"The killings and location are firmly documented; judicial proceedings address individual responsibility and motive."},
    sourceStatus:"The killings and location are firmly documented; judicial proceedings address individual responsibility and motive.",
    sources:[{label:"Britannica — France",url:"https://www.britannica.com/place/France"}]
  },
  {
    year:2021, depth:43530, title:"Makassar cathedral bombing", location:"Makassar, Indonesia",
    story:"Two suicide bombers attacked outside Sacred Heart of Jesus Cathedral after Palm Sunday Mass, injuring worshippers and security personnel.",
    context:"Jihadist terrorism / church attack",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Jihadist terrorism / church attack",Evidence:"Indonesian authorities linked the attackers to a local ISIS-affiliated network. No worshippers were killed, though the bombers died and multiple people were wounded."},
    sourceStatus:"Indonesian authorities linked the attackers to a local ISIS-affiliated network. No worshippers were killed, though the bombers died and multiple people were wounded.",
    sources:[{label:"U.S. State Department — Indonesia religious freedom",url:"https://www.state.gov/reports/2021-report-on-international-religious-freedom/indonesia/"}]
  },
  {
    year:2022, depth:43700, title:"Owo church massacre in Nigeria", location:"Owo, Nigeria",
    story:"Gunmen attacked St. Francis Catholic Church during Pentecost Mass, killing dozens of worshippers. Nigerian authorities later blamed militants associated with Islamic State West Africa Province.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Terrorism / church massacre",Evidence:"The attack is firmly documented; attribution developed through Nigerian investigations and arrests."},
    sourceStatus:"The attack is firmly documented; attribution developed through Nigerian investigations and arrests.",
    sources:[{label:"U.S. State Department — Nigeria religious freedom",url:"https://www.state.gov/reports/2022-report-on-international-religious-freedom/nigeria/"}]
  },
  {
    year:2023, depth:43870, title:"Christmas-period massacres in Plateau State", location:"Plateau State, Nigeria",
    story:"Armed groups attacked numerous villages in central Nigeria around Christmas, killing large numbers of residents, many from predominantly Christian farming communities. The violence sits within a complex conflict involving land, ethnicity, criminality, climate pressure and religious identity.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Massacre / communal conflict",Evidence:"The killings are well documented. Describing all Plateau violence solely as anti-Christian persecution oversimplifies overlapping ethnic, economic and security drivers."},
    sourceStatus:"The killings are well documented. Describing all Plateau violence solely as anti-Christian persecution oversimplifies overlapping ethnic, economic and security drivers.",
    sources:[{label:"U.S. State Department — Nigeria religious freedom",url:"https://www.state.gov/reports/2023-report-on-international-religious-freedom/nigeria/"}]
  },
  {
    year:2023, depth:44040, title:"Manipur violence destroys churches amid ethnic conflict", location:"Manipur, India",
    story:"Violence between predominantly Hindu Meitei and predominantly Christian Kuki-Zo communities killed civilians, displaced tens of thousands and destroyed hundreds of churches as well as homes and other property.",
    context:"Ethnic conflict / anti-Christian destruction",
    aftermath:"This marker is included for its importance to the history of Christian communities, institutions or conflict. Religious identity is separated from political, ethnic, colonial and strategic causes where those factors are more explanatory.",
    stats:{Type:"Ethnic conflict / anti-Christian destruction",Evidence:"Religious identity strongly overlaps with ethnicity, land and political disputes. The conflict should not be reduced to a purely Hindu-Christian religious war."},
    sourceStatus:"Religious identity strongly overlaps with ethnicity, land and political disputes. The conflict should not be reduced to a purely Hindu-Christian religious war.",
    sources:[{label:"U.S. State Department — India religious freedom",url:"https://www.state.gov/reports/2023-report-on-international-religious-freedom/india/"}]
  },
  {
    year:2023, depth:44210, title:"Gaza war devastates historic Palestinian Christian community", location:"Gaza",
    story:"The Israel-Hamas war caused deaths, displacement and destruction across Gaza, including among its small Palestinian Christian community. Strikes and fighting affected church compounds where civilians had sought shelter.",
    context:"War / Christian community / Jewish-Christian overlap",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"War / Christian community / Jewish-Christian overlap",Evidence:"The Christian community's suffering is part of the much larger Palestinian civilian catastrophe and the Israeli-Hamas war, not a separate Christian-targeted war. Responsibility for individual incidents must be sourced specifically."},
    sourceStatus:"The Christian community's suffering is part of the much larger Palestinian civilian catastrophe and the Israeli-Hamas war, not a separate Christian-targeted war. Responsibility for individual incidents must be sourced specifically.",
    sources:[{label:"UN OCHA — occupied Palestinian territory",url:"https://www.ochaopt.org/"}]
  },
  {
    year:2024, depth:44380, title:"Attacks and displacement continue to affect Christian communities in the Sahel", location:"Burkina Faso, Mali, Niger and wider Sahel",
    story:"Jihadist insurgencies continued to attack civilians, religious leaders and places of worship across the Sahel. Christian minorities were targeted in some attacks, while Muslim civilians constituted a large share of victims of the same extremist groups.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Jihadist insurgency / religious persecution",Evidence:"Contemporary reporting confirms targeted anti-Christian attacks, but the regional wars are broader insurgencies affecting multiple religious and ethnic communities."},
    sourceStatus:"Contemporary reporting confirms targeted anti-Christian attacks, but the regional wars are broader insurgencies affecting multiple religious and ethnic communities.",
    sources:[{label:"U.S. State Department — International Religious Freedom",url:"https://www.state.gov/international-religious-freedom-reports/"}]
  },
  {
    year:2024, depth:44550, title:"Gaza and regional war continue to affect Christian holy sites and communities", location:"Israel, Gaza, West Bank and Lebanon",
    story:"Continuing regional conflict affected Palestinian and Lebanese Christian communities alongside Jewish, Muslim and other civilians. Church leaders repeatedly appealed for civilian protection and access to holy places.",
    context:"Regional war / Christian communities / Jewish-Christian overlap",
    aftermath:"This event is included because it materially changed Christian communities, institutions, conflict, persecution or interfaith relations. Political and social causes are kept distinct from religious identity where appropriate.",
    stats:{Type:"Regional war / Christian communities / Jewish-Christian overlap",Evidence:"This is a regional-context marker, not a claim that Christians were uniquely targeted. Specific incidents require separate attribution."},
    sourceStatus:"This is a regional-context marker, not a claim that Christians were uniquely targeted. Specific incidents require separate attribution.",
    sources:[{label:"UN OCHA — occupied Palestinian territory",url:"https://www.ochaopt.org/"}]
  },
  {
    year:2025, depth:44720, title:"Global Christian communities face war, repression and extremist violence", location:"Global",
    story:"By 2025, Christian communities faced very different forms of pressure depending on location: jihadist attacks in parts of Africa and the Middle East, authoritarian restrictions in some states, communal violence, and the effects of major wars. Christians were also participants in political power and armed conflicts in other settings.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Contemporary persecution / conflict context",Evidence:"This is a global context marker, not a claim that Christians share one uniform experience. Country-level evidence must be evaluated separately."},
    sourceStatus:"This is a global context marker, not a claim that Christians share one uniform experience. Country-level evidence must be evaluated separately.",
    sources:[{label:"U.S. State Department — International Religious Freedom",url:"https://www.state.gov/international-religious-freedom-reports/"}]
  },
  {
    year:2026, depth:44890, title:"2026 — YOU ARE HERE", location:"Present day",
    story:"The Christianity timeline reaches the present. Christian communities remain the majority in some powerful states and vulnerable minorities in others; contemporary conflicts include persecution of Christians, violence among communities, and political or military action by actors identifying as Christian.",
    context:"This entry is part of a Christianity-focused historical timeline. It distinguishes religious identity from political, ethnic and strategic motives and does not treat Christianity, any denomination, or another religion as a single actor.",
    aftermath:"Its significance is presented in relation to the surrounding religious, political and social history. Where evidence or attribution is disputed, the uncertainty is stated rather than resolved by assumption.",
    stats:{Type:"Present-day marker",Evidence:"This is a live endpoint. Current conflicts, casualty figures and religious-freedom conditions require continuing updates and country-specific sourcing."},
    sourceStatus:"This is a live endpoint. Current conflicts, casualty figures and religious-freedom conditions require continuing updates and country-specific sourcing.",
    sources:[{label:"U.S. State Department — International Religious Freedom",url:"https://www.state.gov/international-religious-freedom-reports/"}]
  }
];

const eras = [
  {name:"Birth & Jewish Origins of Jesus",range:"c. 6–4 BCE to c. 30 CE",start:180,end:350},
  {name:"Origins & Early Christianity",range:"c. 30–313 CE",start:350,end:4090},
  {name:"Imperial Christianity & Late Antiquity",range:"313–476 CE",start:4090,end:6300},
  {name:"Byzantine, Eastern & Early Medieval Christianity",range:"476–1054 CE",start:6300,end:10040},
  {name:"Schism, Crusades & Medieval Christianity",range:"1054–1517 CE",start:10040,end:16670},
  {name:"Reformation & Wars of Religion",range:"1517–1648 CE",start:16670,end:21260},
  {name:"Confessional States & Modernization",range:"1648–1914 CE",start:21260,end:27210},
  {name:"World Wars, Genocide & Totalitarianism",range:"1914–1990 CE",start:27210,end:35880},
  {name:"Post–Cold War Christianity & Conflict",range:"1990–2010 CE",start:35880,end:39110},
  {name:"Contemporary Persecution & Terrorism",range:"2010–2020 CE",start:39110,end:43190},
  {name:"Present Era",range:"2020–2026 CE",start:43190,end:45410}
];

const MAX_DEPTH=45410;
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
  const points=[{depth:0,year:-5},...events,{depth:MAX_DEPTH,year:2026}];
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
const jewishOverlapTitles=new Set(["Birth of Jesus (Yeshua)","Crucifixion of Jesus","Emergence of the early Christian movement","Council of Jerusalem and the Jewish–Gentile question","Destruction of Jerusalem reshapes Jewish and Christian communities","First Crusade massacres of Jewish communities","Crusaders capture Jerusalem","Fourth Lateran Council regulates Christian society and minorities","Spanish Inquisition established","Expulsion of Jews from Spain under Catholic monarchs","Forced conversion of Jews in Portugal","Nazi persecution of churches and Christian opponents during World War II","Ustaša persecution and Jasenovac camp end with World War II","Martyrdom of Stephen in the New Testament tradition","Execution of James son of Zebedee in Acts","Death of James, brother of Jesus","Visigothic monarchy adopts Catholic Christianity","Expulsion of Jews from Christian England","Black Death persecutions of Jews in Christian Europe","Anti-Jewish massacres and forced conversions in Iberia","Bar Kokhba revolt accelerates Jewish–Christian separation","Norwich blood-libel accusation","Fulda blood-libel accusations and killings","Martin Luther publishes On the Jews and Their Lies","German churches confront accommodation and resistance under Nazism","Christian rescuers and church networks aid Jews during the Holocaust","Seelisberg conference confronts Christian antisemitism after Holocaust","Second Vatican Council begins","Nostra Aetate rejects collective Jewish guilt","Vatican publishes We Remember: A Reflection on the Shoah","Third Council of Toledo links Visigothic monarchy and Catholic Church","Visigothic forced-baptism policy against Jews","Seventeenth Council of Toledo imposes extreme measures on Jews","York massacre of Jews","French crown expels Jews","Vienna Gesera destroys Austrian Jewish communities","Spanish Inquisition begins operating against suspected crypto-Judaism","Russian pogrom wave unfolds in predominantly Christian empire","Anti-Jewish violence erupts at Richard I's coronation","Strasbourg massacre during Black Death persecutions","Balfour Declaration creates new Christian-Jewish political intersection","Dutch churches publicly protest deportation of Jews","Bulgarian Orthodox leaders oppose deportation of Bulgarian Jews","Creation of Israel transforms ancient Christian communities in the Holy Land","Gaza war devastates historic Palestinian Christian community","Gaza and regional war continue to affect Christian holy sites and communities"]);
const markerEls=events.map((event,index)=>{
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="event-marker"+(jewishOverlapTitles.has(event.title)?" jewish-overlap":"");
  btn.setAttribute("aria-label",event.year+" — "+event.title+". Open event details.");
  if(index%2===0) btn.style.left="7%"; else btn.style.right="7%";
  btn.innerHTML='<span class="dot"></span><span><small>'+event.year+'</small>'+(jewishOverlapTitles.has(event.title)?'<em class="overlap-badge">Jewish history overlap</em>':'')+'<strong>'+event.title+'</strong></span>';
  btn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();openEvent(event)});
  wireOverlapLinks(btn,event);
  eventsLayer.appendChild(btn);
  return btn;
});
function wireOverlapLinks(btn,event){
  const links=[["overlap-badge","index.html"]];
  links.forEach(([cls,page])=>btn.querySelectorAll("."+cls).forEach(badge=>{
    badge.dataset.historyLink="true";
    badge.title="Open this year in the related history timeline";
    badge.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();window.location.href=page+"?year="+encodeURIComponent(event.year)+"&from=christian"});
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
    for(let i=1;i<plotted.length;i++){const a=plotted[i-1].place,b=plotted[i].place,line=document.createElementNS(ns,"line");line.setAttribute("x1",a.lon+180);line.setAttribute("y1",90-a.lat);line.setAttribute("x2",b.lon+180);line.setAttribute("y2",90-b.lat);line.setAttribute("class","compare-map-connection");lines.appendChild(line);}dots.appendChild(lines);
  }
  plotted.forEach(({kind,label,event,place})=>{
    const x=place.lon+180,y=90-place.lat,g=document.createElementNS(ns,"g"),halo=document.createElementNS(ns,"circle"),core=document.createElementNS(ns,"circle"),title=document.createElementNS(ns,"title");
    g.setAttribute("class","compare-map-marker "+kind+"-map-marker");halo.setAttribute("cx",x);halo.setAttribute("cy",y);halo.setAttribute("r","7");halo.setAttribute("class","compare-map-halo");core.setAttribute("cx",x);core.setAttribute("cy",y);core.setAttribute("r","2.8");core.setAttribute("class","compare-map-core");title.textContent=label+" — "+event.title+" • "+event.location;g.append(title,halo,core);dots.appendChild(g);
    const tag=document.createElement("span");tag.className="compare-map-legend "+kind+"-map-legend";tag.textContent=label+": "+event.location;legend.appendChild(tag);
  });
  if(!plotted.length){const tag=document.createElement("span");tag.textContent="No precise map location is available for these events.";legend.appendChild(tag);}
}
function restoreTimelineMap(){}
function comparisonTargets(event){const targets=[];if(jewishOverlapTitles.has(event.title))targets.push(["jewish","Jewish history","index.html"]);return targets;}
function eventKey(event){return encodeURIComponent(event.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""));}
function openComparison(event){
  const compare=document.getElementById("comparePanel"),grid=document.getElementById("compareGrid");
  document.getElementById("compareSubtitle").textContent=event.year+" • "+event.location;
  grid.innerHTML="";
  const current=renderCompareCard("christian","Christian history",event,location.pathname.split("/").pop()||"index.html","christian");
  current.classList.add("current-history");grid.appendChild(current);
  const mapItems=[{kind:"christian",label:"Christian",event}];
  comparisonTargets(event).forEach(([kind,label,page])=>{
    const matched=bestComparedEvent(event,kind);
    grid.appendChild(renderCompareCard(kind,label,matched,page,"christian"));
    if(matched)mapItems.push({kind,label,event:matched});
  });
  showComparisonMap(mapItems);panel.classList.add("hidden");compare.classList.remove("hidden");document.body.classList.add("event-open");
}
function closeComparison(){document.getElementById("comparePanel").classList.add("hidden");document.body.classList.remove("event-open");restoreTimelineMap();paused=false;}
function openEvent(event){
  paused=true;velocity=0;
  document.getElementById("eventDate").innerHTML=event.year+(jewishOverlapTitles.has(event.title)?' <span class="overlap-badge panel-overlap-badge">Jewish history overlap</span>':"");
  document.getElementById("eventTitle").textContent=event.title;
  document.getElementById("eventLocation").textContent=event.location;
  document.getElementById("eventStory").textContent=event.story;
  document.getElementById("eventContext").textContent=event.context;
  document.getElementById("eventAftermath").textContent=event.aftermath;
  document.getElementById("eventSourceStatus").textContent=event.sourceStatus;
  const connected=[];
  if(jewishOverlapTitles.has(event.title))connected.push(["Jewish timeline","index.html","jewish"]);
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
    connectedBox.innerHTML="<h3>Connected history</h3><p>See how this same period appears in another timeline.</p>";
    const nav=document.createElement("div");nav.className="connected-history-links";
    connected.forEach(([label,page,from])=>{
      const a=document.createElement("a");
      a.href=page+"?year="+encodeURIComponent(event.year)+"&from="+from;
      a.textContent="Open "+label+" →";nav.appendChild(a);
    });
    try{
      const compareBtn=document.createElement("button");compareBtn.type="button";compareBtn.className="btn compare-history-btn";compareBtn.textContent="Compare histories";compareBtn.addEventListener("click",()=>openComparison(event));connectedBox.appendChild(compareBtn);
    }catch(err){console.warn("Compare histories unavailable",err);}
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
    b.innerHTML="<small>"+y+" · "+event.location+"</small><strong>"+event.title+"</strong>";
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
  jumpToDepth(depthForYear(Math.max(-5,Math.min(2026,y))));
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
      setTimeout(()=>marker.classList.remove("linked-history-target"),4200);
    }
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

const closeCompareBtn=document.getElementById("closeCompareBtn");
if(closeCompareBtn) closeCompareBtn.addEventListener("click",closeComparison);
makeParticles();render();rafId=requestAnimationFrame(tick);