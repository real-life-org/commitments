# Naht: das Versprechen

Human Money Core ↔ Real Life Trust Protocol

Was über diese Naht wandert: das liquide Versprechen. Human Money Core gibt ihm seine Form (Inhalt, Einheit, Ablauf, Halterkette, Erkennen doppelter Weitergabe). Das RLTP gibt die Identitäten, unter denen es signiert wird, die Zustellung zwischen Menschen und Geräten, und die Bestätigungen und Bürgschaften, die es annehmbar machen.

Diese Naht füllen beide Projekte gemeinsam. Bis dahin enthält sie einen Vorschlag und die offenen Fragen.

English: [promise.md](promise.md) · Kern: [core.de.md](../core.de.md) · RLTP: [rltp.de.md](../projects/rltp.de.md)

## Vorschlag: drei Logs

**Der Log des Versprechens: die Kette der Halter.** Ein liquides Versprechen trägt seine eigene Geschichte, wie ein Wechsel das Indossament: Anna stellt aus, Ben nimmt an und signiert bei der Weitergabe an Carla, Carla bei der Weitergabe an Dana. Jeder Eintrag ist eine Signatur unter dem Community-Anker des bisherigen Halters. Wer das Versprechen hält, kann die ganze Kette offline prüfen, ohne jemanden zu fragen. Aktueller Halter ist, wer am Ende der Kette steht.

**Das Kassenbuch des Gebenden.** Anna führt Buch über ihre ausgegebenen Versprechen, mit Ablaufdatum. Das ist ihr eigener Zustand, verschlüsselt und über ihre Geräte synchron. Sie weiß, was offen ist. Sie weiß nicht, wo es gerade ist, und muss es nicht.

**Der Raum des Kreises.** Zweckgebundene Versprechen haben keine Kette, denn sie wandern nicht. Sie stehen im Gruppenraum, und ihr Log ist der Log des Kreises: gegeben, getan, bestätigt, verfallen. Das ist Inhalt in der Gruppe; der Access-Log hält die Reihenfolge.

## Doppelte Weitergabe

Ben könnte dasselbe Versprechen an Carla und an Erik weitergeben. Beide Ketten sind für sich gültig. Human Money Core bindet das Versprechen an ein Gerät und streut Fingerprints, damit der Betrug auffällt.

Ohne zentrale Stelle bleibt es bei derselben Antwort, mit anderer Folge: Zwei Ketten mit derselben Gabelung treffen irgendwann aufeinander, spätestens bei Anna, die nur einmal liefert, oder bei einem Bürgen, der beide zurücknimmt. Dann ist belegt, wer gegabelt hat: Ben hat zweimal signiert. Die Folge ist das, was im Kern steht: Wer sein Wort bricht, bekommt keine Bestätigung mehr, und die Bürgen ziehen ihre Bürgschaft zurück. Den Verlust trägt, wer die spätere Kette hält, oder Bens Bürge, wenn er zurückgenommen hat. Die Fingerprints von Human Money Core machen die Gabelung früher sichtbar als erst bei Anna.

## Offene Fragen

- Unter welchem Anker signiert jeder Halter die Kette? Der Vorschlag sagt: der Community-Anker, damit eine Gabelung zuzuordnen ist. Anna sieht dann bei der Einlösung den ganzen Weg. Ist das für beide Projekte annehmbar?
- Lebt ein Versprechen auf einem Gerät oder auf allen Geräten einer Person? Human Money Core antwortet „ein Gerät“. Das RLTP führt gerade Mehrgerät-Experimente (E15); die Antwort sollte darauf warten.
- Wer erkennt eine Gabelung, und wie wandern Fingerprints zwischen Menschen, die keine Gruppe teilen?
- Welche Felder trägt das Versprechen-Credential: Inhalt, Einheit, Ablauf, Aussteller-Anker, Halterkette, Bezug auf Bürgschaften?
- Wie erreicht ein Versprechen einen Halter, der offline ist, und was garantiert die Zustellung?
- Welche Trust-Task-Typen bewegen ein Versprechen: geben, übertragen, einlösen, verfallen, und ist „annehmen“ ein eigener Schritt oder Teil der Übertragung?
