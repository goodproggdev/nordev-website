// Prima questo componente montava anche l'immagine "preventivatore.png"
// dentro un ContainerScroll (framer-motion: useScroll + useTransform,
// ricalcolati ad ogni tick di scroll) subito sotto l'Hero — di fatto il
// componente più pesante lato rendering della home, caricato su ogni
// visita. Su richiesta è stata rimossa da qui e spostata come progetto in
// components/our-projects.tsx; senza l'immagine e il container animato,
// questo blocco è ora puro testo, non serve più "use client" né
// next/image/framer-motion, quindi resta un Server Component leggero.
export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden bg-background-dark pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-extralight text-frost-white tracking-tighter leading-tight">
            Sviluppo di piattaforme <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary to-aurora-cyan">
            Dati & Performance
            </span>
        </h2>
      </div>
    </div>
  );
}
