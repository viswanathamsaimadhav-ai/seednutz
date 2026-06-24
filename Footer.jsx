import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-3xl tracking-wider text-foreground">
              SEED<span className="text-primary">NUTZ</span>
            </Link>
            <p className="mt-4 text-muted-foreground font-body text-sm leading-relaxed max-w-sm">
              Crafting premium nut and seed products with uncompromising quality. 
              From source to shelf, every kernel is selected for peak nutrition and flavor.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Navigate
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Connect
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>info@seednutz.com</p>
              <p>+1 (555) 234-5678</p>
              <div className="flex gap-4 mt-4">
                {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                  <span
                    key={social}
                    className="text-xs tracking-widest uppercase hover:text-primary transition-colors cursor-pointer"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} SEEDNUTZ. ALL RIGHTS RESERVED.
          </p>
          <div className="h-px w-16 bg-primary hidden md:block" />
        </div>
      </div>
    </footer>
  );
}