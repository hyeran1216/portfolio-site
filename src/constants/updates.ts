export type UpdateCategory = 'paper' | 'project' | 'work';

export type UpdateType = {
    title: string;
    date: string;
    link: string;
    category: UpdateCategory;
}

export const UPDATES: UpdateType[] = [
    // {
    //     title: "Short explanation of the update",
    //     date: "Month Year",
    //     link: "link to the update",
    //     category: "work or project or paper"
    // }
]