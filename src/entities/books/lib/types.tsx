export type BooksTypes = {
    issueYear: string;
    rating: number;
    title: string;
    authors: string[];
    image: { url: string } | null;
    categories: string[];
    id: number;
    booking: {
        id: number;
        order: boolean;
        dateOrder: string;
        customerId: number;
        customerFirstName: string;
        customerLastName: string;
    } | null,
    delivery: {
        id: number;
        handed: boolean;
        dateHandedFrom: string;
        dateHandedTo: string;
        recipientId: number;
        recipientFirstName: string;
        recipientLastName: string;
    },
    histories: {
        id: number;
        userId: number;
    }[],
}[];

export type BooksStateTypes = {
    isLoading: boolean;
    error: string;
    books: BooksTypes;
};
