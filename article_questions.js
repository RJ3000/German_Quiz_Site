const articleQuestions = [
    // Die

    // -e (98%)
    { article: "die", ending: "e", word: "Lampe", meaning: "lamp" },
    { article: "die", ending: "e", word: "Katze", meaning: "cat" },
    { article: "die", ending: "e", word: "Straße", meaning: "street" },
    { article: "die", ending: "e", word: "Reise", meaning: "journey" },
    { article: "die", ending: "e", word: "Sonne", meaning: "sun" },
    { article: "die", ending: "e", word: "Küche", meaning: "kitchen" },
    { article: "die", ending: "e", word: "Schule", meaning: "school" },
    { article: "die", ending: "e", word: "Tasche", meaning: "bag" },
    { article: "die", ending: "e", word: "Sprache", meaning: "language" },
    { article: "die", ending: "e", word: "Frage", meaning: "question" },

    // -ei
    { article: "die", ending: "ei", word: "Bäckerei", meaning: "bakery" },
    { article: "die", ending: "ei", word: "Polizei", meaning: "police" },
    { article: "die", ending: "ei", word: "Malerei", meaning: "painting" },
    { article: "die", ending: "ei", word: "Bücherei", meaning: "library" },
    { article: "die", ending: "ei", word: "Metzgerei", meaning: "butcher shop" },

    // -heit
    { article: "die", ending: "heit", word: "Freiheit", meaning: "freedom" },
    { article: "die", ending: "heit", word: "Schönheit", meaning: "beauty" },
    { article: "die", ending: "heit", word: "Gesundheit", meaning: "health" },
    { article: "die", ending: "heit", word: "Sicherheit", meaning: "safety" },
    { article: "die", ending: "heit", word: "Krankheit", meaning: "illness" },

    // -ie
    { article: "die", ending: "ie", word: "Biologie", meaning: "biology" },
    { article: "die", ending: "ie", word: "Philosophie", meaning: "philosophy" },
    { article: "die", ending: "ie", word: "Industrie", meaning: "industry" },
    { article: "die", ending: "ie", word: "Energie", meaning: "energy" },
    { article: "die", ending: "ie", word: "Therapie", meaning: "therapy" },

    // -ik
    { article: "die", ending: "ik", word: "Musik", meaning: "music" },
    { article: "die", ending: "ik", word: "Physik", meaning: "physics" },
    { article: "die", ending: "ik", word: "Logik", meaning: "logic" },
    { article: "die", ending: "ik", word: "Technik", meaning: "technology" },
    { article: "die", ending: "ik", word: "Statistik", meaning: "statistics" },

    // -ion
    { article: "die", ending: "ion", word: "Information", meaning: "information" },
    { article: "die", ending: "ion", word: "Produktion", meaning: "production" },
    { article: "die", ending: "ion", word: "Situation", meaning: "situation" },
    { article: "die", ending: "ion", word: "Station", meaning: "station" },
    { article: "die", ending: "ion", word: "Diskussion", meaning: "discussion" },

    // -in (female forms)
    { article: "die", ending: "in", word: "Lehrerin", meaning: "female teacher" },
    { article: "die", ending: "in", word: "Ärztin", meaning: "female doctor" },
    { article: "die", ending: "in", word: "Freundin", meaning: "female friend" },
    { article: "die", ending: "in", word: "Studentin", meaning: "female student" },
    { article: "die", ending: "in", word: "Köchin", meaning: "female cook" },

    // -keit
    { article: "die", ending: "keit", word: "Möglichkeit", meaning: "possibility" },
    { article: "die", ending: "keit", word: "Schwierigkeit", meaning: "difficulty" },
    { article: "die", ending: "keit", word: "Geschwindigkeit", meaning: "speed" },
    { article: "die", ending: "keit", word: "Freundlichkeit", meaning: "friendliness" },
    { article: "die", ending: "keit", word: "Pünktlichkeit", meaning: "punctuality" },

    // -schaft
    { article: "die", ending: "schaft", word: "Freundschaft", meaning: "friendship" },
    { article: "die", ending: "schaft", word: "Wirtschaft", meaning: "economy" },
    { article: "die", ending: "schaft", word: "Gesellschaft", meaning: "society" },
    { article: "die", ending: "schaft", word: "Mannschaft", meaning: "team" },
    { article: "die", ending: "schaft", word: "Botschaft", meaning: "message" },

    // -tät
    { article: "die", ending: "tät", word: "Universität", meaning: "university" },
    { article: "die", ending: "tät", word: "Qualität", meaning: "quality" },
    { article: "die", ending: "tät", word: "Realität", meaning: "reality" },
    { article: "die", ending: "tät", word: "Aktivität", meaning: "activity" },
    { article: "die", ending: "tät", word: "Identität", meaning: "identity" },

    // -ung
    { article: "die", ending: "ung", word: "Entscheidung", meaning: "decision" },
    { article: "die", ending: "ung", word: "Bewegung", meaning: "movement" },
    { article: "die", ending: "ung", word: "Entwicklung", meaning: "development" },
    { article: "die", ending: "ung", word: "Wohnung", meaning: "apartment" },
    { article: "die", ending: "ung", word: "Rechnung", meaning: "bill" },

    // -ur
    { article: "die", ending: "ur", word: "Natur", meaning: "nature" },
    { article: "die", ending: "ur", word: "Kultur", meaning: "culture" },
    { article: "die", ending: "ur", word: "Struktur", meaning: "structure" },
    { article: "die", ending: "ur", word: "Temperatur", meaning: "temperature" },
    { article: "die", ending: "ur", word: "Agentur", meaning: "agency" },

    // Female names
    { article: "die", ending: "", word: "Maria", meaning: "Maria (name)" },
    { article: "die", ending: "", word: "Anna", meaning: "Anna (name)" },

    // Female animals
    { article: "die", ending: "e", word: "Katze", meaning: "cat" },
    { article: "die", ending: "", word: "Maus", meaning: "mouse" },

    // Professions
    { article: "die", ending: "in", word: "Lehrerin", meaning: "teacher" },
    { article: "die", ending: "in", word: "Ärztin", meaning: "doctor" },
    { article: "die", ending: "in", word: "Krankenschwester", meaning: "nurse" },
    { article: "die", ending: "in", word: "Sekretärin", meaning: "secretary" },
    { article: "die", ending: "in", word: "Managerin", meaning: "manager" },
    { article: "die", ending: "in", word: "Köchin", meaning: "cook" },
    { article: "die", ending: "in", word: "Kellnerin", meaning: "waitress" },
    { article: "die", ending: "in", word: "Verkäuferin", meaning: "saleswoman" },
    { article: "die", ending: "in", word: "Studentin", meaning: "student" },
    { article: "die", ending: "in", word: "Professorin", meaning: "professor" },
    { article: "die", ending: "in", word: "Anwältin", meaning: "lawyer" },
    { article: "die", ending: "in", word: "Ingenieurin", meaning: "engineer" },
    { article: "die", ending: "in", word: "Architektin", meaning: "architect" },
    { article: "die", ending: "in", word: "Künstlerin", meaning: "artist" },
    { article: "die", ending: "in", word: "Schauspielerin", meaning: "actress" },
    { article: "die", ending: "in", word: "Sängerin", meaning: "singer" },
    { article: "die", ending: "in", word: "Tänzerin", meaning: "dancer" },
    { article: "die", ending: "in", word: "Polizistin", meaning: "police officer" },
    { article: "die", ending: "in", word: "Feuerwehrfrau", meaning: "firefighter" },
    { article: "die", ending: "in", word: "Bäckerin", meaning: "baker" },
    { article: "die", ending: "in", word: "Friseurin", meaning: "hairdresser" },
    { article: "die", ending: "in", word: "Journalistin", meaning: "journalist" },
    { article: "die", ending: "in", word: "Fotografin", meaning: "photographer" },
    { article: "die", ending: "in", word: "Apothekerin", meaning: "pharmacist" },
    { article: "die", ending: "in", word: "Psychologin", meaning: "psychologist" },

    // Abstract nouns
    { article: "die", ending: "e", word: "Liebe", meaning: "love" },
    { article: "die", ending: "ung", word: "Hoffnung", meaning: "hope" },
    { article: "die", ending: "heit", word: "Freiheit", meaning: "freedom" },

    // Common nouns without specific endings
    { article: "die", ending: "", word: "Frau", meaning: "woman" },
    { article: "die", ending: "", word: "Zeit", meaning: "time" },
    { article: "die", ending: "", word: "Arbeit", meaning: "work" },
    { article: "die", ending: "", word: "Welt", meaning: "world" },
    { article: "die", ending: "", word: "Hand", meaning: "hand" },

    // Der

    // -ant
    { article: "der", ending: "ant", word: "Konsonant", meaning: "consonant" },
    { article: "der", ending: "ant", word: "Elefant", meaning: "elephant" },
    { article: "der", ending: "ant", word: "Diamant", meaning: "diamond" },
    { article: "der", ending: "ant", word: "Hydrant", meaning: "hydrant" },
    { article: "der", ending: "ant", word: "Migrant", meaning: "migrant" },
    { article: "der", ending: "ant", word: "Praktikant", meaning: "intern" },
    { article: "der", ending: "ant", word: "Demonstrant", meaning: "demonstrator" },

    // -ast
    { article: "der", ending: "ast", word: "Gast", meaning: "guest" },
    { article: "der", ending: "ast", word: "Kontrast", meaning: "contrast" },
    { article: "der", ending: "ast", word: "Palast", meaning: "palace" },
    { article: "der", ending: "ast", word: "Ballast", meaning: "ballast" },
    { article: "der", ending: "ast", word: "Enthusiast", meaning: "enthusiast" },

    // -er (70%)
    { article: "der", ending: "er", word: "Lehrer", meaning: "teacher" },
    { article: "der", ending: "er", word: "Bäcker", meaning: "baker" },
    { article: "der", ending: "er", word: "Spieler", meaning: "player" },
    { article: "der", ending: "er", word: "Computer", meaning: "computer" },
    { article: "der", ending: "er", word: "Fehler", meaning: "mistake" },
    { article: "der", ending: "er", word: "Koffer", meaning: "suitcase" },
    { article: "der", ending: "er", word: "Teller", meaning: "plate" },
    { article: "der", ending: "er", word: "Kalender", meaning: "calendar" },
    { article: "der", ending: "er", word: "Körper", meaning: "body" },
    { article: "der", ending: "er", word: "Finger", meaning: "finger" },

    // -ent
    { article: "der", ending: "ent", word: "Student", meaning: "student" },
    { article: "der", ending: "ent", word: "Patient", meaning: "patient" },
    { article: "der", ending: "ent", word: "Präsident", meaning: "president" },
    { article: "der", ending: "ent", word: "Moment", meaning: "moment" },
    { article: "der", ending: "ent", word: "Kontinent", meaning: "continent" },

    // -ich
    { article: "der", ending: "ich", word: "Teppich", meaning: "carpet" },
    { article: "der", ending: "ich", word: "Bereich", meaning: "area" },
    { article: "der", ending: "ich", word: "Strich", meaning: "line" },
    { article: "der", ending: "ich", word: "Pfirsich", meaning: "peach" },
    { article: "der", ending: "ich", word: "Estrich", meaning: "screed" },

    // -ismus
    { article: "der", ending: "ismus", word: "Marxismus", meaning: "Marxism" },
    { article: "der", ending: "ismus", word: "Kapitalismus", meaning: "capitalism" },
    { article: "der", ending: "ismus", word: "Tourismus", meaning: "tourism" },
    { article: "der", ending: "ismus", word: "Optimismus", meaning: "optimism" },
    { article: "der", ending: "ismus", word: "Mechanismus", meaning: "mechanism" },

    // -ling
    { article: "der", ending: "ling", word: "Häftling", meaning: "prisoner" },
    { article: "der", ending: "ling", word: "Schmetterling", meaning: "butterfly" },
    { article: "der", ending: "ling", word: "Lehrling", meaning: "apprentice" },
    { article: "der", ending: "ling", word: "Zwilling", meaning: "twin" },
    { article: "der", ending: "ling", word: "Frühling", meaning: "spring" },
    { article: "der", ending: "ling", word: "Liebling", meaning: "darling" },

    // -us
    { article: "der", ending: "us", word: "Rhythmus", meaning: "rhythm" },
    { article: "der", ending: "us", word: "Zirkus", meaning: "circus" },
    { article: "der", ending: "us", word: "Virus", meaning: "virus" },
    { article: "der", ending: "us", word: "Kaktus", meaning: "cactus" },
    { article: "der", ending: "us", word: "Bus", meaning: "bus" },
    { article: "der", ending: "us", word: "Kursus", meaning: "course" },


    // -or
    { article: "der", ending: "or", word: "Motor", meaning: "motor" },
    { article: "der", ending: "or", word: "Direktor", meaning: "director" },
    { article: "der", ending: "or", word: "Autor", meaning: "author" },
    { article: "der", ending: "or", word: "Doktor", meaning: "doctor" },
    { article: "der", ending: "or", word: "Humor", meaning: "humor" },

 

    // Days of the week
    { article: "der", ending: "", word: "Montag", meaning: "Monday" },
    { article: "der", ending: "", word: "Dienstag", meaning: "Tuesday" },
    { article: "der", ending: "", word: "Mittwoch", meaning: "Wednesday" },
    { article: "der", ending: "", word: "Donnerstag", meaning: "Thursday" },
    { article: "der", ending: "", word: "Freitag", meaning: "Friday" },
    { article: "der", ending: "", word: "Samstag", meaning: "Saturday" },
    { article: "der", ending: "", word: "Sonntag", meaning: "Sunday" },

    // Months
    { article: "der", ending: "", word: "Januar", meaning: "January" },
    { article: "der", ending: "", word: "Februar", meaning: "February" },
    { article: "der", ending: "", word: "März", meaning: "March" },
    { article: "der", ending: "", word: "April", meaning: "April" },
    { article: "der", ending: "", word: "Mai", meaning: "May" },
    { article: "der", ending: "", word: "Juni", meaning: "June" },
    { article: "der", ending: "", word: "Juli", meaning: "July" },
    { article: "der", ending: "", word: "August", meaning: "August" },
    { article: "der", ending: "", word: "September", meaning: "September" },
    { article: "der", ending: "", word: "Oktober", meaning: "October" },
    { article: "der", ending: "", word: "November", meaning: "November" },
    { article: "der", ending: "", word: "Dezember", meaning: "December" },

    // Seasons
    { article: "der", ending: "", word: "Frühling", meaning: "spring" },
    { article: "der", ending: "", word: "Sommer", meaning: "summer" },
    { article: "der", ending: "", word: "Herbst", meaning: "autumn" },
    { article: "der", ending: "", word: "Winter", meaning: "winter" },

    // Directions
    { article: "der", ending: "", word: "Norden", meaning: "north" },
    { article: "der", ending: "", word: "Süden", meaning: "south" },
    { article: "der", ending: "", word: "Osten", meaning: "east" },
    { article: "der", ending: "", word: "Westen", meaning: "west" },

    // Some masculine animals
    { article: "der", ending: "", word: "Hund", meaning: "dog" },
    { article: "der", ending: "", word: "Wolf", meaning: "wolf" },
    { article: "der", ending: "", word: "Bär", meaning: "bear" },
    { article: "der", ending: "", word: "Löwe", meaning: "lion" },
    { article: "der", ending: "er", word: "Tiger", meaning: "tiger" },

    // Male professions
    { article: "der", ending: "er", word: "Lehrer", meaning: "teacher" },
    { article: "der", ending: "", word: "Arzt", meaning: "doctor" },
    { article: "der", ending: "er", word: "Krankenpfleger", meaning: "nurse" },
    { article: "der", ending: "är", word: "Sekretär", meaning: "secretary" },
    { article: "der", ending: "er", word: "Manager", meaning: "manager" },
    { article: "der", ending: "", word: "Koch", meaning: "cook" },
    { article: "der", ending: "er", word: "Kellner", meaning: "waiter" },
    { article: "der", ending: "er", word: "Verkäufer", meaning: "salesman" },
    { article: "der", ending: "", word: "Student", meaning: "student" },
    { article: "der", ending: "or", word: "Professor", meaning: "professor" },
    { article: "der", ending: "", word: "Anwalt", meaning: "lawyer" },
    { article: "der", ending: "eur", word: "Ingenieur", meaning: "engineer" },
    { article: "der", ending: "", word: "Architekt", meaning: "architect" },
    { article: "der", ending: "er", word: "Künstler", meaning: "artist" },
    { article: "der", ending: "er", word: "Schauspieler", meaning: "actor" },
    { article: "der", ending: "er", word: "Sänger", meaning: "singer" },
    { article: "der", ending: "er", word: "Tänzer", meaning: "dancer" },
    { article: "der", ending: "", word: "Polizist", meaning: "police officer" },
    { article: "der", ending: "mann", word: "Feuerwehrmann", meaning: "firefighter" },
    { article: "der", ending: "er", word: "Bäcker", meaning: "baker" },
    { article: "der", ending: "eur", word: "Friseur", meaning: "hairdresser" },
    { article: "der", ending: "", word: "Journalist", meaning: "journalist" },
    { article: "der", ending: "", word: "Fotograf", meaning: "photographer" },
    { article: "der", ending: "er", word: "Apotheker", meaning: "pharmacist" },
    { article: "der", ending: "e", word: "Psychologe", meaning: "psychologist" },
    { article: "der", ending: "er", word: "Maler", meaning: "painter" },
    { article: "der", ending: "er", word: "Schreiner", meaning: "carpenter" },
    { article: "der", ending: "er", word: "Elektriker", meaning: "electrician" },
    { article: "der", ending: "eur", word: "Chauffeur", meaning: "chauffeur" },
    { article: "der", ending: "", word: "Pilot", meaning: "pilot" },

    // Common nouns without specific endings
    { article: "der", ending: "", word: "Mann", meaning: "man" },
    { article: "der", ending: "", word: "Baum", meaning: "tree" },
    { article: "der", ending: "", word: "Tisch", meaning: "table" },
    { article: "der", ending: "", word: "Stuhl", meaning: "chair" },
    { article: "der", ending: "", word: "Apfel", meaning: "apple" },
    { article: "der", ending: "", word: "Wein", meaning: "wine" },
    { article: "der", ending: "", word: "Zug", meaning: "train" },
    { article: "der", ending: "", word: "Flug", meaning: "flight" },
    { article: "der", ending: "", word: "Beruf", meaning: "profession" },
    { article: "der", ending: "", word: "Schlüssel", meaning: "key" },

    // Das

    // -chen (diminutives)
    { article: "das", ending: "chen", word: "Häuschen", meaning: "little house" },
    { article: "das", ending: "chen", word: "Mädchen", meaning: "girl" },
    { article: "das", ending: "chen", word: "Kätzchen", meaning: "kitten" },
    { article: "das", ending: "chen", word: "Brötchen", meaning: "roll (bread)" },
    { article: "das", ending: "chen", word: "Tischchen", meaning: "small table" },
    { article: "das", ending: "chen", word: "Bäumchen", meaning: "small tree" },
    { article: "das", ending: "chen", word: "Städtchen", meaning: "small town" },
    { article: "das", ending: "chen", word: "Hündchen", meaning: "small dog" },
    { article: "das", ending: "chen", word: "Päckchen", meaning: "small package" },
    { article: "das", ending: "chen", word: "Stückchen", meaning: "small piece" },
    { article: "das", ending: "chen", word: "Blümchen", meaning: "small flower" },
    { article: "das", ending: "chen", word: "Lämpchen", meaning: "small lamp" },
    { article: "das", ending: "chen", word: "Törtchen", meaning: "small cake" },
    { article: "das", ending: "chen", word: "Bärchen", meaning: "little bear" },
    { article: "das", ending: "chen", word: "Pflänzchen", meaning: "small plant" },
    { article: "das", ending: "chen", word: "Sternchen", meaning: "little star" },
    { article: "das", ending: "chen", word: "Kärtchen", meaning: "small card" },
    { article: "das", ending: "chen", word: "Pärchen", meaning: "couple" },
    { article: "das", ending: "chen", word: "Fläschchen", meaning: "small bottle" },
    { article: "das", ending: "chen", word: "Körbchen", meaning: "small basket" },
    { article: "das", ending: "chen", word: "Wölkchen", meaning: "small cloud" },

    // -erl (Austrian/Bavarian diminutives)
    { article: "das", ending: "erl", word: "Zuckerl", meaning: "candy" },
    { article: "das", ending: "erl", word: "Sackerl", meaning: "small bag" },


    // -ett
    { article: "das", ending: "ett", word: "Ballett", meaning: "ballet" },
    { article: "das", ending: "ett", word: "Bett", meaning: "bed" },
    { article: "das", ending: "ett", word: "Duett", meaning: "duet" },
    { article: "das", ending: "ett", word: "Kabinett", meaning: "cabinet" },
    { article: "das", ending: "ett", word: "Quartett", meaning: "quartet" },

    // -lein (diminutives)
    { article: "das", ending: "lein", word: "Büchlein", meaning: "booklet" },
    { article: "das", ending: "lein", word: "Fräulein", meaning: "miss (unmarried woman)" },
    { article: "das", ending: "lein", word: "Tischlein", meaning: "small table" },
    { article: "das", ending: "lein", word: "Bächlein", meaning: "small stream" },
    { article: "das", ending: "lein", word: "Häuslein", meaning: "small house" },
    { article: "das", ending: "lein", word: "Schifflein", meaning: "small ship" },
    { article: "das", ending: "lein", word: "Vöglein", meaning: "small bird" },
    { article: "das", ending: "lein", word: "Bäumlein", meaning: "small tree" },
    { article: "das", ending: "lein", word: "Kindlein", meaning: "little child" },
    { article: "das", ending: "lein", word: "Gärtlein", meaning: "small garden" },
    { article: "das", ending: "lein", word: "Ringlein", meaning: "small ring" },
    { article: "das", ending: "lein", word: "Äuglein", meaning: "little eye" },
    { article: "das", ending: "lein", word: "Töchterlein", meaning: "little daughter" },
    { article: "das", ending: "lein", word: "Männlein", meaning: "little man" },
    { article: "das", ending: "lein", word: "Fischlein", meaning: "little fish" },
    { article: "das", ending: "lein", word: "Englein", meaning: "little angel" },
    { article: "das", ending: "lein", word: "Röslein", meaning: "little rose" },
    { article: "das", ending: "lein", word: "Schächtelein", meaning: "small box" },
    { article: "das", ending: "lein", word: "Hütlein", meaning: "small hat" },

    // -nis
    { article: "das", ending: "nis", word: "Ergebnis", meaning: "result" },
    { article: "das", ending: "nis", word: "Zeugnis", meaning: "certificate" },
    { article: "das", ending: "nis", word: "Verständnis", meaning: "understanding" },

    // -ment
    { article: "das", ending: "ment", word: "Argument", meaning: "argument" },
    { article: "das", ending: "ment", word: "Dokument", meaning: "document" },
    { article: "das", ending: "ment", word: "Instrument", meaning: "instrument" },
    { article: "das", ending: "ment", word: "Experiment", meaning: "experiment" },
    { article: "das", ending: "ment", word: "Testament", meaning: "testament" },
    { article: "das", ending: "ment", word: "Segment", meaning: "segment" },
    { article: "das", ending: "ment", word: "Element", meaning: "element" },
    { article: "das", ending: "ment", word: "Fundament", meaning: "foundation" },
    { article: "das", ending: "ment", word: "Supplement", meaning: "supplement" },
    { article: "das", ending: "ment", word: "Temperament", meaning: "temperament" },

    // -o
    { article: "das", ending: "o", word: "Auto", meaning: "car" },
    { article: "das", ending: "o", word: "Kino", meaning: "cinema" },
    { article: "das", ending: "o", word: "Büro", meaning: "office" },
    { article: "das", ending: "o", word: "Radio", meaning: "radio" },
    { article: "das", ending: "o", word: "Foto", meaning: "photo" },

    // -tum
    { article: "das", ending: "tum", word: "Eigentum", meaning: "property" },
    { article: "das", ending: "tum", word: "Christentum", meaning: "Christianity" },
    { article: "das", ending: "tum", word: "Wachstum", meaning: "growth" },

    // -um
    { article: "das", ending: "um", word: "Zentrum", meaning: "center" },
    { article: "das", ending: "um", word: "Museum", meaning: "museum" },
    { article: "das", ending: "um", word: "Studium", meaning: "studies" },
    { article: "das", ending: "um", word: "Datum", meaning: "date" },
    { article: "das", ending: "um", word: "Album", meaning: "album" },
    { article: "das", ending: "um", word: "Forum", meaning: "forum" },
    { article: "das", ending: "um", word: "Publikum", meaning: "audience" },
    { article: "das", ending: "um", word: "Aquarium", meaning: "aquarium" },
    { article: "das", ending: "um", word: "Gymnasium", meaning: "high school" },
    { article: "das", ending: "um", word: "Praktikum", meaning: "internship" },
    { article: "das", ending: "um", word: "Visum", meaning: "visa" },
    { article: "das", ending: "um", word: "Podium", meaning: "podium" },
    { article: "das", ending: "um", word: "Universum", meaning: "universe" },
    { article: "das", ending: "um", word: "Curriculum", meaning: "curriculum" },
    { article: "das", ending: "um", word: "Ultimatum", meaning: "ultimatum" },
    { article: "das", ending: "um", word: "Spektrum", meaning: "spectrum" },
    { article: "das", ending: "um", word: "Vakuum", meaning: "vacuum" },
    { article: "das", ending: "um", word: "Plenum", meaning: "plenary" },
    { article: "das", ending: "um", word: "Quantum", meaning: "quantum" },
    { article: "das", ending: "um", word: "Symposium", meaning: "symposium" },

    // -ma
    { article: "das", ending: "ma", word: "Thema", meaning: "theme" },
    { article: "das", ending: "ma", word: "Drama", meaning: "drama" },
    { article: "das", ending: "ma", word: "Klima", meaning: "climate" },
    { article: "das", ending: "ma", word: "Dilemma", meaning: "dilemma" },
    { article: "das", ending: "ma", word: "Panorama", meaning: "panorama" },
    { article: "das", ending: "ma", word: "Aroma", meaning: "aroma" },
    { article: "das", ending: "ma", word: "Komma", meaning: "comma" },
    { article: "das", ending: "ma", word: "Plasma", meaning: "plasma" },
    { article: "das", ending: "ma", word: "Stigma", meaning: "stigma" },
    { article: "das", ending: "ma", word: "Trauma", meaning: "trauma" },
    { article: "die", ending: "in", word: "Managerin", meaning: "female manager" },
    { article: "die", ending: "in", word: "Künstlerin", meaning: "female artist" },

];