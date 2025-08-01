import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  }

  return (
    <div className={cn("animate-spin rounded-full border-2 border-gray-300 border-t-purple-600", sizeClasses[size], className)} />
  )
}

interface LoadingStateProps {
  message?: string
  progress?: number
  className?: string
}

export function LoadingState({ message = "Loading...", progress, className }: LoadingStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8", className)}>
      <LoadingSpinner size="lg" className="mb-4" />
      <p className="text-gray-600 mb-2">{message}</p>
      {progress !== undefined && (
        <div className="w-full max-w-xs bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  )
}