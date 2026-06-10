import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  children: ReactNode
  external?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-judo-brown hover:bg-judo-brown-light text-judo-white border border-judo-brown',
  secondary:
    'bg-judo-graphite hover:bg-judo-graphite-light text-judo-white border border-judo-brown/15',
  outline:
    'bg-transparent hover:bg-judo-purple/10 text-judo-white border border-judo-purple/30',
  ghost: 'bg-transparent hover:bg-judo-brown/10 text-judo-white border border-transparent',
}

export function Button({
  variant = 'primary',
  href,
  children,
  external,
  className = '',
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judo-purple disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  )
}
