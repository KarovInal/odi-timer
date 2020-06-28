export enum EControl {
    play = 'play',
    pause = 'pause',
    replay = 'replay',
    finished = 'finished',
}

export enum EStatus {
    great = 'great',
    normal ='normal',
    bad = 'bad',
    none = 'none',
}

export interface ITaskItem {
    id?: string;
    title?: string;
    status?: EStatus;
    control?: EControl;
    finalTime?: number;
    optimisticTime?: number;
    pessimisticTime?: number;
}
