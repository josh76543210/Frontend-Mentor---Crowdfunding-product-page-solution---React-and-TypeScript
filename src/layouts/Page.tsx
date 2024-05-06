function Page({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-commissioner min-h-screen bg-hero-mobile sm:bg-hero-desktop bg-no-repeat bg-contain flex flex-col px-6 bg-slate-50 relative z-10 
      before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-gradient-to-b
      before:from-black
      before:from-5%
      before:to-transparent
      before:to-30%
      before:opacity-75
      before:z-[-5]"
    >
      {children}
    </div>
  );
}

export default Page;
