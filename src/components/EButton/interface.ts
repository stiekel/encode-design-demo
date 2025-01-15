export interface IBaseProps {
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

export interface IEButtonProps extends IBaseProps {
  /**
   * 按钮的类型
   */
  label?: string;
  /**
   * 点击按钮的回调函数
   */
  onClick?: () => void;
  /**
   * 按钮的大小
   */
  size?: "small" | "medium" | "large";
  /**
   * 按钮是否禁用
   */
  disabled?: boolean;
}
