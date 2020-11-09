export interface IndustryIdentifierModel {
    type: string;
    identifier: string;
}

export interface ReadingModesModel {
    text: boolean;
    image: boolean;
}

export interface PanelizationSummaryModel {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface ImageLinksModel {
    smallThumbnail: string;
    thumbnail: string;
}

export interface VolumeInfoModel {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifierModel[];
    readingModes: ReadingModesModel;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummaryModel;
    imageLinks: ImageLinksModel;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface SaleInfoModel {
    country: string;
    saleability: string;
    isEbook: boolean;
}

export interface EpubModel {
    isAvailable: boolean;
}

export interface PdfModel {
    isAvailable: boolean;
}

export interface AccessInfoModel {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: EpubModel;
    pdf: PdfModel;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface SearchInfoModel {
    textSnippet: string;
}

export interface BookModel {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfoModel;
    saleInfo: SaleInfoModel;
    accessInfo: AccessInfoModel;
    searchInfo: SearchInfoModel;
}

export interface SearchBooksResModel {
    kind: string;
    totalItems: number;
    items: Array<BookModel>
}
