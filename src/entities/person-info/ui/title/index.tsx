import { getHelloUserString } from '../../utils';

type TitleProps = {
    name: string;
};

export const Title = ({ name }: TitleProps) => <span>{getHelloUserString(name)}</span>;
