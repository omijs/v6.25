import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-data-base')
export default class DataBase extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 5C3.99999 4.99813 3.99651 4.98139 4.03507 4.91857C4.07752 4.84943 4.16408 4.74547 4.32624 4.61768C4.65642 4.35747 5.19616 4.0794 5.95227 3.82736C7.45402 3.32678 9.59229 3 12 3C14.4077 3 16.546 3.32678 18.0477 3.82736C18.8038 4.0794 19.3436 4.35747 19.6738 4.61768C19.8359 4.74547 19.9225 4.84943 19.9649 4.91857C20.004 4.98219 20 4.99871 20 5.00022C20 5.00016 20 5.00027 20 5.00022C20 5.00276 20.0026 5.0201 19.9649 5.08143C19.9225 5.15057 19.8359 5.25453 19.6738 5.38232C19.3436 5.64253 18.8038 5.9206 18.0477 6.17264C16.546 6.67322 14.4077 7 12 7C9.59229 7 7.45402 6.67322 5.95227 6.17264C5.19616 5.9206 4.65642 5.64253 4.32624 5.38232C4.16408 5.25453 4.07752 5.15057 4.03507 5.08143C3.99767 5.0205 4.00002 5.0027 4 5ZM20 7.5266V12.0002C20 12.0002 20 12.0003 20 12.0002C20 12.0014 19.9999 12.0057 19.9969 12.0153C19.9935 12.0264 19.9852 12.0485 19.9649 12.0814C19.9225 12.1506 19.8359 12.2545 19.6738 12.3823C19.3436 12.6425 18.8038 12.9206 18.0477 13.1726C16.546 13.6732 14.4077 14 12 14C9.59229 14 7.45402 13.6732 5.95227 13.1726C5.19616 12.9206 4.65642 12.6425 4.32624 12.3823C4.16408 12.2545 4.07752 12.1506 4.03507 12.0814C4.01483 12.0485 4.00645 12.0264 4.00305 12.0153C4.00018 12.0058 4.00001 12.0012 4 12V7.5266C4.40123 7.73177 4.84666 7.91229 5.31981 8.07C7.07541 8.6552 9.43715 9 12 9C14.5629 9 16.9246 8.6552 18.6802 8.07C19.1533 7.91229 19.5988 7.73177 20 7.5266ZM20 14.5266V19C20 19.0007 20.0001 19.0049 19.9969 19.0153C19.9935 19.0264 19.9852 19.0485 19.9649 19.0814C19.9225 19.1506 19.8359 19.2545 19.6738 19.3823C19.3436 19.6425 18.8038 19.9206 18.0477 20.1726C16.546 20.6732 14.4077 21 12 21C9.59229 21 7.45402 20.6732 5.95227 20.1726C5.19616 19.9206 4.65642 19.6425 4.32624 19.3823C4.16408 19.2545 4.07752 19.1506 4.03507 19.0814C4.01483 19.0485 4.00645 19.0264 4.00305 19.0153C3.9999 19.0049 4 19.0007 4 19V14.5266C4.40123 14.7318 4.84666 14.9123 5.31981 15.07C7.07541 15.6552 9.43715 16 12 16C14.5629 16 16.9246 15.6552 18.6802 15.07C19.1533 14.9123 19.5988 14.7318 20 14.5266ZM2 19C2 19.8519 2.51889 20.5044 3.08829 20.9531C3.66896 21.4108 4.44724 21.7791 5.31981 22.07C7.07541 22.6552 9.43715 23 12 23C14.5629 23 16.9246 22.6552 18.6802 22.07C19.5528 21.7791 20.331 21.4108 20.9117 20.9531C21.4811 20.5044 22 19.8519 22 19V5C22 4.14805 21.4811 3.49559 20.9117 3.04685C20.331 2.58923 19.5528 2.22085 18.6802 1.93C16.9246 1.3448 14.5629 1 12 1C9.43715 1 7.07541 1.3448 5.31981 1.93C4.44724 2.22085 3.66896 2.58923 3.08829 3.04685C2.51889 3.49559 2 4.14805 2 5V19Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}