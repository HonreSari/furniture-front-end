import * as React from "react";
import { useState } from "react";
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 pr-10 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
        )}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        tabIndex={-1}
        className="absolute top-0 right-0 h-full px-3 py-1 hover:bg-transparent"
        onClick={() => setshowPassword((prev) => !prev)}
        disabled={props.value === "" || props.disabled}
      >
        {showPassword ? (
          <EyeNoneIcon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <EyeOpenIcon className="h-4 w-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}

export { PasswordInput };
