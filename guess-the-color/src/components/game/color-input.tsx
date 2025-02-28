import { DetailedHTMLProps, KeyboardEventHandler } from 'react'

export default function ColorInput({
  value,
  onChange,
  ...props
}: DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    switch (e.key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case 'a':
      case 'b':
      case 'c':
      case 'd':
      case 'e':
      case 'f':
      case 'A':
      case 'B':
      case 'C':
      case 'D':
      case 'E':
      case 'F':
        if ('value' in e.currentTarget! && e.currentTarget!.value.length === 6)
          e.preventDefault()
        return
      case 'Backspace':
      case 'Delete':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
      case 'Tab':
      case 'Enter':
        return
      default:
        e.preventDefault()
    }
  }

  return (
    <input
      type="text"
      value={value}
      minLength={6}
      maxLength={6}
      title="Enter a 6-digit hex color code"
      pattern="^#?([a-fA-F0-9]{6})$"
      required
      onChange={onChange}
      onKeyDown={handleKeyDown}
      {...props}
    />
  )
}
