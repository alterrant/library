import { getHelloUserString } from "../../lib";

type TitleProps = {
    name: string;
}

export const Title = ({ name }: TitleProps) => <span>{getHelloUserString(name)}</span>;
