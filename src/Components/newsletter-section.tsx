import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Mail } from "lucide-react";
import { Icon } from "./Icons";

export function NewsletterSection() {
  return (
    <section className="w-full h-full overflow-hidden">
      {/* Background SVG using Icon system */}
      <div className="w-full mt-2 relative p-24 ">
        <div className="absolute bg-cover bg-center  bg-no-repeat inset-0 ">
          <Icon name="Background" className="w-full h-full object-cover" />
        </div>

        <div className="absolute z-50 -top-1 right-10">
          <Icon name="PapperPlain" className="z-50" />
        </div>

        {/* Section content */}
        <div className="container space-y-16 mx-auto text-center">
          <h2 className="text-2xl font-poppins md:text-3xl font-bold tracking-wide text-slate-700 max-w-3xl mx-auto leading-tight">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>

          <div className="max-w-lg mx-auto">
            <div className="flex gap-5">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Your email"
                  className="pl-10 py-8 border-slate-200 bg-white focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <Button
                style={{ backgroundColor: "#FF7D68" }}
                className="text-white px-12 py-8"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
