export type GuessHint = 'exact' | 'higher' | 'lower' | 'bitHigher' | 'bitLower'

export type Guess = {
  v: string
  h: GuessHint
}

export type ColorGuess = {
  color: string
  values: {
    r1: Guess
    r2: Guess
    b1: Guess
    b2: Guess
    g1: Guess
    g2: Guess
  }
}
