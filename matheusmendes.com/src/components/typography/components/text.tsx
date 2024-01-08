import React, { ElementType, ReactNode } from 'react'

const sizeVariants = {
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '4xl': '4xl',
  '5xl': '5xl',
  '6xl': '6xl',
  '7xl': '7xl',
  '8xl': '8xl',
  '9xl': '9xl',
} as const
type SizeVariant = keyof typeof sizeVariants
interface TextProps {
  as?: ElementType
  size?: SizeVariant
  className?: string
  children?: ReactNode
  color?: 'text-neutral-100' | 'text-neutral-300'
}

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'md',
  color = 'text-neutral-100',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = ' text-neutral-100 font-medium font-mono leading-loose'
  const sizeClasses = size ? `text-${sizeVariants[size]}` : 'text-md'
  const colorClasses = color ? `${color}` : 'text-neutral-100'

  const combinedClasses = `${baseClasses} ${sizeClasses} ${className} ${colorClasses}`

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  )
}

export default Text
