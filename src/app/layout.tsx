import './globals.css'

export const metadata = {
  title: 'Todolist',
  description: 'Simple todolist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-slate-100 container mx-auto p-4">
        {children}
      </body>
    </html>
  )
}
