import { type Variants } from "framer-motion";

// Shared easing curve — smooth deceleration (custom cubic-bezier)
const ease = [0.22, 1, 0.36, 1] as const;

// フェードインアップ (セクション表示時)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

// スタガーコンテナ (子要素の連続アニメーション)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// スケールイン (カードの出現)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

// スライドイン左から
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease },
  },
};

// スライドイン右から
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease },
  },
};

// カードホバーエフェクト
export const cardHover = {
  rest: { scale: 1, boxShadow: "0 0 0 rgba(59, 130, 246, 0)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

// テキスト表示エフェクト (文字ごとのスタガー)
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease,
    },
  }),
};
