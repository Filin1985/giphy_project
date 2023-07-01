export interface IIconProps {
  size?: '24' | '18'
  className?: string
  onClick?:
    | (() => void)
    | ((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void)
}
