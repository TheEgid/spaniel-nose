
export interface ISegment {
    [x: string]: number,
    Сегмент: "Нецелевой" | "Стандартный" | "Целевой",
    ОКВЭД: string,
    Наименование: string,
    Комментарий: string,
    code: string
}

export interface IInputSelector {
    ПорядковыйНомер: string,
    Поинт: string,
    Пункт: string
}

export interface IParamsDefineCalc {
    bldClassTable: IHandbookPlain[],
    territoryTable: IHandbookPlain[],
    segmentsTable: ISegment[],
    categoryTable: string[][],
    definedBldClass: IBldClass
}

export interface ICalcParams {
    results: ICalcResult[],
    contractParams: string,
    objectParams: string[]
}

export interface IErrorResponse {
    statusCode: number,
    message: string,
    error: string
}

export interface ITransformCategories {
    catName: string,
    catCode: number,
    catLetter: string
}

export interface IAuthFormInput {
    username: string,
    password: string,
    role?: string
}

export interface IUser {
    accessToken: string,
    refreshToken: string,
    id: string,
    isEmailConfirmed: boolean,
    error?: string,
    email: string,
    role: string
}

export interface ILoginResponse {
    accessToken: string,
    refreshToken: string
}

export interface IParamsWithFormValues {
    formValues: any,
    categoryCascade: string[],
    openAreaLetters: string[],
    bldClassLetters: string[],
    isOpenAreaArray: boolean[],
    bldClassTable: IHandbookPlain[],
    сategoryTable: string[][]
}

export interface IRegulatedParams {
    insuredContract: any,
    insuredObjects: any[],
    isTerror: boolean
}

export interface IRegisteredFieldsForCard {
    calcId: number,
    author: string,
    createdAt: string,
    updatedAt: string,
    companyName: string,
    resultCalc: string,
    objectExtraContent: string,
    objectMainContent: string,
    resultComment: string
}

export interface IHandbookPlain {
    name: string,
    code: string
}

// GEO
export interface IGeo {
    latitude: string, // широта
    longitude: string, // долгота
    fileName: string,
    miniFileName: string,
    folderName: string
}

export interface IReq {
    requisites: IKonturRequsitesState,
    segment: string
}

export type TGeoRequest = IGeo | boolean;

export interface IMapComponentProps {
    coordinates: number[][],
    names: string[],
    miniNames: string[]
}

export type TUnderwriter = "согласовано" | "требуется согласование" | false;

export interface ICalcResult {
    underwriter?: TUnderwriter,
    currentDate?: string,
    amount?: string,
    award?: string,
    clarifyAward?: string,
    tarif?: string,
    error?: string,
    specialty?: string
}
