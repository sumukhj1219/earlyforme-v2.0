import Link from "next/link"
import { instrument_serif } from "~/components/common/fonts/fonts"
import { Button } from "~/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-4">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className={`text-4xl ${instrument_serif.className} text-muted-foreground`}>
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  )
}
