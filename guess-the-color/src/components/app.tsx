import ColorDisplay from './game/color-display'
import ColorInput from './game/color-input'
import ColorGuessHistory from './game/color-guess-history'
import { useColorGameStore } from '../stores/useColorGame'
import Navbar from './navbar'
import { useEffect } from 'react'
import confetti from 'canvas-confetti'

export default function App() {
  const toGuessColor = useColorGameStore((state) => state.toGuessColor)
  const history = useColorGameStore((state) => state.history)
  const color = useColorGameStore((state) => state.color)
  const setColor = useColorGameStore((state) => state.setColor)
  const registerNewGuess = useColorGameStore((state) => state.registerNewGuess)
  const attemptsLeft = useColorGameStore((state) => state.attemptsLeft)
  const gameState = useColorGameStore((state) => state.gameState)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (color.length !== 6 || gameState !== 'playing') return

    if (history.map((h) => h.color).includes(color)) {
      alert('You already guessed this color!')
      return
    }

    registerNewGuess(color)
    setColor('')
  }

  useEffect(() => {
    if (gameState === 'lost') {
      alert('You lost! The color was: ' + '#' + toGuessColor.color)
    } else if (gameState === 'won') {
      const interval = setInterval(() => {
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 },
        })
      }, 500)

      setTimeout(() => {
        clearInterval(interval)
      }, 1500)
    }
  }, [gameState, toGuessColor.color])

  return (
    <>
      <Navbar />
      <main className="set-width">
        <section className="flex justify-between items-center space-x-8">
          <ColorDisplay
            title="last guess"
            color={history.length > 0 ? '#' + history[0]?.color : undefined}
          />
          <ColorDisplay
            title="guess this color"
            color={'#' + toGuessColor.color}
          />
        </section>

        <section className="mt-6 text-center">
          <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
            <ColorInput
              value={color}
              onChange={(e) => setColor(e.target.value)}
              disabled={gameState !== 'playing'}
            />
            <button disabled={gameState !== 'playing'}>Check</button>
          </form>
        </section>

        <section className="mt-4 text-center h-4">
          <p>{attemptsLeft !== 5 && ` Remaining attempts: ${attemptsLeft}`}</p>
        </section>

        <section className="pb-8">
          <h2 className="text-center font-semibold mt-12 mb-8">
            Guess history
          </h2>
          <ColorGuessHistory guesses={history} />
        </section>
      </main>
    </>
  )
}
