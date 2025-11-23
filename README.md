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

## Sådan henter og kører du projektet

Denne vejledning forklarer trin for trin, hvordan du sætter projektet op.

---

### 1. Installér Node.js
For at køre projektet skal du have Node.js installeret.

1. Gå til https://nodejs.org/en
2. Download
3. Installer og genstart computeren

---

### 2. Hent projektet
Du kan hente projektet på to måder:

**A. Download som ZIP**
- Gå til GitHub
- Klik på **Code**
- Vælg **Download ZIP**
- Pak ZIP-filen ud på din computer

**B. Klon projektet (for udviklere)**  

git clone https://github.com/signeamalie/dykonprojekt.git

---

### 3. Åbn projektet i Visual Studio Code
Download VS Code her: https://code.visualstudio.com/

Åbn projektmappen ved at vælge enten:
- **Start -> Open**
- **File -> Open Folder**

---

### 4. Åbn terminalen i VS Code
Gør følgende:
- Gå til **Terminal -> New Terminal**

Dette åbner en terminal i projektets mappe.

---

### 5. Kør kommandoer for at starte projektet
Kør disse kommandoer i den viste rækkefølge:


rm -rf node_modules <br>
rm package-lock.json <br>
npm install <br>
npm run dev

I terminalen vises et link, fx:
http://localhost:5178/


Klik på linket for at åbne projektet i din browser.
