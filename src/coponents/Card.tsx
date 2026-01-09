

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-10">
      {children}
    </div>
  )
}
