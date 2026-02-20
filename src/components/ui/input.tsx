// ============================================
// Input Component
// Form input with label and error states
// ============================================

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Input variants
const inputVariants = cva(
  // Base styles
  'flex w-full rounded-md border bg-navy-dark text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy-darkest disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200',
  {
    variants: {
      variant: {
        // Default - navy border
        default: 'border-navy-mid hover:border-cream/30',
        
        // Error state
        error: 'border-red-500 focus:ring-red-500',
        
        // Success state
        success: 'border-green-500 focus:ring-green-500',
        
        // Ghost - no border
        ghost: 'border-transparent bg-transparent focus:bg-navy-dark/50',
      },
      inputSize: {
        sm: 'h-9 px-3 py-1 text-sm',
        md: 'h-11 px-4 py-2 text-base',
        lg: 'h-14 px-5 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

// Label styles
const labelVariants = cva(
  'text-sm font-medium text-cream/80 mb-1.5 block',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

// Input wrapper props
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  helperText?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  labelSize?: 'sm' | 'md' | 'lg';
}

// Input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      label,
      error,
      helperText,
      leftElement,
      rightElement,
      labelSize,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();
    const hasError = Boolean(error);
    
    // Determine variant based on error
    const inputVariant = hasError ? 'error' : variant;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={labelVariants({ size: labelSize })}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftElement && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/50">
              {leftElement}
            </div>
          )}
          
          <input
            id={inputId}
            className={cn(
              inputVariants({ variant: inputVariant, inputSize, className }),
              leftElement && 'pl-10',
              rightElement && 'pr-10'
            )}
            ref={ref}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          
          {rightElement && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/50">
              {rightElement}
            </div>
          )}
        </div>

        {hasError && (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
        
        {helperText && !hasError && (
          <p
            id={`${inputId}-helper`}
            className="mt-1.5 text-sm text-cream/50"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// ============================================
// Textarea Component
// Multi-line text input
// ============================================

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId();
    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-cream/80 mb-1.5 block"
          >
            {label}
          </label>
        )}
        
        <textarea
          id={textareaId}
          className={cn(
            'flex min-h-[120px] w-full rounded-md border bg-navy-dark text-cream placeholder:text-cream/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy-darkest disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200',
            hasError
              ? 'border-red-500 focus:ring-red-500'
              : 'border-navy-mid hover:border-cream/30',
            className
          )}
          ref={ref}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          {...props}
        />

        {hasError && (
          <p
            id={`${textareaId}-error`}
            className="mt-1.5 text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
        
        {helperText && !hasError && (
          <p
            id={`${textareaId}-helper`}
            className="mt-1.5 text-sm text-cream/50"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Input, Textarea, inputVariants };
