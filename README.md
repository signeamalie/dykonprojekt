# Dykon - Interaktiv dyneguide

En webprototype udviklet i **React**, **TypeScript** og **Vite**.  
Løsningen guider brugeren gennem et spørgeflow og viser relevante dyner baseret på brugerens præferencer.  
Brugeren kan også sammenligne to produkter side om side.

---

## Projektets formål

Formålet er at udvikle et interaktivt digitalt værktøj, der hjælper brugeren med at finde den rette dyne.  
Løsningen er opbygget efter **Atomic Design-principper** og anvender data fra JSON-filer.  
Projektet er udviklet som en del af **3. semester på Multimediedesigneruddannelsen** med fokus på moderne webudvikling.

---

## Funktioner

- Spørgeflow baseret på JSON-data  
- Dynamisk filtrering af produkter  
- Sammenligningsside med billeder, pris og badges  
- Atomic Design komponentstruktur  
- Global statehåndtering via CompareContext  
- Responsivt layout på både desktop og mobil  

---


## Projektet anvender:

- React  
- TypeScript  
- Vite  
- SCSS  
- React Router  
- ESLint  

# Sådan henter og kører du projektet

Denne vejledning er skrevet, så også personer uden teknisk erfaring kan sætte projektet op.

1. Installér Node.js

Node.js er nødvendigt for at køre projektet.
Download det her:
https://nodejs.org/en

Installer programmet og genstart computeren.

2. Hent projektet

Der er to måder:

A. Hent som ZIP<br>Klik på “Code” på GitHub <br> Vælg “Download ZIP” <br> Pak mappen ud på din computer

B. Klon projektet (for udviklere) <br> git clone https://github.com/signeamalie/dykonprojekt.git

3. Åbn projektet i Visual Studio Code <br>
Download VS Code: <br> https://code.visualstudio.com/ <br> Åbn projektmappen via: <br> Start -> Open <b> eller <br> File -> Open Folder

4. <br> Åbn terminalen i VS Code: <br> Terminal -> New Terminal <br> Kør i denne rækkefølge: 

 <br> <br> rm -rf node_modules <br> rm package-lock.json <br> npm install <br> npm run dev


I terminalen vises et link, fx:
http://localhost:5183/


Klik på linket for at åbne projektet i din browser.