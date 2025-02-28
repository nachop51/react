import { useColorGameStore } from '../stores/useColorGame'

export default function Navbar() {
  const resetGame = useColorGameStore((s) => s.resetGame)

  return (
    <header className="w-full border-b mb-12">
      <div className="set-width flex justify-between items-center py-2 sm:py-4">
        <h1 className="text-3xl font-semibold">Guess the color 🎨</h1>

        <div className="flex items-center space-x-4">
          <button onClick={resetGame}>New game</button>
        </div>
      </div>
    </header>
  )
}
