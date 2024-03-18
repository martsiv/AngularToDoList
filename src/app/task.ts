export interface ITask {
    id: number;
    name: string;
    isChecked: boolean;
    isImportant: boolean;
    expirationDate?: Date;
}

export const TASKS: ITask[] = [
    { id: 1, name: "Hi the gym", isChecked: false, isImportant: false, expirationDate: new Date(2024, 3, 19) },
    { id: 2, name: "Pay bills", isChecked: true, isImportant: false, expirationDate: new Date(2024, 3, 23) },
    { id: 3, name: "Meet John", isChecked: false, isImportant: false },
    { id: 5, name: "Buy eggs", isChecked: false, isImportant: false },
    { id: 8, name: "Read a book", isChecked: true, isImportant: true  },
    { id: 9, name: "Organize office", isChecked: false, isImportant: true },
    { id: 13, name: "Eat dinner", isChecked: false, isImportant: false, expirationDate: new Date(2024, 3, 25) },
]