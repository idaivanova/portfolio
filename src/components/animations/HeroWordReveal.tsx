import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MarkerHighlight } from '../ui/MarkerHighlight';

/**
 * Word-by-word hero headline reveal.
 *
 * The concept mockup split the h1 into `.word` spans and transitioned each one
 * in with a 55ms stagger, then landed the marker highlight once the last word
 * had arrived (wordCount * 55ms + 360ms). This is the same behaviour expressed
 * as React nodes + framer-motion.
 */

const WORD_STAGGER = 0.055;
const MARK_SETTLE = 0.36;

export interface HeroWordRevealProps {
  text: string;
  className?: string;
  /** Seconds before the first word starts. */
  delay?: number;
  /** Word that gets the coral marker highlight. Matched case- and punctuation-insensitively. */
  markWord?: string;
  /** Seconds before the marker stroke draws in. Defaults to "after the last word". */
  markDelay?: number;
}

interface Token {
  text: string;
  isWord: boolean;
  isMarked: boolean;
}

function stripNonLetters(value: string): string {
  return value.replace(/[^\p{L}]/gu, '').toLocaleLowerCase();
}

function tokenize(text: string, markWord?: string): Token[] {
  const target = markWord ? stripNonLetters(markWord) : '';

  return text
    .split(/(\s+)/)
    .filter((part) => part !== '')
    .map((part) => {
      if (part.trim() === '') {
        return { text: part, isWord: false, isMarked: false };
      }
      return {
        text: part,
        isWord: true,
        isMarked: target !== '' && stripNonLetters(part) === target,
      };
    });
}

export function HeroWordReveal({
  text,
  className,
  delay = 0,
  markWord,
  markDelay,
}: HeroWordRevealProps) {
  const reduceMotion = useReducedMotion() === true;
  const tokens = tokenize(text, markWord);
  const wordCount = tokens.filter((token) => token.isWord).length;
  const resolvedMarkDelay = markDelay ?? delay + wordCount * WORD_STAGGER + MARK_SETTLE;

  let wordIndex = 0;

  return (
    <span className={className}>
      {tokens.map((token, index) => {
        if (!token.isWord) {
          return <Fragment key={`gap-${index}`}>{token.text}</Fragment>;
        }

        const currentWord = wordIndex;
        wordIndex += 1;

        return (
          <motion.span
            key={`word-${currentWord}-${index}`}
            className="inline-block"
            initial={
              reduceMotion
                ? { opacity: 1, y: 0, rotate: 0 }
                : { opacity: 0, y: '0.42em', rotate: 1.5 }
            }
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    delay: delay + currentWord * WORD_STAGGER,
                    ease: [0.18, 0.86, 0.24, 1],
                  }
            }
          >
            {token.isMarked ? (
              <MarkerHighlight delay={resolvedMarkDelay}>{token.text}</MarkerHighlight>
            ) : (
              token.text
            )}
          </motion.span>
        );
      })}
    </span>
  );
}
