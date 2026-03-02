import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export function BookingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="hidden md:flex items-center gap-2 border-l pl-4 ml-2">
            <span className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">
              SabiWorks
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-500 font-medium">
          <ShieldCheck className="h-5 w-5" />
          <span className="hidden sm:inline">Secure Booking</span>
        </div>
      </div>
    </header>
  );
}
