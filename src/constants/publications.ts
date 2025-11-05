export type PublicationType = {
    title: string;
    authors: string[];
    conference: string;
    thumbnail: string;
    link?: string;
}

export const PUBLICATIONS: PublicationType[] = [
    // {
    //     title: 'Paper Title',
    //     authors: ['User1', 'User2', 'User3'],
    //     conference: 'Conference Name (Accepted)',
    //     thumbnail: '/publications/paper-thumbnail.jpg',
    //     link: '/publications/paper.pdf'
    // },
]