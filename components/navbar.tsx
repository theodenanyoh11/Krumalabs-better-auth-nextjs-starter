import AuthButtons from "@/components/auth-buttons";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<div className="flex items-center">
						<Logo />
					</div>
					<div className="flex items-center gap-4">
						<nav className="hidden md:flex items-center gap-6">
							<a href="/features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
								Features
							</a>
							<a href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
								Pricing
							</a>
							<a href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
								Documentation
							</a>
						</nav>
						<AuthButtons />
					</div>
				</div>
			</div>
		</header>
	);
}
