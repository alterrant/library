import { Nullable } from '../../../shared/lib';

export type ImgSlideType = {
   url: string;
};

export type BookInfoTypes = BookBasicInfoType & BookDetails & BookComments & {
    id: Nullable<number>;
    rating: Nullable<number>;
    images: Nullable<{ url: string }[]>;
    booking: Nullable<{
        id: Nullable<number>,
        order: Nullable<boolean>,
        dateOrder: Nullable<string>,
        customerId: Nullable<number>,
        customerFirstName: Nullable<string>,
        customerLastName: Nullable<string>,
    }>,
    delivery: Nullable<{
        id: Nullable<number>,
        handed: Nullable<boolean>,
        dateHandedFrom: Nullable<string>,
        dateHandedTo: Nullable<string>,
        recipientId: Nullable<number>,
        recipientFirstName: Nullable<string>,
        recipientLastName: Nullable<string>,
    }>,
    histories: Nullable<{ id: number, userId: number }[]>;
};
export type BookBasicInfoType = {
    title: Nullable<string>;
    authors: Nullable<string[]>;
    description: Nullable<string>;
};
export type BookDetails = {
    publish: Nullable<string>;
    issueYear: Nullable<string>;
    pages: Nullable<string>;
    cover: Nullable<string>;
    format: Nullable<string>;
    categories: Nullable<string[]>;
    weight: Nullable<string>;
    ISBN: Nullable<string>;
    producer: Nullable<string>;
};
export type BookComments = {
    comments: Nullable<{
        id: Nullable<number>,
        rating: number,
        text: Nullable<string>,
        createdAt: string,
        user: {
            commentUserId: number,
            firstName: string,
            lastName: string,
            avatarUrl: Nullable<string>,
        },
    }[]>;
};

export type BookStateTypes = {
    isLoading: boolean;
    error: string;
    book: BookInfoTypes;
}
