function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-8 sm:gap-4 mx-auto w-full max-w-3xl mb-10 mt-40 sm:mt-12 lg:mt-36 xl:mt-56">
      {children}
    </main>
  );
}

export default Main;
