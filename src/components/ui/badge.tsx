
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        saffron: "border-transparent bg-hindserve-saffron text-white hover:bg-hindserve-saffron/80",
        green: "border-transparent bg-hindserve-green text-white hover:bg-hindserve-green/80",
        maroon: "border-transparent bg-hindserve-maroon text-white hover:bg-hindserve-maroon/80",
        navy: "border-transparent bg-hindserve-navy text-white hover:bg-hindserve-navy/80",
        gold: "border-transparent bg-hindserve-gold text-hindserve-navy hover:bg-hindserve-gold/80",
        purple: "border-transparent bg-hindserve-purple text-white hover:bg-hindserve-purple/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
