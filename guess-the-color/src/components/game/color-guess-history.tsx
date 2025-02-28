import { ColorGuess, Guess, GuessHint } from '../../lib/types'

const SquareInput = ({
  value,
  hint,
}: {
  value: Guess['v']
  hint: GuessHint
}) => {
  let hintIcon = ''

  switch (hint) {
    case 'exact':
      hintIcon = '✅'
      break
    case 'higher':
      hintIcon = '⏫'
      break
    case 'lower':
      hintIcon = '⏬'
      break
    case 'bitHigher':
      hintIcon = '🔼'
      break
    case 'bitLower':
      hintIcon = '🔽'
      break
  }

  return (
    <div className="flex flex-col w-8 h-8 border-2 border-[var(--pc)] items-center justify-center rounded-lg p-8 select-none">
      <p className="font-lg font-semibold">{value}</p>
      <span>{hintIcon}</span>
    </div>
  )
}

type ColorGuessItemProps = {
  guess: ColorGuess['values']
}

function ColorGuessItem({ guess }: ColorGuessItemProps) {
  return (
    <ul className="flex gap-2">
      {Object.values(guess).map((value, idx) => (
        <li key={idx}>
          <SquareInput value={value.v} hint={value.h} />
        </li>
      ))}
    </ul>
  )
}

interface ColorGuessHistoryProps {
  guesses: ColorGuess[]
}

export default function ColorGuessHistory({ guesses }: ColorGuessHistoryProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {guesses.length > 0 ? (
        guesses.map(({ values }, idx) => (
          <ColorGuessItem key={idx} guess={values} />
        ))
      ) : (
        <p>No guesses yet. Try to guess the color above!</p>
      )}
    </div>
  )
}
