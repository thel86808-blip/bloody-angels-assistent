// index.js
import { Client, GatewayIntentBits, ActivityType } from "discord.js";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const RULES_CHANNEL_ID = "1459512898417070185"; // Vervang door jouw kanaal-ID

// ---------- Discord Client ----------
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const SERVER_RULES = `
REGELS:

1. Algemeen gedrag
1.1 Wees respectvol naar iedereen, inclusief staffleden. Beledigingen, discriminatie of bedreigingen zijn niet toegestaan.
1.2 Gebruik correcte taal; vermijd scheldwoorden, obscene of aanstootgevende uitdrukkingen.
1.3 Geen spam, herhalende berichten of irrelevante content.
1.4 Vermijd politiek, religie of controversiële onderwerpen tenzij toegestaan.
1.5 Vermijd overmatig taggen van @everyone of @here zonder toestemming.

2. Bots kopen
2.1 Alleen serieuze kopers worden geholpen. Vraag duidelijk welke bot je wilt kopen.
2.2 Misleiding, fraude of oplichting is niet toegestaan. Daders worden per direct geband.
2.3 Discussies over prijzen of transacties moeten netjes verlopen.
2.4 Probeer geen onnodige onderhandelingen of vragen te spammen.

3. Transacties
3.1 Betalingen via afgesproken veilige methode (PayPal, Discord Payment, etc.).
3.2 Na betaling wordt de bot geleverd volgens de gemaakte afspraken.
3.3 De server/staff is niet verantwoordelijk voor externe problemen.
3.4 Bewaar altijd bewijs van betaling (screenshots of transactienummers).

4. Veiligheid
4.1 Deel geen gevoelige persoonlijke informatie.
4.2 Vertrouw geen andere verkopers of kopers buiten deze server.
4.3 Klik niet op verdachte links of download geen bestanden van onbekenden.
4.4 Meld verdachte activiteiten direct bij staff.

5. Staffleden
5.1 Staffleden kunnen berichten verwijderen, waarschuwingen geven, mutes of bans uitdelen.
5.2 Volg altijd de aanwijzingen van staff. Discussies via DM of aangewezen kanaal.
5.3 Staffleden zorgen voor een veilige server, respecteer hun rol.
5.4 Misbruik van staffrechten leidt tot directe sancties.

6. Discord ToS
6.1 Alles moet voldoen aan Discord Terms of Service. Bots of services die dit schenden worden niet verkocht.
6.2 Illegale content of piraterij-gerelateerde zaken zijn verboden.
6.3 Overtredingen kunnen leiden tot waarschuwingen, mutes of bans.

# APV — Algemene Plaatselijke Verordening
Groningen Roleplay


**Artikel 1 - Algemene Basis**

*Artikel 1.1 — Taalgebruik & Belediging*
- Het gebruik van scheldwoorden, discriminatie, racisme, toxic gedrag of beledigingen richting spelers of staff is verboden.
- Hieronder vallen o.a.:
- Beledigingen gericht op uiterlijk, afkomst, geloof, gezin of beperking.
- Onnodig provocerend of respectloos gedrag in chat of voicechat.
- Seksuele opmerkingen, seksistische opmerkingen of intimidatie.
- Pogingen om andere spelers emotioneel te raken of te vernederen.
- Het bewust creëren van ruzie of discussies met provocerende uitspraken.
- Het bewust blijven beledigen na verzoek om te stoppen (harassment).
- Het gebruik van beledigende namen.


*Artikel 1.2 — Emote Abuse*
- Het gebruiken van emotes om een onrealistisch voordeel te behalen, zoals:
- Emotes spammen om hit-registratie te ontwijken.
- Emotes gebruiken om te "glitchen" door objecten heen.
- Emotes gebruiken om RP te beïnvloeden (bijv. doen alsof je dood bent terwijl je niet down bent).
- Emotes gebruiken tijdens een arrestatie om RP te ontwijken.


**Artikel 2 — Ingame Character**

*Artikel 2.1 — RDM (Random Deathmatch)*
- Het aanvallen of doden van een speler zonder geldige RP-reden.
- "Ik had zin" is geen RP-reden.
- Hieronder vallen o.a.:
- Zonder enige vorm van interactie of conflict iemand neerschieten.
- Iemand neerschieten omdat diegene "in de weg liep" of "per ongeluk tegen je aan liep".
- Iemand neerknallen vanwege een discussie die IC of OOC plaatsvond zonder escalatie.
- Het doden van spelers voor persoonlijk plezier, zonder aanleiding of doel binnen RP.
- Het doden van een speler omdat hij een wapen bij zich heeft, zonder dat er een daadwerkelijke dreiging is.
- Het openen van vuur op willekeurige spelers bij spawn, garage, of safezones.
- Iemand executeren terwijl diegene geen kans heeft gehad om te reageren.
- Het schieten op personen die geen deel uitmaken van een actieve RP-situatie.

*Artikel 2.3 — VDM (Vehicle Deathmatch)*
- Het gebruiken van een voertuig om iemand opzettelijk aan te rijden of te doden.
- Hieronder vallen o.a.:
- Op een speler inrijden zonder geldige RP-reden of conflict.
- Meerdere keren bewust over iemand heen rijden om hem te "finishen".
- Een voertuig gebruiken als primair wapen tijdens gevechten, zonder dat daar RP-context voor bestaat.
- Spelers omverrijden puur "voor de fun" of omdat iemand ergens staat waar jij wilt parkeren.
- Met hoge snelheid doelbewust op een groep spelers afrijden.
- Iemand aanrijden om een RP-situatie te beëindigen of te ontwijken (bijv. politie die je probeert te arresteren).
- Drive-by aanrijdingen waarbij spelers geen enkele kans krijgen om te reageren.
- Voertuigen misbruiken tijdens PvP om schade te doen terwijl het gevecht te voet plaatsvindt.
- Iemand met opzet van zijn motor of fiets rijden (rammen) zonder RP-doel.

*Artikel 2.4 — NVOL (No Value of Life)*
- Iedere speler is verplicht zijn of haar karakter te laten handelen alsof diens leven waarde heeft.
- Spelers dienen in levensbedreigende situaties realistisch, voorzichtig en proportioneel te reageren.
- Onder NVOL wordt onder andere verstaan:
- Het bewust negeren van duidelijke dreiging, zoals het niet opvolgen van aanwijzingen terwijl er een vuurwapen op de speler gericht staat.
- Het zonder noodzaak wegrennen of agressie tonen wanneer de speler onder schot wordt gehouden.
- Het niet serieus deelnemen aan een gijzelings-, arrestatie- of overvalsituatie, waaronder provoceren of weigeren mee te werken zonder redelijke rolverklaring.

*Artikel 2.5 — Fail-RP (Fail Roleplay)*
- Spelers zijn verplicht handelingen te verrichten die realistisch en passend zijn binnen zijn/haar character.
- Onder Fail-RP wordt onder andere verstaan:
- Onrealistische interacties met anderen, zoals het dwingen van uitkomsten zonder tegenpartij de mogelijkheid te geven te reageren.
- Wapens afpakken in /me zonder de persoon uberhaupt gefouilleerd te hebben.
- Het verzinnen van informatie of gebeurtenissen die niet hebben plaatsgevonden om een voordeel te behalen ("power narration").

**Artikel 3 - Verkrijgen van informatie**

*Artikel 3.1 - Metagamen / Streamsniping*
- Spelers mogen uitsluitend gebruikmaken van informatie die binnen de game op een natuurlijke, realistische en in-character wijze is verkregen.
- Het gebruiken van informatie die buiten het spel om is verkregen, wordt beschouwd als metagaming en is verboden.

- Onder metagaming wordt onder andere verstaan:
- Het gebruiken van informatie verkregen via streams, Discord, screenshots, clips of privégesprekken om andere spelers op te sporen of te beïnvloeden.
- Het reageren op gebeurtenissen die de speler enkel OOC heeft gehoord of gezien (bijvoorbeeld via voicechat of spectator).
- Het navragen of delen van informatie via OOC-kanalen om hiermee een IC voordeel te verkrijgen.
- Het in-game confronteren van spelers met details afkomstig uit Twitch-chats, DM’s of andere platformen.
- Het afspreken van locaties of plannen buiten de game om, en deze vervolgens direct uitvoeren in RP-context.

**Artikel 4 — Overheidsinstanties**

*Artikel 4.1 — Overheidsgebouwen *
- Het is verboden om zonder geldige roleplay-aanleiding overheidsgebouwen te betreden of binnen te vallen.
- Onder overheidsgebouwen vallen onder andere:
- Politie Hoofdbureau (HB)
- Koninklijke Marechaussee Hoofdbureau (KMAR HB)
- Ziekenhuis

- Onder verboden gedragingen vallen onder andere:
- Het met geweld betreden van een overheidsgebouw zonder dat hier een realistische of onderbouwde RP-reden voor bestaat.
- Het opzettelijk verstoren van RP-situaties binnen overheidsgebouwen (bijv. trollen, rondrennen, stelen van items).
- Het blokkeren of hinderen van personeel (politie, KMAR, EMS) bij het uitvoeren van hun taken.

- Uitzondering (onder voorwaarden):
- Het is toegestaan om een gijzelaar (hostage) mee te nemen naar het Politie HB of KMAR HB voor onderhandeling,
mits het doel is om een verdachte/crimineel vrij te krijgen die **nog in het hoofdbureau aanwezig is**.
- Indien de gevangene al is overgebracht naar de gevangenis, vervalt deze mogelijkheid onmiddellijk en is het binnendringen NIET toegestaan.

*Artikel 4.2 — Corruptie binnen Overheidsdiensten*
- Medewerkers met een overheidsfunctie (zoals Politie, KMAR, Ambulance/EMS of andere overheidsinstanties) dienen hun functie te allen tijde professioneel en neutraal uit te voeren.
- Het is verboden om deel te nemen aan criminele activiteiten terwijl men een actieve overheidsbaan vervult.
- Onder criminele activiteiten wordt onder andere verstaan:
- Het samenwerken met criminelen voor persoonlijk voordeel.
- Het verkopen of verstrekken van overheidswapens, voertuigen, toegangspassen of uitrusting aan derden.
Event-deelname vormt een uitzondering

**Artikel 5 - Donatie voordelen **

*Artikel 5.1 — IRL trade*
- Het doorgeven, weggeven of verkopen van items die vallen onder “donatie-items” is verboden.
- Het doorverkopen of aanbieden van donatie-items in ruil voor echt geld valt onder IRL-trading en zal leiden tot een account wipe voor beide betrokken partijen.

*Artikel 5.2 — Revive mij*
- Revivemij:
- Het gebruik van de command /revivemij zorgt automatisch voor toepassing van de New Life Rule.
- Na het reviven **moet** de speler de locatie direct verlaten en mag het scenario niet worden hervat.
- De tegenpartij is verplicht dit te respecteren en mag de speler niet opnieuw in hetzelfde scenario betrekken.

Disclaimer ;
De staff behoudt zich het recht voor om, indien zij dit noodzakelijk achten, uitzonderingen op de regels toe te passen.

APV Toevoeging ;

**Artikel 6 - Externe Softwares**

Het is **ten strengste verboden** om gebruik te maken van externe software, cheats, injectors, trainers, macro’s, of enige andere hulpmiddelen die een onnatuurlijk voordeel geven binnen de server.

Onder *externe software / cheats* wordt o.a. verstaan:
• Aimbots, wallhacks, ESP-software of vergelijkbare hacks
• Macro’s, automatiseringssoftware of unauthorized keybinds
• Programma’s die game-bestanden of servergegevens manipuleren
• Het injecteren of uitvoeren van ongeautoriseerde scripts of mods
• Het gebruiken van crosshairs.

Het **bezit of poging tot gebruik** van dergelijke software wordt gelijk beschouwd als het daadwerkelijk gebruiken ervan.

APV toevoeging ;

**Artikel 2.6 — Rippen**

- Het is toegestaan om een speler te rippen als ;

- Hij/zij een masker draagt
- Hij/zij een holster draagt
- Als je hem/haar een wapen hebt zien trekken
- Als hij/zij praat over criminele activiteiten bijv het kopen van wapens.

**Artikel 2.7 — Starten van een shootout**

- Het is niet toegestaan om te schieten op personen die enkel een masker of holster dragen, tenzij je hen daadwerkelijk een wapen hebt zien trekken. In dat geval is alleen rippen toegestaan.
- Het neerschieten of doden van iemand die zich in de buurt van een actieve shootout bevindt, maar hier geen deel van uitmaakt, valt onder **RDM**.


`;


// ---------- Ready Event ----------
client.once("clientReady", () => { // v15 correctie
  console.log(`✅ Bot online als ${client.user.tag}`);
  client.user.setActivity("Murat's Shop", { type: ActivityType.Watching });
});

// ---------- Message Handler ----------
client.on("messageCreate", async (message) => {
  // ❌ Negeer bots en webhooks
  if (message.author.bot) return;
  if (message.webhookId) return;

  // ❌ Alleen het regels-kanaal
  if (message.channel.id !== RULES_CHANNEL_ID) return;

  await message.channel.sendTyping();

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `
Je bent een regel-assistent voor Bloody Angels.
Beantwoord ALLEEN vragen over de APV / serverregels.
Voeg aan het einde EXACT 1 keer toe:
"Kan ik je nog met iets anders helpen?"

REGELS:
${SERVER_RULES}
            `
          },
          {
            role: "user",
            content: message.content
          }
        ]
      })
    });

    const data = await response.json();

    // ❌ Als er een error is, stuur niets in Discord
    if (data.error) {
      console.error("Groq API error:", data.error.message, "⚠️ flags: 64");
      return;
    }

    // ❌ Alleen antwoorden met content worden verstuurd
    const answer = data.choices?.[0]?.message?.content?.trim();
    if (!answer) return;

    await message.reply(answer);

  } catch (err) {
    console.error("Groq API fout:", err, "⚠️ flags: 64");
    // ❌ GEEN reply naar Discord
  }
});

// ---------- Login ----------
client.login(process.env.DISCORD_TOKEN);
