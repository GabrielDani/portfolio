interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center space-y-6 p-4 w-full">
      {children}
    </section>
  );
}
