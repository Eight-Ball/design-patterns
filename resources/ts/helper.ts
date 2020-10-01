export function print(message: string): void {
  document.body.append(message)
  newLine()
}

export function newLine(): void {
  document.body.appendChild(document.createElement('br'))
}
