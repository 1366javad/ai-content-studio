import SignUpForm from "@/app/_components/SignUpForm";

function page() {
  return (
    <main className="flex-1 p-6">
      <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-300 relative overflow-hidden bg-[#F8FAFC] dark:bg-gray-950">
        {/* Background decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF6B6B]/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3B3CFF]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Main Card */}
        <SignUpForm />
      </div>
    </main>
  );
}

export default page;
