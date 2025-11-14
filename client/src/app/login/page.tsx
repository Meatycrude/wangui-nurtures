import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-indigo-50 py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 font-['Playfair_Display']">
            Welcome Back
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Log in to access your personal wellness dashboard.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-emerald-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-emerald-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
