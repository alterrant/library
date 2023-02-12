import { sections } from '.';

export type SectionListProps = {
    dataTestId?: string;
    section: typeof sections[number];
    categoryName: string;
    arrowClassName?: string;
};
