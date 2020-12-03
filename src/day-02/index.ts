type Range = {
  low: number;
  high: number;
};

type Rule = Range & {
  char: string;
};

function parseRange(rangeString: string): Range {
  // a rangeString looks like "1-3"
  const [low, high] = rangeString.split("-").map((x) => parseInt(x));
  return { low, high };
}

function createRule(ruleString: string): Rule {
  // a ruleString looks like "1-3 a"
  const [range, char] = ruleString.split(" ");
  return { ...parseRange(range), char };
}

function countChars(input: string, char: string): number {
  return (input.match(new RegExp(char, "g")) || []).length;
}

function applyOldRule(rule: Rule, input: string): boolean {
  const nChars = countChars(input, rule.char);
  return (nChars >= rule.low) && (nChars <= rule.high);
}

function applyNewRule(rule: Rule, input: string): boolean {
  const lowMatch = input[rule.low - 1] === rule.char;
  const highMatch = input[rule.high - 1] === rule.char;
  return lowMatch !== highMatch;
}

function countValidPasswords(
  applyRule: (rule: Rule, input: string) => boolean,
  input: string[],
): number {
  const pairs = input.map((x) => x.split(": "));
  const valid = pairs.filter((x) => applyRule(createRule(x[0]), x[1]));
  return valid.length;
}

export const countOldValidPasswords = (input: string[]): number => {
  return countValidPasswords(applyOldRule, input);
};

export const countNewValidPasswords = (input: string[]): number => {
  return countValidPasswords(applyNewRule, input);
};
