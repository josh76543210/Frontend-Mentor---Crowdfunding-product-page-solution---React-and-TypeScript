function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-4 mx-auto w-full max-w-96 mb-10 mt-40 sm:mt-12 lg:mt-36 xl:mt-56">
      {children}
    </main>
  );
}

export default Main;
