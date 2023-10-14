import { WeElement } from 'omi';
interface Props {
    alt?: string;
    src?: string;
    size?: number;
    square?: boolean;
    icon?: string;
    color?: string;
    backgroundColor?: string;
}
export default class Avatar extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        size: number;
        color: string;
        backgroundColor: string;
    };
    static propTypes: {
        alt: StringConstructor;
        src: StringConstructor;
        size: NumberConstructor;
        square: BooleanConstructor;
        icon: StringConstructor;
        color: StringConstructor;
        backgroundColor: StringConstructor;
    };
    _iconTag: any;
    render(props: any): JSX.Element;
}
export {};
