import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-corn')
export default class Corn extends WeElement<IconProps> {
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
        <g id="&amp;#231;&amp;#142;&amp;#137;&amp;#231;&amp;#177;&amp;#179;_corn">
          <path
            id="stroke3 (Stroke)"
            d="M16.5246 4.11021L17.5038 5.08941L19.5902 3.00476C19.2207 2.94277 18.8053 2.99898 18.3327 3.15729C17.7228 3.36155 17.1007 3.71562 16.5246 4.11021ZM20.9977 4.42572L18.918 6.50363L19.89 7.47562C20.2837 6.90148 20.637 6.2816 20.8414 5.67359C20.9989 5.20542 21.0561 4.79309 20.9977 4.42572ZM18.6616 9.07563L17.5032 7.91725L15.9294 9.48978L17.2666 10.828C17.5986 10.4111 17.9469 9.97363 18.2559 9.58546L18.6616 9.07563ZM16.0121 12.4022L14.5146 10.9034L12.4548 12.9614C13.4509 12.9075 14.4489 13.0014 15.3573 13.2236L16.0121 12.4022ZM17.3218 13.9678C17.7182 14.1751 18.0571 14.3896 18.3319 14.5822C18.6011 14.7708 18.8123 14.9409 18.9595 15.0671C19.0331 15.1303 19.0911 15.1827 19.1325 15.2213C19.1533 15.2406 19.1699 15.2564 19.1824 15.2685L19.1979 15.2836L19.2033 15.2889L19.2054 15.291L19.2063 15.2919L19.2071 15.2927L20.5811 16.6667L18.6772 16.984L18.6744 16.9847C18.6714 16.9853 18.6675 16.9862 18.6627 16.9874C18.6381 16.9933 18.5896 17.0058 18.517 17.0285C18.3718 17.0739 18.1301 17.16 17.7916 17.3151C17.1145 17.6254 16.0505 18.2119 14.6 19.2998C14.45 19.4123 14.2745 19.5497 14.0768 19.7044C13.0734 20.49 11.5006 21.7213 9.82029 22.3912C8.79099 22.8015 7.62428 23.0466 6.4386 22.8139C5.26564 22.5836 4.19192 21.9088 3.28527 20.7145C2.09096 19.8079 1.41616 18.7341 1.18589 17.5612C0.953135 16.3755 1.19824 15.2088 1.60857 14.1795C2.27844 12.4991 3.50973 10.9264 4.29534 9.92294C4.45007 9.7253 4.58752 9.54974 4.69998 9.39979C5.78787 7.94926 6.37433 6.88523 6.68466 6.20814C6.83978 5.86969 6.92591 5.62793 6.97128 5.48277C6.99397 5.41016 7.00649 5.36162 7.01236 5.33711C7.01393 5.33055 7.01503 5.32571 7.01572 5.32258L7.33304 3.41864L8.70708 4.79268L8.70877 4.79438L8.71085 4.79647L8.71614 4.80182L8.73114 4.81723C8.74307 4.82958 8.75878 4.84608 8.77792 4.86663C8.81616 4.90772 8.86815 4.96514 8.93082 5.03816C9.05599 5.18402 9.22475 5.39326 9.41213 5.66004C9.60312 5.93196 9.8159 6.26716 10.0221 6.65915L14.3778 3.21689C15.2029 2.55707 16.404 1.69406 17.6975 1.26084C19.0262 0.815796 20.6308 0.781808 21.9279 2.08584C23.2204 3.38528 23.1827 4.98598 22.7371 6.31104C22.303 7.60204 21.4411 8.79998 20.7816 9.62355L20.7805 9.62494L20.7777 9.62852L19.8207 10.831C19.2793 11.5111 18.6168 12.3432 18.1327 12.9505L17.3218 13.9678ZM14.9218 5.33577L13.165 6.72309L14.5158 8.07499L16.089 6.50304L14.9218 5.33577ZM13.101 9.48861L11.5856 7.97204L10.7701 8.6181C10.9971 9.53509 11.0931 10.5435 11.0382 11.5497L13.101 9.48861ZM9.62731 15.7867L5.36104 20.0529C5.8558 20.5288 6.35143 20.7586 6.82386 20.8513C7.50068 20.9842 8.25896 20.8606 9.07967 20.5334C10.4623 19.9822 11.7473 18.9814 12.7652 18.1885C12.9905 18.013 13.2027 17.8478 13.4 17.6998C14.6424 16.768 15.6511 16.1567 16.4263 15.7566C16.1258 15.5975 15.7835 15.4439 15.4053 15.3171C13.584 14.7065 11.1777 14.8398 9.62731 15.7867ZM3.94683 18.6387L8.2131 14.3725C9.16379 12.8158 9.29439 10.398 8.67535 8.57277C8.54999 8.20316 8.39918 7.86817 8.24317 7.57345C7.84305 8.34868 7.23178 9.35738 6.29998 10.5998C6.15201 10.7971 5.98672 11.0093 5.81125 11.2346C5.01841 12.2525 4.01759 13.5374 3.46639 14.9201C3.13921 15.7408 3.01557 16.4991 3.14844 17.1759C3.24118 17.6483 3.47094 18.144 3.94683 18.6387Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
