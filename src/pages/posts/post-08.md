---
title: "Rabatte, Rabatte, Rabatte - aber nur mit Vertrag"
date: 2023-01-21
categories: 
  - "apotheke"
  - "gesundheitspolitik"
tags: 
  - "apotheke"
  - "apothekenalltag"
  - "rabattvertraege"
coverImage: "723245BF-858A-4F59-8E98-3C2833D71259.jpeg"
---

Wie schon in einigen [Beiträgen](https://apotheker-luft.de/preisberechnung-fuer-verschreibungspflichtige-arzneimittel/) angesprochen, möchte ich heute über die sogenannten "Rabattverträge", die von den Krankenkassen mit verschiedenenen Herstellern von Arzneimitteln abgeschlossen werden können, schreiben.

Es waren einmal die gesetzlichen Krankenversicherungen, die Geld sparen wollte. Also machten sich die Herolde der Krankenkassen 2007 auf zur damaligen Gesundheitskönigin [Ulla Schmidt](https://de.wikipedia.org/wiki/Ulla_Schmidt_\(Politikerin,_1949\)) und forderten die Möglichkeit Verträge mit den Herstellern von Arzneimitteln zu schließen. Die Königin war den Vertretern der Krankenkassen wohlgesonnen. Und so schuf Sie das "GKV-Wettbewerbsstärkungsgesetz" und ermöglichte den Fürsten der Krankenkassen Verträge mit Arzneimittelherstellern abzuschließen um Kosten zu sparen und die Beiträge für die Bürger senken zu können.

Soweit der märchenhafte Start. Und damals -2007- begannen die Rabattverträge mit dem baden-württembergischen AOK-Chef [Christopher Hermann](https://www.aok.de/kp/bw/unternehmensbericht/der-unermuedliche/). Ich kann mich noch gut an den Start im April 2007 erinnern: nur bei AOK-Versicherten öffnete sich auf einmal ein Fenster in unserem Apotheken-Verwaltungs-System und wies uns darauf hin, dass unser Kunde nicht das vom Arzt verordnete, sondern ein von der AOK festgelegtes Medikament bekommen muss. Und ich kann mich auch noch gut an meinen Vater erinnern, der damals noch Chef in der Apotheke war. Er meinte nur: "Gut, dass ich bald aufhöre und so einen Mist nicht mehr mitmachen muss.". Denn im April 2007 war schon klar, dass ich die Apotheke im September übernehmen würde.

Im Mai kamen dann weitere Krankenkassen dazu und plötzlich wurde die Arbeit mit unserem Apotheken-Computersystem sehr zäh. Denn jetzt gab es nicht nur bei der AOK, sondern auch bei zahlreichen anderen Krankenkassen diese seltsamen Verträge. Und da damals für die Vertragsabfrage jedes Mal bei unserem Server angefragt werden musste, waren die Abfragen sehr langsam. Glücklicherweise hat unser Softwarehaus kurze Zeit später die Vertragsdatenbank direkt auf unseren Kassenrechnern gespeichert, was die Abfrage drastisch beschleunigt.

Ende 2021 gab es ca. [36.000 Verträge](https://www.abda.de/fileadmin/user_upload/assets/ZDF/ZDF22/ZDF_22_39_Rabattvertraege.pdf) zwischen Krankenkassen und Pharmaindustrie. Und obwohl es die Verträge seit über 15 Jahren gibt, wissen viele Kunden (und Ärzte) immer noch nicht, was das bedeutet. Deshalb versuche ich es zu erklären. Das ist nicht einfach, denn Apotheke ist heutzutage komplizierter als man denkt:

Nehmen wir an, der Arzt stellt ein Rezept über das Antibiotikum Penicillin mit einer Dosis von 1,5 I.E. uns 20 Stück aus. Er wählt die Firma "1 A Pharma" aus, weil die in seinem Praxissystem als erster Treffer angezeigt wird. Unser Patient ist bei der Techniker Krankenkasse versichert (es könnte auch die DAK, die Barmer oder sonst eine gesetzliche Versicherung sein). Und -weil er sein Antibiotikum gleich braucht- läuft er in die nächstgelegene Apotheke. Die Mitarbeiterin der Apotheke tippt die Verordnung in das Apothekensystem. Und jetzt geht der Spaß los: das System möchte wissen, bei welcher Krankenkasse unser Kunde versichert ist. Das sieht -bei uns- dann so aus:

<figure>

![](images/image-1024x512.png)

<figcaption>

Abfrage der Krankenkassennummer. Quelle: [PROKAS-Apotheken-Verwaltungs-System](https://www.awinta.de/warenwirtschaft/prokas/)

</figcaption>

</figure>

Dazu muss man wissen, dass jeder Teilnehmer im Gesundheitssystem ein "Institutionskennzeichen" hat. Abgekürzt ist das die "IK-Nummer". Glücklicherweise steht die auf jedem Rezept drauf. Dort heißt sie dann "Kostenträgerkennung" (Punkt 5):

<figure>

![](images/image-1-1024x725.png)

<figcaption>

Muster eines Rezepts, das für die gesetzliche Krankenversicherung gilt. Quelle: [Kassenärztliche Bundesvereinigung](https://www.kbv.de/html/27760.php)

</figcaption>

</figure>

Die Techniker hat bei uns (hier gibt es regionale Unterschiede) üblicherweise die IK-Nummer 106777503. Das tippen wir dann so ein. Und jetzt kommt der Teil, der bei unseren Patienten mit Medikamenten, die sie regelmäßig einnehmen, immer wieder zu Unmut führen. Unser System prüft die Rabattverträge und gibt die folgende Meldung aus:

<figure>

![](images/image-2.png)

<figcaption>

Dialog zur Auswahl des Rabattvertrags-Arzneimittels. Quelle: [PROKAS-Apotheken-Verwaltungs-System](https://www.awinta.de/warenwirtschaft/prokas/)

</figcaption>

</figure>

Im oberen Teil des Fensters seht ihr, was ursprünglich verordnet war: "Pen 1.5 Mega 1A Pharma". Die Techniker Krankenkasse hat aber einen Vertrag, der die Verordnung vom Arzt quasi überschreibt. Laut Krankenkasse haben wir die Wahl zwischen "Penhexal 1.5 Mega" und "Penicillin V Al 1.5m". Das sind die beiden Firmen mit denen die Krankenkassen einen Vertrag abgeschlossen hat. Und jetzt kommt der Haken: wenn wir in der Apotheke diese Firmen nicht benutzen, also an euch als unsere Kunden abgeben, verweigert die Krankenkasse die Bezahlung. Wir müssen uns also an diese Verträge halten, sonst bekommen wir die Verordnung des Arztes nicht bezahlt.

Das ist der Grund, warum ihr von uns manchmal ein anderes Arzneimittel bekommt als das, das der Arzt auf dem Rezept aufgeschrieben hat. Bei den meisten Arzneimitteln ist das auch kein Problem, denn alle Hersteller müssen nachweisen, dass sie die gleiche Wirksamkeit wie das Originalprodukt haben. In seltenen Fällen kann ein Austausch aber trotzdem problematisch sein. Auch das lässt sich lösen, sprengt aber den Umfang dieses Artikels und wird von mir in einem folgenden Artikel beschrieben.

Und bei allem Unmut, den die Verträge immer wieder hervorrufen, sparen sie den gesetzlichen Krankenkassen jedes Jahr 4,5 Milliarden Euro. Und das trägt -wie 2007 geplant- tatsächlich dazu bei, dass die Beiträge zur gesetzlichen Krankenversicherung nicht noch mehr steigen.

Zum Abschluss noch eine Bitte: manchmal kommt es vor, dass ihr eure Tablette teilen sollt. Bitte sagt uns das, wenn ihr bei uns seid. Denn es gibt Fälle bei denen die Tablette, die die Krankenkasse gerne hätte, nicht passt. Ein kleines Beispiel: beim Wirkstoff Allopurinol (ein Medikament gegen Gicht) gibt es die Stärken 100 und 300 Milligramm. Und bei den 300 Milligram gibt es Hersteller, die eine drittelbare Tablette produzieren. Wenn ihr nun die Tablette halbieren sollte, würde das nicht klappen. Gebt uns in solchen Fällen bitte Bescheid, dass ihr nur eine halbe Tablette einnehmen sollt. Dann können wir das richtige Medikament für euch auswählen.
