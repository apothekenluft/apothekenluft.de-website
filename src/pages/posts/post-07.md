---
title: "400 Millionen Euro für Uralt-Hardware"
date: 2022-10-16
categories: 
  - "nicht-kategorisiert"
coverImage: "58A60FB8-0BF9-4BDF-B8F7-3DB54EDDFB5E-scaled.jpeg"
---

Arztpraxen, Kliniken und inzwischen auch Apotheken sind seit geraumer Zeit miteinander vernetzt. Leider nicht wirklich, denn ein 1:1 Austausch passiert (noch?) in den seltensten Fällen. Aber zumindest technisch befinden sie sich in einem als Hochsicherheitsgefängnis bezeichneten gemeinsamen Netzwerk, das sich „Telematik-Infrastruktur“, kurz „TI“, nennt.

Um an diesem Netz teilzunehmen benötigt man zwei Dinge:

- einen speziellen Router, der als „Konnektor“ bezeichnet wird und

- eine Karte, die mich als Teilnehmer des Netzes ausweist. Diese Karte heißt „Institutionskarte“, abgekürzt „SMB-C“

Die Konnektoren sind mit spezieller Software ausgestattet, die die Kommunikation in das Netz der Telematik-Infrastruktur verschlüsseln. Dafür benötigt der Konnektor bestimmte Sicherheits-Zertifikate. Allerdings -und das ist ein „failure by design“- laufen diese Zertifikate nach fünf Jahren ab und müssen erneuert werden. Und jetzt kommen die Hersteller der kleinen Kästchen ins Spiel: während es Konnektoren gibt, die das alte Zertifikat einfach ersetzen können, indem ein neues eingespielt wird, behauptet mancher Hersteller, dass das technisch nicht möglich sei. Stattdessen müsse der komplette Kasten getauscht werden. Nun werden die Dinger trotz ihrer veralteten Hardware aber nicht bei „Rudis Resterampe“ verkauft, sondern kosten zwischen 2.500 bis 3.500 Euro. Und dieser Austausch soll -so die in meinen Augen berechtigte Forderung der Ärzte und Apotheken- nicht zu deren Lasten gehen. Also hat unser Bundesgesundheitsministerium beschlossen, dass die gesetzlichen Krankenkassen den Austausch bezahlen sollen. Kosten: 400 Millionen Euro. Wow!

Die Computerzeitschrift c’t hat sich deshalb bereits im Juli 2022 die Mühe gemacht und einen solchen [Konnektor auseinandergebaut](https://www.heise.de/hintergrund/Konnektoraustausch-in-Arztpraxen-300-Millionen-Grab-ohne-stichhaltige-Gruende-7168522.html). Seltsamerweise geht dies trotz Hochsicherheit, ohne, dass es Spuren hinterlässt. Denn obwohl ja alles Hochsicherheitszelle sein soll braucht es weder spezielles Werkzeug, noch ist ein Hardwareschutz vorhanden an dem man erkennen könnte, dass sich jemand daran zu schaffen gemacht hat. Nur zwei Klebesiegel, die ausgetauscht werden können, „schützen“ vor eine Manipulation. Interessant war der Fund, dass die installierten Zertifikate durchaus austauschbar wären. Die Zertifikate sind auf einer Karte gespeichert, die ähnlich aussieht wie eine SIM-Karte unserer Handys. Und diese Karte könnte durchaus getauscht werden ohne gleich den ganzen Konnektor Tim Elektroschrott zu machen. Kosten: ca. 30€ pro Konnektor.

Inzwischen hat auch ein Hacker des Chaos Computer Clubs (CCC) sich einen Konnektor mal [genauer angeschaut](https://www.heise.de/news/Gesundheitsnetz-CCC-Hacker-entschluesselt-sicheren-Speicher-von-TI-Konnektor-7282864.html). Dabei war es ihm möglich, die „hochsichere“ Hardware in einer virtuellen Maschine -also nur mit Software- zum Laufen zu bringen und eine Verbindung mit der Telematik-Infrastruktur herzustellen.

Knapp zwei Wochen nach dem ersten Hack hat [fluepke auch einen zweiten Konnektor entschlüsselt](https://www.heise.de/news/Gesundheitsnetz-CCC-Hacker-entschluesseln-TI-Konnektor-von-CompuGroup-Medical-7305512.html) und war in der Lage das Sicherheitszertifikat über eine Software auszutauschen.

Trotz all dieser Informationen beharren sowohl die Hersteller der Konnektoren als auch die Betreiberfirma des sicheren Netzes -der Staat ist Mehrheitseigner- darauf, dass die Kästchen komplett ausgetauscht werden sollen. Und natürlich möchte keine Arztpraxis und keine Apotheke auf den Kosten dieses Tauschs sitzenbleiben. Deshalb wird verhandelt und wenn es wie gewohnt läuft, werden die sogenannten "Leistungserbringer" den Austausch gefördert bekommen. Das heißt: die 400 Mio Euro werden auf die Allgemeinheit abgewälzt. Zur Freude der "Kästchen"-Hersteller. Bitte wundert euch also nicht, wenn die Krankenkassen weiter Beiträge erhöhen. Denn irgendwo müssen die Millionen ja herkommen...
