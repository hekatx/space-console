import { type VariantProps, cva } from "cva";

const loading = cva({
  base: "relative box-border inline-block h-6 w-6 animate-[flip_1s_linear_infinite] bg-amber-main",
  variants: {
    size: {
      small: "h-2 w-2",
      medium: "h-3 w-3",
      large: "h-6 w-6",
    },
    type: {
      square: "",
      long: "",
    },
  },

  compoundVariants: [
    {
      size: "small",
      type: "long",
      class: "h-1 w-6",
    },
    {
      size: "medium",
      type: "long",
      class: "!w-6",
    },
    {
      size: "large",
      type: "long",
      class: "!w-10",
    },
  ],
  defaultVariants: {
    size: "large",
    type: "square",
  },
});

type LoadingProps = VariantProps<typeof loading>;

export default function Loading({ size, type }: LoadingProps) {
  return <span className={loading({ size, type })} />;
}
