import type { ReactNode } from "react"
import type { PreviewType } from "@/lib/services"
import {
	MapPin,
	Star,
	Heart,
	MessageCircle,
	Search,
	Palette,
	Smartphone,
	ShoppingBag,
	BarChart3,
	Users,
	TrendingUp,
	Bookmark,
	Share2,
} from "lucide-react"

/* ---------- Frame condivisi ---------- */

function BrowserFrame({ children, url }: { children: ReactNode; url: string }) {
	return (
		<div className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-2xl overflow-hidden">
			<div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
				<span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
				<span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
				<span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
				<div className="ml-4 flex-1 max-w-xs rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] text-text-muted truncate">
					{url}
				</div>
			</div>
			<div className="p-6 md:p-8">{children}</div>
		</div>
	)
}

function PhoneFrame({ children }: { children: ReactNode }) {
	return (
		<div className="mx-auto w-full max-w-[300px] rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-2xl overflow-hidden">
			<div className="flex items-center justify-between px-6 py-2.5 text-[10px] text-arctic-mist font-medium">
				<span>9:41</span>
				<div className="flex items-center gap-1">
					<span className="w-3 h-2 rounded-sm bg-white/20" />
					<span className="w-3 h-2 rounded-sm bg-white/20" />
					<span className="w-4 h-2 rounded-sm bg-white/30" />
				</div>
			</div>
			<div className="p-4 pb-6 min-h-[340px]">{children}</div>
			<div className="flex justify-center pb-2">
				<div className="w-28 h-1 rounded-full bg-white/20" />
			</div>
		</div>
	)
}

/* ---------- Mockup per categoria ---------- */

function WebsiteMock() {
	return (
		<BrowserFrame url="nordevit.it/tuo-progetto">
			<div className="space-y-6">
				<div className="flex items-center gap-3">
					<div className="h-8 w-8 rounded-lg bg-primary/20 border border-primary/20" />
					<div className="h-3 w-24 rounded-full bg-white/10" />
					<div className="ml-auto flex gap-2">
						<div className="h-3 w-10 rounded-full bg-white/10" />
						<div className="h-3 w-10 rounded-full bg-white/10" />
						<div className="h-3 w-14 rounded-full bg-primary/20" />
					</div>
				</div>
				<div className="space-y-3">
					<div className="h-5 w-2/3 rounded-full bg-white/10 animate-pulse" />
					<div className="h-3 w-full rounded-full bg-white/5" />
					<div className="h-3 w-5/6 rounded-full bg-white/5" />
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					<div className="h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-aurora-cyan/10 border border-white/5 animate-pulse" />
					<div className="h-24 rounded-2xl bg-white/[0.04] border border-white/5" />
					<div className="hidden md:block h-24 rounded-2xl bg-gradient-to-br from-aurora-purple/10 to-primary/10 border border-white/5" />
				</div>
				<div className="flex gap-3">
					<div className="h-9 w-28 rounded-full bg-primary/20 border border-primary/20" />
					<div className="h-9 w-24 rounded-full bg-white/5 border border-white/10" />
				</div>
			</div>
		</BrowserFrame>
	)
}

function EcommerceMock() {
	const products = [
		{ price: "€ 29" },
		{ price: "€ 54" },
		{ price: "€ 18" },
	]
	return (
		<BrowserFrame url="tuo-negozio.myshopify.com">
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div className="h-3 w-28 rounded-full bg-white/10" />
					<div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10">
						<ShoppingBag className="w-4 h-4 text-primary" />
						<span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 rounded-full bg-primary text-[9px] font-bold text-background-dark">3</span>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-4">
					{products.map((p, i) => (
						<div key={i} className="rounded-2xl bg-white/[0.04] border border-white/5 overflow-hidden">
							<div className="h-16 bg-gradient-to-br from-primary/15 to-aurora-cyan/10" />
							<div className="p-2.5 space-y-1.5">
								<div className="h-2 w-4/5 rounded-full bg-white/10" />
								<div className="text-[11px] font-bold text-primary">{p.price}</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex items-center justify-between rounded-2xl bg-white/[0.04] border border-white/5 p-4">
					<div className="space-y-1.5">
						<div className="h-2.5 w-24 rounded-full bg-white/10" />
						<div className="h-2 w-16 rounded-full bg-white/5" />
					</div>
					<div className="h-8 w-24 rounded-full bg-primary/20 border border-primary/20" />
				</div>
			</div>
		</BrowserFrame>
	)
}

function MapsMock() {
	return (
		<BrowserFrame url="google.com/maps/tuaazienda">
			<div className="space-y-4">
				<div className="relative h-40 rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03]">
					<div
						className="absolute inset-0 opacity-40"
						style={{
							backgroundImage:
								"radial-gradient(rgba(125,211,252,0.35) 1px, transparent 1px)",
							backgroundSize: "14px 14px",
						}}
					/>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] flex flex-col items-center">
						<div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background-dark shadow-[0_0_20px_rgba(125,211,252,0.5)]">
							<MapPin className="w-5 h-5" />
						</div>
						<div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1" />
					</div>
				</div>
				<div className="flex items-start justify-between gap-4 rounded-2xl bg-white/[0.04] border border-white/5 p-4">
					<div className="space-y-2">
						<div className="h-3 w-32 rounded-full bg-white/10" />
						<div className="flex items-center gap-1">
							{Array.from({ length: 5 }).map((_, i) => (
								<Star key={i} className="w-3 h-3 fill-primary text-primary" />
							))}
							<span className="text-[11px] text-arctic-mist ml-1">4.9 (128)</span>
						</div>
						<div className="h-2 w-40 rounded-full bg-white/5" />
					</div>
					<span className="shrink-0 px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20 text-[10px] font-bold uppercase tracking-wide text-green-300">
						Aperto ora
					</span>
				</div>
			</div>
		</BrowserFrame>
	)
}

function SocialMock() {
	return (
		<PhoneFrame>
			<div className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/40 to-aurora-purple/40 border border-white/10" />
					<div className="flex-1 space-y-1.5">
						<div className="h-2.5 w-24 rounded-full bg-white/15" />
						<div className="h-2 w-16 rounded-full bg-white/5" />
					</div>
				</div>
				<div className="flex justify-between text-center">
					{[["1.2k", "Post"], ["8.4k", "Follower"], ["312", "Following"]].map(([n, l], i) => (
						<div key={i} className="space-y-0.5">
							<div className="text-xs font-bold text-frost-white">{n}</div>
							<div className="text-[9px] text-text-muted uppercase tracking-wide">{l}</div>
						</div>
					))}
				</div>
				<div className="grid grid-cols-3 gap-1.5">
					{Array.from({ length: 6 }).map((_, i) => (
						<div
							key={i}
							className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-aurora-cyan/10 border border-white/5"
						/>
					))}
				</div>
				<div className="rounded-2xl bg-white/[0.04] border border-white/5 p-3 space-y-2">
					<div className="h-2 w-full rounded-full bg-white/10" />
					<div className="h-2 w-3/4 rounded-full bg-white/5" />
					<div className="flex items-center gap-4 pt-1 text-arctic-mist">
						<span className="flex items-center gap-1 text-[10px]"><Heart className="w-3.5 h-3.5" /> 214</span>
						<span className="flex items-center gap-1 text-[10px]"><MessageCircle className="w-3.5 h-3.5" /> 38</span>
						<Share2 className="w-3.5 h-3.5 ml-auto" />
					</div>
				</div>
			</div>
		</PhoneFrame>
	)
}

function AnalyticsMock() {
	const bars = [40, 65, 30, 80, 55, 90, 45]
	const tiles = [
		{ icon: Users, label: "Visitatori", value: "12.4k" },
		{ icon: BarChart3, label: "Sessioni", value: "18.7k" },
		{ icon: TrendingUp, label: "Conversioni", value: "+24%" },
	]
	return (
		<BrowserFrame url="analytics.tuosito.it">
			<div className="space-y-6">
				<div className="grid grid-cols-3 gap-3">
					{tiles.map((t, i) => (
						<div key={i} className="rounded-2xl bg-white/[0.04] border border-white/5 p-3 space-y-2">
							<t.icon className="w-4 h-4 text-primary" />
							<div className="text-sm font-bold text-frost-white">{t.value}</div>
							<div className="text-[9px] text-text-muted uppercase tracking-wide truncate">{t.label}</div>
						</div>
					))}
				</div>
				<div className="rounded-2xl bg-white/[0.04] border border-white/5 p-4">
					<div className="flex items-end gap-2 h-24">
						{bars.map((h, i) => (
							<div
								key={i}
								className="flex-1 rounded-t-md bg-gradient-to-t from-primary/20 to-aurora-cyan/50"
								style={{ height: `${h}%` }}
							/>
						))}
					</div>
				</div>
			</div>
		</BrowserFrame>
	)
}

function SeoMock() {
	const results = [
		{ pos: 1, title: "iltuobrand.it — Home", best: true },
		{ pos: 2, title: "Recensioni iltuobrand" },
		{ pos: 3, title: "iltuobrand.it/servizi" },
	]
	return (
		<BrowserFrame url="google.com/search?q=iltuobrand">
			<div className="space-y-6">
				<div className="flex items-center gap-3 rounded-full bg-white/[0.04] border border-white/10 px-4 py-2.5">
					<Search className="w-4 h-4 text-arctic-mist shrink-0" />
					<div className="h-2.5 w-1/2 rounded-full bg-white/10" />
				</div>
				<div className="space-y-3">
					{results.map((r) => (
						<div
							key={r.pos}
							className={`flex items-center gap-3 rounded-2xl border p-3 ${
								r.best
									? "bg-primary/10 border-primary/30"
									: "bg-white/[0.03] border-white/5"
							}`}
						>
							<span
								className={`flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold shrink-0 ${
									r.best ? "bg-primary text-background-dark" : "bg-white/10 text-arctic-mist"
								}`}
							>
								{r.pos}
							</span>
							<div className="flex-1 space-y-1.5">
								<div className={`h-2.5 rounded-full ${r.best ? "w-3/4 bg-primary/40" : "w-2/3 bg-white/10"}`} />
								<div className="h-2 w-1/2 rounded-full bg-white/5" />
							</div>
							{r.best && (
								<span className="shrink-0 text-[9px] font-bold uppercase tracking-wide text-primary">Tu sei qui</span>
							)}
						</div>
					))}
				</div>
			</div>
		</BrowserFrame>
	)
}

function DesignMock() {
	const swatches = ["bg-primary", "bg-aurora-cyan", "bg-aurora-purple", "bg-white/20"]
	return (
		<BrowserFrame url="brandbook.iltuobrand.it">
			<div className="space-y-6">
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10">
						<Palette className="w-5 h-5 text-primary" />
					</div>
					<div className="h-3 w-32 rounded-full bg-white/10" />
				</div>
				<div className="flex gap-3">
					{swatches.map((c, i) => (
						<div key={i} className={`h-12 w-12 rounded-2xl border border-white/10 ${c}`} />
					))}
				</div>
				<div className="space-y-3">
					<div className="h-6 w-2/3 rounded-full bg-white/15" />
					<div className="h-3 w-full rounded-full bg-white/5" />
					<div className="h-3 w-4/5 rounded-full bg-white/5" />
				</div>
				<div className="flex gap-3">
					<div className="h-9 w-28 rounded-full bg-primary/20 border border-primary/20" />
					<div className="h-9 w-9 rounded-full bg-white/5 border border-white/10" />
					<div className="h-9 w-9 rounded-full bg-white/5 border border-white/10" />
				</div>
			</div>
		</BrowserFrame>
	)
}

function AppMock() {
	return (
		<PhoneFrame>
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<div className="h-3 w-20 rounded-full bg-white/15" />
					<Bookmark className="w-4 h-4 text-primary" />
				</div>
				<div className="space-y-2.5">
					{Array.from({ length: 3 }).map((_, i) => (
						<div key={i} className="flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-white/5 p-3">
							<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-aurora-cyan/10 border border-white/5 flex items-center justify-center">
								<Smartphone className="w-4 h-4 text-primary/70" />
							</div>
							<div className="flex-1 space-y-1.5">
								<div className="h-2.5 w-3/4 rounded-full bg-white/10" />
								<div className="h-2 w-1/2 rounded-full bg-white/5" />
							</div>
						</div>
					))}
				</div>
				<div className="flex items-center justify-between rounded-full bg-white/[0.04] border border-white/5 px-4 py-2.5">
					{[0, 1, 2, 3].map((i) => (
						<div
							key={i}
							className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-white/15"}`}
						/>
					))}
				</div>
			</div>
		</PhoneFrame>
	)
}

/* ---------- Switch ---------- */

export function ServicePreviewMock({ type }: { type: PreviewType }) {
	switch (type) {
		case "ecommerce":
			return <EcommerceMock />
		case "maps":
			return <MapsMock />
		case "social":
			return <SocialMock />
		case "analytics":
			return <AnalyticsMock />
		case "seo":
			return <SeoMock />
		case "design":
			return <DesignMock />
		case "app":
			return <AppMock />
		case "website":
		default:
			return <WebsiteMock />
	}
}
