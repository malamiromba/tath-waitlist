"use client";

import { useState, useEffect } from "react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { joinWaitlist } from "@/app/actions/actions";
import { toast } from "sonner";

interface WaitlistFormProps {
   onSuccess: (count: number) => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
   const [state, formAction, isPending] = useActionState(joinWaitlist, null);
   const [email, setEmail] = useState("");

   useEffect(() => {
      if (state?.success) {
         console.log("Successfully added to waitlist:", state);
         toast.success(state.message);
         if (state.count) {
            onSuccess(state.count);
         }
         setEmail("");
      } else if (state?.success === false) {
         console.error("Failed to add to waitlist:", state);
         toast.error(state.message);
      }
   }, [state, toast, onSuccess]);

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Form submitted with email:", email);
      const formData = new FormData();
      formData.append("email", email);
      formAction(formData);
   };

   return (
      <form action={formAction} className="w-full space-y-4 mb-8">
         <div className="flex overflow-hidden rounded-xl bg-white/5 p-1 ring-1 ring-[#B307C6]/30 focus-within:ring-2 focus-within:ring-[#03DEFE]">
            <Input
               id="email"
               name="email"
               type="email"
               placeholder="Enter your email"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               aria-describedby="email-error"
               className="w-full text-xs md:text-sm border-0 bg-transparent text-white placeholder:text-gray-400 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
            />
            <Button
               type="submit"
               size="sm"
               disabled={isPending}
               className="bg-gradient-to-r from-[#330066] max-sm:hidden to-[#B307C6] hover:from-[#B307C6] hover:to-[#D90089] text-xs md:text-sm text-white font-semibold px-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none w-[120px] border-0 shadow-lg hover:shadow-xl"
            >
               {isPending ? (
                  <Loader2 className="h-5 w-5 animate-spin text-white" />
               ) : (
                  "Get Notified"
               )}
            </Button>
         </div>
         <Button
            type="submit"
            size="sm"
            disabled={isPending}
            className="bg-gradient-to-r max-sm:h-12 from-[#330066] to-[#B307C6] hover:from-[#B307C6] hover:to-[#D90089] text-xs md:text-sm text-white font-semibold px-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none w-full sm:hidden border-0 shadow-lg hover:shadow-xl"
         >
            {isPending ? (
               <Loader2 className="h-5 w-5 animate-spin text-white" />
            ) : (
               "Get Notified"
            )}
         </Button>
      </form>
   );
}
