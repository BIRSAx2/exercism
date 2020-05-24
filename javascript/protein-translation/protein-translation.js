//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rnaSequence) => {
  if (!rnaSequence) return []
  if(rnaSequence.match(/[^AUGC]/g)) throw new Error('Invalid codon')
  
  const codonToProtein = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  };

  let codons = rnaSequence.match(/[AUGC]{3}/g)
  if (codonToProtein[codons[0]] == "STOP") return []
  
  let proteins = []
  for (const codon of codons) {
    if (codonToProtein[codon] == 'STOP') break;
    proteins.push(codonToProtein[codon])
  }
  
  return proteins;
};