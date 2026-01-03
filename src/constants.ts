export enum Clef {
    TREBLE = 'treble',
    BASS = 'bass'
};

export const CLEF_RANGE = {
    [Clef.TREBLE]: {
        min: 48,
        max: 93
    },
    [Clef.BASS]: {
        min: 27,
        max: 73
    }
}

export enum Scale {
    C_Dur = 'C Dur',
    G_Dur = 'G Dur',
    D_Dur = 'D Dur',
    A_Dur = 'A Dur',
    E_Dur = 'E Dur',
    H_Dur = 'H Dur',
    Fis_Dur = 'Fis Dur',
    Des_Dur = 'Des Dur',
    As_Dur = 'As Dur',
    Es_Dur = 'Es Dur',
    B_Dur = 'B Dur',
    F_Dur = 'F Dur',
    a_Moll = 'a Moll',
    e_Moll = 'e Moll',
    h_Moll = 'h Moll',
    fis_Moll = 'fis Moll',
    cis_Moll = 'cis Moll',
    gis_Moll = 'gis Moll',
    dis_Moll = 'dis Moll',
    b_Moll = 'b Moll',
    f_Moll = 'f Moll',
    c_Moll = 'c Moll',
    g_Moll = 'g Moll',
    d_Moll = 'd Moll',
};

export const SCALE_NOTES = {
    [Scale.C_Dur]: [0, 2, 4, 5, 7, 9, 11],
    [Scale.G_Dur]: [7, 9, 11, 0, 2, 4, 6],
    [Scale.D_Dur]: [2, 4, 6, 7, 9, 11, 1],
    [Scale.A_Dur]: [9, 11, 1, 2, 4, 6, 8],
    [Scale.E_Dur]: [4, 6, 8, 9, 11, 1, 3],
    [Scale.H_Dur]: [11, 1, 3, 4, 6, 8, 10],
    [Scale.Fis_Dur]: [6, 8, 10, 11, 1, 3, 5],
    [Scale.Des_Dur]: [1, 3, 5, 6, 8, 10, 0],
    [Scale.As_Dur]: [8, 10, 0, 1, 3, 5, 7],
    [Scale.Es_Dur]: [3, 5, 7, 8, 10, 0, 2],
    [Scale.B_Dur]: [10, 0, 2, 3, 5, 7, 9],
    [Scale.F_Dur]: [5, 7, 9, 10, 0, 2, 4],
    
    [Scale.a_Moll]: [9, 11, 0, 2, 4, 5, 7],
    [Scale.e_Moll]: [4, 6, 7, 9, 11, 0, 2],
    [Scale.h_Moll]: [11, 1, 2, 4, 6, 7, 9],
    [Scale.fis_Moll]: [6, 8, 9, 11, 1, 2, 4],
    [Scale.cis_Moll]: [1, 3, 4, 6, 8, 9, 11],
    [Scale.gis_Moll]: [8, 10, 11, 1, 3, 4, 6],
    [Scale.dis_Moll]: [3, 5, 6, 8, 10, 11, 1],
    [Scale.b_Moll]: [10, 0, 1, 3, 5, 6, 8],
    [Scale.f_Moll]: [5, 7, 8, 10, 0, 1, 3],
    [Scale.c_Moll]: [0, 2, 3, 5, 7, 8, 10],
    [Scale.g_Moll]: [7, 9, 10, 0, 2, 3, 5],
    [Scale.d_Moll]: [2, 4, 5, 7, 9, 10, 0],
}

export enum Modifier {
    None = 'None',
    Sharp = 'Sharp',
    Flat = 'Flat',
    Natural = 'Natural'
}