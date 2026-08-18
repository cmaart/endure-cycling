// Content for /supported-trainers, keyed by language.
//
// Compatibility is stated at the level of the standard, not the individual
// model: ENDURE controls resistance over the Bluetooth FTMS profile, so any
// trainer that speaks FTMS can be steered. The brand list names manufacturers
// whose current smart trainers use that profile — it is not a claim that every
// model of theirs has been individually tested, and the copy says so.
//
// `testedModels` is intentionally empty. Fill it as models are verified in the
// wild; the page only renders that section when the list has entries.

export interface TestedModel {
  brand: string;
  model: string;
  /** Whether ERG (resistance control) was confirmed on this model. */
  erg: boolean;
  note?: string;
}

export const testedModels: TestedModel[] = [];

export const trainersContent = {
  en: {
    seoTitle: 'Which Smart Trainers Work With ENDURE? (Bluetooth FTMS)',
    seoDescription:
      'ENDURE controls smart trainers over the Bluetooth standard FTMS, so trainers from Wahoo, Tacx, Elite, Saris, JetBlack, Zwift Hub and others can be steered in ERG mode. Here is how to check yours.',
    breadcrumb: 'Supported trainers',
    h1: 'Which smart trainers work with ENDURE?',
    subtitle: 'If it speaks Bluetooth FTMS, ENDURE can steer it.',
    directAnswer:
      'ENDURE controls trainer resistance over FTMS (Fitness Machine Service), the Bluetooth standard for fitness equipment. Current smart trainers from the well-known manufacturers all use this profile, which is why ENDURE can drive them in ERG mode without a per-brand integration. ENDURE connects over Bluetooth only — trainers that transmit exclusively on ANT+ are not supported.',
    standardTitle: 'Why a standard instead of a compatibility list',
    standardBody:
      'A per-model whitelist ages badly: manufacturers ship new trainers every season and firmware changes behaviour. FTMS avoids that. It defines how an app asks a trainer to hold a given wattage or resistance level, and trainers that implement it respond the same way regardless of who made them. That is why ENDURE does not need a driver per brand — and why a trainer released after this page was written will very likely work too.',
    brandsTitle: 'Manufacturers whose smart trainers use Bluetooth FTMS',
    brandsBody:
      'Their current smart trainers implement the FTMS profile ENDURE controls, so they can be paired and steered in ERG mode. We have not individually tested every model from every brand, and older or entry-level units without electronic resistance control are the exception — see the check below.',
    brands: [
      'Wahoo (Kickr, Kickr Core, Kickr Snap)',
      'Garmin / Tacx (Neo, Flux, Flow)',
      'Elite (Direto, Suito, Justo, Zumo)',
      'Saris (H3, M2)',
      'JetBlack / Zwift Hub and Zwift Ride',
      'Kinetic (R1, Road Machine Smart)',
      'Magene (T100, T300)',
      'Van Rysel / Decathlon',
      'Zycle (Smart ZDrive, Zbike)',
      'Bkool (Smart Air, Smart Pro)'
    ],
    checkTitle: 'How do I check whether my trainer works?',
    checkBody: 'Two minutes, no guesswork:',
    checkBullets: [
      'Look for "smart trainer" and Bluetooth in your trainer\'s specification — if the resistance is controlled electronically and the trainer pairs over Bluetooth, FTMS is almost certainly there.',
      'Install ENDURE, open the sensor screen and put the trainer in pairing mode. If it appears and can be selected, ENDURE can read it.',
      'Start a free ride and change the resistance. If the trainer responds, ERG control is working — that is the whole test.',
      'It is free to try, so the fastest answer is to pair it and see.'
    ],
    dumbTitle: 'What about a classic trainer without electronic control?',
    dumbBody:
      'A wheel-on trainer with a manual resistance lever cannot be steered by any app, ENDURE included — there is nothing to send a command to. You can still ride and record with it: pair a power meter or a heart-rate strap, and the ride, your FTP and VO2max trends, time in zones and lactate entries all work as normal. What you lose is ERG mode, not the analytics.',
    sensorsTitle: 'Which other sensors can ENDURE pair?',
    sensorsBody:
      'The same Bluetooth pairing flow covers everything else you ride with:',
    sensorsBullets: [
      '<strong>Power meters</strong> over the standard Bluetooth cycling power profile.',
      '<strong>Heart-rate monitors</strong> — chest straps and armbands using the standard Bluetooth heart-rate profile.',
      '<strong>CORE body temperature sensor</strong> natively, with live heat zones on the ride screen.',
      '<strong>Zwift Click</strong> (v1 verified) for Virtual Shifting — changing your ERG target and trainer resistance from the handlebar.'
    ],
    antTitle: 'Does ENDURE support ANT+?',
    antBody:
      'No. ENDURE connects over Bluetooth only. In practice that covers current trainers and sensors, since Bluetooth is what phones speak — but a device that transmits exclusively on ANT+, or an ANT+-only dongle setup, will not connect.',
    faq: [
      {
        q: 'Does ENDURE work with a Wahoo Kickr or a Tacx Neo?',
        a: 'Those trainers use the Bluetooth FTMS profile that ENDURE controls, so they pair and can be steered in ERG mode. We have not tested every model individually — pairing takes a minute and the app is free, so trying it is the definitive answer.'
      },
      {
        q: 'Does the Zwift Hub work with ENDURE?',
        a: 'The Zwift Hub speaks Bluetooth FTMS like other current smart trainers, so ENDURE can pair with it and control resistance. No Zwift subscription is involved.'
      },
      {
        q: 'Do I need a special dongle or adapter?',
        a: 'Not on a phone or tablet — Bluetooth is built in.'
      },
      {
        q: 'Can I use a smart trainer and a separate power meter at the same time?',
        a: 'Yes. Trainer, power meter and heart-rate monitor pair independently, so you can let ENDURE control the trainer while recording power from the meter you trust.'
      }
    ],
    testedTitle: 'Models we have confirmed ourselves',
    testedBrandLabel: 'Trainer',
    testedErgLabel: 'ERG control',
    testedNoteLabel: 'Note',
    relatedTitle: 'Keep reading',
    related: [
      { href: '/features/zwift-click', label: 'Virtual Shifting with the Zwift Click' },
      { href: '/features/core-heat-zones', label: 'Native CORE sensor integration' }
    ],
    ctaTitle: 'Pair your trainer and ride',
    ctaBody:
      'ENDURE is free on iOS and Android. Pair over Bluetooth and you are riding in under 30 seconds.',
    backHome: 'Back to Homepage'
  },
  de: {
    seoTitle: 'Welche Rollentrainer funktionieren mit ENDURE? (Bluetooth FTMS)',
    seoDescription:
      'ENDURE steuert Smart Trainer über den Bluetooth-Standard FTMS — Trainer von Wahoo, Tacx, Elite, Saris, JetBlack, Zwift Hub und weiteren lassen sich im ERG-Modus ansteuern. So prüfst du deinen.',
    breadcrumb: 'Unterstützte Trainer',
    h1: 'Welche Rollentrainer funktionieren mit ENDURE?',
    subtitle: 'Spricht er Bluetooth FTMS, kann ENDURE ihn steuern.',
    directAnswer:
      'ENDURE steuert den Widerstand über FTMS (Fitness Machine Service), den Bluetooth-Standard für Fitnessgeräte. Aktuelle Smart Trainer der bekannten Hersteller nutzen alle dieses Profil — deshalb kann ENDURE sie im ERG-Modus ansteuern, ohne eine Integration pro Marke. ENDURE verbindet ausschließlich über Bluetooth: Trainer, die nur auf ANT+ senden, werden nicht unterstützt.',
    standardTitle: 'Warum ein Standard statt einer Kompatibilitätsliste',
    standardBody:
      'Eine Modell-Whitelist altert schlecht: Hersteller bringen jede Saison neue Trainer, und Firmware ändert Verhalten. FTMS umgeht das. Der Standard definiert, wie eine App einen Trainer bittet, eine bestimmte Wattzahl oder Widerstandsstufe zu halten — und Trainer, die ihn implementieren, antworten gleich, unabhängig vom Hersteller. Darum braucht ENDURE keinen Treiber pro Marke, und darum wird ein Trainer, der nach dieser Seite erscheint, mit hoher Wahrscheinlichkeit ebenfalls laufen.',
    brandsTitle: 'Hersteller, deren Smart Trainer Bluetooth FTMS nutzen',
    brandsBody:
      'Ihre aktuellen Smart Trainer implementieren das FTMS-Profil, das ENDURE steuert — sie lassen sich also koppeln und im ERG-Modus ansteuern. Wir haben nicht jedes Modell jeder Marke einzeln getestet, und ältere oder einfache Rollen ohne elektronische Widerstandssteuerung sind die Ausnahme — siehe die Prüfung unten.',
    brands: [
      'Wahoo (Kickr, Kickr Core, Kickr Snap)',
      'Garmin / Tacx (Neo, Flux, Flow)',
      'Elite (Direto, Suito, Justo, Zumo)',
      'Saris (H3, M2)',
      'JetBlack / Zwift Hub und Zwift Ride',
      'Kinetic (R1, Road Machine Smart)',
      'Magene (T100, T300)',
      'Van Rysel / Decathlon',
      'Zycle (Smart ZDrive, Zbike)',
      'Bkool (Smart Air, Smart Pro)'
    ],
    checkTitle: 'Wie prüfe ich, ob mein Trainer funktioniert?',
    checkBody: 'Zwei Minuten, ohne Rätselraten:',
    checkBullets: [
      'Schau in die Spezifikation deines Trainers nach "Smart Trainer" und Bluetooth — wird der Widerstand elektronisch gesteuert und koppelt der Trainer per Bluetooth, ist FTMS nahezu sicher vorhanden.',
      'Installiere ENDURE, öffne den Sensor-Screen und versetze den Trainer in den Kopplungsmodus. Erscheint er und lässt sich auswählen, kann ENDURE ihn lesen.',
      'Starte einen Free Ride und ändere den Widerstand. Reagiert der Trainer, funktioniert die ERG-Steuerung — das ist der ganze Test.',
      'Ausprobieren kostet nichts, die schnellste Antwort ist also: koppeln und schauen.'
    ],
    dumbTitle: 'Und eine klassische Rolle ohne elektronische Steuerung?',
    dumbBody:
      'Eine Rolle mit manuellem Widerstandshebel kann keine App ansteuern, ENDURE eingeschlossen — es gibt nichts, an das ein Befehl gehen könnte. Fahren und aufzeichnen kannst du trotzdem: verbinde einen Powermeter oder einen Herzfrequenzgurt, und Fahrt, FTP- und VO2max-Trends, Zeit in Zonen und Laktat-Einträge funktionieren normal. Du verlierst den ERG-Modus, nicht die Analyse.',
    sensorsTitle: 'Welche anderen Sensoren kann ENDURE koppeln?',
    sensorsBody:
      'Derselbe Bluetooth-Pairing-Ablauf deckt alles ab, was du sonst fährst:',
    sensorsBullets: [
      '<strong>Powermeter</strong> über das Standard-Bluetooth-Profil für Leistungsmessung.',
      '<strong>Herzfrequenz-Sensoren</strong> — Brustgurte und Armbänder über das Standard-Bluetooth-Herzfrequenzprofil.',
      '<strong>CORE Körpertemperatur-Sensor</strong> nativ, mit Live Heat Zones am Ride-Screen.',
      '<strong>Zwift Click</strong> (v1 verifiziert) für Virtual Shifting — ERG-Ziel und Trainer-Widerstand direkt vom Lenker ändern.'
    ],
    antTitle: 'Unterstützt ENDURE ANT+?',
    antBody:
      'Nein. ENDURE verbindet ausschließlich über Bluetooth. In der Praxis deckt das aktuelle Trainer und Sensoren ab, weil Bluetooth die Sprache der Smartphones ist — ein Gerät, das nur auf ANT+ sendet, oder ein reines ANT+-Dongle-Setup verbindet sich aber nicht.',
    faq: [
      {
        q: 'Funktioniert ENDURE mit einem Wahoo Kickr oder einem Tacx Neo?',
        a: 'Diese Trainer nutzen das Bluetooth-FTMS-Profil, das ENDURE steuert — sie koppeln und lassen sich im ERG-Modus ansteuern. Wir haben nicht jedes Modell einzeln getestet; das Koppeln dauert eine Minute und die App ist kostenlos, Ausprobieren ist also die definitive Antwort.'
      },
      {
        q: 'Funktioniert der Zwift Hub mit ENDURE?',
        a: 'Der Zwift Hub spricht Bluetooth FTMS wie andere aktuelle Smart Trainer, ENDURE kann ihn also koppeln und den Widerstand steuern. Ein Zwift-Abo ist dafür nicht im Spiel.'
      },
      {
        q: 'Brauche ich einen speziellen Dongle oder Adapter?',
        a: 'Am Handy oder Tablet nicht — Bluetooth ist eingebaut.'
      },
      {
        q: 'Kann ich Smart Trainer und separaten Powermeter gleichzeitig nutzen?',
        a: 'Ja. Trainer, Powermeter und Herzfrequenz-Sensor koppeln unabhängig voneinander — ENDURE kann also den Trainer steuern und gleichzeitig die Leistung vom Messgerät aufzeichnen, dem du vertraust.'
      }
    ],
    testedTitle: 'Modelle, die wir selbst bestätigt haben',
    testedBrandLabel: 'Trainer',
    testedErgLabel: 'ERG-Steuerung',
    testedNoteLabel: 'Hinweis',
    relatedTitle: 'Weiterlesen',
    related: [
      { href: '/features/zwift-click', label: 'Virtual Shifting mit dem Zwift Click' },
      { href: '/features/core-heat-zones', label: 'Native CORE-Sensor-Integration' }
    ],
    ctaTitle: 'Trainer koppeln und fahren',
    ctaBody:
      'ENDURE ist kostenlos für iOS und Android. Per Bluetooth koppeln und in unter 30 Sekunden fahren.',
    backHome: 'Zurück zur Startseite'
  }
} as const;

export function getTrainersContent(lang: 'en' | 'de' = 'en') {
  return trainersContent[lang] || trainersContent.en;
}
