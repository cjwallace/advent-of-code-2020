type PassportField = "ecl" | "pid" | "eyr" | "hcl" | "byr" | "iyr" | "hgt";

type Passport = {
  [key in PassportField]: string;
};

type Validator = {
  [key in PassportField]: RegExp;
};

const passportRegex =
  /ecl:[a-z]*|pid:[0-9]*|eyr:[0-9]*|hcl:#?[0-9a-z]*|byr:[0-9]*|iyr:[0-9]*|cid:[0-9]*|hgt:[0-9a-z]*/g;

const fieldValidator: Validator = {
  byr: /^19[2-9][0-9]|200[0-2]$/,
  iyr: /^20[1-2][0-9]$/,
  eyr: /^20[2-3][0-9]$/,
  hgt: /^(?:1[5-8][0-9]|19[0-3])cm$|^(?:59|6[0-9]|7[0-6])in$/,
  hcl: /^#[0-9a-f]{6}$/,
  ecl: /^amb|blu|brn|gry|grn|hzl|oth$/,
  pid: /^[0-9]{9}$/,
};

// part A

function isPassport(id: Passport | Record<string, string>): boolean {
  return Object.keys(fieldValidator).every((k) => id.hasOwnProperty(k));
}

function parseFields(
  passportString: string,
): Passport | Record<string, string> {
  const fields = passportString.match(passportRegex) || [];
  return fields
    .map((kv) => kv.split(":"))
    .map((kv) => ({ [kv[0]]: kv[1] }))
    .reduce((acc, cur) => ({ ...acc, ...cur }));
}

function checkPassports(input: string): Passport[] {
  return input.split("\n\n")
    .map(parseFields)
    .filter((id): id is Passport => isPassport(id));
}

export function countPassports(input: string) {
  return checkPassports(input).length;
}

// part B

function validateFields(passport: Passport) {
  // mutation!
  Object.keys(passport)
    .forEach((k) =>
      passport[k as PassportField] = (passport[k as PassportField].match(
        fieldValidator[k as PassportField],
      ) || [""])[0]
    );
  return passport;
}

function isValidPassport(passport: Passport): boolean {
  return Object.keys(fieldValidator).every((k) =>
    passport[k as PassportField].length > 0
  );
}

export function countValidatedPassports(input: string) {
  return checkPassports(input)
    .map((x) => validateFields(x))
    .filter((x) => isValidPassport(x))
    .length;
}
