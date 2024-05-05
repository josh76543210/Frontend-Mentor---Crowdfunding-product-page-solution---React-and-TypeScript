function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-commissioner min-h-screen bg-hero-mobile sm:bg-hero-desktop bg-no-repeat bg-contain flex flex-col">
      {children}
    </div>
  );
}

export default Page;
