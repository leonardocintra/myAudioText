import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquareText, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <MessageSquareText className="h-6 w-6 text-primary" />
              <span className="text-lg">AudioTranscriber</span>
            </Link>
            <p className="text-muted-foreground">
              Instant audio-to-text conversion for modern communication.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#features" className="text-muted-foreground hover:text-primary">Features</Link></li>
                <li><Link href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link href="#how-it-works" className="text-muted-foreground hover:text-primary">How it Works</Link></li>
                <li><Link href="#faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold">Stay Updated</h3>
              <p className="mt-2 text-sm text-muted-foreground">Get updates on new features and promotions.</p>
              <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" aria-label="Email for newsletter"/>
                <Button type="submit" className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AudioTranscriber. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
