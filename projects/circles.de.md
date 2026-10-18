# Circles

Circles ist ein Geldsystem, in dem jeder Mensch seine eigene Währung ausgibt und Vertrauen zwischen Menschen entscheidet, wessen Währung angenommen wird. Es ist eine Inspiration für den Kern, kein Projekt des Konsortiums. Diese Seite beschreibt Circles, wie seine Dokumentation es nennt, was der Kern daraus übernommen hat und wo beide voneinander abweichen.

English: [circles.md](circles.md) · Kern: [core.de.md](../core.de.md)

## Was Circles ist

Jeder Mensch hat ein Konto, das seine eigene Währung prägt, CRC, ein CRC pro Stunde, ab dem Tag, an dem er beitritt. Jeder Mensch bekommt damit ein stetiges Einkommen in seiner eigenen Währung. Alle CRC verlieren 7 % ihres Werts pro Jahr; für einen Menschen gleicht das stündliche Prägen diesen Verlust aus. Organisationen haben auch Konten, prägen aber nicht.

Jemandem in Circles vertrauen heißt, seine CRC anzunehmen. Die Vertrauensregel: Vertraut Alice Bob, kann jeder, der Bobs CRC hält, sie eins zu eins gegen CRC tauschen, die Alice hält. Vertrauen lässt sich jederzeit widerrufen.

Zahlungen laufen entlang von Vertrauenspfaden. Wer jemandem zahlt, zu dem er keine direkte Vertrauensbeziehung hat, wird über Menschen dazwischen geleitet: Bei jedem Schritt wird nach der Vertrauensregel getauscht, sodass der Empfänger CRC bekommt, die er annimmt. Das geht, weil alle CRC gleich viel wert sind.

Mitglieder einer Circles-Gruppe können eine gemeinsame Gruppenwährung prägen, gedeckt durch die eigenen CRC der Mitglieder.

## Was der Kern von Circles übernommen hat

**Der Vertrauenspfad als Reichweite.** In Circles erreicht eine Zahlung genau die Menschen, zu denen ein Vertrauenspfad führt. Im Kern wandert ein Versprechen genau so weit, wie der Gebende sein Vertrauen offengelegt hat, erweitert um die, die für ihn bürgen. Es gibt keinen Markt, auf dem ein Versprechen Fremde erreicht.

**Annehmen als Bedeutung von Vertrauen.** In Circles heißt jemandem vertrauen, seine Währung anzunehmen. Im Kern heißt für jemanden bürgen, seine Versprechen anzunehmen: eine stehende Erklärung, jederzeit widerrufbar, wie Vertrauen in Circles.

## Wo Circles vom Kern abweicht

**Einheiten oder Versprechen.** Circles tauscht gleichwertige Einheiten entlang des Pfades: Ben gibt Carla seine eigenen CRC, nicht Annas. Im Kern ist ein Versprechen „50 Brote bis Juni“; Ben kann es nicht gegen ein eigenes Versprechen tauschen, das Carla braucht. Also wandert dasselbe Versprechen weiter, und die Bürgschaft ist keine Umrechnung, sondern eine Rücknahme: Carla nimmt Annas Versprechen, weil Ben es ihr jederzeit abnimmt. Der ganze Vergleich steht in [rltp.de.md](rltp.de.md).

![Circles tauscht entlang des Pfades, hier wandert dasselbe Versprechen und Ben nimmt es zurück](../diagrams/circles-vs-ours.de.svg)

**Ausgabe.** Circles prägt laufend, ein CRC pro Stunde für jeden Menschen, ob etwas angeboten wird oder nicht. Im Kern gibt es nichts, bis ein Mensch etwas Bestimmtes bis zu einem bestimmten Zeitpunkt verspricht.

**Ablauf.** Bei Circles verliert jedes CRC 7 % pro Jahr. Im Kern verliert ein Versprechen keinen Wert; es wird eingelöst oder verfällt zu seinem Datum.

**Gruppen.** Eine Circles-Gruppe prägt eine eigene Währung. Im Kern gibt ein Kreis nie Versprechen; das tun nur die Menschen in ihm.

## Quellen

- [Circles-Dokumentation](https://docs.aboutcircles.com/): persönliche Währungen, Vertrauensregel, Demurrage, Gruppen
- <https://aboutcircles.com>
