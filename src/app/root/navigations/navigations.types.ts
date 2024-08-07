export interface AuthFailedRedirection {
    role: string;
    loggedInredirectTo: string;
    loggedOutredirectTo: string;
}

export interface Navigation {
    children?: Navigation[]
    icon?: string;
    iconType?: string;
    id?: string;
    isVisible?: boolean;
    title?: string;
    translate?: string;
    type: 'collapsable' | 'item';
    url?: string;
}