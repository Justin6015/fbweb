# Forex bots

- <Badge type="info" text="Jahr: 2019 - 2021" />
  <Badge type="tip" text="Privat" />

Entwicklung von Forex (Devisen) Trading Bots.  
Als Programmier Anfänger: Alles in einer Datei (1973 Zeilen Code).  
Viel über Programmieren gelernt durch eigenes testen und lesen von mitgelieferten Bibliotheken.

## Technologien

- MetaTrader
  - mql4 (.mq4)
  - mql5 (.mq5)
  - Backtests mit Integrierter Backtest Software.
  - Forward Tests mit Echtzeit Daten
- Strato Server (Windows Remote Desktop)
- Telegram Benachrichtigung Bot (mit Screenshot und Zusammenfassung des Signals)

Foto von Forex-Bots in 56 verschiedenen Paaren:
![Picture Forex Bot in MetaTrade4](onPointSignal-Bot-parallel.jpg)

Screenshot von einem dokumentierten Entry-Signal in der Research-Phase. Mit Text-Output vom Bot und manuellen Notizen:
![Screenshot research](2019-12-12%2020.38%20GBPCHF%20M1%20Bullish%20Harami%20Zone%20auf%20KF%20,%20BE%20raus.jpg)

## Beispiel: Entry und Close

Eigene Orderverwaltung implementiert (Paper handel im Metatrade entsprachen nicht meinen Anforderungen)

1. Bot findet Entry: Setzt eine virtuelle Position, speichert diesen Screenshot ab, sendet eine Telegram Nachricht mit dem Screenshot und den Eckdaten.
   ![Screenshot Entry Virtuelle Order](2021.01.11%2014.58.01%20EURCHF%20M1%20Sell%20Entry.gif)
2. Bot schließt virtuelle Position und berechnet Gewinn/Verlust. Und speichert diesen Screenshot ab.
   ![Screenshot Entry Virtuelle Order](2021.01.11%2015.26.32%20EURCHF%20M1%20Sell%20Close.gif)
