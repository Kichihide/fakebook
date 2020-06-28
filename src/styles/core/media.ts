import media from 'styled-media-query';
import { ThemedStyledProps, InterpolationValue, FlattenInterpolation } from 'styled-components';

type InterpolationFunction<Props, Theme> = (
    props: ThemedStyledProps<Props, Theme>
) => InterpolationValue | FlattenInterpolation<ThemedStyledProps<Props, Theme>>;

type GeneratorFunction<Props, Theme> = (
    strings: TemplateStringsArray,
    ...interpolations: (
        | InterpolationValue
        | InterpolationFunction<Props, Theme>
        | FlattenInterpolation<ThemedStyledProps<Props, Theme>>
    )[]
) => any;

const device: { [v: string]: GeneratorFunction<unknown, any> } = {
    pc: (...args) => media.greaterThan('medium')(...args),
    sp: (...args) => media.lessThan('medium')(...args),
};

export default device;
