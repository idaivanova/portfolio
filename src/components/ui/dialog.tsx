// ============================================
// Dialog Component
// Modal dialog for image lightboxes and overlays
// ============================================

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { IconButton } from '../ui/button';

// Dialog/DialogTrigger props
function Dialog({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function DialogTrigger({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  overlayClassName?: string;
}

// DialogContent - the actual modal content
function DialogContent({
  children,
  className,
  showCloseButton = true,
  onClose,
  overlayClassName,
}: DialogContentProps) {
  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      }
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'absolute inset-0 bg-navy-darkest/90 backdrop-blur-sm',
          overlayClassName
        )}
        onClick={onClose}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={cn(
          'relative z-10 w-full max-w-4xl max-h-[90vh] overflow-auto',
          className
        )}
      >
        {showCloseButton && (
          <IconButton
            icon={<X className="w-5 h-5" />}
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 bg-navy-dark/50 text-cream hover:bg-navy-mid hover:text-cream z-20"
          />
        )}
        {children}
      </motion.div>
    </div>
  );
}

interface DialogImageProps {
  src: string;
  alt: string;
  className?: string;
}

function DialogImage({ src, alt, className }: DialogImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'w-full h-auto object-contain max-h-[85vh]',
        className
      )}
    />
  );
}

interface DialogCaptionProps {
  children: React.ReactNode;
  className?: string;
}

function DialogCaption({ children, className }: DialogCaptionProps) {
  return (
    <div className={cn(
      'mt-4 text-center text-cream/80',
      className
    )}>
      {children}
    </div>
  );
}

// ============================================
// Image Lightbox Component
// Convenience component for image galleries
// ============================================

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  defaultIndex?: number;
}

function ImageLightbox({ images, defaultIndex = 0 }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = React.useState(defaultIndex);
  const [isOpen, setIsOpen] = React.useState(false);

  const currentImage = images[currentIndex];

  const goToPrevious = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const goToNext = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  // Handle keyboard navigation when open
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToPrevious, goToNext]);

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
            className="relative aspect-video overflow-hidden rounded-lg group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy-darkest/0 group-hover:bg-navy-darkest/30 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-navy-darkest/95 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-5xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <IconButton
                icon={<X className="w-6 h-6" />}
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close lightbox"
                className="absolute -top-12 right-0 text-cream hover:bg-cream/10"
              >
                Close
              </IconButton>

              {/* Main image */}
              <DialogImage
                src={currentImage.src}
                alt={currentImage.alt}
              />

              {/* Caption */}
              {currentImage.caption && (
                <DialogCaption>{currentImage.caption}</DialogCaption>
              )}

              {/* Navigation arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 flex items-center justify-center text-cream/70 hover:text-cream hover:bg-cream/10 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 flex items-center justify-center text-cream/70 hover:text-cream hover:bg-cream/10 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    →
                  </button>

                  {/* Counter */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-cream/60 text-sm">
                    {currentIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogImage,
  DialogCaption,
  ImageLightbox,
};
