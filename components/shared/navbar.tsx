"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

// TODO: need to remove after backend is implemented
interface User {
  role: "admin" | "user";
  [key: string]: unknown;
}

const navItems = [
  { label: "Portal", href: "/portal" },
  { label: "About", href: "/about" },
  { label: "Insurance", href: "/insurance" },
  { label: "Accreditation", href: "/accreditation" },
  { label: "Funding", href: "/funding" },
  { label: "News", href: "/news" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Check auth status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/api/auth/me", {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(data.isAuthenticated);
        // Store user data including role
        if (data.user) {
          setUserData(data.user);
        }
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setIsLoggedIn(false);
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Listen for logout event from ActivityTracker
    const handleUserLoggedOut = () => {
      console.log("Received logout event from ActivityTracker");
      setIsLoggedIn(false);
      setUserData(null);
    };

    window.addEventListener("user-logged-out", handleUserLoggedOut);

    // Cleanup
    return () => {
      window.removeEventListener("user-logged-out", handleUserLoggedOut);
    };
  }, []);
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setIsLoggedIn(false);
        setUserData(null); // Clear user data
        setOpen(false);
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isLoading) {
    return (
      <header className='relative z-50 mx-5 mt-4'>
        <div className='bg-transparent pt-6'>
          <div className='max-w-450 mx-auto px-4'>
            <div className='flex items-center h-18 px-6 bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]'>
              <div className='h-10 w-25 bg-gray-200 rounded animate-pulse'></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className='relative z-50 mx-5 mt-4'>
      <div className='bg-transparent pt-6'>
        <div className='relative max-w-450 mx-auto md:px-4'>
          {/* MAIN BAR */}
          <div
            className='
              flex items-center
              h-20
              p-3
              md:px-6
              
              bg-white
              rounded-[18px]
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            '>
            {/* LOGO */}
            <Link href='/' className='flex items-center py-2'>
              <Image
                src='/Print_Transparent-2.svg'
                alt='Renewably UK'
                width={180}
                height={180}
                priority
                className='h-26 w-auto object-contain'
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className='hidden lg:flex items-center gap-8 ml-16'>
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      text-base
                      ${
                        isActive
                          ? "font-semibold text-(--text-accent)"
                          : "font-medium text-(--text-muted) hover:text-(--text-accent)"
                      }
                    `}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className='ml-auto hidden lg:flex items-center gap-4'>
              {isLoggedIn ? (
                <>
                  <Link
                    href={userData?.role === "admin" ? "/admin" : "/dashboard"}
                    className={`
        h-10
        px-5
        flex items-center
        rounded-[10px]
        text-[14px]
        font-medium
        ${
          pathname === (userData?.role === "admin" ? "/admin" : "/dashboard")
            ? "bg-[#0F172A] text-white"
            : "bg-gray-100 text-[#0F172A] hover:bg-gray-200"
        }
      `}>
                    {userData?.role === "admin"
                      ? "Admin Dashboard"
                      : "Dashboard"}
                  </Link>

                  <Button
                    onClick={handleLogout}
                    className='
        h-10
        px-5
        flex items-center
        rounded-[10px]
        bg-[#EF4444]
        text-white
        text-[14px]
        font-medium
        hover:bg-[#DC2626]
        transition-colors
      '>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href='/login'
                    className={`text-base ${
                      pathname === "/login"
                        ? "font-semibold text-(--text-accent)"
                        : "font-medium text-(--text-muted) hover:text-(--text-accent)"
                    }`}>
                    Login
                  </Link>

                  <Link
                    href='/signup'
                    className='
                      h-10
                      px-5
                      flex items-center
                      rounded-[10px]
                      bg-(--text-primary)
                      text-white
                      text-base
                      font-medium
                      hover:bg-(--text-primary-foreground)
                      transition-colors
                    '>
                    Sign up
                  </Link>
                </>
              )}
            </div>

            {/* MOBILE TOGGLE */}
            <Button
              onClick={() => setOpen(!open)}
              className='ml-auto lg:hidden text-(--text-accent)'
              aria-label='Toggle menu'>
              {open ? <X size={26} /> : <Menu size={26} />}
            </Button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div
              className='
                absolute
                left-4
                right-4
                top-[calc(100%+12px)]
                z-50
                bg-white
                rounded-[18px]
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                px-6
                py-6
                lg:hidden
              '>
              <nav className='flex flex-col gap-5'>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`text-[15px] ${
                        isActive
                          ? "font-semibold text-(--text-accent)"
                          : "font-medium text-(--text-muted) hover:text-(--text-primary)"
                      }`}>
                      {item.label}
                    </Link>
                  );
                })}

                <div className='pt-4 border-t flex flex-col gap-3'>
                  {isLoggedIn ? (
                    <>
                      <Link
                        href='/dashboard'
                        onClick={() => setOpen(false)}
                        className={`
                          h-11
                          flex items-center justify-center
                          rounded-[10px]
                          text-[14px]
                          font-medium
                          ${
                            pathname === "/dashboard"
                              ? "bg-(--text-accent) text-white"
                              : "bg-gray-100 text-(--text-accent)"
                          }
                        `}>
                        Dashboard
                      </Link>

                      <Button
                        onClick={() => {
                          setOpen(false);
                          handleLogout();
                        }}
                        className='
                          h-11
                          flex items-center justify-center
                          rounded-[10px]
                          bg-destructive
                          text-white
                          text-[14px]
                          font-medium
                          hover:bg-destructive-foreground
                          transition-colors
                        '>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link
                        href='/login'
                        onClick={() => setOpen(false)}
                        className={`text-[14px] text-center ${
                          pathname === "/login"
                            ? "font-semibold text-(--text-accent)"
                            : "font-medium text-(--text-muted) hover:text-(--text-primary)"
                        }`}>
                        Login
                      </Link>

                      <Link
                        href='/signup'
                        onClick={() => setOpen(false)}
                        className='
                          h-11
                          flex items-center justify-center
                          rounded-[10px]
                          bg-(--text-primary)
                          text-white
                          text-[14px]
                          font-medium
                          hover:bg-(--text-primary-foreground)
                          transition-colors
                        '>
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
