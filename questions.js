const verbDatabase = [
  {
    verb: "sein",
    tags: ["most_common_20", "most_common_50", "irregular", "a1_level"],
    conjugations: {
      present: {
        ich: "bin",
        du: "bist",
        "er/sie/es": "ist",
        wir: "sind",
        ihr: "seid",
        "sie/Sie": "sind"
      }
    }
  },
  // Add more verbs here...
];

function getQuestionsForDifficulty(difficulty, tense) {
  const verbs = verbDatabase.filter(verb => verb.tags.includes(difficulty));
  return verbs.flatMap(verb => {
    const allConjugations = Object.values(verb.conjugations[tense]);
    const uniqueConjugations = [...new Set(allConjugations)];
    
    return Object.entries(verb.conjugations[tense]).map(([pronoun, conjugation]) => ({
      id: `${verb.verb}_${pronoun}`,
      pronoun: pronoun,
      verb: verb.verb,
      options: uniqueConjugations,
      correct: conjugation
    }));
  });
}