import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './types'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-backtop')
export default class Backtop extends WeElement<IconProps> {
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

  static isLightDOM = true

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
          d="M4 4H20V6H4V4ZM12 7.58579L18.9142 14.5L17.5 15.9142L13 11.4142V21H11V11.4142L6.5 15.9142L5.08579 14.5L12 7.58579Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
